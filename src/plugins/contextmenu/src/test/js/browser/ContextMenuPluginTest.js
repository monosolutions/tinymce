import { ApproxStructure } from '@ephox/agar';
import { GeneralSteps } from '@ephox/agar';
import { Logger } from '@ephox/agar';
import { Mouse } from '@ephox/agar';
import { Pipeline } from '@ephox/agar';
import { Step } from '@ephox/agar';
import { TinyApis } from '@ephox/mcagar';
import { TinyLoader } from '@ephox/mcagar';
import { TinyUi } from '@ephox/mcagar';
import { Hierarchy } from '@ephox/sugar';
import { Element } from '@ephox/sugar';
import ContextMenuPlugin from 'tinymce/plugins/contextmenu/Plugin';
import ModernTheme from 'tinymce/themes/modern/Theme';
import { UnitTest } from '@ephox/refute';

UnitTest.asynctest('browser.tinymce.plugins.contextmenu.ContextMenuPluginTest', function() {
  var success = arguments[arguments.length - 2];
  var failure = arguments[arguments.length - 1];

  ModernTheme();
  ContextMenuPlugin();

  var sContextMenuClickInMiddleOf = function (editor, elementPath) {
    return Step.sync(function () {
      var element = Hierarchy.follow(Element.fromDom(editor.getBody()), elementPath).getOrDie().dom();
      var rect = element.getBoundingClientRect();
      var clientX = (rect.left + rect.width / 2), clientY = (rect.top + rect.height / 2);

      editor.fire('mousedown', { target: element, clientX: clientX, clientY: clientY, button: 2 });
      editor.fire('mouseup', { target: element, clientX: clientX, clientY: clientY, button: 2 });
      editor.fire('contextmenu', { target: element, clientX: clientX, clientY: clientY });
    });
  };

  TinyLoader.setup(function (editor, onSuccess, onFailure) {
    var tinyUi = TinyUi(editor);
    var tinyApis = TinyApis(editor);

    Pipeline.async({}, [
      Logger.t('Context menu click on text', GeneralSteps.sequence([
        tinyApis.sSetContent('<p>a</p>'),
        tinyApis.sSetSelection([0, 0], 0, [0, 0], 1),
        Mouse.sContextMenuOn(Element.fromDom(editor.getBody()), 'p'),
        tinyUi.sWaitForUi('wait for context', 'div.mce-contextmenu'),
        tinyUi.sClickOnUi('click on link in context', 'div.mce-contextmenu span:contains("Bold")'),
        tinyApis.sAssertContentStructure(ApproxStructure.build(function (s, str) {
          return s.element('body', {
            children: [
              s.element('p', {
                children: [
                  s.element('strong', {
                    children: [
                      s.text(str.is('a'))
                    ]
                  })
                ]
              })
            ]
          });
        }))
      ])),

      Logger.t('Do not select image if the context menu click is inside the currently selected range', GeneralSteps.sequence([
        tinyApis.sSetContent('<p>a<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" width="100" height="100"></p>'),
        tinyApis.sSetSelection([0, 0], 0, [0], 2),
        sContextMenuClickInMiddleOf(editor, [0, 1]),
        tinyApis.sAssertSelection([0, 0], 0, [0], 2)
      ]))
    ], onSuccess, onFailure);
  }, {
    plugins: 'contextmenu',
    toolbar: 'contextmenu',
    contextmenu: 'bold',
    skin_url: '/project/src/skins/lightgray/dist/lightgray'
  }, success, failure);
});

