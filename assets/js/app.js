"use strict";
(self["webpackChunkliebling"] = self["webpackChunkliebling"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tryghost/content-api */ "./node_modules/@tryghost/content-api/es/content-api.js");
/* harmony import */ var fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fuse.js/dist/fuse.basic.esm.min.js */ "./node_modules/fuse.js/dist/fuse.basic.esm.min.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isRTL)()) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir', 'rtl').addClass('rtl');
  }

  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  var $header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header');
  var $openMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-menu');
  var $closeMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-menu');
  var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu');
  var $toggleSubmenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-submenu');
  var $submenuOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-submenu-option')[0];
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-submenu');
  var $recentSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-recent-slider');
  var $openSecondaryMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-secondary-menu');
  var $openSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-search');
  var $closeSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-search');
  var $search = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search');
  var $inputSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-search');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search-results');
  var $searchNoResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-no-results');
  var $toggleDarkMode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-darkmode');
  var $mainNav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-main-nav');
  var $mainNavLeft = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-main-nav-left');
  var $newsletterElements = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-newsletter');
  var $nativeComments = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-native-comments > div > iframe')[0];
  var currentSavedTheme = localStorage.getItem('theme');
  var fuse = null;
  var submenuIsOpen = false;
  var secondaryMenuTippy = null;

  var showProductsTeaser = function showProductsTeaser() {
    document.querySelectorAll('.products-teaser').forEach( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(element) {
        var url, products, response, output, nbTeasers;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = 'https://www.l2ceramique.com/boutique/promotedProductJson.php?id_category=' + element.dataset.category;
                products = [];
                _context.prev = 2;
                _context.next = 5;
                return fetch(url);

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                products = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return");

              case 14:
                output = '';
                nbTeasers = 0;
                products.forEach(function (product) {
                  nbTeasers++;

                  if (nbTeasers > 4) {
                    return;
                  }

                  output += "<article class=\"m-article-card product\">\n        <div class=\"m-article-card__picture\">\n          <a href=\"".concat(product.link, "\" class=\"m-article-card__picture-link\" aria-hidden=\"true\" tabindex=\"-1\"></a>\n            <img class=\"m-article-card__picture-background\" src=\"").concat(product.image, "\" loading=\"lazy\" alt=\"\">\n        </div>\n          <div class=\"m-article-card__info\">\n            <span class=\"m-article-card__tag\">").concat(product.category, "</span>\n            <a href=\"").concat(product.link, "\" class=\"m-article-card__info-link\" aria-label=\"FIXME:\">\n              <div>\n                <h2 class=\"m-article-card__title js-article-card-title \" title=\"FIXME:\">\n                  ").concat(product.title, "\n                </h2>\n              </div>\n              <div class=\"m-article-card__price\">\n                ").concat(product.price, "\n              </div>\n            </a>\n          </div>\n      </article>");
                });
                element.querySelector('.placeholder').innerHTML = output;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  var showInstagramTeaser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var placeholder, url, pictures, nbTeasers, output, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              placeholder = document.querySelector('.instagram-teaser');

              if (!placeholder) {
                _context2.next = 21;
                break;
              }

              url = 'https://ig-widget.eskuel.net/widgets/json/beeaa476-7f9a-483d-826f-d296bf5c3a5c.json';
              pictures = [];
              nbTeasers = 0;
              output = '';
              _context2.prev = 6;
              _context2.next = 9;
              return fetch(url);

            case 9:
              response = _context2.sent;
              _context2.next = 12;
              return response.json();

            case 12:
              pictures = _context2.sent;
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](6);
              // Failed to fetch products
              placeholder.innerHTML = '';
              return _context2.abrupt("return");

            case 19:
              pictures.forEach(function (picture) {
                nbTeasers++;

                if (nbTeasers > 4) {
                  return;
                }

                var mediaUrl = picture.is_video ? picture.thumbnail_url : picture.media_url;
                output += "<article class=\"m-instagram-card\">\n        <div class=\"m-instagram-card__picture\">\n          <a href=\"".concat(picture.permalink, "\" class=\"m-instagram-card__picture-link\" aria-hidden=\"true\" tabindex=\"-1\"></a>\n            <img class=\"m-instagram-card__picture-background\" src=\"").concat(mediaUrl, "\" loading=\"lazy\" alt=\"\">\n        </div>\n\n      </article>");
              });
              placeholder.querySelector('.placeholder').innerHTML = output;

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 15]]);
    }));

    return function showInstagramTeaser() {
      return _ref2.apply(this, arguments);
    };
  }();

  var showSubmenu = function showSubmenu() {
    $header.addClass('submenu-is-active');
    $toggleSubmenu.addClass('active');
    $submenu.removeClass('closed').addClass('opened');
  };

  var hideSubmenu = function hideSubmenu() {
    $header.removeClass('submenu-is-active');
    $toggleSubmenu.removeClass('active');
    $submenu.removeClass('opened').addClass('closed');
  };

  var toggleScrollVertical = function toggleScrollVertical() {
    $body.toggleClass('no-scroll-y');
  };

  var tryToRemoveNewsletter = function tryToRemoveNewsletter() {
    if (typeof disableNewsletter !== 'undefined' && disableNewsletter) {
      $newsletterElements.remove();
    }
  };

  var trySearchFeature = function trySearchFeature() {
    if (typeof ghostSearchApiKey !== 'undefined' && typeof nativeSearchEnabled === 'undefined') {
      getAllPosts(ghostHost, ghostSearchApiKey);
    } else {
      $openSearch.css('visibility', 'hidden');
      $closeSearch.remove();
      $search.remove();
    }
  };

  var getAllPosts = function getAllPosts(host, key) {
    var api = new _tryghost_content_api__WEBPACK_IMPORTED_MODULE_4__["default"]({
      url: host,
      key: key,
      version: 'v5.0'
    });
    var allPosts = [];
    var fuseOptions = {
      shouldSort: true,
      ignoreLocation: true,
      findAllMatches: true,
      includeScore: true,
      minMatchCharLength: 2,
      keys: ['title', 'custom_excerpt', 'tags.name']
    };
    api.posts.browse({
      limit: 'all',
      include: 'tags',
      fields: 'id, title, url, published_at, custom_excerpt'
    }).then(function (posts) {
      for (var i = 0, len = posts.length; i < len; i++) {
        allPosts.push(posts[i]);
      }

      fuse = new fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](allPosts, fuseOptions);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var toggleDesktopTopbarOverflow = function toggleDesktopTopbarOverflow(disableOverflow) {
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isMobile)()) {
      if (disableOverflow) {
        $mainNav.addClass('toggle-overflow');
        $mainNavLeft.addClass('toggle-overflow');
      } else {
        $mainNav.removeClass('toggle-overflow');
        $mainNavLeft.removeClass('toggle-overflow');
      }
    }
  };

  $openMenu.on('click', function () {
    $header.addClass('mobile-menu-opened');
    $menu.addClass('opened');
    toggleScrollVertical();
  });
  $closeMenu.on('click', function () {
    $header.removeClass('mobile-menu-opened');
    $menu.removeClass('opened');
    toggleScrollVertical();
  });
  $toggleSubmenu.on('click', function () {
    submenuIsOpen = !submenuIsOpen;

    if (submenuIsOpen) {
      showSubmenu();
    } else {
      hideSubmenu();
    }
  });
  $openSearch.on('click', function () {
    $search.addClass('opened');
    setTimeout(function () {
      $inputSearch.trigger('focus');
    }, 400);
    toggleScrollVertical();
  });
  $closeSearch.on('click', function () {
    $inputSearch.trigger('blur');
    $search.removeClass('opened');
    toggleScrollVertical();
  });
  $inputSearch.on('keyup', function () {
    if ($inputSearch.val().length > 0 && fuse) {
      var results = fuse.search($inputSearch.val());
      var bestResults = results.filter(function (result) {
        if (result.score <= 0.5) {
          return result;
        }
      });
      var htmlString = '';

      if (bestResults.length > 0) {
        for (var i = 0, len = bestResults.length; i < len; i++) {
          htmlString += "\n          <article class=\"m-result\">            <a href=\"".concat(bestResults[i].item.url, "\" class=\"m-result__link\">              <h3 class=\"m-result__title\">").concat(bestResults[i].item.title, "</h3>              <span class=\"m-result__date\">").concat((0,_helpers__WEBPACK_IMPORTED_MODULE_7__.formatDate)(bestResults[i].item.published_at), "</span>            </a>          </article>");
        }

        $searchNoResults.hide();
        $searchResults.html(htmlString);
        $searchResults.show();
      } else {
        $searchResults.html('');
        $searchResults.hide();
        $searchNoResults.show();
      }
    } else {
      $searchResults.html('');
      $searchResults.hide();
      $searchNoResults.hide();
    }
  });
  $toggleDarkMode.on('change', function () {
    if ($toggleDarkMode.is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }

    if ($nativeComments) {
      $nativeComments.contentDocument.location.reload(true);
    }
  });
  $toggleDarkMode.on('mouseenter', function () {
    toggleDesktopTopbarOverflow(true);
  });
  $toggleDarkMode.on('mouseleave', function () {
    toggleDesktopTopbarOverflow(false);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('click', function (e) {
    if (submenuIsOpen) {
      if ($submenuOption && !$submenuOption.contains(e.target)) {
        submenuIsOpen = false;
        hideSubmenu();
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keyup', function (e) {
    if (e.key === 'Escape' && $search.hasClass('opened')) {
      $closeSearch.trigger('click');
    }
  });

  if (currentSavedTheme) {
    if (currentSavedTheme === 'dark') {
      $toggleDarkMode.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('checked', true);
      });
    }
  }

  if ($header.length > 0) {
    var headroom = new (headroom_js__WEBPACK_IMPORTED_MODULE_1___default())($header[0], {
      tolerance: {
        down: 10,
        up: 20
      },
      offset: 15,
      onUnpin: function onUnpin() {
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isMobile)() && secondaryMenuTippy) {
          var desktopSecondaryMenuTippy = secondaryMenuTippy[0];

          if (desktopSecondaryMenuTippy && desktopSecondaryMenuTippy.state.isVisible) {
            desktopSecondaryMenuTippy.hide();
          }
        }
      }
    });
    headroom.init();
  }

  if ($recentSlider.length > 0) {
    var recentSwiper = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('.js-recent-slider', {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_5__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_5__.A11y],
      freeMode: true,
      slidesPerView: 'auto',
      a11y: true,
      on: {
        init: function init() {
          (0,shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-recent-article-title', 50);
        }
      }
    });
  }

  if ($openSecondaryMenu.length > 0) {
    var template = document.getElementById('secondary-navigation-template');
    secondaryMenuTippy = (0,tippy_js__WEBPACK_IMPORTED_MODULE_9__["default"])('.js-open-secondary-menu', {
      appendTo: document.body,
      content: template.innerHTML,
      allowHTML: true,
      arrow: true,
      trigger: 'click',
      interactive: true,
      onShow: function onShow() {
        toggleDesktopTopbarOverflow(true);
      },
      onHidden: function onHidden() {
        toggleDesktopTopbarOverflow(false);
      }
    });
  }

  (0,tippy_js__WEBPACK_IMPORTED_MODULE_9__["default"])('.js-tooltip');
  (0,shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-article-card-title', 100);
  (0,shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-article-card-title-no-image', 250);
  tryToRemoveNewsletter();
  trySearchFeature();
  showProductsTeaser();
  showInstagramTeaser();
});

/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustImageGallery": () => (/* binding */ adjustImageGallery),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "getParameterByName": () => (/* binding */ getParameterByName),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isRTL": () => (/* binding */ isRTL),
/* harmony export */   "makeImagesZoomable": () => (/* binding */ makeImagesZoomable),
/* harmony export */   "managePostImages": () => (/* binding */ managePostImages)
/* harmony export */ });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
};
var isMobile = function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var adjustImageGallery = function adjustImageGallery() {
  var images = document.querySelectorAll('.kg-gallery-image img');

  for (var i = 0, len = images.length; i < len; i++) {
    var container = images[i].closest('.kg-gallery-image');
    var width = images[i].attributes.width.value;
    var height = images[i].attributes.height.value;
    var ratio = width / height;
    container.style.flex = "".concat(ratio, " 1 0%");
  }
};
var managePostImages = function managePostImages($) {
  $('.js-post-content').find('img').each(function () {
    if (!$(this).closest('figure').hasClass('kg-bookmark-card') && !$(this).closest('figure').hasClass('kg-nft-card') && !$(this).parent().is('a') && !$(this).hasClass('kg-product-card-image') && !$(this).hasClass('kg-audio-thumbnail')) {
      $(this).addClass('js-zoomable');
    }
  });
};
var makeImagesZoomable = function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('opened', function () {
    setTimeout(function () {
      var $mediumZoomImages = $('.medium-zoom-image--opened');

      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide();
      }
    }, 10);
  });
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);