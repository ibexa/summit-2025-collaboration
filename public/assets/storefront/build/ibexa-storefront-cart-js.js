/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/add.to.cart.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/component/add.to.cart.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToCart)
/* harmony export */ });
/* harmony import */ var _helper_quantity_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/quantity.input */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/quantity.input.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var AddToCart = /*#__PURE__*/function () {
  function AddToCart(options) {
    var _options$cart, _options$addToCartBtn, _options$quantityInpu;
    _classCallCheck(this, AddToCart);
    if (!options.container) {
      throw new Error('AddToCart: container option must be specified!');
    }
    this.container = options.container;
    this.cart = (_options$cart = options.cart) !== null && _options$cart !== void 0 ? _options$cart : window.ibexaCart;
    this.addToCartBtn = (_options$addToCartBtn = options.addToCartBtn) !== null && _options$addToCartBtn !== void 0 ? _options$addToCartBtn : this.container.querySelector('.ibexa-crt-add-to-cart__add-to-cart-btn');
    this.quantityInput = (_options$quantityInpu = options.quantityInput) !== null && _options$quantityInpu !== void 0 ? _options$quantityInpu : this.container.querySelector('.ibexa-crt-add-to-cart__quantity-input');
    this.addedQuantityDuringCartLoading = 0;
    this.isDuringProcessing = false;
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.getMaxQuantity = this.getMaxQuantity.bind(this);
  }
  return _createClass(AddToCart, [{
    key: "init",
    value: function init() {
      this.attachEventListeners();
      this.toggleAddToCartBtnBasedOnQuantity();
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this$addToCartBtn,
        _this = this;
      (_this$addToCartBtn = this.addToCartBtn) === null || _this$addToCartBtn === void 0 || _this$addToCartBtn.addEventListener('click', this.handleAddToCart, false);
      (0,_helper_quantity_input__WEBPACK_IMPORTED_MODULE_0__.guardQuantityInputValue)(this.quantityInput, this.getMaxQuantity);
      this.quantityInput.addEventListener('input', function () {
        return _this.toggleAddToCartBtnBasedOnQuantity();
      }, false);
      this.quantityInput.addEventListener('change', function () {
        return _this.toggleAddToCartBtnBasedOnQuantity();
      }, false);
      this.quantityInput.addEventListener('focusout', function () {
        return _this.toggleAddToCartBtnBasedOnQuantity();
      }, false);
      document.body.addEventListener('ibexa-cart:cart-data-changed', function () {
        _this.handleQuantityAddedDuringCardLoading();
        (0,_helper_quantity_input__WEBPACK_IMPORTED_MODULE_0__.forceValidQuantityInInput)(_this.quantityInput, _this.getMaxQuantity);
        _this.toggleAddToCartBtnBasedOnQuantity();
      }, false);
    }
  }, {
    key: "toggleAddToCartBtnBasedOnQuantity",
    value: function toggleAddToCartBtnBasedOnQuantity() {
      if (!this.isDisabled() && this.addToCartBtn && !this.isDuringProcessing) {
        this.addToCartBtn.disabled = !this.quantityInput.value.length || this.quantityInput.value === '0';
      }
    }
  }, {
    key: "toggleProcessingState",
    value: function toggleProcessingState(isDuringProcessing) {
      this.isDuringProcessing = isDuringProcessing;
      this.quantityInput.disabled = isDuringProcessing;
      this.addToCartBtn.disabled = isDuringProcessing;
    }
  }, {
    key: "handleQuantityAddedDuringCardLoading",
    value: function handleQuantityAddedDuringCardLoading() {
      if (this.addedQuantityDuringCartLoading) {
        var productCode = this.getProductCode();
        var productAdded = this.cart.addProduct(productCode, this.addedQuantityDuringCartLoading);
        this.addedQuantityDuringCartLoading = 0;
        this.resetQuantity();
        this.toggleProcessingState(false);
        return productAdded;
      }
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.container.classList.contains('ibexa-crt-add-to-cart--disabled');
    }
  }, {
    key: "getProductCode",
    value: function getProductCode() {
      var productCode = this.container.dataset.productCode;
      return productCode;
    }
  }, {
    key: "getQuantity",
    value: function getQuantity() {
      var quantityInputValue = this.quantityInput.value;
      return parseInt(quantityInputValue, 10);
    }
  }, {
    key: "getMaxQuantity",
    value: function getMaxQuantity() {
      return Number.MAX_SAFE_INTEGER;
    }
  }, {
    key: "resetQuantity",
    value: function resetQuantity() {
      var maxQuantity = this.getMaxQuantity();
      this.quantityInput.value = maxQuantity === 0 ? 0 : 1;
    }
  }, {
    key: "handleAddToCart",
    value: function handleAddToCart() {
      var _this2 = this;
      var productCode = this.getProductCode();
      var quantity = this.getQuantity();
      if (!productCode) {
        return;
      }
      this.toggleProcessingState(true);
      var isCartLoaded = this.cart.isCartLoaded();
      if (isCartLoaded) {
        return this.cart.addProduct(productCode, quantity)["finally"](function () {
          _this2.resetQuantity();
          _this2.toggleProcessingState(false);
        });
      }
      this.addedQuantityDuringCartLoading += quantity;
      return this.addedQuantityDuringCartLoading;
    }
  }]);
}();


/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/cart.js":
/*!****************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/component/cart.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _service_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/cart */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/service/cart.js");
/* harmony import */ var _helper_deep_clone_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/deep.clone.helper */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/deep.clone.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Cart = /*#__PURE__*/function () {
  function Cart() {
    var _options$userId,
      _options$currencyCode,
      _options$lang,
      _this = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Cart);
    if (window.ibexaCart) {
      throw new Error('Cart: there was already created instance for cart; currently there is no support for multiple carts');
    }
    window.ibexaCart = this;
    this.userId = (_options$userId = options.userId) !== null && _options$userId !== void 0 ? _options$userId : parseInt(document.querySelector('meta[name="UserId"]').content, 10);
    this.currencyCode = (_options$currencyCode = options.currencyCode) !== null && _options$currencyCode !== void 0 ? _options$currencyCode : document.querySelector('meta[name="ActiveCurrencyCode"]').content;
    this.lang = (_options$lang = options.lang) !== null && _options$lang !== void 0 ? _options$lang : document.documentElement.lang;
    this.cartData = null;
    this.cartSummary = null;
    var anonymousUserId = parseInt(document.querySelector('meta[name="AnonymousUserId"]').content, 10);
    if (this.userId === anonymousUserId) {
      this.authorize().then(function () {
        return _this.loadCart();
      });
    } else {
      this.loadCart();
    }
  }
  return _createClass(Cart, [{
    key: "authorize",
    value: function authorize() {
      return _service_cart__WEBPACK_IMPORTED_MODULE_0__.authorize().then(function (response) {
        document.querySelector('meta[name="CSRF-Token"]').content = response.Token.value;
      });
    }
  }, {
    key: "createCart",
    value: function createCart() {
      var _this2 = this;
      return _service_cart__WEBPACK_IMPORTED_MODULE_0__.createCart(this.currencyCode).then(function (response) {
        _service_cart__WEBPACK_IMPORTED_MODULE_0__.loadCartSummary(response.Cart.identifier).then(function (summaryResponse) {
          _this2.cartData = response.Cart;
          _this2.cartSummary = summaryResponse.CartSummary;
          _this2.onCartDataChanged();
        });
      });
    }
  }, {
    key: "loadCart",
    value: function loadCart() {
      var _this3 = this;
      return _service_cart__WEBPACK_IMPORTED_MODULE_0__.loadUserCarts(this.userId).then(function (response) {
        var result = response.CartView.Result;
        if (result.count === 0) {
          _this3.createCart();
          return;
        }
        var firstCart = result.CartList.Cart[0];
        _service_cart__WEBPACK_IMPORTED_MODULE_0__.loadCartSummary(firstCart.identifier).then(function (summaryResponse) {
          _this3.cartData = result.CartList.Cart[0];
          _this3.cartSummary = summaryResponse.CartSummary;
          _this3.onCartDataChanged();
        });
      });
    }
  }, {
    key: "onCartDataChanged",
    value: function onCartDataChanged() {
      document.body.dispatchEvent(new CustomEvent('ibexa-cart:cart-data-changed', {
        detail: {
          cart: this
        }
      }));
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.cartData.id;
    }
  }, {
    key: "getIdentifier",
    value: function getIdentifier() {
      return this.cartData.identifier;
    }
  }, {
    key: "getCartData",
    value: function getCartData() {
      return (0,_helper_deep_clone_helper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.cartData);
    }
  }, {
    key: "getCartSummary",
    value: function getCartSummary() {
      return (0,_helper_deep_clone_helper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.cartSummary);
    }
  }, {
    key: "getEntries",
    value: function getEntries() {
      return (0,_helper_deep_clone_helper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.cartData.entries);
    }
  }, {
    key: "getEntryByIdentifier",
    value: function getEntryByIdentifier(identifier) {
      if (!this.cartData) {
        throw new Error("Cart:getEntryByIdentifier: no cart data loaded!");
      }
      var entry = this.cartData.entries.find(function (cartEntry) {
        return cartEntry.identifier === identifier;
      });
      return (0,_helper_deep_clone_helper__WEBPACK_IMPORTED_MODULE_1__["default"])(entry);
    }
  }, {
    key: "getEntrySummaryByIdentifier",
    value: function getEntrySummaryByIdentifier(identifier) {
      if (!this.cartSummary) {
        throw new Error("Cart:getEntrySummaryByIdentifier: no cart summary data loaded!");
      }
      var entry = this.cartSummary.SummaryEntryCollection.SummaryEntry.find(function (entrySummary) {
        return entrySummary.identifier === identifier;
      });
      return (0,_helper_deep_clone_helper__WEBPACK_IMPORTED_MODULE_1__["default"])(entry);
    }
  }, {
    key: "getEntryViolationByIdentifier",
    value: function getEntryViolationByIdentifier(identifier) {
      if (!this.cartSummary) {
        throw new Error("Cart:getEntryViolationByIdentifier: no cart data loaded!");
      }
      var entryViolations = this.cartSummary.CartConstraintViolationList.violations.filter(function (violation) {
        return violation.propertyPath === "entries[".concat(identifier, "]");
      });
      return (0,_helper_deep_clone_helper__WEBPACK_IMPORTED_MODULE_1__["default"])(entryViolations);
    }
  }, {
    key: "getEntryProductName",
    value: function getEntryProductName(identifier) {
      var _entrySummary$Product,
        _entry$names$value$fi,
        _this4 = this;
      if (!this.cartData) {
        throw new Error("Cart:getEntryProductName: no cart data loaded!");
      }
      var entrySummary = this.getEntrySummaryByIdentifier(identifier);
      var productName = entrySummary === null || entrySummary === void 0 || (_entrySummary$Product = entrySummary.Product) === null || _entrySummary$Product === void 0 ? void 0 : _entrySummary$Product.name;
      if (productName) {
        return productName;
      }
      var entry = this.getEntryByIdentifier(identifier);
      var productNameValue = (_entry$names$value$fi = entry.names.value.find(function (nameValue) {
        return nameValue._languageCode === _this4.lang;
      })) !== null && _entry$names$value$fi !== void 0 ? _entry$names$value$fi : entry.names.value[0];
      productName = productNameValue['#text'];
      return productName;
    }
  }, {
    key: "getProductEntry",
    value: function getProductEntry(productCode) {
      var _this$cartData;
      var productEntry = (_this$cartData = this.cartData) === null || _this$cartData === void 0 || (_this$cartData = _this$cartData.entries) === null || _this$cartData === void 0 ? void 0 : _this$cartData.find(function (entry) {
        return entry.product._href === "/api/ibexa/v2/product/catalog/products/".concat(productCode);
      });
      return productEntry;
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "isCartLoaded",
    value: function isCartLoaded() {
      return !!this.cartData;
    }
  }, {
    key: "addProduct",
    value: function addProduct(productCode, quantity) {
      var _this5 = this;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var productEntry = this.getProductEntry(productCode);
      var isProductInCart = !!productEntry;
      if (isProductInCart) {
        return this.updateEntryQuantity(productEntry.identifier, productEntry.quantity + quantity, context);
      }
      return _service_cart__WEBPACK_IMPORTED_MODULE_0__.createCartEntry(this.getIdentifier(), productCode, quantity, context).then(function (response) {
        return _service_cart__WEBPACK_IMPORTED_MODULE_0__.loadCartSummary(response.Cart.identifier).then(function (summaryResponse) {
          _this5.cartData = response.Cart;
          _this5.cartSummary = summaryResponse.CartSummary;
          _this5.onCartDataChanged();
          return _this5.getCartData();
        });
      });
    }
  }, {
    key: "updateEntryQuantity",
    value: function updateEntryQuantity(entryIdentifier, newQuantity) {
      var _this6 = this;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var entry = this.getEntryByIdentifier(entryIdentifier);
      if (!entry) {
        throw new Error("Cart:updateItemQuantity: no entry with with identifier ".concat(entryIdentifier, " in the cart!"));
      }
      return _service_cart__WEBPACK_IMPORTED_MODULE_0__.updateProductQuantity(this.getIdentifier(), entryIdentifier, newQuantity, context).then(function (response) {
        return _service_cart__WEBPACK_IMPORTED_MODULE_0__.loadCartSummary(response.Cart.identifier).then(function (summaryResponse) {
          _this6.cartData = response.Cart;
          _this6.cartSummary = summaryResponse.CartSummary;
          _this6.onCartDataChanged();
          return _this6.getCartData();
        });
      });
    }
  }, {
    key: "removeEntry",
    value: function removeEntry(entryIdentifier) {
      var _this7 = this;
      var entry = this.getEntryByIdentifier(entryIdentifier);
      if (!entry) {
        throw new Error("Cart:removeItem: not entry with identifier ".concat(entryIdentifier, " in the cart!"));
      }
      return _service_cart__WEBPACK_IMPORTED_MODULE_0__.deleteCartEntry(this.getIdentifier(), entryIdentifier).then(function (response) {
        return _service_cart__WEBPACK_IMPORTED_MODULE_0__.loadCartSummary(response.Cart.identifier).then(function (summaryResponse) {
          _this7.cartData = response.Cart;
          _this7.cartSummary = summaryResponse.CartSummary;
          _this7.onCartDataChanged();
          return _this7.getCartData();
        });
      });
    }
  }, {
    key: "empty",
    value: function empty() {
      var _this8 = this;
      return _service_cart__WEBPACK_IMPORTED_MODULE_0__.emptyCart(this.getIdentifier()).then(function () {
        _this8.loadCart();
      });
    }
  }]);
}();


/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/maincart.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/component/maincart.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Maincart)
/* harmony export */ });
/* harmony import */ var _helper_quantity_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/quantity.input */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/quantity.input.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Maincart = /*#__PURE__*/function () {
  function Maincart(options) {
    var _options$cart, _options$quantityChan, _options$itemsContain;
    _classCallCheck(this, Maincart);
    if (!options.container) {
      throw new Error('Maincart: container option must be specified!');
    }
    this.container = options.container;
    this.cart = (_options$cart = options.cart) !== null && _options$cart !== void 0 ? _options$cart : window.ibexaCart;
    this.quantityChangeDebounceTimeout = (_options$quantityChan = options.quantityChangeDebounceTimeout) !== null && _options$quantityChan !== void 0 ? _options$quantityChan : 1000;
    this.emptyCartTemplate = this.container.dataset.emptyCartTemplate;
    this.maincartNode = options.container.classList.contains('ibexa-crt-maincart') ? options.container : this.container.querySelector('.ibexa-crt-maincart');
    this.itemsContainerNode = (_options$itemsContain = options.itemsContainerNode) !== null && _options$itemsContain !== void 0 ? _options$itemsContain : this.container.querySelector('.ibexa-crt-maincart__items-container');
    this.itemTemplate = this.itemsContainerNode.dataset.itemTemplate;
    this.netPriceTemplate = this.maincartNode.dataset.netPriceTemplate;
    this.entriesInternalData = {};
    this.handleCartChanged = this.handleCartChanged.bind(this);
  }
  return _createClass(Maincart, [{
    key: "init",
    value: function init() {
      this.attachMaincartEventListeners();
    }
  }, {
    key: "getCurrentEntriesIdentifiers",
    value: function getCurrentEntriesIdentifiers() {
      var currentEntries = _toConsumableArray(this.itemsContainerNode.querySelectorAll('.ibexa-crt-maincart__item'));
      var currentEntriesIdentifiers = currentEntries.map(function (entry) {
        return entry.dataset.cartEntryIdentifier;
      });
      return currentEntriesIdentifiers;
    }
  }, {
    key: "attachMaincartEventListeners",
    value: function attachMaincartEventListeners() {
      document.body.addEventListener('ibexa-cart:cart-data-changed', this.handleCartChanged, false);
    }
  }, {
    key: "attachItemEventListeners",
    value: function attachItemEventListeners(entry, itemNode) {
      var _this = this;
      var removeItemBtn = itemNode.querySelector('.ibexa-crt-maincart__remove-item-btn');
      var quantityInput = itemNode.querySelector('.ibexa-crt-maincart__quantity-input');
      (0,_helper_quantity_input__WEBPACK_IMPORTED_MODULE_0__.guardQuantityInputValue)(quantityInput, function () {
        var currentEntry = _this.cart.getEntryByIdentifier(entry.identifier);
        _this.getMaxQuantity(currentEntry);
      });
      removeItemBtn === null || removeItemBtn === void 0 || removeItemBtn.addEventListener('click', function (event) {
        var currentEntry = _this.cart.getEntryByIdentifier(entry.identifier);
        _this.handleItemRemove(event, currentEntry);
      }, false);
      quantityInput === null || quantityInput === void 0 || quantityInput.addEventListener('change', function (event) {
        var currentEntry = _this.cart.getEntryByIdentifier(entry.identifier);
        _this.handleQuantityInputChangeDebounced(event, currentEntry);
      }, false);
      quantityInput === null || quantityInput === void 0 || quantityInput.addEventListener('keyup', function (event) {
        var currentEntry = _this.cart.getEntryByIdentifier(entry.identifier);
        _this.handleQuantityInputChangeDebounced(event, currentEntry);
      }, false);
    }
  }, {
    key: "handleCartChanged",
    value: function handleCartChanged(_ref) {
      var _this2 = this;
      var cart = _ref.detail.cart;
      if (this.cart !== cart) {
        return;
      }
      var entries = cart.getEntries();
      var entriesIdentifiers = entries.map(function (entry) {
        return entry.identifier;
      });
      var currentEntriesIdentifiers = this.getCurrentEntriesIdentifiers();
      var oldEntriesIdentifiers = currentEntriesIdentifiers.filter(function (currentEntry) {
        return entriesIdentifiers.includes(currentEntry);
      });
      var newEntriesIdentifiers = entriesIdentifiers.filter(function (entry) {
        return !currentEntriesIdentifiers.includes(entry);
      });
      var deletedEntriesIdentifiers = currentEntriesIdentifiers.filter(function (currentEntry) {
        return !entriesIdentifiers.includes(currentEntry);
      });
      oldEntriesIdentifiers.forEach(function (entryIdentifier) {
        return _this2.updateItem(_this2.cart.getEntryByIdentifier(entryIdentifier));
      });
      newEntriesIdentifiers.forEach(function (entryIdentifier) {
        var entry = _this2.cart.getEntryByIdentifier(entryIdentifier);
        _this2.setNewEntryDefaultInternalData(entry);
        _this2.insertItem(entry);
      });
      deletedEntriesIdentifiers.forEach(function (entryIdentifier) {
        return _this2.removeItem(entryIdentifier);
      });
    }
  }, {
    key: "setNewEntryDefaultInternalData",
    value: function setNewEntryDefaultInternalData(entry) {
      this.entriesInternalData[entry.identifier] = {
        isDuringUpdate: false,
        entryQuantityInputChangeTimeoutId: null
      };
    }
  }, {
    key: "getEntryInternalData",
    value: function getEntryInternalData(entryIdentifier) {
      return this.entriesInternalData[entryIdentifier];
    }
  }, {
    key: "handleItemRemove",
    value: function handleItemRemove(event, entry) {
      return this.cart.removeEntry(entry.identifier);
    }
  }, {
    key: "handleQuantityInputChangeDebounced",
    value: function handleQuantityInputChangeDebounced(event, entry) {
      var _this3 = this;
      var entryInternalData = this.getEntryInternalData(entry.identifier);
      var isEntryDuringUpdate = entryInternalData.isDuringUpdate;
      if (isEntryDuringUpdate) {
        return;
      }
      var entryQuantityInputChangeTimeoutId = entryInternalData.entryQuantityInputChangeTimeoutId;
      clearTimeout(entryQuantityInputChangeTimeoutId);
      var quantityInput = event.target;
      var newQuantityValue = quantityInput.value;
      var validQuantity = (0,_helper_quantity_input__WEBPACK_IMPORTED_MODULE_0__.getValidQuantity)(newQuantityValue, 1, function () {
        return _this3.getMaxQuantity(entry);
      });
      var isNewQuantityValid = validQuantity.toString() === newQuantityValue;
      if (!isNewQuantityValid) {
        return;
      }
      entryInternalData.entryQuantityInputChangeTimeoutId = setTimeout(function () {
        entryInternalData.isDuringUpdate = true;
        _this3.handleQuantityInputChange(event, entry);
      }, this.quantityChangeDebounceTimeout);
    }
  }, {
    key: "handleQuantityInputChange",
    value: function handleQuantityInputChange(_ref2, entry) {
      var _this4 = this;
      var quantityInput = _ref2.target;
      var newQuantity = parseInt(quantityInput.value, 10);
      if (newQuantity === entry.quantity) {
        return;
      }
      var restoreFocus = quantityInput === document.activeElement;
      var handleFocusIn = function handleFocusIn() {
        restoreFocus = false;
      };
      quantityInput.disabled = true;
      document.addEventListener('focusin', handleFocusIn, false);
      return this.cart.updateEntryQuantity(entry.identifier, newQuantity)["finally"](function () {
        var updatedEntry = _this4.cart.getEntryByIdentifier(entry.identifier);
        var entryInternalData = _this4.getEntryInternalData(entry.identifier);
        quantityInput.value = updatedEntry.quantity;
        quantityInput.disabled = false;
        document.removeEventListener('focusin', handleFocusIn, false);
        if (restoreFocus) {
          quantityInput.focus();
        }
        entryInternalData.isDuringUpdate = false;
      });
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "getMaxQuantity",
    value: function getMaxQuantity(entryIdentifier) {
      return Number.MAX_SAFE_INTEGER;
    }
  }, {
    key: "onItemInserted",
    value: function onItemInserted(entry, itemNode) {
      this.attachItemEventListeners(entry, itemNode);
    }
  }, {
    key: "findItemByEntryIdentifier",
    value: function findItemByEntryIdentifier(identifier) {
      return this.itemsContainerNode.querySelector("[data-cart-entry-identifier=\"".concat(identifier, "\"]"));
    }
  }, {
    key: "updateCartEmptyState",
    value: function updateCartEmptyState() {
      var isCartEmpty = !!this.cart.getItems().length;
      this.maincartNode.classList.toggle('ibexa-crt-maincart--empty', isCartEmpty);
    }
  }, {
    key: "renderItem",
    value: function renderItem(entry) {
      var itemRendered = this.itemTemplate.replaceAll('{{ cart_entry_identifier }}', entry.identifier).replaceAll('{{ cart_entry_quantity }}', entry.quantity);
      return itemRendered;
    }
  }, {
    key: "insertItem",
    value: function insertItem(entry) {
      var itemRendered = this.renderItem(entry);
      this.itemsContainerNode.insertAdjacentHTML('beforeend', itemRendered);
      var itemNode = this.findItemByEntryIdentifier(entry.identifier);
      this.setItemInvalidState(entry);
      this.onItemInserted(entry, itemNode);
      return itemNode;
    }
  }, {
    key: "removeItem",
    value: function removeItem(entryIdentifier) {
      var itemNode = this.findItemByEntryIdentifier(entryIdentifier);
      itemNode.remove();
    }
  }, {
    key: "updateItemQuantityInput",
    value: function updateItemQuantityInput(entry) {
      var itemNode = this.findItemByEntryIdentifier(entry.identifier);
      var quantityInput = itemNode.querySelector('.ibexa-crt-maincart__quantity-input');
      quantityInput.value = entry.quantity;
    }
  }, {
    key: "setItemInvalidState",
    value: function setItemInvalidState(entry) {
      var entryViolations = this.cart.getEntryViolationByIdentifier(entry.identifier);
      var isEntryViolated = !!entryViolations.length;
      var itemNode = this.findItemByEntryIdentifier(entry.identifier);
      var isMarkedAsInvalid = itemNode.classList.contains('ibexa-crt-maincart__item--invalid');
      if (isEntryViolated && !isMarkedAsInvalid) {
        this.addEntryInvalidState(entry, entryViolations);
      } else if (!isEntryViolated && isMarkedAsInvalid) {
        this.removeEntryInvalidState(entry);
      }
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "addEntryInvalidState",
    value: function addEntryInvalidState(entry, entryViolations) {
      var itemNode = this.findItemByEntryIdentifier(entry.identifier);
      var quantityInput = itemNode.querySelector('.ibexa-crt-maincart__quantity-input');
      itemNode.classList.add('ibexa-crt-maincart__item--invalid');
      quantityInput.disabled = true;
    }
  }, {
    key: "removeEntryInvalidState",
    value: function removeEntryInvalidState(entry) {
      var itemNode = this.findItemByEntryIdentifier(entry.identifier);
      var quantityInput = itemNode.querySelector('.ibexa-crt-maincart__quantity-input');
      itemNode.classList.remove('ibexa-crt-maincart__item--invalid');
      quantityInput.disabled = false;
    }
  }, {
    key: "updateItem",
    value: function updateItem(entry) {
      this.updateItemQuantityInput(entry);
      this.setItemInvalidState(entry);
    }
  }]);
}();


/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/minicart.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/component/minicart.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Minicart)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Minicart = /*#__PURE__*/function () {
  function Minicart(options) {
    var _options$cart, _options$counter;
    _classCallCheck(this, Minicart);
    if (!options.container) {
      throw new Error('Minicart: container option must be specified!');
    }
    this.container = options.container;
    this.cart = (_options$cart = options.cart) !== null && _options$cart !== void 0 ? _options$cart : window.ibexaCart;
    this.counterNode = (_options$counter = options.counter) !== null && _options$counter !== void 0 ? _options$counter : this.container.querySelector('.ibexa-crt-minicart__counter');
    this.handleCartChanged = this.handleCartChanged.bind(this);
  }
  return _createClass(Minicart, [{
    key: "init",
    value: function init() {
      this.attachEventListeners();
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      document.body.addEventListener('ibexa-cart:cart-data-changed', this.handleCartChanged, false);
    }
  }, {
    key: "handleCartChanged",
    value: function handleCartChanged(_ref) {
      var cart = _ref.detail.cart;
      if (cart !== this.cart) {
        return;
      }
      var cartItems = this.cart.getEntries();
      this.counterNode.innerText = cartItems.length;
    }
  }]);
}();


/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/quick.order.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/component/quick.order.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickOrder)
/* harmony export */ });
/* harmony import */ var _helper_quantity_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/quantity.input */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/quantity.input.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var QuickOrder = /*#__PURE__*/function () {
  function QuickOrder(options) {
    var _options$fileInput, _options$addEntryBtn, _options$entriesConta, _options$entriesProto;
    _classCallCheck(this, QuickOrder);
    if (!options.container) {
      throw new Error('QuickOrder: container option must be specified!');
    }
    this.container = options.container;
    this.fileInput = (_options$fileInput = options.fileInput) !== null && _options$fileInput !== void 0 ? _options$fileInput : this.container.querySelector('.ibexa-crt-quick-order__file');
    this.addEntryBtn = (_options$addEntryBtn = options.addEntryBtn) !== null && _options$addEntryBtn !== void 0 ? _options$addEntryBtn : this.container.querySelector('.ibexa-crt-quick-order__add-entry-btn');
    this.entriesContainer = (_options$entriesConta = options.entriesContainer) !== null && _options$entriesConta !== void 0 ? _options$entriesConta : this.container.querySelector('.ibexa-crt-quick-order__entries');
    this.entriesPrototype = (_options$entriesProto = options.entriesPrototype) !== null && _options$entriesProto !== void 0 ? _options$entriesProto : this.entriesContainer.dataset.prototype;
    this.newEntryIndex = 0;
    this.isDuringProcessing = false;
    this.attachEntryEventListeners = this.attachEntryEventListeners.bind(this);
    this.handleEntryDelete = this.handleEntryDelete.bind(this);
    this.handleEntryAdd = this.handleEntryAdd.bind(this);
    this.getMaxQuantity = this.getMaxQuantity.bind(this);
  }
  return _createClass(QuickOrder, [{
    key: "init",
    value: function init() {
      var _this$addEntryBtn;
      var initialEntries = this.container.querySelectorAll('.ibexa-crt-quick-order__entry');
      this.newEntryIndex = initialEntries.length;
      initialEntries.forEach(this.attachEntryEventListeners);
      (_this$addEntryBtn = this.addEntryBtn) === null || _this$addEntryBtn === void 0 || _this$addEntryBtn.addEventListener('click', this.handleEntryAdd, false);
    }
  }, {
    key: "attachEntryEventListeners",
    value: function attachEntryEventListeners(entry) {
      var deleteEntryBtn = entry.querySelector('.ibexa-crt-quick-order__delete-entry-btn');
      var quantityInput = entry.querySelector('.ibexa-crt-quick-order__quantity-input');
      deleteEntryBtn === null || deleteEntryBtn === void 0 || deleteEntryBtn.addEventListener('click', this.handleEntryDelete, false);
      (0,_helper_quantity_input__WEBPACK_IMPORTED_MODULE_0__.guardQuantityInputValue)(quantityInput, this.getMaxQuantity);
    }
  }, {
    key: "getMaxQuantity",
    value: function getMaxQuantity() {
      return Number.MAX_SAFE_INTEGER;
    }
  }, {
    key: "addNewEntry",
    value: function addNewEntry() {
      var renderedEntry = this.entriesPrototype.replaceAll('__entry_index__', this.newEntryIndex);
      this.entriesContainer.insertAdjacentHTML('beforeend', renderedEntry);
      this.newEntryIndex += 1;
      var insertedEntry = this.entriesContainer.lastElementChild;
      this.attachEntryEventListeners(insertedEntry);
    }
  }, {
    key: "handleEntryAdd",
    value: function handleEntryAdd() {
      this.addNewEntry();
    }
  }, {
    key: "handleEntryDelete",
    value: function handleEntryDelete(event) {
      var deleteBtn = event.currentTarget;
      var entry = deleteBtn.closest('.ibexa-crt-quick-order__entry');
      entry.remove();
      var entries = this.container.querySelectorAll('.ibexa-crt-quick-order__entry');
      var entriesCount = entries.length;
      if (entriesCount === 0) {
        this.addNewEntry();
      }
    }
  }]);
}();


/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/summary.js":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/component/summary.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Summary)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Summary = /*#__PURE__*/function () {
  function Summary(options) {
    var _options$cart;
    _classCallCheck(this, Summary);
    if (!options.container) {
      throw new Error('Summary: container option must be specified!');
    }
    this.container = options.container;
    this.cart = (_options$cart = options.cart) !== null && _options$cart !== void 0 ? _options$cart : window.ibexaCart;
    this.summaryNode = this.container.querySelector('.ibexa-crt-summary');
    this.summarySubtotalPriceNode = this.summaryNode.querySelector('.ibexa-crt-summary__item--subtotal');
    this.summaryTotalPriceNode = this.summaryNode.querySelector('.ibexa-crt-summary__item--total');
    this.summaryTaxItemLabelTemplate = this.summaryNode.dataset.taxItemLabelTemplate;
    this.summaryTaxItemTemplate = this.summaryNode.dataset.taxItemTemplate;
    this.netPriceTemplate = this.summaryNode.dataset.netPriceTemplate;
  }
  return _createClass(Summary, [{
    key: "init",
    value: function init() {
      this.attachSummaryListeners();
    }
  }, {
    key: "attachSummaryListeners",
    value: function attachSummaryListeners() {
      var _this = this;
      document.body.addEventListener('ibexa-cart:cart-data-changed', function () {
        _this.refreshSummary();
      }, false);
    }
  }, {
    key: "refreshSummary",
    value: function refreshSummary() {
      this.clearSummaryData();
      this.insertSummaryData();
    }
  }, {
    key: "renderSummaryTaxItem",
    value: function renderSummaryTaxItem(tax, taxValue) {
      var itemRendered = this.summaryTaxItemTemplate.replaceAll('{{ label }}', this.summaryTaxItemLabelTemplate.replace('{{ percentage }}', tax)).replaceAll('{{ value }}', taxValue);
      return itemRendered;
    }
  }, {
    key: "clearSummaryData",
    value: function clearSummaryData() {
      var taxesItemsNodes = this.summaryNode.querySelectorAll('.ibexa-crt-summary__item--tax');
      taxesItemsNodes.forEach(function (taxItemNode) {
        return taxItemNode.remove();
      });
    }
  }, {
    key: "insertSummaryTaxData",
    value: function insertSummaryTaxData() {
      var summary = this.cart.getCartSummary();
      var vatCategorySummary = summary.vatCategorySummary;
      var _iterator = _createForOfIteratorHelper(vatCategorySummary),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var vatSummary = _step.value;
          var taxValue = vatSummary.RestPrice.formatted,
            tax = vatSummary.VatCategory.vatValue;
          var taxItemRendered = this.renderSummaryTaxItem(tax, taxValue);
          this.summaryTotalPriceNode.insertAdjacentHTML('beforebegin', taxItemRendered);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "insertSummaryPriceData",
    value: function insertSummaryPriceData() {
      var summary = this.cart.getCartSummary();
      var subtotalPrice = summary.TotalPrice.RestPrice.formatted,
        totalPrice = summary.TotalPriceInclVat.RestPrice.formatted;
      var subtotalPriceValueNode = this.summarySubtotalPriceNode.querySelector('.ibexa-crt-summary__item-value');
      var totalPriceValueNode = this.summaryTotalPriceNode.querySelector('.ibexa-crt-summary__item-value');
      subtotalPriceValueNode.innerText = this.netPriceTemplate.replace('{{ price }}', subtotalPrice);
      totalPriceValueNode.innerText = totalPrice;
    }
  }, {
    key: "insertSummaryData",
    value: function insertSummaryData() {
      this.insertSummaryTaxData();
      this.insertSummaryPriceData();
    }
  }]);
}();


/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/deep.clone.helper.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/deep.clone.helper.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Clones any object. Faster alternative to `JSON.parse(JSON.stringify)`
 *
 * @function deepClone
 * @param {Any} data
 * @returns {Any} cloned data
 */
var _deepClone = function deepClone(data) {
  var clonedData;
  if (_typeof(data) !== 'object') {
    return data;
  }
  if (!data) {
    return data;
  }
  if (Object.prototype.toString.apply(data) === '[object Array]') {
    clonedData = [];
    for (var i = 0; i < data.length; i++) {
      clonedData[i] = _deepClone(data[i]);
    }
    return clonedData;
  }
  clonedData = {};
  for (var _i in data) {
    if (Object.prototype.hasOwnProperty.call(data, _i)) {
      clonedData[_i] = _deepClone(data[_i]);
    }
  }
  return clonedData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_deepClone);

/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/quantity.input.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/quantity.input.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forceValidQuantityInInput: () => (/* binding */ forceValidQuantityInInput),
/* harmony export */   getValidQuantity: () => (/* binding */ getValidQuantity),
/* harmony export */   guardQuantityInputValue: () => (/* binding */ guardQuantityInputValue),
/* harmony export */   preventEmpty: () => (/* binding */ preventEmpty),
/* harmony export */   preventNonDigitCharacters: () => (/* binding */ preventNonDigitCharacters),
/* harmony export */   preventWrongQuantity: () => (/* binding */ preventWrongQuantity),
/* harmony export */   preventZero: () => (/* binding */ preventZero)
/* harmony export */ });
var guardQuantityInputValue = function guardQuantityInputValue(quantityInput, getMaxQuantity) {
  var _options$allowEmpty;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isAllowEmpty = (_options$allowEmpty = options === null || options === void 0 ? void 0 : options.allowEmpty) !== null && _options$allowEmpty !== void 0 ? _options$allowEmpty : false;
  quantityInput.addEventListener('keydown', preventNonDigitCharacters, false);
  quantityInput.addEventListener('keyup', function () {
    return preventWrongQuantity(quantityInput, getMaxQuantity);
  }, false);
  quantityInput.addEventListener('input', function () {
    return preventWrongQuantity(quantityInput, getMaxQuantity);
  }, false);
  quantityInput.addEventListener('focusout', function () {
    var valueBefore = quantityInput.value;
    if (!isAllowEmpty) {
      preventEmpty(quantityInput, getMaxQuantity);
    }
    preventZero(quantityInput, getMaxQuantity);
    if (quantityInput.value !== valueBefore) {
      quantityInput.dispatchEvent(new Event('change'));
    }
  }, false);
};
var preventNonDigitCharacters = function preventNonDigitCharacters(event) {
  var key = event.key,
    altKey = event.altKey,
    ctrlKey = event.ctrlKey,
    metaKey = event.metaKey,
    shiftKey = event.shiftKey;
  var isSpecialKey = key.length > 1;
  var isDigitKey = key >= '0' && key <= '9';
  var isOtherSpecialKeyPressed = altKey || ctrlKey || metaKey || shiftKey;
  if (!isSpecialKey && !isDigitKey && !isOtherSpecialKeyPressed) {
    event.preventDefault();
    return false;
  }
};
var preventWrongQuantity = function preventWrongQuantity(quantityInput, getMaxQuantity) {
  var parsedValue = parseInt(quantityInput.value, 10);
  var maxQuantity = getMaxQuantity();
  var hasLeadingZeros = !Number.isNaN(parsedValue) && quantityInput.value !== parsedValue.toString();
  if (hasLeadingZeros) {
    quantityInput.value = parsedValue;
  }
  if (parsedValue > maxQuantity) {
    quantityInput.value = maxQuantity;
    return;
  }
};
var preventEmpty = function preventEmpty(quantityInput, getMaxQuantity) {
  var parsedValue = parseInt(quantityInput.value, 10);
  var maxQuantity = getMaxQuantity();
  if (!Number.isInteger(parsedValue)) {
    quantityInput.value = maxQuantity === 0 ? 0 : 1;
  }
};
var preventZero = function preventZero(quantityInput, getMaxQuantity) {
  var parsedValue = parseInt(quantityInput.value, 10);
  var maxQuantity = getMaxQuantity();
  if (Number.isInteger(parsedValue) && parsedValue === 0 && maxQuantity !== 0) {
    quantityInput.value = 1;
  }
};
var forceValidQuantityInInput = function forceValidQuantityInInput(quantityInput, getMaxQuantity) {
  var parsedValue = parseInt(quantityInput.value, 10);
  var maxQuantity = getMaxQuantity();
  if (maxQuantity === 0) {
    quantityInput.value = 0;
    return;
  }
  if (Number.isNaN(parsedValue) || parsedValue === 0) {
    quantityInput.value = 1;
    return;
  }
  if (parsedValue > maxQuantity) {
    quantityInput.value = maxQuantity;
    return;
  }
  var hasLeadingZeros = !Number.isNaN(parsedValue) && quantityInput.value !== parsedValue.toString();
  if (hasLeadingZeros) {
    quantityInput.value = parsedValue;
  }
};
var getValidQuantity = function getValidQuantity(value, minQuantity, maxQuantity) {
  if (minQuantity > maxQuantity && minQuantity >= 0) {
    throw new Error('helper:quantity.input:getValidQuantity: minQuantity cannot be negative number and cannot be greater than maxQuantity');
  }
  var parsedValue = parseInt(value, 10);
  if (Number.isNaN(parsedValue)) {
    return maxQuantity === 0 ? 0 : 1;
  }
  if (parsedValue > maxQuantity) {
    return maxQuantity;
  }
  if (parsedValue < minQuantity) {
    return minQuantity;
  }
  return parsedValue;
};

/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/text.helper.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/text.helper.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeHTML: () => (/* binding */ escapeHTML)
/* harmony export */ });
var escapeHTML = function escapeHTML(string) {
  var stringTempNode = document.createElement('div');
  stringTempNode.appendChild(document.createTextNode(string));
  return stringTempNode.innerHTML;
};

/***/ }),

/***/ "./vendor/ibexa/cart/src/bundle/Resources/public/js/service/cart.js":
/*!**************************************************************************!*\
  !*** ./vendor/ibexa/cart/src/bundle/Resources/public/js/service/cart.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authorize: () => (/* binding */ authorize),
/* harmony export */   createCart: () => (/* binding */ createCart),
/* harmony export */   createCartEntry: () => (/* binding */ createCartEntry),
/* harmony export */   deleteCart: () => (/* binding */ deleteCart),
/* harmony export */   deleteCartEntry: () => (/* binding */ deleteCartEntry),
/* harmony export */   emptyCart: () => (/* binding */ emptyCart),
/* harmony export */   loadCart: () => (/* binding */ loadCart),
/* harmony export */   loadCartSummary: () => (/* binding */ loadCartSummary),
/* harmony export */   loadUserCarts: () => (/* binding */ loadUserCarts),
/* harmony export */   updateProductQuantity: () => (/* binding */ updateProductQuantity)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var prepareRequest = function prepareRequest(url, requestOptions, requestIdentifier) {
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var request = new Request(url, _objectSpread(_objectSpread({
    mode: 'same-origin',
    credentials: 'same-origin'
  }, requestOptions), {}, {
    headers: _objectSpread({
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }, requestOptions.headers)
  }));
  var detail = {
    requestIdentifier: requestIdentifier,
    request: request
  };
  document.dispatchEvent(new CustomEvent('ibexa-cart:prepare-request', {
    detail: detail
  }));
  return detail.request;
};
var handleRequest = function handleRequest(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
var authorize = function authorize() {
  var request = prepareRequest('/api/ibexa/v2/cart/authorize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.ibexa.api.CartViewInput+json',
      Accept: 'application/json'
    }
  }, 'ibexa-rest-cart-cart_authorize');
  return fetch(request).then(function (response) {
    return handleRequest(response).json();
  });
};
var loadUserCarts = function loadUserCarts(ownerId) {
  var request = prepareRequest('/api/ibexa/v2/cart/view', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.ibexa.api.CartViewInput+json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      CartViewInput: {
        identifier: 'loadUserCarts',
        CartQuery: {
          offset: 0,
          limit: 10,
          ownerId: ownerId
        }
      }
    })
  }, 'ibexa-rest-cart-cart_view');
  return fetch(request).then(function (response) {
    return handleRequest(response).json();
  });
};
var loadCart = function loadCart(cartIdentifier) {
  var request = prepareRequest("/api/ibexa/v2/cart/".concat(cartIdentifier), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.ibexa.api.CartViewInput+json',
      Accept: 'application/json'
    }
  }, 'ibexa-rest-cart-get');
  return fetch(request).then(function (response) {
    return handleRequest(response).json();
  });
};
var loadCartSummary = function loadCartSummary(cartIdentifier) {
  var request = prepareRequest("/api/ibexa/v2/cart/".concat(cartIdentifier, "/summary"), {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }, 'ibexa-rest-cart-summary');
  return fetch(request).then(function (response) {
    return handleRequest(response).json();
  });
};
var createCart = function createCart(currencyCode) {
  var request = prepareRequest('/api/ibexa/v2/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.ibexa.api.CartCreate+json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      CartCreate: {
        name: 'Default',
        currencyCode: currencyCode
      }
    })
  }, 'ibexa-rest-cart-create');
  return fetch(request).then(function (response) {
    return handleRequest(response).json();
  });
};
var deleteCart = function deleteCart(cartIdentifier) {
  var request = prepareRequest("/api/ibexa/v2/cart/".concat(cartIdentifier), {
    method: 'DELETE'
  }, 'ibexa-rest-cart-delete');
  return fetch(request);
};
var createCartEntry = function createCartEntry(cartIdentifier, productCode, quantity) {
  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var request = prepareRequest("/api/ibexa/v2/cart/".concat(cartIdentifier, "/entry"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.ibexa.api.CartEntryAdd+json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      CartEntryAdd: {
        quantity: quantity,
        Product: {
          code: productCode
        },
        context: context
      }
    })
  }, 'ibexa-rest-cart-cart_entry-add');
  return fetch(request).then(function (response) {
    return handleRequest(response).json();
  });
};
var updateProductQuantity = function updateProductQuantity(cartIdentifier, entryIdentifier, quantity) {
  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var request = prepareRequest("/api/ibexa/v2/cart/".concat(cartIdentifier, "/entry/").concat(entryIdentifier), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/vnd.ibexa.api.CartEntryUpdate+json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      CartEntryUpdate: {
        quantity: quantity,
        context: context
      }
    })
  }, 'ibexa-rest-cart-cart_entry-update');
  return fetch(request).then(function (response) {
    return handleRequest(response).json();
  });
};
var deleteCartEntry = function deleteCartEntry(cartIdentifier, entryIdentifier) {
  var request = prepareRequest("/api/ibexa/v2/cart/".concat(cartIdentifier, "/entry/").concat(entryIdentifier), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json'
    }
  }, 'ibexa-rest-cart_entry-remove');
  return fetch(request).then(function (response) {
    return handleRequest(response).json();
  });
};
var emptyCart = function emptyCart(cartIdentifier) {
  var request = prepareRequest("/api/ibexa/v2/cart/".concat(cartIdentifier, "/empty"), {
    method: 'POST'
  }, 'ibexa-rest-cart-empty');
  return fetch(request).then(handleRequest);
};

/***/ }),

/***/ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/add.to.cart.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/add.to.cart.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StorefrontAddToCart)
/* harmony export */ });
/* harmony import */ var _ibexa_cart_src_bundle_Resources_public_js_component_add_to_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-cart/src/bundle/Resources/public/js/component/add.to.cart */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/add.to.cart.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var StorefrontAddToCart = /*#__PURE__*/function (_AddToCart) {
  function StorefrontAddToCart(options) {
    var _this;
    _classCallCheck(this, StorefrontAddToCart);
    _this = _callSuper(this, StorefrontAddToCart, [options]);
    _this.variantSelectorNode = _this.container.querySelector('.ibexa-store-add-to-cart__variant-selector');
    return _this;
  }
  _inherits(StorefrontAddToCart, _AddToCart);
  return _createClass(StorefrontAddToCart, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      _superPropGet(StorefrontAddToCart, "init", this, 3)(arguments);
      this.quantityInput.addEventListener('input', function () {
        return _this2.toggleQuantityInputHighlight(false);
      }, false);
      if (this.variantSelectorNode) {
        this.variantSelectorNode.addEventListener('change', function () {
          return _this2.toggleVariantHighlight(false);
        }, false);
      }
    }
  }, {
    key: "toggleVariantHighlight",
    value: function toggleVariantHighlight(show) {
      this.variantSelectorNode.classList.toggle('ibexa-store-add-to-cart__variant-selector--highlight', show);
    }
  }, {
    key: "toggleQuantityInputHighlight",
    value: function toggleQuantityInputHighlight(show) {
      this.quantityInput.classList.toggle('ibexa-store-add-to-cart__quantity-input--highlight', show);
    }
  }, {
    key: "handleQuantityUpdateError",
    value: function handleQuantityUpdateError(productAdded) {
      var _this3 = this;
      if (productAdded instanceof Promise) {
        productAdded["catch"](function () {
          _this3.toggleQuantityInputHighlight(true);
        });
      }
    }
  }, {
    key: "handleQuantityAddedDuringCardLoading",
    value: function handleQuantityAddedDuringCardLoading() {
      var productAdded = _superPropGet(StorefrontAddToCart, "handleQuantityAddedDuringCardLoading", this, 3)(arguments);
      this.handleQuantityUpdateError(productAdded);
    }
  }, {
    key: "handleAddToCart",
    value: function handleAddToCart() {
      if (this.variantSelectorNode) {
        var selectedVariantCode = this.variantSelectorNode.value;
        if (!selectedVariantCode) {
          this.toggleVariantHighlight(true);
          return;
        }
      }
      var productAdded = _superPropGet(StorefrontAddToCart, "handleAddToCart", this, 3)(arguments);
      this.handleQuantityUpdateError(productAdded);
    }
  }]);
}(_ibexa_cart_src_bundle_Resources_public_js_component_add_to_cart__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/cart.js":
/*!*****************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/cart.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StorefrontCart)
/* harmony export */ });
/* harmony import */ var _ibexa_cart_src_bundle_Resources_public_js_component_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-cart/src/bundle/Resources/public/js/component/cart */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/cart.js");
/* harmony import */ var _ibexa_cart_src_bundle_Resources_public_js_service_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-cart/src/bundle/Resources/public/js/service/cart */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/service/cart.js");
/* harmony import */ var _helper_error_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/error.helper */ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/helper/error.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var StorefrontCart = /*#__PURE__*/function (_Cart) {
  function StorefrontCart() {
    _classCallCheck(this, StorefrontCart);
    return _callSuper(this, StorefrontCart, arguments);
  }
  _inherits(StorefrontCart, _Cart);
  return _createClass(StorefrontCart, [{
    key: "createCart",
    value: function createCart() {
      return _superPropGet(StorefrontCart, "createCart", this, 3)(arguments)["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_2__.errorHandler);
    }
  }, {
    key: "loadCart",
    value: function loadCart() {
      var _document$querySelect,
        _this = this;
      var cartIdentifier = (_document$querySelect = document.querySelector('meta[name="CartIdentifier"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content;
      if (cartIdentifier) {
        return _ibexa_cart_src_bundle_Resources_public_js_service_cart__WEBPACK_IMPORTED_MODULE_1__.loadCart(cartIdentifier).then(function (response) {
          _ibexa_cart_src_bundle_Resources_public_js_service_cart__WEBPACK_IMPORTED_MODULE_1__.loadCartSummary(cartIdentifier).then(function (summaryResponse) {
            _this.cartData = response.Cart;
            _this.cartSummary = summaryResponse.CartSummary;
            _this.onCartDataChanged();
          });
        })["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_2__.errorHandler);
      }
      return _superPropGet(StorefrontCart, "loadCart", this, 3)(arguments)["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_2__.errorHandler);
    }
  }, {
    key: "addProduct",
    value: function addProduct() {
      return _superPropGet(StorefrontCart, "addProduct", this, 3)(arguments)["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_2__.errorHandler);
    }
  }, {
    key: "updateEntryQuantity",
    value: function updateEntryQuantity() {
      return _superPropGet(StorefrontCart, "updateEntryQuantity", this, 3)(arguments)["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_2__.errorHandler);
    }
  }, {
    key: "removeEntry",
    value: function removeEntry() {
      return _superPropGet(StorefrontCart, "removeEntry", this, 3)(arguments)["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_2__.errorHandler);
    }
  }, {
    key: "empty",
    value: function empty() {
      return _superPropGet(StorefrontCart, "empty", this, 3)(arguments)["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_2__.errorHandler);
    }
  }]);
}(_ibexa_cart_src_bundle_Resources_public_js_component_cart__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/maincart.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/maincart.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StorefrontMaincart)
/* harmony export */ });
/* harmony import */ var _ibexa_cart_src_bundle_Resources_public_js_component_maincart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-cart/src/bundle/Resources/public/js/component/maincart */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/maincart.js");
/* harmony import */ var _ibexa_cart_src_bundle_Resources_public_js_component_summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-cart/src/bundle/Resources/public/js/component/summary */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/summary.js");
/* harmony import */ var _ibexa_cart_src_bundle_Resources_public_js_helper_text_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-cart/src/bundle/Resources/public/js/helper/text.helper */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/helper/text.helper.js");
/* harmony import */ var _helper_error_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/error.helper */ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/helper/error.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var StorefrontMaincart = /*#__PURE__*/function (_Maincart) {
  function StorefrontMaincart(options) {
    var _this;
    _classCallCheck(this, StorefrontMaincart);
    _this = _callSuper(this, StorefrontMaincart, [options]);
    _this.summaryWrapperNode = _this.container.querySelector('.ibexa-store-maincart__summary-wrapper');
    _this.summaryWrapperNode = _this.container.querySelector('.ibexa-store-maincart__summary-wrapper');
    _this.emptyCartContainerNode = _this.container.querySelector('.ibexa-store-maincart__empty-cart-container');
    _this.itemsCounterValueNode = _this.container.querySelector('.ibexa-store-maincart__items-counter-value');
    _this.clearCartBtn = _this.container.querySelector('.ibexa-store-maincart__clear-cart-btn');
    _this.goToCheckoutBtn = _this.summaryWrapperNode.querySelector('.ibexa-store-maincart-summary__action--go-to-checkout');
    _this.entryViolationStatusTemplate = _this.itemsContainerNode.dataset.entryViolationStatusTemplate;
    _this.productsToHighlightCodes = _this.container.dataset.productsToHighlightCodes;
    _this.quantityChangeErrorHighlightTimeout = 2100;
    _this.cartSummary = null;
    _this.onCartClear = _this.onCartClear.bind(_this);
    return _this;
  }
  _inherits(StorefrontMaincart, _Maincart);
  return _createClass(StorefrontMaincart, [{
    key: "init",
    value: function init() {
      _superPropGet(StorefrontMaincart, "init", this, 3)(arguments);
      this.attachStorefrontMaincartListeners();
      this.cartSummary = new _ibexa_cart_src_bundle_Resources_public_js_component_summary__WEBPACK_IMPORTED_MODULE_1__["default"]({
        container: this.summaryWrapperNode
      });
      this.cartSummary.init();
    }
  }, {
    key: "attachStorefrontMaincartListeners",
    value: function attachStorefrontMaincartListeners() {
      var _this2 = this;
      this.clearCartBtn.addEventListener('click', this.onCartClear, false);
      document.body.addEventListener('ibexa-cart:cart-data-changed', function () {
        _this2.toggleSummary();
        _this2.toggleGoToCheckoutBtn();
        _this2.refreshEmptyCart();
        _this2.refreshItemsCounter();
      }, false);
    }
  }, {
    key: "updateItem",
    value: function updateItem(entry) {
      var _entrySummary$Price$R, _entrySummary$Price, _entrySummary$Subtota, _entrySummary$Subtota2;
      _superPropGet(StorefrontMaincart, "updateItem", this, 3)(arguments);
      var entrySummary = this.cart.getEntrySummaryByIdentifier(entry.identifier);
      var productPriceNetFormatted = (_entrySummary$Price$R = entrySummary === null || entrySummary === void 0 || (_entrySummary$Price = entrySummary.Price) === null || _entrySummary$Price === void 0 || (_entrySummary$Price = _entrySummary$Price.RestPrice) === null || _entrySummary$Price === void 0 ? void 0 : _entrySummary$Price.formatted) !== null && _entrySummary$Price$R !== void 0 ? _entrySummary$Price$R : '';
      var subtotalPriceNetFormatted = (_entrySummary$Subtota = entrySummary === null || entrySummary === void 0 || (_entrySummary$Subtota2 = entrySummary.SubtotalPrice) === null || _entrySummary$Subtota2 === void 0 || (_entrySummary$Subtota2 = _entrySummary$Subtota2.RestPrice) === null || _entrySummary$Subtota2 === void 0 ? void 0 : _entrySummary$Subtota2.formatted) !== null && _entrySummary$Subtota !== void 0 ? _entrySummary$Subtota : '';
      var itemNode = this.findItemByEntryIdentifier(entry.identifier);
      var subtotalPriceNode = itemNode.querySelector('.ibexa-store-maincart-item__subtotal-price-net');
      var priceNode = itemNode.querySelector('.ibexa-store-maincart-item__price-net');
      subtotalPriceNode.innerText = this.netPriceTemplate.replace('{{ price }}', subtotalPriceNetFormatted);
      priceNode.innerText = this.netPriceTemplate.replace('{{ price }}', productPriceNetFormatted);
      this.setAvailability(entry, itemNode);
    }
  }, {
    key: "checkIsCartEmpty",
    value: function checkIsCartEmpty() {
      var cartEntries = this.cart.getEntries();
      var isCartEmpty = !cartEntries.length;
      return isCartEmpty;
    }
  }, {
    key: "toggleSummary",
    value: function toggleSummary() {
      var isCartEmpty = this.checkIsCartEmpty();
      this.summaryWrapperNode.classList.toggle('ibexa-store-maincart__summary-wrapper--hidden', isCartEmpty);
    }
  }, {
    key: "toggleGoToCheckoutBtn",
    value: function toggleGoToCheckoutBtn() {
      var cartSummary = this.cart.getCartSummary();
      var hasAnyViolations = !!cartSummary.CartConstraintViolationList.violations.length;
      this.goToCheckoutBtn.toggleAttribute('disabled', hasAnyViolations);
    }
  }, {
    key: "refreshEmptyCart",
    value: function refreshEmptyCart() {
      var isCartEmpty = this.checkIsCartEmpty();
      this.emptyCartContainerNode.classList.toggle('ibexa-store-maincart__empty-cart-container--hidden', !isCartEmpty);
    }
  }, {
    key: "renderItem",
    value: function renderItem(entry) {
      var _entrySummary$Price$R2, _entrySummary$Price2, _entrySummary$Subtota3, _entrySummary$Subtota4, _entrySummary$Product, _entrySummary$Product2, _entrySummary$Product3, _entrySummary$Product4;
      var entrySummary = this.cart.getEntrySummaryByIdentifier(entry.identifier);
      var productPriceNetFormatted = (_entrySummary$Price$R2 = entrySummary === null || entrySummary === void 0 || (_entrySummary$Price2 = entrySummary.Price) === null || _entrySummary$Price2 === void 0 || (_entrySummary$Price2 = _entrySummary$Price2.RestPrice) === null || _entrySummary$Price2 === void 0 ? void 0 : _entrySummary$Price2.formatted) !== null && _entrySummary$Price$R2 !== void 0 ? _entrySummary$Price$R2 : '';
      var subtotalPriceNetFormatted = (_entrySummary$Subtota3 = entrySummary === null || entrySummary === void 0 || (_entrySummary$Subtota4 = entrySummary.SubtotalPrice) === null || _entrySummary$Subtota4 === void 0 || (_entrySummary$Subtota4 = _entrySummary$Subtota4.RestPrice) === null || _entrySummary$Subtota4 === void 0 ? void 0 : _entrySummary$Subtota4.formatted) !== null && _entrySummary$Subtota3 !== void 0 ? _entrySummary$Subtota3 : '';
      var productCode = (_entrySummary$Product = entrySummary === null || entrySummary === void 0 || (_entrySummary$Product2 = entrySummary.Product) === null || _entrySummary$Product2 === void 0 ? void 0 : _entrySummary$Product2.code) !== null && _entrySummary$Product !== void 0 ? _entrySummary$Product : '';
      var productThumbnailImg = (_entrySummary$Product3 = entrySummary === null || entrySummary === void 0 || (_entrySummary$Product4 = entrySummary.Product) === null || _entrySummary$Product4 === void 0 || (_entrySummary$Product4 = _entrySummary$Product4.Thumbnail) === null || _entrySummary$Product4 === void 0 ? void 0 : _entrySummary$Product4.resource) !== null && _entrySummary$Product3 !== void 0 ? _entrySummary$Product3 : '/placeholder';
      var itemRenderedPartly = _superPropGet(StorefrontMaincart, "renderItem", this, 3)([entry]);
      var itemRendered = itemRenderedPartly.replaceAll('{{ product_name }}', (0,_ibexa_cart_src_bundle_Resources_public_js_helper_text_helper__WEBPACK_IMPORTED_MODULE_2__.escapeHTML)(this.cart.getEntryProductName(entry.identifier))).replaceAll('{{ product_code }}', (0,_ibexa_cart_src_bundle_Resources_public_js_helper_text_helper__WEBPACK_IMPORTED_MODULE_2__.escapeHTML)(productCode)).replaceAll('{{ product_price_net }}', this.netPriceTemplate.replace('{{ price }}', productPriceNetFormatted)).replaceAll('{{ product_image_url }}', (0,_ibexa_cart_src_bundle_Resources_public_js_helper_text_helper__WEBPACK_IMPORTED_MODULE_2__.escapeHTML)(productThumbnailImg)).replaceAll('{{ subtotal_price }}', this.netPriceTemplate.replace('{{ price }}', subtotalPriceNetFormatted));
      return itemRendered;
    }
  }, {
    key: "onItemInserted",
    value: function onItemInserted(entry, itemNode) {
      _superPropGet(StorefrontMaincart, "onItemInserted", this, 3)(arguments);
      this.setAvailability(entry, itemNode);
      this.setHighlight(entry, itemNode);
    }
  }, {
    key: "setAvailability",
    value: function setAvailability(entry, itemNode) {
      var _entrySummary$Product5, _entrySummary$Product6;
      var entrySummary = this.cart.getEntrySummaryByIdentifier(entry.identifier);
      var isAvailable = (_entrySummary$Product5 = entrySummary === null || entrySummary === void 0 || (_entrySummary$Product6 = entrySummary.Product) === null || _entrySummary$Product6 === void 0 || (_entrySummary$Product6 = _entrySummary$Product6.Availability) === null || _entrySummary$Product6 === void 0 ? void 0 : _entrySummary$Product6.is_available) !== null && _entrySummary$Product5 !== void 0 ? _entrySummary$Product5 : false;
      var availabilityNode = itemNode.querySelector('.ibexa-store-maincart-item__availability');
      availabilityNode.classList.toggle('ibexa-store-maincart-item__availability--out', !isAvailable);
      availabilityNode.classList.toggle('ibexa-store-maincart-item__availability--in', isAvailable);
    }
  }, {
    key: "setHighlight",
    value: function setHighlight(entry, itemNode) {
      var _entrySummary$Product7, _entrySummary$Product8;
      var entrySummary = this.cart.getEntrySummaryByIdentifier(entry.identifier);
      var productCode = (_entrySummary$Product7 = entrySummary === null || entrySummary === void 0 || (_entrySummary$Product8 = entrySummary.Product) === null || _entrySummary$Product8 === void 0 ? void 0 : _entrySummary$Product8.code) !== null && _entrySummary$Product7 !== void 0 ? _entrySummary$Product7 : '';
      var shouldBeHighlighted = this.productsToHighlightCodes.includes(productCode);
      itemNode.classList.toggle('ibexa-store-maincart-item--highlighted', shouldBeHighlighted);
    }
  }, {
    key: "refreshItemsCounter",
    value: function refreshItemsCounter() {
      this.itemsCounterValueNode.innerText = this.cart.getEntries().length;
    }
  }, {
    key: "handleItemRemove",
    value: function handleItemRemove() {
      _superPropGet(StorefrontMaincart, "handleItemRemove", this, 3)(arguments)["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_3__.errorHandler);
    }
  }, {
    key: "onCartClear",
    value: function onCartClear() {
      var _this$cart;
      (_this$cart = this.cart).empty.apply(_this$cart, arguments)["catch"](_helper_error_helper__WEBPACK_IMPORTED_MODULE_3__.errorHandler);
    }
  }, {
    key: "addEntryInvalidState",
    value: function addEntryInvalidState(entry, entryViolations) {
      var _this3 = this;
      _superPropGet(StorefrontMaincart, "addEntryInvalidState", this, 3)([entry, entryViolations]);
      var itemNode = this.findItemByEntryIdentifier(entry.identifier);
      var availabilityNode = itemNode.querySelector('.ibexa-store-maincart-item__availability');
      var statusesContainer = itemNode.querySelector('.ibexa-store-maincart-item__statuses');
      availabilityNode.classList.add('ibexa-store-maincart-item__availability--hidden');
      itemNode.classList.add('ibexa-store-maincart-item--invalid');
      entryViolations.forEach(function (violation) {
        var violationStatusRendered = _this3.entryViolationStatusTemplate.replaceAll('{{ content }}', violation.message);
        statusesContainer.insertAdjacentHTML('beforeend', violationStatusRendered);
      });
    }
  }, {
    key: "removeEntryInvalidState",
    value: function removeEntryInvalidState(entry) {
      _superPropGet(StorefrontMaincart, "removeEntryInvalidState", this, 3)([entry]);
      var itemNode = this.findItemByEntryIdentifier(entry.identifier);
      var availabilityNode = itemNode.querySelector('.ibexa-store-maincart-item__availability');
      var violationStatuses = itemNode.querySelectorAll('.ibexa-store-maincart-item__entry-violation-status');
      availabilityNode.classList.remove('ibexa-store-maincart-item__availability--hidden');
      itemNode.classList.remove('ibexa-store-maincart-item--invalid');
      violationStatuses.forEach(function (violationStatus) {
        return violationStatus.remove();
      });
    }
  }, {
    key: "showQuantityChangeErrorInputHighlight",
    value: function showQuantityChangeErrorInputHighlight(quantityInput) {
      quantityInput.classList.add('ibexa-store-add-to-cart__quantity-input--highlight');
      setTimeout(function () {
        quantityInput.classList.remove('ibexa-store-add-to-cart__quantity-input--highlight');
      }, this.quantityChangeErrorHighlightTimeout);
    }
  }, {
    key: "handleQuantityInputChange",
    value: function handleQuantityInputChange(_ref) {
      var _this4 = this;
      var quantityInput = _ref.target;
      var productAdded = _superPropGet(StorefrontMaincart, "handleQuantityInputChange", this, 3)(arguments);
      if (productAdded instanceof Promise) {
        productAdded["catch"](function () {
          _this4.showQuantityChangeErrorInputHighlight(quantityInput);
        });
      }
    }
  }]);
}(_ibexa_cart_src_bundle_Resources_public_js_component_maincart__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/minicart.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/minicart.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StorefrontMinicart)
/* harmony export */ });
/* harmony import */ var _ibexa_cart_src_bundle_Resources_public_js_component_minicart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-cart/src/bundle/Resources/public/js/component/minicart */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/minicart.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var StorefrontMinicart = /*#__PURE__*/function (_Minicart) {
  function StorefrontMinicart() {
    _classCallCheck(this, StorefrontMinicart);
    return _callSuper(this, StorefrontMinicart, arguments);
  }
  _inherits(StorefrontMinicart, _Minicart);
  return _createClass(StorefrontMinicart);
}(_ibexa_cart_src_bundle_Resources_public_js_component_minicart__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/quick.order.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/quick.order.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StorefrontQuickOrder)
/* harmony export */ });
/* harmony import */ var _ibexa_cart_src_bundle_Resources_public_js_component_quick_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-cart/src/bundle/Resources/public/js/component/quick.order */ "./vendor/ibexa/cart/src/bundle/Resources/public/js/component/quick.order.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var StorefrontQuickOrder = /*#__PURE__*/function (_QuickOrder) {
  function StorefrontQuickOrder(options) {
    var _this;
    _classCallCheck(this, StorefrontQuickOrder);
    _this = _callSuper(this, StorefrontQuickOrder, [options]);
    _this.fileWrapperContent = _this.container.querySelector('.ibexa-store-quick-order__file-wrapper-content');
    _this.addFileBtn = _this.container.querySelector('.ibexa-store-quick-order__file-add-btn');
    _this.fileAddedInfo = _this.container.querySelector('.ibexa-store-quick-order__file-added-info');
    _this.fileAddedInfoTextTemplate = _this.fileAddedInfo.dataset.infoText;
    _this.allowDropOnDiv = _this.allowDropOnDiv.bind(_this);
    _this.handleFileDrop = _this.handleFileDrop.bind(_this);
    _this.handleAddFileBtnClicked = _this.handleAddFileBtnClicked.bind(_this);
    _this.handleFileChanged = _this.handleFileChanged.bind(_this);
    return _this;
  }
  _inherits(StorefrontQuickOrder, _QuickOrder);
  return _createClass(StorefrontQuickOrder, [{
    key: "init",
    value: function init() {
      _superPropGet(StorefrontQuickOrder, "init", this, 3)(arguments);
      this.fileWrapperContent.addEventListener('dragover', this.allowDropOnDiv, false);
      this.fileWrapperContent.addEventListener('drop', this.handleFileDrop, false);
      this.addFileBtn.addEventListener('click', this.handleAddFileBtnClicked, false);
      this.fileInput.addEventListener('change', this.handleFileChanged, false);
    }
  }, {
    key: "allowDropOnDiv",
    value: function allowDropOnDiv(event) {
      event.preventDefault();
    }
  }, {
    key: "handleFileDrop",
    value: function handleFileDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      var files = event.dataTransfer.files;
      this.fileInput.files = files;
      this.fileInput.dispatchEvent(new Event('change'));
    }
  }, {
    key: "handleAddFileBtnClicked",
    value: function handleAddFileBtnClicked() {
      this.fileInput.click();
    }
  }, {
    key: "handleFileChanged",
    value: function handleFileChanged() {
      var files = this.fileInput.files;
      var isFileAdded = !!files.length;
      if (isFileAdded) {
        var fileName = files[0].name;
        this.fileAddedInfo.innerText = this.fileAddedInfoTextTemplate.replaceAll('__file_name__', fileName);
      } else {
        this.fileAddedInfo.innerText = '';
      }
    }
  }]);
}(_ibexa_cart_src_bundle_Resources_public_js_component_quick_order__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/helper/error.helper.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/helper/error.helper.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorHandler: () => (/* binding */ errorHandler)
/* harmony export */ });
var errorHandler = function errorHandler(error) {
  if (error.message) {
    console.warn(error.message);
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart.components.js ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_add_to_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart/add.to.cart */ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/add.to.cart.js");
/* harmony import */ var _cart_maincart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/maincart */ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/maincart.js");
/* harmony import */ var _cart_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart */ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/cart.js");
/* harmony import */ var _cart_minicart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/minicart */ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/minicart.js");
/* harmony import */ var _cart_quick_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/quick.order */ "./vendor/ibexa/storefront/src/bundle/Resources/public/js/cart/quick.order.js");





(function (global, doc) {
  var minicartContainer = doc.querySelector('.ibexa-store-minicart');
  var maincartContainer = doc.querySelector('.ibexa-store-maincart');
  var addToCartsContainers = doc.querySelectorAll('.ibexa-store-add-to-cart');
  var quickOrderContainers = doc.querySelectorAll('.ibexa-store-quick-order');
  new _cart_cart__WEBPACK_IMPORTED_MODULE_2__["default"]();
  if (minicartContainer) {
    var minicart = new _cart_minicart__WEBPACK_IMPORTED_MODULE_3__["default"]({
      container: minicartContainer
    });
    minicart.init();
  }
  if (maincartContainer) {
    var maincart = new _cart_maincart__WEBPACK_IMPORTED_MODULE_1__["default"]({
      container: maincartContainer
    });
    maincart.init();
  }
  addToCartsContainers.forEach(function (container) {
    var addToCart = new _cart_add_to_cart__WEBPACK_IMPORTED_MODULE_0__["default"]({
      container: container
    });
    addToCart.init();
  });
  quickOrderContainers.forEach(function (container) {
    var quickOrder = new _cart_quick_order__WEBPACK_IMPORTED_MODULE_4__["default"]({
      container: container
    });
    quickOrder.init();
  });
})(window, window.document);
})();

/******/ })()
;