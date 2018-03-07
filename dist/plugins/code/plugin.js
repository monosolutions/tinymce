(function () {
var code = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(DOMUtils.DOM.getViewPort().h - 200, 500));
  };
  var $_fyja8n9ajegz3vrw = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_6zrl0t9cjegz3vry = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_fyja8n9ajegz3vrw.getMinWidth(editor);
    var minHeight = $_fyja8n9ajegz3vrw.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_6zrl0t9cjegz3vry.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_6zrl0t9cjegz3vry.getContent(editor));
  };
  var $_65l85p99jegz3vru = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_65l85p99jegz3vru.open(editor);
    });
  };
  var $_2e3ywo98jegz3vrt = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_65l85p99jegz3vru.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_65l85p99jegz3vru.open(editor);
      }
    });
  };
  var $_69rryj9djegz3vrz = { register: register$1 };

  PluginManager.add('code', function (editor) {
    $_2e3ywo98jegz3vrt.register(editor);
    $_69rryj9djegz3vrz.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
