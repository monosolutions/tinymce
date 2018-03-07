(function () {
var mobile = (function () {
  'use strict';

  var noop = function () {
  };
  var noarg = function (f) {
    return function () {
      return f();
    };
  };
  var compose = function (fa, fb) {
    return function () {
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };
  var tripleEquals = function (a, b) {
    return a === b;
  };
  var curry = function (f) {
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };
  var call = function (f) {
    f();
  };
  var never = constant(false);
  var always = constant(true);
  var $_b84g4ownjegz40jb = {
    noop: noop,
    noarg: noarg,
    compose: compose,
    constant: constant,
    identity: identity,
    tripleEquals: tripleEquals,
    curry: curry,
    not: not,
    die: die,
    apply: apply,
    call: call,
    never: never,
    always: always
  };

  var $_equp8wmjegz40j7 = {
    contextmenu: $_b84g4ownjegz40jb.constant('contextmenu'),
    touchstart: $_b84g4ownjegz40jb.constant('touchstart'),
    touchmove: $_b84g4ownjegz40jb.constant('touchmove'),
    touchend: $_b84g4ownjegz40jb.constant('touchend'),
    gesturestart: $_b84g4ownjegz40jb.constant('gesturestart'),
    mousedown: $_b84g4ownjegz40jb.constant('mousedown'),
    mousemove: $_b84g4ownjegz40jb.constant('mousemove'),
    mouseout: $_b84g4ownjegz40jb.constant('mouseout'),
    mouseup: $_b84g4ownjegz40jb.constant('mouseup'),
    mouseover: $_b84g4ownjegz40jb.constant('mouseover'),
    focusin: $_b84g4ownjegz40jb.constant('focusin'),
    keydown: $_b84g4ownjegz40jb.constant('keydown'),
    input: $_b84g4ownjegz40jb.constant('input'),
    change: $_b84g4ownjegz40jb.constant('change'),
    focus: $_b84g4ownjegz40jb.constant('focus'),
    click: $_b84g4ownjegz40jb.constant('click'),
    transitionend: $_b84g4ownjegz40jb.constant('transitionend'),
    selectstart: $_b84g4ownjegz40jb.constant('selectstart')
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;
        r = f.apply(null, arguments);
      }
      return r;
    };
  };
  var $_81htnewpjegz40jh = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_7f1t2uwsjegz40jy = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_7f1t2uwsjegz40jy.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_3awfvvwrjegz40ju = {
    unknown: unknown$1,
    nu: nu$1,
    edge: $_b84g4ownjegz40jb.constant(edge),
    chrome: $_b84g4ownjegz40jb.constant(chrome),
    ie: $_b84g4ownjegz40jb.constant(ie),
    opera: $_b84g4ownjegz40jb.constant(opera),
    firefox: $_b84g4ownjegz40jb.constant(firefox),
    safari: $_b84g4ownjegz40jb.constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_7f1t2uwsjegz40jy.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_cmid6owtjegz40k3 = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_b84g4ownjegz40jb.constant(windows),
    ios: $_b84g4ownjegz40jb.constant(ios),
    android: $_b84g4ownjegz40jb.constant(android),
    linux: $_b84g4ownjegz40jb.constant(linux),
    osx: $_b84g4ownjegz40jb.constant(osx),
    solaris: $_b84g4ownjegz40jb.constant(solaris),
    freebsd: $_b84g4ownjegz40jb.constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: $_b84g4ownjegz40jb.constant(isiPad),
      isiPhone: $_b84g4ownjegz40jb.constant(isiPhone),
      isTablet: $_b84g4ownjegz40jb.constant(isTablet),
      isPhone: $_b84g4ownjegz40jb.constant(isPhone),
      isTouch: $_b84g4ownjegz40jb.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_b84g4ownjegz40jb.constant(iOSwebview)
    };
  }

  var never$1 = $_b84g4ownjegz40jb.never;
  var always$1 = $_b84g4ownjegz40jb.always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop = function () {
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      or: id,
      orThunk: call,
      map: none,
      ap: none,
      each: noop,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: $_b84g4ownjegz40jb.constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };
  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };
  var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }
    return r;
  };
  var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
      var s = array.slice(i, i + size);
      r.push(s);
    }
    return r;
  };
  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i, xs) ? pass : fail;
      arr.push(x);
    }
    return {
      pass: pass,
      fail: fail
    };
  };
  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };
  var groupBy = function (xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var type = f(x);
        if (type !== wasType) {
          r.push(group);
          group = [];
        }
        wasType = type;
        group.push(x);
      }
      if (group.length !== 0) {
        r.push(group);
      }
      return r;
    }
  };
  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find$1 = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };
  var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) {
      return x === a2[i];
    });
  };
  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };
  var difference = function (a1, a2) {
    return filter(a1, function (x) {
      return !contains(a2, x);
    });
  };
  var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }
    return r;
  };
  var pure = function (x) {
    return [x];
  };
  var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };
  var head = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
  };
  var $_353rcfwwjegz40kh = {
    map: map,
    each: each,
    eachr: eachr,
    partition: partition,
    filter: filter,
    groupBy: groupBy,
    indexOf: indexOf,
    foldr: foldr,
    foldl: foldl,
    find: find$1,
    findIndex: findIndex,
    flatten: flatten,
    bind: bind,
    forall: forall,
    exists: exists,
    contains: contains,
    equal: equal,
    reverse: reverse,
    chunk: chunk,
    difference: difference,
    mapToObject: mapToObject,
    pure: pure,
    sort: sort,
    range: range,
    head: head,
    last: last
  };

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_353rcfwwjegz40kh.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_7f1t2uwsjegz40jy.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_7f1t2uwsjegz40jy.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_1s46rawvjegz40ke = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var addToStart = function (str, prefix) {
    return prefix + str;
  };
  var addToEnd = function (str, suffix) {
    return str + suffix;
  };
  var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
  };
  var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
  };
  var $_1dj2mhx0jegz40ky = {
    addToStart: addToStart,
    addToEnd: addToEnd,
    removeFromStart: removeFromStart,
    removeFromEnd: removeFromEnd
  };

  var first = function (str, count) {
    return str.substr(0, count);
  };
  var last$1 = function (str, count) {
    return str.substr(str.length - count, str.length);
  };
  var head$1 = function (str) {
    return str === '' ? Option.none() : Option.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? Option.none() : Option.some(str.substring(1));
  };
  var $_d81up8x1jegz40kz = {
    first: first,
    last: last$1,
    head: head$1,
    tail: tail
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };
  var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
      var t = typeof a;
      return t === 'string' || t === 'number';
    };
    return str.replace(/\${([^{}]*)}/g, function (a, b) {
      var value = obj[b];
      return isStringOrNumber(value) ? value : a;
    });
  };
  var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? $_1dj2mhx0jegz40ky.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_1dj2mhx0jegz40ky.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_1dj2mhx0jegz40ky.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_1dj2mhx0jegz40ky.addToEnd(str, prefix);
  };
  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_d81up8x1jegz40kz.head(str).bind(function (head) {
      return $_d81up8x1jegz40kz.tail(str).map(function (tail) {
        return head.toUpperCase() + tail;
      });
    }).getOr(str);
  };
  var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
  };
  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
  };
  var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
  };
  var $_du558bwzjegz40kv = {
    supplant: supplant,
    startsWith: startsWith,
    removeLeading: removeLeading,
    removeTrailing: removeTrailing,
    ensureLeading: ensureLeading,
    ensureTrailing: ensureTrailing,
    endsWith: endsWith,
    contains: contains$1,
    trim: trim,
    lTrim: lTrim,
    rTrim: rTrim,
    capitalize: capitalize
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return $_du558bwzjegz40kv.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_du558bwzjegz40kv.contains(uastring, 'edge/') && $_du558bwzjegz40kv.contains(uastring, 'chrome') && $_du558bwzjegz40kv.contains(uastring, 'safari') && $_du558bwzjegz40kv.contains(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return $_du558bwzjegz40kv.contains(uastring, 'chrome') && !$_du558bwzjegz40kv.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_du558bwzjegz40kv.contains(uastring, 'msie') || $_du558bwzjegz40kv.contains(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return ($_du558bwzjegz40kv.contains(uastring, 'safari') || $_du558bwzjegz40kv.contains(uastring, 'mobile/')) && $_du558bwzjegz40kv.contains(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return $_du558bwzjegz40kv.contains(uastring, 'iphone') || $_du558bwzjegz40kv.contains(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_6daa9qwyjegz40kr = {
    browsers: $_b84g4ownjegz40jb.constant(browsers),
    oses: $_b84g4ownjegz40jb.constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_6daa9qwyjegz40kr.browsers();
    var oses = $_6daa9qwyjegz40kr.oses();
    var browser = $_1s46rawvjegz40ke.detectBrowser(browsers, userAgent).fold($_3awfvvwrjegz40ju.unknown, $_3awfvvwrjegz40ju.nu);
    var os = $_1s46rawvjegz40ke.detectOs(oses, userAgent).fold($_cmid6owtjegz40k3.unknown, $_cmid6owtjegz40k3.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_284bxnwqjegz40jt = { detect: detect$2 };

  var detect$3 = $_81htnewpjegz40jh.cached(function () {
    var userAgent = navigator.userAgent;
    return $_284bxnwqjegz40jt.detect(userAgent);
  });
  var $_fzn4cewojegz40je = { detect: detect$3 };

  var alloy = { tap: $_b84g4ownjegz40jb.constant('alloy.tap') };
  var $_f4n44rwljegz40j4 = {
    focus: $_b84g4ownjegz40jb.constant('alloy.focus'),
    postBlur: $_b84g4ownjegz40jb.constant('alloy.blur.post'),
    receive: $_b84g4ownjegz40jb.constant('alloy.receive'),
    execute: $_b84g4ownjegz40jb.constant('alloy.execute'),
    focusItem: $_b84g4ownjegz40jb.constant('alloy.focus.item'),
    tap: alloy.tap,
    tapOrClick: $_fzn4cewojegz40je.detect().deviceType.isTouch() ? alloy.tap : $_equp8wmjegz40j7.click,
    longpress: $_b84g4ownjegz40jb.constant('alloy.longpress'),
    sandboxClose: $_b84g4ownjegz40jb.constant('alloy.sandbox.close'),
    systemInit: $_b84g4ownjegz40jb.constant('alloy.system.init'),
    windowScroll: $_b84g4ownjegz40jb.constant('alloy.system.scroll'),
    attachedToDom: $_b84g4ownjegz40jb.constant('alloy.system.attached'),
    detachedFromDom: $_b84g4ownjegz40jb.constant('alloy.system.detached'),
    changeTab: $_b84g4ownjegz40jb.constant('alloy.change.tab'),
    dismissTab: $_b84g4ownjegz40jb.constant('alloy.dismiss.tab')
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var $_6zfdmjx3jegz40l3 = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var shallow = function (old, nu) {
    return nu;
  };
  var deep = function (old, nu) {
    var bothObjects = $_6zfdmjx3jegz40l3.isObject(old) && $_6zfdmjx3jegz40l3.isObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (curObject.hasOwnProperty(key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };
  var deepMerge = baseMerge(deep);
  var merge = baseMerge(shallow);
  var $_6qf81kx2jegz40l1 = {
    deepMerge: deepMerge,
    merge: merge
  };

  var keys = function () {
    var fastKeys = Object.keys;
    var slowKeys = function (o) {
      var r = [];
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          r.push(i);
        }
      }
      return r;
    };
    return fastKeys === undefined ? slowKeys : fastKeys;
  }();
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var objectMap = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };
  var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each$1(obj, function (x, i) {
      var branch = pred(x, i) ? t : f;
      branch[i] = x;
    });
    return {
      t: t,
      f: f
    };
  };
  var mapToArray = function (obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };
  var find$2 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_4vnyr3x4jegz40l5 = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$2,
    keys: keys,
    values: values,
    size: size
  };

  var emit = function (component, event) {
    dispatchWith(component, component.element(), event, {});
  };
  var emitWith = function (component, event, properties) {
    dispatchWith(component, component.element(), event, properties);
  };
  var emitExecute = function (component) {
    emit(component, $_f4n44rwljegz40j4.execute());
  };
  var dispatch = function (component, target, event) {
    dispatchWith(component, target, event, {});
  };
  var dispatchWith = function (component, target, event, properties) {
    var data = $_6qf81kx2jegz40l1.deepMerge({ target: target }, properties);
    component.getSystem().triggerEvent(event, target, $_4vnyr3x4jegz40l5.map(data, $_b84g4ownjegz40jb.constant));
  };
  var dispatchEvent = function (component, target, event, simulatedEvent) {
    component.getSystem().triggerEvent(event, target, simulatedEvent.event());
  };
  var dispatchFocus = function (component, target) {
    component.getSystem().triggerFocus(target, component.element());
  };
  var $_78tntkwkjegz40iy = {
    emit: emit,
    emitWith: emitWith,
    emitExecute: emitExecute,
    dispatch: dispatch,
    dispatchWith: dispatchWith,
    dispatchEvent: dispatchEvent,
    dispatchFocus: dispatchFocus
  };

  function Immutable () {
    var fields = arguments;
    return function () {
      var values = new Array(arguments.length);
      for (var i = 0; i < values.length; i++)
        values[i] = arguments[i];
      if (fields.length !== values.length)
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      var struct = {};
      $_353rcfwwjegz40kh.each(fields, function (name, i) {
        struct[name] = $_b84g4ownjegz40jb.constant(values[i]);
      });
      return struct;
    };
  }

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!$_6zfdmjx3jegz40l3.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_353rcfwwjegz40kh.each(array, function (a) {
      if (!$_6zfdmjx3jegz40l3.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_353rcfwwjegz40kh.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_1j2622xbjegz40m8 = {
    sort: sort$1,
    reqMessage: reqMessage,
    unsuppMessage: unsuppMessage,
    validateStrArr: validateStrArr,
    invalidTypeMessage: invalidTypeMessage,
    checkDupes: checkDupes
  };

  function MixedBag (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    $_1j2622xbjegz40m8.validateStrArr('required', required);
    $_1j2622xbjegz40m8.validateStrArr('optional', optional);
    $_1j2622xbjegz40m8.checkDupes(everything);
    return function (obj) {
      var keys = $_4vnyr3x4jegz40l5.keys(obj);
      var allReqd = $_353rcfwwjegz40kh.forall(required, function (req) {
        return $_353rcfwwjegz40kh.contains(keys, req);
      });
      if (!allReqd)
        $_1j2622xbjegz40m8.reqMessage(required, keys);
      var unsupported = $_353rcfwwjegz40kh.filter(keys, function (key) {
        return !$_353rcfwwjegz40kh.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_1j2622xbjegz40m8.unsuppMessage(unsupported);
      var r = {};
      $_353rcfwwjegz40kh.each(required, function (req) {
        r[req] = $_b84g4ownjegz40jb.constant(obj[req]);
      });
      $_353rcfwwjegz40kh.each(optional, function (opt) {
        r[opt] = $_b84g4ownjegz40jb.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
      });
      return r;
    };
  }

  var $_14zxckx8jegz40lu = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_e6erfyxcjegz40ma = { toArray: toArray };

  var global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };
  var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
      o[part] = {};
    return o[part];
  };
  var forge = function (parts, target) {
    var o = target !== undefined ? target : global;
    for (var i = 0; i < parts.length; ++i)
      o = step(o, parts[i]);
    return o;
  };
  var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
  };
  var $_aboc5txgjegz40ml = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_aboc5txgjegz40ml.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_465l97xfjegz40mj = { getOrDie: getOrDie };

  var node = function () {
    var f = $_465l97xfjegz40mj.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_d2kc5txejegz40mh = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: $_b84g4ownjegz40jb.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return Option.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_30i27zxjjegz40mu = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_de8yksxkjegz40mx = {
    ATTRIBUTE: 2,
    CDATA_SECTION: 4,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    ELEMENT: 1,
    TEXT: 3,
    PROCESSING_INSTRUCTION: 7,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    NOTATION: 12
  };

  var ELEMENT = $_de8yksxkjegz40mx.ELEMENT;
  var DOCUMENT = $_de8yksxkjegz40mx.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : $_353rcfwwjegz40kh.map(base.querySelectorAll(selector), $_30i27zxjjegz40mu.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map($_30i27zxjjegz40mu.fromDom);
  };
  var $_28r0umxijegz40mo = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_353rcfwwjegz40kh.exists(elements, $_b84g4ownjegz40jb.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_d2kc5txejegz40mh.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_fzn4cewojegz40je.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_47k0n6xdjegz40mb = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_28r0umxijegz40mo.is
  };

  var owner = function (element) {
    return $_30i27zxjjegz40mu.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_30i27zxjjegz40mu.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_30i27zxjjegz40mu.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map($_30i27zxjjegz40mu.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_353rcfwwjegz40kh.findIndex(kin, function (elem) {
        return $_47k0n6xdjegz40mb.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_6zfdmjx3jegz40l3.isFunction(isRoot) ? isRoot : $_b84g4ownjegz40jb.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_30i27zxjjegz40mu.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return $_353rcfwwjegz40kh.filter(elements, function (x) {
        return !$_47k0n6xdjegz40mb.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map($_30i27zxjjegz40mu.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map($_30i27zxjjegz40mu.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map($_30i27zxjjegz40mu.fromDom);
  };
  var prevSiblings = function (element) {
    return $_353rcfwwjegz40kh.reverse($_e6erfyxcjegz40ma.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_e6erfyxcjegz40ma.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_353rcfwwjegz40kh.map(dom.childNodes, $_30i27zxjjegz40mu.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map($_30i27zxjjegz40mu.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = $_14zxckx8jegz40lu.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_6rauxox7jegz40ll = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var before = function (marker, element) {
    var parent = $_6rauxox7jegz40ll.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_6rauxox7jegz40ll.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_6rauxox7jegz40ll.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_6rauxox7jegz40ll.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_6rauxox7jegz40ll.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_4mdlzcx6jegz40lj = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    $_353rcfwwjegz40kh.each(elements, function (x) {
      $_4mdlzcx6jegz40lj.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_353rcfwwjegz40kh.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_4mdlzcx6jegz40lj.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_353rcfwwjegz40kh.each(elements.slice().reverse(), function (x) {
      $_4mdlzcx6jegz40lj.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_353rcfwwjegz40kh.each(elements, function (x) {
      $_4mdlzcx6jegz40lj.append(parent, x);
    });
  };
  var $_89tv8vxmjegz40n1 = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_353rcfwwjegz40kh.each($_6rauxox7jegz40ll.children(element), function (rogue) {
      remove(rogue);
    });
  };
  var remove = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_6rauxox7jegz40ll.children(wrapper);
    if (children.length > 0)
      $_89tv8vxmjegz40n1.before(wrapper, children);
    remove(wrapper);
  };
  var $_9j27zexljegz40mz = {
    empty: empty,
    remove: remove,
    unwrap: unwrap
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_de8yksxkjegz40mx.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_de8yksxkjegz40mx.ELEMENT);
  var isText = isType$1($_de8yksxkjegz40mx.TEXT);
  var isDocument = isType$1($_de8yksxkjegz40mx.DOCUMENT);
  var $_bge3bexojegz40n6 = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var inBody = function (element) {
    var dom = $_bge3bexojegz40n6.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_81htnewpjegz40jh.cached(function () {
    return getBody($_30i27zxjjegz40mu.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_30i27zxjjegz40mu.fromDom(body);
  };
  var $_br73zsxnjegz40n3 = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var fireDetaching = function (component) {
    $_78tntkwkjegz40iy.emit(component, $_f4n44rwljegz40j4.detachedFromDom());
    var children = component.components();
    $_353rcfwwjegz40kh.each(children, fireDetaching);
  };
  var fireAttaching = function (component) {
    var children = component.components();
    $_353rcfwwjegz40kh.each(children, fireAttaching);
    $_78tntkwkjegz40iy.emit(component, $_f4n44rwljegz40j4.attachedToDom());
  };
  var attach = function (parent, child) {
    attachWith(parent, child, $_4mdlzcx6jegz40lj.append);
  };
  var attachWith = function (parent, child, insertion) {
    parent.getSystem().addToWorld(child);
    insertion(parent.element(), child.element());
    if ($_br73zsxnjegz40n3.inBody(parent.element()))
      fireAttaching(child);
    parent.syncComponents();
  };
  var doDetach = function (component) {
    fireDetaching(component);
    $_9j27zexljegz40mz.remove(component.element());
    component.getSystem().removeFromWorld(component);
  };
  var detach = function (component) {
    var parent = $_6rauxox7jegz40ll.parent(component.element()).bind(function (p) {
      return component.getSystem().getByDom(p).fold(Option.none, Option.some);
    });
    doDetach(component);
    parent.each(function (p) {
      p.syncComponents();
    });
  };
  var detachChildren = function (component) {
    var subs = component.components();
    $_353rcfwwjegz40kh.each(subs, doDetach);
    $_9j27zexljegz40mz.empty(component.element());
    component.syncComponents();
  };
  var attachSystem = function (element, guiSystem) {
    $_4mdlzcx6jegz40lj.append(element, guiSystem.element());
    var children = $_6rauxox7jegz40ll.children(guiSystem.element());
    $_353rcfwwjegz40kh.each(children, function (child) {
      guiSystem.getByDom(child).each(fireAttaching);
    });
  };
  var detachSystem = function (guiSystem) {
    var children = $_6rauxox7jegz40ll.children(guiSystem.element());
    $_353rcfwwjegz40kh.each(children, function (child) {
      guiSystem.getByDom(child).each(fireDetaching);
    });
    $_9j27zexljegz40mz.remove(guiSystem.element());
  };
  var $_aoct93x5jegz40l9 = {
    attach: attach,
    attachWith: attachWith,
    detach: detach,
    detachChildren: detachChildren,
    attachSystem: attachSystem,
    detachSystem: detachSystem
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_6rauxox7jegz40ll.children($_30i27zxjjegz40mu.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_353rcfwwjegz40kh.map(tags, function (x) {
      return $_30i27zxjjegz40mu.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_353rcfwwjegz40kh.map(texts, function (x) {
      return $_30i27zxjjegz40mu.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_353rcfwwjegz40kh.map(nodes, $_30i27zxjjegz40mu.fromDom);
  };
  var $_ebb1z6xtjegz40nr = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var get = function (element) {
    return element.dom().innerHTML;
  };
  var set = function (element, content) {
    var owner = $_6rauxox7jegz40ll.owner(element);
    var docDom = owner.dom();
    var fragment = $_30i27zxjjegz40mu.fromDom(docDom.createDocumentFragment());
    var contentElements = $_ebb1z6xtjegz40nr.fromHtml(content, docDom);
    $_89tv8vxmjegz40n1.append(fragment, contentElements);
    $_9j27zexljegz40mz.empty(element);
    $_4mdlzcx6jegz40lj.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_30i27zxjjegz40mu.fromTag('div');
    var clone = $_30i27zxjjegz40mu.fromDom(element.dom().cloneNode(true));
    $_4mdlzcx6jegz40lj.append(container, clone);
    return get(container);
  };
  var $_2y0xlvxsjegz40np = {
    get: get,
    set: set,
    getOuter: getOuter
  };

  var rawSet = function (dom, key, value) {
    if ($_6zfdmjx3jegz40l3.isString(value) || $_6zfdmjx3jegz40l3.isBoolean(value) || $_6zfdmjx3jegz40l3.isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set$1 = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    $_4vnyr3x4jegz40l5.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get$1 = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove$1 = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_353rcfwwjegz40kh.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set$1(destination, attr, get$1(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_bge3bexojegz40n6.isElement(source) || !$_bge3bexojegz40n6.isElement(destination))
      return;
    $_353rcfwwjegz40kh.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_bcxlrzxvjegz40nw = {
    clone: clone,
    set: set$1,
    setAll: setAll,
    get: get$1,
    has: has,
    remove: remove$1,
    hasNone: hasNone,
    transfer: transfer
  };

  var clone$1 = function (original, deep) {
    return $_30i27zxjjegz40mu.fromDom(original.dom().cloneNode(deep));
  };
  var shallow$1 = function (original) {
    return clone$1(original, false);
  };
  var deep$1 = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_30i27zxjjegz40mu.fromTag(tag);
    var attributes = $_bcxlrzxvjegz40nw.clone(original);
    $_bcxlrzxvjegz40nw.setAll(nu, attributes);
    return nu;
  };
  var copy = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_6rauxox7jegz40ll.children(deep$1(original));
    $_89tv8vxmjegz40n1.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_4mdlzcx6jegz40lj.before(original, nu);
    var children = $_6rauxox7jegz40ll.children(original);
    $_89tv8vxmjegz40n1.append(nu, children);
    $_9j27zexljegz40mz.remove(original);
    return nu;
  };
  var $_b9sm5xxujegz40nu = {
    shallow: shallow$1,
    shallowAs: shallowAs,
    deep: deep$1,
    copy: copy,
    mutate: mutate
  };

  var getHtml = function (element) {
    var clone = $_b9sm5xxujegz40nu.shallow(element);
    return $_2y0xlvxsjegz40np.getOuter(clone);
  };
  var $_58h4e7xrjegz40nl = { getHtml: getHtml };

  var element = function (elem) {
    return $_58h4e7xrjegz40nl.getHtml(elem);
  };
  var $_clwaugxqjegz40nk = { element: element };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return Option.some(o);
    };
    return {
      is: is,
      isValue: $_b84g4ownjegz40jb.always,
      isError: $_b84g4ownjegz40jb.never,
      getOr: $_b84g4ownjegz40jb.constant(o),
      getOrThunk: $_b84g4ownjegz40jb.constant(o),
      getOrDie: $_b84g4ownjegz40jb.constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return $_b84g4ownjegz40jb.die(message)();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: $_b84g4ownjegz40jb.never,
      isValue: $_b84g4ownjegz40jb.never,
      isError: $_b84g4ownjegz40jb.always,
      getOr: $_b84g4ownjegz40jb.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_b84g4ownjegz40jb.noop,
      bind: bind,
      exists: $_b84g4ownjegz40jb.never,
      forall: $_b84g4ownjegz40jb.always,
      toOption: Option.none
    };
  };
  var Result = {
    value: value$1,
    error: error
  };

  var generate = function (cases) {
    if (!$_6zfdmjx3jegz40l3.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_353rcfwwjegz40kh.each(cases, function (acase, count) {
      var keys = $_4vnyr3x4jegz40l5.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_6zfdmjx3jegz40l3.isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = $_4vnyr3x4jegz40l5.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_353rcfwwjegz40kh.forall(constructors, function (reqKey) {
            return $_353rcfwwjegz40kh.contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var $_4n552cy0jegz40oo = { generate: generate };

  var comparison = $_4n552cy0jegz40oo.generate([
    {
      bothErrors: [
        'error1',
        'error2'
      ]
    },
    {
      firstError: [
        'error1',
        'value2'
      ]
    },
    {
      secondError: [
        'value1',
        'error2'
      ]
    },
    {
      bothValues: [
        'value1',
        'value2'
      ]
    }
  ]);
  var partition$1 = function (results) {
    var errors = [];
    var values = [];
    $_353rcfwwjegz40kh.each(results, function (result) {
      result.fold(function (err) {
        errors.push(err);
      }, function (value) {
        values.push(value);
      });
    });
    return {
      errors: errors,
      values: values
    };
  };
  var compare = function (result1, result2) {
    return result1.fold(function (err1) {
      return result2.fold(function (err2) {
        return comparison.bothErrors(err1, err2);
      }, function (val2) {
        return comparison.firstError(err1, val2);
      });
    }, function (val1) {
      return result2.fold(function (err2) {
        return comparison.secondError(val1, err2);
      }, function (val2) {
        return comparison.bothValues(val1, val2);
      });
    });
  };
  var $_ajqz83xzjegz40om = {
    partition: partition$1,
    compare: compare
  };

  var mergeValues = function (values, base) {
    return Result.value($_6qf81kx2jegz40l1.deepMerge.apply(undefined, [base].concat(values)));
  };
  var mergeErrors = function (errors) {
    return $_b84g4ownjegz40jb.compose(Result.error, $_353rcfwwjegz40kh.flatten)(errors);
  };
  var consolidateObj = function (objects, base) {
    var partitions = $_ajqz83xzjegz40om.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
  };
  var consolidateArr = function (objects) {
    var partitions = $_ajqz83xzjegz40om.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : Result.value(partitions.values);
  };
  var $_8jw0cmxxjegz40oc = {
    consolidateObj: consolidateObj,
    consolidateArr: consolidateArr
  };

  var narrow = function (obj, fields) {
    var r = {};
    $_353rcfwwjegz40kh.each(fields, function (field) {
      if (obj[field] !== undefined && obj.hasOwnProperty(field))
        r[field] = obj[field];
    });
    return r;
  };
  var indexOnKey = function (array, key) {
    var obj = {};
    $_353rcfwwjegz40kh.each(array, function (a) {
      var keyValue = a[key];
      obj[keyValue] = a;
    });
    return obj;
  };
  var exclude = function (obj, fields) {
    var r = {};
    $_4vnyr3x4jegz40l5.each(obj, function (v, k) {
      if (!$_353rcfwwjegz40kh.contains(fields, k)) {
        r[k] = v;
      }
    });
    return r;
  };
  var $_k8cfgy1jegz40or = {
    narrow: narrow,
    exclude: exclude,
    indexOnKey: indexOnKey
  };

  var readOpt = function (key) {
    return function (obj) {
      return obj.hasOwnProperty(key) ? Option.from(obj[key]) : Option.none();
    };
  };
  var readOr = function (key, fallback) {
    return function (obj) {
      return readOpt(key)(obj).getOr(fallback);
    };
  };
  var readOptFrom = function (obj, key) {
    return readOpt(key)(obj);
  };
  var hasKey = function (obj, key) {
    return obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null;
  };
  var $_c8ozciy2jegz40ov = {
    readOpt: readOpt,
    readOr: readOr,
    readOptFrom: readOptFrom,
    hasKey: hasKey
  };

  var wrap$1 = function (key, value) {
    var r = {};
    r[key] = value;
    return r;
  };
  var wrapAll = function (keyvalues) {
    var r = {};
    $_353rcfwwjegz40kh.each(keyvalues, function (kv) {
      r[kv.key] = kv.value;
    });
    return r;
  };
  var $_e40f3my3jegz40oy = {
    wrap: wrap$1,
    wrapAll: wrapAll
  };

  var narrow$1 = function (obj, fields) {
    return $_k8cfgy1jegz40or.narrow(obj, fields);
  };
  var exclude$1 = function (obj, fields) {
    return $_k8cfgy1jegz40or.exclude(obj, fields);
  };
  var readOpt$1 = function (key) {
    return $_c8ozciy2jegz40ov.readOpt(key);
  };
  var readOr$1 = function (key, fallback) {
    return $_c8ozciy2jegz40ov.readOr(key, fallback);
  };
  var readOptFrom$1 = function (obj, key) {
    return $_c8ozciy2jegz40ov.readOptFrom(obj, key);
  };
  var wrap$2 = function (key, value) {
    return $_e40f3my3jegz40oy.wrap(key, value);
  };
  var wrapAll$1 = function (keyvalues) {
    return $_e40f3my3jegz40oy.wrapAll(keyvalues);
  };
  var indexOnKey$1 = function (array, key) {
    return $_k8cfgy1jegz40or.indexOnKey(array, key);
  };
  var consolidate = function (objs, base) {
    return $_8jw0cmxxjegz40oc.consolidateObj(objs, base);
  };
  var hasKey$1 = function (obj, key) {
    return $_c8ozciy2jegz40ov.hasKey(obj, key);
  };
  var $_75j08mxwjegz40o2 = {
    narrow: narrow$1,
    exclude: exclude$1,
    readOpt: readOpt$1,
    readOr: readOr$1,
    readOptFrom: readOptFrom$1,
    wrap: wrap$2,
    wrapAll: wrapAll$1,
    indexOnKey: indexOnKey$1,
    hasKey: hasKey$1,
    consolidate: consolidate
  };

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return Option.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return Option.none();
      }
    }
    return Option.some(f.apply(null, r));
  };
  var $_88eph0y4jegz40p1 = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var unknown$3 = 'unknown';
  var debugging = true;
  var CHROME_INSPECTOR_GLOBAL = '__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__';
  var eventsMonitored = [];
  var path$1 = [
    'alloy/data/Fields',
    'alloy/debugging/Debugging'
  ];
  var getTrace = function () {
    if (debugging === false)
      return unknown$3;
    var err = new Error();
    if (err.stack !== undefined) {
      var lines = err.stack.split('\n');
      return $_353rcfwwjegz40kh.find(lines, function (line) {
        return line.indexOf('alloy') > 0 && !$_353rcfwwjegz40kh.exists(path$1, function (p) {
          return line.indexOf(p) > -1;
        });
      }).getOr(unknown$3);
    } else {
      return unknown$3;
    }
  };
  var logHandler = function (label, handlerName, trace) {
  };
  var ignoreEvent = {
    logEventCut: $_b84g4ownjegz40jb.noop,
    logEventStopped: $_b84g4ownjegz40jb.noop,
    logNoParent: $_b84g4ownjegz40jb.noop,
    logEventNoHandlers: $_b84g4ownjegz40jb.noop,
    logEventResponse: $_b84g4ownjegz40jb.noop,
    write: $_b84g4ownjegz40jb.noop
  };
  var monitorEvent = function (eventName, initialTarget, f) {
    var logger = debugging && (eventsMonitored === '*' || $_353rcfwwjegz40kh.contains(eventsMonitored, eventName)) ? function () {
      var sequence = [];
      return {
        logEventCut: function (name, target, purpose) {
          sequence.push({
            outcome: 'cut',
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function (name, target, purpose) {
          sequence.push({
            outcome: 'stopped',
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function (name, target, purpose) {
          sequence.push({
            outcome: 'no-parent',
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function (name, target) {
          sequence.push({
            outcome: 'no-handlers-left',
            target: target
          });
        },
        logEventResponse: function (name, target, purpose) {
          sequence.push({
            outcome: 'response',
            purpose: purpose,
            target: target
          });
        },
        write: function () {
          if ($_353rcfwwjegz40kh.contains([
              'mousemove',
              'mouseover',
              'mouseout',
              $_f4n44rwljegz40j4.systemInit()
            ], eventName))
            return;
          console.log(eventName, {
            event: eventName,
            target: initialTarget.dom(),
            sequence: $_353rcfwwjegz40kh.map(sequence, function (s) {
              if (!$_353rcfwwjegz40kh.contains([
                  'cut',
                  'stopped',
                  'response'
                ], s.outcome))
                return s.outcome;
              else
                return '{' + s.purpose + '} ' + s.outcome + ' at (' + $_clwaugxqjegz40nk.element(s.target) + ')';
            })
          });
        }
      };
    }() : ignoreEvent;
    var output = f(logger);
    logger.write();
    return output;
  };
  var inspectorInfo = function (comp) {
    var go = function (c) {
      var cSpec = c.spec();
      return {
        '(original.spec)': cSpec,
        '(dom.ref)': c.element().dom(),
        '(element)': $_clwaugxqjegz40nk.element(c.element()),
        '(initComponents)': $_353rcfwwjegz40kh.map(cSpec.components !== undefined ? cSpec.components : [], go),
        '(components)': $_353rcfwwjegz40kh.map(c.components(), go),
        '(bound.events)': $_4vnyr3x4jegz40l5.mapToArray(c.events(), function (v, k) {
          return [k];
        }).join(', '),
        '(behaviours)': cSpec.behaviours !== undefined ? $_4vnyr3x4jegz40l5.map(cSpec.behaviours, function (v, k) {
          return v === undefined ? '--revoked--' : {
            config: v.configAsRaw(),
            'original-config': v.initialConfig,
            state: c.readState(k)
          };
        }) : 'none'
      };
    };
    return go(comp);
  };
  var getOrInitConnection = function () {
    if (window[CHROME_INSPECTOR_GLOBAL] !== undefined)
      return window[CHROME_INSPECTOR_GLOBAL];
    else {
      window[CHROME_INSPECTOR_GLOBAL] = {
        systems: {},
        lookup: function (uid) {
          var systems = window[CHROME_INSPECTOR_GLOBAL].systems;
          var connections = $_4vnyr3x4jegz40l5.keys(systems);
          return $_88eph0y4jegz40p1.findMap(connections, function (conn) {
            var connGui = systems[conn];
            return connGui.getByUid(uid).toOption().map(function (comp) {
              return $_75j08mxwjegz40o2.wrap($_clwaugxqjegz40nk.element(comp.element()), inspectorInfo(comp));
            });
          });
        }
      };
      return window[CHROME_INSPECTOR_GLOBAL];
    }
  };
  var registerInspector = function (name, gui) {
    var connection = getOrInitConnection();
    connection.systems[name] = gui;
  };
  var $_8sp4i4xpjegz40na = {
    logHandler: logHandler,
    noLogger: $_b84g4ownjegz40jb.constant(ignoreEvent),
    getTrace: getTrace,
    monitorEvent: monitorEvent,
    isDebugging: $_b84g4ownjegz40jb.constant(debugging),
    registerInspector: registerInspector
  };

  var isSource = function (component, simulatedEvent) {
    return $_47k0n6xdjegz40mb.eq(component.element(), simulatedEvent.event().target());
  };
  var $_452ztfy9jegz40pt = { isSource: isSource };

  var adt = $_4n552cy0jegz40oo.generate([
    { strict: [] },
    { defaultedThunk: ['fallbackThunk'] },
    { asOption: [] },
    { asDefaultedOptionThunk: ['fallbackThunk'] },
    { mergeWithThunk: ['baseThunk'] }
  ]);
  var defaulted = function (fallback) {
    return adt.defaultedThunk($_b84g4ownjegz40jb.constant(fallback));
  };
  var asDefaultedOption = function (fallback) {
    return adt.asDefaultedOptionThunk($_b84g4ownjegz40jb.constant(fallback));
  };
  var mergeWith = function (base) {
    return adt.mergeWithThunk($_b84g4ownjegz40jb.constant(base));
  };
  var $_an0j3iycjegz40qj = {
    strict: adt.strict,
    asOption: adt.asOption,
    defaulted: defaulted,
    defaultedThunk: adt.defaultedThunk,
    asDefaultedOption: asDefaultedOption,
    asDefaultedOptionThunk: adt.asDefaultedOptionThunk,
    mergeWith: mergeWith,
    mergeWithThunk: adt.mergeWithThunk
  };

  var typeAdt = $_4n552cy0jegz40oo.generate([
    {
      setOf: [
        'validator',
        'valueType'
      ]
    },
    { arrOf: ['valueType'] },
    { objOf: ['fields'] },
    { itemOf: ['validator'] },
    {
      choiceOf: [
        'key',
        'branches'
      ]
    },
    { thunk: ['description'] },
    {
      func: [
        'args',
        'outputSchema'
      ]
    }
  ]);
  var fieldAdt = $_4n552cy0jegz40oo.generate([
    {
      field: [
        'name',
        'presence',
        'type'
      ]
    },
    { state: ['name'] }
  ]);
  var $_3wxkrcyejegz40r5 = {
    typeAdt: typeAdt,
    fieldAdt: fieldAdt
  };

  var json = function () {
    return $_465l97xfjegz40mj.getOrDie('JSON');
  };
  var parse = function (obj) {
    return json().parse(obj);
  };
  var stringify = function (obj, replacer, space) {
    return json().stringify(obj, replacer, space);
  };
  var $_6dqjd6yhjegz40rj = {
    parse: parse,
    stringify: stringify
  };

  var formatObj = function (input) {
    return $_6zfdmjx3jegz40l3.isObject(input) && $_4vnyr3x4jegz40l5.keys(input).length > 100 ? ' removed due to size' : $_6dqjd6yhjegz40rj.stringify(input, null, 2);
  };
  var formatErrors = function (errors) {
    var es = errors.length > 10 ? errors.slice(0, 10).concat([{
        path: [],
        getErrorInfo: function () {
          return '... (only showing first ten failures)';
        }
      }]) : errors;
    return $_353rcfwwjegz40kh.map(es, function (e) {
      return 'Failed path: (' + e.path.join(' > ') + ')\n' + e.getErrorInfo();
    });
  };
  var $_65c22nygjegz40rd = {
    formatObj: formatObj,
    formatErrors: formatErrors
  };

  var nu$3 = function (path, getErrorInfo) {
    return Result.error([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
  };
  var missingStrict = function (path, key, obj) {
    return nu$3(path, function () {
      return 'Could not find valid *strict* value for "' + key + '" in ' + $_65c22nygjegz40rd.formatObj(obj);
    });
  };
  var missingKey = function (path, key) {
    return nu$3(path, function () {
      return 'Choice schema did not contain choice key: "' + key + '"';
    });
  };
  var missingBranch = function (path, branches, branch) {
    return nu$3(path, function () {
      return 'The chosen schema: "' + branch + '" did not exist in branches: ' + $_65c22nygjegz40rd.formatObj(branches);
    });
  };
  var unsupportedFields = function (path, unsupported) {
    return nu$3(path, function () {
      return 'There are unsupported fields: [' + unsupported.join(', ') + '] specified';
    });
  };
  var custom = function (path, err) {
    return nu$3(path, function () {
      return err;
    });
  };
  var toString = function (error) {
    return 'Failed path: (' + error.path.join(' > ') + ')\n' + error.getErrorInfo();
  };
  var $_d0kesuyfjegz40r9 = {
    missingStrict: missingStrict,
    missingKey: missingKey,
    missingBranch: missingBranch,
    unsupportedFields: unsupportedFields,
    custom: custom,
    toString: toString
  };

  var adt$1 = $_4n552cy0jegz40oo.generate([
    {
      field: [
        'key',
        'okey',
        'presence',
        'prop'
      ]
    },
    {
      state: [
        'okey',
        'instantiator'
      ]
    }
  ]);
  var output = function (okey, value) {
    return adt$1.state(okey, $_b84g4ownjegz40jb.constant(value));
  };
  var snapshot = function (okey) {
    return adt$1.state(okey, $_b84g4ownjegz40jb.identity);
  };
  var strictAccess = function (path, obj, key) {
    return $_c8ozciy2jegz40ov.readOptFrom(obj, key).fold(function () {
      return $_d0kesuyfjegz40r9.missingStrict(path, key, obj);
    }, Result.value);
  };
  var fallbackAccess = function (obj, key, fallbackThunk) {
    var v = $_c8ozciy2jegz40ov.readOptFrom(obj, key).fold(function () {
      return fallbackThunk(obj);
    }, $_b84g4ownjegz40jb.identity);
    return Result.value(v);
  };
  var optionAccess = function (obj, key) {
    return Result.value($_c8ozciy2jegz40ov.readOptFrom(obj, key));
  };
  var optionDefaultedAccess = function (obj, key, fallback) {
    var opt = $_c8ozciy2jegz40ov.readOptFrom(obj, key).map(function (val) {
      return val === true ? fallback(obj) : val;
    });
    return Result.value(opt);
  };
  var cExtractOne = function (path, obj, field, strength) {
    return field.fold(function (key, okey, presence, prop) {
      var bundle = function (av) {
        return prop.extract(path.concat([key]), strength, av).map(function (res) {
          return $_e40f3my3jegz40oy.wrap(okey, strength(res));
        });
      };
      var bundleAsOption = function (optValue) {
        return optValue.fold(function () {
          var outcome = $_e40f3my3jegz40oy.wrap(okey, strength(Option.none()));
          return Result.value(outcome);
        }, function (ov) {
          return prop.extract(path.concat([key]), strength, ov).map(function (res) {
            return $_e40f3my3jegz40oy.wrap(okey, strength(Option.some(res)));
          });
        });
      };
      return function () {
        return presence.fold(function () {
          return strictAccess(path, obj, key).bind(bundle);
        }, function (fallbackThunk) {
          return fallbackAccess(obj, key, fallbackThunk).bind(bundle);
        }, function () {
          return optionAccess(obj, key).bind(bundleAsOption);
        }, function (fallbackThunk) {
          return optionDefaultedAccess(obj, key, fallbackThunk).bind(bundleAsOption);
        }, function (baseThunk) {
          var base = baseThunk(obj);
          return fallbackAccess(obj, key, $_b84g4ownjegz40jb.constant({})).map(function (v) {
            return $_6qf81kx2jegz40l1.deepMerge(base, v);
          }).bind(bundle);
        });
      }();
    }, function (okey, instantiator) {
      var state = instantiator(obj);
      return Result.value($_e40f3my3jegz40oy.wrap(okey, strength(state)));
    });
  };
  var cExtract = function (path, obj, fields, strength) {
    var results = $_353rcfwwjegz40kh.map(fields, function (field) {
      return cExtractOne(path, obj, field, strength);
    });
    return $_8jw0cmxxjegz40oc.consolidateObj(results, {});
  };
  var value$2 = function (validator) {
    var extract = function (path, strength, val) {
      return validator(val, strength).fold(function (err) {
        return $_d0kesuyfjegz40r9.custom(path, err);
      }, Result.value);
    };
    var toString = function () {
      return 'val';
    };
    var toDsl = function () {
      return $_3wxkrcyejegz40r5.typeAdt.itemOf(validator);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var getSetKeys = function (obj) {
    var keys = $_4vnyr3x4jegz40l5.keys(obj);
    return $_353rcfwwjegz40kh.filter(keys, function (k) {
      return $_75j08mxwjegz40o2.hasKey(obj, k);
    });
  };
  var objOnly = function (fields) {
    var delegate = obj(fields);
    var fieldNames = $_353rcfwwjegz40kh.foldr(fields, function (acc, f) {
      return f.fold(function (key) {
        return $_6qf81kx2jegz40l1.deepMerge(acc, $_75j08mxwjegz40o2.wrap(key, true));
      }, $_b84g4ownjegz40jb.constant(acc));
    }, {});
    var extract = function (path, strength, o) {
      var keys = $_6zfdmjx3jegz40l3.isBoolean(o) ? [] : getSetKeys(o);
      var extra = $_353rcfwwjegz40kh.filter(keys, function (k) {
        return !$_75j08mxwjegz40o2.hasKey(fieldNames, k);
      });
      return extra.length === 0 ? delegate.extract(path, strength, o) : $_d0kesuyfjegz40r9.unsupportedFields(path, extra);
    };
    return {
      extract: extract,
      toString: delegate.toString,
      toDsl: delegate.toDsl
    };
  };
  var obj = function (fields) {
    var extract = function (path, strength, o) {
      return cExtract(path, o, fields, strength);
    };
    var toString = function () {
      var fieldStrings = $_353rcfwwjegz40kh.map(fields, function (field) {
        return field.fold(function (key, okey, presence, prop) {
          return key + ' -> ' + prop.toString();
        }, function (okey, instantiator) {
          return 'state(' + okey + ')';
        });
      });
      return 'obj{\n' + fieldStrings.join('\n') + '}';
    };
    var toDsl = function () {
      return $_3wxkrcyejegz40r5.typeAdt.objOf($_353rcfwwjegz40kh.map(fields, function (f) {
        return f.fold(function (key, okey, presence, prop) {
          return $_3wxkrcyejegz40r5.fieldAdt.field(key, presence, prop);
        }, function (okey, instantiator) {
          return $_3wxkrcyejegz40r5.fieldAdt.state(okey);
        });
      }));
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var arr = function (prop) {
    var extract = function (path, strength, array) {
      var results = $_353rcfwwjegz40kh.map(array, function (a, i) {
        return prop.extract(path.concat(['[' + i + ']']), strength, a);
      });
      return $_8jw0cmxxjegz40oc.consolidateArr(results);
    };
    var toString = function () {
      return 'array(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_3wxkrcyejegz40r5.typeAdt.arrOf(prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var setOf = function (validator, prop) {
    var validateKeys = function (path, keys) {
      return arr(value$2(validator)).extract(path, $_b84g4ownjegz40jb.identity, keys);
    };
    var extract = function (path, strength, o) {
      var keys = $_4vnyr3x4jegz40l5.keys(o);
      return validateKeys(path, keys).bind(function (validKeys) {
        var schema = $_353rcfwwjegz40kh.map(validKeys, function (vk) {
          return adt$1.field(vk, vk, $_an0j3iycjegz40qj.strict(), prop);
        });
        return obj(schema).extract(path, strength, o);
      });
    };
    var toString = function () {
      return 'setOf(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_3wxkrcyejegz40r5.typeAdt.setOf(validator, prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var func = function (args, schema, retriever) {
    var delegate = value$2(function (f, strength) {
      return $_6zfdmjx3jegz40l3.isFunction(f) ? Result.value(function () {
        var gArgs = Array.prototype.slice.call(arguments, 0);
        var allowedArgs = gArgs.slice(0, args.length);
        var o = f.apply(null, allowedArgs);
        return retriever(o, strength);
      }) : Result.error('Not a function');
    });
    return {
      extract: delegate.extract,
      toString: function () {
        return 'function';
      },
      toDsl: function () {
        return $_3wxkrcyejegz40r5.typeAdt.func(args, schema);
      }
    };
  };
  var thunk = function (desc, processor) {
    var getP = $_81htnewpjegz40jh.cached(function () {
      return processor();
    });
    var extract = function (path, strength, val) {
      return getP().extract(path, strength, val);
    };
    var toString = function () {
      return getP().toString();
    };
    var toDsl = function () {
      return $_3wxkrcyejegz40r5.typeAdt.thunk(desc);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var anyValue = value$2(Result.value);
  var arrOfObj = $_b84g4ownjegz40jb.compose(arr, obj);
  var $_am9bnlydjegz40qp = {
    anyValue: $_b84g4ownjegz40jb.constant(anyValue),
    value: value$2,
    obj: obj,
    objOnly: objOnly,
    arr: arr,
    setOf: setOf,
    arrOfObj: arrOfObj,
    state: adt$1.state,
    field: adt$1.field,
    output: output,
    snapshot: snapshot,
    thunk: thunk,
    func: func
  };

  var strict = function (key) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.strict(), $_am9bnlydjegz40qp.anyValue());
  };
  var strictOf = function (key, schema) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.strict(), schema);
  };
  var strictFunction = function (key) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.strict(), $_am9bnlydjegz40qp.value(function (f) {
      return $_6zfdmjx3jegz40l3.isFunction(f) ? Result.value(f) : Result.error('Not a function');
    }));
  };
  var forbid = function (key, message) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.asOption(), $_am9bnlydjegz40qp.value(function (v) {
      return Result.error('The field: ' + key + ' is forbidden. ' + message);
    }));
  };
  var strictArrayOf = function (key, prop) {
    return strictOf(key, prop);
  };
  var strictObjOf = function (key, objSchema) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.strict(), $_am9bnlydjegz40qp.obj(objSchema));
  };
  var strictArrayOfObj = function (key, objFields) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.strict(), $_am9bnlydjegz40qp.arrOfObj(objFields));
  };
  var option = function (key) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.asOption(), $_am9bnlydjegz40qp.anyValue());
  };
  var optionOf = function (key, schema) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.asOption(), schema);
  };
  var optionObjOf = function (key, objSchema) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.asOption(), $_am9bnlydjegz40qp.obj(objSchema));
  };
  var optionObjOfOnly = function (key, objSchema) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.asOption(), $_am9bnlydjegz40qp.objOnly(objSchema));
  };
  var defaulted$1 = function (key, fallback) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.defaulted(fallback), $_am9bnlydjegz40qp.anyValue());
  };
  var defaultedOf = function (key, fallback, schema) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.defaulted(fallback), schema);
  };
  var defaultedObjOf = function (key, fallback, objSchema) {
    return $_am9bnlydjegz40qp.field(key, key, $_an0j3iycjegz40qj.defaulted(fallback), $_am9bnlydjegz40qp.obj(objSchema));
  };
  var field = function (key, okey, presence, prop) {
    return $_am9bnlydjegz40qp.field(key, okey, presence, prop);
  };
  var state = function (okey, instantiator) {
    return $_am9bnlydjegz40qp.state(okey, instantiator);
  };
  var $_cjikoqybjegz40q7 = {
    strict: strict,
    strictOf: strictOf,
    strictObjOf: strictObjOf,
    strictArrayOf: strictArrayOf,
    strictArrayOfObj: strictArrayOfObj,
    strictFunction: strictFunction,
    forbid: forbid,
    option: option,
    optionOf: optionOf,
    optionObjOf: optionObjOf,
    optionObjOfOnly: optionObjOfOnly,
    defaulted: defaulted$1,
    defaultedOf: defaultedOf,
    defaultedObjOf: defaultedObjOf,
    field: field,
    state: state
  };

  var chooseFrom = function (path, strength, input, branches, ch) {
    var fields = $_75j08mxwjegz40o2.readOptFrom(branches, ch);
    return fields.fold(function () {
      return $_d0kesuyfjegz40r9.missingBranch(path, branches, ch);
    }, function (fs) {
      return $_am9bnlydjegz40qp.obj(fs).extract(path.concat(['branch: ' + ch]), strength, input);
    });
  };
  var choose = function (key, branches) {
    var extract = function (path, strength, input) {
      var choice = $_75j08mxwjegz40o2.readOptFrom(input, key);
      return choice.fold(function () {
        return $_d0kesuyfjegz40r9.missingKey(path, key);
      }, function (chosen) {
        return chooseFrom(path, strength, input, branches, chosen);
      });
    };
    var toString = function () {
      return 'chooseOn(' + key + '). Possible values: ' + $_4vnyr3x4jegz40l5.keys(branches);
    };
    var toDsl = function () {
      return $_3wxkrcyejegz40r5.typeAdt.choiceOf(key, branches);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var $_68gczyjjegz40rq = { choose: choose };

  var anyValue$1 = $_am9bnlydjegz40qp.value(Result.value);
  var arrOfObj$1 = function (objFields) {
    return $_am9bnlydjegz40qp.arrOfObj(objFields);
  };
  var arrOfVal = function () {
    return $_am9bnlydjegz40qp.arr(anyValue$1);
  };
  var arrOf = $_am9bnlydjegz40qp.arr;
  var objOf = $_am9bnlydjegz40qp.obj;
  var objOfOnly = $_am9bnlydjegz40qp.objOnly;
  var setOf$1 = $_am9bnlydjegz40qp.setOf;
  var valueOf = function (validator) {
    return $_am9bnlydjegz40qp.value(function (v) {
      return validator(v);
    });
  };
  var extract = function (label, prop, strength, obj) {
    return prop.extract([label], strength, obj).fold(function (errs) {
      return Result.error({
        input: obj,
        errors: errs
      });
    }, Result.value);
  };
  var asStruct = function (label, prop, obj) {
    return extract(label, prop, $_b84g4ownjegz40jb.constant, obj);
  };
  var asRaw = function (label, prop, obj) {
    return extract(label, prop, $_b84g4ownjegz40jb.identity, obj);
  };
  var getOrDie$1 = function (extraction) {
    return extraction.fold(function (errInfo) {
      throw new Error(formatError(errInfo));
    }, $_b84g4ownjegz40jb.identity);
  };
  var asRawOrDie = function (label, prop, obj) {
    return getOrDie$1(asRaw(label, prop, obj));
  };
  var asStructOrDie = function (label, prop, obj) {
    return getOrDie$1(asStruct(label, prop, obj));
  };
  var formatError = function (errInfo) {
    return 'Errors: \n' + $_65c22nygjegz40rd.formatErrors(errInfo.errors) + '\n\nInput object: ' + $_65c22nygjegz40rd.formatObj(errInfo.input);
  };
  var choose$1 = function (key, branches) {
    return $_68gczyjjegz40rq.choose(key, branches);
  };
  var thunkOf = function (desc, schema) {
    return $_am9bnlydjegz40qp.thunk(desc, schema);
  };
  var funcOrDie = function (args, schema) {
    var retriever = function (output, strength) {
      return getOrDie$1(extract('()', schema, strength, output));
    };
    return $_am9bnlydjegz40qp.func(args, schema, retriever);
  };
  var $_fokpo2yijegz40rm = {
    anyValue: $_b84g4ownjegz40jb.constant(anyValue$1),
    arrOfObj: arrOfObj$1,
    arrOf: arrOf,
    arrOfVal: arrOfVal,
    valueOf: valueOf,
    setOf: setOf$1,
    objOf: objOf,
    objOfOnly: objOfOnly,
    asStruct: asStruct,
    asRaw: asRaw,
    asStructOrDie: asStructOrDie,
    asRawOrDie: asRawOrDie,
    getOrDie: getOrDie$1,
    formatError: formatError,
    choose: choose$1,
    thunkOf: thunkOf,
    funcOrDie: funcOrDie
  };

  var nu$4 = function (parts) {
    if (!$_75j08mxwjegz40o2.hasKey(parts, 'can') && !$_75j08mxwjegz40o2.hasKey(parts, 'abort') && !$_75j08mxwjegz40o2.hasKey(parts, 'run'))
      throw new Error('EventHandler defined by: ' + $_6dqjd6yhjegz40rj.stringify(parts, null, 2) + ' does not have can, abort, or run!');
    return $_fokpo2yijegz40rm.asRawOrDie('Extracting event.handler', $_fokpo2yijegz40rm.objOfOnly([
      $_cjikoqybjegz40q7.defaulted('can', $_b84g4ownjegz40jb.constant(true)),
      $_cjikoqybjegz40q7.defaulted('abort', $_b84g4ownjegz40jb.constant(false)),
      $_cjikoqybjegz40q7.defaulted('run', $_b84g4ownjegz40jb.noop)
    ]), parts);
  };
  var all$1 = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_353rcfwwjegz40kh.foldl(handlers, function (acc, handler) {
        return acc && f(handler).apply(undefined, args);
      }, true);
    };
  };
  var any = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_353rcfwwjegz40kh.foldl(handlers, function (acc, handler) {
        return acc || f(handler).apply(undefined, args);
      }, false);
    };
  };
  var read = function (handler) {
    return $_6zfdmjx3jegz40l3.isFunction(handler) ? {
      can: $_b84g4ownjegz40jb.constant(true),
      abort: $_b84g4ownjegz40jb.constant(false),
      run: handler
    } : handler;
  };
  var fuse = function (handlers) {
    var can = all$1(handlers, function (handler) {
      return handler.can;
    });
    var abort = any(handlers, function (handler) {
      return handler.abort;
    });
    var run = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      $_353rcfwwjegz40kh.each(handlers, function (handler) {
        handler.run.apply(undefined, args);
      });
    };
    return nu$4({
      can: can,
      abort: abort,
      run: run
    });
  };
  var $_14r1ccyajegz40px = {
    read: read,
    fuse: fuse,
    nu: nu$4
  };

  var derive = $_75j08mxwjegz40o2.wrapAll;
  var abort = function (name, predicate) {
    return {
      key: name,
      value: $_14r1ccyajegz40px.nu({ abort: predicate })
    };
  };
  var can = function (name, predicate) {
    return {
      key: name,
      value: $_14r1ccyajegz40px.nu({ can: predicate })
    };
  };
  var preventDefault = function (name) {
    return {
      key: name,
      value: $_14r1ccyajegz40px.nu({
        run: function (component, simulatedEvent) {
          simulatedEvent.event().prevent();
        }
      })
    };
  };
  var run = function (name, handler) {
    return {
      key: name,
      value: $_14r1ccyajegz40px.nu({ run: handler })
    };
  };
  var runActionExtra = function (name, action, extra) {
    return {
      key: name,
      value: $_14r1ccyajegz40px.nu({
        run: function (component) {
          action.apply(undefined, [component].concat(extra));
        }
      })
    };
  };
  var runOnName = function (name) {
    return function (handler) {
      return run(name, handler);
    };
  };
  var runOnSourceName = function (name) {
    return function (handler) {
      return {
        key: name,
        value: $_14r1ccyajegz40px.nu({
          run: function (component, simulatedEvent) {
            if ($_452ztfy9jegz40pt.isSource(component, simulatedEvent))
              handler(component, simulatedEvent);
          }
        })
      };
    };
  };
  var redirectToUid = function (name, uid) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByUid(uid).each(function (redirectee) {
        $_78tntkwkjegz40iy.dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
      });
    });
  };
  var redirectToPart = function (name, detail, partName) {
    var uid = detail.partUids()[partName];
    return redirectToUid(name, uid);
  };
  var runWithTarget = function (name, f) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByDom(simulatedEvent.event().target()).each(function (target) {
        f(component, target, simulatedEvent);
      });
    });
  };
  var cutter = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.cut();
    });
  };
  var stopper = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.stop();
    });
  };
  var $_63ctkqy8jegz40pp = {
    derive: derive,
    run: run,
    preventDefault: preventDefault,
    runActionExtra: runActionExtra,
    runOnAttached: runOnSourceName($_f4n44rwljegz40j4.attachedToDom()),
    runOnDetached: runOnSourceName($_f4n44rwljegz40j4.detachedFromDom()),
    runOnInit: runOnSourceName($_f4n44rwljegz40j4.systemInit()),
    runOnExecute: runOnName($_f4n44rwljegz40j4.execute()),
    redirectToUid: redirectToUid,
    redirectToPart: redirectToPart,
    runWithTarget: runWithTarget,
    abort: abort,
    can: can,
    cutter: cutter,
    stopper: stopper
  };

  var markAsBehaviourApi = function (f, apiName, apiFunction) {
    return f;
  };
  var markAsExtraApi = function (f, extraName) {
    return f;
  };
  var markAsSketchApi = function (f, apiFunction) {
    return f;
  };
  var getAnnotation = Option.none;
  var $_2r7ga7ykjegz40rv = {
    markAsBehaviourApi: markAsBehaviourApi,
    markAsExtraApi: markAsExtraApi,
    markAsSketchApi: markAsSketchApi,
    getAnnotation: getAnnotation
  };

  var nu$5 = $_14zxckx8jegz40lu.immutableBag(['tag'], [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'domChildren',
    'defChildren'
  ]);
  var defToStr = function (defn) {
    var raw = defToRaw(defn);
    return $_6dqjd6yhjegz40rj.stringify(raw, null, 2);
  };
  var defToRaw = function (defn) {
    return {
      tag: defn.tag(),
      classes: defn.classes().getOr([]),
      attributes: defn.attributes().getOr({}),
      styles: defn.styles().getOr({}),
      value: defn.value().getOr('<none>'),
      innerHtml: defn.innerHtml().getOr('<none>'),
      defChildren: defn.defChildren().getOr('<none>'),
      domChildren: defn.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var $_b17pfxymjegz40s5 = {
    nu: nu$5,
    defToStr: defToStr,
    defToRaw: defToRaw
  };

  var fields = [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'defChildren',
    'domChildren'
  ];
  var nu$6 = $_14zxckx8jegz40lu.immutableBag([], fields);
  var derive$1 = function (settings) {
    var r = {};
    var keys = $_4vnyr3x4jegz40l5.keys(settings);
    $_353rcfwwjegz40kh.each(keys, function (key) {
      settings[key].each(function (v) {
        r[key] = v;
      });
    });
    return nu$6(r);
  };
  var modToStr = function (mod) {
    var raw = modToRaw(mod);
    return $_6dqjd6yhjegz40rj.stringify(raw, null, 2);
  };
  var modToRaw = function (mod) {
    return {
      classes: mod.classes().getOr('<none>'),
      attributes: mod.attributes().getOr('<none>'),
      styles: mod.styles().getOr('<none>'),
      value: mod.value().getOr('<none>'),
      innerHtml: mod.innerHtml().getOr('<none>'),
      defChildren: mod.defChildren().getOr('<none>'),
      domChildren: mod.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var clashingOptArrays = function (key, oArr1, oArr2) {
    return oArr1.fold(function () {
      return oArr2.fold(function () {
        return {};
      }, function (arr2) {
        return $_75j08mxwjegz40o2.wrap(key, arr2);
      });
    }, function (arr1) {
      return oArr2.fold(function () {
        return $_75j08mxwjegz40o2.wrap(key, arr1);
      }, function (arr2) {
        return $_75j08mxwjegz40o2.wrap(key, arr2);
      });
    });
  };
  var merge$1 = function (defnA, mod) {
    var raw = $_6qf81kx2jegz40l1.deepMerge({
      tag: defnA.tag(),
      classes: mod.classes().getOr([]).concat(defnA.classes().getOr([])),
      attributes: $_6qf81kx2jegz40l1.merge(defnA.attributes().getOr({}), mod.attributes().getOr({})),
      styles: $_6qf81kx2jegz40l1.merge(defnA.styles().getOr({}), mod.styles().getOr({}))
    }, mod.innerHtml().or(defnA.innerHtml()).map(function (innerHtml) {
      return $_75j08mxwjegz40o2.wrap('innerHtml', innerHtml);
    }).getOr({}), clashingOptArrays('domChildren', mod.domChildren(), defnA.domChildren()), clashingOptArrays('defChildren', mod.defChildren(), defnA.defChildren()), mod.value().or(defnA.value()).map(function (value) {
      return $_75j08mxwjegz40o2.wrap('value', value);
    }).getOr({}));
    return $_b17pfxymjegz40s5.nu(raw);
  };
  var $_b3xpx9yljegz40ry = {
    nu: nu$6,
    derive: derive$1,
    merge: merge$1,
    modToStr: modToStr,
    modToRaw: modToRaw
  };

  var executeEvent = function (bConfig, bState, executor) {
    return $_63ctkqy8jegz40pp.runOnExecute(function (component) {
      executor(component, bConfig, bState);
    });
  };
  var loadEvent = function (bConfig, bState, f) {
    return $_63ctkqy8jegz40pp.runOnInit(function (component, simulatedEvent) {
      f(component, bConfig, bState);
    });
  };
  var create = function (schema, name, active, apis, extra, state) {
    var configSchema = $_fokpo2yijegz40rm.objOfOnly(schema);
    var schemaSchema = $_cjikoqybjegz40q7.optionObjOf(name, [$_cjikoqybjegz40q7.optionObjOfOnly('config', schema)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var createModes = function (modes, name, active, apis, extra, state) {
    var configSchema = modes;
    var schemaSchema = $_cjikoqybjegz40q7.optionObjOf(name, [$_cjikoqybjegz40q7.optionOf('config', modes)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var wrapApi = function (bName, apiFunction, apiName) {
    var f = function (component) {
      var args = arguments;
      return component.config({ name: $_b84g4ownjegz40jb.constant(bName) }).fold(function () {
        throw new Error('We could not find any behaviour configuration for: ' + bName + '. Using API: ' + apiName);
      }, function (info) {
        var rest = Array.prototype.slice.call(args, 1);
        return apiFunction.apply(undefined, [
          component,
          info.config,
          info.state
        ].concat(rest));
      });
    };
    return $_2r7ga7ykjegz40rv.markAsBehaviourApi(f, apiName, apiFunction);
  };
  var revokeBehaviour = function (name) {
    return {
      key: name,
      value: undefined
    };
  };
  var doCreate = function (configSchema, schemaSchema, name, active, apis, extra, state) {
    var getConfig = function (info) {
      return $_75j08mxwjegz40o2.hasKey(info, name) ? info[name]() : Option.none();
    };
    var wrappedApis = $_4vnyr3x4jegz40l5.map(apis, function (apiF, apiName) {
      return wrapApi(name, apiF, apiName);
    });
    var wrappedExtra = $_4vnyr3x4jegz40l5.map(extra, function (extraF, extraName) {
      return $_2r7ga7ykjegz40rv.markAsExtraApi(extraF, extraName);
    });
    var me = $_6qf81kx2jegz40l1.deepMerge(wrappedExtra, wrappedApis, {
      revoke: $_b84g4ownjegz40jb.curry(revokeBehaviour, name),
      config: function (spec) {
        var prepared = $_fokpo2yijegz40rm.asStructOrDie(name + '-config', configSchema, spec);
        return {
          key: name,
          value: {
            config: prepared,
            me: me,
            configAsRaw: $_81htnewpjegz40jh.cached(function () {
              return $_fokpo2yijegz40rm.asRawOrDie(name + '-config', configSchema, spec);
            }),
            initialConfig: spec,
            state: state
          }
        };
      },
      schema: function () {
        return schemaSchema;
      },
      exhibit: function (info, base) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_75j08mxwjegz40o2.readOptFrom(active, 'exhibit').map(function (exhibitor) {
            return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr($_b3xpx9yljegz40ry.nu({}));
      },
      name: function () {
        return name;
      },
      handlers: function (info) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_75j08mxwjegz40o2.readOptFrom(active, 'events').map(function (events) {
            return events(behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr({});
      }
    });
    return me;
  };
  var $_6z4hay7jegz40pc = {
    executeEvent: executeEvent,
    loadEvent: loadEvent,
    create: create,
    createModes: createModes
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_6zfdmjx3jegz40l3.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_1j2622xbjegz40m8.validateStrArr('required', required);
    $_1j2622xbjegz40m8.checkDupes(required);
    return function (obj) {
      var keys = $_4vnyr3x4jegz40l5.keys(obj);
      var allReqd = $_353rcfwwjegz40kh.forall(required, function (req) {
        return $_353rcfwwjegz40kh.contains(keys, req);
      });
      if (!allReqd)
        $_1j2622xbjegz40m8.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_353rcfwwjegz40kh.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_1j2622xbjegz40m8.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_353rcfwwjegz40kh.filter(keys, function (key) {
      return !$_353rcfwwjegz40kh.contains(required, key);
    });
    if (unsupported.length > 0)
      $_1j2622xbjegz40m8.unsuppMessage(unsupported);
  };
  var allowExtra = $_b84g4ownjegz40jb.noop;
  var $_a3se26ypjegz40sk = {
    exactly: $_b84g4ownjegz40jb.curry(base, handleExact),
    ensure: $_b84g4ownjegz40jb.curry(base, allowExtra),
    ensureWith: $_b84g4ownjegz40jb.curry(baseWith, allowExtra)
  };

  var BehaviourState = $_a3se26ypjegz40sk.ensure(['readState']);

  var init = function () {
    return BehaviourState({
      readState: function () {
        return 'No State required';
      }
    });
  };
  var $_xbi0rynjegz40sh = { init: init };

  var derive$2 = function (capabilities) {
    return $_75j08mxwjegz40o2.wrapAll(capabilities);
  };
  var simpleSchema = $_fokpo2yijegz40rm.objOfOnly([
    $_cjikoqybjegz40q7.strict('fields'),
    $_cjikoqybjegz40q7.strict('name'),
    $_cjikoqybjegz40q7.defaulted('active', {}),
    $_cjikoqybjegz40q7.defaulted('apis', {}),
    $_cjikoqybjegz40q7.defaulted('extra', {}),
    $_cjikoqybjegz40q7.defaulted('state', $_xbi0rynjegz40sh)
  ]);
  var create$1 = function (data) {
    var value = $_fokpo2yijegz40rm.asRawOrDie('Creating behaviour: ' + data.name, simpleSchema, data);
    return $_6z4hay7jegz40pc.create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
  };
  var modeSchema = $_fokpo2yijegz40rm.objOfOnly([
    $_cjikoqybjegz40q7.strict('branchKey'),
    $_cjikoqybjegz40q7.strict('branches'),
    $_cjikoqybjegz40q7.strict('name'),
    $_cjikoqybjegz40q7.defaulted('active', {}),
    $_cjikoqybjegz40q7.defaulted('apis', {}),
    $_cjikoqybjegz40q7.defaulted('extra', {}),
    $_cjikoqybjegz40q7.defaulted('state', $_xbi0rynjegz40sh)
  ]);
  var createModes$1 = function (data) {
    var value = $_fokpo2yijegz40rm.asRawOrDie('Creating behaviour: ' + data.name, modeSchema, data);
    return $_6z4hay7jegz40pc.createModes($_fokpo2yijegz40rm.choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
  };
  var $_2s5cqny6jegz40p5 = {
    derive: derive$2,
    revoke: $_b84g4ownjegz40jb.constant(undefined),
    noActive: $_b84g4ownjegz40jb.constant({}),
    noApis: $_b84g4ownjegz40jb.constant({}),
    noExtra: $_b84g4ownjegz40jb.constant({}),
    noState: $_b84g4ownjegz40jb.constant($_xbi0rynjegz40sh),
    create: create$1,
    createModes: createModes$1
  };

  function Toggler (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  }

  var read$1 = function (element, attr) {
    var value = $_bcxlrzxvjegz40nw.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add = function (element, attr, id) {
    var old = read$1(element, attr);
    var nu = old.concat([id]);
    $_bcxlrzxvjegz40nw.set(element, attr, nu.join(' '));
  };
  var remove$2 = function (element, attr, id) {
    var nu = $_353rcfwwjegz40kh.filter(read$1(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_bcxlrzxvjegz40nw.set(element, attr, nu.join(' '));
    else
      $_bcxlrzxvjegz40nw.remove(element, attr);
  };
  var $_10tjgtyujegz40sw = {
    read: read$1,
    add: add,
    remove: remove$2
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$2 = function (element) {
    return $_10tjgtyujegz40sw.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_10tjgtyujegz40sw.add(element, 'class', clazz);
  };
  var remove$3 = function (element, clazz) {
    return $_10tjgtyujegz40sw.remove(element, 'class', clazz);
  };
  var toggle = function (element, clazz) {
    if ($_353rcfwwjegz40kh.contains(get$2(element), clazz)) {
      remove$3(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_554elnytjegz40st = {
    get: get$2,
    add: add$1,
    remove: remove$3,
    toggle: toggle,
    supports: supports
  };

  var add$2 = function (element, clazz) {
    if ($_554elnytjegz40st.supports(element))
      element.dom().classList.add(clazz);
    else
      $_554elnytjegz40st.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_554elnytjegz40st.supports(element) ? element.dom().classList : $_554elnytjegz40st.get(element);
    if (classList.length === 0) {
      $_bcxlrzxvjegz40nw.remove(element, 'class');
    }
  };
  var remove$4 = function (element, clazz) {
    if ($_554elnytjegz40st.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_554elnytjegz40st.remove(element, clazz);
    cleanClass(element);
  };
  var toggle$1 = function (element, clazz) {
    return $_554elnytjegz40st.supports(element) ? element.dom().classList.toggle(clazz) : $_554elnytjegz40st.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_554elnytjegz40st.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_554elnytjegz40st.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_554elnytjegz40st.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_554elnytjegz40st.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_aoqcjmyrjegz40sq = {
    add: add$2,
    remove: remove$4,
    toggle: toggle$1,
    toggler: toggler,
    has: has$1
  };

  var swap = function (element, addCls, removeCls) {
    $_aoqcjmyrjegz40sq.remove(element, removeCls);
    $_aoqcjmyrjegz40sq.add(element, addCls);
  };
  var toAlpha = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.alpha(), swapConfig.omega());
  };
  var toOmega = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.omega(), swapConfig.alpha());
  };
  var clear = function (component, swapConfig, swapState) {
    $_aoqcjmyrjegz40sq.remove(component.element(), swapConfig.alpha());
    $_aoqcjmyrjegz40sq.remove(component.element(), swapConfig.omega());
  };
  var isAlpha = function (component, swapConfig, swapState) {
    return $_aoqcjmyrjegz40sq.has(component.element(), swapConfig.alpha());
  };
  var isOmega = function (component, swapConfig, swapState) {
    return $_aoqcjmyrjegz40sq.has(component.element(), swapConfig.omega());
  };
  var $_5vu3poyqjegz40sn = {
    toAlpha: toAlpha,
    toOmega: toOmega,
    isAlpha: isAlpha,
    isOmega: isOmega,
    clear: clear
  };

  var SwapSchema = [
    $_cjikoqybjegz40q7.strict('alpha'),
    $_cjikoqybjegz40q7.strict('omega')
  ];

  var Swapping = $_2s5cqny6jegz40p5.create({
    fields: SwapSchema,
    name: 'swapping',
    apis: $_5vu3poyqjegz40sn
  });

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : $_6zfdmjx3jegz40l3.isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_br73zsxnjegz40n3.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_6zfdmjx3jegz40l3.isFunction(isRoot) ? isRoot : $_b84g4ownjegz40jb.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_30i27zxjjegz40mu.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1($_30i27zxjjegz40mu.fromDom(element.parentNode), function (x) {
      return !$_47k0n6xdjegz40mb.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = $_353rcfwwjegz40kh.find(scope.dom().childNodes, $_b84g4ownjegz40jb.compose(predicate, $_30i27zxjjegz40mu.fromDom));
    return result.map($_30i27zxjjegz40mu.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_30i27zxjjegz40mu.fromDom(element.childNodes[i])))
          return Option.some($_30i27zxjjegz40mu.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_g30u4yyzjegz40t7 = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var any$1 = function (predicate) {
    return $_g30u4yyzjegz40t7.first(predicate).isSome();
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    return $_g30u4yyzjegz40t7.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$1 = function (scope, predicate, isRoot) {
    return $_g30u4yyzjegz40t7.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$1 = function (scope, predicate) {
    return $_g30u4yyzjegz40t7.sibling(scope, predicate).isSome();
  };
  var child$2 = function (scope, predicate) {
    return $_g30u4yyzjegz40t7.child(scope, predicate).isSome();
  };
  var descendant$1 = function (scope, predicate) {
    return $_g30u4yyzjegz40t7.descendant(scope, predicate).isSome();
  };
  var $_f51rqfyyjegz40t5 = {
    any: any$1,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var focus = function (element) {
    element.dom().focus();
  };
  var blur = function (element) {
    element.dom().blur();
  };
  var hasFocus = function (element) {
    var doc = $_6rauxox7jegz40ll.owner(element).dom();
    return element.dom() === doc.activeElement;
  };
  var active = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    return Option.from(doc.activeElement).map($_30i27zxjjegz40mu.fromDom);
  };
  var focusInside = function (element) {
    var doc = $_6rauxox7jegz40ll.owner(element);
    var inside = active(doc).filter(function (a) {
      return $_f51rqfyyjegz40t5.closest(a, $_b84g4ownjegz40jb.curry($_47k0n6xdjegz40mb.eq, element));
    });
    inside.fold(function () {
      focus(element);
    }, $_b84g4ownjegz40jb.noop);
  };
  var search = function (element) {
    return active($_6rauxox7jegz40ll.owner(element)).filter(function (e) {
      return element.dom().contains(e.dom());
    });
  };
  var $_7nx9zfyxjegz40t1 = {
    hasFocus: hasFocus,
    focus: focus,
    blur: blur,
    active: active,
    search: search,
    focusInside: focusInside
  };

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var ThemeManager = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var openLink = function (target) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = target.href;
    link.rel = 'noreferrer noopener';
    var nuEvt = document.createEvent('MouseEvents');
    nuEvt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(link);
    link.dispatchEvent(nuEvt);
    document.body.removeChild(link);
  };
  var $_aoi2e0z3jegz40tj = { openLink: openLink };

  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var $_88fo4uz4jegz40tk = { isSkinDisabled: isSkinDisabled };

  var formatChanged = 'formatChanged';
  var orientationChanged = 'orientationChanged';
  var dropupDismissed = 'dropupDismissed';
  var $_5sbjlvz5jegz40tl = {
    formatChanged: $_b84g4ownjegz40jb.constant(formatChanged),
    orientationChanged: $_b84g4ownjegz40jb.constant(orientationChanged),
    dropupDismissed: $_b84g4ownjegz40jb.constant(dropupDismissed)
  };

  var chooseChannels = function (channels, message) {
    return message.universal() ? channels : $_353rcfwwjegz40kh.filter(channels, function (ch) {
      return $_353rcfwwjegz40kh.contains(message.channels(), ch);
    });
  };
  var events = function (receiveConfig) {
    return $_63ctkqy8jegz40pp.derive([$_63ctkqy8jegz40pp.run($_f4n44rwljegz40j4.receive(), function (component, message) {
        var channelMap = receiveConfig.channels();
        var channels = $_4vnyr3x4jegz40l5.keys(channelMap);
        var targetChannels = chooseChannels(channels, message);
        $_353rcfwwjegz40kh.each(targetChannels, function (ch) {
          var channelInfo = channelMap[ch]();
          var channelSchema = channelInfo.schema();
          var data = $_fokpo2yijegz40rm.asStructOrDie('channel[' + ch + '] data\nReceiver: ' + $_clwaugxqjegz40nk.element(component.element()), channelSchema, message.data());
          channelInfo.onReceive()(component, data);
        });
      })]);
  };
  var $_8miexgz8jegz40u0 = { events: events };

  var menuFields = [
    $_cjikoqybjegz40q7.strict('menu'),
    $_cjikoqybjegz40q7.strict('selectedMenu')
  ];
  var itemFields = [
    $_cjikoqybjegz40q7.strict('item'),
    $_cjikoqybjegz40q7.strict('selectedItem')
  ];
  var schema = $_fokpo2yijegz40rm.objOfOnly(itemFields.concat(menuFields));
  var itemSchema = $_fokpo2yijegz40rm.objOfOnly(itemFields);
  var $_fh5dyjzbjegz40uv = {
    menuFields: $_b84g4ownjegz40jb.constant(menuFields),
    itemFields: $_b84g4ownjegz40jb.constant(itemFields),
    schema: $_b84g4ownjegz40jb.constant(schema),
    itemSchema: $_b84g4ownjegz40jb.constant(itemSchema)
  };

  var initSize = $_cjikoqybjegz40q7.strictObjOf('initSize', [
    $_cjikoqybjegz40q7.strict('numColumns'),
    $_cjikoqybjegz40q7.strict('numRows')
  ]);
  var itemMarkers = function () {
    return $_cjikoqybjegz40q7.strictOf('markers', $_fh5dyjzbjegz40uv.itemSchema());
  };
  var menuMarkers = function () {
    return $_cjikoqybjegz40q7.strictOf('markers', $_fh5dyjzbjegz40uv.schema());
  };
  var tieredMenuMarkers = function () {
    return $_cjikoqybjegz40q7.strictObjOf('markers', [$_cjikoqybjegz40q7.strict('backgroundMenu')].concat($_fh5dyjzbjegz40uv.menuFields()).concat($_fh5dyjzbjegz40uv.itemFields()));
  };
  var markers = function (required) {
    return $_cjikoqybjegz40q7.strictObjOf('markers', $_353rcfwwjegz40kh.map(required, $_cjikoqybjegz40q7.strict));
  };
  var onPresenceHandler = function (label, fieldName, presence) {
    var trace = $_8sp4i4xpjegz40na.getTrace();
    return $_cjikoqybjegz40q7.field(fieldName, fieldName, presence, $_fokpo2yijegz40rm.valueOf(function (f) {
      return Result.value(function () {
        $_8sp4i4xpjegz40na.logHandler(label, fieldName, trace);
        return f.apply(undefined, arguments);
      });
    }));
  };
  var onHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_an0j3iycjegz40qj.defaulted($_b84g4ownjegz40jb.noop));
  };
  var onKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_an0j3iycjegz40qj.defaulted(Option.none));
  };
  var onStrictHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_an0j3iycjegz40qj.strict());
  };
  var onStrictKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_an0j3iycjegz40qj.strict());
  };
  var output$1 = function (name, value) {
    return $_cjikoqybjegz40q7.state(name, $_b84g4ownjegz40jb.constant(value));
  };
  var snapshot$1 = function (name) {
    return $_cjikoqybjegz40q7.state(name, $_b84g4ownjegz40jb.identity);
  };
  var $_b1fv0nzajegz40ue = {
    initSize: $_b84g4ownjegz40jb.constant(initSize),
    itemMarkers: itemMarkers,
    menuMarkers: menuMarkers,
    tieredMenuMarkers: tieredMenuMarkers,
    markers: markers,
    onHandler: onHandler,
    onKeyboardHandler: onKeyboardHandler,
    onStrictHandler: onStrictHandler,
    onStrictKeyboardHandler: onStrictKeyboardHandler,
    output: output$1,
    snapshot: snapshot$1
  };

  var ReceivingSchema = [$_cjikoqybjegz40q7.strictOf('channels', $_fokpo2yijegz40rm.setOf(Result.value, $_fokpo2yijegz40rm.objOfOnly([
      $_b1fv0nzajegz40ue.onStrictHandler('onReceive'),
      $_cjikoqybjegz40q7.defaulted('schema', $_fokpo2yijegz40rm.anyValue())
    ])))];

  var Receiving = $_2s5cqny6jegz40p5.create({
    fields: ReceivingSchema,
    name: 'receiving',
    active: $_8miexgz8jegz40u0
  });

  var updateAriaState = function (component, toggleConfig) {
    var pressed = isOn(component, toggleConfig);
    var ariaInfo = toggleConfig.aria();
    ariaInfo.update()(component, ariaInfo, pressed);
  };
  var toggle$2 = function (component, toggleConfig, toggleState) {
    $_aoqcjmyrjegz40sq.toggle(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var on = function (component, toggleConfig, toggleState) {
    $_aoqcjmyrjegz40sq.add(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var off = function (component, toggleConfig, toggleState) {
    $_aoqcjmyrjegz40sq.remove(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var isOn = function (component, toggleConfig) {
    return $_aoqcjmyrjegz40sq.has(component.element(), toggleConfig.toggleClass());
  };
  var onLoad = function (component, toggleConfig, toggleState) {
    var api = toggleConfig.selected() ? on : off;
    api(component, toggleConfig, toggleState);
  };
  var $_bw05v2zejegz40v7 = {
    onLoad: onLoad,
    toggle: toggle$2,
    isOn: isOn,
    on: on,
    off: off
  };

  var exhibit = function (base, toggleConfig, toggleState) {
    return $_b3xpx9yljegz40ry.nu({});
  };
  var events$1 = function (toggleConfig, toggleState) {
    var execute = $_6z4hay7jegz40pc.executeEvent(toggleConfig, toggleState, $_bw05v2zejegz40v7.toggle);
    var load = $_6z4hay7jegz40pc.loadEvent(toggleConfig, toggleState, $_bw05v2zejegz40v7.onLoad);
    return $_63ctkqy8jegz40pp.derive($_353rcfwwjegz40kh.flatten([
      toggleConfig.toggleOnExecute() ? [execute] : [],
      [load]
    ]));
  };
  var $_821tu8zdjegz40v5 = {
    exhibit: exhibit,
    events: events$1
  };

  var updatePressed = function (component, ariaInfo, status) {
    $_bcxlrzxvjegz40nw.set(component.element(), 'aria-pressed', status);
    if (ariaInfo.syncWithExpanded())
      updateExpanded(component, ariaInfo, status);
  };
  var updateSelected = function (component, ariaInfo, status) {
    $_bcxlrzxvjegz40nw.set(component.element(), 'aria-selected', status);
  };
  var updateChecked = function (component, ariaInfo, status) {
    $_bcxlrzxvjegz40nw.set(component.element(), 'aria-checked', status);
  };
  var updateExpanded = function (component, ariaInfo, status) {
    $_bcxlrzxvjegz40nw.set(component.element(), 'aria-expanded', status);
  };
  var tagAttributes = {
    button: ['aria-pressed'],
    'input:checkbox': ['aria-checked']
  };
  var roleAttributes = {
    'button': ['aria-pressed'],
    'listbox': [
      'aria-pressed',
      'aria-expanded'
    ],
    'menuitemcheckbox': ['aria-checked']
  };
  var detectFromTag = function (component) {
    var elem = component.element();
    var rawTag = $_bge3bexojegz40n6.name(elem);
    var suffix = rawTag === 'input' && $_bcxlrzxvjegz40nw.has(elem, 'type') ? ':' + $_bcxlrzxvjegz40nw.get(elem, 'type') : '';
    return $_75j08mxwjegz40o2.readOptFrom(tagAttributes, rawTag + suffix);
  };
  var detectFromRole = function (component) {
    var elem = component.element();
    if (!$_bcxlrzxvjegz40nw.has(elem, 'role'))
      return Option.none();
    else {
      var role = $_bcxlrzxvjegz40nw.get(elem, 'role');
      return $_75j08mxwjegz40o2.readOptFrom(roleAttributes, role);
    }
  };
  var updateAuto = function (component, ariaInfo, status) {
    var attributes = detectFromRole(component).orThunk(function () {
      return detectFromTag(component);
    }).getOr([]);
    $_353rcfwwjegz40kh.each(attributes, function (attr) {
      $_bcxlrzxvjegz40nw.set(component.element(), attr, status);
    });
  };
  var $_8iuiuyzgjegz40vf = {
    updatePressed: updatePressed,
    updateSelected: updateSelected,
    updateChecked: updateChecked,
    updateExpanded: updateExpanded,
    updateAuto: updateAuto
  };

  var ToggleSchema = [
    $_cjikoqybjegz40q7.defaulted('selected', false),
    $_cjikoqybjegz40q7.strict('toggleClass'),
    $_cjikoqybjegz40q7.defaulted('toggleOnExecute', true),
    $_cjikoqybjegz40q7.defaultedOf('aria', { mode: 'none' }, $_fokpo2yijegz40rm.choose('mode', {
      'pressed': [
        $_cjikoqybjegz40q7.defaulted('syncWithExpanded', false),
        $_b1fv0nzajegz40ue.output('update', $_8iuiuyzgjegz40vf.updatePressed)
      ],
      'checked': [$_b1fv0nzajegz40ue.output('update', $_8iuiuyzgjegz40vf.updateChecked)],
      'expanded': [$_b1fv0nzajegz40ue.output('update', $_8iuiuyzgjegz40vf.updateExpanded)],
      'selected': [$_b1fv0nzajegz40ue.output('update', $_8iuiuyzgjegz40vf.updateSelected)],
      'none': [$_b1fv0nzajegz40ue.output('update', $_b84g4ownjegz40jb.noop)]
    }))
  ];

  var Toggling = $_2s5cqny6jegz40p5.create({
    fields: ToggleSchema,
    name: 'toggling',
    active: $_821tu8zdjegz40v5,
    apis: $_bw05v2zejegz40v7
  });

  var format = function (command, update) {
    return Receiving.config({
      channels: $_75j08mxwjegz40o2.wrap($_5sbjlvz5jegz40tl.formatChanged(), {
        onReceive: function (button, data) {
          if (data.command === command) {
            update(button, data.state);
          }
        }
      })
    });
  };
  var orientation = function (onReceive) {
    return Receiving.config({ channels: $_75j08mxwjegz40o2.wrap($_5sbjlvz5jegz40tl.orientationChanged(), { onReceive: onReceive }) });
  };
  var receive = function (channel, onReceive) {
    return {
      key: channel,
      value: { onReceive: onReceive }
    };
  };
  var $_dp0qcmzhjegz40vo = {
    format: format,
    orientation: orientation,
    receive: receive
  };

  var prefix = 'tinymce-mobile';
  var resolve$1 = function (p) {
    return prefix + '-' + p;
  };
  var $_c2ndmvzijegz40vq = {
    resolve: resolve$1,
    prefix: $_b84g4ownjegz40jb.constant(prefix)
  };

  var focus$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_7nx9zfyxjegz40t1.focus(component.element());
      focusConfig.onFocus()(component);
    }
  };
  var blur$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_7nx9zfyxjegz40t1.blur(component.element());
    }
  };
  var isFocused = function (component) {
    return $_7nx9zfyxjegz40t1.hasFocus(component.element());
  };
  var $_10qiqzznjegz40w7 = {
    focus: focus$1,
    blur: blur$1,
    isFocused: isFocused
  };

  var exhibit$1 = function (base, focusConfig) {
    if (focusConfig.ignore())
      return $_b3xpx9yljegz40ry.nu({});
    else
      return $_b3xpx9yljegz40ry.nu({ attributes: { 'tabindex': '-1' } });
  };
  var events$2 = function (focusConfig) {
    return $_63ctkqy8jegz40pp.derive([$_63ctkqy8jegz40pp.run($_f4n44rwljegz40j4.focus(), function (component, simulatedEvent) {
        $_10qiqzznjegz40w7.focus(component, focusConfig);
        simulatedEvent.stop();
      })]);
  };
  var $_zjisgzmjegz40w6 = {
    exhibit: exhibit$1,
    events: events$2
  };

  var FocusSchema = [
    $_b1fv0nzajegz40ue.onHandler('onFocus'),
    $_cjikoqybjegz40q7.defaulted('ignore', false)
  ];

  var Focusing = $_2s5cqny6jegz40p5.create({
    fields: FocusSchema,
    name: 'focusing',
    active: $_zjisgzmjegz40w6,
    apis: $_10qiqzznjegz40w7
  });

  var $_77tdgaztjegz40x3 = {
    BACKSPACE: $_b84g4ownjegz40jb.constant([8]),
    TAB: $_b84g4ownjegz40jb.constant([9]),
    ENTER: $_b84g4ownjegz40jb.constant([13]),
    SHIFT: $_b84g4ownjegz40jb.constant([16]),
    CTRL: $_b84g4ownjegz40jb.constant([17]),
    ALT: $_b84g4ownjegz40jb.constant([18]),
    CAPSLOCK: $_b84g4ownjegz40jb.constant([20]),
    ESCAPE: $_b84g4ownjegz40jb.constant([27]),
    SPACE: $_b84g4ownjegz40jb.constant([32]),
    PAGEUP: $_b84g4ownjegz40jb.constant([33]),
    PAGEDOWN: $_b84g4ownjegz40jb.constant([34]),
    END: $_b84g4ownjegz40jb.constant([35]),
    HOME: $_b84g4ownjegz40jb.constant([36]),
    LEFT: $_b84g4ownjegz40jb.constant([37]),
    UP: $_b84g4ownjegz40jb.constant([38]),
    RIGHT: $_b84g4ownjegz40jb.constant([39]),
    DOWN: $_b84g4ownjegz40jb.constant([40]),
    INSERT: $_b84g4ownjegz40jb.constant([45]),
    DEL: $_b84g4ownjegz40jb.constant([46]),
    META: $_b84g4ownjegz40jb.constant([
      91,
      93,
      224
    ]),
    F10: $_b84g4ownjegz40jb.constant([121])
  };

  var cycleBy = function (value, delta, min, max) {
    var r = value + delta;
    if (r > max)
      return min;
    else
      return r < min ? max : r;
  };
  var cap = function (value, min, max) {
    if (value <= min)
      return min;
    else
      return value >= max ? max : value;
  };
  var $_665iqfzyjegz40xq = {
    cycleBy: cycleBy,
    cap: cap
  };

  var all$2 = function (predicate) {
    return descendants($_br73zsxnjegz40n3.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return $_353rcfwwjegz40kh.filter($_6rauxox7jegz40ll.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return $_353rcfwwjegz40kh.filter($_6rauxox7jegz40ll.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return $_353rcfwwjegz40kh.filter($_6rauxox7jegz40ll.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    $_353rcfwwjegz40kh.each($_6rauxox7jegz40ll.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_5o09cv100jegz40xt = {
    all: all$2,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$3 = function (selector) {
    return $_28r0umxijegz40mo.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_5o09cv100jegz40xt.ancestors(scope, function (e) {
      return $_28r0umxijegz40mo.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_5o09cv100jegz40xt.siblings(scope, function (e) {
      return $_28r0umxijegz40mo.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_5o09cv100jegz40xt.children(scope, function (e) {
      return $_28r0umxijegz40mo.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_28r0umxijegz40mo.all(selector, scope);
  };
  var $_7opypzzzjegz40xs = {
    all: all$3,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var first$2 = function (selector) {
    return $_28r0umxijegz40mo.one(selector);
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_g30u4yyzjegz40t7.ancestor(scope, function (e) {
      return $_28r0umxijegz40mo.is(e, selector);
    }, isRoot);
  };
  var sibling$2 = function (scope, selector) {
    return $_g30u4yyzjegz40t7.sibling(scope, function (e) {
      return $_28r0umxijegz40mo.is(e, selector);
    });
  };
  var child$3 = function (scope, selector) {
    return $_g30u4yyzjegz40t7.child(scope, function (e) {
      return $_28r0umxijegz40mo.is(e, selector);
    });
  };
  var descendant$2 = function (scope, selector) {
    return $_28r0umxijegz40mo.one(selector, scope);
  };
  var closest$2 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_28r0umxijegz40mo.is, ancestor$2, scope, selector, isRoot);
  };
  var $_eelz2c101jegz40xw = {
    first: first$2,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var dehighlightAll = function (component, hConfig, hState) {
    var highlighted = $_7opypzzzjegz40xs.descendants(component.element(), '.' + hConfig.highlightClass());
    $_353rcfwwjegz40kh.each(highlighted, function (h) {
      $_aoqcjmyrjegz40sq.remove(h, hConfig.highlightClass());
      component.getSystem().getByDom(h).each(function (target) {
        hConfig.onDehighlight()(component, target);
      });
    });
  };
  var dehighlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    $_aoqcjmyrjegz40sq.remove(target.element(), hConfig.highlightClass());
    if (wasHighlighted)
      hConfig.onDehighlight()(component, target);
  };
  var highlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    dehighlightAll(component, hConfig, hState);
    $_aoqcjmyrjegz40sq.add(target.element(), hConfig.highlightClass());
    if (!wasHighlighted)
      hConfig.onHighlight()(component, target);
  };
  var highlightFirst = function (component, hConfig, hState) {
    getFirst(component, hConfig, hState).each(function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightLast = function (component, hConfig, hState) {
    getLast(component, hConfig, hState).each(function (lastComp) {
      highlight(component, hConfig, hState, lastComp);
    });
  };
  var highlightAt = function (component, hConfig, hState, index) {
    getByIndex(component, hConfig, hState, index).fold(function (err) {
      throw new Error(err);
    }, function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightBy = function (component, hConfig, hState, predicate) {
    var items = $_7opypzzzjegz40xs.descendants(component.element(), '.' + hConfig.itemClass());
    var itemComps = $_88eph0y4jegz40p1.cat($_353rcfwwjegz40kh.map(items, function (i) {
      return component.getSystem().getByDom(i).toOption();
    }));
    var targetComp = $_353rcfwwjegz40kh.find(itemComps, predicate);
    targetComp.each(function (c) {
      highlight(component, hConfig, hState, c);
    });
  };
  var isHighlighted = function (component, hConfig, hState, queryTarget) {
    return $_aoqcjmyrjegz40sq.has(queryTarget.element(), hConfig.highlightClass());
  };
  var getHighlighted = function (component, hConfig, hState) {
    return $_eelz2c101jegz40xw.descendant(component.element(), '.' + hConfig.highlightClass()).bind(component.getSystem().getByDom);
  };
  var getByIndex = function (component, hConfig, hState, index) {
    var items = $_7opypzzzjegz40xs.descendants(component.element(), '.' + hConfig.itemClass());
    return Option.from(items[index]).fold(function () {
      return Result.error('No element found with index ' + index);
    }, component.getSystem().getByDom);
  };
  var getFirst = function (component, hConfig, hState) {
    return $_eelz2c101jegz40xw.descendant(component.element(), '.' + hConfig.itemClass()).bind(component.getSystem().getByDom);
  };
  var getLast = function (component, hConfig, hState) {
    var items = $_7opypzzzjegz40xs.descendants(component.element(), '.' + hConfig.itemClass());
    var last = items.length > 0 ? Option.some(items[items.length - 1]) : Option.none();
    return last.bind(component.getSystem().getByDom);
  };
  var getDelta = function (component, hConfig, hState, delta) {
    var items = $_7opypzzzjegz40xs.descendants(component.element(), '.' + hConfig.itemClass());
    var current = $_353rcfwwjegz40kh.findIndex(items, function (item) {
      return $_aoqcjmyrjegz40sq.has(item, hConfig.highlightClass());
    });
    return current.bind(function (selected) {
      var dest = $_665iqfzyjegz40xq.cycleBy(selected, delta, 0, items.length - 1);
      return component.getSystem().getByDom(items[dest]);
    });
  };
  var getPrevious = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, -1);
  };
  var getNext = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, +1);
  };
  var $_65b1l4zxjegz40xg = {
    dehighlightAll: dehighlightAll,
    dehighlight: dehighlight,
    highlight: highlight,
    highlightFirst: highlightFirst,
    highlightLast: highlightLast,
    highlightAt: highlightAt,
    highlightBy: highlightBy,
    isHighlighted: isHighlighted,
    getHighlighted: getHighlighted,
    getFirst: getFirst,
    getLast: getLast,
    getPrevious: getPrevious,
    getNext: getNext
  };

  var HighlightSchema = [
    $_cjikoqybjegz40q7.strict('highlightClass'),
    $_cjikoqybjegz40q7.strict('itemClass'),
    $_b1fv0nzajegz40ue.onHandler('onHighlight'),
    $_b1fv0nzajegz40ue.onHandler('onDehighlight')
  ];

  var Highlighting = $_2s5cqny6jegz40p5.create({
    fields: HighlightSchema,
    name: 'highlighting',
    apis: $_65b1l4zxjegz40xg
  });

  var dom = function () {
    var get = function (component) {
      return $_7nx9zfyxjegz40t1.search(component.element());
    };
    var set = function (component, focusee) {
      component.getSystem().triggerFocus(focusee, component.element());
    };
    return {
      get: get,
      set: set
    };
  };
  var highlights = function () {
    var get = function (component) {
      return Highlighting.getHighlighted(component).map(function (item) {
        return item.element();
      });
    };
    var set = function (component, element) {
      component.getSystem().getByDom(element).fold($_b84g4ownjegz40jb.noop, function (item) {
        Highlighting.highlight(component, item);
      });
    };
    return {
      get: get,
      set: set
    };
  };
  var $_g22iuzvjegz40xa = {
    dom: dom,
    highlights: highlights
  };

  var inSet = function (keys) {
    return function (event) {
      return $_353rcfwwjegz40kh.contains(keys, event.raw().which);
    };
  };
  var and = function (preds) {
    return function (event) {
      return $_353rcfwwjegz40kh.forall(preds, function (pred) {
        return pred(event);
      });
    };
  };
  var is$1 = function (key) {
    return function (event) {
      return event.raw().which === key;
    };
  };
  var isShift = function (event) {
    return event.raw().shiftKey === true;
  };
  var isControl = function (event) {
    return event.raw().ctrlKey === true;
  };
  var $_bra0kx104jegz40y3 = {
    inSet: inSet,
    and: and,
    is: is$1,
    isShift: isShift,
    isNotShift: $_b84g4ownjegz40jb.not(isShift),
    isControl: isControl,
    isNotControl: $_b84g4ownjegz40jb.not(isControl)
  };

  var basic = function (key, action) {
    return {
      matches: $_bra0kx104jegz40y3.is(key),
      classification: action
    };
  };
  var rule = function (matches, action) {
    return {
      matches: matches,
      classification: action
    };
  };
  var choose$2 = function (transitions, event) {
    var transition = $_353rcfwwjegz40kh.find(transitions, function (t) {
      return t.matches(event);
    });
    return transition.map(function (t) {
      return t.classification;
    });
  };
  var $_75ews4103jegz40y0 = {
    basic: basic,
    rule: rule,
    choose: choose$2
  };

  var typical = function (infoSchema, stateInit, getRules, getEvents, getApis, optFocusIn) {
    var schema = function () {
      return infoSchema.concat([
        $_cjikoqybjegz40q7.defaulted('focusManager', $_g22iuzvjegz40xa.dom()),
        $_b1fv0nzajegz40ue.output('handler', me),
        $_b1fv0nzajegz40ue.output('state', stateInit)
      ]);
    };
    var processKey = function (component, simulatedEvent, keyingConfig, keyingState) {
      var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
      return $_75ews4103jegz40y0.choose(rules, simulatedEvent.event()).bind(function (rule) {
        return rule(component, simulatedEvent, keyingConfig, keyingState);
      });
    };
    var toEvents = function (keyingConfig, keyingState) {
      var otherEvents = getEvents(keyingConfig, keyingState);
      var keyEvents = $_63ctkqy8jegz40pp.derive(optFocusIn.map(function (focusIn) {
        return $_63ctkqy8jegz40pp.run($_f4n44rwljegz40j4.focus(), function (component, simulatedEvent) {
          focusIn(component, keyingConfig, keyingState, simulatedEvent);
          simulatedEvent.stop();
        });
      }).toArray().concat([$_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.keydown(), function (component, simulatedEvent) {
          processKey(component, simulatedEvent, keyingConfig, keyingState).each(function (_) {
            simulatedEvent.stop();
          });
        })]));
      return $_6qf81kx2jegz40l1.deepMerge(otherEvents, keyEvents);
    };
    var me = {
      schema: schema,
      processKey: processKey,
      toEvents: toEvents,
      toApis: getApis
    };
    return me;
  };
  var $_6wf9xpzujegz40x6 = { typical: typical };

  var cyclePrev = function (values, index, predicate) {
    var before = $_353rcfwwjegz40kh.reverse(values.slice(0, index));
    var after = $_353rcfwwjegz40kh.reverse(values.slice(index + 1));
    return $_353rcfwwjegz40kh.find(before.concat(after), predicate);
  };
  var tryPrev = function (values, index, predicate) {
    var before = $_353rcfwwjegz40kh.reverse(values.slice(0, index));
    return $_353rcfwwjegz40kh.find(before, predicate);
  };
  var cycleNext = function (values, index, predicate) {
    var before = values.slice(0, index);
    var after = values.slice(index + 1);
    return $_353rcfwwjegz40kh.find(after.concat(before), predicate);
  };
  var tryNext = function (values, index, predicate) {
    var after = values.slice(index + 1);
    return $_353rcfwwjegz40kh.find(after, predicate);
  };
  var $_78lb01105jegz40y9 = {
    cyclePrev: cyclePrev,
    cycleNext: cycleNext,
    tryPrev: tryPrev,
    tryNext: tryNext
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_ai0f16108jegz40ys = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_6zfdmjx3jegz40l3.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_ai0f16108jegz40ys.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_ai0f16108jegz40ys.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$2 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_4vnyr3x4jegz40l5.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_4vnyr3x4jegz40l5.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$3 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_br73zsxnjegz40n3.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_ai0f16108jegz40ys.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return Option.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_ai0f16108jegz40ys.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_30i27zxjjegz40mu.fromTag(tag);
    set$2(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$5 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_bcxlrzxvjegz40nw.has(element, 'style') && $_du558bwzjegz40kv.trim($_bcxlrzxvjegz40nw.get(element, 'style')) === '') {
      $_bcxlrzxvjegz40nw.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_bcxlrzxvjegz40nw.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_bcxlrzxvjegz40nw.remove : $_bcxlrzxvjegz40nw.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy$1 = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_ai0f16108jegz40ys.isSupported(sourceDom) && $_ai0f16108jegz40ys.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$2(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_bge3bexojegz40n6.isElement(source) || !$_bge3bexojegz40n6.isElement(destination))
      return;
    $_353rcfwwjegz40kh.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_flvpsp107jegz40ye = {
    copy: copy$1,
    set: set$2,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$5,
    get: get$3,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  function Dimension (name, getOffset) {
    var set = function (element, h) {
      if (!$_6zfdmjx3jegz40l3.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_ai0f16108jegz40ys.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_flvpsp107jegz40ye.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_353rcfwwjegz40kh.foldl(properties, function (acc, property) {
        var val = $_flvpsp107jegz40ye.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  }

  var api = Dimension('height', function (element) {
    return $_br73zsxnjegz40n3.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$3 = function (element, h) {
    api.set(element, h);
  };
  var get$4 = function (element) {
    return api.get(element);
  };
  var getOuter$1 = function (element) {
    return api.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api.max(element, value, inclusions);
    $_flvpsp107jegz40ye.set(element, 'max-height', absMax + 'px');
  };
  var $_961ns8106jegz40yc = {
    set: set$3,
    get: get$4,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var create$2 = function (cyclicField) {
    var schema = [
      $_cjikoqybjegz40q7.option('onEscape'),
      $_cjikoqybjegz40q7.option('onEnter'),
      $_cjikoqybjegz40q7.defaulted('selector', '[data-alloy-tabstop="true"]'),
      $_cjikoqybjegz40q7.defaulted('firstTabstop', 0),
      $_cjikoqybjegz40q7.defaulted('useTabstopAt', $_b84g4ownjegz40jb.constant(true)),
      $_cjikoqybjegz40q7.option('visibilitySelector')
    ].concat([cyclicField]);
    var isVisible = function (tabbingConfig, element) {
      var target = tabbingConfig.visibilitySelector().bind(function (sel) {
        return $_eelz2c101jegz40xw.closest(element, sel);
      }).getOr(element);
      return $_961ns8106jegz40yc.get(target) > 0;
    };
    var findInitial = function (component, tabbingConfig) {
      var tabstops = $_7opypzzzjegz40xs.descendants(component.element(), tabbingConfig.selector());
      var visibles = $_353rcfwwjegz40kh.filter(tabstops, function (elem) {
        return isVisible(tabbingConfig, elem);
      });
      return Option.from(visibles[tabbingConfig.firstTabstop()]);
    };
    var findCurrent = function (component, tabbingConfig) {
      return tabbingConfig.focusManager().get(component).bind(function (elem) {
        return $_eelz2c101jegz40xw.closest(elem, tabbingConfig.selector());
      });
    };
    var isTabstop = function (tabbingConfig, element) {
      return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt()(element);
    };
    var focusIn = function (component, tabbingConfig, tabbingState) {
      findInitial(component, tabbingConfig).each(function (target) {
        tabbingConfig.focusManager().set(component, target);
      });
    };
    var goFromTabstop = function (component, tabstops, stopIndex, tabbingConfig, cycle) {
      return cycle(tabstops, stopIndex, function (elem) {
        return isTabstop(tabbingConfig, elem);
      }).fold(function () {
        return tabbingConfig.cyclic() ? Option.some(true) : Option.none();
      }, function (target) {
        tabbingConfig.focusManager().set(component, target);
        return Option.some(true);
      });
    };
    var go = function (component, simulatedEvent, tabbingConfig, cycle) {
      var tabstops = $_7opypzzzjegz40xs.descendants(component.element(), tabbingConfig.selector());
      return findCurrent(component, tabbingConfig).bind(function (tabstop) {
        var optStopIndex = $_353rcfwwjegz40kh.findIndex(tabstops, $_b84g4ownjegz40jb.curry($_47k0n6xdjegz40mb.eq, tabstop));
        return optStopIndex.bind(function (stopIndex) {
          return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
        });
      });
    };
    var goBackwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_78lb01105jegz40y9.cyclePrev : $_78lb01105jegz40y9.tryPrev;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var goForwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_78lb01105jegz40y9.cycleNext : $_78lb01105jegz40y9.tryNext;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var execute = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEnter().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var exit = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEscape().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var getRules = $_b84g4ownjegz40jb.constant([
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
        $_bra0kx104jegz40y3.isShift,
        $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.TAB())
      ]), goBackwards),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.TAB()), goForwards),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ESCAPE()), exit),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
        $_bra0kx104jegz40y3.isNotShift,
        $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ENTER())
      ]), execute)
    ]);
    var getEvents = $_b84g4ownjegz40jb.constant({});
    var getApis = $_b84g4ownjegz40jb.constant({});
    return $_6wf9xpzujegz40x6.typical(schema, $_xbi0rynjegz40sh.init, getRules, getEvents, getApis, Option.some(focusIn));
  };
  var $_599wl1zsjegz40ws = { create: create$2 };

  var AcyclicType = $_599wl1zsjegz40ws.create($_cjikoqybjegz40q7.state('cyclic', $_b84g4ownjegz40jb.constant(false)));

  var CyclicType = $_599wl1zsjegz40ws.create($_cjikoqybjegz40q7.state('cyclic', $_b84g4ownjegz40jb.constant(true)));

  var inside = function (target) {
    return $_bge3bexojegz40n6.name(target) === 'input' && $_bcxlrzxvjegz40nw.get(target, 'type') !== 'radio' || $_bge3bexojegz40n6.name(target) === 'textarea';
  };
  var $_cmryh410cjegz40z5 = { inside: inside };

  var doDefaultExecute = function (component, simulatedEvent, focused) {
    $_78tntkwkjegz40iy.dispatch(component, focused, $_f4n44rwljegz40j4.execute());
    return Option.some(true);
  };
  var defaultExecute = function (component, simulatedEvent, focused) {
    return $_cmryh410cjegz40z5.inside(focused) && $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.SPACE())(simulatedEvent.event()) ? Option.none() : doDefaultExecute(component, simulatedEvent, focused);
  };
  var $_ara01v10djegz40z8 = { defaultExecute: defaultExecute };

  var schema$1 = [
    $_cjikoqybjegz40q7.defaulted('execute', $_ara01v10djegz40z8.defaultExecute),
    $_cjikoqybjegz40q7.defaulted('useSpace', false),
    $_cjikoqybjegz40q7.defaulted('useEnter', true),
    $_cjikoqybjegz40q7.defaulted('useControlEnter', false),
    $_cjikoqybjegz40q7.defaulted('useDown', false)
  ];
  var execute = function (component, simulatedEvent, executeConfig, executeState) {
    return executeConfig.execute()(component, simulatedEvent, component.element());
  };
  var getRules = function (component, simulatedEvent, executeConfig, executeState) {
    var spaceExec = executeConfig.useSpace() && !$_cmryh410cjegz40z5.inside(component.element()) ? $_77tdgaztjegz40x3.SPACE() : [];
    var enterExec = executeConfig.useEnter() ? $_77tdgaztjegz40x3.ENTER() : [];
    var downExec = executeConfig.useDown() ? $_77tdgaztjegz40x3.DOWN() : [];
    var execKeys = spaceExec.concat(enterExec).concat(downExec);
    return [$_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet(execKeys), execute)].concat(executeConfig.useControlEnter() ? [$_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
        $_bra0kx104jegz40y3.isControl,
        $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ENTER())
      ]), execute)] : []);
  };
  var getEvents = $_b84g4ownjegz40jb.constant({});
  var getApis = $_b84g4ownjegz40jb.constant({});
  var ExecutionType = $_6wf9xpzujegz40x6.typical(schema$1, $_xbi0rynjegz40sh.init, getRules, getEvents, getApis, Option.none());

  var flatgrid = function (spec) {
    var dimensions = Cell(Option.none());
    var setGridSize = function (numRows, numColumns) {
      dimensions.set(Option.some({
        numRows: $_b84g4ownjegz40jb.constant(numRows),
        numColumns: $_b84g4ownjegz40jb.constant(numColumns)
      }));
    };
    var getNumRows = function () {
      return dimensions.get().map(function (d) {
        return d.numRows();
      });
    };
    var getNumColumns = function () {
      return dimensions.get().map(function (d) {
        return d.numColumns();
      });
    };
    return BehaviourState({
      readState: $_b84g4ownjegz40jb.constant({}),
      setGridSize: setGridSize,
      getNumRows: getNumRows,
      getNumColumns: getNumColumns
    });
  };
  var init$1 = function (spec) {
    return spec.state()(spec);
  };
  var $_8u9ppv10fjegz40zj = {
    flatgrid: flatgrid,
    init: init$1
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_flvpsp107jegz40ye.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_7mycka10hjegz40zr = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var useH = function (movement) {
    return function (component, simulatedEvent, config, state) {
      var move = movement(component.element());
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var west = function (moveLeft, moveRight) {
    var movement = $_7mycka10hjegz40zr.onDirection(moveLeft, moveRight);
    return useH(movement);
  };
  var east = function (moveLeft, moveRight) {
    var movement = $_7mycka10hjegz40zr.onDirection(moveRight, moveLeft);
    return useH(movement);
  };
  var useV = function (move) {
    return function (component, simulatedEvent, config, state) {
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var use = function (move, component, simulatedEvent, config, state) {
    var outcome = config.focusManager().get(component).bind(function (focused) {
      return move(component.element(), focused, config, state);
    });
    return outcome.map(function (newFocus) {
      config.focusManager().set(component, newFocus);
      return true;
    });
  };
  var $_jhu3k10gjegz40zp = {
    east: east,
    west: west,
    north: useV,
    south: useV,
    move: useV
  };

  var indexInfo = $_14zxckx8jegz40lu.immutableBag([
    'index',
    'candidates'
  ], []);
  var locate = function (candidates, predicate) {
    return $_353rcfwwjegz40kh.findIndex(candidates, predicate).map(function (index) {
      return indexInfo({
        index: index,
        candidates: candidates
      });
    });
  };
  var $_99l5qr10jjegz40zz = { locate: locate };

  var visibilityToggler = function (element, property, hiddenValue, visibleValue) {
    var initial = $_flvpsp107jegz40ye.get(element, property);
    if (initial === undefined)
      initial = '';
    var value = initial === hiddenValue ? visibleValue : hiddenValue;
    var off = $_b84g4ownjegz40jb.curry($_flvpsp107jegz40ye.set, element, property, initial);
    var on = $_b84g4ownjegz40jb.curry($_flvpsp107jegz40ye.set, element, property, value);
    return Toggler(off, on, false);
  };
  var toggler$1 = function (element) {
    return visibilityToggler(element, 'visibility', 'hidden', 'visible');
  };
  var displayToggler = function (element, value) {
    return visibilityToggler(element, 'display', 'none', value);
  };
  var isHidden = function (dom) {
    return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
  };
  var isVisible = function (element) {
    var dom = element.dom();
    return !isHidden(dom);
  };
  var $_8bffa610kjegz4102 = {
    toggler: toggler$1,
    displayToggler: displayToggler,
    isVisible: isVisible
  };

  var locateVisible = function (container, current, selector) {
    var filter = $_8bffa610kjegz4102.isVisible;
    return locateIn(container, current, selector, filter);
  };
  var locateIn = function (container, current, selector, filter) {
    var predicate = $_b84g4ownjegz40jb.curry($_47k0n6xdjegz40mb.eq, current);
    var candidates = $_7opypzzzjegz40xs.descendants(container, selector);
    var visible = $_353rcfwwjegz40kh.filter(candidates, $_8bffa610kjegz4102.isVisible);
    return $_99l5qr10jjegz40zz.locate(visible, predicate);
  };
  var findIndex$2 = function (elements, target) {
    return $_353rcfwwjegz40kh.findIndex(elements, function (elem) {
      return $_47k0n6xdjegz40mb.eq(target, elem);
    });
  };
  var $_ld1vz10ijegz40zt = {
    locateVisible: locateVisible,
    locateIn: locateIn,
    findIndex: findIndex$2
  };

  var withGrid = function (values, index, numCols, f) {
    var oldRow = Math.floor(index / numCols);
    var oldColumn = index % numCols;
    return f(oldRow, oldColumn).bind(function (address) {
      var newIndex = address.row() * numCols + address.column();
      return newIndex >= 0 && newIndex < values.length ? Option.some(values[newIndex]) : Option.none();
    });
  };
  var cycleHorizontal = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var onLastRow = oldRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
      var newColumn = $_665iqfzyjegz40xq.cycleBy(oldColumn, delta, 0, colsInRow - 1);
      return Option.some({
        row: $_b84g4ownjegz40jb.constant(oldRow),
        column: $_b84g4ownjegz40jb.constant(newColumn)
      });
    });
  };
  var cycleVertical = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var newRow = $_665iqfzyjegz40xq.cycleBy(oldRow, delta, 0, numRows - 1);
      var onLastRow = newRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
      var newCol = $_665iqfzyjegz40xq.cap(oldColumn, 0, colsInRow - 1);
      return Option.some({
        row: $_b84g4ownjegz40jb.constant(newRow),
        column: $_b84g4ownjegz40jb.constant(newCol)
      });
    });
  };
  var cycleRight = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, +1);
  };
  var cycleLeft = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, -1);
  };
  var cycleUp = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, -1);
  };
  var cycleDown = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, +1);
  };
  var $_bt0ntu10ljegz4106 = {
    cycleDown: cycleDown,
    cycleUp: cycleUp,
    cycleLeft: cycleLeft,
    cycleRight: cycleRight
  };

  var schema$2 = [
    $_cjikoqybjegz40q7.strict('selector'),
    $_cjikoqybjegz40q7.defaulted('execute', $_ara01v10djegz40z8.defaultExecute),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onEscape'),
    $_cjikoqybjegz40q7.defaulted('captureTab', false),
    $_b1fv0nzajegz40ue.initSize()
  ];
  var focusIn = function (component, gridConfig, gridState) {
    $_eelz2c101jegz40xw.descendant(component.element(), gridConfig.selector()).each(function (first) {
      gridConfig.focusManager().set(component, first);
    });
  };
  var findCurrent = function (component, gridConfig) {
    return gridConfig.focusManager().get(component).bind(function (elem) {
      return $_eelz2c101jegz40xw.closest(elem, gridConfig.selector());
    });
  };
  var execute$1 = function (component, simulatedEvent, gridConfig, gridState) {
    return findCurrent(component, gridConfig).bind(function (focused) {
      return gridConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var doMove = function (cycle) {
    return function (element, focused, gridConfig, gridState) {
      return $_ld1vz10ijegz40zt.locateVisible(element, focused, gridConfig.selector()).bind(function (identified) {
        return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize().numRows()), gridState.getNumColumns().getOr(gridConfig.initSize().numColumns()));
      });
    };
  };
  var handleTab = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.captureTab() ? Option.some(true) : Option.none();
  };
  var doEscape = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.onEscape()(component, simulatedEvent);
  };
  var moveLeft = doMove($_bt0ntu10ljegz4106.cycleLeft);
  var moveRight = doMove($_bt0ntu10ljegz4106.cycleRight);
  var moveNorth = doMove($_bt0ntu10ljegz4106.cycleUp);
  var moveSouth = doMove($_bt0ntu10ljegz4106.cycleDown);
  var getRules$1 = $_b84g4ownjegz40jb.constant([
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.LEFT()), $_jhu3k10gjegz40zp.west(moveLeft, moveRight)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.RIGHT()), $_jhu3k10gjegz40zp.east(moveLeft, moveRight)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.UP()), $_jhu3k10gjegz40zp.north(moveNorth)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.DOWN()), $_jhu3k10gjegz40zp.south(moveSouth)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
      $_bra0kx104jegz40y3.isShift,
      $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.TAB())
    ]), handleTab),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
      $_bra0kx104jegz40y3.isNotShift,
      $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.TAB())
    ]), handleTab),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ESCAPE()), doEscape),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.SPACE().concat($_77tdgaztjegz40x3.ENTER())), execute$1)
  ]);
  var getEvents$1 = $_b84g4ownjegz40jb.constant({});
  var getApis$1 = {};
  var FlatgridType = $_6wf9xpzujegz40x6.typical(schema$2, $_8u9ppv10fjegz40zj.flatgrid, getRules$1, getEvents$1, getApis$1, Option.some(focusIn));

  var horizontal = function (container, selector, current, delta) {
    return $_ld1vz10ijegz40zt.locateVisible(container, current, selector, $_b84g4ownjegz40jb.constant(true)).bind(function (identified) {
      var index = identified.index();
      var candidates = identified.candidates();
      var newIndex = $_665iqfzyjegz40xq.cycleBy(index, delta, 0, candidates.length - 1);
      return Option.from(candidates[newIndex]);
    });
  };
  var $_fpuu2o10njegz410o = { horizontal: horizontal };

  var schema$3 = [
    $_cjikoqybjegz40q7.strict('selector'),
    $_cjikoqybjegz40q7.defaulted('getInitial', Option.none),
    $_cjikoqybjegz40q7.defaulted('execute', $_ara01v10djegz40z8.defaultExecute),
    $_cjikoqybjegz40q7.defaulted('executeOnMove', false)
  ];
  var findCurrent$1 = function (component, flowConfig) {
    return flowConfig.focusManager().get(component).bind(function (elem) {
      return $_eelz2c101jegz40xw.closest(elem, flowConfig.selector());
    });
  };
  var execute$2 = function (component, simulatedEvent, flowConfig) {
    return findCurrent$1(component, flowConfig).bind(function (focused) {
      return flowConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$1 = function (component, flowConfig) {
    flowConfig.getInitial()(component).or($_eelz2c101jegz40xw.descendant(component.element(), flowConfig.selector())).each(function (first) {
      flowConfig.focusManager().set(component, first);
    });
  };
  var moveLeft$1 = function (element, focused, info) {
    return $_fpuu2o10njegz410o.horizontal(element, info.selector(), focused, -1);
  };
  var moveRight$1 = function (element, focused, info) {
    return $_fpuu2o10njegz410o.horizontal(element, info.selector(), focused, +1);
  };
  var doMove$1 = function (movement) {
    return function (component, simulatedEvent, flowConfig) {
      return movement(component, simulatedEvent, flowConfig).bind(function () {
        return flowConfig.executeOnMove() ? execute$2(component, simulatedEvent, flowConfig) : Option.some(true);
      });
    };
  };
  var getRules$2 = function (_) {
    return [
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.LEFT().concat($_77tdgaztjegz40x3.UP())), doMove$1($_jhu3k10gjegz40zp.west(moveLeft$1, moveRight$1))),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.RIGHT().concat($_77tdgaztjegz40x3.DOWN())), doMove$1($_jhu3k10gjegz40zp.east(moveLeft$1, moveRight$1))),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ENTER()), execute$2),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.SPACE()), execute$2)
    ];
  };
  var getEvents$2 = $_b84g4ownjegz40jb.constant({});
  var getApis$2 = $_b84g4ownjegz40jb.constant({});
  var FlowType = $_6wf9xpzujegz40x6.typical(schema$3, $_xbi0rynjegz40sh.init, getRules$2, getEvents$2, getApis$2, Option.some(focusIn$1));

  var outcome = $_14zxckx8jegz40lu.immutableBag([
    'rowIndex',
    'columnIndex',
    'cell'
  ], []);
  var toCell = function (matrix, rowIndex, columnIndex) {
    return Option.from(matrix[rowIndex]).bind(function (row) {
      return Option.from(row[columnIndex]).map(function (cell) {
        return outcome({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          cell: cell
        });
      });
    });
  };
  var cycleHorizontal$1 = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_665iqfzyjegz40xq.cycleBy(startCol, deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var cycleVertical$1 = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_665iqfzyjegz40xq.cycleBy(startRow, deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_665iqfzyjegz40xq.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var moveHorizontal = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_665iqfzyjegz40xq.cap(startCol + deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var moveVertical = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_665iqfzyjegz40xq.cap(startRow + deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_665iqfzyjegz40xq.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var cycleRight$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, +1);
  };
  var cycleLeft$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, -1);
  };
  var cycleUp$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, -1);
  };
  var cycleDown$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, +1);
  };
  var moveLeft$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, -1);
  };
  var moveRight$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, +1);
  };
  var moveUp = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, -1);
  };
  var moveDown = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, +1);
  };
  var $_483ifp10pjegz4112 = {
    cycleRight: cycleRight$1,
    cycleLeft: cycleLeft$1,
    cycleUp: cycleUp$1,
    cycleDown: cycleDown$1,
    moveLeft: moveLeft$2,
    moveRight: moveRight$2,
    moveUp: moveUp,
    moveDown: moveDown
  };

  var schema$4 = [
    $_cjikoqybjegz40q7.strictObjOf('selectors', [
      $_cjikoqybjegz40q7.strict('row'),
      $_cjikoqybjegz40q7.strict('cell')
    ]),
    $_cjikoqybjegz40q7.defaulted('cycles', true),
    $_cjikoqybjegz40q7.defaulted('previousSelector', Option.none),
    $_cjikoqybjegz40q7.defaulted('execute', $_ara01v10djegz40z8.defaultExecute)
  ];
  var focusIn$2 = function (component, matrixConfig) {
    var focused = matrixConfig.previousSelector()(component).orThunk(function () {
      var selectors = matrixConfig.selectors();
      return $_eelz2c101jegz40xw.descendant(component.element(), selectors.cell());
    });
    focused.each(function (cell) {
      matrixConfig.focusManager().set(component, cell);
    });
  };
  var execute$3 = function (component, simulatedEvent, matrixConfig) {
    return $_7nx9zfyxjegz40t1.search(component.element()).bind(function (focused) {
      return matrixConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var toMatrix = function (rows, matrixConfig) {
    return $_353rcfwwjegz40kh.map(rows, function (row) {
      return $_7opypzzzjegz40xs.descendants(row, matrixConfig.selectors().cell());
    });
  };
  var doMove$2 = function (ifCycle, ifMove) {
    return function (element, focused, matrixConfig) {
      var move = matrixConfig.cycles() ? ifCycle : ifMove;
      return $_eelz2c101jegz40xw.closest(focused, matrixConfig.selectors().row()).bind(function (inRow) {
        var cellsInRow = $_7opypzzzjegz40xs.descendants(inRow, matrixConfig.selectors().cell());
        return $_ld1vz10ijegz40zt.findIndex(cellsInRow, focused).bind(function (colIndex) {
          var allRows = $_7opypzzzjegz40xs.descendants(element, matrixConfig.selectors().row());
          return $_ld1vz10ijegz40zt.findIndex(allRows, inRow).bind(function (rowIndex) {
            var matrix = toMatrix(allRows, matrixConfig);
            return move(matrix, rowIndex, colIndex).map(function (next) {
              return next.cell();
            });
          });
        });
      });
    };
  };
  var moveLeft$3 = doMove$2($_483ifp10pjegz4112.cycleLeft, $_483ifp10pjegz4112.moveLeft);
  var moveRight$3 = doMove$2($_483ifp10pjegz4112.cycleRight, $_483ifp10pjegz4112.moveRight);
  var moveNorth$1 = doMove$2($_483ifp10pjegz4112.cycleUp, $_483ifp10pjegz4112.moveUp);
  var moveSouth$1 = doMove$2($_483ifp10pjegz4112.cycleDown, $_483ifp10pjegz4112.moveDown);
  var getRules$3 = $_b84g4ownjegz40jb.constant([
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.LEFT()), $_jhu3k10gjegz40zp.west(moveLeft$3, moveRight$3)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.RIGHT()), $_jhu3k10gjegz40zp.east(moveLeft$3, moveRight$3)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.UP()), $_jhu3k10gjegz40zp.north(moveNorth$1)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.DOWN()), $_jhu3k10gjegz40zp.south(moveSouth$1)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.SPACE().concat($_77tdgaztjegz40x3.ENTER())), execute$3)
  ]);
  var getEvents$3 = $_b84g4ownjegz40jb.constant({});
  var getApis$3 = $_b84g4ownjegz40jb.constant({});
  var MatrixType = $_6wf9xpzujegz40x6.typical(schema$4, $_xbi0rynjegz40sh.init, getRules$3, getEvents$3, getApis$3, Option.some(focusIn$2));

  var schema$5 = [
    $_cjikoqybjegz40q7.strict('selector'),
    $_cjikoqybjegz40q7.defaulted('execute', $_ara01v10djegz40z8.defaultExecute),
    $_cjikoqybjegz40q7.defaulted('moveOnTab', false)
  ];
  var execute$4 = function (component, simulatedEvent, menuConfig) {
    return menuConfig.focusManager().get(component).bind(function (focused) {
      return menuConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$3 = function (component, menuConfig, simulatedEvent) {
    $_eelz2c101jegz40xw.descendant(component.element(), menuConfig.selector()).each(function (first) {
      menuConfig.focusManager().set(component, first);
    });
  };
  var moveUp$1 = function (element, focused, info) {
    return $_fpuu2o10njegz410o.horizontal(element, info.selector(), focused, -1);
  };
  var moveDown$1 = function (element, focused, info) {
    return $_fpuu2o10njegz410o.horizontal(element, info.selector(), focused, +1);
  };
  var fireShiftTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_jhu3k10gjegz40zp.move(moveUp$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var fireTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_jhu3k10gjegz40zp.move(moveDown$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var getRules$4 = $_b84g4ownjegz40jb.constant([
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.UP()), $_jhu3k10gjegz40zp.move(moveUp$1)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.DOWN()), $_jhu3k10gjegz40zp.move(moveDown$1)),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
      $_bra0kx104jegz40y3.isShift,
      $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.TAB())
    ]), fireShiftTab),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
      $_bra0kx104jegz40y3.isNotShift,
      $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.TAB())
    ]), fireTab),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ENTER()), execute$4),
    $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.SPACE()), execute$4)
  ]);
  var getEvents$4 = $_b84g4ownjegz40jb.constant({});
  var getApis$4 = $_b84g4ownjegz40jb.constant({});
  var MenuType = $_6wf9xpzujegz40x6.typical(schema$5, $_xbi0rynjegz40sh.init, getRules$4, getEvents$4, getApis$4, Option.some(focusIn$3));

  var schema$6 = [
    $_b1fv0nzajegz40ue.onKeyboardHandler('onSpace'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onEnter'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onShiftEnter'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onLeft'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onRight'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onTab'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onShiftTab'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onUp'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onDown'),
    $_b1fv0nzajegz40ue.onKeyboardHandler('onEscape'),
    $_cjikoqybjegz40q7.option('focusIn')
  ];
  var getRules$5 = function (component, simulatedEvent, executeInfo) {
    return [
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.SPACE()), executeInfo.onSpace()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
        $_bra0kx104jegz40y3.isNotShift,
        $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ENTER())
      ]), executeInfo.onEnter()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
        $_bra0kx104jegz40y3.isShift,
        $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ENTER())
      ]), executeInfo.onShiftEnter()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
        $_bra0kx104jegz40y3.isShift,
        $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.TAB())
      ]), executeInfo.onShiftTab()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.and([
        $_bra0kx104jegz40y3.isNotShift,
        $_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.TAB())
      ]), executeInfo.onTab()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.UP()), executeInfo.onUp()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.DOWN()), executeInfo.onDown()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.LEFT()), executeInfo.onLeft()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.RIGHT()), executeInfo.onRight()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.SPACE()), executeInfo.onSpace()),
      $_75ews4103jegz40y0.rule($_bra0kx104jegz40y3.inSet($_77tdgaztjegz40x3.ESCAPE()), executeInfo.onEscape())
    ];
  };
  var focusIn$4 = function (component, executeInfo) {
    return executeInfo.focusIn().bind(function (f) {
      return f(component, executeInfo);
    });
  };
  var getEvents$5 = $_b84g4ownjegz40jb.constant({});
  var getApis$5 = $_b84g4ownjegz40jb.constant({});
  var SpecialType = $_6wf9xpzujegz40x6.typical(schema$6, $_xbi0rynjegz40sh.init, getRules$5, getEvents$5, getApis$5, Option.some(focusIn$4));

  var $_43te0izqjegz40wg = {
    acyclic: AcyclicType.schema(),
    cyclic: CyclicType.schema(),
    flow: FlowType.schema(),
    flatgrid: FlatgridType.schema(),
    matrix: MatrixType.schema(),
    execution: ExecutionType.schema(),
    menu: MenuType.schema(),
    special: SpecialType.schema()
  };

  var Keying = $_2s5cqny6jegz40p5.createModes({
    branchKey: 'mode',
    branches: $_43te0izqjegz40wg,
    name: 'keying',
    active: {
      events: function (keyingConfig, keyingState) {
        var handler = keyingConfig.handler();
        return handler.toEvents(keyingConfig, keyingState);
      }
    },
    apis: {
      focusIn: function (component) {
        component.getSystem().triggerFocus(component.element(), component.element());
      },
      setGridSize: function (component, keyConfig, keyState, numRows, numColumns) {
        if (!$_75j08mxwjegz40o2.hasKey(keyState, 'setGridSize')) {
          console.error('Layout does not support setGridSize');
        } else {
          keyState.setGridSize(numRows, numColumns);
        }
      }
    },
    state: $_8u9ppv10fjegz40zj
  });

  var field$1 = function (name, forbidden) {
    return $_cjikoqybjegz40q7.defaultedObjOf(name, {}, $_353rcfwwjegz40kh.map(forbidden, function (f) {
      return $_cjikoqybjegz40q7.forbid(f.name(), 'Cannot configure ' + f.name() + ' for ' + name);
    }).concat([$_cjikoqybjegz40q7.state('dump', $_b84g4ownjegz40jb.identity)]));
  };
  var get$5 = function (data) {
    return data.dump();
  };
  var $_4ipd2i10sjegz411l = {
    field: field$1,
    get: get$5
  };

  var unique = 0;
  var generate$1 = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };
  var $_g605fa10vjegz4123 = { generate: generate$1 };

  var premadeTag = $_g605fa10vjegz4123.generate('alloy-premade');
  var apiConfig = $_g605fa10vjegz4123.generate('api');
  var premade = function (comp) {
    return $_75j08mxwjegz40o2.wrap(premadeTag, comp);
  };
  var getPremade = function (spec) {
    return $_75j08mxwjegz40o2.readOptFrom(spec, premadeTag);
  };
  var makeApi = function (f) {
    return $_2r7ga7ykjegz40rv.markAsSketchApi(function (component) {
      var args = Array.prototype.slice.call(arguments, 0);
      var spi = component.config(apiConfig);
      return f.apply(undefined, [spi].concat(args));
    }, f);
  };
  var $_fv6fv410ujegz411y = {
    apiConfig: $_b84g4ownjegz40jb.constant(apiConfig),
    makeApi: makeApi,
    premade: premade,
    getPremade: getPremade
  };

  var adt$2 = $_4n552cy0jegz40oo.generate([
    { required: ['data'] },
    { external: ['data'] },
    { optional: ['data'] },
    { group: ['data'] }
  ]);
  var fFactory = $_cjikoqybjegz40q7.defaulted('factory', { sketch: $_b84g4ownjegz40jb.identity });
  var fSchema = $_cjikoqybjegz40q7.defaulted('schema', []);
  var fName = $_cjikoqybjegz40q7.strict('name');
  var fPname = $_cjikoqybjegz40q7.field('pname', 'pname', $_an0j3iycjegz40qj.defaultedThunk(function (typeSpec) {
    return '<alloy.' + $_g605fa10vjegz4123.generate(typeSpec.name) + '>';
  }), $_fokpo2yijegz40rm.anyValue());
  var fDefaults = $_cjikoqybjegz40q7.defaulted('defaults', $_b84g4ownjegz40jb.constant({}));
  var fOverrides = $_cjikoqybjegz40q7.defaulted('overrides', $_b84g4ownjegz40jb.constant({}));
  var requiredSpec = $_fokpo2yijegz40rm.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var externalSpec = $_fokpo2yijegz40rm.objOf([
    fFactory,
    fSchema,
    fName,
    fDefaults,
    fOverrides
  ]);
  var optionalSpec = $_fokpo2yijegz40rm.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var groupSpec = $_fokpo2yijegz40rm.objOf([
    fFactory,
    fSchema,
    fName,
    $_cjikoqybjegz40q7.strict('unit'),
    fPname,
    fDefaults,
    fOverrides
  ]);
  var asNamedPart = function (part) {
    return part.fold(Option.some, Option.none, Option.some, Option.some);
  };
  var name$1 = function (part) {
    var get = function (data) {
      return data.name();
    };
    return part.fold(get, get, get, get);
  };
  var asCommon = function (part) {
    return part.fold($_b84g4ownjegz40jb.identity, $_b84g4ownjegz40jb.identity, $_b84g4ownjegz40jb.identity, $_b84g4ownjegz40jb.identity);
  };
  var convert = function (adtConstructor, partSpec) {
    return function (spec) {
      var data = $_fokpo2yijegz40rm.asStructOrDie('Converting part type', partSpec, spec);
      return adtConstructor(data);
    };
  };
  var $_ev0b2610zjegz412z = {
    required: convert(adt$2.required, requiredSpec),
    external: convert(adt$2.external, externalSpec),
    optional: convert(adt$2.optional, optionalSpec),
    group: convert(adt$2.group, groupSpec),
    asNamedPart: asNamedPart,
    name: name$1,
    asCommon: asCommon,
    original: $_b84g4ownjegz40jb.constant('entirety')
  };

  var placeholder = 'placeholder';
  var adt$3 = $_4n552cy0jegz40oo.generate([
    {
      single: [
        'required',
        'valueThunk'
      ]
    },
    {
      multiple: [
        'required',
        'valueThunks'
      ]
    }
  ]);
  var isSubstitute = function (uiType) {
    return $_353rcfwwjegz40kh.contains([placeholder], uiType);
  };
  var subPlaceholder = function (owner, detail, compSpec, placeholders) {
    if (owner.exists(function (o) {
        return o !== compSpec.owner;
      }))
      return adt$3.single(true, $_b84g4ownjegz40jb.constant(compSpec));
    return $_75j08mxwjegz40o2.readOptFrom(placeholders, compSpec.name).fold(function () {
      throw new Error('Unknown placeholder component: ' + compSpec.name + '\nKnown: [' + $_4vnyr3x4jegz40l5.keys(placeholders) + ']\nNamespace: ' + owner.getOr('none') + '\nSpec: ' + $_6dqjd6yhjegz40rj.stringify(compSpec, null, 2));
    }, function (newSpec) {
      return newSpec.replace();
    });
  };
  var scan = function (owner, detail, compSpec, placeholders) {
    if (compSpec.uiType === placeholder)
      return subPlaceholder(owner, detail, compSpec, placeholders);
    else
      return adt$3.single(false, $_b84g4ownjegz40jb.constant(compSpec));
  };
  var substitute = function (owner, detail, compSpec, placeholders) {
    var base = scan(owner, detail, compSpec, placeholders);
    return base.fold(function (req, valueThunk) {
      var value = valueThunk(detail, compSpec.config, compSpec.validated);
      var childSpecs = $_75j08mxwjegz40o2.readOptFrom(value, 'components').getOr([]);
      var substituted = $_353rcfwwjegz40kh.bind(childSpecs, function (c) {
        return substitute(owner, detail, c, placeholders);
      });
      return [$_6qf81kx2jegz40l1.deepMerge(value, { components: substituted })];
    }, function (req, valuesThunk) {
      var values = valuesThunk(detail, compSpec.config, compSpec.validated);
      return values;
    });
  };
  var substituteAll = function (owner, detail, components, placeholders) {
    return $_353rcfwwjegz40kh.bind(components, function (c) {
      return substitute(owner, detail, c, placeholders);
    });
  };
  var oneReplace = function (label, replacements) {
    var called = false;
    var used = function () {
      return called;
    };
    var replace = function () {
      if (called === true)
        throw new Error('Trying to use the same placeholder more than once: ' + label);
      called = true;
      return replacements;
    };
    var required = function () {
      return replacements.fold(function (req, _) {
        return req;
      }, function (req, _) {
        return req;
      });
    };
    return {
      name: $_b84g4ownjegz40jb.constant(label),
      required: required,
      used: used,
      replace: replace
    };
  };
  var substitutePlaces = function (owner, detail, components, placeholders) {
    var ps = $_4vnyr3x4jegz40l5.map(placeholders, function (ph, name) {
      return oneReplace(name, ph);
    });
    var outcome = substituteAll(owner, detail, components, ps);
    $_4vnyr3x4jegz40l5.each(ps, function (p) {
      if (p.used() === false && p.required()) {
        throw new Error('Placeholder: ' + p.name() + ' was not found in components list\nNamespace: ' + owner.getOr('none') + '\nComponents: ' + $_6dqjd6yhjegz40rj.stringify(detail.components(), null, 2));
      }
    });
    return outcome;
  };
  var singleReplace = function (detail, p) {
    var replacement = p;
    return replacement.fold(function (req, valueThunk) {
      return [valueThunk(detail)];
    }, function (req, valuesThunk) {
      return valuesThunk(detail);
    });
  };
  var $_ej1smp110jegz413a = {
    single: adt$3.single,
    multiple: adt$3.multiple,
    isSubstitute: isSubstitute,
    placeholder: $_b84g4ownjegz40jb.constant(placeholder),
    substituteAll: substituteAll,
    substitutePlaces: substitutePlaces,
    singleReplace: singleReplace
  };

  var combine = function (detail, data, partSpec, partValidated) {
    var spec = partSpec;
    return $_6qf81kx2jegz40l1.deepMerge(data.defaults()(detail, partSpec, partValidated), partSpec, { uid: detail.partUids()[data.name()] }, data.overrides()(detail, partSpec, partValidated), { 'debug.sketcher': $_75j08mxwjegz40o2.wrap('part-' + data.name(), spec) });
  };
  var subs = function (owner, detail, parts) {
    var internals = {};
    var externals = {};
    $_353rcfwwjegz40kh.each(parts, function (part) {
      part.fold(function (data) {
        internals[data.pname()] = $_ej1smp110jegz413a.single(true, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        var partSpec = detail.parts()[data.name()]();
        externals[data.name()] = $_b84g4ownjegz40jb.constant(combine(detail, data, partSpec[$_ev0b2610zjegz412z.original()]()));
      }, function (data) {
        internals[data.pname()] = $_ej1smp110jegz413a.single(false, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        internals[data.pname()] = $_ej1smp110jegz413a.multiple(true, function (detail, _partSpec, _partValidated) {
          var units = detail[data.name()]();
          return $_353rcfwwjegz40kh.map(units, function (u) {
            return data.factory().sketch($_6qf81kx2jegz40l1.deepMerge(data.defaults()(detail, u), u, data.overrides()(detail, u)));
          });
        });
      });
    });
    return {
      internals: $_b84g4ownjegz40jb.constant(internals),
      externals: $_b84g4ownjegz40jb.constant(externals)
    };
  };
  var $_ndcv710yjegz412s = { subs: subs };

  var generate$2 = function (owner, parts) {
    var r = {};
    $_353rcfwwjegz40kh.each(parts, function (part) {
      $_ev0b2610zjegz412z.asNamedPart(part).each(function (np) {
        var g = doGenerateOne(owner, np.pname());
        r[np.name()] = function (config) {
          var validated = $_fokpo2yijegz40rm.asRawOrDie('Part: ' + np.name() + ' in ' + owner, $_fokpo2yijegz40rm.objOf(np.schema()), config);
          return $_6qf81kx2jegz40l1.deepMerge(g, {
            config: config,
            validated: validated
          });
        };
      });
    });
    return r;
  };
  var doGenerateOne = function (owner, pname) {
    return {
      uiType: $_ej1smp110jegz413a.placeholder(),
      owner: owner,
      name: pname
    };
  };
  var generateOne = function (owner, pname, config) {
    return {
      uiType: $_ej1smp110jegz413a.placeholder(),
      owner: owner,
      name: pname,
      config: config,
      validated: {}
    };
  };
  var schemas = function (parts) {
    return $_353rcfwwjegz40kh.bind(parts, function (part) {
      return part.fold(Option.none, Option.some, Option.none, Option.none).map(function (data) {
        return $_cjikoqybjegz40q7.strictObjOf(data.name(), data.schema().concat([$_b1fv0nzajegz40ue.snapshot($_ev0b2610zjegz412z.original())]));
      }).toArray();
    });
  };
  var names = function (parts) {
    return $_353rcfwwjegz40kh.map(parts, $_ev0b2610zjegz412z.name);
  };
  var substitutes = function (owner, detail, parts) {
    return $_ndcv710yjegz412s.subs(owner, detail, parts);
  };
  var components = function (owner, detail, internals) {
    return $_ej1smp110jegz413a.substitutePlaces(Option.some(owner), detail, detail.components(), internals);
  };
  var getPart = function (component, detail, partKey) {
    var uid = detail.partUids()[partKey];
    return component.getSystem().getByUid(uid).toOption();
  };
  var getPartOrDie = function (component, detail, partKey) {
    return getPart(component, detail, partKey).getOrDie('Could not find part: ' + partKey);
  };
  var getParts = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_353rcfwwjegz40kh.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]);
    });
    return $_4vnyr3x4jegz40l5.map(r, $_b84g4ownjegz40jb.constant);
  };
  var getAllParts = function (component, detail) {
    var system = component.getSystem();
    return $_4vnyr3x4jegz40l5.map(detail.partUids(), function (pUid, k) {
      return $_b84g4ownjegz40jb.constant(system.getByUid(pUid));
    });
  };
  var getPartsOrDie = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_353rcfwwjegz40kh.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]).getOrDie();
    });
    return $_4vnyr3x4jegz40l5.map(r, $_b84g4ownjegz40jb.constant);
  };
  var defaultUids = function (baseUid, partTypes) {
    var partNames = names(partTypes);
    return $_75j08mxwjegz40o2.wrapAll($_353rcfwwjegz40kh.map(partNames, function (pn) {
      return {
        key: pn,
        value: baseUid + '-' + pn
      };
    }));
  };
  var defaultUidsSchema = function (partTypes) {
    return $_cjikoqybjegz40q7.field('partUids', 'partUids', $_an0j3iycjegz40qj.mergeWithThunk(function (spec) {
      return defaultUids(spec.uid, partTypes);
    }), $_fokpo2yijegz40rm.anyValue());
  };
  var $_63fdjp10xjegz412f = {
    generate: generate$2,
    generateOne: generateOne,
    schemas: schemas,
    names: names,
    substitutes: substitutes,
    components: components,
    defaultUids: defaultUids,
    defaultUidsSchema: defaultUidsSchema,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartOrDie: getPartOrDie,
    getParts: getParts,
    getPartsOrDie: getPartsOrDie
  };

  var prefix$1 = 'alloy-id-';
  var idAttr = 'data-alloy-id';
  var $_1oov7q112jegz413t = {
    prefix: $_b84g4ownjegz40jb.constant(prefix$1),
    idAttr: $_b84g4ownjegz40jb.constant(idAttr)
  };

  var prefix$2 = $_1oov7q112jegz413t.prefix();
  var idAttr$1 = $_1oov7q112jegz413t.idAttr();
  var write = function (label, elem) {
    var id = $_g605fa10vjegz4123.generate(prefix$2 + label);
    $_bcxlrzxvjegz40nw.set(elem, idAttr$1, id);
    return id;
  };
  var writeOnly = function (elem, uid) {
    $_bcxlrzxvjegz40nw.set(elem, idAttr$1, uid);
  };
  var read$2 = function (elem) {
    var id = $_bge3bexojegz40n6.isElement(elem) ? $_bcxlrzxvjegz40nw.get(elem, idAttr$1) : null;
    return Option.from(id);
  };
  var find$3 = function (container, id) {
    return $_eelz2c101jegz40xw.descendant(container, id);
  };
  var generate$3 = function (prefix) {
    return $_g605fa10vjegz4123.generate(prefix);
  };
  var revoke = function (elem) {
    $_bcxlrzxvjegz40nw.remove(elem, idAttr$1);
  };
  var $_94kpee111jegz413l = {
    revoke: revoke,
    write: write,
    writeOnly: writeOnly,
    read: read$2,
    find: find$3,
    generate: generate$3,
    attribute: $_b84g4ownjegz40jb.constant(idAttr$1)
  };

  var getPartsSchema = function (partNames, _optPartNames, _owner) {
    var owner = _owner !== undefined ? _owner : 'Unknown owner';
    var fallbackThunk = function () {
      return [$_b1fv0nzajegz40ue.output('partUids', {})];
    };
    var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
    if (partNames.length === 0 && optPartNames.length === 0)
      return fallbackThunk();
    var partsSchema = $_cjikoqybjegz40q7.strictObjOf('parts', $_353rcfwwjegz40kh.flatten([
      $_353rcfwwjegz40kh.map(partNames, $_cjikoqybjegz40q7.strict),
      $_353rcfwwjegz40kh.map(optPartNames, function (optPart) {
        return $_cjikoqybjegz40q7.defaulted(optPart, $_ej1smp110jegz413a.single(false, function () {
          throw new Error('The optional part: ' + optPart + ' was not specified in the config, but it was used in components');
        }));
      })
    ]));
    var partUidsSchema = $_cjikoqybjegz40q7.state('partUids', function (spec) {
      if (!$_75j08mxwjegz40o2.hasKey(spec, 'parts')) {
        throw new Error('Part uid definition for owner: ' + owner + ' requires "parts"\nExpected parts: ' + partNames.join(', ') + '\nSpec: ' + $_6dqjd6yhjegz40rj.stringify(spec, null, 2));
      }
      var uids = $_4vnyr3x4jegz40l5.map(spec.parts, function (v, k) {
        return $_75j08mxwjegz40o2.readOptFrom(v, 'uid').getOrThunk(function () {
          return spec.uid + '-' + k;
        });
      });
      return uids;
    });
    return [
      partsSchema,
      partUidsSchema
    ];
  };
  var base$1 = function (label, partSchemas, partUidsSchemas, spec) {
    var ps = partSchemas.length > 0 ? [$_cjikoqybjegz40q7.strictObjOf('parts', partSchemas)] : [];
    return ps.concat([
      $_cjikoqybjegz40q7.strict('uid'),
      $_cjikoqybjegz40q7.defaulted('dom', {}),
      $_cjikoqybjegz40q7.defaulted('components', []),
      $_b1fv0nzajegz40ue.snapshot('originalSpec'),
      $_cjikoqybjegz40q7.defaulted('debug.sketcher', {})
    ]).concat(partUidsSchemas);
  };
  var asRawOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, spec, partUidsSchemas);
    return $_fokpo2yijegz40rm.asRawOrDie(label + ' [SpecSchema]', $_fokpo2yijegz40rm.objOfOnly(baseS.concat(schema)), spec);
  };
  var asStructOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, partUidsSchemas, spec);
    return $_fokpo2yijegz40rm.asStructOrDie(label + ' [SpecSchema]', $_fokpo2yijegz40rm.objOfOnly(baseS.concat(schema)), spec);
  };
  var extend = function (builder, original, nu) {
    var newSpec = $_6qf81kx2jegz40l1.deepMerge(original, nu);
    return builder(newSpec);
  };
  var addBehaviours = function (original, behaviours) {
    return $_6qf81kx2jegz40l1.deepMerge(original, behaviours);
  };
  var $_ccec6o113jegz413w = {
    asRawOrDie: asRawOrDie$1,
    asStructOrDie: asStructOrDie$1,
    addBehaviours: addBehaviours,
    getPartsSchema: getPartsSchema,
    extend: extend
  };

  var single = function (owner, schema, factory, spec) {
    var specWithUid = supplyUid(spec);
    var detail = $_ccec6o113jegz413w.asStructOrDie(owner, schema, specWithUid, [], []);
    return $_6qf81kx2jegz40l1.deepMerge(factory(detail, specWithUid), { 'debug.sketcher': $_75j08mxwjegz40o2.wrap(owner, spec) });
  };
  var composite = function (owner, schema, partTypes, factory, spec) {
    var specWithUid = supplyUid(spec);
    var partSchemas = $_63fdjp10xjegz412f.schemas(partTypes);
    var partUidsSchema = $_63fdjp10xjegz412f.defaultUidsSchema(partTypes);
    var detail = $_ccec6o113jegz413w.asStructOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
    var subs = $_63fdjp10xjegz412f.substitutes(owner, detail, partTypes);
    var components = $_63fdjp10xjegz412f.components(owner, detail, subs.internals());
    return $_6qf81kx2jegz40l1.deepMerge(factory(detail, components, specWithUid, subs.externals()), { 'debug.sketcher': $_75j08mxwjegz40o2.wrap(owner, spec) });
  };
  var supplyUid = function (spec) {
    return $_6qf81kx2jegz40l1.deepMerge({ uid: $_94kpee111jegz413l.generate('uid') }, spec);
  };
  var $_bxe18x10wjegz4125 = {
    supplyUid: supplyUid,
    single: single,
    composite: composite
  };

  var singleSchema = $_fokpo2yijegz40rm.objOfOnly([
    $_cjikoqybjegz40q7.strict('name'),
    $_cjikoqybjegz40q7.strict('factory'),
    $_cjikoqybjegz40q7.strict('configFields'),
    $_cjikoqybjegz40q7.defaulted('apis', {}),
    $_cjikoqybjegz40q7.defaulted('extraApis', {})
  ]);
  var compositeSchema = $_fokpo2yijegz40rm.objOfOnly([
    $_cjikoqybjegz40q7.strict('name'),
    $_cjikoqybjegz40q7.strict('factory'),
    $_cjikoqybjegz40q7.strict('configFields'),
    $_cjikoqybjegz40q7.strict('partFields'),
    $_cjikoqybjegz40q7.defaulted('apis', {}),
    $_cjikoqybjegz40q7.defaulted('extraApis', {})
  ]);
  var single$1 = function (rawConfig) {
    var config = $_fokpo2yijegz40rm.asRawOrDie('Sketcher for ' + rawConfig.name, singleSchema, rawConfig);
    var sketch = function (spec) {
      return $_bxe18x10wjegz4125.single(config.name, config.configFields, config.factory, spec);
    };
    var apis = $_4vnyr3x4jegz40l5.map(config.apis, $_fv6fv410ujegz411y.makeApi);
    var extraApis = $_4vnyr3x4jegz40l5.map(config.extraApis, function (f, k) {
      return $_2r7ga7ykjegz40rv.markAsExtraApi(f, k);
    });
    return $_6qf81kx2jegz40l1.deepMerge({
      name: $_b84g4ownjegz40jb.constant(config.name),
      partFields: $_b84g4ownjegz40jb.constant([]),
      configFields: $_b84g4ownjegz40jb.constant(config.configFields),
      sketch: sketch
    }, apis, extraApis);
  };
  var composite$1 = function (rawConfig) {
    var config = $_fokpo2yijegz40rm.asRawOrDie('Sketcher for ' + rawConfig.name, compositeSchema, rawConfig);
    var sketch = function (spec) {
      return $_bxe18x10wjegz4125.composite(config.name, config.configFields, config.partFields, config.factory, spec);
    };
    var parts = $_63fdjp10xjegz412f.generate(config.name, config.partFields);
    var apis = $_4vnyr3x4jegz40l5.map(config.apis, $_fv6fv410ujegz411y.makeApi);
    var extraApis = $_4vnyr3x4jegz40l5.map(config.extraApis, function (f, k) {
      return $_2r7ga7ykjegz40rv.markAsExtraApi(f, k);
    });
    return $_6qf81kx2jegz40l1.deepMerge({
      name: $_b84g4ownjegz40jb.constant(config.name),
      partFields: $_b84g4ownjegz40jb.constant(config.partFields),
      configFields: $_b84g4ownjegz40jb.constant(config.configFields),
      sketch: sketch,
      parts: $_b84g4ownjegz40jb.constant(parts)
    }, apis, extraApis);
  };
  var $_5bitwv10tjegz411q = {
    single: single$1,
    composite: composite$1
  };

  var events$3 = function (optAction) {
    var executeHandler = function (action) {
      return $_63ctkqy8jegz40pp.run($_f4n44rwljegz40j4.execute(), function (component, simulatedEvent) {
        action(component);
        simulatedEvent.stop();
      });
    };
    var onClick = function (component, simulatedEvent) {
      simulatedEvent.stop();
      $_78tntkwkjegz40iy.emitExecute(component);
    };
    var onMousedown = function (component, simulatedEvent) {
      simulatedEvent.cut();
    };
    var pointerEvents = $_fzn4cewojegz40je.detect().deviceType.isTouch() ? [$_63ctkqy8jegz40pp.run($_f4n44rwljegz40j4.tap(), onClick)] : [
      $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.click(), onClick),
      $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.mousedown(), onMousedown)
    ];
    return $_63ctkqy8jegz40pp.derive($_353rcfwwjegz40kh.flatten([
      optAction.map(executeHandler).toArray(),
      pointerEvents
    ]));
  };
  var $_dhsgrk114jegz414b = { events: events$3 };

  var factory = function (detail, spec) {
    var events = $_dhsgrk114jegz414b.events(detail.action());
    var optType = $_75j08mxwjegz40o2.readOptFrom(detail.dom(), 'attributes').bind($_75j08mxwjegz40o2.readOpt('type'));
    var optTag = $_75j08mxwjegz40o2.readOptFrom(detail.dom(), 'tag');
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: detail.components(),
      events: events,
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([
        Focusing.config({}),
        Keying.config({
          mode: 'execution',
          useSpace: true,
          useEnter: true
        })
      ]), $_4ipd2i10sjegz411l.get(detail.buttonBehaviours())),
      domModification: {
        attributes: $_6qf81kx2jegz40l1.deepMerge(optType.fold(function () {
          return optTag.is('button') ? { type: 'button' } : {};
        }, function (t) {
          return {};
        }), { role: detail.role().getOr('button') })
      },
      eventOrder: detail.eventOrder()
    };
  };
  var Button = $_5bitwv10tjegz411q.single({
    name: 'Button',
    factory: factory,
    configFields: [
      $_cjikoqybjegz40q7.defaulted('uid', undefined),
      $_cjikoqybjegz40q7.strict('dom'),
      $_cjikoqybjegz40q7.defaulted('components', []),
      $_4ipd2i10sjegz411l.field('buttonBehaviours', [
        Focusing,
        Keying
      ]),
      $_cjikoqybjegz40q7.option('action'),
      $_cjikoqybjegz40q7.option('role'),
      $_cjikoqybjegz40q7.defaulted('eventOrder', {})
    ]
  });

  var exhibit$2 = function (base, unselectConfig) {
    return $_b3xpx9yljegz40ry.nu({
      styles: {
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': '-moz-none'
      },
      attributes: { 'unselectable': 'on' }
    });
  };
  var events$4 = function (unselectConfig) {
    return $_63ctkqy8jegz40pp.derive([$_63ctkqy8jegz40pp.abort($_equp8wmjegz40j7.selectstart(), $_b84g4ownjegz40jb.constant(true))]);
  };
  var $_b3qe1t116jegz414h = {
    events: events$4,
    exhibit: exhibit$2
  };

  var Unselecting = $_2s5cqny6jegz40p5.create({
    fields: [],
    name: 'unselecting',
    active: $_b3qe1t116jegz414h
  });

  var getAttrs = function (elem) {
    var attributes = elem.dom().attributes !== undefined ? elem.dom().attributes : [];
    return $_353rcfwwjegz40kh.foldl(attributes, function (b, attr) {
      if (attr.name === 'class')
        return b;
      else
        return $_6qf81kx2jegz40l1.deepMerge(b, $_75j08mxwjegz40o2.wrap(attr.name, attr.value));
    }, {});
  };
  var getClasses = function (elem) {
    return Array.prototype.slice.call(elem.dom().classList, 0);
  };
  var fromHtml$2 = function (html) {
    var elem = $_30i27zxjjegz40mu.fromHtml(html);
    var children = $_6rauxox7jegz40ll.children(elem);
    var attrs = getAttrs(elem);
    var classes = getClasses(elem);
    var contents = children.length === 0 ? {} : { innerHtml: $_2y0xlvxsjegz40np.get(elem) };
    return $_6qf81kx2jegz40l1.deepMerge({
      tag: $_bge3bexojegz40n6.name(elem),
      classes: classes,
      attributes: attrs
    }, contents);
  };
  var sketch = function (sketcher, html, config) {
    return sketcher.sketch($_6qf81kx2jegz40l1.deepMerge({ dom: fromHtml$2(html) }, config));
  };
  var $_aqlsr1118jegz414n = {
    fromHtml: fromHtml$2,
    sketch: sketch
  };

  var dom$1 = function (rawHtml) {
    var html = $_du558bwzjegz40kv.supplant(rawHtml, { prefix: $_c2ndmvzijegz40vq.prefix() });
    return $_aqlsr1118jegz414n.fromHtml(html);
  };
  var spec = function (rawHtml) {
    var sDom = dom$1(rawHtml);
    return { dom: sDom };
  };
  var $_7pltoz117jegz414k = {
    dom: dom$1,
    spec: spec
  };

  var forToolbarCommand = function (editor, command) {
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, {});
  };
  var getToggleBehaviours = function (command) {
    return $_2s5cqny6jegz40p5.derive([
      Toggling.config({
        toggleClass: $_c2ndmvzijegz40vq.resolve('toolbar-button-selected'),
        toggleOnExecute: false,
        aria: { mode: 'pressed' }
      }),
      $_dp0qcmzhjegz40vo.format(command, function (button, status) {
        var toggle = status ? Toggling.on : Toggling.off;
        toggle(button);
      })
    ]);
  };
  var forToolbarStateCommand = function (editor, command) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, extraBehaviours);
  };
  var forToolbarStateAction = function (editor, clazz, command, action) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(clazz, action, extraBehaviours);
  };
  var forToolbar = function (clazz, action, extraBehaviours) {
    return Button.sketch({
      dom: $_7pltoz117jegz414k.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-' + clazz + ' ${prefix}-icon"></span>'),
      action: action,
      buttonBehaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([Unselecting.config({})]), extraBehaviours)
    });
  };
  var $_dwz193zjjegz40vs = {
    forToolbar: forToolbar,
    forToolbarCommand: forToolbarCommand,
    forToolbarStateAction: forToolbarStateAction,
    forToolbarStateCommand: forToolbarStateCommand
  };

  var reduceBy = function (value, min, max, step) {
    if (value < min)
      return value;
    else if (value > max)
      return max;
    else if (value === min)
      return min - 1;
    else
      return Math.max(min, value - step);
  };
  var increaseBy = function (value, min, max, step) {
    if (value > max)
      return value;
    else if (value < min)
      return min;
    else if (value === max)
      return max + 1;
    else
      return Math.min(max, value + step);
  };
  var capValue = function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  var snapValueOfX = function (bounds, value, min, max, step, snapStart) {
    return snapStart.fold(function () {
      var initValue = value - min;
      var extraValue = Math.round(initValue / step) * step;
      return capValue(min + extraValue, min - 1, max + 1);
    }, function (start) {
      var remainder = (value - start) % step;
      var adjustment = Math.round(remainder / step);
      var rawSteps = Math.floor((value - start) / step);
      var maxSteps = Math.floor((max - start) / step);
      var numSteps = Math.min(maxSteps, rawSteps + adjustment);
      var r = start + numSteps * step;
      return Math.max(start, r);
    });
  };
  var findValueOfX = function (bounds, min, max, xValue, step, snapToGrid, snapStart) {
    var range = max - min;
    if (xValue < bounds.left)
      return min - 1;
    else if (xValue > bounds.right)
      return max + 1;
    else {
      var xOffset = Math.min(bounds.right, Math.max(xValue, bounds.left)) - bounds.left;
      var newValue = capValue(xOffset / bounds.width * range + min, min - 1, max + 1);
      var roundedValue = Math.round(newValue);
      return snapToGrid && newValue >= min && newValue <= max ? snapValueOfX(bounds, newValue, min, max, step, snapStart) : roundedValue;
    }
  };
  var $_49u1ne11djegz415k = {
    reduceBy: reduceBy,
    increaseBy: increaseBy,
    findValueOfX: findValueOfX
  };

  var changeEvent = 'slider.change.value';
  var isTouch = $_fzn4cewojegz40je.detect().deviceType.isTouch();
  var getEventSource = function (simulatedEvent) {
    var evt = simulatedEvent.event().raw();
    if (isTouch && evt.touches !== undefined && evt.touches.length === 1)
      return Option.some(evt.touches[0]);
    else if (isTouch && evt.touches !== undefined)
      return Option.none();
    else if (!isTouch && evt.clientX !== undefined)
      return Option.some(evt);
    else
      return Option.none();
  };
  var getEventX = function (simulatedEvent) {
    var spot = getEventSource(simulatedEvent);
    return spot.map(function (s) {
      return s.clientX;
    });
  };
  var fireChange = function (component, value) {
    $_78tntkwkjegz40iy.emitWith(component, changeEvent, { value: value });
  };
  var moveRightFromLedge = function (ledge, detail) {
    fireChange(ledge, detail.min());
  };
  var moveLeftFromRedge = function (redge, detail) {
    fireChange(redge, detail.max());
  };
  var setToRedge = function (redge, detail) {
    fireChange(redge, detail.max() + 1);
  };
  var setToLedge = function (ledge, detail) {
    fireChange(ledge, detail.min() - 1);
  };
  var setToX = function (spectrum, spectrumBounds, detail, xValue) {
    var value = $_49u1ne11djegz415k.findValueOfX(spectrumBounds, detail.min(), detail.max(), xValue, detail.stepSize(), detail.snapToGrid(), detail.snapStart());
    fireChange(spectrum, value);
  };
  var setXFromEvent = function (spectrum, detail, spectrumBounds, simulatedEvent) {
    return getEventX(simulatedEvent).map(function (xValue) {
      setToX(spectrum, spectrumBounds, detail, xValue);
      return xValue;
    });
  };
  var moveLeft$4 = function (spectrum, detail) {
    var newValue = $_49u1ne11djegz415k.reduceBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var moveRight$4 = function (spectrum, detail) {
    var newValue = $_49u1ne11djegz415k.increaseBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var $_f5ak0s11cjegz415e = {
    setXFromEvent: setXFromEvent,
    setToLedge: setToLedge,
    setToRedge: setToRedge,
    moveLeftFromRedge: moveLeftFromRedge,
    moveRightFromLedge: moveRightFromLedge,
    moveLeft: moveLeft$4,
    moveRight: moveRight$4,
    changeEvent: $_b84g4ownjegz40jb.constant(changeEvent)
  };

  var platform = $_fzn4cewojegz40je.detect();
  var isTouch$1 = platform.deviceType.isTouch();
  var edgePart = function (name, action) {
    return $_ev0b2610zjegz412z.optional({
      name: '' + name + '-edge',
      overrides: function (detail) {
        var touchEvents = $_63ctkqy8jegz40pp.derive([$_63ctkqy8jegz40pp.runActionExtra($_equp8wmjegz40j7.touchstart(), action, [detail])]);
        var mouseEvents = $_63ctkqy8jegz40pp.derive([
          $_63ctkqy8jegz40pp.runActionExtra($_equp8wmjegz40j7.mousedown(), action, [detail]),
          $_63ctkqy8jegz40pp.runActionExtra($_equp8wmjegz40j7.mousemove(), function (l, det) {
            if (det.mouseIsDown().get())
              action(l, det);
          }, [detail])
        ]);
        return { events: isTouch$1 ? touchEvents : mouseEvents };
      }
    });
  };
  var ledgePart = edgePart('left', $_f5ak0s11cjegz415e.setToLedge);
  var redgePart = edgePart('right', $_f5ak0s11cjegz415e.setToRedge);
  var thumbPart = $_ev0b2610zjegz412z.required({
    name: 'thumb',
    defaults: $_b84g4ownjegz40jb.constant({ dom: { styles: { position: 'absolute' } } }),
    overrides: function (detail) {
      return {
        events: $_63ctkqy8jegz40pp.derive([
          $_63ctkqy8jegz40pp.redirectToPart($_equp8wmjegz40j7.touchstart(), detail, 'spectrum'),
          $_63ctkqy8jegz40pp.redirectToPart($_equp8wmjegz40j7.touchmove(), detail, 'spectrum'),
          $_63ctkqy8jegz40pp.redirectToPart($_equp8wmjegz40j7.touchend(), detail, 'spectrum')
        ])
      };
    }
  });
  var spectrumPart = $_ev0b2610zjegz412z.required({
    schema: [$_cjikoqybjegz40q7.state('mouseIsDown', function () {
        return Cell(false);
      })],
    name: 'spectrum',
    overrides: function (detail) {
      var moveToX = function (spectrum, simulatedEvent) {
        var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
        $_f5ak0s11cjegz415e.setXFromEvent(spectrum, detail, spectrumBounds, simulatedEvent);
      };
      var touchEvents = $_63ctkqy8jegz40pp.derive([
        $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.touchstart(), moveToX),
        $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.touchmove(), moveToX)
      ]);
      var mouseEvents = $_63ctkqy8jegz40pp.derive([
        $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.mousedown(), moveToX),
        $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.mousemove(), function (spectrum, se) {
          if (detail.mouseIsDown().get())
            moveToX(spectrum, se);
        })
      ]);
      return {
        behaviours: $_2s5cqny6jegz40p5.derive(isTouch$1 ? [] : [
          Keying.config({
            mode: 'special',
            onLeft: function (spectrum) {
              $_f5ak0s11cjegz415e.moveLeft(spectrum, detail);
              return Option.some(true);
            },
            onRight: function (spectrum) {
              $_f5ak0s11cjegz415e.moveRight(spectrum, detail);
              return Option.some(true);
            }
          }),
          Focusing.config({})
        ]),
        events: isTouch$1 ? touchEvents : mouseEvents
      };
    }
  });
  var SliderParts = [
    ledgePart,
    redgePart,
    thumbPart,
    spectrumPart
  ];

  var onLoad$1 = function (component, repConfig, repState) {
    repConfig.store().manager().onLoad(component, repConfig, repState);
  };
  var onUnload = function (component, repConfig, repState) {
    repConfig.store().manager().onUnload(component, repConfig, repState);
  };
  var setValue = function (component, repConfig, repState, data) {
    repConfig.store().manager().setValue(component, repConfig, repState, data);
  };
  var getValue = function (component, repConfig, repState) {
    return repConfig.store().manager().getValue(component, repConfig, repState);
  };
  var $_dv0j8v11hjegz415w = {
    onLoad: onLoad$1,
    onUnload: onUnload,
    setValue: setValue,
    getValue: getValue
  };

  var events$5 = function (repConfig, repState) {
    var es = repConfig.resetOnDom() ? [
      $_63ctkqy8jegz40pp.runOnAttached(function (comp, se) {
        $_dv0j8v11hjegz415w.onLoad(comp, repConfig, repState);
      }),
      $_63ctkqy8jegz40pp.runOnDetached(function (comp, se) {
        $_dv0j8v11hjegz415w.onUnload(comp, repConfig, repState);
      })
    ] : [$_6z4hay7jegz40pc.loadEvent(repConfig, repState, $_dv0j8v11hjegz415w.onLoad)];
    return $_63ctkqy8jegz40pp.derive(es);
  };
  var $_abbk3z11gjegz415u = { events: events$5 };

  var memory = function () {
    var data = Cell(null);
    var readState = function () {
      return {
        mode: 'memory',
        value: data.get()
      };
    };
    var isNotSet = function () {
      return data.get() === null;
    };
    var clear = function () {
      data.set(null);
    };
    return BehaviourState({
      set: data.set,
      get: data.get,
      isNotSet: isNotSet,
      clear: clear,
      readState: readState
    });
  };
  var manual = function () {
    var readState = function () {
    };
    return BehaviourState({ readState: readState });
  };
  var dataset = function () {
    var data = Cell({});
    var readState = function () {
      return {
        mode: 'dataset',
        dataset: data.get()
      };
    };
    return BehaviourState({
      readState: readState,
      set: data.set,
      get: data.get
    });
  };
  var init$2 = function (spec) {
    return spec.store().manager().state(spec);
  };
  var $_5iu0bm11kjegz416b = {
    memory: memory,
    dataset: dataset,
    manual: manual,
    init: init$2
  };

  var setValue$1 = function (component, repConfig, repState, data) {
    var dataKey = repConfig.store().getDataKey();
    repState.set({});
    repConfig.store().setData()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$1 = function (component, repConfig, repState) {
    var key = repConfig.store().getDataKey()(component);
    var dataset = repState.get();
    return $_75j08mxwjegz40o2.readOptFrom(dataset, key).fold(function () {
      return repConfig.store().getFallbackEntry()(key);
    }, function (data) {
      return data;
    });
  };
  var onLoad$2 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      setValue$1(component, repConfig, repState, data);
    });
  };
  var onUnload$1 = function (component, repConfig, repState) {
    repState.set({});
  };
  var DatasetStore = [
    $_cjikoqybjegz40q7.option('initialValue'),
    $_cjikoqybjegz40q7.strict('getFallbackEntry'),
    $_cjikoqybjegz40q7.strict('getDataKey'),
    $_cjikoqybjegz40q7.strict('setData'),
    $_b1fv0nzajegz40ue.output('manager', {
      setValue: setValue$1,
      getValue: getValue$1,
      onLoad: onLoad$2,
      onUnload: onUnload$1,
      state: $_5iu0bm11kjegz416b.dataset
    })
  ];

  var getValue$2 = function (component, repConfig, repState) {
    return repConfig.store().getValue()(component);
  };
  var setValue$2 = function (component, repConfig, repState, data) {
    repConfig.store().setValue()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var onLoad$3 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      repConfig.store().setValue()(component, data);
    });
  };
  var ManualStore = [
    $_cjikoqybjegz40q7.strict('getValue'),
    $_cjikoqybjegz40q7.defaulted('setValue', $_b84g4ownjegz40jb.noop),
    $_cjikoqybjegz40q7.option('initialValue'),
    $_b1fv0nzajegz40ue.output('manager', {
      setValue: setValue$2,
      getValue: getValue$2,
      onLoad: onLoad$3,
      onUnload: $_b84g4ownjegz40jb.noop,
      state: $_xbi0rynjegz40sh.init
    })
  ];

  var setValue$3 = function (component, repConfig, repState, data) {
    repState.set(data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$3 = function (component, repConfig, repState) {
    return repState.get();
  };
  var onLoad$4 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (initVal) {
      if (repState.isNotSet())
        repState.set(initVal);
    });
  };
  var onUnload$2 = function (component, repConfig, repState) {
    repState.clear();
  };
  var MemoryStore = [
    $_cjikoqybjegz40q7.option('initialValue'),
    $_b1fv0nzajegz40ue.output('manager', {
      setValue: setValue$3,
      getValue: getValue$3,
      onLoad: onLoad$4,
      onUnload: onUnload$2,
      state: $_5iu0bm11kjegz416b.memory
    })
  ];

  var RepresentSchema = [
    $_cjikoqybjegz40q7.defaultedOf('store', { mode: 'memory' }, $_fokpo2yijegz40rm.choose('mode', {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })),
    $_b1fv0nzajegz40ue.onHandler('onSetValue'),
    $_cjikoqybjegz40q7.defaulted('resetOnDom', false)
  ];

  var me = $_2s5cqny6jegz40p5.create({
    fields: RepresentSchema,
    name: 'representing',
    active: $_abbk3z11gjegz415u,
    apis: $_dv0j8v11hjegz415w,
    extra: {
      setValueFrom: function (component, source) {
        var value = me.getValue(source);
        me.setValue(component, value);
      }
    },
    state: $_5iu0bm11kjegz416b
  });

  var isTouch$2 = $_fzn4cewojegz40je.detect().deviceType.isTouch();
  var SliderSchema = [
    $_cjikoqybjegz40q7.strict('min'),
    $_cjikoqybjegz40q7.strict('max'),
    $_cjikoqybjegz40q7.defaulted('stepSize', 1),
    $_cjikoqybjegz40q7.defaulted('onChange', $_b84g4ownjegz40jb.noop),
    $_cjikoqybjegz40q7.defaulted('onInit', $_b84g4ownjegz40jb.noop),
    $_cjikoqybjegz40q7.defaulted('onDragStart', $_b84g4ownjegz40jb.noop),
    $_cjikoqybjegz40q7.defaulted('onDragEnd', $_b84g4ownjegz40jb.noop),
    $_cjikoqybjegz40q7.defaulted('snapToGrid', false),
    $_cjikoqybjegz40q7.option('snapStart'),
    $_cjikoqybjegz40q7.strict('getInitialValue'),
    $_4ipd2i10sjegz411l.field('sliderBehaviours', [
      Keying,
      me
    ]),
    $_cjikoqybjegz40q7.state('value', function (spec) {
      return Cell(spec.min);
    })
  ].concat(!isTouch$2 ? [$_cjikoqybjegz40q7.state('mouseIsDown', function () {
      return Cell(false);
    })] : []);

  var api$1 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$6 = function (element) {
    return api$1.get(element);
  };
  var getOuter$2 = function (element) {
    return api$1.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_flvpsp107jegz40ye.set(element, 'max-width', absMax + 'px');
  };
  var $_6iva5411ojegz416y = {
    set: set$4,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var isTouch$3 = $_fzn4cewojegz40je.detect().deviceType.isTouch();
  var sketch$1 = function (detail, components, spec, externals) {
    var range = detail.max() - detail.min();
    var getXCentre = function (component) {
      var rect = component.element().dom().getBoundingClientRect();
      return (rect.left + rect.right) / 2;
    };
    var getThumb = function (component) {
      return $_63fdjp10xjegz412f.getPartOrDie(component, detail, 'thumb');
    };
    var getXOffset = function (slider, spectrumBounds, detail) {
      var v = detail.value().get();
      if (v < detail.min()) {
        return $_63fdjp10xjegz412f.getPart(slider, detail, 'left-edge').fold(function () {
          return 0;
        }, function (ledge) {
          return getXCentre(ledge) - spectrumBounds.left;
        });
      } else if (v > detail.max()) {
        return $_63fdjp10xjegz412f.getPart(slider, detail, 'right-edge').fold(function () {
          return spectrumBounds.width;
        }, function (redge) {
          return getXCentre(redge) - spectrumBounds.left;
        });
      } else {
        return (detail.value().get() - detail.min()) / range * spectrumBounds.width;
      }
    };
    var getXPos = function (slider) {
      var spectrum = $_63fdjp10xjegz412f.getPartOrDie(slider, detail, 'spectrum');
      var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
      var sliderBounds = slider.element().dom().getBoundingClientRect();
      var xOffset = getXOffset(slider, spectrumBounds, detail);
      return spectrumBounds.left - sliderBounds.left + xOffset;
    };
    var refresh = function (component) {
      var pos = getXPos(component);
      var thumb = getThumb(component);
      var thumbRadius = $_6iva5411ojegz416y.get(thumb.element()) / 2;
      $_flvpsp107jegz40ye.set(thumb.element(), 'left', pos - thumbRadius + 'px');
    };
    var changeValue = function (component, newValue) {
      var oldValue = detail.value().get();
      var thumb = getThumb(component);
      if (oldValue !== newValue || $_flvpsp107jegz40ye.getRaw(thumb.element(), 'left').isNone()) {
        detail.value().set(newValue);
        refresh(component);
        detail.onChange()(component, thumb, newValue);
        return Option.some(true);
      } else {
        return Option.none();
      }
    };
    var resetToMin = function (slider) {
      changeValue(slider, detail.min());
    };
    var resetToMax = function (slider) {
      changeValue(slider, detail.max());
    };
    var uiEventsArr = isTouch$3 ? [
      $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.touchstart(), function (slider, simulatedEvent) {
        detail.onDragStart()(slider, getThumb(slider));
      }),
      $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.touchend(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
      })
    ] : [
      $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.mousedown(), function (slider, simulatedEvent) {
        simulatedEvent.stop();
        detail.onDragStart()(slider, getThumb(slider));
        detail.mouseIsDown().set(true);
      }),
      $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.mouseup(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
        detail.mouseIsDown().set(false);
      })
    ];
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive($_353rcfwwjegz40kh.flatten([
        !isTouch$3 ? [Keying.config({
            mode: 'special',
            focusIn: function (slider) {
              return $_63fdjp10xjegz412f.getPart(slider, detail, 'spectrum').map(Keying.focusIn).map($_b84g4ownjegz40jb.constant(true));
            }
          })] : [],
        [me.config({
            store: {
              mode: 'manual',
              getValue: function (_) {
                return detail.value().get();
              }
            }
          })]
      ])), $_4ipd2i10sjegz411l.get(detail.sliderBehaviours())),
      events: $_63ctkqy8jegz40pp.derive([
        $_63ctkqy8jegz40pp.run($_f5ak0s11cjegz415e.changeEvent(), function (slider, simulatedEvent) {
          changeValue(slider, simulatedEvent.event().value());
        }),
        $_63ctkqy8jegz40pp.runOnAttached(function (slider, simulatedEvent) {
          detail.value().set(detail.getInitialValue()());
          var thumb = getThumb(slider);
          refresh(slider);
          detail.onInit()(slider, thumb, detail.value().get());
        })
      ].concat(uiEventsArr)),
      apis: {
        resetToMin: resetToMin,
        resetToMax: resetToMax,
        refresh: refresh
      },
      domModification: { styles: { position: 'relative' } }
    };
  };
  var $_8hcdde11njegz416m = { sketch: sketch$1 };

  var Slider = $_5bitwv10tjegz411q.composite({
    name: 'Slider',
    configFields: SliderSchema,
    partFields: SliderParts,
    factory: $_8hcdde11njegz416m.sketch,
    apis: {
      resetToMin: function (apis, slider) {
        apis.resetToMin(slider);
      },
      resetToMax: function (apis, slider) {
        apis.resetToMax(slider);
      },
      refresh: function (apis, slider) {
        apis.refresh(slider);
      }
    }
  });

  var button = function (realm, clazz, makeItems) {
    return $_dwz193zjjegz40vs.forToolbar(clazz, function () {
      var items = makeItems();
      realm.setContextToolbar([{
          label: clazz + ' group',
          items: items
        }]);
    }, {});
  };
  var $_7ugg1i11pjegz416z = { button: button };

  var BLACK = -1;
  var makeSlider = function (spec) {
    var getColor = function (hue) {
      if (hue < 0) {
        return 'black';
      } else if (hue > 360) {
        return 'white';
      } else {
        return 'hsl(' + hue + ', 100%, 50%)';
      }
    };
    var onInit = function (slider, thumb, value) {
      var color = getColor(value);
      $_flvpsp107jegz40ye.set(thumb.element(), 'background-color', color);
    };
    var onChange = function (slider, thumb, value) {
      var color = getColor(value);
      $_flvpsp107jegz40ye.set(thumb.element(), 'background-color', color);
      spec.onChange(slider, thumb, color);
    };
    return Slider.sketch({
      dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'),
      components: [
        Slider.parts()['left-edge']($_7pltoz117jegz414k.spec('<div class="${prefix}-hue-slider-black"></div>')),
        Slider.parts().spectrum({
          dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-slider-gradient-container"></div>'),
          components: [$_7pltoz117jegz414k.spec('<div class="${prefix}-slider-gradient"></div>')],
          behaviours: $_2s5cqny6jegz40p5.derive([Toggling.config({ toggleClass: $_c2ndmvzijegz40vq.resolve('thumb-active') })])
        }),
        Slider.parts()['right-edge']($_7pltoz117jegz414k.spec('<div class="${prefix}-hue-slider-white"></div>')),
        Slider.parts().thumb({
          dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_2s5cqny6jegz40p5.derive([Toggling.config({ toggleClass: $_c2ndmvzijegz40vq.resolve('thumb-active') })])
        })
      ],
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      onInit: onInit,
      stepSize: 10,
      min: 0,
      max: 360,
      getInitialValue: spec.getInitialValue,
      sliderBehaviours: $_2s5cqny6jegz40p5.derive([$_dp0qcmzhjegz40vo.orientation(Slider.refresh)])
    });
  };
  var makeItems = function (spec) {
    return [makeSlider(spec)];
  };
  var sketch$2 = function (realm, editor) {
    var spec = {
      onChange: function (slider, thumb, color) {
        editor.undoManager.transact(function () {
          editor.formatter.apply('forecolor', { value: color });
          editor.nodeChanged();
        });
      },
      getInitialValue: function () {
        return BLACK;
      }
    };
    return $_7ugg1i11pjegz416z.button(realm, 'color', function () {
      return makeItems(spec);
    });
  };
  var $_a4bx6c119jegz414w = {
    makeItems: makeItems,
    sketch: sketch$2
  };

  var schema$7 = $_fokpo2yijegz40rm.objOfOnly([
    $_cjikoqybjegz40q7.strict('getInitialValue'),
    $_cjikoqybjegz40q7.strict('onChange'),
    $_cjikoqybjegz40q7.strict('category'),
    $_cjikoqybjegz40q7.strict('sizes')
  ]);
  var sketch$3 = function (rawSpec) {
    var spec = $_fokpo2yijegz40rm.asRawOrDie('SizeSlider', schema$7, rawSpec);
    var isValidValue = function (valueIndex) {
      return valueIndex >= 0 && valueIndex < spec.sizes.length;
    };
    var onChange = function (slider, thumb, valueIndex) {
      if (isValidValue(valueIndex)) {
        spec.onChange(valueIndex);
      }
    };
    return Slider.sketch({
      dom: {
        tag: 'div',
        classes: [
          $_c2ndmvzijegz40vq.resolve('slider-' + spec.category + '-size-container'),
          $_c2ndmvzijegz40vq.resolve('slider'),
          $_c2ndmvzijegz40vq.resolve('slider-size-container')
        ]
      },
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      min: 0,
      max: spec.sizes.length - 1,
      stepSize: 1,
      getInitialValue: spec.getInitialValue,
      snapToGrid: true,
      sliderBehaviours: $_2s5cqny6jegz40p5.derive([$_dp0qcmzhjegz40vo.orientation(Slider.refresh)]),
      components: [
        Slider.parts().spectrum({
          dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-slider-size-container"></div>'),
          components: [$_7pltoz117jegz414k.spec('<div class="${prefix}-slider-size-line"></div>')]
        }),
        Slider.parts().thumb({
          dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_2s5cqny6jegz40p5.derive([Toggling.config({ toggleClass: $_c2ndmvzijegz40vq.resolve('thumb-active') })])
        })
      ]
    });
  };
  var $_6suwdr11rjegz4172 = { sketch: sketch$3 };

  var ancestor$3 = function (scope, transform, isRoot) {
    var element = scope.dom();
    var stop = $_6zfdmjx3jegz40l3.isFunction(isRoot) ? isRoot : $_b84g4ownjegz40jb.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_30i27zxjjegz40mu.fromDom(element);
      var transformed = transform(el);
      if (transformed.isSome())
        return transformed;
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest$3 = function (scope, transform, isRoot) {
    var current = transform(scope);
    return current.orThunk(function () {
      return isRoot(scope) ? Option.none() : ancestor$3(scope, transform, isRoot);
    });
  };
  var $_6ta8g611tjegz417g = {
    ancestor: ancestor$3,
    closest: closest$3
  };

  var candidates = [
    '9px',
    '10px',
    '11px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '32px',
    '36px'
  ];
  var defaultSize = 'medium';
  var defaultIndex = 2;
  var indexToSize = function (index) {
    return Option.from(candidates[index]);
  };
  var sizeToIndex = function (size) {
    return $_353rcfwwjegz40kh.findIndex(candidates, function (v) {
      return v === size;
    });
  };
  var getRawOrComputed = function (isRoot, rawStart) {
    var optStart = $_bge3bexojegz40n6.isElement(rawStart) ? Option.some(rawStart) : $_6rauxox7jegz40ll.parent(rawStart);
    return optStart.map(function (start) {
      var inline = $_6ta8g611tjegz417g.closest(start, function (elem) {
        return $_flvpsp107jegz40ye.getRaw(elem, 'font-size');
      }, isRoot);
      return inline.getOrThunk(function () {
        return $_flvpsp107jegz40ye.get(start, 'font-size');
      });
    }).getOr('');
  };
  var getSize = function (editor) {
    var node = editor.selection.getStart();
    var elem = $_30i27zxjjegz40mu.fromDom(node);
    var root = $_30i27zxjjegz40mu.fromDom(editor.getBody());
    var isRoot = function (e) {
      return $_47k0n6xdjegz40mb.eq(root, e);
    };
    var elemSize = getRawOrComputed(isRoot, elem);
    return $_353rcfwwjegz40kh.find(candidates, function (size) {
      return elemSize === size;
    }).getOr(defaultSize);
  };
  var applySize = function (editor, value) {
    var currentValue = getSize(editor);
    if (currentValue !== value) {
      editor.execCommand('fontSize', false, value);
    }
  };
  var get$7 = function (editor) {
    var size = getSize(editor);
    return sizeToIndex(size).getOr(defaultIndex);
  };
  var apply$1 = function (editor, index) {
    indexToSize(index).each(function (size) {
      applySize(editor, size);
    });
  };
  var $_btobco11sjegz4178 = {
    candidates: $_b84g4ownjegz40jb.constant(candidates),
    get: get$7,
    apply: apply$1
  };

  var sizes = $_btobco11sjegz4178.candidates();
  var makeSlider$1 = function (spec) {
    return $_6suwdr11rjegz4172.sketch({
      onChange: spec.onChange,
      sizes: sizes,
      category: 'font',
      getInitialValue: spec.getInitialValue
    });
  };
  var makeItems$1 = function (spec) {
    return [
      $_7pltoz117jegz414k.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
      makeSlider$1(spec),
      $_7pltoz117jegz414k.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
  };
  var sketch$4 = function (realm, editor) {
    var spec = {
      onChange: function (value) {
        $_btobco11sjegz4178.apply(editor, value);
      },
      getInitialValue: function () {
        return $_btobco11sjegz4178.get(editor);
      }
    };
    return $_7ugg1i11pjegz416z.button(realm, 'font-size', function () {
      return makeItems$1(spec);
    });
  };
  var $_a1y9cl11qjegz4170 = {
    makeItems: makeItems$1,
    sketch: sketch$4
  };

  var record = function (spec) {
    var uid = $_75j08mxwjegz40o2.hasKey(spec, 'uid') ? spec.uid : $_94kpee111jegz413l.generate('memento');
    var get = function (any) {
      return any.getSystem().getByUid(uid).getOrDie();
    };
    var getOpt = function (any) {
      return any.getSystem().getByUid(uid).fold(Option.none, Option.some);
    };
    var asSpec = function () {
      return $_6qf81kx2jegz40l1.deepMerge(spec, { uid: uid });
    };
    return {
      get: get,
      getOpt: getOpt,
      asSpec: asSpec
    };
  };
  var $_eegrf811vjegz417y = { record: record };

  function create$3(width, height) {
    return resize(document.createElement('canvas'), width, height);
  }
  function clone$2(canvas) {
    var tCanvas, ctx;
    tCanvas = create$3(canvas.width, canvas.height);
    ctx = get2dContext(tCanvas);
    ctx.drawImage(canvas, 0, 0);
    return tCanvas;
  }
  function get2dContext(canvas) {
    return canvas.getContext('2d');
  }
  function get3dContext(canvas) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
      gl = null;
    }
    return gl;
  }
  function resize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  var $_g2z5sl11yjegz418g = {
    create: create$3,
    clone: clone$2,
    resize: resize,
    get2dContext: get2dContext,
    get3dContext: get3dContext
  };

  function getWidth(image) {
    return image.naturalWidth || image.width;
  }
  function getHeight(image) {
    return image.naturalHeight || image.height;
  }
  var $_7xncyo11zjegz418h = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var promise = function () {
    var Promise = function (fn) {
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function')
        throw new TypeError('not a function');
      this._state = null;
      this._value = null;
      this._deferreds = [];
      doResolve(fn, bind(resolve, this), bind(reject, this));
    };
    var asap = Promise.immediateFn || typeof setImmediate === 'function' && setImmediate || function (fn) {
      setTimeout(fn, 1);
    };
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }
    var isArray = Array.isArray || function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };
    function handle(deferred) {
      var me = this;
      if (this._state === null) {
        this._deferreds.push(deferred);
        return;
      }
      asap(function () {
        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (me._state ? deferred.resolve : deferred.reject)(me._value);
          return;
        }
        var ret;
        try {
          ret = cb(me._value);
        } catch (e) {
          deferred.reject(e);
          return;
        }
        deferred.resolve(ret);
      });
    }
    function resolve(newValue) {
      try {
        if (newValue === this)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
            return;
          }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
      } catch (e) {
        reject.call(this, e);
      }
    }
    function reject(newValue) {
      this._state = false;
      this._value = newValue;
      finale.call(this);
    }
    function finale() {
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
      }
      this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
    }
    function doResolve(fn, onFulfilled, onRejected) {
      var done = false;
      try {
        fn(function (value) {
          if (done)
            return;
          done = true;
          onFulfilled(value);
        }, function (reason) {
          if (done)
            return;
          done = true;
          onRejected(reason);
        });
      } catch (ex) {
        if (done)
          return;
        done = true;
        onRejected(ex);
      }
    }
    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
      var me = this;
      return new Promise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
    };
    Promise.all = function () {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
      return new Promise(function (resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise.resolve = function (value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        resolve(value);
      });
    };
    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };
    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };
    return Promise;
  };
  var Promise = window.Promise ? window.Promise : promise();

  function Blob (parts, properties) {
    var f = $_465l97xfjegz40mj.getOrDie('Blob');
    return new f(parts, properties);
  }

  function FileReader () {
    var f = $_465l97xfjegz40mj.getOrDie('FileReader');
    return new f();
  }

  function Uint8Array (arr) {
    var f = $_465l97xfjegz40mj.getOrDie('Uint8Array');
    return new f(arr);
  }

  var requestAnimationFrame = function (callback) {
    var f = $_465l97xfjegz40mj.getOrDie('requestAnimationFrame');
    f(callback);
  };
  var atob = function (base64) {
    var f = $_465l97xfjegz40mj.getOrDie('atob');
    return f(base64);
  };
  var $_ac4ysd124jegz418o = {
    atob: atob,
    requestAnimationFrame: requestAnimationFrame
  };

  function loadImage(image) {
    return new Promise(function (resolve) {
      function loaded() {
        image.removeEventListener('load', loaded);
        resolve(image);
      }
      if (image.complete) {
        resolve(image);
      } else {
        image.addEventListener('load', loaded);
      }
    });
  }
  function imageToBlob(image) {
    return loadImage(image).then(function (image) {
      var src = image.src;
      if (src.indexOf('blob:') === 0) {
        return anyUriToBlob(src);
      }
      if (src.indexOf('data:') === 0) {
        return dataUriToBlob(src);
      }
      return anyUriToBlob(src);
    });
  }
  function blobToImage(blob) {
    return new Promise(function (resolve, reject) {
      var blobUrl = URL.createObjectURL(blob);
      var image = new Image();
      var removeListeners = function () {
        image.removeEventListener('load', loaded);
        image.removeEventListener('error', error);
      };
      function loaded() {
        removeListeners();
        resolve(image);
      }
      function error() {
        removeListeners();
        reject('Unable to load data of type ' + blob.type + ': ' + blobUrl);
      }
      image.addEventListener('load', loaded);
      image.addEventListener('error', error);
      image.src = blobUrl;
      if (image.complete) {
        loaded();
      }
    });
  }
  function anyUriToBlob(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.onerror = function () {
        var _this = this;
        var corsError = function () {
          var obj = new Error('No access to download image');
          obj.code = 18;
          obj.name = 'SecurityError';
          return obj;
        };
        var genericError = function () {
          return new Error('Error ' + _this.status + ' downloading image');
        };
        reject(this.status === 0 ? corsError() : genericError());
      };
      xhr.send();
    });
  }
  function dataUriToBlobSync(uri) {
    var data = uri.split(',');
    var matches = /data:([^;]+)/.exec(data[0]);
    if (!matches)
      return Option.none();
    var mimetype = matches[1];
    var base64 = data[1];
    var sliceSize = 1024;
    var byteCharacters = $_ac4ysd124jegz418o.atob(base64);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = Uint8Array(bytes);
    }
    return Option.some(Blob(byteArrays, { type: mimetype }));
  }
  function dataUriToBlob(uri) {
    return new Promise(function (resolve, reject) {
      dataUriToBlobSync(uri).fold(function () {
        reject('uri is not base64: ' + uri);
      }, resolve);
    });
  }
  function uriToBlob(url) {
    if (url.indexOf('blob:') === 0) {
      return anyUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
      return dataUriToBlob(url);
    }
    return null;
  }
  function canvasToBlob(canvas, type, quality) {
    type = type || 'image/png';
    if (HTMLCanvasElement.prototype.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type, quality);
      });
    } else {
      return dataUriToBlob(canvas.toDataURL(type, quality));
    }
  }
  function canvasToDataURL(getCanvas, type, quality) {
    type = type || 'image/png';
    return getCanvas.then(function (canvas) {
      return canvas.toDataURL(type, quality);
    });
  }
  function blobToCanvas(blob) {
    return blobToImage(blob).then(function (image) {
      revokeImageUrl(image);
      var context, canvas;
      canvas = $_g2z5sl11yjegz418g.create($_7xncyo11zjegz418h.getWidth(image), $_7xncyo11zjegz418h.getHeight(image));
      context = $_g2z5sl11yjegz418g.get2dContext(canvas);
      context.drawImage(image, 0, 0);
      return canvas;
    });
  }
  function blobToDataUri(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function blobToArrayBuffer(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsArrayBuffer(blob);
    });
  }
  function blobToBase64(blob) {
    return blobToDataUri(blob).then(function (dataUri) {
      return dataUri.split(',')[1];
    });
  }
  function revokeImageUrl(image) {
    URL.revokeObjectURL(image.src);
  }
  var $_5qobvg11xjegz4186 = {
    blobToImage: blobToImage,
    imageToBlob: imageToBlob,
    blobToArrayBuffer: blobToArrayBuffer,
    blobToDataUri: blobToDataUri,
    blobToBase64: blobToBase64,
    dataUriToBlobSync: dataUriToBlobSync,
    canvasToBlob: canvasToBlob,
    canvasToDataURL: canvasToDataURL,
    blobToCanvas: blobToCanvas,
    uriToBlob: uriToBlob
  };

  var blobToImage$1 = function (image) {
    return $_5qobvg11xjegz4186.blobToImage(image);
  };
  var imageToBlob$1 = function (blob) {
    return $_5qobvg11xjegz4186.imageToBlob(blob);
  };
  var blobToDataUri$1 = function (blob) {
    return $_5qobvg11xjegz4186.blobToDataUri(blob);
  };
  var blobToBase64$1 = function (blob) {
    return $_5qobvg11xjegz4186.blobToBase64(blob);
  };
  var dataUriToBlobSync$1 = function (uri) {
    return $_5qobvg11xjegz4186.dataUriToBlobSync(uri);
  };
  var uriToBlob$1 = function (uri) {
    return Option.from($_5qobvg11xjegz4186.uriToBlob(uri));
  };
  var $_ewnclo11wjegz4183 = {
    blobToImage: blobToImage$1,
    imageToBlob: imageToBlob$1,
    blobToDataUri: blobToDataUri$1,
    blobToBase64: blobToBase64$1,
    dataUriToBlobSync: dataUriToBlobSync$1,
    uriToBlob: uriToBlob$1
  };

  var addImage = function (editor, blob) {
    $_ewnclo11wjegz4183.blobToBase64(blob).then(function (base64) {
      editor.undoManager.transact(function () {
        var cache = editor.editorUpload.blobCache;
        var info = cache.create($_g605fa10vjegz4123.generate('mceu'), blob, base64);
        cache.add(info);
        var img = editor.dom.createHTML('img', { src: info.blobUri() });
        editor.insertContent(img);
      });
    });
  };
  var extractBlob = function (simulatedEvent) {
    var event = simulatedEvent.event();
    var files = event.raw().target.files || event.raw().dataTransfer.files;
    return Option.from(files[0]);
  };
  var sketch$5 = function (editor) {
    var pickerDom = {
      tag: 'input',
      attributes: {
        accept: 'image/*',
        type: 'file',
        title: ''
      },
      styles: {
        visibility: 'hidden',
        position: 'absolute'
      }
    };
    var memPicker = $_eegrf811vjegz417y.record({
      dom: pickerDom,
      events: $_63ctkqy8jegz40pp.derive([
        $_63ctkqy8jegz40pp.cutter($_equp8wmjegz40j7.click()),
        $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.change(), function (picker, simulatedEvent) {
          extractBlob(simulatedEvent).each(function (blob) {
            addImage(editor, blob);
          });
        })
      ])
    });
    return Button.sketch({
      dom: $_7pltoz117jegz414k.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-image ${prefix}-icon"></span>'),
      components: [memPicker.asSpec()],
      action: function (button) {
        var picker = memPicker.get(button);
        picker.element().dom().click();
      }
    });
  };
  var $_7kq0f611ujegz417l = { sketch: sketch$5 };

  var get$8 = function (element) {
    return element.dom().textContent;
  };
  var set$5 = function (element, value) {
    element.dom().textContent = value;
  };
  var $_dji7hf127jegz4191 = {
    get: get$8,
    set: set$5
  };

  var isNotEmpty = function (val) {
    return val.length > 0;
  };
  var defaultToEmpty = function (str) {
    return str === undefined || str === null ? '' : str;
  };
  var noLink = function (editor) {
    var text = editor.selection.getContent({ format: 'text' });
    return {
      url: '',
      text: text,
      title: '',
      target: '',
      link: Option.none()
    };
  };
  var fromLink = function (link) {
    var text = $_dji7hf127jegz4191.get(link);
    var url = $_bcxlrzxvjegz40nw.get(link, 'href');
    var title = $_bcxlrzxvjegz40nw.get(link, 'title');
    var target = $_bcxlrzxvjegz40nw.get(link, 'target');
    return {
      url: defaultToEmpty(url),
      text: text !== url ? defaultToEmpty(text) : '',
      title: defaultToEmpty(title),
      target: defaultToEmpty(target),
      link: Option.some(link)
    };
  };
  var getInfo = function (editor) {
    return query(editor).fold(function () {
      return noLink(editor);
    }, function (link) {
      return fromLink(link);
    });
  };
  var wasSimple = function (link) {
    var prevHref = $_bcxlrzxvjegz40nw.get(link, 'href');
    var prevText = $_dji7hf127jegz4191.get(link);
    return prevHref === prevText;
  };
  var getTextToApply = function (link, url, info) {
    return info.text.filter(isNotEmpty).fold(function () {
      return wasSimple(link) ? Option.some(url) : Option.none();
    }, Option.some);
  };
  var unlinkIfRequired = function (editor, info) {
    var activeLink = info.link.bind($_b84g4ownjegz40jb.identity);
    activeLink.each(function (link) {
      editor.execCommand('unlink');
    });
  };
  var getAttrs$1 = function (url, info) {
    var attrs = {};
    attrs.href = url;
    info.title.filter(isNotEmpty).each(function (title) {
      attrs.title = title;
    });
    info.target.filter(isNotEmpty).each(function (target) {
      attrs.target = target;
    });
    return attrs;
  };
  var applyInfo = function (editor, info) {
    info.url.filter(isNotEmpty).fold(function () {
      unlinkIfRequired(editor, info);
    }, function (url) {
      var attrs = getAttrs$1(url, info);
      var activeLink = info.link.bind($_b84g4ownjegz40jb.identity);
      activeLink.fold(function () {
        var text = info.text.filter(isNotEmpty).getOr(url);
        editor.insertContent(editor.dom.createHTML('a', attrs, editor.dom.encode(text)));
      }, function (link) {
        var text = getTextToApply(link, url, info);
        $_bcxlrzxvjegz40nw.setAll(link, attrs);
        text.each(function (newText) {
          $_dji7hf127jegz4191.set(link, newText);
        });
      });
    });
  };
  var query = function (editor) {
    var start = $_30i27zxjjegz40mu.fromDom(editor.selection.getStart());
    return $_eelz2c101jegz40xw.closest(start, 'a');
  };
  var $_1pt9rd126jegz418u = {
    getInfo: getInfo,
    applyInfo: applyInfo,
    query: query
  };

  var platform$1 = $_fzn4cewojegz40je.detect();
  var preserve$1 = function (f, editor) {
    var rng = editor.selection.getRng();
    f();
    editor.selection.setRng(rng);
  };
  var forAndroid = function (editor, f) {
    var wrapper = platform$1.os.isAndroid() ? preserve$1 : $_b84g4ownjegz40jb.apply;
    wrapper(f, editor);
  };
  var $_5e1baz128jegz4192 = { forAndroid: forAndroid };

  var events$6 = function (name, eventHandlers) {
    var events = $_63ctkqy8jegz40pp.derive(eventHandlers);
    return $_2s5cqny6jegz40p5.create({
      fields: [$_cjikoqybjegz40q7.strict('enabled')],
      name: name,
      active: { events: $_b84g4ownjegz40jb.constant(events) }
    });
  };
  var config = function (name, eventHandlers) {
    var me = events$6(name, eventHandlers);
    return {
      key: name,
      value: {
        config: {},
        me: me,
        configAsRaw: $_b84g4ownjegz40jb.constant({}),
        initialConfig: {},
        state: $_2s5cqny6jegz40p5.noState()
      }
    };
  };
  var $_2rkvb812ajegz419i = {
    events: events$6,
    config: config
  };

  var getCurrent = function (component, composeConfig, composeState) {
    return composeConfig.find()(component);
  };
  var $_8cu97v12cjegz419u = { getCurrent: getCurrent };

  var ComposeSchema = [$_cjikoqybjegz40q7.strict('find')];

  var Composing = $_2s5cqny6jegz40p5.create({
    fields: ComposeSchema,
    name: 'composing',
    apis: $_8cu97v12cjegz419u
  });

  var factory$1 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_6qf81kx2jegz40l1.deepMerge({
        tag: 'div',
        attributes: { role: 'presentation' }
      }, detail.dom()),
      components: detail.components(),
      behaviours: $_4ipd2i10sjegz411l.get(detail.containerBehaviours()),
      events: detail.events(),
      domModification: detail.domModification(),
      eventOrder: detail.eventOrder()
    };
  };
  var Container = $_5bitwv10tjegz411q.single({
    name: 'Container',
    factory: factory$1,
    configFields: [
      $_cjikoqybjegz40q7.defaulted('components', []),
      $_4ipd2i10sjegz411l.field('containerBehaviours', []),
      $_cjikoqybjegz40q7.defaulted('events', {}),
      $_cjikoqybjegz40q7.defaulted('domModification', {}),
      $_cjikoqybjegz40q7.defaulted('eventOrder', {})
    ]
  });

  var factory$2 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.getInitialValue()()
          }
        }),
        Composing.config({ find: Option.some })
      ]), $_4ipd2i10sjegz411l.get(detail.dataBehaviours())),
      events: $_63ctkqy8jegz40pp.derive([$_63ctkqy8jegz40pp.runOnAttached(function (component, simulatedEvent) {
          me.setValue(component, detail.getInitialValue()());
        })])
    };
  };
  var DataField = $_5bitwv10tjegz411q.single({
    name: 'DataField',
    factory: factory$2,
    configFields: [
      $_cjikoqybjegz40q7.strict('uid'),
      $_cjikoqybjegz40q7.strict('dom'),
      $_cjikoqybjegz40q7.strict('getInitialValue'),
      $_4ipd2i10sjegz411l.field('dataBehaviours', [
        me,
        Composing
      ])
    ]
  });

  var get$9 = function (element) {
    return element.dom().value;
  };
  var set$6 = function (element, value) {
    if (value === undefined)
      throw new Error('Value.set was undefined');
    element.dom().value = value;
  };
  var $_1dxsib12ijegz41ag = {
    set: set$6,
    get: get$9
  };

  var schema$8 = [
    $_cjikoqybjegz40q7.option('data'),
    $_cjikoqybjegz40q7.defaulted('inputAttributes', {}),
    $_cjikoqybjegz40q7.defaulted('inputStyles', {}),
    $_cjikoqybjegz40q7.defaulted('type', 'input'),
    $_cjikoqybjegz40q7.defaulted('tag', 'input'),
    $_cjikoqybjegz40q7.defaulted('inputClasses', []),
    $_b1fv0nzajegz40ue.onHandler('onSetValue'),
    $_cjikoqybjegz40q7.defaulted('styles', {}),
    $_cjikoqybjegz40q7.option('placeholder'),
    $_cjikoqybjegz40q7.defaulted('eventOrder', {}),
    $_4ipd2i10sjegz411l.field('inputBehaviours', [
      me,
      Focusing
    ]),
    $_cjikoqybjegz40q7.defaulted('selectOnFocus', true)
  ];
  var behaviours = function (detail) {
    return $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([
      me.config({
        store: {
          mode: 'manual',
          initialValue: detail.data().getOr(undefined),
          getValue: function (input) {
            return $_1dxsib12ijegz41ag.get(input.element());
          },
          setValue: function (input, data) {
            var current = $_1dxsib12ijegz41ag.get(input.element());
            if (current !== data) {
              $_1dxsib12ijegz41ag.set(input.element(), data);
            }
          }
        },
        onSetValue: detail.onSetValue()
      }),
      Focusing.config({
        onFocus: detail.selectOnFocus() === false ? $_b84g4ownjegz40jb.noop : function (component) {
          var input = component.element();
          var value = $_1dxsib12ijegz41ag.get(input);
          input.dom().setSelectionRange(0, value.length);
        }
      })
    ]), $_4ipd2i10sjegz411l.get(detail.inputBehaviours()));
  };
  var dom$2 = function (detail) {
    return {
      tag: detail.tag(),
      attributes: $_6qf81kx2jegz40l1.deepMerge($_75j08mxwjegz40o2.wrapAll([{
          key: 'type',
          value: detail.type()
        }].concat(detail.placeholder().map(function (pc) {
        return {
          key: 'placeholder',
          value: pc
        };
      }).toArray())), detail.inputAttributes()),
      styles: detail.inputStyles(),
      classes: detail.inputClasses()
    };
  };
  var $_93kt1412hjegz41a8 = {
    schema: $_b84g4ownjegz40jb.constant(schema$8),
    behaviours: behaviours,
    dom: dom$2
  };

  var factory$3 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_93kt1412hjegz41a8.dom(detail),
      components: [],
      behaviours: $_93kt1412hjegz41a8.behaviours(detail),
      eventOrder: detail.eventOrder()
    };
  };
  var Input = $_5bitwv10tjegz411q.single({
    name: 'Input',
    configFields: $_93kt1412hjegz41a8.schema(),
    factory: factory$3
  });

  var exhibit$3 = function (base, tabConfig) {
    return $_b3xpx9yljegz40ry.nu({
      attributes: $_75j08mxwjegz40o2.wrapAll([{
          key: tabConfig.tabAttr(),
          value: 'true'
        }])
    });
  };
  var $_8eoyvl12kjegz41aj = { exhibit: exhibit$3 };

  var TabstopSchema = [$_cjikoqybjegz40q7.defaulted('tabAttr', 'data-alloy-tabstop')];

  var Tabstopping = $_2s5cqny6jegz40p5.create({
    fields: TabstopSchema,
    name: 'tabstopping',
    active: $_8eoyvl12kjegz41aj
  });

  var clearInputBehaviour = 'input-clearing';
  var field$2 = function (name, placeholder) {
    var inputSpec = $_eegrf811vjegz417y.record(Input.sketch({
      placeholder: placeholder,
      onSetValue: function (input, data) {
        $_78tntkwkjegz40iy.emit(input, $_equp8wmjegz40j7.input());
      },
      inputBehaviours: $_2s5cqny6jegz40p5.derive([
        Composing.config({ find: Option.some }),
        Tabstopping.config({}),
        Keying.config({ mode: 'execution' })
      ]),
      selectOnFocus: false
    }));
    var buttonSpec = $_eegrf811vjegz417y.record(Button.sketch({
      dom: $_7pltoz117jegz414k.dom('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'),
      action: function (button) {
        var input = inputSpec.get(button);
        me.setValue(input, '');
      }
    }));
    return {
      name: name,
      spec: Container.sketch({
        dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-input-container"></div>'),
        components: [
          inputSpec.asSpec(),
          buttonSpec.asSpec()
        ],
        containerBehaviours: $_2s5cqny6jegz40p5.derive([
          Toggling.config({ toggleClass: $_c2ndmvzijegz40vq.resolve('input-container-empty') }),
          Composing.config({
            find: function (comp) {
              return Option.some(inputSpec.get(comp));
            }
          }),
          $_2rkvb812ajegz419i.config(clearInputBehaviour, [$_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.input(), function (iContainer) {
              var input = inputSpec.get(iContainer);
              var val = me.getValue(input);
              var f = val.length > 0 ? Toggling.off : Toggling.on;
              f(iContainer);
            })])
        ])
      })
    };
  };
  var hidden = function (name) {
    return {
      name: name,
      spec: DataField.sketch({
        dom: {
          tag: 'span',
          styles: { display: 'none' }
        },
        getInitialValue: function () {
          return Option.none();
        }
      })
    };
  };
  var $_b2ycsb129jegz4195 = {
    field: field$2,
    hidden: hidden
  };

  var nativeDisabled = [
    'input',
    'button',
    'textarea'
  ];
  var onLoad$5 = function (component, disableConfig, disableState) {
    if (disableConfig.disabled())
      disable(component, disableConfig, disableState);
  };
  var hasNative = function (component) {
    return $_353rcfwwjegz40kh.contains(nativeDisabled, $_bge3bexojegz40n6.name(component.element()));
  };
  var nativeIsDisabled = function (component) {
    return $_bcxlrzxvjegz40nw.has(component.element(), 'disabled');
  };
  var nativeDisable = function (component) {
    $_bcxlrzxvjegz40nw.set(component.element(), 'disabled', 'disabled');
  };
  var nativeEnable = function (component) {
    $_bcxlrzxvjegz40nw.remove(component.element(), 'disabled');
  };
  var ariaIsDisabled = function (component) {
    return $_bcxlrzxvjegz40nw.get(component.element(), 'aria-disabled') === 'true';
  };
  var ariaDisable = function (component) {
    $_bcxlrzxvjegz40nw.set(component.element(), 'aria-disabled', 'true');
  };
  var ariaEnable = function (component) {
    $_bcxlrzxvjegz40nw.set(component.element(), 'aria-disabled', 'false');
  };
  var disable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_aoqcjmyrjegz40sq.add(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeDisable : ariaDisable;
    f(component);
  };
  var enable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_aoqcjmyrjegz40sq.remove(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeEnable : ariaEnable;
    f(component);
  };
  var isDisabled = function (component) {
    return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
  };
  var $_bd71od12pjegz41bn = {
    enable: enable,
    disable: disable,
    isDisabled: isDisabled,
    onLoad: onLoad$5
  };

  var exhibit$4 = function (base, disableConfig, disableState) {
    return $_b3xpx9yljegz40ry.nu({ classes: disableConfig.disabled() ? disableConfig.disableClass().map($_353rcfwwjegz40kh.pure).getOr([]) : [] });
  };
  var events$7 = function (disableConfig, disableState) {
    return $_63ctkqy8jegz40pp.derive([
      $_63ctkqy8jegz40pp.abort($_f4n44rwljegz40j4.execute(), function (component, simulatedEvent) {
        return $_bd71od12pjegz41bn.isDisabled(component, disableConfig, disableState);
      }),
      $_6z4hay7jegz40pc.loadEvent(disableConfig, disableState, $_bd71od12pjegz41bn.onLoad)
    ]);
  };
  var $_c65v7p12ojegz41bf = {
    exhibit: exhibit$4,
    events: events$7
  };

  var DisableSchema = [
    $_cjikoqybjegz40q7.defaulted('disabled', false),
    $_cjikoqybjegz40q7.option('disableClass')
  ];

  var Disabling = $_2s5cqny6jegz40p5.create({
    fields: DisableSchema,
    name: 'disabling',
    active: $_c65v7p12ojegz41bf,
    apis: $_bd71od12pjegz41bn
  });

  var owner$1 = 'form';
  var schema$9 = [$_4ipd2i10sjegz411l.field('formBehaviours', [me])];
  var getPartName = function (name) {
    return '<alloy.field.' + name + '>';
  };
  var sketch$6 = function (fSpec) {
    var parts = function () {
      var record = [];
      var field = function (name, config) {
        record.push(name);
        return $_63fdjp10xjegz412f.generateOne(owner$1, getPartName(name), config);
      };
      return {
        field: field,
        record: function () {
          return record;
        }
      };
    }();
    var spec = fSpec(parts);
    var partNames = parts.record();
    var fieldParts = $_353rcfwwjegz40kh.map(partNames, function (n) {
      return $_ev0b2610zjegz412z.required({
        name: n,
        pname: getPartName(n)
      });
    });
    return $_bxe18x10wjegz4125.composite(owner$1, schema$9, fieldParts, make, spec);
  };
  var make = function (detail, components, spec) {
    return $_6qf81kx2jegz40l1.deepMerge({
      'debug.sketcher': { 'Form': spec },
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([me.config({
          store: {
            mode: 'manual',
            getValue: function (form) {
              var optPs = $_63fdjp10xjegz412f.getAllParts(form, detail);
              return $_4vnyr3x4jegz40l5.map(optPs, function (optPThunk, pName) {
                return optPThunk().bind(Composing.getCurrent).map(me.getValue);
              });
            },
            setValue: function (form, values) {
              $_4vnyr3x4jegz40l5.each(values, function (newValue, key) {
                $_63fdjp10xjegz412f.getPart(form, detail, key).each(function (wrapper) {
                  Composing.getCurrent(wrapper).each(function (field) {
                    me.setValue(field, newValue);
                  });
                });
              });
            }
          }
        })]), $_4ipd2i10sjegz411l.get(detail.formBehaviours())),
      apis: {
        getField: function (form, key) {
          return $_63fdjp10xjegz412f.getPart(form, detail, key).bind(Composing.getCurrent);
        }
      }
    });
  };
  var $_936a3n12rjegz41bw = {
    getField: $_fv6fv410ujegz411y.makeApi(function (apis, component, key) {
      return apis.getField(component, key);
    }),
    sketch: sketch$6
  };

  var revocable = function (doRevoke) {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(doRevoke);
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set
    };
  };
  var destroyable = function () {
    return revocable(function (s) {
      s.destroy();
    });
  };
  var unbindable = function () {
    return revocable(function (s) {
      s.unbind();
    });
  };
  var api$2 = function () {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(function (s) {
        s.destroy();
      });
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var run = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set,
      run: run
    };
  };
  var value$3 = function () {
    var subject = Cell(Option.none());
    var clear = function () {
      subject.set(Option.none());
    };
    var set = function (s) {
      subject.set(Option.some(s));
    };
    var on = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      set: set,
      isSet: isSet,
      on: on
    };
  };
  var $_2shn2412sjegz41c3 = {
    destroyable: destroyable,
    unbindable: unbindable,
    api: api$2,
    value: value$3
  };

  var SWIPING_LEFT = 1;
  var SWIPING_RIGHT = -1;
  var SWIPING_NONE = 0;
  var init$3 = function (xValue) {
    return {
      xValue: xValue,
      points: []
    };
  };
  var move = function (model, xValue) {
    if (xValue === model.xValue) {
      return model;
    }
    var currentDirection = xValue - model.xValue > 0 ? SWIPING_LEFT : SWIPING_RIGHT;
    var newPoint = {
      direction: currentDirection,
      xValue: xValue
    };
    var priorPoints = function () {
      if (model.points.length === 0) {
        return [];
      } else {
        var prev = model.points[model.points.length - 1];
        return prev.direction === currentDirection ? model.points.slice(0, model.points.length - 1) : model.points;
      }
    }();
    return {
      xValue: xValue,
      points: priorPoints.concat([newPoint])
    };
  };
  var complete = function (model) {
    if (model.points.length === 0) {
      return SWIPING_NONE;
    } else {
      var firstDirection = model.points[0].direction;
      var lastDirection = model.points[model.points.length - 1].direction;
      return firstDirection === SWIPING_RIGHT && lastDirection === SWIPING_RIGHT ? SWIPING_RIGHT : firstDirection === SWIPING_LEFT && lastDirection === SWIPING_LEFT ? SWIPING_LEFT : SWIPING_NONE;
    }
  };
  var $_5rr9kj12tjegz41c6 = {
    init: init$3,
    move: move,
    complete: complete
  };

  var sketch$7 = function (rawSpec) {
    var navigateEvent = 'navigateEvent';
    var wrapperAdhocEvents = 'serializer-wrapper-events';
    var formAdhocEvents = 'form-events';
    var schema = $_fokpo2yijegz40rm.objOf([
      $_cjikoqybjegz40q7.strict('fields'),
      $_cjikoqybjegz40q7.defaulted('maxFieldIndex', rawSpec.fields.length - 1),
      $_cjikoqybjegz40q7.strict('onExecute'),
      $_cjikoqybjegz40q7.strict('getInitialValue'),
      $_cjikoqybjegz40q7.state('state', function () {
        return {
          dialogSwipeState: $_2shn2412sjegz41c3.value(),
          currentScreen: Cell(0)
        };
      })
    ]);
    var spec = $_fokpo2yijegz40rm.asRawOrDie('SerialisedDialog', schema, rawSpec);
    var navigationButton = function (direction, directionName, enabled) {
      return Button.sketch({
        dom: $_7pltoz117jegz414k.dom('<span class="${prefix}-icon-' + directionName + ' ${prefix}-icon"></span>'),
        action: function (button) {
          $_78tntkwkjegz40iy.emitWith(button, navigateEvent, { direction: direction });
        },
        buttonBehaviours: $_2s5cqny6jegz40p5.derive([Disabling.config({
            disableClass: $_c2ndmvzijegz40vq.resolve('toolbar-navigation-disabled'),
            disabled: !enabled
          })])
      });
    };
    var reposition = function (dialog, message) {
      $_eelz2c101jegz40xw.descendant(dialog.element(), '.' + $_c2ndmvzijegz40vq.resolve('serialised-dialog-chain')).each(function (parent) {
        $_flvpsp107jegz40ye.set(parent, 'left', -spec.state.currentScreen.get() * message.width + 'px');
      });
    };
    var navigate = function (dialog, direction) {
      var screens = $_7opypzzzjegz40xs.descendants(dialog.element(), '.' + $_c2ndmvzijegz40vq.resolve('serialised-dialog-screen'));
      $_eelz2c101jegz40xw.descendant(dialog.element(), '.' + $_c2ndmvzijegz40vq.resolve('serialised-dialog-chain')).each(function (parent) {
        if (spec.state.currentScreen.get() + direction >= 0 && spec.state.currentScreen.get() + direction < screens.length) {
          $_flvpsp107jegz40ye.getRaw(parent, 'left').each(function (left) {
            var currentLeft = parseInt(left, 10);
            var w = $_6iva5411ojegz416y.get(screens[0]);
            $_flvpsp107jegz40ye.set(parent, 'left', currentLeft - direction * w + 'px');
          });
          spec.state.currentScreen.set(spec.state.currentScreen.get() + direction);
        }
      });
    };
    var focusInput = function (dialog) {
      var inputs = $_7opypzzzjegz40xs.descendants(dialog.element(), 'input');
      var optInput = Option.from(inputs[spec.state.currentScreen.get()]);
      optInput.each(function (input) {
        dialog.getSystem().getByDom(input).each(function (inputComp) {
          $_78tntkwkjegz40iy.dispatchFocus(dialog, inputComp.element());
        });
      });
      var dotitems = memDots.get(dialog);
      Highlighting.highlightAt(dotitems, spec.state.currentScreen.get());
    };
    var resetState = function () {
      spec.state.currentScreen.set(0);
      spec.state.dialogSwipeState.clear();
    };
    var memForm = $_eegrf811vjegz417y.record($_936a3n12rjegz41bw.sketch(function (parts) {
      return {
        dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-serialised-dialog"></div>'),
        components: [Container.sketch({
            dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'),
            components: $_353rcfwwjegz40kh.map(spec.fields, function (field, i) {
              return i <= spec.maxFieldIndex ? Container.sketch({
                dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-serialised-dialog-screen"></div>'),
                components: $_353rcfwwjegz40kh.flatten([
                  [navigationButton(-1, 'previous', i > 0)],
                  [parts.field(field.name, field.spec)],
                  [navigationButton(+1, 'next', i < spec.maxFieldIndex)]
                ])
              }) : parts.field(field.name, field.spec);
            })
          })],
        formBehaviours: $_2s5cqny6jegz40p5.derive([
          $_dp0qcmzhjegz40vo.orientation(function (dialog, message) {
            reposition(dialog, message);
          }),
          Keying.config({
            mode: 'special',
            focusIn: function (dialog) {
              focusInput(dialog);
            },
            onTab: function (dialog) {
              navigate(dialog, +1);
              return Option.some(true);
            },
            onShiftTab: function (dialog) {
              navigate(dialog, -1);
              return Option.some(true);
            }
          }),
          $_2rkvb812ajegz419i.config(formAdhocEvents, [
            $_63ctkqy8jegz40pp.runOnAttached(function (dialog, simulatedEvent) {
              resetState();
              var dotitems = memDots.get(dialog);
              Highlighting.highlightFirst(dotitems);
              spec.getInitialValue(dialog).each(function (v) {
                me.setValue(dialog, v);
              });
            }),
            $_63ctkqy8jegz40pp.runOnExecute(spec.onExecute),
            $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.transitionend(), function (dialog, simulatedEvent) {
              if (simulatedEvent.event().raw().propertyName === 'left') {
                focusInput(dialog);
              }
            }),
            $_63ctkqy8jegz40pp.run(navigateEvent, function (dialog, simulatedEvent) {
              var direction = simulatedEvent.event().direction();
              navigate(dialog, direction);
            })
          ])
        ])
      };
    }));
    var memDots = $_eegrf811vjegz417y.record({
      dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-dot-container"></div>'),
      behaviours: $_2s5cqny6jegz40p5.derive([Highlighting.config({
          highlightClass: $_c2ndmvzijegz40vq.resolve('dot-active'),
          itemClass: $_c2ndmvzijegz40vq.resolve('dot-item')
        })]),
      components: $_353rcfwwjegz40kh.bind(spec.fields, function (_f, i) {
        return i <= spec.maxFieldIndex ? [$_7pltoz117jegz414k.spec('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [];
      })
    });
    return {
      dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-serializer-wrapper"></div>'),
      components: [
        memForm.asSpec(),
        memDots.asSpec()
      ],
      behaviours: $_2s5cqny6jegz40p5.derive([
        Keying.config({
          mode: 'special',
          focusIn: function (wrapper) {
            var form = memForm.get(wrapper);
            Keying.focusIn(form);
          }
        }),
        $_2rkvb812ajegz419i.config(wrapperAdhocEvents, [
          $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.touchstart(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.set($_5rr9kj12tjegz41c6.init(simulatedEvent.event().raw().touches[0].clientX));
          }),
          $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.touchmove(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.on(function (state) {
              simulatedEvent.event().prevent();
              spec.state.dialogSwipeState.set($_5rr9kj12tjegz41c6.move(state, simulatedEvent.event().raw().touches[0].clientX));
            });
          }),
          $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.touchend(), function (wrapper) {
            spec.state.dialogSwipeState.on(function (state) {
              var dialog = memForm.get(wrapper);
              var direction = -1 * $_5rr9kj12tjegz41c6.complete(state);
              navigate(dialog, direction);
            });
          })
        ])
      ])
    };
  };
  var $_e82vli12mjegz41ao = { sketch: sketch$7 };

  var getGroups = $_81htnewpjegz40jh.cached(function (realm, editor) {
    return [{
        label: 'the link group',
        items: [$_e82vli12mjegz41ao.sketch({
            fields: [
              $_b2ycsb129jegz4195.field('url', 'Type or paste URL'),
              $_b2ycsb129jegz4195.field('text', 'Link text'),
              $_b2ycsb129jegz4195.field('title', 'Link title'),
              $_b2ycsb129jegz4195.field('target', 'Link target'),
              $_b2ycsb129jegz4195.hidden('link')
            ],
            maxFieldIndex: [
              'url',
              'text',
              'title',
              'target'
            ].length - 1,
            getInitialValue: function () {
              return Option.some($_1pt9rd126jegz418u.getInfo(editor));
            },
            onExecute: function (dialog) {
              var info = me.getValue(dialog);
              $_1pt9rd126jegz418u.applyInfo(editor, info);
              realm.restoreToolbar();
              editor.focus();
            }
          })]
      }];
  });
  var sketch$8 = function (realm, editor) {
    return $_dwz193zjjegz40vs.forToolbarStateAction(editor, 'link', 'link', function () {
      var groups = getGroups(realm, editor);
      realm.setContextToolbar(groups);
      $_5e1baz128jegz4192.forAndroid(editor, function () {
        realm.focusToolbar();
      });
      $_1pt9rd126jegz418u.query(editor).each(function (link) {
        editor.selection.select(link.dom());
      });
    });
  };
  var $_dlylml125jegz418p = { sketch: sketch$8 };

  var DefaultStyleFormats = [
    {
      title: 'Headings',
      items: [
        {
          title: 'Heading 1',
          format: 'h1'
        },
        {
          title: 'Heading 2',
          format: 'h2'
        },
        {
          title: 'Heading 3',
          format: 'h3'
        },
        {
          title: 'Heading 4',
          format: 'h4'
        },
        {
          title: 'Heading 5',
          format: 'h5'
        },
        {
          title: 'Heading 6',
          format: 'h6'
        }
      ]
    },
    {
      title: 'Inline',
      items: [
        {
          title: 'Bold',
          icon: 'bold',
          format: 'bold'
        },
        {
          title: 'Italic',
          icon: 'italic',
          format: 'italic'
        },
        {
          title: 'Underline',
          icon: 'underline',
          format: 'underline'
        },
        {
          title: 'Strikethrough',
          icon: 'strikethrough',
          format: 'strikethrough'
        },
        {
          title: 'Superscript',
          icon: 'superscript',
          format: 'superscript'
        },
        {
          title: 'Subscript',
          icon: 'subscript',
          format: 'subscript'
        },
        {
          title: 'Code',
          icon: 'code',
          format: 'code'
        }
      ]
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Paragraph',
          format: 'p'
        },
        {
          title: 'Blockquote',
          format: 'blockquote'
        },
        {
          title: 'Div',
          format: 'div'
        },
        {
          title: 'Pre',
          format: 'pre'
        }
      ]
    },
    {
      title: 'Alignment',
      items: [
        {
          title: 'Left',
          icon: 'alignleft',
          format: 'alignleft'
        },
        {
          title: 'Center',
          icon: 'aligncenter',
          format: 'aligncenter'
        },
        {
          title: 'Right',
          icon: 'alignright',
          format: 'alignright'
        },
        {
          title: 'Justify',
          icon: 'alignjustify',
          format: 'alignjustify'
        }
      ]
    }
  ];

  var generateFrom = function (spec, all) {
    var schema = $_353rcfwwjegz40kh.map(all, function (a) {
      return $_cjikoqybjegz40q7.field(a.name(), a.name(), $_an0j3iycjegz40qj.asOption(), $_fokpo2yijegz40rm.objOf([
        $_cjikoqybjegz40q7.strict('config'),
        $_cjikoqybjegz40q7.defaulted('state', $_xbi0rynjegz40sh)
      ]));
    });
    var validated = $_fokpo2yijegz40rm.asStruct('component.behaviours', $_fokpo2yijegz40rm.objOf(schema), spec.behaviours).fold(function (errInfo) {
      throw new Error($_fokpo2yijegz40rm.formatError(errInfo) + '\nComplete spec:\n' + $_6dqjd6yhjegz40rj.stringify(spec, null, 2));
    }, $_b84g4ownjegz40jb.identity);
    return {
      list: all,
      data: $_4vnyr3x4jegz40l5.map(validated, function (blobOptionThunk) {
        var blobOption = blobOptionThunk();
        return $_b84g4ownjegz40jb.constant(blobOption.map(function (blob) {
          return {
            config: blob.config(),
            state: blob.state().init(blob.config())
          };
        }));
      })
    };
  };
  var getBehaviours = function (bData) {
    return bData.list;
  };
  var getData = function (bData) {
    return bData.data;
  };
  var $_fkvco4130jegz41dv = {
    generateFrom: generateFrom,
    getBehaviours: getBehaviours,
    getData: getData
  };

  var getBehaviours$1 = function (spec) {
    var behaviours = $_75j08mxwjegz40o2.readOptFrom(spec, 'behaviours').getOr({});
    var keys = $_353rcfwwjegz40kh.filter($_4vnyr3x4jegz40l5.keys(behaviours), function (k) {
      return behaviours[k] !== undefined;
    });
    return $_353rcfwwjegz40kh.map(keys, function (k) {
      return spec.behaviours[k].me;
    });
  };
  var generateFrom$1 = function (spec, all) {
    return $_fkvco4130jegz41dv.generateFrom(spec, all);
  };
  var generate$4 = function (spec) {
    var all = getBehaviours$1(spec);
    return generateFrom$1(spec, all);
  };
  var $_bw1v7s12zjegz41dq = {
    generate: generate$4,
    generateFrom: generateFrom$1
  };

  var ComponentApi = $_a3se26ypjegz40sk.exactly([
    'getSystem',
    'config',
    'hasConfigured',
    'spec',
    'connect',
    'disconnect',
    'element',
    'syncComponents',
    'readState',
    'components',
    'events'
  ]);

  var SystemApi = $_a3se26ypjegz40sk.exactly([
    'debugInfo',
    'triggerFocus',
    'triggerEvent',
    'triggerEscape',
    'addToWorld',
    'removeFromWorld',
    'addToGui',
    'removeFromGui',
    'build',
    'getByUid',
    'getByDom',
    'broadcast',
    'broadcastOn'
  ]);

  function NoContextApi (getComp) {
    var fail = function (event) {
      return function () {
        throw new Error('The component must be in a context to send: ' + event + '\n' + $_clwaugxqjegz40nk.element(getComp().element()) + ' is not in context.');
      };
    };
    return SystemApi({
      debugInfo: $_b84g4ownjegz40jb.constant('fake'),
      triggerEvent: fail('triggerEvent'),
      triggerFocus: fail('triggerFocus'),
      triggerEscape: fail('triggerEscape'),
      build: fail('build'),
      addToWorld: fail('addToWorld'),
      removeFromWorld: fail('removeFromWorld'),
      addToGui: fail('addToGui'),
      removeFromGui: fail('removeFromGui'),
      getByUid: fail('getByUid'),
      getByDom: fail('getByDom'),
      broadcast: fail('broadcast'),
      broadcastOn: fail('broadcastOn')
    });
  }

  var byInnerKey = function (data, tuple) {
    var r = {};
    $_4vnyr3x4jegz40l5.each(data, function (detail, key) {
      $_4vnyr3x4jegz40l5.each(detail, function (value, indexKey) {
        var chain = $_75j08mxwjegz40o2.readOr(indexKey, [])(r);
        r[indexKey] = chain.concat([tuple(key, value)]);
      });
    });
    return r;
  };
  var $_4d1lnt135jegz41en = { byInnerKey: byInnerKey };

  var behaviourDom = function (name, modification) {
    return {
      name: $_b84g4ownjegz40jb.constant(name),
      modification: modification
    };
  };
  var concat = function (chain, aspect) {
    var values = $_353rcfwwjegz40kh.bind(chain, function (c) {
      return c.modification().getOr([]);
    });
    return Result.value($_75j08mxwjegz40o2.wrap(aspect, values));
  };
  var onlyOne = function (chain, aspect, order) {
    if (chain.length > 1)
      return Result.error('Multiple behaviours have tried to change DOM "' + aspect + '". The guilty behaviours are: ' + $_6dqjd6yhjegz40rj.stringify($_353rcfwwjegz40kh.map(chain, function (b) {
        return b.name();
      })) + '. At this stage, this ' + 'is not supported. Future releases might provide strategies for resolving this.');
    else if (chain.length === 0)
      return Result.value({});
    else
      return Result.value(chain[0].modification().fold(function () {
        return {};
      }, function (m) {
        return $_75j08mxwjegz40o2.wrap(aspect, m);
      }));
  };
  var duplicate = function (aspect, k, obj, behaviours) {
    return Result.error('Mulitple behaviours have tried to change the _' + k + '_ "' + aspect + '"' + '. The guilty behaviours are: ' + $_6dqjd6yhjegz40rj.stringify($_353rcfwwjegz40kh.bind(behaviours, function (b) {
      return b.modification().getOr({})[k] !== undefined ? [b.name()] : [];
    }), null, 2) + '. This is not currently supported.');
  };
  var safeMerge = function (chain, aspect) {
    var y = $_353rcfwwjegz40kh.foldl(chain, function (acc, c) {
      var obj = c.modification().getOr({});
      return acc.bind(function (accRest) {
        var parts = $_4vnyr3x4jegz40l5.mapToArray(obj, function (v, k) {
          return accRest[k] !== undefined ? duplicate(aspect, k, obj, chain) : Result.value($_75j08mxwjegz40o2.wrap(k, v));
        });
        return $_75j08mxwjegz40o2.consolidate(parts, accRest);
      });
    }, Result.value({}));
    return y.map(function (yValue) {
      return $_75j08mxwjegz40o2.wrap(aspect, yValue);
    });
  };
  var mergeTypes = {
    classes: concat,
    attributes: safeMerge,
    styles: safeMerge,
    domChildren: onlyOne,
    defChildren: onlyOne,
    innerHtml: onlyOne,
    value: onlyOne
  };
  var combine$1 = function (info, baseMod, behaviours, base) {
    var behaviourDoms = $_6qf81kx2jegz40l1.deepMerge({}, baseMod);
    $_353rcfwwjegz40kh.each(behaviours, function (behaviour) {
      behaviourDoms[behaviour.name()] = behaviour.exhibit(info, base);
    });
    var byAspect = $_4d1lnt135jegz41en.byInnerKey(behaviourDoms, behaviourDom);
    var usedAspect = $_4vnyr3x4jegz40l5.map(byAspect, function (values, aspect) {
      return $_353rcfwwjegz40kh.bind(values, function (value) {
        return value.modification().fold(function () {
          return [];
        }, function (v) {
          return [value];
        });
      });
    });
    var modifications = $_4vnyr3x4jegz40l5.mapToArray(usedAspect, function (values, aspect) {
      return $_75j08mxwjegz40o2.readOptFrom(mergeTypes, aspect).fold(function () {
        return Result.error('Unknown field type: ' + aspect);
      }, function (merger) {
        return merger(values, aspect);
      });
    });
    var consolidated = $_75j08mxwjegz40o2.consolidate(modifications, {});
    return consolidated.map($_b3xpx9yljegz40ry.nu);
  };
  var $_1g1c7w134jegz41ee = { combine: combine$1 };

  var sortKeys = function (label, keyName, array, order) {
    var sliced = array.slice(0);
    try {
      var sorted = sliced.sort(function (a, b) {
        var aKey = a[keyName]();
        var bKey = b[keyName]();
        var aIndex = order.indexOf(aKey);
        var bIndex = order.indexOf(bKey);
        if (aIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + aKey + '.\nOrder specified: ' + $_6dqjd6yhjegz40rj.stringify(order, null, 2));
        if (bIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + bKey + '.\nOrder specified: ' + $_6dqjd6yhjegz40rj.stringify(order, null, 2));
        if (aIndex < bIndex)
          return -1;
        else if (bIndex < aIndex)
          return 1;
        else
          return 0;
      });
      return Result.value(sorted);
    } catch (err) {
      return Result.error([err]);
    }
  };
  var $_2j3gt5137jegz41f5 = { sortKeys: sortKeys };

  var nu$7 = function (handler, purpose) {
    return {
      handler: handler,
      purpose: $_b84g4ownjegz40jb.constant(purpose)
    };
  };
  var curryArgs = function (descHandler, extraArgs) {
    return {
      handler: $_b84g4ownjegz40jb.curry.apply(undefined, [descHandler.handler].concat(extraArgs)),
      purpose: descHandler.purpose
    };
  };
  var getHandler = function (descHandler) {
    return descHandler.handler;
  };
  var $_2p3fyv138jegz41f9 = {
    nu: nu$7,
    curryArgs: curryArgs,
    getHandler: getHandler
  };

  var behaviourTuple = function (name, handler) {
    return {
      name: $_b84g4ownjegz40jb.constant(name),
      handler: $_b84g4ownjegz40jb.constant(handler)
    };
  };
  var nameToHandlers = function (behaviours, info) {
    var r = {};
    $_353rcfwwjegz40kh.each(behaviours, function (behaviour) {
      r[behaviour.name()] = behaviour.handlers(info);
    });
    return r;
  };
  var groupByEvents = function (info, behaviours, base) {
    var behaviourEvents = $_6qf81kx2jegz40l1.deepMerge(base, nameToHandlers(behaviours, info));
    return $_4d1lnt135jegz41en.byInnerKey(behaviourEvents, behaviourTuple);
  };
  var combine$2 = function (info, eventOrder, behaviours, base) {
    var byEventName = groupByEvents(info, behaviours, base);
    return combineGroups(byEventName, eventOrder);
  };
  var assemble = function (rawHandler) {
    var handler = $_14r1ccyajegz40px.read(rawHandler);
    return function (component, simulatedEvent) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (handler.abort.apply(undefined, args)) {
        simulatedEvent.stop();
      } else if (handler.can.apply(undefined, args)) {
        handler.run.apply(undefined, args);
      }
    };
  };
  var missingOrderError = function (eventName, tuples) {
    return Result.error(['The event (' + eventName + ') has more than one behaviour that listens to it.\nWhen this occurs, you must ' + 'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' + 'can trigger it are: ' + $_6dqjd6yhjegz40rj.stringify($_353rcfwwjegz40kh.map(tuples, function (c) {
        return c.name();
      }), null, 2)]);
  };
  var fuse$1 = function (tuples, eventOrder, eventName) {
    var order = eventOrder[eventName];
    if (!order)
      return missingOrderError(eventName, tuples);
    else
      return $_2j3gt5137jegz41f5.sortKeys('Event: ' + eventName, 'name', tuples, order).map(function (sortedTuples) {
        var handlers = $_353rcfwwjegz40kh.map(sortedTuples, function (tuple) {
          return tuple.handler();
        });
        return $_14r1ccyajegz40px.fuse(handlers);
      });
  };
  var combineGroups = function (byEventName, eventOrder) {
    var r = $_4vnyr3x4jegz40l5.mapToArray(byEventName, function (tuples, eventName) {
      var combined = tuples.length === 1 ? Result.value(tuples[0].handler()) : fuse$1(tuples, eventOrder, eventName);
      return combined.map(function (handler) {
        var assembled = assemble(handler);
        var purpose = tuples.length > 1 ? $_353rcfwwjegz40kh.filter(eventOrder, function (o) {
          return $_353rcfwwjegz40kh.contains(tuples, function (t) {
            return t.name() === o;
          });
        }).join(' > ') : tuples[0].name();
        return $_75j08mxwjegz40o2.wrap(eventName, $_2p3fyv138jegz41f9.nu(assembled, purpose));
      });
    });
    return $_75j08mxwjegz40o2.consolidate(r, {});
  };
  var $_497my4136jegz41er = { combine: combine$2 };

  var toInfo = function (spec) {
    return $_fokpo2yijegz40rm.asStruct('custom.definition', $_fokpo2yijegz40rm.objOfOnly([
      $_cjikoqybjegz40q7.field('dom', 'dom', $_an0j3iycjegz40qj.strict(), $_fokpo2yijegz40rm.objOfOnly([
        $_cjikoqybjegz40q7.strict('tag'),
        $_cjikoqybjegz40q7.defaulted('styles', {}),
        $_cjikoqybjegz40q7.defaulted('classes', []),
        $_cjikoqybjegz40q7.defaulted('attributes', {}),
        $_cjikoqybjegz40q7.option('value'),
        $_cjikoqybjegz40q7.option('innerHtml')
      ])),
      $_cjikoqybjegz40q7.strict('components'),
      $_cjikoqybjegz40q7.strict('uid'),
      $_cjikoqybjegz40q7.defaulted('events', {}),
      $_cjikoqybjegz40q7.defaulted('apis', $_b84g4ownjegz40jb.constant({})),
      $_cjikoqybjegz40q7.field('eventOrder', 'eventOrder', $_an0j3iycjegz40qj.mergeWith({
        'alloy.execute': [
          'disabling',
          'alloy.base.behaviour',
          'toggling'
        ],
        'alloy.focus': [
          'alloy.base.behaviour',
          'focusing',
          'keying'
        ],
        'alloy.system.init': [
          'alloy.base.behaviour',
          'disabling',
          'toggling',
          'representing'
        ],
        'input': [
          'alloy.base.behaviour',
          'representing',
          'streaming',
          'invalidating'
        ],
        'alloy.system.detached': [
          'alloy.base.behaviour',
          'representing'
        ]
      }), $_fokpo2yijegz40rm.anyValue()),
      $_cjikoqybjegz40q7.option('domModification'),
      $_b1fv0nzajegz40ue.snapshot('originalSpec'),
      $_cjikoqybjegz40q7.defaulted('debug.sketcher', 'unknown')
    ]), spec);
  };
  var getUid = function (info) {
    return $_75j08mxwjegz40o2.wrap($_1oov7q112jegz413t.idAttr(), info.uid());
  };
  var toDefinition = function (info) {
    var base = {
      tag: info.dom().tag(),
      classes: info.dom().classes(),
      attributes: $_6qf81kx2jegz40l1.deepMerge(getUid(info), info.dom().attributes()),
      styles: info.dom().styles(),
      domChildren: $_353rcfwwjegz40kh.map(info.components(), function (comp) {
        return comp.element();
      })
    };
    return $_b17pfxymjegz40s5.nu($_6qf81kx2jegz40l1.deepMerge(base, info.dom().innerHtml().map(function (h) {
      return $_75j08mxwjegz40o2.wrap('innerHtml', h);
    }).getOr({}), info.dom().value().map(function (h) {
      return $_75j08mxwjegz40o2.wrap('value', h);
    }).getOr({})));
  };
  var toModification = function (info) {
    return info.domModification().fold(function () {
      return $_b3xpx9yljegz40ry.nu({});
    }, $_b3xpx9yljegz40ry.nu);
  };
  var toApis = function (info) {
    return info.apis();
  };
  var toEvents = function (info) {
    return info.events();
  };
  var $_efwwhl139jegz41fc = {
    toInfo: toInfo,
    toDefinition: toDefinition,
    toModification: toModification,
    toApis: toApis,
    toEvents: toEvents
  };

  var add$3 = function (element, classes) {
    $_353rcfwwjegz40kh.each(classes, function (x) {
      $_aoqcjmyrjegz40sq.add(element, x);
    });
  };
  var remove$6 = function (element, classes) {
    $_353rcfwwjegz40kh.each(classes, function (x) {
      $_aoqcjmyrjegz40sq.remove(element, x);
    });
  };
  var toggle$3 = function (element, classes) {
    $_353rcfwwjegz40kh.each(classes, function (x) {
      $_aoqcjmyrjegz40sq.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_353rcfwwjegz40kh.forall(classes, function (clazz) {
      return $_aoqcjmyrjegz40sq.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_353rcfwwjegz40kh.exists(classes, function (clazz) {
      return $_aoqcjmyrjegz40sq.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$10 = function (element) {
    return $_554elnytjegz40st.supports(element) ? getNative(element) : $_554elnytjegz40st.get(element);
  };
  var $_11n0sf13bjegz41fx = {
    add: add$3,
    remove: remove$6,
    toggle: toggle$3,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$10
  };

  var getChildren = function (definition) {
    if (definition.domChildren().isSome() && definition.defChildren().isSome()) {
      throw new Error('Cannot specify children and child specs! Must be one or the other.\nDef: ' + $_b17pfxymjegz40s5.defToStr(definition));
    } else {
      return definition.domChildren().fold(function () {
        var defChildren = definition.defChildren().getOr([]);
        return $_353rcfwwjegz40kh.map(defChildren, renderDef);
      }, function (domChildren) {
        return domChildren;
      });
    }
  };
  var renderToDom = function (definition) {
    var subject = $_30i27zxjjegz40mu.fromTag(definition.tag());
    $_bcxlrzxvjegz40nw.setAll(subject, definition.attributes().getOr({}));
    $_11n0sf13bjegz41fx.add(subject, definition.classes().getOr([]));
    $_flvpsp107jegz40ye.setAll(subject, definition.styles().getOr({}));
    $_2y0xlvxsjegz40np.set(subject, definition.innerHtml().getOr(''));
    var children = getChildren(definition);
    $_89tv8vxmjegz40n1.append(subject, children);
    definition.value().each(function (value) {
      $_1dxsib12ijegz41ag.set(subject, value);
    });
    return subject;
  };
  var renderDef = function (spec) {
    var definition = $_b17pfxymjegz40s5.nu(spec);
    return renderToDom(definition);
  };
  var $_2dg0nb13ajegz41fm = { renderToDom: renderToDom };

  var build = function (spec) {
    var getMe = function () {
      return me;
    };
    var systemApi = Cell(NoContextApi(getMe));
    var info = $_fokpo2yijegz40rm.getOrDie($_efwwhl139jegz41fc.toInfo($_6qf81kx2jegz40l1.deepMerge(spec, { behaviours: undefined })));
    var bBlob = $_bw1v7s12zjegz41dq.generate(spec);
    var bList = $_fkvco4130jegz41dv.getBehaviours(bBlob);
    var bData = $_fkvco4130jegz41dv.getData(bBlob);
    var definition = $_efwwhl139jegz41fc.toDefinition(info);
    var baseModification = { 'alloy.base.modification': $_efwwhl139jegz41fc.toModification(info) };
    var modification = $_1g1c7w134jegz41ee.combine(bData, baseModification, bList, definition).getOrDie();
    var modDefinition = $_b3xpx9yljegz40ry.merge(definition, modification);
    var item = $_2dg0nb13ajegz41fm.renderToDom(modDefinition);
    var baseEvents = { 'alloy.base.behaviour': $_efwwhl139jegz41fc.toEvents(info) };
    var events = $_497my4136jegz41er.combine(bData, info.eventOrder(), bList, baseEvents).getOrDie();
    var subcomponents = Cell(info.components());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(getMe));
    };
    var syncComponents = function () {
      var children = $_6rauxox7jegz40ll.children(item);
      var subs = $_353rcfwwjegz40kh.bind(children, function (child) {
        return systemApi.get().getByDom(child).fold(function () {
          return [];
        }, function (c) {
          return [c];
        });
      });
      subcomponents.set(subs);
    };
    var config = function (behaviour) {
      if (behaviour === $_fv6fv410ujegz411y.apiConfig())
        return info.apis();
      var b = bData;
      var f = $_6zfdmjx3jegz40l3.isFunction(b[behaviour.name()]) ? b[behaviour.name()] : function () {
        throw new Error('Could not find ' + behaviour.name() + ' in ' + $_6dqjd6yhjegz40rj.stringify(spec, null, 2));
      };
      return f();
    };
    var hasConfigured = function (behaviour) {
      return $_6zfdmjx3jegz40l3.isFunction(bData[behaviour.name()]);
    };
    var readState = function (behaviourName) {
      return bData[behaviourName]().map(function (b) {
        return b.state.readState();
      }).getOr('not enabled');
    };
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: config,
      hasConfigured: hasConfigured,
      spec: $_b84g4ownjegz40jb.constant(spec),
      readState: readState,
      connect: connect,
      disconnect: disconnect,
      element: $_b84g4ownjegz40jb.constant(item),
      syncComponents: syncComponents,
      components: subcomponents.get,
      events: $_b84g4ownjegz40jb.constant(events)
    });
    return me;
  };
  var $_c9k43k12yjegz41df = { build: build };

  var isRecursive = function (component, originator, target) {
    return $_47k0n6xdjegz40mb.eq(originator, component.element()) && !$_47k0n6xdjegz40mb.eq(originator, target);
  };
  var $_k8eia13cjegz41g1 = {
    events: $_63ctkqy8jegz40pp.derive([$_63ctkqy8jegz40pp.can($_f4n44rwljegz40j4.focus(), function (component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console.warn($_f4n44rwljegz40j4.focus() + ' did not get interpreted by the desired target. ' + '\nOriginator: ' + $_clwaugxqjegz40nk.element(originator) + '\nTarget: ' + $_clwaugxqjegz40nk.element(target) + '\nCheck the ' + $_f4n44rwljegz40j4.focus() + ' event handlers');
          return false;
        } else {
          return true;
        }
      })])
  };

  var make$1 = function (spec) {
    return spec;
  };
  var $_389kwb13djegz41g4 = { make: make$1 };

  var buildSubcomponents = function (spec) {
    var components = $_75j08mxwjegz40o2.readOr('components', [])(spec);
    return $_353rcfwwjegz40kh.map(components, build$1);
  };
  var buildFromSpec = function (userSpec) {
    var spec = $_389kwb13djegz41g4.make(userSpec);
    var components = buildSubcomponents(spec);
    var completeSpec = $_6qf81kx2jegz40l1.deepMerge($_k8eia13cjegz41g1, spec, $_75j08mxwjegz40o2.wrap('components', components));
    return Result.value($_c9k43k12yjegz41df.build(completeSpec));
  };
  var text = function (textContent) {
    var element = $_30i27zxjjegz40mu.fromText(textContent);
    return external({ element: element });
  };
  var external = function (spec) {
    var extSpec = $_fokpo2yijegz40rm.asStructOrDie('external.component', $_fokpo2yijegz40rm.objOfOnly([
      $_cjikoqybjegz40q7.strict('element'),
      $_cjikoqybjegz40q7.option('uid')
    ]), spec);
    var systemApi = Cell(NoContextApi());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(function () {
        return me;
      }));
    };
    extSpec.uid().each(function (uid) {
      $_94kpee111jegz413l.writeOnly(extSpec.element(), uid);
    });
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: Option.none,
      hasConfigured: $_b84g4ownjegz40jb.constant(false),
      connect: connect,
      disconnect: disconnect,
      element: $_b84g4ownjegz40jb.constant(extSpec.element()),
      spec: $_b84g4ownjegz40jb.constant(spec),
      readState: $_b84g4ownjegz40jb.constant('No state'),
      syncComponents: $_b84g4ownjegz40jb.noop,
      components: $_b84g4ownjegz40jb.constant([]),
      events: $_b84g4ownjegz40jb.constant({})
    });
    return $_fv6fv410ujegz411y.premade(me);
  };
  var build$1 = function (rawUserSpec) {
    return $_fv6fv410ujegz411y.getPremade(rawUserSpec).fold(function () {
      var userSpecWithUid = $_6qf81kx2jegz40l1.deepMerge({ uid: $_94kpee111jegz413l.generate('') }, rawUserSpec);
      return buildFromSpec(userSpecWithUid).getOrDie();
    }, function (prebuilt) {
      return prebuilt;
    });
  };
  var $_d16c6e12xjegz41cw = {
    build: build$1,
    premade: $_fv6fv410ujegz411y.premade,
    external: external,
    text: text
  };

  var hoverEvent = 'alloy.item-hover';
  var focusEvent = 'alloy.item-focus';
  var onHover = function (item) {
    if ($_7nx9zfyxjegz40t1.search(item.element()).isNone() || Focusing.isFocused(item)) {
      if (!Focusing.isFocused(item))
        Focusing.focus(item);
      $_78tntkwkjegz40iy.emitWith(item, hoverEvent, { item: item });
    }
  };
  var onFocus = function (item) {
    $_78tntkwkjegz40iy.emitWith(item, focusEvent, { item: item });
  };
  var $_50s40k13hjegz41gk = {
    hover: $_b84g4ownjegz40jb.constant(hoverEvent),
    focus: $_b84g4ownjegz40jb.constant(focusEvent),
    onHover: onHover,
    onFocus: onFocus
  };

  var builder = function (info) {
    return {
      dom: $_6qf81kx2jegz40l1.deepMerge(info.dom(), { attributes: { role: info.toggling().isSome() ? 'menuitemcheckbox' : 'menuitem' } }),
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([
        info.toggling().fold(Toggling.revoke, function (tConfig) {
          return Toggling.config($_6qf81kx2jegz40l1.deepMerge({ aria: { mode: 'checked' } }, tConfig));
        }),
        Focusing.config({
          ignore: info.ignoreFocus(),
          onFocus: function (component) {
            $_50s40k13hjegz41gk.onFocus(component);
          }
        }),
        Keying.config({ mode: 'execution' }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        })
      ]), info.itemBehaviours()),
      events: $_63ctkqy8jegz40pp.derive([
        $_63ctkqy8jegz40pp.runWithTarget($_f4n44rwljegz40j4.tapOrClick(), $_78tntkwkjegz40iy.emitExecute),
        $_63ctkqy8jegz40pp.cutter($_equp8wmjegz40j7.mousedown()),
        $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.mouseover(), $_50s40k13hjegz41gk.onHover),
        $_63ctkqy8jegz40pp.run($_f4n44rwljegz40j4.focusItem(), Focusing.focus)
      ]),
      components: info.components(),
      domModification: info.domModification()
    };
  };
  var schema$10 = [
    $_cjikoqybjegz40q7.strict('data'),
    $_cjikoqybjegz40q7.strict('components'),
    $_cjikoqybjegz40q7.strict('dom'),
    $_cjikoqybjegz40q7.option('toggling'),
    $_cjikoqybjegz40q7.defaulted('itemBehaviours', {}),
    $_cjikoqybjegz40q7.defaulted('ignoreFocus', false),
    $_cjikoqybjegz40q7.defaulted('domModification', {}),
    $_b1fv0nzajegz40ue.output('builder', builder)
  ];

  var builder$1 = function (detail) {
    return {
      dom: detail.dom(),
      components: detail.components(),
      events: $_63ctkqy8jegz40pp.derive([$_63ctkqy8jegz40pp.stopper($_f4n44rwljegz40j4.focusItem())])
    };
  };
  var schema$11 = [
    $_cjikoqybjegz40q7.strict('dom'),
    $_cjikoqybjegz40q7.strict('components'),
    $_b1fv0nzajegz40ue.output('builder', builder$1)
  ];

  var owner$2 = 'item-widget';
  var partTypes = [$_ev0b2610zjegz412z.required({
      name: 'widget',
      overrides: function (detail) {
        return {
          behaviours: $_2s5cqny6jegz40p5.derive([me.config({
              store: {
                mode: 'manual',
                getValue: function (component) {
                  return detail.data();
                },
                setValue: function () {
                }
              }
            })])
        };
      }
    })];
  var $_4qpxe413kjegz41h2 = {
    owner: $_b84g4ownjegz40jb.constant(owner$2),
    parts: $_b84g4ownjegz40jb.constant(partTypes)
  };

  var builder$2 = function (info) {
    var subs = $_63fdjp10xjegz412f.substitutes($_4qpxe413kjegz41h2.owner(), info, $_4qpxe413kjegz41h2.parts());
    var components = $_63fdjp10xjegz412f.components($_4qpxe413kjegz41h2.owner(), info, subs.internals());
    var focusWidget = function (component) {
      return $_63fdjp10xjegz412f.getPart(component, info, 'widget').map(function (widget) {
        Keying.focusIn(widget);
        return widget;
      });
    };
    var onHorizontalArrow = function (component, simulatedEvent) {
      return $_cmryh410cjegz40z5.inside(simulatedEvent.event().target()) ? Option.none() : function () {
        if (info.autofocus()) {
          simulatedEvent.setSource(component.element());
          return Option.none();
        } else {
          return Option.none();
        }
      }();
    };
    return $_6qf81kx2jegz40l1.deepMerge({
      dom: info.dom(),
      components: components,
      domModification: info.domModification(),
      events: $_63ctkqy8jegz40pp.derive([
        $_63ctkqy8jegz40pp.runOnExecute(function (component, simulatedEvent) {
          focusWidget(component).each(function (widget) {
            simulatedEvent.stop();
          });
        }),
        $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.mouseover(), $_50s40k13hjegz41gk.onHover),
        $_63ctkqy8jegz40pp.run($_f4n44rwljegz40j4.focusItem(), function (component, simulatedEvent) {
          if (info.autofocus())
            focusWidget(component);
          else
            Focusing.focus(component);
        })
      ]),
      behaviours: $_2s5cqny6jegz40p5.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        }),
        Focusing.config({
          onFocus: function (component) {
            $_50s40k13hjegz41gk.onFocus(component);
          }
        }),
        Keying.config({
          mode: 'special',
          onLeft: onHorizontalArrow,
          onRight: onHorizontalArrow,
          onEscape: function (component, simulatedEvent) {
            if (!Focusing.isFocused(component) && !info.autofocus()) {
              Focusing.focus(component);
              return Option.some(true);
            } else if (info.autofocus()) {
              simulatedEvent.setSource(component.element());
              return Option.none();
            } else {
              return Option.none();
            }
          }
        })
      ])
    });
  };
  var schema$12 = [
    $_cjikoqybjegz40q7.strict('uid'),
    $_cjikoqybjegz40q7.strict('data'),
    $_cjikoqybjegz40q7.strict('components'),
    $_cjikoqybjegz40q7.strict('dom'),
    $_cjikoqybjegz40q7.defaulted('autofocus', false),
    $_cjikoqybjegz40q7.defaulted('domModification', {}),
    $_63fdjp10xjegz412f.defaultUidsSchema($_4qpxe413kjegz41h2.parts()),
    $_b1fv0nzajegz40ue.output('builder', builder$2)
  ];

  var itemSchema$1 = $_fokpo2yijegz40rm.choose('type', {
    widget: schema$12,
    item: schema$10,
    separator: schema$11
  });
  var configureGrid = function (detail, movementInfo) {
    return {
      mode: 'flatgrid',
      selector: '.' + detail.markers().item(),
      initSize: {
        numColumns: movementInfo.initSize().numColumns(),
        numRows: movementInfo.initSize().numRows()
      },
      focusManager: detail.focusManager()
    };
  };
  var configureMenu = function (detail, movementInfo) {
    return {
      mode: 'menu',
      selector: '.' + detail.markers().item(),
      moveOnTab: movementInfo.moveOnTab(),
      focusManager: detail.focusManager()
    };
  };
  var parts = [$_ev0b2610zjegz412z.group({
      factory: {
        sketch: function (spec) {
          var itemInfo = $_fokpo2yijegz40rm.asStructOrDie('menu.spec item', itemSchema$1, spec);
          return itemInfo.builder()(itemInfo);
        }
      },
      name: 'items',
      unit: 'item',
      defaults: function (detail, u) {
        var fallbackUid = $_94kpee111jegz413l.generate('');
        return $_6qf81kx2jegz40l1.deepMerge({ uid: fallbackUid }, u);
      },
      overrides: function (detail, u) {
        return {
          type: u.type,
          ignoreFocus: detail.fakeFocus(),
          domModification: { classes: [detail.markers().item()] }
        };
      }
    })];
  var schema$13 = [
    $_cjikoqybjegz40q7.strict('value'),
    $_cjikoqybjegz40q7.strict('items'),
    $_cjikoqybjegz40q7.strict('dom'),
    $_cjikoqybjegz40q7.strict('components'),
    $_cjikoqybjegz40q7.defaulted('eventOrder', {}),
    $_4ipd2i10sjegz411l.field('menuBehaviours', [
      Highlighting,
      me,
      Composing,
      Keying
    ]),
    $_cjikoqybjegz40q7.defaultedOf('movement', {
      mode: 'menu',
      moveOnTab: true
    }, $_fokpo2yijegz40rm.choose('mode', {
      grid: [
        $_b1fv0nzajegz40ue.initSize(),
        $_b1fv0nzajegz40ue.output('config', configureGrid)
      ],
      menu: [
        $_cjikoqybjegz40q7.defaulted('moveOnTab', true),
        $_b1fv0nzajegz40ue.output('config', configureMenu)
      ]
    })),
    $_b1fv0nzajegz40ue.itemMarkers(),
    $_cjikoqybjegz40q7.defaulted('fakeFocus', false),
    $_cjikoqybjegz40q7.defaulted('focusManager', $_g22iuzvjegz40xa.dom()),
    $_b1fv0nzajegz40ue.onHandler('onHighlight')
  ];
  var $_6p0ryf13fjegz41g7 = {
    name: $_b84g4ownjegz40jb.constant('Menu'),
    schema: $_b84g4ownjegz40jb.constant(schema$13),
    parts: $_b84g4ownjegz40jb.constant(parts)
  };

  var focusEvent$1 = 'alloy.menu-focus';
  var $_459eoy13mjegz41hb = { focus: $_b84g4ownjegz40jb.constant(focusEvent$1) };

  var make$2 = function (detail, components, spec, externals) {
    return $_6qf81kx2jegz40l1.deepMerge({
      dom: $_6qf81kx2jegz40l1.deepMerge(detail.dom(), { attributes: { role: 'menu' } }),
      uid: detail.uid(),
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([
        Highlighting.config({
          highlightClass: detail.markers().selectedItem(),
          itemClass: detail.markers().item(),
          onHighlight: detail.onHighlight()
        }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.value()
          }
        }),
        Composing.config({ find: $_b84g4ownjegz40jb.identity }),
        Keying.config(detail.movement().config()(detail, detail.movement()))
      ]), $_4ipd2i10sjegz411l.get(detail.menuBehaviours())),
      events: $_63ctkqy8jegz40pp.derive([
        $_63ctkqy8jegz40pp.run($_50s40k13hjegz41gk.focus(), function (menu, simulatedEvent) {
          var event = simulatedEvent.event();
          menu.getSystem().getByDom(event.target()).each(function (item) {
            Highlighting.highlight(menu, item);
            simulatedEvent.stop();
            $_78tntkwkjegz40iy.emitWith(menu, $_459eoy13mjegz41hb.focus(), {
              menu: menu,
              item: item
            });
          });
        }),
        $_63ctkqy8jegz40pp.run($_50s40k13hjegz41gk.hover(), function (menu, simulatedEvent) {
          var item = simulatedEvent.event().item();
          Highlighting.highlight(menu, item);
        })
      ]),
      components: components,
      eventOrder: detail.eventOrder()
    });
  };
  var $_3y6nuu13ljegz41h6 = { make: make$2 };

  var Menu = $_5bitwv10tjegz411q.composite({
    name: 'Menu',
    configFields: $_6p0ryf13fjegz41g7.schema(),
    partFields: $_6p0ryf13fjegz41g7.parts(),
    factory: $_3y6nuu13ljegz41h6.make
  });

  var preserve$2 = function (f, container) {
    var ownerDoc = $_6rauxox7jegz40ll.owner(container);
    var refocus = $_7nx9zfyxjegz40t1.active(ownerDoc).bind(function (focused) {
      var hasFocus = function (elem) {
        return $_47k0n6xdjegz40mb.eq(focused, elem);
      };
      return hasFocus(container) ? Option.some(container) : $_g30u4yyzjegz40t7.descendant(container, hasFocus);
    });
    var result = f(container);
    refocus.each(function (oldFocus) {
      $_7nx9zfyxjegz40t1.active(ownerDoc).filter(function (newFocus) {
        return $_47k0n6xdjegz40mb.eq(newFocus, oldFocus);
      }).orThunk(function () {
        $_7nx9zfyxjegz40t1.focus(oldFocus);
      });
    });
    return result;
  };
  var $_at60vb13qjegz41hp = { preserve: preserve$2 };

  var set$7 = function (component, replaceConfig, replaceState, data) {
    $_aoct93x5jegz40l9.detachChildren(component);
    $_at60vb13qjegz41hp.preserve(function () {
      var children = $_353rcfwwjegz40kh.map(data, component.getSystem().build);
      $_353rcfwwjegz40kh.each(children, function (l) {
        $_aoct93x5jegz40l9.attach(component, l);
      });
    }, component.element());
  };
  var insert = function (component, replaceConfig, insertion, childSpec) {
    var child = component.getSystem().build(childSpec);
    $_aoct93x5jegz40l9.attachWith(component, child, insertion);
  };
  var append$2 = function (component, replaceConfig, replaceState, appendee) {
    insert(component, replaceConfig, $_4mdlzcx6jegz40lj.append, appendee);
  };
  var prepend$2 = function (component, replaceConfig, replaceState, prependee) {
    insert(component, replaceConfig, $_4mdlzcx6jegz40lj.prepend, prependee);
  };
  var remove$7 = function (component, replaceConfig, replaceState, removee) {
    var children = contents(component, replaceConfig);
    var foundChild = $_353rcfwwjegz40kh.find(children, function (child) {
      return $_47k0n6xdjegz40mb.eq(removee.element(), child.element());
    });
    foundChild.each($_aoct93x5jegz40l9.detach);
  };
  var contents = function (component, replaceConfig) {
    return component.components();
  };
  var $_39upnh13pjegz41hk = {
    append: append$2,
    prepend: prepend$2,
    remove: remove$7,
    set: set$7,
    contents: contents
  };

  var Replacing = $_2s5cqny6jegz40p5.create({
    fields: [],
    name: 'replacing',
    apis: $_39upnh13pjegz41hk
  });

  var transpose = function (obj) {
    return $_4vnyr3x4jegz40l5.tupleMap(obj, function (v, k) {
      return {
        k: v,
        v: k
      };
    });
  };
  var trace = function (items, byItem, byMenu, finish) {
    return $_75j08mxwjegz40o2.readOptFrom(byMenu, finish).bind(function (triggerItem) {
      return $_75j08mxwjegz40o2.readOptFrom(items, triggerItem).bind(function (triggerMenu) {
        var rest = trace(items, byItem, byMenu, triggerMenu);
        return Option.some([triggerMenu].concat(rest));
      });
    }).getOr([]);
  };
  var generate$5 = function (menus, expansions) {
    var items = {};
    $_4vnyr3x4jegz40l5.each(menus, function (menuItems, menu) {
      $_353rcfwwjegz40kh.each(menuItems, function (item) {
        items[item] = menu;
      });
    });
    var byItem = expansions;
    var byMenu = transpose(expansions);
    var menuPaths = $_4vnyr3x4jegz40l5.map(byMenu, function (triggerItem, submenu) {
      return [submenu].concat(trace(items, byItem, byMenu, submenu));
    });
    return $_4vnyr3x4jegz40l5.map(items, function (path) {
      return $_75j08mxwjegz40o2.readOptFrom(menuPaths, path).getOr([path]);
    });
  };
  var $_ehleoa13tjegz41is = { generate: generate$5 };

  function LayeredState () {
    var expansions = Cell({});
    var menus = Cell({});
    var paths = Cell({});
    var primary = Cell(Option.none());
    var toItemValues = Cell($_b84g4ownjegz40jb.constant([]));
    var clear = function () {
      expansions.set({});
      menus.set({});
      paths.set({});
      primary.set(Option.none());
    };
    var isClear = function () {
      return primary.get().isNone();
    };
    var setContents = function (sPrimary, sMenus, sExpansions, sToItemValues) {
      primary.set(Option.some(sPrimary));
      expansions.set(sExpansions);
      menus.set(sMenus);
      toItemValues.set(sToItemValues);
      var menuValues = sToItemValues(sMenus);
      var sPaths = $_ehleoa13tjegz41is.generate(menuValues, sExpansions);
      paths.set(sPaths);
    };
    var expand = function (itemValue) {
      return $_75j08mxwjegz40o2.readOptFrom(expansions.get(), itemValue).map(function (menu) {
        var current = $_75j08mxwjegz40o2.readOptFrom(paths.get(), itemValue).getOr([]);
        return [menu].concat(current);
      });
    };
    var collapse = function (itemValue) {
      return $_75j08mxwjegz40o2.readOptFrom(paths.get(), itemValue).bind(function (path) {
        return path.length > 1 ? Option.some(path.slice(1)) : Option.none();
      });
    };
    var refresh = function (itemValue) {
      return $_75j08mxwjegz40o2.readOptFrom(paths.get(), itemValue);
    };
    var lookupMenu = function (menuValue) {
      return $_75j08mxwjegz40o2.readOptFrom(menus.get(), menuValue);
    };
    var otherMenus = function (path) {
      var menuValues = toItemValues.get()(menus.get());
      return $_353rcfwwjegz40kh.difference($_4vnyr3x4jegz40l5.keys(menuValues), path);
    };
    var getPrimary = function () {
      return primary.get().bind(lookupMenu);
    };
    var getMenus = function () {
      return menus.get();
    };
    return {
      setContents: setContents,
      expand: expand,
      refresh: refresh,
      collapse: collapse,
      lookupMenu: lookupMenu,
      otherMenus: otherMenus,
      getPrimary: getPrimary,
      getMenus: getMenus,
      clear: clear,
      isClear: isClear
    };
  }

  var make$3 = function (detail, rawUiSpec) {
    var buildMenus = function (container, menus) {
      return $_4vnyr3x4jegz40l5.map(menus, function (spec, name) {
        var data = Menu.sketch($_6qf81kx2jegz40l1.deepMerge(spec, {
          value: name,
          items: spec.items,
          markers: $_75j08mxwjegz40o2.narrow(rawUiSpec.markers, [
            'item',
            'selectedItem'
          ]),
          fakeFocus: detail.fakeFocus(),
          onHighlight: detail.onHighlight(),
          focusManager: detail.fakeFocus() ? $_g22iuzvjegz40xa.highlights() : $_g22iuzvjegz40xa.dom()
        }));
        return container.getSystem().build(data);
      });
    };
    var state = LayeredState();
    var setup = function (container) {
      var componentMap = buildMenus(container, detail.data().menus());
      state.setContents(detail.data().primary(), componentMap, detail.data().expansions(), function (sMenus) {
        return toMenuValues(container, sMenus);
      });
      return state.getPrimary();
    };
    var getItemValue = function (item) {
      return me.getValue(item).value;
    };
    var toMenuValues = function (container, sMenus) {
      return $_4vnyr3x4jegz40l5.map(detail.data().menus(), function (data, menuName) {
        return $_353rcfwwjegz40kh.bind(data.items, function (item) {
          return item.type === 'separator' ? [] : [item.data.value];
        });
      });
    };
    var setActiveMenu = function (container, menu) {
      Highlighting.highlight(container, menu);
      Highlighting.getHighlighted(menu).orThunk(function () {
        return Highlighting.getFirst(menu);
      }).each(function (item) {
        $_78tntkwkjegz40iy.dispatch(container, item.element(), $_f4n44rwljegz40j4.focusItem());
      });
    };
    var getMenus = function (state, menuValues) {
      return $_88eph0y4jegz40p1.cat($_353rcfwwjegz40kh.map(menuValues, state.lookupMenu));
    };
    var updateMenuPath = function (container, state, path) {
      return Option.from(path[0]).bind(state.lookupMenu).map(function (activeMenu) {
        var rest = getMenus(state, path.slice(1));
        $_353rcfwwjegz40kh.each(rest, function (r) {
          $_aoqcjmyrjegz40sq.add(r.element(), detail.markers().backgroundMenu());
        });
        if (!$_br73zsxnjegz40n3.inBody(activeMenu.element())) {
          Replacing.append(container, $_d16c6e12xjegz41cw.premade(activeMenu));
        }
        $_11n0sf13bjegz41fx.remove(activeMenu.element(), [detail.markers().backgroundMenu()]);
        setActiveMenu(container, activeMenu);
        var others = getMenus(state, state.otherMenus(path));
        $_353rcfwwjegz40kh.each(others, function (o) {
          $_11n0sf13bjegz41fx.remove(o.element(), [detail.markers().backgroundMenu()]);
          if (!detail.stayInDom())
            Replacing.remove(container, o);
        });
        return activeMenu;
      });
    };
    var expandRight = function (container, item) {
      var value = getItemValue(item);
      return state.expand(value).bind(function (path) {
        Option.from(path[0]).bind(state.lookupMenu).each(function (activeMenu) {
          if (!$_br73zsxnjegz40n3.inBody(activeMenu.element())) {
            Replacing.append(container, $_d16c6e12xjegz41cw.premade(activeMenu));
          }
          detail.onOpenSubmenu()(container, item, activeMenu);
          Highlighting.highlightFirst(activeMenu);
        });
        return updateMenuPath(container, state, path);
      });
    };
    var collapseLeft = function (container, item) {
      var value = getItemValue(item);
      return state.collapse(value).bind(function (path) {
        return updateMenuPath(container, state, path).map(function (activeMenu) {
          detail.onCollapseMenu()(container, item, activeMenu);
          return activeMenu;
        });
      });
    };
    var updateView = function (container, item) {
      var value = getItemValue(item);
      return state.refresh(value).bind(function (path) {
        return updateMenuPath(container, state, path);
      });
    };
    var onRight = function (container, item) {
      return $_cmryh410cjegz40z5.inside(item.element()) ? Option.none() : expandRight(container, item);
    };
    var onLeft = function (container, item) {
      return $_cmryh410cjegz40z5.inside(item.element()) ? Option.none() : collapseLeft(container, item);
    };
    var onEscape = function (container, item) {
      return collapseLeft(container, item).orThunk(function () {
        return detail.onEscape()(container, item);
      });
    };
    var keyOnItem = function (f) {
      return function (container, simulatedEvent) {
        return $_eelz2c101jegz40xw.closest(simulatedEvent.getSource(), '.' + detail.markers().item()).bind(function (target) {
          return container.getSystem().getByDom(target).bind(function (item) {
            return f(container, item);
          });
        });
      };
    };
    var events = $_63ctkqy8jegz40pp.derive([
      $_63ctkqy8jegz40pp.run($_459eoy13mjegz41hb.focus(), function (sandbox, simulatedEvent) {
        var menu = simulatedEvent.event().menu();
        Highlighting.highlight(sandbox, menu);
      }),
      $_63ctkqy8jegz40pp.runOnExecute(function (sandbox, simulatedEvent) {
        var target = simulatedEvent.event().target();
        return sandbox.getSystem().getByDom(target).bind(function (item) {
          var itemValue = getItemValue(item);
          if (itemValue.indexOf('collapse-item') === 0) {
            return collapseLeft(sandbox, item);
          }
          return expandRight(sandbox, item).orThunk(function () {
            return detail.onExecute()(sandbox, item);
          });
        });
      }),
      $_63ctkqy8jegz40pp.runOnAttached(function (container, simulatedEvent) {
        setup(container).each(function (primary) {
          Replacing.append(container, $_d16c6e12xjegz41cw.premade(primary));
          if (detail.openImmediately()) {
            setActiveMenu(container, primary);
            detail.onOpenMenu()(container, primary);
          }
        });
      })
    ].concat(detail.navigateOnHover() ? [$_63ctkqy8jegz40pp.run($_50s40k13hjegz41gk.hover(), function (sandbox, simulatedEvent) {
        var item = simulatedEvent.event().item();
        updateView(sandbox, item);
        expandRight(sandbox, item);
        detail.onHover()(sandbox, item);
      })] : []));
    var collapseMenuApi = function (container) {
      Highlighting.getHighlighted(container).each(function (currentMenu) {
        Highlighting.getHighlighted(currentMenu).each(function (currentItem) {
          collapseLeft(container, currentItem);
        });
      });
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([
        Keying.config({
          mode: 'special',
          onRight: keyOnItem(onRight),
          onLeft: keyOnItem(onLeft),
          onEscape: keyOnItem(onEscape),
          focusIn: function (container, keyInfo) {
            state.getPrimary().each(function (primary) {
              $_78tntkwkjegz40iy.dispatch(container, primary.element(), $_f4n44rwljegz40j4.focusItem());
            });
          }
        }),
        Highlighting.config({
          highlightClass: detail.markers().selectedMenu(),
          itemClass: detail.markers().menu()
        }),
        Composing.config({
          find: function (container) {
            return Highlighting.getHighlighted(container);
          }
        }),
        Replacing.config({})
      ]), $_4ipd2i10sjegz411l.get(detail.tmenuBehaviours())),
      eventOrder: detail.eventOrder(),
      apis: { collapseMenu: collapseMenuApi },
      events: events
    };
  };
  var $_5wll7a13rjegz41hx = {
    make: make$3,
    collapseItem: $_b84g4ownjegz40jb.constant('collapse-item')
  };

  var tieredData = function (primary, menus, expansions) {
    return {
      primary: primary,
      menus: menus,
      expansions: expansions
    };
  };
  var singleData = function (name, menu) {
    return {
      primary: name,
      menus: $_75j08mxwjegz40o2.wrap(name, menu),
      expansions: {}
    };
  };
  var collapseItem = function (text) {
    return {
      value: $_g605fa10vjegz4123.generate($_5wll7a13rjegz41hx.collapseItem()),
      text: text
    };
  };
  var TieredMenu = $_5bitwv10tjegz411q.single({
    name: 'TieredMenu',
    configFields: [
      $_b1fv0nzajegz40ue.onStrictKeyboardHandler('onExecute'),
      $_b1fv0nzajegz40ue.onStrictKeyboardHandler('onEscape'),
      $_b1fv0nzajegz40ue.onStrictHandler('onOpenMenu'),
      $_b1fv0nzajegz40ue.onStrictHandler('onOpenSubmenu'),
      $_b1fv0nzajegz40ue.onHandler('onCollapseMenu'),
      $_cjikoqybjegz40q7.defaulted('openImmediately', true),
      $_cjikoqybjegz40q7.strictObjOf('data', [
        $_cjikoqybjegz40q7.strict('primary'),
        $_cjikoqybjegz40q7.strict('menus'),
        $_cjikoqybjegz40q7.strict('expansions')
      ]),
      $_cjikoqybjegz40q7.defaulted('fakeFocus', false),
      $_b1fv0nzajegz40ue.onHandler('onHighlight'),
      $_b1fv0nzajegz40ue.onHandler('onHover'),
      $_b1fv0nzajegz40ue.tieredMenuMarkers(),
      $_cjikoqybjegz40q7.strict('dom'),
      $_cjikoqybjegz40q7.defaulted('navigateOnHover', true),
      $_cjikoqybjegz40q7.defaulted('stayInDom', false),
      $_4ipd2i10sjegz411l.field('tmenuBehaviours', [
        Keying,
        Highlighting,
        Composing,
        Replacing
      ]),
      $_cjikoqybjegz40q7.defaulted('eventOrder', {})
    ],
    apis: {
      collapseMenu: function (apis, tmenu) {
        apis.collapseMenu(tmenu);
      }
    },
    factory: $_5wll7a13rjegz41hx.make,
    extraApis: {
      tieredData: tieredData,
      singleData: singleData,
      collapseItem: collapseItem
    }
  });

  var findRoute = function (component, transConfig, transState, route) {
    return $_75j08mxwjegz40o2.readOptFrom(transConfig.routes(), route.start()).map($_b84g4ownjegz40jb.apply).bind(function (sConfig) {
      return $_75j08mxwjegz40o2.readOptFrom(sConfig, route.destination()).map($_b84g4ownjegz40jb.apply);
    });
  };
  var getTransition = function (comp, transConfig, transState) {
    var route = getCurrentRoute(comp, transConfig, transState);
    return route.bind(function (r) {
      return getTransitionOf(comp, transConfig, transState, r);
    });
  };
  var getTransitionOf = function (comp, transConfig, transState, route) {
    return findRoute(comp, transConfig, transState, route).bind(function (r) {
      return r.transition().map(function (t) {
        return {
          transition: $_b84g4ownjegz40jb.constant(t),
          route: $_b84g4ownjegz40jb.constant(r)
        };
      });
    });
  };
  var disableTransition = function (comp, transConfig, transState) {
    getTransition(comp, transConfig, transState).each(function (routeTransition) {
      var t = routeTransition.transition();
      $_aoqcjmyrjegz40sq.remove(comp.element(), t.transitionClass());
      $_bcxlrzxvjegz40nw.remove(comp.element(), transConfig.destinationAttr());
    });
  };
  var getNewRoute = function (comp, transConfig, transState, destination) {
    return {
      start: $_b84g4ownjegz40jb.constant($_bcxlrzxvjegz40nw.get(comp.element(), transConfig.stateAttr())),
      destination: $_b84g4ownjegz40jb.constant(destination)
    };
  };
  var getCurrentRoute = function (comp, transConfig, transState) {
    var el = comp.element();
    return $_bcxlrzxvjegz40nw.has(el, transConfig.destinationAttr()) ? Option.some({
      start: $_b84g4ownjegz40jb.constant($_bcxlrzxvjegz40nw.get(comp.element(), transConfig.stateAttr())),
      destination: $_b84g4ownjegz40jb.constant($_bcxlrzxvjegz40nw.get(comp.element(), transConfig.destinationAttr()))
    }) : Option.none();
  };
  var jumpTo = function (comp, transConfig, transState, destination) {
    disableTransition(comp, transConfig, transState);
    if ($_bcxlrzxvjegz40nw.has(comp.element(), transConfig.stateAttr()) && $_bcxlrzxvjegz40nw.get(comp.element(), transConfig.stateAttr()) !== destination)
      transConfig.onFinish()(comp, destination);
    $_bcxlrzxvjegz40nw.set(comp.element(), transConfig.stateAttr(), destination);
  };
  var fasttrack = function (comp, transConfig, transState, destination) {
    if ($_bcxlrzxvjegz40nw.has(comp.element(), transConfig.destinationAttr())) {
      $_bcxlrzxvjegz40nw.set(comp.element(), transConfig.stateAttr(), $_bcxlrzxvjegz40nw.get(comp.element(), transConfig.destinationAttr()));
      $_bcxlrzxvjegz40nw.remove(comp.element(), transConfig.destinationAttr());
    }
  };
  var progressTo = function (comp, transConfig, transState, destination) {
    fasttrack(comp, transConfig, transState, destination);
    var route = getNewRoute(comp, transConfig, transState, destination);
    getTransitionOf(comp, transConfig, transState, route).fold(function () {
      jumpTo(comp, transConfig, transState, destination);
    }, function (routeTransition) {
      disableTransition(comp, transConfig, transState);
      var t = routeTransition.transition();
      $_aoqcjmyrjegz40sq.add(comp.element(), t.transitionClass());
      $_bcxlrzxvjegz40nw.set(comp.element(), transConfig.destinationAttr(), destination);
    });
  };
  var getState = function (comp, transConfig, transState) {
    var e = comp.element();
    return $_bcxlrzxvjegz40nw.has(e, transConfig.stateAttr()) ? Option.some($_bcxlrzxvjegz40nw.get(e, transConfig.stateAttr())) : Option.none();
  };
  var $_375p5f13wjegz41j6 = {
    findRoute: findRoute,
    disableTransition: disableTransition,
    getCurrentRoute: getCurrentRoute,
    jumpTo: jumpTo,
    progressTo: progressTo,
    getState: getState
  };

  var events$8 = function (transConfig, transState) {
    return $_63ctkqy8jegz40pp.derive([
      $_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        $_375p5f13wjegz41j6.getCurrentRoute(component, transConfig, transState).each(function (route) {
          $_375p5f13wjegz41j6.findRoute(component, transConfig, transState, route).each(function (rInfo) {
            rInfo.transition().each(function (rTransition) {
              if (raw.propertyName === rTransition.property()) {
                $_375p5f13wjegz41j6.jumpTo(component, transConfig, transState, route.destination());
                transConfig.onTransition()(component, route);
              }
            });
          });
        });
      }),
      $_63ctkqy8jegz40pp.runOnAttached(function (comp, se) {
        $_375p5f13wjegz41j6.jumpTo(comp, transConfig, transState, transConfig.initialState());
      })
    ]);
  };
  var $_eusvde13vjegz41j4 = { events: events$8 };

  var TransitionSchema = [
    $_cjikoqybjegz40q7.defaulted('destinationAttr', 'data-transitioning-destination'),
    $_cjikoqybjegz40q7.defaulted('stateAttr', 'data-transitioning-state'),
    $_cjikoqybjegz40q7.strict('initialState'),
    $_b1fv0nzajegz40ue.onHandler('onTransition'),
    $_b1fv0nzajegz40ue.onHandler('onFinish'),
    $_cjikoqybjegz40q7.strictOf('routes', $_fokpo2yijegz40rm.setOf(Result.value, $_fokpo2yijegz40rm.setOf(Result.value, $_fokpo2yijegz40rm.objOfOnly([$_cjikoqybjegz40q7.optionObjOfOnly('transition', [
        $_cjikoqybjegz40q7.strict('property'),
        $_cjikoqybjegz40q7.strict('transitionClass')
      ])]))))
  ];

  var createRoutes = function (routes) {
    var r = {};
    $_4vnyr3x4jegz40l5.each(routes, function (v, k) {
      var waypoints = k.split('<->');
      r[waypoints[0]] = $_75j08mxwjegz40o2.wrap(waypoints[1], v);
      r[waypoints[1]] = $_75j08mxwjegz40o2.wrap(waypoints[0], v);
    });
    return r;
  };
  var createBistate = function (first, second, transitions) {
    return $_75j08mxwjegz40o2.wrapAll([
      {
        key: first,
        value: $_75j08mxwjegz40o2.wrap(second, transitions)
      },
      {
        key: second,
        value: $_75j08mxwjegz40o2.wrap(first, transitions)
      }
    ]);
  };
  var createTristate = function (first, second, third, transitions) {
    return $_75j08mxwjegz40o2.wrapAll([
      {
        key: first,
        value: $_75j08mxwjegz40o2.wrapAll([
          {
            key: second,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: second,
        value: $_75j08mxwjegz40o2.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: third,
        value: $_75j08mxwjegz40o2.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: second,
            value: transitions
          }
        ])
      }
    ]);
  };
  var Transitioning = $_2s5cqny6jegz40p5.create({
    fields: TransitionSchema,
    name: 'transitioning',
    active: $_eusvde13vjegz41j4,
    apis: $_375p5f13wjegz41j6,
    extra: {
      createRoutes: createRoutes,
      createBistate: createBistate,
      createTristate: createTristate
    }
  });

  var scrollable = $_c2ndmvzijegz40vq.resolve('scrollable');
  var register = function (element) {
    $_aoqcjmyrjegz40sq.add(element, scrollable);
  };
  var deregister = function (element) {
    $_aoqcjmyrjegz40sq.remove(element, scrollable);
  };
  var $_5p86jj13yjegz41jj = {
    register: register,
    deregister: deregister,
    scrollable: $_b84g4ownjegz40jb.constant(scrollable)
  };

  var getValue$4 = function (item) {
    return $_75j08mxwjegz40o2.readOptFrom(item, 'format').getOr(item.title);
  };
  var convert$1 = function (formats, memMenuThunk) {
    var mainMenu = makeMenu('Styles', [].concat($_353rcfwwjegz40kh.map(formats.items, function (k) {
      return makeItem(getValue$4(k), k.title, k.isSelected(), k.getPreview(), $_75j08mxwjegz40o2.hasKey(formats.expansions, getValue$4(k)));
    })), memMenuThunk, false);
    var submenus = $_4vnyr3x4jegz40l5.map(formats.menus, function (menuItems, menuName) {
      var items = $_353rcfwwjegz40kh.map(menuItems, function (item) {
        return makeItem(getValue$4(item), item.title, item.isSelected !== undefined ? item.isSelected() : false, item.getPreview !== undefined ? item.getPreview() : '', $_75j08mxwjegz40o2.hasKey(formats.expansions, getValue$4(item)));
      });
      return makeMenu(menuName, items, memMenuThunk, true);
    });
    var menus = $_6qf81kx2jegz40l1.deepMerge(submenus, $_75j08mxwjegz40o2.wrap('styles', mainMenu));
    var tmenu = TieredMenu.tieredData('styles', menus, formats.expansions);
    return { tmenu: tmenu };
  };
  var makeItem = function (value, text, selected, preview, isMenu) {
    return {
      data: {
        value: value,
        text: text
      },
      type: 'item',
      dom: {
        tag: 'div',
        classes: isMenu ? [$_c2ndmvzijegz40vq.resolve('styles-item-is-menu')] : []
      },
      toggling: {
        toggleOnExecute: false,
        toggleClass: $_c2ndmvzijegz40vq.resolve('format-matches'),
        selected: selected
      },
      itemBehaviours: $_2s5cqny6jegz40p5.derive(isMenu ? [] : [$_dp0qcmzhjegz40vo.format(value, function (comp, status) {
          var toggle = status ? Toggling.on : Toggling.off;
          toggle(comp);
        })]),
      components: [{
          dom: {
            tag: 'div',
            attributes: { style: preview },
            innerHtml: text
          }
        }]
    };
  };
  var makeMenu = function (value, items, memMenuThunk, collapsable) {
    return {
      value: value,
      dom: { tag: 'div' },
      components: [
        Button.sketch({
          dom: {
            tag: 'div',
            classes: [$_c2ndmvzijegz40vq.resolve('styles-collapser')]
          },
          components: collapsable ? [
            {
              dom: {
                tag: 'span',
                classes: [$_c2ndmvzijegz40vq.resolve('styles-collapse-icon')]
              }
            },
            $_d16c6e12xjegz41cw.text(value)
          ] : [$_d16c6e12xjegz41cw.text(value)],
          action: function (item) {
            if (collapsable) {
              var comp = memMenuThunk().get(item);
              TieredMenu.collapseMenu(comp);
            }
          }
        }),
        {
          dom: {
            tag: 'div',
            classes: [$_c2ndmvzijegz40vq.resolve('styles-menu-items-container')]
          },
          components: [Menu.parts().items({})],
          behaviours: $_2s5cqny6jegz40p5.derive([$_2rkvb812ajegz419i.config('adhoc-scrollable-menu', [
              $_63ctkqy8jegz40pp.runOnAttached(function (component, simulatedEvent) {
                $_flvpsp107jegz40ye.set(component.element(), 'overflow-y', 'auto');
                $_flvpsp107jegz40ye.set(component.element(), '-webkit-overflow-scrolling', 'touch');
                $_5p86jj13yjegz41jj.register(component.element());
              }),
              $_63ctkqy8jegz40pp.runOnDetached(function (component) {
                $_flvpsp107jegz40ye.remove(component.element(), 'overflow-y');
                $_flvpsp107jegz40ye.remove(component.element(), '-webkit-overflow-scrolling');
                $_5p86jj13yjegz41jj.deregister(component.element());
              })
            ])])
        }
      ],
      items: items,
      menuBehaviours: $_2s5cqny6jegz40p5.derive([Transitioning.config({
          initialState: 'after',
          routes: Transitioning.createTristate('before', 'current', 'after', {
            transition: {
              property: 'transform',
              transitionClass: 'transitioning'
            }
          })
        })])
    };
  };
  var sketch$9 = function (settings) {
    var dataset = convert$1(settings.formats, function () {
      return memMenu;
    });
    var memMenu = $_eegrf811vjegz417y.record(TieredMenu.sketch({
      dom: {
        tag: 'div',
        classes: [$_c2ndmvzijegz40vq.resolve('styles-menu')]
      },
      components: [],
      fakeFocus: true,
      stayInDom: true,
      onExecute: function (tmenu, item) {
        var v = me.getValue(item);
        settings.handle(item, v.value);
      },
      onEscape: function () {
      },
      onOpenMenu: function (container, menu) {
        var w = $_6iva5411ojegz416y.get(container.element());
        $_6iva5411ojegz416y.set(menu.element(), w);
        Transitioning.jumpTo(menu, 'current');
      },
      onOpenSubmenu: function (container, item, submenu) {
        var w = $_6iva5411ojegz416y.get(container.element());
        var menu = $_eelz2c101jegz40xw.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var menuComp = container.getSystem().getByDom(menu).getOrDie();
        $_6iva5411ojegz416y.set(submenu.element(), w);
        Transitioning.progressTo(menuComp, 'before');
        Transitioning.jumpTo(submenu, 'after');
        Transitioning.progressTo(submenu, 'current');
      },
      onCollapseMenu: function (container, item, menu) {
        var submenu = $_eelz2c101jegz40xw.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var submenuComp = container.getSystem().getByDom(submenu).getOrDie();
        Transitioning.progressTo(submenuComp, 'after');
        Transitioning.progressTo(menu, 'current');
      },
      navigateOnHover: false,
      openImmediately: true,
      data: dataset.tmenu,
      markers: {
        backgroundMenu: $_c2ndmvzijegz40vq.resolve('styles-background-menu'),
        menu: $_c2ndmvzijegz40vq.resolve('styles-menu'),
        selectedMenu: $_c2ndmvzijegz40vq.resolve('styles-selected-menu'),
        item: $_c2ndmvzijegz40vq.resolve('styles-item'),
        selectedItem: $_c2ndmvzijegz40vq.resolve('styles-selected-item')
      }
    }));
    return memMenu.asSpec();
  };
  var $_2n5mmr12wjegz41ch = { sketch: sketch$9 };

  var getFromExpandingItem = function (item) {
    var newItem = $_6qf81kx2jegz40l1.deepMerge($_75j08mxwjegz40o2.exclude(item, ['items']), { menu: true });
    var rest = expand(item.items);
    var newMenus = $_6qf81kx2jegz40l1.deepMerge(rest.menus, $_75j08mxwjegz40o2.wrap(item.title, rest.items));
    var newExpansions = $_6qf81kx2jegz40l1.deepMerge(rest.expansions, $_75j08mxwjegz40o2.wrap(item.title, item.title));
    return {
      item: newItem,
      menus: newMenus,
      expansions: newExpansions
    };
  };
  var getFromItem = function (item) {
    return $_75j08mxwjegz40o2.hasKey(item, 'items') ? getFromExpandingItem(item) : {
      item: item,
      menus: {},
      expansions: {}
    };
  };
  var expand = function (items) {
    return $_353rcfwwjegz40kh.foldr(items, function (acc, item) {
      var newData = getFromItem(item);
      return {
        menus: $_6qf81kx2jegz40l1.deepMerge(acc.menus, newData.menus),
        items: [newData.item].concat(acc.items),
        expansions: $_6qf81kx2jegz40l1.deepMerge(acc.expansions, newData.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  };
  var $_fjbis913zjegz41jm = { expand: expand };

  var register$1 = function (editor, settings) {
    var isSelectedFor = function (format) {
      return function () {
        return editor.formatter.match(format);
      };
    };
    var getPreview = function (format) {
      return function () {
        var styles = editor.formatter.getCssText(format);
        return styles;
      };
    };
    var enrichSupported = function (item) {
      return $_6qf81kx2jegz40l1.deepMerge(item, {
        isSelected: isSelectedFor(item.format),
        getPreview: getPreview(item.format)
      });
    };
    var enrichMenu = function (item) {
      return $_6qf81kx2jegz40l1.deepMerge(item, {
        isSelected: $_b84g4ownjegz40jb.constant(false),
        getPreview: $_b84g4ownjegz40jb.constant('')
      });
    };
    var enrichCustom = function (item) {
      var formatName = $_g605fa10vjegz4123.generate(item.title);
      var newItem = $_6qf81kx2jegz40l1.deepMerge(item, {
        format: formatName,
        isSelected: isSelectedFor(formatName),
        getPreview: getPreview(formatName)
      });
      editor.formatter.register(formatName, newItem);
      return newItem;
    };
    var formats = $_75j08mxwjegz40o2.readOptFrom(settings, 'style_formats').getOr(DefaultStyleFormats);
    var doEnrich = function (items) {
      return $_353rcfwwjegz40kh.map(items, function (item) {
        if ($_75j08mxwjegz40o2.hasKey(item, 'items')) {
          var newItems = doEnrich(item.items);
          return $_6qf81kx2jegz40l1.deepMerge(enrichMenu(item), { items: newItems });
        } else if ($_75j08mxwjegz40o2.hasKey(item, 'format')) {
          return enrichSupported(item);
        } else {
          return enrichCustom(item);
        }
      });
    };
    return doEnrich(formats);
  };
  var prune = function (editor, formats) {
    var doPrune = function (items) {
      return $_353rcfwwjegz40kh.bind(items, function (item) {
        if (item.items !== undefined) {
          var newItems = doPrune(item.items);
          return newItems.length > 0 ? [item] : [];
        } else {
          var keep = $_75j08mxwjegz40o2.hasKey(item, 'format') ? editor.formatter.canApply(item.format) : true;
          return keep ? [item] : [];
        }
      });
    };
    var prunedItems = doPrune(formats);
    return $_fjbis913zjegz41jm.expand(prunedItems);
  };
  var ui = function (editor, formats, onDone) {
    var pruned = prune(editor, formats);
    return $_2n5mmr12wjegz41ch.sketch({
      formats: pruned,
      handle: function (item, value) {
        editor.undoManager.transact(function () {
          if (Toggling.isOn(item)) {
            editor.formatter.remove(value);
          } else {
            editor.formatter.apply(value);
          }
        });
        onDone();
      }
    });
  };
  var $_9dqn9q12ujegz41c8 = {
    register: register$1,
    ui: ui
  };

  var defaults = [
    'undo',
    'bold',
    'italic',
    'link',
    'image',
    'bullist',
    'styleselect'
  ];
  var extract$1 = function (rawToolbar) {
    var toolbar = rawToolbar.replace(/\|/g, ' ').trim();
    return toolbar.length > 0 ? toolbar.split(/\s+/) : [];
  };
  var identifyFromArray = function (toolbar) {
    return $_353rcfwwjegz40kh.bind(toolbar, function (item) {
      return $_6zfdmjx3jegz40l3.isArray(item) ? identifyFromArray(item) : extract$1(item);
    });
  };
  var identify = function (settings) {
    var toolbar = settings.toolbar !== undefined ? settings.toolbar : defaults;
    return $_6zfdmjx3jegz40l3.isArray(toolbar) ? identifyFromArray(toolbar) : extract$1(toolbar);
  };
  var setup = function (realm, editor) {
    var commandSketch = function (name) {
      return function () {
        return $_dwz193zjjegz40vs.forToolbarCommand(editor, name);
      };
    };
    var stateCommandSketch = function (name) {
      return function () {
        return $_dwz193zjjegz40vs.forToolbarStateCommand(editor, name);
      };
    };
    var actionSketch = function (name, query, action) {
      return function () {
        return $_dwz193zjjegz40vs.forToolbarStateAction(editor, name, query, action);
      };
    };
    var undo = commandSketch('undo');
    var redo = commandSketch('redo');
    var bold = stateCommandSketch('bold');
    var italic = stateCommandSketch('italic');
    var underline = stateCommandSketch('underline');
    var removeformat = commandSketch('removeformat');
    var link = function () {
      return $_dlylml125jegz418p.sketch(realm, editor);
    };
    var unlink = actionSketch('unlink', 'link', function () {
      editor.execCommand('unlink', null, false);
    });
    var image = function () {
      return $_7kq0f611ujegz417l.sketch(editor);
    };
    var bullist = actionSketch('unordered-list', 'ul', function () {
      editor.execCommand('InsertUnorderedList', null, false);
    });
    var numlist = actionSketch('ordered-list', 'ol', function () {
      editor.execCommand('InsertOrderedList', null, false);
    });
    var fontsizeselect = function () {
      return $_a1y9cl11qjegz4170.sketch(realm, editor);
    };
    var forecolor = function () {
      return $_a4bx6c119jegz414w.sketch(realm, editor);
    };
    var styleFormats = $_9dqn9q12ujegz41c8.register(editor, editor.settings);
    var styleFormatsMenu = function () {
      return $_9dqn9q12ujegz41c8.ui(editor, styleFormats, function () {
        editor.fire('scrollIntoView');
      });
    };
    var styleselect = function () {
      return $_dwz193zjjegz40vs.forToolbar('style-formats', function (button) {
        editor.fire('toReading');
        realm.dropup().appear(styleFormatsMenu, Toggling.on, button);
      }, $_2s5cqny6jegz40p5.derive([
        Toggling.config({
          toggleClass: $_c2ndmvzijegz40vq.resolve('toolbar-button-selected'),
          toggleOnExecute: false,
          aria: { mode: 'pressed' }
        }),
        Receiving.config({
          channels: $_75j08mxwjegz40o2.wrapAll([
            $_dp0qcmzhjegz40vo.receive($_5sbjlvz5jegz40tl.orientationChanged(), Toggling.off),
            $_dp0qcmzhjegz40vo.receive($_5sbjlvz5jegz40tl.dropupDismissed(), Toggling.off)
          ])
        })
      ]));
    };
    var feature = function (prereq, sketch) {
      return {
        isSupported: function () {
          return prereq.forall(function (p) {
            return $_75j08mxwjegz40o2.hasKey(editor.buttons, p);
          });
        },
        sketch: sketch
      };
    };
    return {
      undo: feature(Option.none(), undo),
      redo: feature(Option.none(), redo),
      bold: feature(Option.none(), bold),
      italic: feature(Option.none(), italic),
      underline: feature(Option.none(), underline),
      removeformat: feature(Option.none(), removeformat),
      link: feature(Option.none(), link),
      unlink: feature(Option.none(), unlink),
      image: feature(Option.none(), image),
      bullist: feature(Option.some('bullist'), bullist),
      numlist: feature(Option.some('numlist'), numlist),
      fontsizeselect: feature(Option.none(), fontsizeselect),
      forecolor: feature(Option.none(), forecolor),
      styleselect: feature(Option.none(), styleselect)
    };
  };
  var detect$4 = function (settings, features) {
    var itemNames = identify(settings);
    var present = {};
    return $_353rcfwwjegz40kh.bind(itemNames, function (iName) {
      var r = !$_75j08mxwjegz40o2.hasKey(present, iName) && $_75j08mxwjegz40o2.hasKey(features, iName) && features[iName].isSupported() ? [features[iName].sketch()] : [];
      present[iName] = true;
      return r;
    });
  };
  var $_caxyiyz6jegz40to = {
    identify: identify,
    setup: setup,
    detect: detect$4
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_b84g4ownjegz40jb.constant(target),
      'x': $_b84g4ownjegz40jb.constant(x),
      'y': $_b84g4ownjegz40jb.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_b84g4ownjegz40jb.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_30i27zxjjegz40mu.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_b84g4ownjegz40jb.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_b84g4ownjegz40jb.curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_vak8w142jegz41jz = {
    bind: bind$1,
    capture: capture
  };

  var filter$1 = $_b84g4ownjegz40jb.constant(true);
  var bind$2 = function (element, event, handler) {
    return $_vak8w142jegz41jz.bind(element, event, filter$1, handler);
  };
  var capture$1 = function (element, event, handler) {
    return $_vak8w142jegz41jz.capture(element, event, filter$1, handler);
  };
  var $_30qmua141jegz41jw = {
    bind: bind$2,
    capture: capture$1
  };

  var INTERVAL = 50;
  var INSURANCE = 1000 / INTERVAL;
  var get$11 = function (outerWindow) {
    var isPortrait = outerWindow.matchMedia('(orientation: portrait)').matches;
    return { isPortrait: $_b84g4ownjegz40jb.constant(isPortrait) };
  };
  var getActualWidth = function (outerWindow) {
    var isIos = $_fzn4cewojegz40je.detect().os.isiOS();
    var isPortrait = get$11(outerWindow).isPortrait();
    return isIos && !isPortrait ? outerWindow.screen.height : outerWindow.screen.width;
  };
  var onChange = function (outerWindow, listeners) {
    var win = $_30i27zxjjegz40mu.fromDom(outerWindow);
    var poller = null;
    var change = function () {
      clearInterval(poller);
      var orientation = get$11(outerWindow);
      listeners.onChange(orientation);
      onAdjustment(function () {
        listeners.onReady(orientation);
      });
    };
    var orientationHandle = $_30qmua141jegz41jw.bind(win, 'orientationchange', change);
    var onAdjustment = function (f) {
      clearInterval(poller);
      var flag = outerWindow.innerHeight;
      var insurance = 0;
      poller = setInterval(function () {
        if (flag !== outerWindow.innerHeight) {
          clearInterval(poller);
          f(Option.some(outerWindow.innerHeight));
        } else if (insurance > INSURANCE) {
          clearInterval(poller);
          f(Option.none());
        }
        insurance++;
      }, INTERVAL);
    };
    var destroy = function () {
      orientationHandle.unbind();
    };
    return {
      onAdjustment: onAdjustment,
      destroy: destroy
    };
  };
  var $_600vpe140jegz41jq = {
    get: get$11,
    onChange: onChange,
    getActualWidth: getActualWidth
  };

  function DelayedFunction (fun, delay) {
    var ref = null;
    var schedule = function () {
      var args = arguments;
      ref = setTimeout(function () {
        fun.apply(null, args);
        ref = null;
      }, delay);
    };
    var cancel = function () {
      if (ref !== null) {
        clearTimeout(ref);
        ref = null;
      }
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  }

  var SIGNIFICANT_MOVE = 5;
  var LONGPRESS_DELAY = 400;
  var getTouch = function (event) {
    if (event.raw().touches === undefined || event.raw().touches.length !== 1)
      return Option.none();
    return Option.some(event.raw().touches[0]);
  };
  var isFarEnough = function (touch, data) {
    var distX = Math.abs(touch.clientX - data.x());
    var distY = Math.abs(touch.clientY - data.y());
    return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
  };
  var monitor = function (settings) {
    var startData = Cell(Option.none());
    var longpress = DelayedFunction(function (event) {
      startData.set(Option.none());
      settings.triggerEvent($_f4n44rwljegz40j4.longpress(), event);
    }, LONGPRESS_DELAY);
    var handleTouchstart = function (event) {
      getTouch(event).each(function (touch) {
        longpress.cancel();
        var data = {
          x: $_b84g4ownjegz40jb.constant(touch.clientX),
          y: $_b84g4ownjegz40jb.constant(touch.clientY),
          target: event.target
        };
        longpress.schedule(data);
        startData.set(Option.some(data));
      });
      return Option.none();
    };
    var handleTouchmove = function (event) {
      longpress.cancel();
      getTouch(event).each(function (touch) {
        startData.get().each(function (data) {
          if (isFarEnough(touch, data))
            startData.set(Option.none());
        });
      });
      return Option.none();
    };
    var handleTouchend = function (event) {
      longpress.cancel();
      var isSame = function (data) {
        return $_47k0n6xdjegz40mb.eq(data.target(), event.target());
      };
      return startData.get().filter(isSame).map(function (data) {
        return settings.triggerEvent($_f4n44rwljegz40j4.tap(), event);
      });
    };
    var handlers = $_75j08mxwjegz40o2.wrapAll([
      {
        key: $_equp8wmjegz40j7.touchstart(),
        value: handleTouchstart
      },
      {
        key: $_equp8wmjegz40j7.touchmove(),
        value: handleTouchmove
      },
      {
        key: $_equp8wmjegz40j7.touchend(),
        value: handleTouchend
      }
    ]);
    var fireIfReady = function (event, type) {
      return $_75j08mxwjegz40o2.readOptFrom(handlers, type).bind(function (handler) {
        return handler(event);
      });
    };
    return { fireIfReady: fireIfReady };
  };
  var $_a3dbo148jegz41kz = { monitor: monitor };

  var monitor$1 = function (editorApi) {
    var tapEvent = $_a3dbo148jegz41kz.monitor({
      triggerEvent: function (type, evt) {
        editorApi.onTapContent(evt);
      }
    });
    var onTouchend = function () {
      return $_30qmua141jegz41jw.bind(editorApi.body(), 'touchend', function (evt) {
        tapEvent.fireIfReady(evt, 'touchend');
      });
    };
    var onTouchmove = function () {
      return $_30qmua141jegz41jw.bind(editorApi.body(), 'touchmove', function (evt) {
        tapEvent.fireIfReady(evt, 'touchmove');
      });
    };
    var fireTouchstart = function (evt) {
      tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
      fireTouchstart: fireTouchstart,
      onTouchend: onTouchend,
      onTouchmove: onTouchmove
    };
  };
  var $_d5t77j147jegz41kv = { monitor: monitor$1 };

  var isAndroid6 = $_fzn4cewojegz40je.detect().os.version.major >= 6;
  var initEvents = function (editorApi, toolstrip, alloy) {
    var tapping = $_d5t77j147jegz41kv.monitor(editorApi);
    var outerDoc = $_6rauxox7jegz40ll.owner(toolstrip);
    var isRanged = function (sel) {
      return !$_47k0n6xdjegz40mb.eq(sel.start(), sel.finish()) || sel.soffset() !== sel.foffset();
    };
    var hasRangeInUi = function () {
      return $_7nx9zfyxjegz40t1.active(outerDoc).filter(function (input) {
        return $_bge3bexojegz40n6.name(input) === 'input';
      }).exists(function (input) {
        return input.dom().selectionStart !== input.dom().selectionEnd;
      });
    };
    var updateMargin = function () {
      var rangeInContent = editorApi.doc().dom().hasFocus() && editorApi.getSelection().exists(isRanged);
      alloy.getByDom(toolstrip).each((rangeInContent || hasRangeInUi()) === true ? Toggling.on : Toggling.off);
    };
    var listeners = [
      $_30qmua141jegz41jw.bind(editorApi.body(), 'touchstart', function (evt) {
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_30qmua141jegz41jw.bind(toolstrip, 'touchstart', function (evt) {
        editorApi.onTouchToolstrip();
      }),
      editorApi.onToReading(function () {
        $_7nx9zfyxjegz40t1.blur(editorApi.body());
      }),
      editorApi.onToEditing($_b84g4ownjegz40jb.noop),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        editorApi.getCursorBox().each(function (bounds) {
          var cWin = editorApi.win();
          var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
          var cScrollBy = isOutside ? bounds.bottom() - cWin.innerHeight + 50 : 0;
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      })
    ].concat(isAndroid6 === true ? [] : [
      $_30qmua141jegz41jw.bind($_30i27zxjjegz40mu.fromDom(editorApi.win()), 'blur', function () {
        alloy.getByDom(toolstrip).each(Toggling.off);
      }),
      $_30qmua141jegz41jw.bind(outerDoc, 'select', updateMargin),
      $_30qmua141jegz41jw.bind(editorApi.doc(), 'selectionchange', updateMargin)
    ]);
    var destroy = function () {
      $_353rcfwwjegz40kh.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_g6dgt146jegz41kj = { initEvents: initEvents };

  var safeParse = function (element, attribute) {
    var parsed = parseInt($_bcxlrzxvjegz40nw.get(element, attribute), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  var $_dhznaj14bjegz41le = { safeParse: safeParse };

  function NodeValue (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return Option.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
    };
    var browser = $_fzn4cewojegz40je.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  }

  var api$3 = NodeValue($_bge3bexojegz40n6.isText, 'text');
  var get$12 = function (element) {
    return api$3.get(element);
  };
  var getOption = function (element) {
    return api$3.getOption(element);
  };
  var set$8 = function (element, value) {
    api$3.set(element, value);
  };
  var $_apt7wd14ejegz41lq = {
    get: get$12,
    getOption: getOption,
    set: set$8
  };

  var getEnd = function (element) {
    return $_bge3bexojegz40n6.name(element) === 'img' ? 1 : $_apt7wd14ejegz41lq.getOption(element).fold(function () {
      return $_6rauxox7jegz40ll.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_apt7wd14ejegz41lq.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_353rcfwwjegz40kh.contains(elementsWithCursorPosition, $_bge3bexojegz40n6.name(elem));
  };
  var $_eoqzcp14djegz41ln = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var adt$4 = $_4n552cy0jegz40oo.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart = function (situ) {
    return situ.fold($_b84g4ownjegz40jb.identity, $_b84g4ownjegz40jb.identity, $_b84g4ownjegz40jb.identity);
  };
  var $_33d8dk14hjegz41ly = {
    before: adt$4.before,
    on: adt$4.on,
    after: adt$4.after,
    cata: cata,
    getStart: getStart
  };

  var type$1 = $_4n552cy0jegz40oo.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$1 = $_14zxckx8jegz40lu.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$1.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart$1 = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_30i27zxjjegz40mu.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_33d8dk14hjegz41ly.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart$1(selection);
    return $_6rauxox7jegz40ll.defaultView(start);
  };
  var $_1hna6w14gjegz41lu = {
    domRange: type$1.domRange,
    relative: type$1.relative,
    exact: type$1.exact,
    exactFromRange: exactFromRange,
    range: range$1,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_6rauxox7jegz40ll.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_30i27zxjjegz40mu.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_47k0n6xdjegz40mb.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_a6ld4z14jjegz41mb = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_353rcfwwjegz40kh.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_30i27zxjjegz40mu.fromDom(fragment);
  };
  var $_cbroqa14kjegz41md = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$4 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return $_30i27zxjjegz40mu.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: $_b84g4ownjegz40jb.constant(rect.left),
      top: $_b84g4ownjegz40jb.constant(rect.top),
      right: $_b84g4ownjegz40jb.constant(rect.right),
      bottom: $_b84g4ownjegz40jb.constant(rect.bottom),
      width: $_b84g4ownjegz40jb.constant(rect.width),
      height: $_b84g4ownjegz40jb.constant(rect.height)
    };
  };
  var getFirstRect = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var getBounds = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var toString$1 = function (rng) {
    return rng.toString();
  };
  var $_5dgqwq14ljegz41mg = {
    create: create$4,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect,
    getBounds: getBounds,
    isWithin: isWithin,
    toString: toString$1
  };

  var adt$5 = $_4n552cy0jegz40oo.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type($_30i27zxjjegz40mu.fromDom(range.startContainer), range.startOffset, $_30i27zxjjegz40mu.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_b84g4ownjegz40jb.constant(rng),
          rtl: Option.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_81htnewpjegz40jh.cached(function () {
            return $_5dgqwq14ljegz41mg.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_81htnewpjegz40jh.cached(function () {
            return Option.some($_5dgqwq14ljegz41mg.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_81htnewpjegz40jh.cached(function () {
            return $_5dgqwq14ljegz41mg.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_81htnewpjegz40jh.cached(function () {
            return Option.some($_5dgqwq14ljegz41mg.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$5.rtl($_30i27zxjjegz40mu.fromDom(rev.endContainer), rev.endOffset, $_30i27zxjjegz40mu.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$5.ltr, rng);
      });
    } else {
      return fromRange(win, adt$5.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_b2pssq14mjegz41mk = {
    ltr: adt$5.ltr,
    rtl: adt$5.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y > rect.bottom) {
      } else if (y < rect.top || curDeltaX > xDelta) {
        return i - 1;
      } else {
        xDelta = curDeltaX;
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_eyrwfb14pjegz41my = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_apt7wd14ejegz41lq.get(textnode).length;
    var offset = $_eyrwfb14pjegz41my.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_88eph0y4jegz40p1.findMap(rects, function (rect) {
      return $_eyrwfb14pjegz41my.inRect(rect, x, y) ? Option.some(rect) : Option.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_eiejed14qjegz41mz = { locate: locate$1 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_6rauxox7jegz40ll.children(node);
    return $_88eph0y4jegz40p1.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_eyrwfb14pjegz41my.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_bge3bexojegz40n6.isText(node) ? $_eiejed14qjegz41mz.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$2 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_wdz4614ojegz41mu = { locate: locate$2 };

  var first$3 = function (element) {
    return $_g30u4yyzjegz40t7.descendant(element, $_eoqzcp14djegz41ln.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_eoqzcp14djegz41ln.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_6rauxox7jegz40ll.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return Option.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope);
  };
  var $_cccrv614sjegz41n5 = {
    first: first$3,
    last: last$2
  };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_cccrv614sjegz41n5.first : $_cccrv614sjegz41n5.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return Option.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search$1 = function (doc, node, x) {
    var f = $_6rauxox7jegz40ll.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_9ix63v14rjegz41n3 = { search: search$1 };

  var caretPositionFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return Option.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Option.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_wdz4614ojegz41mu.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_30i27zxjjegz40mu.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_9ix63v14rjegz41n3.search(doc, elem, x);
      };
      return $_6rauxox7jegz40ll.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_30i27zxjjegz40mu.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_1hna6w14gjegz41lu.range($_30i27zxjjegz40mu.fromDom(rng.startContainer), rng.startOffset, $_30i27zxjjegz40mu.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_7yhy7o14njegz41mr = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_5dgqwq14ljegz41mg.create(win);
    var self = $_28r0umxijegz40mo.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_7opypzzzjegz40xs.descendants(ancestor, selector));
    return $_353rcfwwjegz40kh.filter(elements, function (elem) {
      $_5dgqwq14ljegz41mg.selectNodeContentsUsing(innerRange, elem);
      return $_5dgqwq14ljegz41mg.isWithin(outerRange, innerRange);
    });
  };
  var find$4 = function (win, selection, selector) {
    var outerRange = $_b2pssq14mjegz41mk.asLtrRange(win, selection);
    var ancestor = $_30i27zxjjegz40mu.fromDom(outerRange.commonAncestorContainer);
    return $_bge3bexojegz40n6.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_2ke9r914tjegz41n8 = { find: find$4 };

  var beforeSpecial = function (element, offset) {
    var name = $_bge3bexojegz40n6.name(element);
    if ('input' === name)
      return $_33d8dk14hjegz41ly.after(element);
    else if (!$_353rcfwwjegz40kh.contains([
        'br',
        'img'
      ], name))
      return $_33d8dk14hjegz41ly.on(element, offset);
    else
      return offset === 0 ? $_33d8dk14hjegz41ly.before(element) : $_33d8dk14hjegz41ly.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_33d8dk14hjegz41ly.before, beforeSpecial, $_33d8dk14hjegz41ly.after);
    var finish = finishSitu.fold($_33d8dk14hjegz41ly.before, beforeSpecial, $_33d8dk14hjegz41ly.after);
    return $_1hna6w14gjegz41lu.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_1hna6w14gjegz41lu.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_30i27zxjjegz40mu.fromDom(rng.startContainer);
        var finish = $_30i27zxjjegz40mu.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_c1u1gs14ujegz41nb = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    Option.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_5dgqwq14ljegz41mg.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_2ke9r914tjegz41n8.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_b2pssq14mjegz41mk.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.setBaseAndExtent) {
          selection.setBaseAndExtent(start.dom(), soffset, finish.dom(), foffset);
        } else if (selection.extend) {
          selection.collapse(start.dom(), soffset);
          selection.extend(finish.dom(), foffset);
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_c1u1gs14ujegz41nb.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_c1u1gs14ujegz41nb.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_1hna6w14gjegz41lu.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_5dgqwq14ljegz41mg.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_c1u1gs14ujegz41nb.preprocess(selection);
    return $_b2pssq14mjegz41mk.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Option.some($_1hna6w14gjegz41lu.range($_30i27zxjjegz40mu.fromDom(firstRng.startContainer), firstRng.startOffset, $_30i27zxjjegz40mu.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Option.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_30i27zxjjegz40mu.fromDom(selection.anchorNode);
    var focusNode = $_30i27zxjjegz40mu.fromDom(selection.focusNode);
    return $_a6ld4z14jjegz41mb.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? Option.some($_1hna6w14gjegz41lu.range($_30i27zxjjegz40mu.fromDom(selection.anchorNode), selection.anchorOffset, $_30i27zxjjegz40mu.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_5dgqwq14ljegz41mg.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_5dgqwq14ljegz41mg.selectNodeContents(win, element);
    return $_1hna6w14gjegz41lu.range($_30i27zxjjegz40mu.fromDom(rng.startContainer), rng.startOffset, $_30i27zxjjegz40mu.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : Option.none();
  };
  var get$13 = function (win) {
    return getExact(win).map(function (range) {
      return $_1hna6w14gjegz41lu.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect$1 = function (win, selection) {
    var rng = $_b2pssq14mjegz41mk.asLtrRange(win, selection);
    return $_5dgqwq14ljegz41mg.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_b2pssq14mjegz41mk.asLtrRange(win, selection);
    return $_5dgqwq14ljegz41mg.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_7yhy7o14njegz41mr.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_b2pssq14mjegz41mk.asLtrRange(win, selection);
    return $_5dgqwq14ljegz41mg.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$3 = function (win, selection) {
    var rng = $_b2pssq14mjegz41mk.asLtrRange(win, selection);
    return $_5dgqwq14ljegz41mg.cloneFragment(rng);
  };
  var replace = function (win, selection, elements) {
    var rng = $_b2pssq14mjegz41mk.asLtrRange(win, selection);
    var fragment = $_cbroqa14kjegz41md.fromElements(elements, win.document);
    $_5dgqwq14ljegz41mg.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_b2pssq14mjegz41mk.asLtrRange(win, selection);
    $_5dgqwq14ljegz41mg.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_47k0n6xdjegz40mb.eq(start, finish) && soffset === foffset;
  };
  var $_80125u14ijegz41m7 = {
    setExact: setExact,
    getExact: getExact,
    get: get$13,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$3,
    replace: replace,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var COLLAPSED_WIDTH = 2;
  var collapsedRect = function (rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: $_b84g4ownjegz40jb.constant(COLLAPSED_WIDTH),
      height: rect.height
    };
  };
  var toRect$1 = function (rawRect) {
    return {
      left: $_b84g4ownjegz40jb.constant(rawRect.left),
      top: $_b84g4ownjegz40jb.constant(rawRect.top),
      right: $_b84g4ownjegz40jb.constant(rawRect.right),
      bottom: $_b84g4ownjegz40jb.constant(rawRect.bottom),
      width: $_b84g4ownjegz40jb.constant(rawRect.width),
      height: $_b84g4ownjegz40jb.constant(rawRect.height)
    };
  };
  var getRectsFromRange = function (range) {
    if (!range.collapsed) {
      return $_353rcfwwjegz40kh.map(range.getClientRects(), toRect$1);
    } else {
      var start_1 = $_30i27zxjjegz40mu.fromDom(range.startContainer);
      return $_6rauxox7jegz40ll.parent(start_1).bind(function (parent) {
        var selection = $_1hna6w14gjegz41lu.exact(start_1, range.startOffset, parent, $_eoqzcp14djegz41ln.getEnd(parent));
        var optRect = $_80125u14ijegz41m7.getFirstRect(range.startContainer.ownerDocument.defaultView, selection);
        return optRect.map(collapsedRect).map($_353rcfwwjegz40kh.pure);
      }).getOr([]);
    }
  };
  var getRectangles = function (cWin) {
    var sel = cWin.getSelection();
    return sel !== undefined && sel.rangeCount > 0 ? getRectsFromRange(sel.getRangeAt(0)) : [];
  };
  var $_4rcy5d14cjegz41lg = { getRectangles: getRectangles };

  var autocompleteHack = function () {
    return function (f) {
      setTimeout(function () {
        f();
      }, 0);
    };
  };
  var resume = function (cWin) {
    cWin.focus();
    var iBody = $_30i27zxjjegz40mu.fromDom(cWin.document.body);
    var inInput = $_7nx9zfyxjegz40t1.active().exists(function (elem) {
      return $_353rcfwwjegz40kh.contains([
        'input',
        'textarea'
      ], $_bge3bexojegz40n6.name(elem));
    });
    var transaction = inInput ? autocompleteHack() : $_b84g4ownjegz40jb.apply;
    transaction(function () {
      $_7nx9zfyxjegz40t1.active().each($_7nx9zfyxjegz40t1.blur);
      $_7nx9zfyxjegz40t1.focus(iBody);
    });
  };
  var $_fvlf8x14vjegz41ne = { resume: resume };

  var EXTRA_SPACING = 50;
  var data = 'data-' + $_c2ndmvzijegz40vq.resolve('last-outer-height');
  var setLastHeight = function (cBody, value) {
    $_bcxlrzxvjegz40nw.set(cBody, data, value);
  };
  var getLastHeight = function (cBody) {
    return $_dhznaj14bjegz41le.safeParse(cBody, data);
  };
  var getBoundsFrom = function (rect) {
    return {
      top: $_b84g4ownjegz40jb.constant(rect.top()),
      bottom: $_b84g4ownjegz40jb.constant(rect.top() + rect.height())
    };
  };
  var getBounds$2 = function (cWin) {
    var rects = $_4rcy5d14cjegz41lg.getRectangles(cWin);
    return rects.length > 0 ? Option.some(rects[0]).map(getBoundsFrom) : Option.none();
  };
  var findDelta = function (outerWindow, cBody) {
    var last = getLastHeight(cBody);
    var current = outerWindow.innerHeight;
    return last > current ? Option.some(last - current) : Option.none();
  };
  var calculate = function (cWin, bounds, delta) {
    var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
    return isOutside ? Math.min(delta, bounds.bottom() - cWin.innerHeight + EXTRA_SPACING) : 0;
  };
  var setup$1 = function (outerWindow, cWin) {
    var cBody = $_30i27zxjjegz40mu.fromDom(cWin.document.body);
    var toEditing = function () {
      $_fvlf8x14vjegz41ne.resume(cWin);
    };
    var onResize = $_30qmua141jegz41jw.bind($_30i27zxjjegz40mu.fromDom(outerWindow), 'resize', function () {
      findDelta(outerWindow, cBody).each(function (delta) {
        getBounds$2(cWin).each(function (bounds) {
          var cScrollBy = calculate(cWin, bounds, delta);
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      });
      setLastHeight(cBody, outerWindow.innerHeight);
    });
    setLastHeight(cBody, outerWindow.innerHeight);
    var destroy = function () {
      onResize.unbind();
    };
    return {
      toEditing: toEditing,
      destroy: destroy
    };
  };
  var $_bjqdg314ajegz41l8 = { setup: setup$1 };

  var getBodyFromFrame = function (frame) {
    return Option.some($_30i27zxjjegz40mu.fromDom(frame.dom().contentWindow.document.body));
  };
  var getDocFromFrame = function (frame) {
    return Option.some($_30i27zxjjegz40mu.fromDom(frame.dom().contentWindow.document));
  };
  var getWinFromFrame = function (frame) {
    return Option.from(frame.dom().contentWindow);
  };
  var getSelectionFromFrame = function (frame) {
    var optWin = getWinFromFrame(frame);
    return optWin.bind($_80125u14ijegz41m7.getExact);
  };
  var getFrame = function (editor) {
    return editor.getFrame();
  };
  var getOrDerive = function (name, f) {
    return function (editor) {
      var g = editor[name].getOrThunk(function () {
        var frame = getFrame(editor);
        return function () {
          return f(frame);
        };
      });
      return g();
    };
  };
  var getOrListen = function (editor, doc, name, type) {
    return editor[name].getOrThunk(function () {
      return function (handler) {
        return $_30qmua141jegz41jw.bind(doc, type, handler);
      };
    });
  };
  var toRect$2 = function (rect) {
    return {
      left: $_b84g4ownjegz40jb.constant(rect.left),
      top: $_b84g4ownjegz40jb.constant(rect.top),
      right: $_b84g4ownjegz40jb.constant(rect.right),
      bottom: $_b84g4ownjegz40jb.constant(rect.bottom),
      width: $_b84g4ownjegz40jb.constant(rect.width),
      height: $_b84g4ownjegz40jb.constant(rect.height)
    };
  };
  var getActiveApi = function (editor) {
    var frame = getFrame(editor);
    var tryFallbackBox = function (win) {
      var isCollapsed = function (sel) {
        return $_47k0n6xdjegz40mb.eq(sel.start(), sel.finish()) && sel.soffset() === sel.foffset();
      };
      var toStartRect = function (sel) {
        var rect = sel.start().dom().getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect$2) : Option.none();
      };
      return $_80125u14ijegz41m7.getExact(win).filter(isCollapsed).bind(toStartRect);
    };
    return getBodyFromFrame(frame).bind(function (body) {
      return getDocFromFrame(frame).bind(function (doc) {
        return getWinFromFrame(frame).map(function (win) {
          var html = $_30i27zxjjegz40mu.fromDom(doc.dom().documentElement);
          var getCursorBox = editor.getCursorBox.getOrThunk(function () {
            return function () {
              return $_80125u14ijegz41m7.get(win).bind(function (sel) {
                return $_80125u14ijegz41m7.getFirstRect(win, sel).orThunk(function () {
                  return tryFallbackBox(win);
                });
              });
            };
          });
          var setSelection = editor.setSelection.getOrThunk(function () {
            return function (start, soffset, finish, foffset) {
              $_80125u14ijegz41m7.setExact(win, start, soffset, finish, foffset);
            };
          });
          var clearSelection = editor.clearSelection.getOrThunk(function () {
            return function () {
              $_80125u14ijegz41m7.clear(win);
            };
          });
          return {
            body: $_b84g4ownjegz40jb.constant(body),
            doc: $_b84g4ownjegz40jb.constant(doc),
            win: $_b84g4ownjegz40jb.constant(win),
            html: $_b84g4ownjegz40jb.constant(html),
            getSelection: $_b84g4ownjegz40jb.curry(getSelectionFromFrame, frame),
            setSelection: setSelection,
            clearSelection: clearSelection,
            frame: $_b84g4ownjegz40jb.constant(frame),
            onKeyup: getOrListen(editor, doc, 'onKeyup', 'keyup'),
            onNodeChanged: getOrListen(editor, doc, 'onNodeChanged', 'selectionchange'),
            onDomChanged: editor.onDomChanged,
            onScrollToCursor: editor.onScrollToCursor,
            onScrollToElement: editor.onScrollToElement,
            onToReading: editor.onToReading,
            onToEditing: editor.onToEditing,
            onToolbarScrollStart: editor.onToolbarScrollStart,
            onTouchContent: editor.onTouchContent,
            onTapContent: editor.onTapContent,
            onTouchToolstrip: editor.onTouchToolstrip,
            getCursorBox: getCursorBox
          };
        });
      });
    });
  };
  var $_2n6rm014wjegz41nk = {
    getBody: getOrDerive('getBody', getBodyFromFrame),
    getDoc: getOrDerive('getDoc', getDocFromFrame),
    getWin: getOrDerive('getWin', getWinFromFrame),
    getSelection: getOrDerive('getSelection', getSelectionFromFrame),
    getFrame: getFrame,
    getActiveApi: getActiveApi
  };

  var attr = 'data-ephox-mobile-fullscreen-style';
  var siblingStyles = 'display:none!important;';
  var ancestorPosition = 'position:absolute!important;';
  var ancestorStyles = 'top:0!important;left:0!important;margin:0' + '!important;padding:0!important;width:100%!important;';
  var bgFallback = 'background-color:rgb(255,255,255)!important;';
  var isAndroid = $_fzn4cewojegz40je.detect().os.isAndroid();
  var matchColor = function (editorBody) {
    var color = $_flvpsp107jegz40ye.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
  };
  var clobberStyles = function (container, editorBody) {
    var gatherSibilings = function (element) {
      var siblings = $_7opypzzzjegz40xs.siblings(element, '*');
      return siblings;
    };
    var clobber = function (clobberStyle) {
      return function (element) {
        var styles = $_bcxlrzxvjegz40nw.get(element, 'style');
        var backup = styles === undefined ? 'no-styles' : styles.trim();
        if (backup === clobberStyle) {
          return;
        } else {
          $_bcxlrzxvjegz40nw.set(element, attr, backup);
          $_bcxlrzxvjegz40nw.set(element, 'style', clobberStyle);
        }
      };
    };
    var ancestors = $_7opypzzzjegz40xs.ancestors(container, '*');
    var siblings = $_353rcfwwjegz40kh.bind(ancestors, gatherSibilings);
    var bgColor = matchColor(editorBody);
    $_353rcfwwjegz40kh.each(siblings, clobber(siblingStyles));
    $_353rcfwwjegz40kh.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    var containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
  };
  var restoreStyles = function () {
    var clobberedEls = $_7opypzzzjegz40xs.all('[' + attr + ']');
    $_353rcfwwjegz40kh.each(clobberedEls, function (element) {
      var restore = $_bcxlrzxvjegz40nw.get(element, attr);
      if (restore !== 'no-styles') {
        $_bcxlrzxvjegz40nw.set(element, 'style', restore);
      } else {
        $_bcxlrzxvjegz40nw.remove(element, 'style');
      }
      $_bcxlrzxvjegz40nw.remove(element, attr);
    });
  };
  var $_71b2r014xjegz41ny = {
    clobberStyles: clobberStyles,
    restoreStyles: restoreStyles
  };

  var tag = function () {
    var head = $_eelz2c101jegz40xw.first('head').getOrDie();
    var nu = function () {
      var meta = $_30i27zxjjegz40mu.fromTag('meta');
      $_bcxlrzxvjegz40nw.set(meta, 'name', 'viewport');
      $_4mdlzcx6jegz40lj.append(head, meta);
      return meta;
    };
    var element = $_eelz2c101jegz40xw.first('meta[name="viewport"]').getOrThunk(nu);
    var backup = $_bcxlrzxvjegz40nw.get(element, 'content');
    var maximize = function () {
      $_bcxlrzxvjegz40nw.set(element, 'content', 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
    };
    var restore = function () {
      if (backup !== undefined && backup !== null && backup.length > 0) {
        $_bcxlrzxvjegz40nw.set(element, 'content', backup);
      } else {
        $_bcxlrzxvjegz40nw.set(element, 'content', 'user-scalable=yes');
      }
    };
    return {
      maximize: maximize,
      restore: restore
    };
  };
  var $_d8g3v914yjegz41o4 = { tag: tag };

  var create$5 = function (platform, mask) {
    var meta = $_d8g3v914yjegz41o4.tag();
    var androidApi = $_2shn2412sjegz41c3.api();
    var androidEvents = $_2shn2412sjegz41c3.api();
    var enter = function () {
      mask.hide();
      $_aoqcjmyrjegz40sq.add(platform.container, $_c2ndmvzijegz40vq.resolve('fullscreen-maximized'));
      $_aoqcjmyrjegz40sq.add(platform.container, $_c2ndmvzijegz40vq.resolve('android-maximized'));
      meta.maximize();
      $_aoqcjmyrjegz40sq.add(platform.body, $_c2ndmvzijegz40vq.resolve('android-scroll-reload'));
      androidApi.set($_bjqdg314ajegz41l8.setup(platform.win, $_2n6rm014wjegz41nk.getWin(platform.editor).getOrDie('no')));
      $_2n6rm014wjegz41nk.getActiveApi(platform.editor).each(function (editorApi) {
        $_71b2r014xjegz41ny.clobberStyles(platform.container, editorApi.body());
        androidEvents.set($_g6dgt146jegz41kj.initEvents(editorApi, platform.toolstrip, platform.alloy));
      });
    };
    var exit = function () {
      meta.restore();
      mask.show();
      $_aoqcjmyrjegz40sq.remove(platform.container, $_c2ndmvzijegz40vq.resolve('fullscreen-maximized'));
      $_aoqcjmyrjegz40sq.remove(platform.container, $_c2ndmvzijegz40vq.resolve('android-maximized'));
      $_71b2r014xjegz41ny.restoreStyles();
      $_aoqcjmyrjegz40sq.remove(platform.body, $_c2ndmvzijegz40vq.resolve('android-scroll-reload'));
      androidEvents.clear();
      androidApi.clear();
    };
    return {
      enter: enter,
      exit: exit
    };
  };
  var $_b0v6wv145jegz41kg = { create: create$5 };

  var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        args = null;
      }
    };
    var throttle = function () {
      args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var first$4 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
        args = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var $_ftxq9b150jegz41og = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var sketch$10 = function (onView, translate) {
    var memIcon = $_eegrf811vjegz417y.record(Container.sketch({
      dom: $_7pltoz117jegz414k.dom('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'),
      containerBehaviours: $_2s5cqny6jegz40p5.derive([Toggling.config({
          toggleClass: $_c2ndmvzijegz40vq.resolve('mask-tap-icon-selected'),
          toggleOnExecute: false
        })])
    }));
    var onViewThrottle = $_ftxq9b150jegz41og.first(onView, 200);
    return Container.sketch({
      dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-disabled-mask"></div>'),
      components: [Container.sketch({
          dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-content-container"></div>'),
          components: [Button.sketch({
              dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-content-tap-section"></div>'),
              components: [memIcon.asSpec()],
              action: function (button) {
                onViewThrottle.throttle();
              },
              buttonBehaviours: $_2s5cqny6jegz40p5.derive([Toggling.config({ toggleClass: $_c2ndmvzijegz40vq.resolve('mask-tap-icon-selected') })])
            })]
        })]
    });
  };
  var $_6gmeon14zjegz41o9 = { sketch: sketch$10 };

  var MobileSchema = $_fokpo2yijegz40rm.objOf([
    $_cjikoqybjegz40q7.strictObjOf('editor', [
      $_cjikoqybjegz40q7.strict('getFrame'),
      $_cjikoqybjegz40q7.option('getBody'),
      $_cjikoqybjegz40q7.option('getDoc'),
      $_cjikoqybjegz40q7.option('getWin'),
      $_cjikoqybjegz40q7.option('getSelection'),
      $_cjikoqybjegz40q7.option('setSelection'),
      $_cjikoqybjegz40q7.option('clearSelection'),
      $_cjikoqybjegz40q7.option('cursorSaver'),
      $_cjikoqybjegz40q7.option('onKeyup'),
      $_cjikoqybjegz40q7.option('onNodeChanged'),
      $_cjikoqybjegz40q7.option('getCursorBox'),
      $_cjikoqybjegz40q7.strict('onDomChanged'),
      $_cjikoqybjegz40q7.defaulted('onTouchContent', $_b84g4ownjegz40jb.noop),
      $_cjikoqybjegz40q7.defaulted('onTapContent', $_b84g4ownjegz40jb.noop),
      $_cjikoqybjegz40q7.defaulted('onTouchToolstrip', $_b84g4ownjegz40jb.noop),
      $_cjikoqybjegz40q7.defaulted('onScrollToCursor', $_b84g4ownjegz40jb.constant({ unbind: $_b84g4ownjegz40jb.noop })),
      $_cjikoqybjegz40q7.defaulted('onScrollToElement', $_b84g4ownjegz40jb.constant({ unbind: $_b84g4ownjegz40jb.noop })),
      $_cjikoqybjegz40q7.defaulted('onToEditing', $_b84g4ownjegz40jb.constant({ unbind: $_b84g4ownjegz40jb.noop })),
      $_cjikoqybjegz40q7.defaulted('onToReading', $_b84g4ownjegz40jb.constant({ unbind: $_b84g4ownjegz40jb.noop })),
      $_cjikoqybjegz40q7.defaulted('onToolbarScrollStart', $_b84g4ownjegz40jb.identity)
    ]),
    $_cjikoqybjegz40q7.strict('socket'),
    $_cjikoqybjegz40q7.strict('toolstrip'),
    $_cjikoqybjegz40q7.strict('dropup'),
    $_cjikoqybjegz40q7.strict('toolbar'),
    $_cjikoqybjegz40q7.strict('container'),
    $_cjikoqybjegz40q7.strict('alloy'),
    $_cjikoqybjegz40q7.state('win', function (spec) {
      return $_6rauxox7jegz40ll.owner(spec.socket).dom().defaultView;
    }),
    $_cjikoqybjegz40q7.state('body', function (spec) {
      return $_30i27zxjjegz40mu.fromDom(spec.socket.dom().ownerDocument.body);
    }),
    $_cjikoqybjegz40q7.defaulted('translate', $_b84g4ownjegz40jb.identity),
    $_cjikoqybjegz40q7.defaulted('setReadOnly', $_b84g4ownjegz40jb.noop)
  ]);

  var produce = function (raw) {
    var mobile = $_fokpo2yijegz40rm.asRawOrDie('Getting AndroidWebapp schema', MobileSchema, raw);
    $_flvpsp107jegz40ye.set(mobile.toolstrip, 'width', '100%');
    var onTap = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_d16c6e12xjegz41cw.build($_6gmeon14zjegz41o9.sketch(onTap, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    $_4mdlzcx6jegz40lj.append(mobile.container, mask.element());
    var mode = $_b0v6wv145jegz41kg.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: $_b84g4ownjegz40jb.noop,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_b84g4ownjegz40jb.noop
    };
  };
  var $_6yae70144jegz41k6 = { produce: produce };

  var schema$14 = [
    $_cjikoqybjegz40q7.defaulted('shell', true),
    $_4ipd2i10sjegz411l.field('toolbarBehaviours', [Replacing])
  ];
  var enhanceGroups = function (detail) {
    return { behaviours: $_2s5cqny6jegz40p5.derive([Replacing.config({})]) };
  };
  var partTypes$1 = [$_ev0b2610zjegz412z.optional({
      name: 'groups',
      overrides: enhanceGroups
    })];
  var $_isel3154jegz41p6 = {
    name: $_b84g4ownjegz40jb.constant('Toolbar'),
    schema: $_b84g4ownjegz40jb.constant(schema$14),
    parts: $_b84g4ownjegz40jb.constant(partTypes$1)
  };

  var factory$4 = function (detail, components, spec, _externals) {
    var setGroups = function (toolbar, groups) {
      getGroupContainer(toolbar).fold(function () {
        console.error('Toolbar was defined to not be a shell, but no groups container was specified in components');
        throw new Error('Toolbar was defined to not be a shell, but no groups container was specified in components');
      }, function (container) {
        Replacing.set(container, groups);
      });
    };
    var getGroupContainer = function (component) {
      return detail.shell() ? Option.some(component) : $_63fdjp10xjegz412f.getPart(component, detail, 'groups');
    };
    var extra = detail.shell() ? {
      behaviours: [Replacing.config({})],
      components: []
    } : {
      behaviours: [],
      components: components
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: extra.components,
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive(extra.behaviours), $_4ipd2i10sjegz411l.get(detail.toolbarBehaviours())),
      apis: { setGroups: setGroups },
      domModification: { attributes: { role: 'group' } }
    };
  };
  var Toolbar = $_5bitwv10tjegz411q.composite({
    name: 'Toolbar',
    configFields: $_isel3154jegz41p6.schema(),
    partFields: $_isel3154jegz41p6.parts(),
    factory: factory$4,
    apis: {
      setGroups: function (apis, toolbar, groups) {
        apis.setGroups(toolbar, groups);
      }
    }
  });

  var schema$15 = [
    $_cjikoqybjegz40q7.strict('items'),
    $_b1fv0nzajegz40ue.markers(['itemClass']),
    $_4ipd2i10sjegz411l.field('tgroupBehaviours', [Keying])
  ];
  var partTypes$2 = [$_ev0b2610zjegz412z.group({
      name: 'items',
      unit: 'item',
      overrides: function (detail) {
        return { domModification: { classes: [detail.markers().itemClass()] } };
      }
    })];
  var $_7bdhaa156jegz41pe = {
    name: $_b84g4ownjegz40jb.constant('ToolbarGroup'),
    schema: $_b84g4ownjegz40jb.constant(schema$15),
    parts: $_b84g4ownjegz40jb.constant(partTypes$2)
  };

  var factory$5 = function (detail, components, spec, _externals) {
    return $_6qf81kx2jegz40l1.deepMerge({ dom: { attributes: { role: 'toolbar' } } }, {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_6qf81kx2jegz40l1.deepMerge($_2s5cqny6jegz40p5.derive([Keying.config({
          mode: 'flow',
          selector: '.' + detail.markers().itemClass()
        })]), $_4ipd2i10sjegz411l.get(detail.tgroupBehaviours())),
      'debug.sketcher': spec['debug.sketcher']
    });
  };
  var ToolbarGroup = $_5bitwv10tjegz411q.composite({
    name: 'ToolbarGroup',
    configFields: $_7bdhaa156jegz41pe.schema(),
    partFields: $_7bdhaa156jegz41pe.parts(),
    factory: factory$5
  });

  var dataHorizontal = 'data-' + $_c2ndmvzijegz40vq.resolve('horizontal-scroll');
  var canScrollVertically = function (container) {
    container.dom().scrollTop = 1;
    var result = container.dom().scrollTop !== 0;
    container.dom().scrollTop = 0;
    return result;
  };
  var canScrollHorizontally = function (container) {
    container.dom().scrollLeft = 1;
    var result = container.dom().scrollLeft !== 0;
    container.dom().scrollLeft = 0;
    return result;
  };
  var hasVerticalScroll = function (container) {
    return container.dom().scrollTop > 0 || canScrollVertically(container);
  };
  var hasHorizontalScroll = function (container) {
    return container.dom().scrollLeft > 0 || canScrollHorizontally(container);
  };
  var markAsHorizontal = function (container) {
    $_bcxlrzxvjegz40nw.set(container, dataHorizontal, 'true');
  };
  var hasScroll = function (container) {
    return $_bcxlrzxvjegz40nw.get(container, dataHorizontal) === 'true' ? hasHorizontalScroll : hasVerticalScroll;
  };
  var exclusive = function (scope, selector) {
    return $_30qmua141jegz41jw.bind(scope, 'touchmove', function (event) {
      $_eelz2c101jegz40xw.closest(event.target(), selector).filter(hasScroll).fold(function () {
        event.raw().preventDefault();
      }, $_b84g4ownjegz40jb.noop);
    });
  };
  var $_8hgruc157jegz41pi = {
    exclusive: exclusive,
    markAsHorizontal: markAsHorizontal
  };

  function ScrollingToolbar () {
    var makeGroup = function (gSpec) {
      var scrollClass = gSpec.scrollable === true ? '${prefix}-toolbar-scrollable-group' : '';
      return {
        dom: $_7pltoz117jegz414k.dom('<div aria-label="' + gSpec.label + '" class="${prefix}-toolbar-group ' + scrollClass + '"></div>'),
        tgroupBehaviours: $_2s5cqny6jegz40p5.derive([$_2rkvb812ajegz419i.config('adhoc-scrollable-toolbar', gSpec.scrollable === true ? [$_63ctkqy8jegz40pp.runOnInit(function (component, simulatedEvent) {
              $_flvpsp107jegz40ye.set(component.element(), 'overflow-x', 'auto');
              $_8hgruc157jegz41pi.markAsHorizontal(component.element());
              $_5p86jj13yjegz41jj.register(component.element());
            })] : [])]),
        components: [Container.sketch({ components: [ToolbarGroup.parts().items({})] })],
        markers: { itemClass: $_c2ndmvzijegz40vq.resolve('toolbar-group-item') },
        items: gSpec.items
      };
    };
    var toolbar = $_d16c6e12xjegz41cw.build(Toolbar.sketch({
      dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-toolbar"></div>'),
      components: [Toolbar.parts().groups({})],
      toolbarBehaviours: $_2s5cqny6jegz40p5.derive([
        Toggling.config({
          toggleClass: $_c2ndmvzijegz40vq.resolve('context-toolbar'),
          toggleOnExecute: false,
          aria: { mode: 'none' }
        }),
        Keying.config({ mode: 'cyclic' })
      ]),
      shell: true
    }));
    var wrapper = $_d16c6e12xjegz41cw.build(Container.sketch({
      dom: { classes: [$_c2ndmvzijegz40vq.resolve('toolstrip')] },
      components: [$_d16c6e12xjegz41cw.premade(toolbar)],
      containerBehaviours: $_2s5cqny6jegz40p5.derive([Toggling.config({
          toggleClass: $_c2ndmvzijegz40vq.resolve('android-selection-context-toolbar'),
          toggleOnExecute: false
        })])
    }));
    var resetGroups = function () {
      Toolbar.setGroups(toolbar, initGroups.get());
      Toggling.off(toolbar);
    };
    var initGroups = Cell([]);
    var setGroups = function (gs) {
      initGroups.set(gs);
      resetGroups();
    };
    var createGroups = function (gs) {
      return $_353rcfwwjegz40kh.map(gs, $_b84g4ownjegz40jb.compose(ToolbarGroup.sketch, makeGroup));
    };
    var refresh = function () {
      Toolbar.refresh(toolbar);
    };
    var setContextToolbar = function (gs) {
      Toggling.on(toolbar);
      Toolbar.setGroups(toolbar, gs);
    };
    var restoreToolbar = function () {
      if (Toggling.isOn(toolbar)) {
        resetGroups();
      }
    };
    var focus = function () {
      Keying.focusIn(toolbar);
    };
    return {
      wrapper: $_b84g4ownjegz40jb.constant(wrapper),
      toolbar: $_b84g4ownjegz40jb.constant(toolbar),
      createGroups: createGroups,
      setGroups: setGroups,
      setContextToolbar: setContextToolbar,
      restoreToolbar: restoreToolbar,
      refresh: refresh,
      focus: focus
    };
  }

  var makeEditSwitch = function (webapp) {
    return $_d16c6e12xjegz41cw.build(Button.sketch({
      dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'),
      action: function () {
        webapp.run(function (w) {
          w.setReadOnly(false);
        });
      }
    }));
  };
  var makeSocket = function () {
    return $_d16c6e12xjegz41cw.build(Container.sketch({
      dom: $_7pltoz117jegz414k.dom('<div class="${prefix}-editor-socket"></div>'),
      components: [],
      containerBehaviours: $_2s5cqny6jegz40p5.derive([Replacing.config({})])
    }));
  };
  var showEdit = function (socket, switchToEdit) {
    Replacing.append(socket, $_d16c6e12xjegz41cw.premade(switchToEdit));
  };
  var hideEdit = function (socket, switchToEdit) {
    Replacing.remove(socket, switchToEdit);
  };
  var updateMode = function (socket, switchToEdit, readOnly, root) {
    var swap = readOnly === true ? Swapping.toAlpha : Swapping.toOmega;
    swap(root);
    var f = readOnly ? showEdit : hideEdit;
    f(socket, switchToEdit);
  };
  var $_5ft15158jegz41pu = {
    makeEditSwitch: makeEditSwitch,
    makeSocket: makeSocket,
    updateMode: updateMode
  };

  var getAnimationRoot = function (component, slideConfig) {
    return slideConfig.getAnimationRoot().fold(function () {
      return component.element();
    }, function (get) {
      return get(component);
    });
  };
  var getDimensionProperty = function (slideConfig) {
    return slideConfig.dimension().property();
  };
  var getDimension = function (slideConfig, elem) {
    return slideConfig.dimension().getDimension()(elem);
  };
  var disableTransitions = function (component, slideConfig) {
    var root = getAnimationRoot(component, slideConfig);
    $_11n0sf13bjegz41fx.remove(root, [
      slideConfig.shrinkingClass(),
      slideConfig.growingClass()
    ]);
  };
  var setShrunk = function (component, slideConfig) {
    $_aoqcjmyrjegz40sq.remove(component.element(), slideConfig.openClass());
    $_aoqcjmyrjegz40sq.add(component.element(), slideConfig.closedClass());
    $_flvpsp107jegz40ye.set(component.element(), getDimensionProperty(slideConfig), '0px');
    $_flvpsp107jegz40ye.reflow(component.element());
  };
  var measureTargetSize = function (component, slideConfig) {
    setGrown(component, slideConfig);
    var expanded = getDimension(slideConfig, component.element());
    setShrunk(component, slideConfig);
    return expanded;
  };
  var setGrown = function (component, slideConfig) {
    $_aoqcjmyrjegz40sq.remove(component.element(), slideConfig.closedClass());
    $_aoqcjmyrjegz40sq.add(component.element(), slideConfig.openClass());
    $_flvpsp107jegz40ye.remove(component.element(), getDimensionProperty(slideConfig));
  };
  var doImmediateShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_flvpsp107jegz40ye.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_flvpsp107jegz40ye.reflow(component.element());
    disableTransitions(component, slideConfig);
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
    slideConfig.onShrunk()(component);
  };
  var doStartShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_flvpsp107jegz40ye.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_flvpsp107jegz40ye.reflow(component.element());
    var root = getAnimationRoot(component, slideConfig);
    $_aoqcjmyrjegz40sq.add(root, slideConfig.shrinkingClass());
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
  };
  var doStartGrow = function (component, slideConfig, slideState) {
    var fullSize = measureTargetSize(component, slideConfig);
    var root = getAnimationRoot(component, slideConfig);
    $_aoqcjmyrjegz40sq.add(root, slideConfig.growingClass());
    setGrown(component, slideConfig);
    $_flvpsp107jegz40ye.set(component.element(), getDimensionProperty(slideConfig), fullSize);
    slideState.setExpanded();
    slideConfig.onStartGrow()(component);
  };
  var grow = function (component, slideConfig, slideState) {
    if (!slideState.isExpanded())
      doStartGrow(component, slideConfig, slideState);
  };
  var shrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doStartShrink(component, slideConfig, slideState);
  };
  var immediateShrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doImmediateShrink(component, slideConfig, slideState);
  };
  var hasGrown = function (component, slideConfig, slideState) {
    return slideState.isExpanded();
  };
  var hasShrunk = function (component, slideConfig, slideState) {
    return slideState.isCollapsed();
  };
  var isGrowing = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_aoqcjmyrjegz40sq.has(root, slideConfig.growingClass()) === true;
  };
  var isShrinking = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_aoqcjmyrjegz40sq.has(root, slideConfig.shrinkingClass()) === true;
  };
  var isTransitioning = function (component, slideConfig, slideState) {
    return isGrowing(component, slideConfig, slideState) === true || isShrinking(component, slideConfig, slideState) === true;
  };
  var toggleGrow = function (component, slideConfig, slideState) {
    var f = slideState.isExpanded() ? doStartShrink : doStartGrow;
    f(component, slideConfig, slideState);
  };
  var $_25v3fh15cjegz41qc = {
    grow: grow,
    shrink: shrink,
    immediateShrink: immediateShrink,
    hasGrown: hasGrown,
    hasShrunk: hasShrunk,
    isGrowing: isGrowing,
    isShrinking: isShrinking,
    isTransitioning: isTransitioning,
    toggleGrow: toggleGrow,
    disableTransitions: disableTransitions
  };

  var exhibit$5 = function (base, slideConfig) {
    var expanded = slideConfig.expanded();
    return expanded ? $_b3xpx9yljegz40ry.nu({
      classes: [slideConfig.openClass()],
      styles: {}
    }) : $_b3xpx9yljegz40ry.nu({
      classes: [slideConfig.closedClass()],
      styles: $_75j08mxwjegz40o2.wrap(slideConfig.dimension().property(), '0px')
    });
  };
  var events$9 = function (slideConfig, slideState) {
    return $_63ctkqy8jegz40pp.derive([$_63ctkqy8jegz40pp.run($_equp8wmjegz40j7.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        if (raw.propertyName === slideConfig.dimension().property()) {
          $_25v3fh15cjegz41qc.disableTransitions(component, slideConfig, slideState);
          if (slideState.isExpanded())
            $_flvpsp107jegz40ye.remove(component.element(), slideConfig.dimension().property());
          var notify = slideState.isExpanded() ? slideConfig.onGrown() : slideConfig.onShrunk();
          notify(component, simulatedEvent);
        }
      })]);
  };
  var $_2she2u15bjegz41q7 = {
    exhibit: exhibit$5,
    events: events$9
  };

  var SlidingSchema = [
    $_cjikoqybjegz40q7.strict('closedClass'),
    $_cjikoqybjegz40q7.strict('openClass'),
    $_cjikoqybjegz40q7.strict('shrinkingClass'),
    $_cjikoqybjegz40q7.strict('growingClass'),
    $_cjikoqybjegz40q7.option('getAnimationRoot'),
    $_b1fv0nzajegz40ue.onHandler('onShrunk'),
    $_b1fv0nzajegz40ue.onHandler('onStartShrink'),
    $_b1fv0nzajegz40ue.onHandler('onGrown'),
    $_b1fv0nzajegz40ue.onHandler('onStartGrow'),
    $_cjikoqybjegz40q7.defaulted('expanded', false),
    $_cjikoqybjegz40q7.strictOf('dimension', $_fokpo2yijegz40rm.choose('property', {
      width: [
        $_b1fv0nzajegz40ue.output('property', 'width'),
        $_b1fv0nzajegz40ue.output('getDimension', function (elem) {
          return $_6iva5411ojegz416y.get(elem) + 'px';
        })
      ],
      height: [
        $_b1fv0nzajegz40ue.output('property', 'height'),
        $_b1fv0nzajegz40ue.output('getDimension', function (elem) {
          return $_961ns8106jegz40yc.get(elem) + 'px';
        })
      ]
    }))
  ];

  var init$4 = function (spec) {
    var state = Cell(spec.expanded());
    var readState = function () {
      return 'expanded: ' + state.get();
    };
    return BehaviourState({
      isExpanded: function () {
        return state.get() === true;
      },
      isCollapsed: function () {
        return state.get() === false;
      },
      setCollapsed: $_b84g4ownjegz40jb.curry(state.set, false),
      setExpanded: $_b84g4ownjegz40jb.curry(state.set, true),
      readState: readState
    });
  };
  var $_6i3a715ejegz41qq = { init: init$4 };

  var Sliding = $_2s5cqny6jegz40p5.create({
    fields: SlidingSchema,
    name: 'sliding',
    active: $_2she2u15bjegz41q7,
    apis: $_25v3fh15cjegz41qc,
    state: $_6i3a715ejegz41qq
  });

  var build$2 = function (refresh, scrollIntoView) {
    var dropup = $_d16c6e12xjegz41cw.build(Container.sketch({
      dom: {
        tag: 'div',
        classes: $_c2ndmvzijegz40vq.resolve('dropup')
      },
      components: [],
      containerBehaviours: $_2s5cqny6jegz40p5.derive([
        Replacing.config({}),
        Sliding.config({
          closedClass: $_c2ndmvzijegz40vq.resolve('dropup-closed'),
          openClass: $_c2ndmvzijegz40vq.resolve('dropup-open'),
          shrinkingClass: $_c2ndmvzijegz40vq.resolve('dropup-shrinking'),
          growingClass: $_c2ndmvzijegz40vq.resolve('dropup-growing'),
          dimension: { property: 'height' },
          onShrunk: function (component) {
            refresh();
            scrollIntoView();
            Replacing.set(component, []);
          },
          onGrown: function (component) {
            refresh();
            scrollIntoView();
          }
        }),
        $_dp0qcmzhjegz40vo.orientation(function (component, data) {
          disappear($_b84g4ownjegz40jb.noop);
        })
      ])
    }));
    var appear = function (menu, update, component) {
      if (Sliding.hasShrunk(dropup) === true && Sliding.isTransitioning(dropup) === false) {
        window.requestAnimationFrame(function () {
          update(component);
          Replacing.set(dropup, [menu()]);
          Sliding.grow(dropup);
        });
      }
    };
    var disappear = function (onReadyToShrink) {
      window.requestAnimationFrame(function () {
        onReadyToShrink();
        Sliding.shrink(dropup);
      });
    };
    return {
      appear: appear,
      disappear: disappear,
      component: $_b84g4ownjegz40jb.constant(dropup),
      element: dropup.element
    };
  };
  var $_9rvven159jegz41q0 = { build: build$2 };

  var isDangerous = function (event) {
    return event.raw().which === $_77tdgaztjegz40x3.BACKSPACE()[0] && !$_353rcfwwjegz40kh.contains([
      'input',
      'textarea'
    ], $_bge3bexojegz40n6.name(event.target()));
  };
  var isFirefox = $_fzn4cewojegz40je.detect().browser.isFirefox();
  var settingsSchema = $_fokpo2yijegz40rm.objOfOnly([
    $_cjikoqybjegz40q7.strictFunction('triggerEvent'),
    $_cjikoqybjegz40q7.strictFunction('broadcastEvent'),
    $_cjikoqybjegz40q7.defaulted('stopBackspace', true)
  ]);
  var bindFocus = function (container, handler) {
    if (isFirefox) {
      return $_30qmua141jegz41jw.capture(container, 'focus', handler);
    } else {
      return $_30qmua141jegz41jw.bind(container, 'focusin', handler);
    }
  };
  var bindBlur = function (container, handler) {
    if (isFirefox) {
      return $_30qmua141jegz41jw.capture(container, 'blur', handler);
    } else {
      return $_30qmua141jegz41jw.bind(container, 'focusout', handler);
    }
  };
  var setup$2 = function (container, rawSettings) {
    var settings = $_fokpo2yijegz40rm.asRawOrDie('Getting GUI events settings', settingsSchema, rawSettings);
    var pointerEvents = $_fzn4cewojegz40je.detect().deviceType.isTouch() ? [
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart'
    ] : [
      'mousedown',
      'mouseup',
      'mouseover',
      'mousemove',
      'mouseout',
      'click'
    ];
    var tapEvent = $_a3dbo148jegz41kz.monitor(settings);
    var simpleEvents = $_353rcfwwjegz40kh.map(pointerEvents.concat([
      'selectstart',
      'input',
      'contextmenu',
      'change',
      'transitionend',
      'dragstart',
      'dragover',
      'drop'
    ]), function (type) {
      return $_30qmua141jegz41jw.bind(container, type, function (event) {
        tapEvent.fireIfReady(event, type).each(function (tapStopped) {
          if (tapStopped)
            event.kill();
        });
        var stopped = settings.triggerEvent(type, event);
        if (stopped)
          event.kill();
      });
    });
    var onKeydown = $_30qmua141jegz41jw.bind(container, 'keydown', function (event) {
      var stopped = settings.triggerEvent('keydown', event);
      if (stopped)
        event.kill();
      else if (settings.stopBackspace === true && isDangerous(event)) {
        event.prevent();
      }
    });
    var onFocusIn = bindFocus(container, function (event) {
      var stopped = settings.triggerEvent('focusin', event);
      if (stopped)
        event.kill();
    });
    var onFocusOut = bindBlur(container, function (event) {
      var stopped = settings.triggerEvent('focusout', event);
      if (stopped)
        event.kill();
      setTimeout(function () {
        settings.triggerEvent($_f4n44rwljegz40j4.postBlur(), event);
      }, 0);
    });
    var defaultView = $_6rauxox7jegz40ll.defaultView(container);
    var onWindowScroll = $_30qmua141jegz41jw.bind(defaultView, 'scroll', function (event) {
      var stopped = settings.broadcastEvent($_f4n44rwljegz40j4.windowScroll(), event);
      if (stopped)
        event.kill();
    });
    var unbind = function () {
      $_353rcfwwjegz40kh.each(simpleEvents, function (e) {
        e.unbind();
      });
      onKeydown.unbind();
      onFocusIn.unbind();
      onFocusOut.unbind();
      onWindowScroll.unbind();
    };
    return { unbind: unbind };
  };
  var $_641frq15hjegz41ri = { setup: setup$2 };

  var derive$3 = function (rawEvent, rawTarget) {
    var source = $_75j08mxwjegz40o2.readOptFrom(rawEvent, 'target').map(function (getTarget) {
      return getTarget();
    }).getOr(rawTarget);
    return Cell(source);
  };
  var $_4hb62g15jjegz41rx = { derive: derive$3 };

  var fromSource = function (event, source) {
    var stopper = Cell(false);
    var cutter = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    var cut = function () {
      cutter.set(true);
    };
    return {
      stop: stop,
      cut: cut,
      isStopped: stopper.get,
      isCut: cutter.get,
      event: $_b84g4ownjegz40jb.constant(event),
      setSource: source.set,
      getSource: source.get
    };
  };
  var fromExternal = function (event) {
    var stopper = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    return {
      stop: stop,
      cut: $_b84g4ownjegz40jb.noop,
      isStopped: stopper.get,
      isCut: $_b84g4ownjegz40jb.constant(false),
      event: $_b84g4ownjegz40jb.constant(event),
      setTarget: $_b84g4ownjegz40jb.die(new Error('Cannot set target of a broadcasted event')),
      getTarget: $_b84g4ownjegz40jb.die(new Error('Cannot get target of a broadcasted event'))
    };
  };
  var fromTarget = function (event, target) {
    var source = Cell(target);
    return fromSource(event, source);
  };
  var $_fgwnhv15kjegz41s0 = {
    fromSource: fromSource,
    fromExternal: fromExternal,
    fromTarget: fromTarget
  };

  var adt$6 = $_4n552cy0jegz40oo.generate([
    { stopped: [] },
    { resume: ['element'] },
    { complete: [] }
  ]);
  var doTriggerHandler = function (lookup, eventType, rawEvent, target, source, logger) {
    var handler = lookup(eventType, target);
    var simulatedEvent = $_fgwnhv15kjegz41s0.fromSource(rawEvent, source);
    return handler.fold(function () {
      logger.logEventNoHandlers(eventType, target);
      return adt$6.complete();
    }, function (handlerInfo) {
      var descHandler = handlerInfo.descHandler();
      var eventHandler = $_2p3fyv138jegz41f9.getHandler(descHandler);
      eventHandler(simulatedEvent);
      if (simulatedEvent.isStopped()) {
        logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.stopped();
      } else if (simulatedEvent.isCut()) {
        logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.complete();
      } else
        return $_6rauxox7jegz40ll.parent(handlerInfo.element()).fold(function () {
          logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.complete();
        }, function (parent) {
          logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.resume(parent);
        });
    });
  };
  var doTriggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, source, logger) {
    return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(function () {
      return true;
    }, function (parent) {
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
    }, function () {
      return false;
    });
  };
  var triggerHandler = function (lookup, eventType, rawEvent, target, logger) {
    var source = $_4hb62g15jjegz41rx.derive(rawEvent, target);
    return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
  };
  var broadcast = function (listeners, rawEvent, logger) {
    var simulatedEvent = $_fgwnhv15kjegz41s0.fromExternal(rawEvent);
    $_353rcfwwjegz40kh.each(listeners, function (listener) {
      var descHandler = listener.descHandler();
      var handler = $_2p3fyv138jegz41f9.getHandler(descHandler);
      handler(simulatedEvent);
    });
    return simulatedEvent.isStopped();
  };
  var triggerUntilStopped = function (lookup, eventType, rawEvent, logger) {
    var rawTarget = rawEvent.target();
    return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
  };
  var triggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, logger) {
    var source = $_4hb62g15jjegz41rx.derive(rawEvent, rawTarget);
    return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
  };
  var $_4627cd15ijegz41rs = {
    triggerHandler: triggerHandler,
    triggerUntilStopped: triggerUntilStopped,
    triggerOnUntilStopped: triggerOnUntilStopped,
    broadcast: broadcast
  };

  var closest$4 = function (target, transform, isRoot) {
    var delegate = $_g30u4yyzjegz40t7.closest(target, function (elem) {
      return transform(elem).isSome();
    }, isRoot);
    return delegate.bind(transform);
  };
  var $_3wbszd15njegz41sg = { closest: closest$4 };

  var eventHandler = $_14zxckx8jegz40lu.immutable('element', 'descHandler');
  var messageHandler = function (id, handler) {
    return {
      id: $_b84g4ownjegz40jb.constant(id),
      descHandler: $_b84g4ownjegz40jb.constant(handler)
    };
  };
  function EventRegistry () {
    var registry = {};
    var registerId = function (extraArgs, id, events) {
      $_4vnyr3x4jegz40l5.each(events, function (v, k) {
        var handlers = registry[k] !== undefined ? registry[k] : {};
        handlers[id] = $_2p3fyv138jegz41f9.curryArgs(v, extraArgs);
        registry[k] = handlers;
      });
    };
    var findHandler = function (handlers, elem) {
      return $_94kpee111jegz413l.read(elem).fold(function (err) {
        return Option.none();
      }, function (id) {
        var reader = $_75j08mxwjegz40o2.readOpt(id);
        return handlers.bind(reader).map(function (descHandler) {
          return eventHandler(elem, descHandler);
        });
      });
    };
    var filterByType = function (type) {
      return $_75j08mxwjegz40o2.readOptFrom(registry, type).map(function (handlers) {
        return $_4vnyr3x4jegz40l5.mapToArray(handlers, function (f, id) {
          return messageHandler(id, f);
        });
      }).getOr([]);
    };
    var find = function (isAboveRoot, type, target) {
      var readType = $_75j08mxwjegz40o2.readOpt(type);
      var handlers = readType(registry);
      return $_3wbszd15njegz41sg.closest(target, function (elem) {
        return findHandler(handlers, elem);
      }, isAboveRoot);
    };
    var unregisterId = function (id) {
      $_4vnyr3x4jegz40l5.each(registry, function (handlersById, eventName) {
        if (handlersById.hasOwnProperty(id))
          delete handlersById[id];
      });
    };
    return {
      registerId: registerId,
      unregisterId: unregisterId,
      filterByType: filterByType,
      find: find
    };
  }

  function Registry () {
    var events = EventRegistry();
    var components = {};
    var readOrTag = function (component) {
      var elem = component.element();
      return $_94kpee111jegz413l.read(elem).fold(function () {
        return $_94kpee111jegz413l.write('uid-', component.element());
      }, function (uid) {
        return uid;
      });
    };
    var failOnDuplicate = function (component, tagId) {
      var conflict = components[tagId];
      if (conflict === component)
        unregister(component);
      else
        throw new Error('The tagId "' + tagId + '" is already used by: ' + $_clwaugxqjegz40nk.element(conflict.element()) + '\nCannot use it for: ' + $_clwaugxqjegz40nk.element(component.element()) + '\n' + 'The conflicting element is' + ($_br73zsxnjegz40n3.inBody(conflict.element()) ? ' ' : ' not ') + 'already in the DOM');
    };
    var register = function (component) {
      var tagId = readOrTag(component);
      if ($_75j08mxwjegz40o2.hasKey(components, tagId))
        failOnDuplicate(component, tagId);
      var extraArgs = [component];
      events.registerId(extraArgs, tagId, component.events());
      components[tagId] = component;
    };
    var unregister = function (component) {
      $_94kpee111jegz413l.read(component.element()).each(function (tagId) {
        components[tagId] = undefined;
        events.unregisterId(tagId);
      });
    };
    var filter = function (type) {
      return events.filterByType(type);
    };
    var find = function (isAboveRoot, type, target) {
      return events.find(isAboveRoot, type, target);
    };
    var getById = function (id) {
      return $_75j08mxwjegz40o2.readOpt(id)(components);
    };
    return {
      find: find,
      filter: filter,
      register: register,
      unregister: unregister,
      getById: getById
    };
  }

  var create$6 = function () {
    var root = $_d16c6e12xjegz41cw.build(Container.sketch({ dom: { tag: 'div' } }));
    return takeover(root);
  };
  var takeover = function (root) {
    var isAboveRoot = function (el) {
      return $_6rauxox7jegz40ll.parent(root.element()).fold(function () {
        return true;
      }, function (parent) {
        return $_47k0n6xdjegz40mb.eq(el, parent);
      });
    };
    var registry = Registry();
    var lookup = function (eventName, target) {
      return registry.find(isAboveRoot, eventName, target);
    };
    var domEvents = $_641frq15hjegz41ri.setup(root.element(), {
      triggerEvent: function (eventName, event) {
        return $_8sp4i4xpjegz40na.monitorEvent(eventName, event.target(), function (logger) {
          return $_4627cd15ijegz41rs.triggerUntilStopped(lookup, eventName, event, logger);
        });
      },
      broadcastEvent: function (eventName, event) {
        var listeners = registry.filter(eventName);
        return $_4627cd15ijegz41rs.broadcast(listeners, event);
      }
    });
    var systemApi = SystemApi({
      debugInfo: $_b84g4ownjegz40jb.constant('real'),
      triggerEvent: function (customType, target, data) {
        $_8sp4i4xpjegz40na.monitorEvent(customType, target, function (logger) {
          $_4627cd15ijegz41rs.triggerOnUntilStopped(lookup, customType, data, target, logger);
        });
      },
      triggerFocus: function (target, originator) {
        $_94kpee111jegz413l.read(target).fold(function () {
          $_7nx9zfyxjegz40t1.focus(target);
        }, function (_alloyId) {
          $_8sp4i4xpjegz40na.monitorEvent($_f4n44rwljegz40j4.focus(), target, function (logger) {
            $_4627cd15ijegz41rs.triggerHandler(lookup, $_f4n44rwljegz40j4.focus(), {
              originator: $_b84g4ownjegz40jb.constant(originator),
              target: $_b84g4ownjegz40jb.constant(target)
            }, target, logger);
          });
        });
      },
      triggerEscape: function (comp, simulatedEvent) {
        systemApi.triggerEvent('keydown', comp.element(), simulatedEvent.event());
      },
      getByUid: function (uid) {
        return getByUid(uid);
      },
      getByDom: function (elem) {
        return getByDom(elem);
      },
      build: $_d16c6e12xjegz41cw.build,
      addToGui: function (c) {
        add(c);
      },
      removeFromGui: function (c) {
        remove(c);
      },
      addToWorld: function (c) {
        addToWorld(c);
      },
      removeFromWorld: function (c) {
        removeFromWorld(c);
      },
      broadcast: function (message) {
        broadcast(message);
      },
      broadcastOn: function (channels, message) {
        broadcastOn(channels, message);
      }
    });
    var addToWorld = function (component) {
      component.connect(systemApi);
      if (!$_bge3bexojegz40n6.isText(component.element())) {
        registry.register(component);
        $_353rcfwwjegz40kh.each(component.components(), addToWorld);
        systemApi.triggerEvent($_f4n44rwljegz40j4.systemInit(), component.element(), { target: $_b84g4ownjegz40jb.constant(component.element()) });
      }
    };
    var removeFromWorld = function (component) {
      if (!$_bge3bexojegz40n6.isText(component.element())) {
        $_353rcfwwjegz40kh.each(component.components(), removeFromWorld);
        registry.unregister(component);
      }
      component.disconnect();
    };
    var add = function (component) {
      $_aoct93x5jegz40l9.attach(root, component);
    };
    var remove = function (component) {
      $_aoct93x5jegz40l9.detach(component);
    };
    var destroy = function () {
      domEvents.unbind();
      $_9j27zexljegz40mz.remove(root.element());
    };
    var broadcastData = function (data) {
      var receivers = registry.filter($_f4n44rwljegz40j4.receive());
      $_353rcfwwjegz40kh.each(receivers, function (receiver) {
        var descHandler = receiver.descHandler();
        var handler = $_2p3fyv138jegz41f9.getHandler(descHandler);
        handler(data);
      });
    };
    var broadcast = function (message) {
      broadcastData({
        universal: $_b84g4ownjegz40jb.constant(true),
        data: $_b84g4ownjegz40jb.constant(message)
      });
    };
    var broadcastOn = function (channels, message) {
      broadcastData({
        universal: $_b84g4ownjegz40jb.constant(false),
        channels: $_b84g4ownjegz40jb.constant(channels),
        data: $_b84g4ownjegz40jb.constant(message)
      });
    };
    var getByUid = function (uid) {
      return registry.getById(uid).fold(function () {
        return Result.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
      }, Result.value);
    };
    var getByDom = function (elem) {
      return $_94kpee111jegz413l.read(elem).bind(getByUid);
    };
    addToWorld(root);
    return {
      root: $_b84g4ownjegz40jb.constant(root),
      element: root.element,
      destroy: destroy,
      add: add,
      remove: remove,
      getByUid: getByUid,
      getByDom: getByDom,
      addToWorld: addToWorld,
      removeFromWorld: removeFromWorld,
      broadcast: broadcast,
      broadcastOn: broadcastOn
    };
  };
  var $_fx43ac15gjegz41r0 = {
    create: create$6,
    takeover: takeover
  };

  var READ_ONLY_MODE_CLASS = $_b84g4ownjegz40jb.constant($_c2ndmvzijegz40vq.resolve('readonly-mode'));
  var EDIT_MODE_CLASS = $_b84g4ownjegz40jb.constant($_c2ndmvzijegz40vq.resolve('edit-mode'));
  function OuterContainer (spec) {
    var root = $_d16c6e12xjegz41cw.build(Container.sketch({
      dom: { classes: [$_c2ndmvzijegz40vq.resolve('outer-container')].concat(spec.classes) },
      containerBehaviours: $_2s5cqny6jegz40p5.derive([Swapping.config({
          alpha: READ_ONLY_MODE_CLASS(),
          omega: EDIT_MODE_CLASS()
        })])
    }));
    return $_fx43ac15gjegz41r0.takeover(root);
  }

  function AndroidRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_c2ndmvzijegz40vq.resolve('android-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_2shn2412sjegz41c3.api();
    var switchToEdit = $_5ft15158jegz41pu.makeEditSwitch(webapp);
    var socket = $_5ft15158jegz41pu.makeSocket();
    var dropup = $_9rvven159jegz41q0.build($_b84g4ownjegz40jb.noop, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_6yae70144jegz41k6.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        w.exit();
        Replacing.remove(socket, switchToEdit);
      });
    };
    var updateMode = function (readOnly) {
      $_5ft15158jegz41pu.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_b84g4ownjegz40jb.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_b84g4ownjegz40jb.constant(socket),
      dropup: $_b84g4ownjegz40jb.constant(dropup)
    };
  }

  var input = function (parent, operation) {
    var input = $_30i27zxjjegz40mu.fromTag('input');
    $_flvpsp107jegz40ye.setAll(input, {
      opacity: '0',
      position: 'absolute',
      top: '-1000px',
      left: '-1000px'
    });
    $_4mdlzcx6jegz40lj.append(parent, input);
    $_7nx9zfyxjegz40t1.focus(input);
    operation(input);
    $_9j27zexljegz40mz.remove(input);
  };
  var $_fibo0515sjegz41tb = { input: input };

  var refreshInput = function (input) {
    var start = input.dom().selectionStart;
    var end = input.dom().selectionEnd;
    var dir = input.dom().selectionDirection;
    setTimeout(function () {
      input.dom().setSelectionRange(start, end, dir);
      $_7nx9zfyxjegz40t1.focus(input);
    }, 50);
  };
  var refresh = function (winScope) {
    var sel = winScope.getSelection();
    if (sel.rangeCount > 0) {
      var br = sel.getRangeAt(0);
      var r = winScope.document.createRange();
      r.setStart(br.startContainer, br.startOffset);
      r.setEnd(br.endContainer, br.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  var $_bxtdnf15ujegz41tj = {
    refreshInput: refreshInput,
    refresh: refresh
  };

  var resume$1 = function (cWin, frame) {
    $_7nx9zfyxjegz40t1.active().each(function (active) {
      if (!$_47k0n6xdjegz40mb.eq(active, frame)) {
        $_7nx9zfyxjegz40t1.blur(active);
      }
    });
    cWin.focus();
    $_7nx9zfyxjegz40t1.focus($_30i27zxjjegz40mu.fromDom(cWin.document.body));
    $_bxtdnf15ujegz41tj.refresh(cWin);
  };
  var $_ck759r15tjegz41tg = { resume: resume$1 };

  var stubborn = function (outerBody, cWin, page, frame) {
    var toEditing = function () {
      $_ck759r15tjegz41tg.resume(cWin, frame);
    };
    var toReading = function () {
      $_fibo0515sjegz41tb.input(outerBody, $_7nx9zfyxjegz40t1.blur);
    };
    var captureInput = $_30qmua141jegz41jw.bind(page, 'keydown', function (evt) {
      if (!$_353rcfwwjegz40kh.contains([
          'input',
          'textarea'
        ], $_bge3bexojegz40n6.name(evt.target()))) {
        toEditing();
      }
    });
    var onToolbarTouch = function () {
    };
    var destroy = function () {
      captureInput.unbind();
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: destroy
    };
  };
  var timid = function (outerBody, cWin, page, frame) {
    var dismissKeyboard = function () {
      $_7nx9zfyxjegz40t1.blur(frame);
    };
    var onToolbarTouch = function () {
      dismissKeyboard();
    };
    var toReading = function () {
      dismissKeyboard();
    };
    var toEditing = function () {
      $_ck759r15tjegz41tg.resume(cWin, frame);
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: $_b84g4ownjegz40jb.noop
    };
  };
  var $_3peek015rjegz41t6 = {
    stubborn: stubborn,
    timid: timid
  };

  var initEvents$1 = function (editorApi, iosApi, toolstrip, socket, dropup) {
    var saveSelectionFirst = function () {
      iosApi.run(function (api) {
        api.highlightSelection();
      });
    };
    var refreshIosSelection = function () {
      iosApi.run(function (api) {
        api.refreshSelection();
      });
    };
    var scrollToY = function (yTop, height) {
      var y = yTop - socket.dom().scrollTop;
      iosApi.run(function (api) {
        api.scrollIntoView(y, y + height);
      });
    };
    var scrollToElement = function (target) {
      scrollToY(iosApi, socket);
    };
    var scrollToCursor = function () {
      editorApi.getCursorBox().each(function (box) {
        scrollToY(box.top(), box.height());
      });
    };
    var clearSelection = function () {
      iosApi.run(function (api) {
        api.clearSelection();
      });
    };
    var clearAndRefresh = function () {
      clearSelection();
      refreshThrottle.throttle();
    };
    var refreshView = function () {
      scrollToCursor();
      iosApi.run(function (api) {
        api.syncHeight();
      });
    };
    var reposition = function () {
      var toolbarHeight = $_961ns8106jegz40yc.get(toolstrip);
      iosApi.run(function (api) {
        api.setViewportOffset(toolbarHeight);
      });
      refreshIosSelection();
      refreshView();
    };
    var toEditing = function () {
      iosApi.run(function (api) {
        api.toEditing();
      });
    };
    var toReading = function () {
      iosApi.run(function (api) {
        api.toReading();
      });
    };
    var onToolbarTouch = function (event) {
      iosApi.run(function (api) {
        api.onToolbarTouch(event);
      });
    };
    var tapping = $_d5t77j147jegz41kv.monitor(editorApi);
    var refreshThrottle = $_ftxq9b150jegz41og.last(refreshView, 300);
    var listeners = [
      editorApi.onKeyup(clearAndRefresh),
      editorApi.onNodeChanged(refreshIosSelection),
      editorApi.onDomChanged(refreshThrottle.throttle),
      editorApi.onDomChanged(refreshIosSelection),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        refreshThrottle.throttle();
      }),
      editorApi.onScrollToElement(function (event) {
        scrollToElement(event.element());
      }),
      editorApi.onToEditing(toEditing),
      editorApi.onToReading(toReading),
      $_30qmua141jegz41jw.bind(editorApi.doc(), 'touchend', function (touchEvent) {
        if ($_47k0n6xdjegz40mb.eq(editorApi.html(), touchEvent.target()) || $_47k0n6xdjegz40mb.eq(editorApi.body(), touchEvent.target())) {
        }
      }),
      $_30qmua141jegz41jw.bind(toolstrip, 'transitionend', function (transitionEvent) {
        if (transitionEvent.raw().propertyName === 'height') {
          reposition();
        }
      }),
      $_30qmua141jegz41jw.capture(toolstrip, 'touchstart', function (touchEvent) {
        saveSelectionFirst();
        onToolbarTouch(touchEvent);
        editorApi.onTouchToolstrip();
      }),
      $_30qmua141jegz41jw.bind(editorApi.body(), 'touchstart', function (evt) {
        clearSelection();
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_30qmua141jegz41jw.bind(editorApi.body(), 'click', function (event) {
        event.kill();
      }),
      $_30qmua141jegz41jw.bind(toolstrip, 'touchmove', function () {
        editorApi.onToolbarScrollStart();
      })
    ];
    var destroy = function () {
      $_353rcfwwjegz40kh.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_erv4yb15vjegz41tm = { initEvents: initEvents$1 };

  function FakeSelection (win, frame) {
    var doc = win.document;
    var container = $_30i27zxjjegz40mu.fromTag('div');
    $_aoqcjmyrjegz40sq.add(container, $_c2ndmvzijegz40vq.resolve('unfocused-selections'));
    $_4mdlzcx6jegz40lj.append($_30i27zxjjegz40mu.fromDom(doc.documentElement), container);
    var onTouch = $_30qmua141jegz41jw.bind(container, 'touchstart', function (event) {
      event.prevent();
      $_ck759r15tjegz41tg.resume(win, frame);
      clear();
    });
    var make = function (rectangle) {
      var span = $_30i27zxjjegz40mu.fromTag('span');
      $_11n0sf13bjegz41fx.add(span, [
        $_c2ndmvzijegz40vq.resolve('layer-editor'),
        $_c2ndmvzijegz40vq.resolve('unfocused-selection')
      ]);
      $_flvpsp107jegz40ye.setAll(span, {
        left: rectangle.left() + 'px',
        top: rectangle.top() + 'px',
        width: rectangle.width() + 'px',
        height: rectangle.height() + 'px'
      });
      return span;
    };
    var update = function () {
      clear();
      var rectangles = $_4rcy5d14cjegz41lg.getRectangles(win);
      var spans = $_353rcfwwjegz40kh.map(rectangles, make);
      $_89tv8vxmjegz40n1.append(container, spans);
    };
    var clear = function () {
      $_9j27zexljegz40mz.empty(container);
    };
    var destroy = function () {
      onTouch.unbind();
      $_9j27zexljegz40mz.remove(container);
    };
    var isActive = function () {
      return $_6rauxox7jegz40ll.children(container).length > 0;
    };
    return {
      update: update,
      isActive: isActive,
      destroy: destroy,
      clear: clear
    };
  }

  var nu$8 = function (baseFn) {
    var data = Option.none();
    var callbacks = [];
    var map = function (f) {
      return nu$8(function (nCallback) {
        get(function (data) {
          nCallback(f(data));
        });
      });
    };
    var get = function (nCallback) {
      if (isReady())
        call(nCallback);
      else
        callbacks.push(nCallback);
    };
    var set = function (x) {
      data = Option.some(x);
      run(callbacks);
      callbacks = [];
    };
    var isReady = function () {
      return data.isSome();
    };
    var run = function (cbs) {
      $_353rcfwwjegz40kh.each(cbs, call);
    };
    var call = function (cb) {
      data.each(function (x) {
        setTimeout(function () {
          cb(x);
        }, 0);
      });
    };
    baseFn(set);
    return {
      get: get,
      map: map,
      isReady: isReady
    };
  };
  var pure$1 = function (a) {
    return nu$8(function (callback) {
      callback(a);
    });
  };
  var LazyValue = {
    nu: nu$8,
    pure: pure$1
  };

  var bounce = function (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var me = this;
      setTimeout(function () {
        f.apply(me, args);
      }, 0);
    };
  };
  var $_9hoy06161jegz41um = { bounce: bounce };

  var nu$9 = function (baseFn) {
    var get = function (callback) {
      baseFn($_9hoy06161jegz41um.bounce(callback));
    };
    var map = function (fab) {
      return nu$9(function (callback) {
        get(function (a) {
          var value = fab(a);
          callback(value);
        });
      });
    };
    var bind = function (aFutureB) {
      return nu$9(function (callback) {
        get(function (a) {
          aFutureB(a).get(callback);
        });
      });
    };
    var anonBind = function (futureB) {
      return nu$9(function (callback) {
        get(function (a) {
          futureB.get(callback);
        });
      });
    };
    var toLazy = function () {
      return LazyValue.nu(get);
    };
    return {
      map: map,
      bind: bind,
      anonBind: anonBind,
      toLazy: toLazy,
      get: get
    };
  };
  var pure$2 = function (a) {
    return nu$9(function (callback) {
      callback(a);
    });
  };
  var Future = {
    nu: nu$9,
    pure: pure$2
  };

  var adjust = function (value, destination, amount) {
    if (Math.abs(value - destination) <= amount) {
      return Option.none();
    } else if (value < destination) {
      return Option.some(value + amount);
    } else {
      return Option.some(value - amount);
    }
  };
  var create$7 = function () {
    var interval = null;
    var animate = function (getCurrent, destination, amount, increment, doFinish, rate) {
      var finished = false;
      var finish = function (v) {
        finished = true;
        doFinish(v);
      };
      clearInterval(interval);
      var abort = function (v) {
        clearInterval(interval);
        finish(v);
      };
      interval = setInterval(function () {
        var value = getCurrent();
        adjust(value, destination, amount).fold(function () {
          clearInterval(interval);
          finish(destination);
        }, function (s) {
          increment(s, abort);
          if (!finished) {
            var newValue = getCurrent();
            if (newValue !== s || Math.abs(newValue - destination) > Math.abs(value - destination)) {
              clearInterval(interval);
              finish(destination);
            }
          }
        });
      }, rate);
    };
    return { animate: animate };
  };
  var $_1a94oz162jegz41ut = {
    create: create$7,
    adjust: adjust
  };

  var findDevice = function (deviceWidth, deviceHeight) {
    var devices = [
      {
        width: 320,
        height: 480,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 320,
        height: 568,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 375,
        height: 667,
        keyboard: {
          portrait: 305,
          landscape: 240
        }
      },
      {
        width: 414,
        height: 736,
        keyboard: {
          portrait: 320,
          landscape: 240
        }
      },
      {
        width: 768,
        height: 1024,
        keyboard: {
          portrait: 320,
          landscape: 400
        }
      },
      {
        width: 1024,
        height: 1366,
        keyboard: {
          portrait: 380,
          landscape: 460
        }
      }
    ];
    return $_88eph0y4jegz40p1.findMap(devices, function (device) {
      return deviceWidth <= device.width && deviceHeight <= device.height ? Option.some(device.keyboard) : Option.none();
    }).getOr({
      portrait: deviceHeight / 5,
      landscape: deviceWidth / 4
    });
  };
  var $_e47mjf165jegz41va = { findDevice: findDevice };

  var softKeyboardLimits = function (outerWindow) {
    return $_e47mjf165jegz41va.findDevice(outerWindow.screen.width, outerWindow.screen.height);
  };
  var accountableKeyboardHeight = function (outerWindow) {
    var portrait = $_600vpe140jegz41jq.get(outerWindow).isPortrait();
    var limits = softKeyboardLimits(outerWindow);
    var keyboard = portrait ? limits.portrait : limits.landscape;
    var visualScreenHeight = portrait ? outerWindow.screen.height : outerWindow.screen.width;
    return visualScreenHeight - outerWindow.innerHeight > keyboard ? 0 : keyboard;
  };
  var getGreenzone = function (socket, dropup) {
    var outerWindow = $_6rauxox7jegz40ll.owner(socket).dom().defaultView;
    var viewportHeight = $_961ns8106jegz40yc.get(socket) + $_961ns8106jegz40yc.get(dropup);
    var acc = accountableKeyboardHeight(outerWindow);
    return viewportHeight - acc;
  };
  var updatePadding = function (contentBody, socket, dropup) {
    var greenzoneHeight = getGreenzone(socket, dropup);
    var deltaHeight = $_961ns8106jegz40yc.get(socket) + $_961ns8106jegz40yc.get(dropup) - greenzoneHeight;
    $_flvpsp107jegz40ye.set(contentBody, 'padding-bottom', deltaHeight + 'px');
  };
  var $_8eta4o164jegz41v5 = {
    getGreenzone: getGreenzone,
    updatePadding: updatePadding
  };

  var fixture = $_4n552cy0jegz40oo.generate([
    {
      fixed: [
        'element',
        'property',
        'offsetY'
      ]
    },
    {
      scroller: [
        'element',
        'offsetY'
      ]
    }
  ]);
  var yFixedData = 'data-' + $_c2ndmvzijegz40vq.resolve('position-y-fixed');
  var yFixedProperty = 'data-' + $_c2ndmvzijegz40vq.resolve('y-property');
  var yScrollingData = 'data-' + $_c2ndmvzijegz40vq.resolve('scrolling');
  var windowSizeData = 'data-' + $_c2ndmvzijegz40vq.resolve('last-window-height');
  var getYFixedData = function (element) {
    return $_dhznaj14bjegz41le.safeParse(element, yFixedData);
  };
  var getYFixedProperty = function (element) {
    return $_bcxlrzxvjegz40nw.get(element, yFixedProperty);
  };
  var getLastWindowSize = function (element) {
    return $_dhznaj14bjegz41le.safeParse(element, windowSizeData);
  };
  var classifyFixed = function (element, offsetY) {
    var prop = getYFixedProperty(element);
    return fixture.fixed(element, prop, offsetY);
  };
  var classifyScrolling = function (element, offsetY) {
    return fixture.scroller(element, offsetY);
  };
  var classify = function (element) {
    var offsetY = getYFixedData(element);
    var classifier = $_bcxlrzxvjegz40nw.get(element, yScrollingData) === 'true' ? classifyScrolling : classifyFixed;
    return classifier(element, offsetY);
  };
  var findFixtures = function (container) {
    var candidates = $_7opypzzzjegz40xs.descendants(container, '[' + yFixedData + ']');
    return $_353rcfwwjegz40kh.map(candidates, classify);
  };
  var takeoverToolbar = function (toolbar) {
    var oldToolbarStyle = $_bcxlrzxvjegz40nw.get(toolbar, 'style');
    $_flvpsp107jegz40ye.setAll(toolbar, {
      position: 'absolute',
      top: '0px'
    });
    $_bcxlrzxvjegz40nw.set(toolbar, yFixedData, '0px');
    $_bcxlrzxvjegz40nw.set(toolbar, yFixedProperty, 'top');
    var restore = function () {
      $_bcxlrzxvjegz40nw.set(toolbar, 'style', oldToolbarStyle || '');
      $_bcxlrzxvjegz40nw.remove(toolbar, yFixedData);
      $_bcxlrzxvjegz40nw.remove(toolbar, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverViewport = function (toolbarHeight, height, viewport) {
    var oldViewportStyle = $_bcxlrzxvjegz40nw.get(viewport, 'style');
    $_5p86jj13yjegz41jj.register(viewport);
    $_flvpsp107jegz40ye.setAll(viewport, {
      position: 'absolute',
      height: height + 'px',
      width: '100%',
      top: toolbarHeight + 'px'
    });
    $_bcxlrzxvjegz40nw.set(viewport, yFixedData, toolbarHeight + 'px');
    $_bcxlrzxvjegz40nw.set(viewport, yScrollingData, 'true');
    $_bcxlrzxvjegz40nw.set(viewport, yFixedProperty, 'top');
    var restore = function () {
      $_5p86jj13yjegz41jj.deregister(viewport);
      $_bcxlrzxvjegz40nw.set(viewport, 'style', oldViewportStyle || '');
      $_bcxlrzxvjegz40nw.remove(viewport, yFixedData);
      $_bcxlrzxvjegz40nw.remove(viewport, yScrollingData);
      $_bcxlrzxvjegz40nw.remove(viewport, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverDropup = function (dropup, toolbarHeight, viewportHeight) {
    var oldDropupStyle = $_bcxlrzxvjegz40nw.get(dropup, 'style');
    $_flvpsp107jegz40ye.setAll(dropup, {
      position: 'absolute',
      bottom: '0px'
    });
    $_bcxlrzxvjegz40nw.set(dropup, yFixedData, '0px');
    $_bcxlrzxvjegz40nw.set(dropup, yFixedProperty, 'bottom');
    var restore = function () {
      $_bcxlrzxvjegz40nw.set(dropup, 'style', oldDropupStyle || '');
      $_bcxlrzxvjegz40nw.remove(dropup, yFixedData);
      $_bcxlrzxvjegz40nw.remove(dropup, yFixedProperty);
    };
    return { restore: restore };
  };
  var deriveViewportHeight = function (viewport, toolbarHeight, dropupHeight) {
    var outerWindow = $_6rauxox7jegz40ll.owner(viewport).dom().defaultView;
    var winH = outerWindow.innerHeight;
    $_bcxlrzxvjegz40nw.set(viewport, windowSizeData, winH + 'px');
    return winH - toolbarHeight - dropupHeight;
  };
  var takeover$1 = function (viewport, contentBody, toolbar, dropup) {
    var outerWindow = $_6rauxox7jegz40ll.owner(viewport).dom().defaultView;
    var toolbarSetup = takeoverToolbar(toolbar);
    var toolbarHeight = $_961ns8106jegz40yc.get(toolbar);
    var dropupHeight = $_961ns8106jegz40yc.get(dropup);
    var viewportHeight = deriveViewportHeight(viewport, toolbarHeight, dropupHeight);
    var viewportSetup = takeoverViewport(toolbarHeight, viewportHeight, viewport);
    var dropupSetup = takeoverDropup(dropup, toolbarHeight, viewportHeight);
    var isActive = true;
    var restore = function () {
      isActive = false;
      toolbarSetup.restore();
      viewportSetup.restore();
      dropupSetup.restore();
    };
    var isExpanding = function () {
      var currentWinHeight = outerWindow.innerHeight;
      var lastWinHeight = getLastWindowSize(viewport);
      return currentWinHeight > lastWinHeight;
    };
    var refresh = function () {
      if (isActive) {
        var newToolbarHeight = $_961ns8106jegz40yc.get(toolbar);
        var dropupHeight_1 = $_961ns8106jegz40yc.get(dropup);
        var newHeight = deriveViewportHeight(viewport, newToolbarHeight, dropupHeight_1);
        $_bcxlrzxvjegz40nw.set(viewport, yFixedData, newToolbarHeight + 'px');
        $_flvpsp107jegz40ye.set(viewport, 'height', newHeight + 'px');
        $_flvpsp107jegz40ye.set(dropup, 'bottom', -(newToolbarHeight + newHeight + dropupHeight_1) + 'px');
        $_8eta4o164jegz41v5.updatePadding(contentBody, viewport, dropup);
      }
    };
    var setViewportOffset = function (newYOffset) {
      var offsetPx = newYOffset + 'px';
      $_bcxlrzxvjegz40nw.set(viewport, yFixedData, offsetPx);
      refresh();
    };
    $_8eta4o164jegz41v5.updatePadding(contentBody, viewport, dropup);
    return {
      setViewportOffset: setViewportOffset,
      isExpanding: isExpanding,
      isShrinking: $_b84g4ownjegz40jb.not(isExpanding),
      refresh: refresh,
      restore: restore
    };
  };
  var $_2qlqo0163jegz41uw = {
    findFixtures: findFixtures,
    takeover: takeover$1,
    getYFixedData: getYFixedData
  };

  var animator = $_1a94oz162jegz41ut.create();
  var ANIMATION_STEP = 15;
  var NUM_TOP_ANIMATION_FRAMES = 10;
  var ANIMATION_RATE = 10;
  var lastScroll = 'data-' + $_c2ndmvzijegz40vq.resolve('last-scroll-top');
  var getTop = function (element) {
    var raw = $_flvpsp107jegz40ye.getRaw(element, 'top').getOr(0);
    return parseInt(raw, 10);
  };
  var getScrollTop = function (element) {
    return parseInt(element.dom().scrollTop, 10);
  };
  var moveScrollAndTop = function (element, destination, finalTop) {
    return Future.nu(function (callback) {
      var getCurrent = $_b84g4ownjegz40jb.curry(getScrollTop, element);
      var update = function (newScroll) {
        element.dom().scrollTop = newScroll;
        $_flvpsp107jegz40ye.set(element, 'top', getTop(element) + ANIMATION_STEP + 'px');
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_flvpsp107jegz40ye.set(element, 'top', finalTop + 'px');
        callback(destination);
      };
      animator.animate(getCurrent, destination, ANIMATION_STEP, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyScroll = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_b84g4ownjegz40jb.curry(getScrollTop, element);
      $_bcxlrzxvjegz40nw.set(element, lastScroll, getCurrent());
      var update = function (newScroll, abort) {
        var previous = $_dhznaj14bjegz41le.safeParse(element, lastScroll);
        if (previous !== element.dom().scrollTop) {
          abort(element.dom().scrollTop);
        } else {
          element.dom().scrollTop = newScroll;
          $_bcxlrzxvjegz40nw.set(element, lastScroll, newScroll);
        }
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_bcxlrzxvjegz40nw.set(element, lastScroll, destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyTop = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_b84g4ownjegz40jb.curry(getTop, element);
      var update = function (newTop) {
        $_flvpsp107jegz40ye.set(element, 'top', newTop + 'px');
      };
      var finish = function () {
        update(destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var updateTop = function (element, amount) {
    var newTop = amount + $_2qlqo0163jegz41uw.getYFixedData(element) + 'px';
    $_flvpsp107jegz40ye.set(element, 'top', newTop);
  };
  var moveWindowScroll = function (toolbar, viewport, destY) {
    var outerWindow = $_6rauxox7jegz40ll.owner(toolbar).dom().defaultView;
    return Future.nu(function (callback) {
      updateTop(toolbar, destY);
      updateTop(viewport, destY);
      outerWindow.scrollTo(0, destY);
      callback(destY);
    });
  };
  var $_aa9gdk15yjegz41uc = {
    moveScrollAndTop: moveScrollAndTop,
    moveOnlyScroll: moveOnlyScroll,
    moveOnlyTop: moveOnlyTop,
    moveWindowScroll: moveWindowScroll
  };

  function BackgroundActivity (doAction) {
    var action = Cell(LazyValue.pure({}));
    var start = function (value) {
      var future = LazyValue.nu(function (callback) {
        return doAction(value).get(callback);
      });
      action.set(future);
    };
    var idle = function (g) {
      action.get().get(function () {
        g();
      });
    };
    return {
      start: start,
      idle: idle
    };
  }

  var scrollIntoView = function (cWin, socket, dropup, top, bottom) {
    var greenzone = $_8eta4o164jegz41v5.getGreenzone(socket, dropup);
    var refreshCursor = $_b84g4ownjegz40jb.curry($_bxtdnf15ujegz41tj.refresh, cWin);
    if (top > greenzone || bottom > greenzone) {
      $_aa9gdk15yjegz41uc.moveOnlyScroll(socket, socket.dom().scrollTop - greenzone + bottom).get(refreshCursor);
    } else if (top < 0) {
      $_aa9gdk15yjegz41uc.moveOnlyScroll(socket, socket.dom().scrollTop + top).get(refreshCursor);
    } else {
    }
  };
  var $_8uvwd4167jegz41vh = { scrollIntoView: scrollIntoView };

  var par = function (asyncValues, nu) {
    return nu(function (callback) {
      var r = [];
      var count = 0;
      var cb = function (i) {
        return function (value) {
          r[i] = value;
          count++;
          if (count >= asyncValues.length) {
            callback(r);
          }
        };
      };
      if (asyncValues.length === 0) {
        callback([]);
      } else {
        $_353rcfwwjegz40kh.each(asyncValues, function (asyncValue, i) {
          asyncValue.get(cb(i));
        });
      }
    });
  };
  var $_bnh13e16ajegz41vs = { par: par };

  var par$1 = function (futures) {
    return $_bnh13e16ajegz41vs.par(futures, Future.nu);
  };
  var mapM = function (array, fn) {
    var futures = $_353rcfwwjegz40kh.map(array, fn);
    return par$1(futures);
  };
  var compose$1 = function (f, g) {
    return function (a) {
      return g(a).bind(f);
    };
  };
  var $_9di35r169jegz41vq = {
    par: par$1,
    mapM: mapM,
    compose: compose$1
  };

  var updateFixed = function (element, property, winY, offsetY) {
    var destination = winY + offsetY;
    $_flvpsp107jegz40ye.set(element, property, destination + 'px');
    return Future.pure(offsetY);
  };
  var updateScrollingFixed = function (element, winY, offsetY) {
    var destTop = winY + offsetY;
    var oldProp = $_flvpsp107jegz40ye.getRaw(element, 'top').getOr(offsetY);
    var delta = destTop - parseInt(oldProp, 10);
    var destScroll = element.dom().scrollTop + delta;
    return $_aa9gdk15yjegz41uc.moveScrollAndTop(element, destScroll, destTop);
  };
  var updateFixture = function (fixture, winY) {
    return fixture.fold(function (element, property, offsetY) {
      return updateFixed(element, property, winY, offsetY);
    }, function (element, offsetY) {
      return updateScrollingFixed(element, winY, offsetY);
    });
  };
  var updatePositions = function (container, winY) {
    var fixtures = $_2qlqo0163jegz41uw.findFixtures(container);
    var updates = $_353rcfwwjegz40kh.map(fixtures, function (fixture) {
      return updateFixture(fixture, winY);
    });
    return $_9di35r169jegz41vq.par(updates);
  };
  var $_8q0z66168jegz41vk = { updatePositions: updatePositions };

  var VIEW_MARGIN = 5;
  var register$2 = function (toolstrip, socket, container, outerWindow, structure, cWin) {
    var scroller = BackgroundActivity(function (y) {
      return $_aa9gdk15yjegz41uc.moveWindowScroll(toolstrip, socket, y);
    });
    var scrollBounds = function () {
      var rects = $_4rcy5d14cjegz41lg.getRectangles(cWin);
      return Option.from(rects[0]).bind(function (rect) {
        var viewTop = rect.top() - socket.dom().scrollTop;
        var outside = viewTop > outerWindow.innerHeight + VIEW_MARGIN || viewTop < -VIEW_MARGIN;
        return outside ? Option.some({
          top: $_b84g4ownjegz40jb.constant(viewTop),
          bottom: $_b84g4ownjegz40jb.constant(viewTop + rect.height())
        }) : Option.none();
      });
    };
    var scrollThrottle = $_ftxq9b150jegz41og.last(function () {
      scroller.idle(function () {
        $_8q0z66168jegz41vk.updatePositions(container, outerWindow.pageYOffset).get(function () {
          var extraScroll = scrollBounds();
          extraScroll.each(function (extra) {
            socket.dom().scrollTop = socket.dom().scrollTop + extra.top();
          });
          scroller.start(0);
          structure.refresh();
        });
      });
    }, 1000);
    var onScroll = $_30qmua141jegz41jw.bind($_30i27zxjjegz40mu.fromDom(outerWindow), 'scroll', function () {
      if (outerWindow.pageYOffset < 0) {
        return;
      }
      scrollThrottle.throttle();
    });
    $_8q0z66168jegz41vk.updatePositions(container, outerWindow.pageYOffset).get($_b84g4ownjegz40jb.identity);
    return { unbind: onScroll.unbind };
  };
  var setup$3 = function (bag) {
    var cWin = bag.cWin();
    var ceBody = bag.ceBody();
    var socket = bag.socket();
    var toolstrip = bag.toolstrip();
    var toolbar = bag.toolbar();
    var contentElement = bag.contentElement();
    var keyboardType = bag.keyboardType();
    var outerWindow = bag.outerWindow();
    var dropup = bag.dropup();
    var structure = $_2qlqo0163jegz41uw.takeover(socket, ceBody, toolstrip, dropup);
    var keyboardModel = keyboardType(bag.outerBody(), cWin, $_br73zsxnjegz40n3.body(), contentElement, toolstrip, toolbar);
    var toEditing = function () {
      keyboardModel.toEditing();
      clearSelection();
    };
    var toReading = function () {
      keyboardModel.toReading();
    };
    var onToolbarTouch = function (event) {
      keyboardModel.onToolbarTouch(event);
    };
    var onOrientation = $_600vpe140jegz41jq.onChange(outerWindow, {
      onChange: $_b84g4ownjegz40jb.noop,
      onReady: structure.refresh
    });
    onOrientation.onAdjustment(function () {
      structure.refresh();
    });
    var onResize = $_30qmua141jegz41jw.bind($_30i27zxjjegz40mu.fromDom(outerWindow), 'resize', function () {
      if (structure.isExpanding()) {
        structure.refresh();
      }
    });
    var onScroll = register$2(toolstrip, socket, bag.outerBody(), outerWindow, structure, cWin);
    var unfocusedSelection = FakeSelection(cWin, contentElement);
    var refreshSelection = function () {
      if (unfocusedSelection.isActive()) {
        unfocusedSelection.update();
      }
    };
    var highlightSelection = function () {
      unfocusedSelection.update();
    };
    var clearSelection = function () {
      unfocusedSelection.clear();
    };
    var scrollIntoView = function (top, bottom) {
      $_8uvwd4167jegz41vh.scrollIntoView(cWin, socket, dropup, top, bottom);
    };
    var syncHeight = function () {
      $_flvpsp107jegz40ye.set(contentElement, 'height', contentElement.dom().contentWindow.document.body.scrollHeight + 'px');
    };
    var setViewportOffset = function (newYOffset) {
      structure.setViewportOffset(newYOffset);
      $_aa9gdk15yjegz41uc.moveOnlyTop(socket, newYOffset).get($_b84g4ownjegz40jb.identity);
    };
    var destroy = function () {
      structure.restore();
      onOrientation.destroy();
      onScroll.unbind();
      onResize.unbind();
      keyboardModel.destroy();
      unfocusedSelection.destroy();
      $_fibo0515sjegz41tb.input($_br73zsxnjegz40n3.body(), $_7nx9zfyxjegz40t1.blur);
    };
    return {
      toEditing: toEditing,
      toReading: toReading,
      onToolbarTouch: onToolbarTouch,
      refreshSelection: refreshSelection,
      clearSelection: clearSelection,
      highlightSelection: highlightSelection,
      scrollIntoView: scrollIntoView,
      updateToolbarPadding: $_b84g4ownjegz40jb.noop,
      setViewportOffset: setViewportOffset,
      syncHeight: syncHeight,
      refreshStructure: structure.refresh,
      destroy: destroy
    };
  };
  var $_bqt0u15wjegz41tt = { setup: setup$3 };

  var create$8 = function (platform, mask) {
    var meta = $_d8g3v914yjegz41o4.tag();
    var priorState = $_2shn2412sjegz41c3.value();
    var scrollEvents = $_2shn2412sjegz41c3.value();
    var iosApi = $_2shn2412sjegz41c3.api();
    var iosEvents = $_2shn2412sjegz41c3.api();
    var enter = function () {
      mask.hide();
      var doc = $_30i27zxjjegz40mu.fromDom(document);
      $_2n6rm014wjegz41nk.getActiveApi(platform.editor).each(function (editorApi) {
        priorState.set({
          socketHeight: $_flvpsp107jegz40ye.getRaw(platform.socket, 'height'),
          iframeHeight: $_flvpsp107jegz40ye.getRaw(editorApi.frame(), 'height'),
          outerScroll: document.body.scrollTop
        });
        scrollEvents.set({ exclusives: $_8hgruc157jegz41pi.exclusive(doc, '.' + $_5p86jj13yjegz41jj.scrollable()) });
        $_aoqcjmyrjegz40sq.add(platform.container, $_c2ndmvzijegz40vq.resolve('fullscreen-maximized'));
        $_71b2r014xjegz41ny.clobberStyles(platform.container, editorApi.body());
        meta.maximize();
        $_flvpsp107jegz40ye.set(platform.socket, 'overflow', 'scroll');
        $_flvpsp107jegz40ye.set(platform.socket, '-webkit-overflow-scrolling', 'touch');
        $_7nx9zfyxjegz40t1.focus(editorApi.body());
        var setupBag = $_14zxckx8jegz40lu.immutableBag([
          'cWin',
          'ceBody',
          'socket',
          'toolstrip',
          'toolbar',
          'dropup',
          'contentElement',
          'cursor',
          'keyboardType',
          'isScrolling',
          'outerWindow',
          'outerBody'
        ], []);
        iosApi.set($_bqt0u15wjegz41tt.setup(setupBag({
          cWin: editorApi.win(),
          ceBody: editorApi.body(),
          socket: platform.socket,
          toolstrip: platform.toolstrip,
          toolbar: platform.toolbar,
          dropup: platform.dropup.element(),
          contentElement: editorApi.frame(),
          cursor: $_b84g4ownjegz40jb.noop,
          outerBody: platform.body,
          outerWindow: platform.win,
          keyboardType: $_3peek015rjegz41t6.stubborn,
          isScrolling: function () {
            return scrollEvents.get().exists(function (s) {
              return s.socket.isScrolling();
            });
          }
        })));
        iosApi.run(function (api) {
          api.syncHeight();
        });
        iosEvents.set($_erv4yb15vjegz41tm.initEvents(editorApi, iosApi, platform.toolstrip, platform.socket, platform.dropup));
      });
    };
    var exit = function () {
      meta.restore();
      iosEvents.clear();
      iosApi.clear();
      mask.show();
      priorState.on(function (s) {
        s.socketHeight.each(function (h) {
          $_flvpsp107jegz40ye.set(platform.socket, 'height', h);
        });
        s.iframeHeight.each(function (h) {
          $_flvpsp107jegz40ye.set(platform.editor.getFrame(), 'height', h);
        });
        document.body.scrollTop = s.scrollTop;
      });
      priorState.clear();
      scrollEvents.on(function (s) {
        s.exclusives.unbind();
      });
      scrollEvents.clear();
      $_aoqcjmyrjegz40sq.remove(platform.container, $_c2ndmvzijegz40vq.resolve('fullscreen-maximized'));
      $_71b2r014xjegz41ny.restoreStyles();
      $_5p86jj13yjegz41jj.deregister(platform.toolbar);
      $_flvpsp107jegz40ye.remove(platform.socket, 'overflow');
      $_flvpsp107jegz40ye.remove(platform.socket, '-webkit-overflow-scrolling');
      $_7nx9zfyxjegz40t1.blur(platform.editor.getFrame());
      $_2n6rm014wjegz41nk.getActiveApi(platform.editor).each(function (editorApi) {
        editorApi.clearSelection();
      });
    };
    var refreshStructure = function () {
      iosApi.run(function (api) {
        api.refreshStructure();
      });
    };
    return {
      enter: enter,
      refreshStructure: refreshStructure,
      exit: exit
    };
  };
  var $_9ngxr615qjegz41ss = { create: create$8 };

  var produce$1 = function (raw) {
    var mobile = $_fokpo2yijegz40rm.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    $_flvpsp107jegz40ye.set(mobile.toolstrip, 'width', '100%');
    $_flvpsp107jegz40ye.set(mobile.container, 'position', 'relative');
    var onView = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_d16c6e12xjegz41cw.build($_6gmeon14zjegz41o9.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    var mode = $_9ngxr615qjegz41ss.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: mode.refreshStructure,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_b84g4ownjegz40jb.noop
    };
  };
  var $_63dsnz15pjegz41sn = { produce: produce$1 };

  function IosRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_c2ndmvzijegz40vq.resolve('ios-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_2shn2412sjegz41c3.api();
    var switchToEdit = $_5ft15158jegz41pu.makeEditSwitch(webapp);
    var socket = $_5ft15158jegz41pu.makeSocket();
    var dropup = $_9rvven159jegz41q0.build(function () {
      webapp.run(function (w) {
        w.refreshStructure();
      });
    }, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_63dsnz15pjegz41sn.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        Replacing.remove(socket, switchToEdit);
        w.exit();
      });
    };
    var updateMode = function (readOnly) {
      $_5ft15158jegz41pu.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_b84g4ownjegz40jb.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_b84g4ownjegz40jb.constant(socket),
      dropup: $_b84g4ownjegz40jb.constant(dropup)
    };
  }

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var derive$4 = function (editor) {
    var base = $_75j08mxwjegz40o2.readOptFrom(editor.settings, 'skin_url').fold(function () {
      return EditorManager.baseURL + '/skins/' + 'lightgray';
    }, function (url) {
      return url;
    });
    return {
      content: base + '/content.mobile.min.css',
      ui: base + '/skin.mobile.min.css'
    };
  };
  var $_77jqt916bjegz41vu = { derive: derive$4 };

  var fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ];
  var fireChange$1 = function (realm, command, state) {
    realm.system().broadcastOn([$_5sbjlvz5jegz40tl.formatChanged()], {
      command: command,
      state: state
    });
  };
  var init$5 = function (realm, editor) {
    var allFormats = $_4vnyr3x4jegz40l5.keys(editor.formatter.get());
    $_353rcfwwjegz40kh.each(allFormats, function (command) {
      editor.formatter.formatChanged(command, function (state) {
        fireChange$1(realm, command, state);
      });
    });
    $_353rcfwwjegz40kh.each([
      'ul',
      'ol'
    ], function (command) {
      editor.selection.selectorChanged(command, function (state, data) {
        fireChange$1(realm, command, state);
      });
    });
  };
  var $_fg5kc316djegz41vw = {
    init: init$5,
    fontSizes: $_b84g4ownjegz40jb.constant(fontSizes)
  };

  var fireSkinLoaded = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      editor.fire('SkinLoaded');
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_475cue16ejegz41w0 = { fireSkinLoaded: fireSkinLoaded };

  var READING = $_b84g4ownjegz40jb.constant('toReading');
  var EDITING = $_b84g4ownjegz40jb.constant('toEditing');
  ThemeManager.add('mobile', function (editor) {
    var renderUI = function (args) {
      var cssUrls = $_77jqt916bjegz41vu.derive(editor);
      if ($_88fo4uz4jegz40tk.isSkinDisabled(editor) === false) {
        editor.contentCSS.push(cssUrls.content);
        DOMUtils.DOM.styleSheetLoader.load(cssUrls.ui, $_475cue16ejegz41w0.fireSkinLoaded(editor));
      } else {
        $_475cue16ejegz41w0.fireSkinLoaded(editor)();
      }
      var doScrollIntoView = function () {
        editor.fire('scrollIntoView');
      };
      var wrapper = $_30i27zxjjegz40mu.fromTag('div');
      var realm = $_fzn4cewojegz40je.detect().os.isAndroid() ? AndroidRealm(doScrollIntoView) : IosRealm(doScrollIntoView);
      var original = $_30i27zxjjegz40mu.fromDom(args.targetNode);
      $_4mdlzcx6jegz40lj.after(original, wrapper);
      $_aoct93x5jegz40l9.attachSystem(wrapper, realm.system());
      var findFocusIn = function (elem) {
        return $_7nx9zfyxjegz40t1.search(elem).bind(function (focused) {
          return realm.system().getByDom(focused).toOption();
        });
      };
      var outerWindow = args.targetNode.ownerDocument.defaultView;
      var orientation = $_600vpe140jegz41jq.onChange(outerWindow, {
        onChange: function () {
          var alloy = realm.system();
          alloy.broadcastOn([$_5sbjlvz5jegz40tl.orientationChanged()], { width: $_600vpe140jegz41jq.getActualWidth(outerWindow) });
        },
        onReady: $_b84g4ownjegz40jb.noop
      });
      var setReadOnly = function (readOnlyGroups, mainGroups, ro) {
        if (ro === false) {
          editor.selection.collapse();
        }
        realm.setToolbarGroups(ro ? readOnlyGroups.get() : mainGroups.get());
        editor.setMode(ro === true ? 'readonly' : 'design');
        editor.fire(ro === true ? READING() : EDITING());
        realm.updateMode(ro);
      };
      var bindHandler = function (label, handler) {
        editor.on(label, handler);
        return {
          unbind: function () {
            editor.off(label);
          }
        };
      };
      editor.on('init', function () {
        realm.init({
          editor: {
            getFrame: function () {
              return $_30i27zxjjegz40mu.fromDom(editor.contentAreaContainer.querySelector('iframe'));
            },
            onDomChanged: function () {
              return { unbind: $_b84g4ownjegz40jb.noop };
            },
            onToReading: function (handler) {
              return bindHandler(READING(), handler);
            },
            onToEditing: function (handler) {
              return bindHandler(EDITING(), handler);
            },
            onScrollToCursor: function (handler) {
              editor.on('scrollIntoView', function (tinyEvent) {
                handler(tinyEvent);
              });
              var unbind = function () {
                editor.off('scrollIntoView');
                orientation.destroy();
              };
              return { unbind: unbind };
            },
            onTouchToolstrip: function () {
              hideDropup();
            },
            onTouchContent: function () {
              var toolbar = $_30i27zxjjegz40mu.fromDom(editor.editorContainer.querySelector('.' + $_c2ndmvzijegz40vq.resolve('toolbar')));
              findFocusIn(toolbar).each($_78tntkwkjegz40iy.emitExecute);
              realm.restoreToolbar();
              hideDropup();
            },
            onTapContent: function (evt) {
              var target = evt.target();
              if ($_bge3bexojegz40n6.name(target) === 'img') {
                editor.selection.select(target.dom());
                evt.kill();
              } else if ($_bge3bexojegz40n6.name(target) === 'a') {
                var component = realm.system().getByDom($_30i27zxjjegz40mu.fromDom(editor.editorContainer));
                component.each(function (container) {
                  if (Swapping.isAlpha(container)) {
                    $_aoi2e0z3jegz40tj.openLink(target.dom());
                  }
                });
              }
            }
          },
          container: $_30i27zxjjegz40mu.fromDom(editor.editorContainer),
          socket: $_30i27zxjjegz40mu.fromDom(editor.contentAreaContainer),
          toolstrip: $_30i27zxjjegz40mu.fromDom(editor.editorContainer.querySelector('.' + $_c2ndmvzijegz40vq.resolve('toolstrip'))),
          toolbar: $_30i27zxjjegz40mu.fromDom(editor.editorContainer.querySelector('.' + $_c2ndmvzijegz40vq.resolve('toolbar'))),
          dropup: realm.dropup(),
          alloy: realm.system(),
          translate: $_b84g4ownjegz40jb.noop,
          setReadOnly: function (ro) {
            setReadOnly(readOnlyGroups, mainGroups, ro);
          }
        });
        var hideDropup = function () {
          realm.dropup().disappear(function () {
            realm.system().broadcastOn([$_5sbjlvz5jegz40tl.dropupDismissed()], {});
          });
        };
        $_8sp4i4xpjegz40na.registerInspector('remove this', realm.system());
        var backToMaskGroup = {
          label: 'The first group',
          scrollable: false,
          items: [$_dwz193zjjegz40vs.forToolbar('back', function () {
              editor.selection.collapse();
              realm.exit();
            }, {})]
        };
        var backToReadOnlyGroup = {
          label: 'Back to read only',
          scrollable: false,
          items: [$_dwz193zjjegz40vs.forToolbar('readonly-back', function () {
              setReadOnly(readOnlyGroups, mainGroups, true);
            }, {})]
        };
        var readOnlyGroup = {
          label: 'The read only mode group',
          scrollable: true,
          items: []
        };
        var features = $_caxyiyz6jegz40to.setup(realm, editor);
        var items = $_caxyiyz6jegz40to.detect(editor.settings, features);
        var actionGroup = {
          label: 'the action group',
          scrollable: true,
          items: items
        };
        var extraGroup = {
          label: 'The extra group',
          scrollable: false,
          items: []
        };
        var mainGroups = Cell([
          backToReadOnlyGroup,
          actionGroup,
          extraGroup
        ]);
        var readOnlyGroups = Cell([
          backToMaskGroup,
          readOnlyGroup,
          extraGroup
        ]);
        $_fg5kc316djegz41vw.init(realm, editor);
      });
      return {
        iframeContainer: realm.socket().element().dom(),
        editorContainer: realm.element().dom()
      };
    };
    return {
      getNotificationManagerImpl: function () {
        return {
          open: $_b84g4ownjegz40jb.identity,
          close: $_b84g4ownjegz40jb.noop,
          reposition: $_b84g4ownjegz40jb.noop,
          getArgs: $_b84g4ownjegz40jb.identity
        };
      },
      renderUI: renderUI
    };
  });
  function Theme () {
  }

  return Theme;

}());
})();
