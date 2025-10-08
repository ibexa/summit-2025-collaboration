(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-products-selector-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/products.selector.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/products.selector.js ***!
  \******************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, React, ReactDOM) {
  var productsSelectors = doc.querySelectorAll('.ibexa-pc-product-selector');
  productsSelectors.forEach(function (container) {
    var productsSelectorModuleRootContainer = container.querySelector('.ibexa-pc-product-selector__module-root');
    var productsSelectorModuleRoot = ReactDOM.createRoot(productsSelectorModuleRootContainer);
    var _container$dataset = container.dataset,
      udwConfigProductDiscoveryWidgetString = _container$dataset.udwConfigProductDiscoveryWidget,
      valueInputSelector = _container$dataset.valueInputSelector;
    var udwConfigProductDiscoveryWidget = JSON.parse(udwConfigProductDiscoveryWidgetString);
    var valueInput = doc.querySelector(valueInputSelector);
    var initialValue = valueInput.value ? JSON.parse(valueInput.value) : [];
    var handleProductsChanged = function handleProductsChanged(newSelectedProductsItems) {
      var productsItems = newSelectedProductsItems.map(function (_ref) {
        var productCode = _ref.productCode,
          productVariants = _ref.productVariants;
        var item = {
          productCode: productCode
        };
        if (productVariants) {
          item.productVariants = productVariants;
        }
        return item;
      });
      valueInput.value = JSON.stringify(productsItems);
      valueInput.dispatchEvent(new Event('change'));
    };
    productsSelectorModuleRoot.render(React.createElement(ibexa.modules.ProductsSelector, {
      handleProductsChanged: handleProductsChanged,
      udwConfigProductDiscoveryWidget: udwConfigProductDiscoveryWidget,
      initialValue: initialValue
    }));
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/products.selector.js"));
/******/ }
]);