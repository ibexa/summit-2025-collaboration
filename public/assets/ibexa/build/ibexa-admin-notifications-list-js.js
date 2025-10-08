(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-notifications-list-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.filters.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.filters.js ***!
  \*****************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var searchForm = doc.querySelector('.ibexa-list-search-form');
  var filtersContainerNode = doc.querySelector('.ibexa-list-filters');
  var applyFiltersBtn = filtersContainerNode.querySelector('.ibexa-btn--apply');
  var clearFiltersBtn = filtersContainerNode.querySelector('.ibexa-btn--clear');
  var statusFilterNode = filtersContainerNode.querySelector('.ibexa-list-filters__item--statuses');
  var typeFilterNode = filtersContainerNode.querySelector('.ibexa-list-filters__item--type');
  var datetimeFilterNodes = filtersContainerNode.querySelectorAll('.ibexa-list-filters__item--date-time .ibexa-picker');
  var clearFilter = function clearFilter(filterNode) {
    if (!filterNode) {
      return;
    }
    var sourceSelect = filterNode.querySelector('.ibexa-list-filters__item-content .ibexa-dropdown__source .ibexa-input--select');
    var checkboxes = filterNode.querySelectorAll('.ibexa-list-filters__item-content .ibexa-input--checkbox:not([name="dropdown-checkbox"])');
    var timePicker = filterNode.querySelector('.ibexa-date-time-picker__input');
    if (sourceSelect) {
      var sourceSelectOptions = sourceSelect.querySelectorAll('option');
      sourceSelectOptions.forEach(function (option) {
        option.selected = false;
      });
      if (isNodeDatePicker(filterNode)) {
        sourceSelectOptions[0].selected = true;
      }
    } else if (checkboxes.length) {
      checkboxes.forEach(function (checkbox) {
        return checkbox.checked = false;
      });
    } else if (timePicker.value.length) {
      var formInput = filterNode.querySelector('.ibexa-picker__form-input');
      timePicker.value = '';
      formInput.value = '';
      timePicker.dispatchEvent(new Event('input'));
      formInput.dispatchEvent(new Event('input'));
    }
    searchForm.submit();
  };
  var attachStatusFilterEvents = function attachStatusFilterEvents(filterNode) {
    if (!filterNode) {
      return;
    }
    var checkboxes = filterNode.querySelectorAll('.ibexa-list-filters__item-content .ibexa-input--checkbox:not([name="dropdown-checkbox"])');
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', filterChange, false);
    });
  };
  var attachTypeFilterEvents = function attachTypeFilterEvents(filterNode) {
    if (!filterNode) {
      return;
    }
    var sourceSelect = filterNode.querySelector('.ibexa-list-filters__item-content .ibexa-dropdown__source .ibexa-input--select');
    sourceSelect === null || sourceSelect === void 0 || sourceSelect.addEventListener('change', filterChange, false);
  };
  var attachDateFilterEvents = function attachDateFilterEvents(filterNode) {
    if (!filterNode) {
      return;
    }
    var picker = filterNode.querySelector('.ibexa-input--date');
    picker === null || picker === void 0 || picker.addEventListener('change', dateFilterChange, false);
  };
  var isNodeDatePicker = function isNodeDatePicker(filterNode) {
    return filterNode.classList.contains('ibexa-picker');
  };
  var hasFilterValue = function hasFilterValue(filterNode) {
    if (!filterNode) {
      return;
    }
    var select = filterNode.querySelector('.ibexa-dropdown__source .ibexa-input--select');
    var checkedCheckboxes = filterNode.querySelectorAll('.ibexa-input--checkbox:checked');
    if (isNodeDatePicker(filterNode)) {
      var timePicker = filterNode.querySelector('.ibexa-date-time-picker__input');
      return !!timePicker.dataset.timestamp;
    }
    return !!(select !== null && select !== void 0 && select.value || checkedCheckboxes !== null && checkedCheckboxes !== void 0 && checkedCheckboxes.length);
  };
  var isSomeFilterSet = function isSomeFilterSet() {
    var hasStatusFilterValue = hasFilterValue(statusFilterNode);
    var hasTypeFilterValue = hasFilterValue(typeFilterNode);
    var hasDatetimeFilterValue = _toConsumableArray(datetimeFilterNodes).some(hasFilterValue);
    return hasStatusFilterValue || hasTypeFilterValue || hasDatetimeFilterValue;
  };
  var attachInitEvents = function attachInitEvents() {
    attachStatusFilterEvents(statusFilterNode);
    attachTypeFilterEvents(typeFilterNode);
    datetimeFilterNodes.forEach(function (input) {
      return attachDateFilterEvents(input);
    });
  };
  var dateFilterChange = function dateFilterChange(event) {
    var dateInput = event.target;
    if (dateInput.classList.contains('is-invalid')) {
      dateInput.classList.remove('is-invalid');
      var errorWrapper = dateInput.closest('.form-group').querySelector('.ibexa-form-error');
      if (errorWrapper) {
        errorWrapper.innerText = '';
      }
    }
    filterChange();
  };
  var filterChange = function filterChange() {
    var hasFiltersSetValue = isSomeFilterSet();
    applyFiltersBtn.disabled = false;
    clearFiltersBtn.disabled = !hasFiltersSetValue;
  };
  var clearAllFilters = function clearAllFilters() {
    clearFilter(statusFilterNode);
    clearFilter(typeFilterNode);
    datetimeFilterNodes.forEach(function (input) {
      return clearFilter(input);
    });
  };
  attachInitEvents();
  clearFiltersBtn.addEventListener('click', clearAllFilters, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.filters.sidebar.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.filters.sidebar.js ***!
  \*************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var sidebar = doc.querySelector('.ibexa-list-filters__sidebar');
  var toggleBtn = sidebar.querySelector('.ibexa-list-filters__expand-btn');
  var toggleCollapseIcon = toggleBtn.querySelector('.ibexa-list-filters__collapse-icon');
  var toggleExpandIcon = toggleBtn.querySelector('.ibexa-list-filters__expand-icon');
  var toggleSidebar = function toggleSidebar() {
    var isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    sidebar.classList.toggle('ibexa-list-filters__sidebar--collapsed', isExpanded);
    toggleBtn.setAttribute('aria-expanded', (!isExpanded).toString());
    toggleExpandIcon.toggleAttribute('hidden', !isExpanded);
    toggleCollapseIcon.toggleAttribute('hidden', isExpanded);
  };
  toggleBtn.addEventListener('click', toggleSidebar, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.list.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.list.js ***!
  \**************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, Translator, Routing) {
  var SELECTOR_MODAL_ITEM = '.ibexa-notifications-modal__item';
  var SELECTOR_GO_TO_NOTIFICATION = '.ibexa-notification-view-all__show';
  var SELECTOR_TOGGLE_NOTIFICATION = '.ibexa-notification-view-all__mail';
  var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
  var getJsonFromResponse = ibexa.helpers.request.getJsonFromResponse;
  var markAllAsReadBtn = doc.querySelector('.ibexa-notification-list__mark-all-as-read');
  var markAsReadBtn = doc.querySelector('.ibexa-notification-list__btn-mark-as-read');
  var deleteBtn = doc.querySelector('.ibexa-notification-list__btn-delete');
  var notificationsCheckboxes = _toConsumableArray(doc.querySelectorAll('.ibexa-notification-list .ibexa-table__cell--has-checkbox .ibexa-input--checkbox'));
  var markAllAsRead = function markAllAsRead() {
    var markAllAsReadLink = Routing.generate('ibexa.notifications.mark_all_as_read');
    var message = Translator.trans(/* @Desc("Cannot mark all notifications as read") */'notifications.modal.message.error.mark_all_as_read', {}, 'ibexa_notifications');
    fetch(markAllAsReadLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(getJsonFromResponse).then(function (response) {
      if (response.status === 'success') {
        global.location.reload();
      } else {
        showErrorNotification(message);
      }
    })["catch"](function () {
      showErrorNotification(message);
    });
  };
  var markSelectedAsRead = function markSelectedAsRead() {
    var selectedNotifications = _toConsumableArray(notificationsCheckboxes).filter(function (checkbox) {
      return checkbox.checked;
    }).map(function (checkbox) {
      return checkbox.dataset.notificationId;
    });
    var markAsReadLink = Routing.generate('ibexa.notifications.mark_multiple_as_read');
    var request = new Request(markAsReadLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'same-origin',
      credentials: 'same-origin',
      body: JSON.stringify({
        ids: selectedNotifications
      })
    });
    var message = Translator.trans(/* @Desc("Cannot mark selected notifications as read") */
    'notifications.modal.message.error.mark_selected_as_read', {}, 'ibexa_notifications');
    fetch(request).then(getJsonFromResponse).then(function (response) {
      if (response.status === 'success') {
        global.location.reload();
      } else {
        showErrorNotification(message);
      }
    })["catch"](function () {
      showErrorNotification(message);
    });
  };
  var handleNotificationClick = function handleNotificationClick(notification) {
    var isToggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var notificationRow = notification.closest('.ibexa-table__row');
    var isRead = notification.classList.contains('ibexa-notifications-modal__item--read');
    var notificationReadLink = isToggle && isRead ? notificationRow.dataset.notificationUnread : notificationRow.dataset.notificationRead;
    var request = new Request(notificationReadLink, {
      mode: 'cors',
      credentials: 'same-origin'
    });
    fetch(request).then(getJsonFromResponse).then(function (response) {
      if (response.status === 'success') {
        notification.classList.toggle('ibexa-notifications-modal__item--read', !isRead);
        if (isToggle) {
          var _notification$querySe, _notification$querySe2;
          (_notification$querySe = notification.querySelector('.ibexa-table__cell .ibexa-notification-view-all__mail-open')) === null || _notification$querySe === void 0 || _notification$querySe.classList.toggle('ibexa-notification-view-all__icon-hidden');
          (_notification$querySe2 = notification.querySelector('.ibexa-table__cell .ibexa-notification-view-all__mail-closed')) === null || _notification$querySe2 === void 0 || _notification$querySe2.classList.toggle('ibexa-notification-view-all__icon-hidden');
          var statusText = isRead ? Translator.trans(/*@Desc("Unread")*/'notification.unread', {}, 'ibexa_notifications') : Translator.trans(/*@Desc("Read")*/'notification.read', {}, 'ibexa_notifications');
          notificationRow.querySelectorAll('.ibexa-notification-view-all__notice-dot').forEach(function (noticeDot) {
            noticeDot.setAttribute('data-is-read', (!isRead).toString());
          });
          notificationRow.querySelector('.ibexa-notification-view-all__read').innerHTML = statusText;
          getNotificationsStatus();
          toggleActionButtonState();
          return;
        }
        if (!isToggle && response.redirect) {
          global.location = response.redirect;
        }
      } else {
        var message = Translator.trans(/* @Desc("Cannot update this notification") */
        'notifications.modal.message.error.update', {}, 'ibexa_notifications');
        showErrorNotification(message);
      }
    })["catch"](showErrorNotification);
  };
  var handleNotificationActionClick = function handleNotificationActionClick(event) {
    var isToggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var notification = event.target.closest(SELECTOR_MODAL_ITEM);
    if (!notification) {
      return;
    }
    handleNotificationClick(notification, isToggle);
  };
  var getNotificationsStatus = function getNotificationsStatus() {
    var notificationsTable = doc.querySelector('.ibexa-table--notifications');
    var notificationsStatusLink = notificationsTable.dataset.notificationsCount;
    var request = new Request(notificationsStatusLink, {
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    return fetch(request).then(getJsonFromResponse).then(function (notificationsInfo) {
      markAllAsReadBtn.disabled = notificationsInfo.pending === 0;
    });
  };
  var init = function init() {
    getNotificationsStatus();
    doc.querySelector('.ibexa-notifications-modal').dataset.closeReload = 'true';
    doc.querySelectorAll(SELECTOR_MODAL_ITEM).forEach(function (item) {
      var _item$querySelector, _item$querySelector2;
      var isRead = item.classList.contains('ibexa-notifications-modal__item--read');
      (_item$querySelector = item.querySelector(".ibexa-table__cell .ibexa-notification-view-all__mail-closed")) === null || _item$querySelector === void 0 || _item$querySelector.classList.toggle('ibexa-notification-view-all__icon-hidden', !isRead);
      (_item$querySelector2 = item.querySelector(".ibexa-table__cell .ibexa-notification-view-all__mail-open")) === null || _item$querySelector2 === void 0 || _item$querySelector2.classList.toggle('ibexa-notification-view-all__icon-hidden', isRead);
    }, false);
  };
  init();
  doc.querySelectorAll(SELECTOR_GO_TO_NOTIFICATION).forEach(function (link) {
    return link.addEventListener('click', handleNotificationActionClick, false);
  });
  doc.querySelectorAll(SELECTOR_TOGGLE_NOTIFICATION).forEach(function (link) {
    return link.addEventListener('click', function (event) {
      return handleNotificationActionClick(event, true);
    }, false);
  });
  markAllAsReadBtn.addEventListener('click', markAllAsRead, false);
  markAsReadBtn.addEventListener('click', markSelectedAsRead, false);
  var toggleActionButtonState = function toggleActionButtonState() {
    var checkedNotifications = notificationsCheckboxes.filter(function (el) {
      return el.checked;
    });
    var isAnythingSelected = checkedNotifications.length > 0;
    deleteBtn.disabled = !isAnythingSelected;
    markAsReadBtn.disabled = !isAnythingSelected || !checkedNotifications.some(function (checkbox) {
      return checkbox.closest('.ibexa-table__row').querySelector('.ibexa-notification-view-all__notice-dot').dataset.isRead === 'false';
    });
  };
  var handleCheckboxChange = function handleCheckboxChange(checkbox) {
    var _checkbox$dataset;
    var checkboxFormId = (_checkbox$dataset = checkbox.dataset) === null || _checkbox$dataset === void 0 ? void 0 : _checkbox$dataset.formCheckboxId;
    var formRemoveCheckbox = doc.querySelector("[data-toggle-button-id=\"#confirm-selection_remove\"] input#".concat(checkboxFormId));
    if (formRemoveCheckbox) {
      formRemoveCheckbox.checked = checkbox.checked;
    }
    toggleActionButtonState();
  };
  notificationsCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', function () {
      return handleCheckboxChange(checkbox);
    }, false);
  });
})(window, window.document, window.ibexa, window.Translator, window.Routing);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.filters.sidebar.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.list.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.notifications.filters.js"));
/******/ }
]);