(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(
        exports,
        require("vue-resize"),
        require("vue-observe-visibility"),
        require("babel-runtime/regenerator"),
        require("babel-runtime/helpers/asyncToGenerator"),
        require("babel-runtime/helpers/toConsumableArray"),
        require("babel-runtime/helpers/slicedToArray"),
        require("babel-runtime/helpers/typeof"),
        require("babel-runtime/helpers/defineProperty"),
        require("element-ui/lib/theme-chalk/button.css"),
        require("element-ui/lib/theme-chalk/base.css"),
        require("element-ui/lib/button"),
        require("element-ui/lib/theme-chalk/checkbox-group.css"),
        require("element-ui/lib/checkbox-group"),
        require("element-ui/lib/theme-chalk/checkbox.css"),
        require("element-ui/lib/checkbox"),
        require("element-ui/lib/theme-chalk/input.css"),
        require("element-ui/lib/input"),
        require("element-ui/lib/theme-chalk/popover.css"),
        require("element-ui/lib/popover"),
        require("element-ui/lib/theme-chalk/option.css"),
        require("element-ui/lib/option"),
        require("element-ui/lib/theme-chalk/select.css"),
        require("element-ui/lib/select"),
        require("xlsx")
      )
    : typeof define === "function" && define.amd
      ? define([
          "exports",
          "vue-resize",
          "vue-observe-visibility",
          "babel-runtime/regenerator",
          "babel-runtime/helpers/asyncToGenerator",
          "babel-runtime/helpers/toConsumableArray",
          "babel-runtime/helpers/slicedToArray",
          "babel-runtime/helpers/typeof",
          "babel-runtime/helpers/defineProperty",
          "element-ui/lib/theme-chalk/button.css",
          "element-ui/lib/theme-chalk/base.css",
          "element-ui/lib/button",
          "element-ui/lib/theme-chalk/checkbox-group.css",
          "element-ui/lib/checkbox-group",
          "element-ui/lib/theme-chalk/checkbox.css",
          "element-ui/lib/checkbox",
          "element-ui/lib/theme-chalk/input.css",
          "element-ui/lib/input",
          "element-ui/lib/theme-chalk/popover.css",
          "element-ui/lib/popover",
          "element-ui/lib/theme-chalk/option.css",
          "element-ui/lib/option",
          "element-ui/lib/theme-chalk/select.css",
          "element-ui/lib/select",
          "xlsx"
        ], factory)
      : factory(
          (global.VueVirtualTable = {}),
          global.vueResize,
          global.vueObserveVisibility,
          global._regeneratorRuntime,
          global._asyncToGenerator,
          global._toConsumableArray,
          global._slicedToArray,
          global._typeof,
          global._defineProperty,
          global.button_css,
          null,
          global._Button,
          global.checkboxGroup_css,
          global._CheckboxGroup,
          global.checkbox_css,
          global._Checkbox,
          global.input_css,
          global._Input,
          global.popover_css,
          global._Popover,
          global.option_css,
          global._Option,
          global.select_css,
          global._Select,
          global.XLSX
        );
})(this, function(
  exports,
  vueResize,
  vueObserveVisibility,
  _regeneratorRuntime,
  _asyncToGenerator,
  _toConsumableArray,
  _slicedToArray,
  _typeof,
  _defineProperty,
  button_css,
  base_css,
  _Button,
  checkboxGroup_css,
  _CheckboxGroup,
  checkbox_css,
  _Checkbox,
  input_css,
  _Input,
  popover_css,
  _Popover,
  option_css,
  _Option,
  select_css,
  _Select,
  XLSX
) {
  "use strict";

  _regeneratorRuntime =
    _regeneratorRuntime && _regeneratorRuntime.hasOwnProperty("default")
      ? _regeneratorRuntime["default"]
      : _regeneratorRuntime;
  _asyncToGenerator =
    _asyncToGenerator && _asyncToGenerator.hasOwnProperty("default")
      ? _asyncToGenerator["default"]
      : _asyncToGenerator;
  _toConsumableArray =
    _toConsumableArray && _toConsumableArray.hasOwnProperty("default")
      ? _toConsumableArray["default"]
      : _toConsumableArray;
  _slicedToArray =
    _slicedToArray && _slicedToArray.hasOwnProperty("default")
      ? _slicedToArray["default"]
      : _slicedToArray;
  _typeof =
    _typeof && _typeof.hasOwnProperty("default") ? _typeof["default"] : _typeof;
  _defineProperty =
    _defineProperty && _defineProperty.hasOwnProperty("default")
      ? _defineProperty["default"]
      : _defineProperty;
  button_css =
    button_css && button_css.hasOwnProperty("default")
      ? button_css["default"]
      : button_css;
  _Button =
    _Button && _Button.hasOwnProperty("default") ? _Button["default"] : _Button;
  checkboxGroup_css =
    checkboxGroup_css && checkboxGroup_css.hasOwnProperty("default")
      ? checkboxGroup_css["default"]
      : checkboxGroup_css;
  _CheckboxGroup =
    _CheckboxGroup && _CheckboxGroup.hasOwnProperty("default")
      ? _CheckboxGroup["default"]
      : _CheckboxGroup;
  checkbox_css =
    checkbox_css && checkbox_css.hasOwnProperty("default")
      ? checkbox_css["default"]
      : checkbox_css;
  _Checkbox =
    _Checkbox && _Checkbox.hasOwnProperty("default")
      ? _Checkbox["default"]
      : _Checkbox;
  input_css =
    input_css && input_css.hasOwnProperty("default")
      ? input_css["default"]
      : input_css;
  _Input =
    _Input && _Input.hasOwnProperty("default") ? _Input["default"] : _Input;
  popover_css =
    popover_css && popover_css.hasOwnProperty("default")
      ? popover_css["default"]
      : popover_css;
  _Popover =
    _Popover && _Popover.hasOwnProperty("default")
      ? _Popover["default"]
      : _Popover;
  option_css =
    option_css && option_css.hasOwnProperty("default")
      ? option_css["default"]
      : option_css;
  _Option =
    _Option && _Option.hasOwnProperty("default") ? _Option["default"] : _Option;
  select_css =
    select_css && select_css.hasOwnProperty("default")
      ? select_css["default"]
      : select_css;
  _Select =
    _Select && _Select.hasOwnProperty("default") ? _Select["default"] : _Select;
  XLSX = XLSX && XLSX.hasOwnProperty("default") ? XLSX["default"] : XLSX;

  (function() {
    if (typeof document !== "undefined") {
      var head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("style"),
        css =
          " .virtual-scroller[data-v-00bbbe95]:not(.page-mode) { overflow-y: scroll; } .item-container[data-v-00bbbe95] { box-sizing: border-box; width: 100%; overflow: hidden; } .items[data-v-00bbbe95] { width: 100%; } table[data-v-00bbbe95] { border-collapse: collapse; table-layout: fixed; } td[data-v-00bbbe95] { /*overflow: scroll;*/ } ";
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      head.appendChild(style);
    }
  })();

  var VirtualScroller = {
    render: function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        _vm.mainTag,
        {
          directives: [
            {
              name: "observe-visibility",
              rawName: "v-observe-visibility",
              value: _vm.handleVisibilityChange,
              expression: "handleVisibilityChange"
            }
          ],
          tag: "component",
          staticClass: "virtual-scroller",
          class: _vm.cssClass,
          on: { scroll: _vm.handleScroll }
        },
        [
          _vm._t("before-container"),
          _vm._v(" "),
          _c(
            _vm.containerTag,
            {
              ref: "itemContainer",
              tag: "component",
              staticClass: "item-container",
              class: _vm.containerClass,
              style: _vm.itemContainerStyle
            },
            [
              _vm._t("before-content"),
              _vm._v(" "),
              _c(
                _vm.contentTag,
                {
                  ref: "items",
                  tag: "component",
                  staticClass: "items",
                  class: _vm.contentClass,
                  style: _vm.itemsStyle
                },
                [
                  _vm._t("before-item"),
                  _vm._v(" "),
                  _vm.renderers
                    ? _vm._l(_vm.visibleItems, function(item, index) {
                        return _c(_vm.renderers[item[_vm.typeField]], {
                          key: (_vm.keysEnabled && item[_vm.keyField]) || "",
                          tag: "component",
                          staticClass: "item",
                          attrs: {
                            item: item,
                            "item-index": _vm.$_startIndex + index
                          }
                        });
                      })
                    : [
                        _vm._l(_vm.visibleItems, function(item, index) {
                          return _vm._t("default", null, {
                            item: item,
                            itemIndex: _vm.$_startIndex + index,
                            itemKey:
                              (_vm.keysEnabled && item[_vm.keyField]) || ""
                          });
                        })
                      ]
                ],
                2
              ),
              _vm._v(" "),
              _vm._t("after-content")
            ],
            2
          ),
          _vm._v(" "),
          _vm._t("after-container"),
          _vm._v(" "),
          _c("resize-observer", { on: { notify: _vm.handleResize } })
        ],
        2
      );
    },
    staticRenderFns: [],
    _scopeId: "data-v-00bbbe95",
    name: "virtual-scroller",

    components: {
      ResizeObserver: vueResize.ResizeObserver
    },

    directives: {
      ObserveVisibility: vueObserveVisibility.ObserveVisibility
    },

    props: {
      items: {
        type: Array,
        required: true
      },
      renderers: {
        default: null
      },
      itemHeight: {
        type: [Number, String],
        default: null
      },
      typeField: {
        type: String,
        default: "type"
      },
      keyField: {
        type: String,
        default: "id"
      },
      heightField: {
        type: String,
        default: "height"
      },
      mainTag: {
        type: String,
        default: "div"
      },
      containerTag: {
        type: String,
        default: "div"
      },
      containerClass: {
        default: null
      },
      contentTag: {
        type: String,
        default: "div"
      },
      contentClass: {
        default: null
      },
      pageMode: {
        type: Boolean,
        default: false
      },
      buffer: {
        type: [Number, String],
        default: 200
      },
      poolSize: {
        type: [Number, String],
        default: 2000
      },
      prerender: {
        type: [Number, String],
        default: 0
      },
      emitUpdate: {
        type: Boolean,
        default: false
      },
      delayPreviousItems: {
        type: Boolean,
        default: false
      }
    },

    data: function data() {
      return {
        visibleItems: [],
        itemContainerStyle: null,
        itemsStyle: null,
        keysEnabled: true
      };
    },

    computed: {
      cssClass: function cssClass() {
        return {
          "page-mode": this.pageMode
        };
      },
      heights: function heights() {
        if (this.itemHeight === null) {
          var heights = {};
          var items = this.items;
          var field = this.heightField;
          var accumulator = 0;
          for (var i = 0; i < items.length; i++) {
            accumulator += items[i][field];
            heights[i] = accumulator;
          }
          return heights;
        }
      }
    },

    watch: {
      items: {
        handler: function handler() {
          this.updateVisibleItems(true);
        },

        deep: true
      },
      pageMode: function pageMode() {
        this.applyPageMode();
        this.updateVisibleItems(true);
      },

      itemHeight: "setDirty"
    },

    created: function created() {
      this.$_ready = false;
      this.$_startIndex = 0;
      this.$_oldScrollTop = null;
      this.$_oldScrollBottom = null;
      this.$_offsetTop = 0;
      this.$_height = 0;
      this.$_scrollDirty = false;
      this.$_updateDirty = false;

      var prerender = parseInt(this.prerender);
      if (prerender > 0) {
        this.visibleItems = this.items.slice(0, prerender);
        this.$_length = this.visibleItems.length;
        this.$_endIndex = this.$_length - 1;
        this.$_skip = true;
      } else {
        this.$_endIndex = 0;
        this.$_length = 0;
        this.$_skip = false;
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.applyPageMode();
      this.$nextTick(function() {
        _this.updateVisibleItems(true);
        _this.$_ready = true;
      });
    },
    beforeDestroy: function beforeDestroy() {
      this.removeWindowScroll();
    },

    methods: {
      getScroll: function getScroll() {
        var el = this.$el;
        var scroll = void 0;

        if (this.pageMode) {
          var rect = el.getBoundingClientRect();
          var top = -rect.top;
          var height = window.innerHeight;
          if (top < 0) {
            height += top;
            top = 0;
          }
          if (top + height > rect.height) {
            height = rect.height - top;
          }
          scroll = {
            top: top,
            bottom: top + height
          };
        } else {
          scroll = {
            top: el.scrollTop,
            bottom: el.scrollTop + el.clientHeight
          };
        }

        if (scroll.bottom >= 0 && scroll.top <= scroll.bottom) {
          return scroll;
        } else {
          return null;
        }
      },
      updateVisibleItems: function updateVisibleItems() {
        var _this2 = this;

        var force =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : false;

        if (!this.$_updateDirty) {
          this.$_updateDirty = true;
          this.$nextTick(function() {
            _this2.$_updateDirty = false;

            var l = _this2.items.length;
            var scroll = _this2.getScroll();
            var items = _this2.items;
            var itemHeight = _this2.itemHeight;
            var containerHeight = void 0,
              offsetTop = void 0;
            if (scroll) {
              var startIndex = -1;
              var endIndex = -1;

              var buffer = parseInt(_this2.buffer);
              var poolSize = parseInt(_this2.poolSize);
              var scrollTop = ~~(scroll.top / poolSize) * poolSize - buffer;
              var scrollBottom =
                Math.ceil(scroll.bottom / poolSize) * poolSize + buffer;

              if (
                !force &&
                ((scrollTop === _this2.$_oldScrollTop &&
                  scrollBottom === _this2.$_oldScrollBottom) ||
                  _this2.$_skip)
              ) {
                _this2.$_skip = false;
                return;
              } else {
                _this2.$_oldScrollTop = scrollTop;
                _this2.$_oldScrollBottom = scrollBottom;
              }

              // Variable height mode
              if (itemHeight === null) {
                var heights = _this2.heights;
                var h = void 0;
                var a = 0;
                var b = l - 1;
                var i = ~~(l / 2);
                var oldI = void 0;

                // Searching for startIndex
                do {
                  oldI = i;
                  h = heights[i];
                  if (h < scrollTop) {
                    a = i;
                  } else if (i < l && heights[i + 1] > scrollTop) {
                    b = i;
                  }
                  i = ~~((a + b) / 2);
                } while (i !== oldI);
                i < 0 && (i = 0);
                startIndex = i;

                // For containers style
                offsetTop = i > 0 ? heights[i - 1] : 0;
                containerHeight = heights[l - 1];

                // Searching for endIndex
                for (
                  endIndex = i;
                  endIndex < l && heights[endIndex] < scrollBottom;
                  endIndex++
                ) {}
                if (endIndex === -1) {
                  endIndex = items.length - 1;
                } else {
                  endIndex++;
                  // Bounds
                  endIndex > l && (endIndex = l);
                }
              } else {
                // Fixed height mode
                startIndex = ~~(scrollTop / itemHeight);
                endIndex = Math.ceil(scrollBottom / itemHeight);

                // Bounds
                startIndex < 0 && (startIndex = 0);
                endIndex > l && (endIndex = l);

                offsetTop = startIndex * itemHeight;
                containerHeight = l * itemHeight;
              }

              if (
                force ||
                _this2.$_startIndex !== startIndex ||
                _this2.$_endIndex !== endIndex ||
                _this2.$_offsetTop !== offsetTop ||
                _this2.$_height !== containerHeight ||
                _this2.$_length !== l
              ) {
                _this2.keysEnabled = !(
                  startIndex > _this2.$_endIndex ||
                  endIndex < _this2.$_startIndex
                );

                _this2.itemContainerStyle = {
                  height: containerHeight + "px"
                };
                _this2.itemsStyle = {
                  marginTop: offsetTop + "px"
                };

                if (_this2.delayPreviousItems) {
                  // Add next items
                  _this2.visibleItems = items.slice(
                    _this2.$_startIndex,
                    endIndex
                  );
                  // Remove previous items
                  _this2.$nextTick(function() {
                    _this2.visibleItems = items.slice(startIndex, endIndex);
                  });
                } else {
                  _this2.visibleItems = items.slice(startIndex, endIndex);
                }

                _this2.emitUpdate &&
                  _this2.$emit("update", startIndex, endIndex);

                _this2.$_startIndex = startIndex;
                _this2.$_endIndex = endIndex;
                _this2.$_length = l;
                _this2.$_offsetTop = offsetTop;
                _this2.$_height = containerHeight;
              }
            }
          });
        }
      },
      scrollToItem: function scrollToItem(index) {
        var scrollTop = void 0;
        if (this.itemHeight === null) {
          scrollTop = index > 0 ? this.heights[index - 1] : 0;
        } else {
          scrollTop = index * this.itemHeight;
        }
        this.$el.scrollTop = scrollTop;
      },
      setDirty: function setDirty() {
        this.$_oldScrollTop = null;
        this.$_oldScrollBottom = null;
      },
      applyPageMode: function applyPageMode() {
        if (this.pageMode) {
          this.addWindowScroll();
        } else {
          this.removeWindowScroll();
        }
      },
      addWindowScroll: function addWindowScroll() {
        window.addEventListener("scroll", this.handleScroll, true);
        window.addEventListener("resize", this.handleResize);
      },
      removeWindowScroll: function removeWindowScroll() {
        window.removeEventListener("scroll", this.handleScroll, true);
        window.removeEventListener("resize", this.handleResize);
      },
      handleScroll: function handleScroll() {
        var _this3 = this;

        if (!this.$_scrollDirty) {
          this.$_scrollDirty = true;
          requestAnimationFrame(function() {
            _this3.$_scrollDirty = false;
            _this3.updateVisibleItems();
          });
        }
      },
      handleResize: function handleResize() {
        this.$emit("resize");
        this.$_ready && this.updateVisibleItems();
      },
      handleVisibilityChange: function handleVisibilityChange(
        isVisible,
        entry
      ) {
        var _this4 = this;

        if (
          this.$_ready &&
          (isVisible ||
            entry.boundingClientRect.width !== 0 ||
            entry.boundingClientRect.height !== 0)
        ) {
          this.$emit("visible");
          this.$nextTick(function() {
            _this4.updateVisibleItems();
          });
        }
      }
    }
  };

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === "undefined") {
      return;
    }

    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";

    if (insertAt === "top") {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css =
  styleInject(css);

  var _components, _render$staticRenderF;

  (function() {
    if (typeof document !== "undefined") {
      var head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("style"),
        css =
          " .main-scroll[data-v-184ba508] { width: 100%; overflow-y: hidden; border: 1px solid #ebeef5; font-size: 13px; box-sizing: border-box; position: relative; } .item-line[data-v-184ba508], .header-line[data-v-184ba508], .bottom-line[data-v-184ba508] { width: 100%; display: flex; flex-direction: row; } .item-cell[data-v-184ba508], .header-cell[data-v-184ba508], .bottom-cell[data-v-184ba508] { display: flex; padding: 5px; box-sizing: border-box; border-bottom: 1px solid #ebeef5; justify-content: center; align-items: center; } .header-cell[data-v-184ba508], .bottom-cell[data-v-184ba508] { border-bottom-width: 0; } .item-cell-inner[data-v-184ba508] { display: flex; width: 100%; height: 100%; word-break: break-all; text-align: center; overflow: hidden; text-overflow: ellipsis; justify-content: center; align-items: center; flex-wrap: wrap; } .header-cell-inner[data-v-184ba508] { display: inline-block; position: relative; } .header-cell-inner.caret-wrapper[data-v-184ba508] { width: 10px; height: 22px; cursor: pointer; } i.sort-ascending[data-v-184ba508] { width: 0; height: 0; border: 5px solid transparent; border-bottom-color: #c0c4cc; position: absolute; top: 0px; left: 4px; } i.sort-descending[data-v-184ba508] { width: 0; height: 0; border: 5px solid transparent; border-top-color: #c0c4cc; position: absolute; top: 12px; left: 4px; } i.sort-ascending.selected[data-v-184ba508] { border-bottom-color: #3caed2; } i.sort-descending.selected[data-v-184ba508] { border-top-color: #3caed2; } .header-line[data-v-184ba508] { color: #606266; height: 60px; } .bottom-line[data-v-184ba508] { height: 60px; } .bordered .item-cell[data-v-184ba508], .bordered .header-cell[data-v-184ba508], .bordered .bottom-cell[data-v-184ba508] { border-left: 1px solid #ebeef5; } .bordered .item-cell[data-v-184ba508]:nth-child(1), .bordered .header-cell[data-v-184ba508]:nth-child(1), .bordered .bottom-cell[data-v-184ba508]:nth-child(1) { border-left-width: 0; } .t-header[data-v-184ba508] { border-bottom: 1px solid #ebeef5; } .t-bottom[data-v-184ba508] { height: 60px; border-top: 1px solid #ebeef5; background-color: #f5f7fa; } .t-container[data-v-184ba508] { /*height: 800px;*/ box-sizing: border-box; overflow: auto; overflow-x: hidden; } .scroller[data-v-184ba508] { height: 100%; } .search-wrapper[data-v-184ba508] { cursor: pointer; } .filter-wrapper[data-v-184ba508] { cursor: pointer; } .numFiltered-wrapper[data-v-184ba508] { cursor: pointer; } div.item-line.item-line-allow-hightlight[data-v-184ba508]:hover { background-color: #eee; } div.item-line.selected[data-v-184ba508] { background-color: #ddd; } div.item-line.unselectable[data-v-184ba508] { background-color: #fff; } /*----------------*/ .tag[data-v-184ba508] { padding: 0 10px; height: 34px; line-height: 32px; /*font-size: 16px;*/ border-radius: 4px; box-sizing: border-box; color: #3caed2; background-color: rgba(60, 174, 210, 0.1); border: 1px solid rgba(60, 174, 210, 0.2); white-space: nowrap; } .filter-list[data-v-184ba508] { width: 100%; max-height: 300px; overflow-y: scroll; } .filter-list[data-v-184ba508]:hover { cursor: pointer; } .filter-item[data-v-184ba508] { width: 100%; margin: 5px auto; margin-left: 0px !important; } .filter-btn[data-v-184ba508] { overflow: hidden; border-top: 1px solid #ebeef5; padding-top: 6px; margin-top: 6px; } .filter-btn .btn[data-v-184ba508] { float: left; width: 50px; margin: 0 12px; padding: 5px; } .filtered[data-v-184ba508], .searched[data-v-184ba508], .numFiltered[data-v-184ba508] { color: #3caed2; } .warningColor[data-v-184ba508] { color: red; } .greenColor[data-v-184ba508] { color: #84c32e; } .all-select[data-v-184ba508] { cursor: pointer; } .threeLines[data-v-184ba508] { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; word-break: break-all; white-space: normal; } .alignLeft[data-v-184ba508] { text-align: left; } .tips[data-v-184ba508] { font-size: 17px; } .defaultTag[data-v-184ba508] { color: #3caed2; background-color: rgba(60, 174, 210, 0.1); border-color: rgba(60, 174, 210, 0.2); } .warningTag[data-v-184ba508] { color: #e6a23c; background: #fdf6ec; border-color: #f5dab1; } .successTag[data-v-184ba508] { color: #67c23a; background: #f0f9eb; border-color: #c2e7b0; } .dangerTag[data-v-184ba508] { color: #f56c6c; background: #fef0f0; border-color: #fbc4c4; } .infoTag[data-v-184ba508] { color: #909399; background: #f4f4f5; border-color: #d3d4d6; } .filterSelectNumber[data-v-184ba508] { float: left; width: 120px; } .filterInputNumber[data-v-184ba508] { float: left; width: 90px; margin-left: 5px; } .numberMax[data-v-184ba508] { margin-left: 15px; } .numberMax[data-v-184ba508]:before { content: '~'; position: absolute; left: -11px; top: 10px; } .filterBtnEmpty[data-v-184ba508] { margin-top: 10px; float: right; } .popperCard[data-v-184ba508] { box-sizing: border-box; } .clipboard[data-v-184ba508] { position: absolute; width: 0; height: 0; z-index: -99; opacity: 0; } .clipboard input[data-v-184ba508] { width: 1px; height: 1px; padding: 0; margin: 0; border: 0; } ";
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      head.appendChild(style);
    }
  })();

  var Component = ((_render$staticRenderF = {
    render: function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { ref: "mainScroll", staticClass: "main-scroll" },
        [
          _c(
            "div",
            {
              ref: "mainTable",
              class: { bordered: _vm.bordered },
              style: {
                "min-width": _vm.minWidthTemp + "px",
                position: "relative"
              }
            },
            [
              _vm.enableExport
                ? _c(
                    "div",
                    {
                      staticStyle: {
                        "text-align": "right",
                        position: "absolute",
                        right: "5px",
                        top: "5px"
                      }
                    },
                    [
                      _c("el-button", {
                        attrs: {
                          size: "mini",
                          plain: "",
                          type: "info",
                          circle: "",
                          icon: "el-icon-download"
                        },
                        on: { click: _vm.handleExportTable }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "t-header" }, [
                _c(
                  "div",
                  { ref: "tHeaderTable" },
                  [
                    !_vm.enableMultiHeader
                      ? [
                          _c(
                            "div",
                            { staticClass: "header-line" },
                            _vm._l(
                              _vm.configTemp.filter(function(v) {
                                return !v.isHidden;
                              }),
                              function(item, configIndex) {
                                return _c(
                                  "div",
                                  {
                                    key: configIndex,
                                    staticClass: "header-cell",
                                    style: { flex: _vm.colWidth[configIndex] }
                                  },
                                  [
                                    item.searchable
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "header-cell-inner search-wrapper"
                                          },
                                          [
                                            _c(
                                              "el-popover",
                                              {
                                                ref: item.prop + "_search",
                                                refInFor: true,
                                                attrs: {
                                                  placement: "bottom",
                                                  width: "340",
                                                  trigger: "click"
                                                },
                                                model: {
                                                  value: item.searchVisible,
                                                  callback: function callback(
                                                    $$v
                                                  ) {
                                                    _vm.$set(
                                                      item,
                                                      "searchVisible",
                                                      $$v
                                                    );
                                                  },
                                                  expression:
                                                    "item.searchVisible"
                                                }
                                              },
                                              [
                                                _vm._l(
                                                  item.searchPhrase,
                                                  function(phrase, ph_index) {
                                                    return [
                                                      _c(
                                                        "el-input",
                                                        {
                                                          staticStyle: {
                                                            "margin-bottom":
                                                              "6px",
                                                            width: "320px"
                                                          },
                                                          attrs: {
                                                            autofocus: true,
                                                            placeholder:
                                                              _vm
                                                                .languageOptions[
                                                                _vm.language
                                                              ].phraseFilter[
                                                                "ph"
                                                              ]
                                                          },
                                                          on: {
                                                            change: function change(
                                                              $event
                                                            ) {
                                                              _vm.handleClickConfirmFilter(
                                                                configIndex
                                                              );
                                                            }
                                                          },
                                                          model: {
                                                            value: phrase.value,
                                                            callback: function callback(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                phrase,
                                                                "value",
                                                                $$v
                                                              );
                                                            },
                                                            expression:
                                                              "phrase.value"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "el-select",
                                                            {
                                                              staticStyle: {
                                                                width: "110px"
                                                              },
                                                              attrs: {
                                                                slot: "prepend",
                                                                placeholder: ""
                                                              },
                                                              on: {
                                                                change: function change(
                                                                  $event
                                                                ) {
                                                                  _vm.handleClickConfirmFilter(
                                                                    configIndex
                                                                  );
                                                                }
                                                              },
                                                              slot: "prepend",
                                                              model: {
                                                                value:
                                                                  phrase.operator,
                                                                callback: function callback(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    phrase,
                                                                    "operator",
                                                                    $$v
                                                                  );
                                                                },
                                                                expression:
                                                                  "phrase.operator"
                                                              }
                                                            },
                                                            _vm._l(
                                                              _vm.allPhraseOperator,
                                                              function(item) {
                                                                return _c(
                                                                  "el-option",
                                                                  {
                                                                    key:
                                                                      item.value,
                                                                    attrs: {
                                                                      label:
                                                                        _vm
                                                                          .languageOptions[
                                                                          _vm
                                                                            .language
                                                                        ]
                                                                          .phraseFilter[
                                                                          item
                                                                            .value
                                                                        ],
                                                                      value:
                                                                        item.value
                                                                    }
                                                                  }
                                                                );
                                                              }
                                                            )
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c("i", {
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value: ph_index > 0,
                                                            expression:
                                                              "ph_index > 0"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "el-icon-circle-close-outline",
                                                        staticStyle: {
                                                          position: "relative",
                                                          top: "0px"
                                                        },
                                                        on: {
                                                          click: function click(
                                                            $event
                                                          ) {
                                                            _vm.removePhraseFilter(
                                                              configIndex,
                                                              ph_index
                                                            );
                                                          }
                                                        }
                                                      })
                                                    ];
                                                  }
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticStyle: {
                                                      display: "flex"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "el-button",
                                                      {
                                                        staticClass:
                                                          "btn filterBtnEmpty",
                                                        attrs: {
                                                          size: "mini",
                                                          disabled:
                                                            item.searchPhrase
                                                              .length >=
                                                            _vm.phraseLimit
                                                        },
                                                        on: {
                                                          click: function click(
                                                            $event
                                                          ) {
                                                            _vm.addFilterPhrase(
                                                              configIndex
                                                            );
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.languageOptions[
                                                              _vm.language
                                                            ].phraseFilter[
                                                              "and_btn"
                                                            ]
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "el-button",
                                                      {
                                                        staticClass:
                                                          "btn filterBtnEmpty",
                                                        attrs: {
                                                          type: "danger",
                                                          size: "mini"
                                                        },
                                                        on: {
                                                          click: function click(
                                                            $event
                                                          ) {
                                                            _vm.handleClickEmptyPhraseFilter(
                                                              configIndex
                                                            );
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.languageOptions[
                                                              _vm.language
                                                            ].phraseFilter[
                                                              "clear_btn"
                                                            ]
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    attrs: {
                                                      slot: "reference"
                                                    },
                                                    slot: "reference"
                                                  },
                                                  [
                                                    item.name
                                                      ? _c(
                                                          "span",
                                                          {
                                                            class: {
                                                              searched:
                                                                item.searchPhrase.findIndex(
                                                                  function(v) {
                                                                    return (
                                                                      v.value !=
                                                                      ""
                                                                    );
                                                                  }
                                                                ) > -1
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.name)
                                                            )
                                                          ]
                                                        )
                                                      : _c(
                                                          "span",
                                                          {
                                                            class: {
                                                              searched:
                                                                item.searchPhrase.findIndex(
                                                                  function(v) {
                                                                    return (
                                                                      v.value !=
                                                                      ""
                                                                    );
                                                                  }
                                                                ) > -1
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.prop)
                                                            )
                                                          ]
                                                        )
                                                  ]
                                                )
                                              ],
                                              2
                                            )
                                          ],
                                          1
                                        )
                                      : item.filterable
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "header-cell-inner filter-wrapper"
                                            },
                                            [
                                              _c(
                                                "el-popover",
                                                {
                                                  ref: item.prop + "_filter",
                                                  refInFor: true,
                                                  attrs: {
                                                    placement: "bottom",
                                                    width: "350",
                                                    trigger: "click"
                                                  },
                                                  model: {
                                                    value: item.filterVisible,
                                                    callback: function callback(
                                                      $$v
                                                    ) {
                                                      _vm.$set(
                                                        item,
                                                        "filterVisible",
                                                        $$v
                                                      );
                                                    },
                                                    expression:
                                                      "item.filterVisible"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "el-checkbox-group",
                                                    {
                                                      staticClass:
                                                        "filter-list",
                                                      on: {
                                                        change:
                                                          _vm.handleChangeFilter
                                                      },
                                                      model: {
                                                        value:
                                                          item.filterSelectedOptions,
                                                        callback: function callback(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            item,
                                                            "filterSelectedOptions",
                                                            $$v
                                                          );
                                                        },
                                                        expression:
                                                          "item.filterSelectedOptions"
                                                      }
                                                    },
                                                    _vm._l(
                                                      item.filterOptions,
                                                      function(tag) {
                                                        return _c(
                                                          "el-checkbox",
                                                          {
                                                            key: tag,
                                                            staticClass:
                                                              "filter-item",
                                                            attrs: {
                                                              label: tag
                                                            }
                                                          },
                                                          [_vm._v(_vm._s(tag))]
                                                        );
                                                      }
                                                    )
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "filter-btn"
                                                    },
                                                    [
                                                      _c(
                                                        "el-button",
                                                        {
                                                          attrs: {
                                                            size: "mini"
                                                          },
                                                          on: {
                                                            click: function click(
                                                              $event
                                                            ) {
                                                              _vm.handleClickConfirmFilter(
                                                                configIndex
                                                              );
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm
                                                                .languageOptions[
                                                                _vm.language
                                                              ].selectFilter[
                                                                "confirm_btn"
                                                              ]
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "el-button",
                                                        {
                                                          attrs: {
                                                            size: "mini"
                                                          },
                                                          on: {
                                                            click: function click(
                                                              $event
                                                            ) {
                                                              _vm.handleClickReverseFilter(
                                                                configIndex
                                                              );
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm
                                                                .languageOptions[
                                                                _vm.language
                                                              ].selectFilter[
                                                                "reverse_btn"
                                                              ]
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      attrs: {
                                                        slot: "reference"
                                                      },
                                                      slot: "reference"
                                                    },
                                                    [
                                                      item.name
                                                        ? _c(
                                                            "span",
                                                            {
                                                              class: {
                                                                filtered:
                                                                  item.filterSelectedOptions &&
                                                                  item
                                                                    .filterSelectedOptions
                                                                    .length
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.name
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _c(
                                                            "span",
                                                            {
                                                              class: {
                                                                filtered:
                                                                  item.filterSelectedOptions &&
                                                                  item
                                                                    .filterSelectedOptions
                                                                    .length
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.prop
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                      _vm._v(" "),
                                                      _c("i", {
                                                        staticClass:
                                                          "el-icon-arrow-down"
                                                      })
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : item.numberFilter
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "header-cell-inner numFiltered-wrapper"
                                              },
                                              [
                                                _c(
                                                  "el-popover",
                                                  {
                                                    ref:
                                                      item.prop +
                                                      "_number_filter",
                                                    refInFor: true,
                                                    attrs: {
                                                      placement: "bottom-start",
                                                      width:
                                                        item.numberFilterPhrase
                                                          .operator === "bt"
                                                          ? 320
                                                          : 220,
                                                      trigger: "click"
                                                    },
                                                    model: {
                                                      value:
                                                        item.numberFilterVisible,
                                                      callback: function callback(
                                                        $$v
                                                      ) {
                                                        _vm.$set(
                                                          item,
                                                          "numberFilterVisible",
                                                          $$v
                                                        );
                                                      },
                                                      expression:
                                                        "item.numberFilterVisible"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "el-input",
                                                      {
                                                        staticClass:
                                                          "filterInputNumber",
                                                        staticStyle: {
                                                          width: "210px"
                                                        },
                                                        attrs: {
                                                          type: "number"
                                                        },
                                                        on: {
                                                          change: function change(
                                                            $event
                                                          ) {
                                                            _vm.handleClickConfirmFilter(
                                                              configIndex
                                                            );
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            item
                                                              .numberFilterPhrase
                                                              .value[0],
                                                          callback: function callback(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              item
                                                                .numberFilterPhrase
                                                                .value,
                                                              0,
                                                              $$v
                                                            );
                                                          },
                                                          expression:
                                                            "item.numberFilterPhrase.value[0]"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "el-select",
                                                          {
                                                            staticClass:
                                                              "filterSelectNumber",
                                                            attrs: {
                                                              slot: "prepend",
                                                              placeholder: ""
                                                            },
                                                            on: {
                                                              change: function change(
                                                                $event
                                                              ) {
                                                                _vm.handleClickConfirmFilter(
                                                                  configIndex
                                                                );
                                                              }
                                                            },
                                                            slot: "prepend",
                                                            model: {
                                                              value:
                                                                item
                                                                  .numberFilterPhrase
                                                                  .operator,
                                                              callback: function callback(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  item.numberFilterPhrase,
                                                                  "operator",
                                                                  $$v
                                                                );
                                                              },
                                                              expression:
                                                                "item.numberFilterPhrase.operator"
                                                            }
                                                          },
                                                          _vm._l(
                                                            _vm.allOperatorType,
                                                            function(item) {
                                                              return _c(
                                                                "el-option",
                                                                {
                                                                  key:
                                                                    item.value,
                                                                  attrs: {
                                                                    label:
                                                                      _vm
                                                                        .languageOptions[
                                                                        _vm
                                                                          .language
                                                                      ]
                                                                        .numberFilter[
                                                                        item
                                                                          .value
                                                                      ],
                                                                    value:
                                                                      item.value
                                                                  }
                                                                }
                                                              );
                                                            }
                                                          )
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("el-input", {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            item
                                                              .numberFilterPhrase
                                                              .operator ===
                                                            "bt",
                                                          expression:
                                                            "item.numberFilterPhrase.operator === 'bt'"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "filterInputNumber numberMax",
                                                      attrs: { type: "number" },
                                                      on: {
                                                        change: function change(
                                                          $event
                                                        ) {
                                                          _vm.handleClickConfirmFilter(
                                                            configIndex
                                                          );
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          item
                                                            .numberFilterPhrase
                                                            .value[1],
                                                        callback: function callback(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            item
                                                              .numberFilterPhrase
                                                              .value,
                                                            1,
                                                            $$v
                                                          );
                                                        },
                                                        expression:
                                                          "item.numberFilterPhrase.value[1]"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticStyle: {
                                                          width: "100%",
                                                          float: "left"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "el-button",
                                                          {
                                                            staticClass:
                                                              "btn filterBtnEmpty",
                                                            attrs: {
                                                              type: "danger",
                                                              size: "mini"
                                                            },
                                                            on: {
                                                              click: function click(
                                                                $event
                                                              ) {
                                                                _vm.handleClickEmptyNumberFilter(
                                                                  configIndex
                                                                );
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm
                                                                  .languageOptions[
                                                                  _vm.language
                                                                ].numberFilter[
                                                                  "clear_btn"
                                                                ]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        attrs: {
                                                          slot: "reference"
                                                        },
                                                        slot: "reference"
                                                      },
                                                      [
                                                        item.name
                                                          ? _c(
                                                              "span",
                                                              {
                                                                class: {
                                                                  numFiltered:
                                                                    item
                                                                      .numberFilterPhrase
                                                                      .value[0] !==
                                                                    ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    item.name
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          : _c(
                                                              "span",
                                                              {
                                                                class: {
                                                                  numFiltered:
                                                                    item
                                                                      .numberFilterPhrase
                                                                      .value[0] !==
                                                                    ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    item.prop
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _c(
                                              "div",
                                              {
                                                staticClass: "header-cell-inner"
                                              },
                                              [
                                                item.name
                                                  ? _c(
                                                      "span",
                                                      {
                                                        class: {
                                                          filtered:
                                                            item.filterSelectedOptions &&
                                                            item
                                                              .filterSelectedOptions
                                                              .length
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(item.name)
                                                        )
                                                      ]
                                                    )
                                                  : _c(
                                                      "span",
                                                      {
                                                        class: {
                                                          filtered:
                                                            item.filterSelectedOptions &&
                                                            item
                                                              .filterSelectedOptions
                                                              .length
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(item.prop)
                                                        )
                                                      ]
                                                    )
                                              ]
                                            ),
                                    _vm._v(" "),
                                    _vm.selectable && item.prop === "_index"
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "header-cell-inner all-select",
                                            on: {
                                              click: function click($event) {
                                                _vm.selectAll();
                                              }
                                            }
                                          },
                                          [_vm._v("All")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.sortable
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "header-cell-inner caret-wrapper"
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "sort-ascending",
                                              class: {
                                                selected:
                                                  _vm.sortParam.col ===
                                                    item.prop &&
                                                  _vm.sortParam.direction ===
                                                    "asc"
                                              },
                                              on: {
                                                click: function click($event) {
                                                  _vm.handleClickSort(
                                                    item.prop,
                                                    "asc"
                                                  );
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass: "sort-descending",
                                              class: {
                                                selected:
                                                  _vm.sortParam.col ===
                                                    item.prop &&
                                                  _vm.sortParam.direction ===
                                                    "desc"
                                              },
                                              on: {
                                                click: function click($event) {
                                                  _vm.handleClickSort(
                                                    item.prop,
                                                    "desc"
                                                  );
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                );
                              }
                            )
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.enableMultiHeader
                      ? _vm._l(_vm.multiConfigTemp, function(hItem, hIndex) {
                          return _c(
                            "div",
                            { key: hIndex, staticClass: "header-line" },
                            _vm._l(hItem, function(hdSet, hdName, hdIndex) {
                              return _c(
                                "div",
                                {
                                  key: hdName,
                                  staticClass: "header-cell",
                                  attrs: {
                                    colspan: hdSet.colspan,
                                    rowspan: hdSet.rowspan
                                  }
                                },
                                [_vm._v(_vm._s(hdSet.name))]
                              );
                            })
                          );
                        })
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { ref: "tContainer", staticClass: "t-container" },
                [
                  _c("virtual-scroller", {
                    ref: "scroller",
                    staticClass: "scroller",
                    attrs: {
                      items: _vm.dataTemp,
                      "item-height": _vm.itemHeight,
                      "content-tag": "div",
                      "pool-size": "500"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function fn(props) {
                          return [
                            _c(
                              "div",
                              {
                                staticClass: "item-line",
                                class: {
                                  selected: props.item._eSelected,
                                  unselectable: !_vm.selectable,
                                  "item-line-allow-hightlight":
                                    _vm.hoverHighlight
                                },
                                style: { height: _vm.itemHeight + "px" },
                                on: {
                                  click: function click($event) {
                                    _vm.handleClickItem(props.item);
                                  }
                                }
                              },
                              _vm._l(
                                _vm.configTemp.filter(function(v) {
                                  return !v.isHidden;
                                }),
                                function(item, configIndex) {
                                  return _c(
                                    "div",
                                    {
                                      key: configIndex,
                                      staticClass: "item-cell",
                                      class:
                                        props.item._eClass[item.prop] || "",
                                      style: { flex: _vm.colWidth[configIndex] }
                                    },
                                    [
                                      item.prop === "_action"
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "item-cell-inner rowSlot",
                                                style: {
                                                  height:
                                                    _vm.itemHeight - 12 + "px",
                                                  "align-items":
                                                    item.alignItems || "center"
                                                },
                                                on: {
                                                  click: _vm.handleClickAction
                                                }
                                              },
                                              [
                                                _vm._t(
                                                  item.actionName || "action",
                                                  null,
                                                  {
                                                    index: props.itemIndex,
                                                    row: _vm.clearObj(
                                                      props.item
                                                    )
                                                  }
                                                )
                                              ],
                                              2
                                            )
                                          ]
                                        : [
                                            item.prop === "_expand"
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "item-cell-inner"
                                                  },
                                                  [
                                                    _c(
                                                      "el-popover",
                                                      {
                                                        attrs: {
                                                          placement:
                                                            "bottom-start",
                                                          width:
                                                            _vm.mainWidth - 54,
                                                          "popper-class":
                                                            "popperCard",
                                                          trigger: "click"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          [
                                                            _vm._t(
                                                              "expand",
                                                              null,
                                                              {
                                                                index:
                                                                  props.itemIndex,
                                                                row: _vm.clearObj(
                                                                  props.item
                                                                )
                                                              }
                                                            )
                                                          ],
                                                          2
                                                        ),
                                                        _vm._v(" "),
                                                        _c("i", {
                                                          staticClass:
                                                            "el-icon-arrow-right",
                                                          staticStyle: {
                                                            cursor: "pointer"
                                                          },
                                                          attrs: {
                                                            slot: "reference"
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.handleClickExpand
                                                          },
                                                          slot: "reference"
                                                        })
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              : item.eTip
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "item-cell-inner",
                                                      style: {
                                                        "align-items":
                                                          item.alignItems ||
                                                          "center"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "el-tooltip",
                                                        {
                                                          attrs: {
                                                            placement:
                                                              "top-start",
                                                            effect: "light"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "tips",
                                                              attrs: {
                                                                slot: "content"
                                                              },
                                                              slot: "content"
                                                            },
                                                            [
                                                              _vm._l(
                                                                item.eTip,
                                                                function(
                                                                  tipProp
                                                                ) {
                                                                  return _c(
                                                                    "span",
                                                                    {
                                                                      key: tipProp
                                                                    },
                                                                    [
                                                                      item.eTipWithProp
                                                                        ? _c(
                                                                            "span",
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm.configTemp.filter(
                                                                                    function(
                                                                                      v
                                                                                    ) {
                                                                                      return (
                                                                                        v.prop ===
                                                                                        tipProp
                                                                                      );
                                                                                    }
                                                                                  )[0]
                                                                                    .name
                                                                                ) +
                                                                                  ": "
                                                                              )
                                                                            ]
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        [
                                                                          _vm.configTemp.filter(
                                                                            function(
                                                                              v
                                                                            ) {
                                                                              return (
                                                                                v.prop ===
                                                                                tipProp
                                                                              );
                                                                            }
                                                                          )[0]
                                                                            .prefix &&
                                                                          !isNaN(
                                                                            props
                                                                              .item[
                                                                              tipProp
                                                                            ]
                                                                          ) &&
                                                                          props
                                                                            .item[
                                                                            tipProp
                                                                          ]
                                                                            ? _c(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "prefix"
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      _vm.configTemp.filter(
                                                                                        function(
                                                                                          v
                                                                                        ) {
                                                                                          return (
                                                                                            v.prop ===
                                                                                            tipProp
                                                                                          );
                                                                                        }
                                                                                      )[0]
                                                                                        .prefix
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            : _vm._e(),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "span",
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  props
                                                                                    .item[
                                                                                    tipProp
                                                                                  ]
                                                                                )
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _vm.configTemp.filter(
                                                                            function(
                                                                              v
                                                                            ) {
                                                                              return (
                                                                                v.prop ===
                                                                                tipProp
                                                                              );
                                                                            }
                                                                          )[0]
                                                                            .suffix &&
                                                                          !isNaN(
                                                                            props
                                                                              .item[
                                                                              tipProp
                                                                            ]
                                                                          ) &&
                                                                          props
                                                                            .item[
                                                                            tipProp
                                                                          ]
                                                                            ? _c(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "suffix"
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      _vm.configTemp.filter(
                                                                                        function(
                                                                                          v
                                                                                        ) {
                                                                                          return (
                                                                                            v.prop ===
                                                                                            tipProp
                                                                                          );
                                                                                        }
                                                                                      )[0]
                                                                                        .suffix
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            : _vm._e(),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "br"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  );
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("i", {
                                                                staticClass:
                                                                  "el-icon-document",
                                                                staticStyle: {
                                                                  color: "#aaa",
                                                                  cursor:
                                                                    "pointer"
                                                                },
                                                                on: {
                                                                  click: function click(
                                                                    $event
                                                                  ) {
                                                                    _vm.handleClickCopy(
                                                                      props.item,
                                                                      item.eTip
                                                                    );
                                                                  }
                                                                }
                                                              })
                                                            ],
                                                            2
                                                          ),
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            item.prefix &&
                                                            !isNaN(
                                                              props.item[
                                                                item.prop
                                                              ]
                                                            ) &&
                                                            props.item[
                                                              item.prop
                                                            ]
                                                              ? _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "prefix",
                                                                    class:
                                                                      props.item
                                                                        ._eClass[
                                                                        item
                                                                          .prop
                                                                      ] || ""
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.prefix
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            item.prop ===
                                                            "_index"
                                                              ? _c("span", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      props.itemIndex +
                                                                        1
                                                                    )
                                                                  )
                                                                ])
                                                              : item.filterable
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "tag",
                                                                      class:
                                                                        item
                                                                          .filterTag[
                                                                          props
                                                                            .item[
                                                                            item
                                                                              .prop
                                                                          ]
                                                                        ] ||
                                                                        "defaultTag"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          props
                                                                            .item[
                                                                            item
                                                                              .prop
                                                                          ]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : item.eClass
                                                                  ? _c(
                                                                      "span",
                                                                      {
                                                                        class:
                                                                          props
                                                                            .item
                                                                            ._eClass[
                                                                            item
                                                                              .prop
                                                                          ]
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            props
                                                                              .item[
                                                                              item
                                                                                .prop
                                                                            ]
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _c("span", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          props
                                                                            .item[
                                                                            item
                                                                              .prop
                                                                          ]
                                                                        )
                                                                      )
                                                                    ]),
                                                            _vm._v(" "),
                                                            item.suffix &&
                                                            !isNaN(
                                                              props.item[
                                                                item.prop
                                                              ]
                                                            ) &&
                                                            props.item[
                                                              item.prop
                                                            ]
                                                              ? _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "suffix",
                                                                    class:
                                                                      props.item
                                                                        ._eClass[
                                                                        item
                                                                          .prop
                                                                      ] || ""
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.suffix
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e()
                                                          ])
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "item-cell-inner",
                                                      style: {
                                                        "align-items":
                                                          item.alignItems ||
                                                          "center"
                                                      }
                                                    },
                                                    [
                                                      item.prefix &&
                                                      !isNaN(
                                                        props.item[item.prop]
                                                      ) &&
                                                      props.item[item.prop]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "prefix",
                                                              class:
                                                                props.item
                                                                  ._eClass[
                                                                  item.prop
                                                                ] || ""
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.prefix
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      item.prop === "_index"
                                                        ? _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                props.itemIndex +
                                                                  1
                                                              )
                                                            )
                                                          ])
                                                        : item.filterable
                                                          ? _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "tag",
                                                                class:
                                                                  item
                                                                    .filterTag[
                                                                    props.item[
                                                                      item.prop
                                                                    ]
                                                                  ] ||
                                                                  "defaultTag"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    props.item[
                                                                      item.prop
                                                                    ]
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          : item.eClass
                                                            ? _c(
                                                                "span",
                                                                {
                                                                  class:
                                                                    props.item
                                                                      ._eClass[
                                                                      item.prop
                                                                    ]
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      props
                                                                        .item[
                                                                        item
                                                                          .prop
                                                                      ]
                                                                    )
                                                                  )
                                                                ]
                                                              )
                                                            : _c("span", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    props.item[
                                                                      item.prop
                                                                    ]
                                                                  )
                                                                )
                                                              ]),
                                                      _vm._v(" "),
                                                      item.suffix &&
                                                      !isNaN(
                                                        props.item[item.prop]
                                                      ) &&
                                                      props.item[item.prop]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "suffix",
                                                              class:
                                                                props.item
                                                                  ._eClass[
                                                                  item.prop
                                                                ] || ""
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.suffix
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  )
                                          ]
                                    ],
                                    2
                                  );
                                }
                              )
                            )
                          ];
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showSummary,
                      expression: "showSummary"
                    }
                  ],
                  ref: "tBottom",
                  staticClass: "t-bottom"
                },
                [
                  _c("div", { ref: "tBottomTable" }, [
                    _c(
                      "div",
                      { staticClass: "bottom-line" },
                      _vm._l(
                        _vm.configTemp.filter(function(v) {
                          return !v.isHidden;
                        }),
                        function(item, configIndex) {
                          return _c(
                            "div",
                            {
                              key: configIndex,
                              staticClass: "bottom-cell",
                              style: { flex: _vm.colWidth[configIndex] }
                            },
                            [
                              item.prop === "_expand" && item.expandSummary
                                ? _c(
                                    "span",
                                    [
                                      _c(
                                        "el-popover",
                                        {
                                          attrs: {
                                            placement: "bottom-start",
                                            width: _vm.mainWidth - 54,
                                            "popper-class": "popperCard",
                                            trigger: "click"
                                          }
                                        },
                                        [
                                          _vm._t("summary", null, {
                                            data: _vm.dataTemp
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass: "el-icon-arrow-right",
                                            staticStyle: { cursor: "pointer" },
                                            attrs: { slot: "reference" },
                                            on: {
                                              click: _vm.handleClickExpand
                                            },
                                            slot: "reference"
                                          })
                                        ],
                                        2
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.prefix
                                ? _c("span", [_vm._v(_vm._s(item.prefix))])
                                : _vm._e(),
                              _vm._v(" "),
                              item.summary
                                ? _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.summaryData.filter(function(v) {
                                          return v.prop === item.prop;
                                        })[0].value
                                      )
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              item.suffix
                                ? _c("span", [_vm._v(_vm._s(item.suffix))])
                                : _vm._e()
                            ]
                          );
                        }
                      )
                    )
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "clipboard" }, [
            _c("input", { ref: "clipboardInput", attrs: { type: "text" } })
          ]),
          _vm._v(" "),
          _c("resize-observer", { on: { notify: _vm.setSize } })
        ],
        1
      );
    },
    staticRenderFns: [],
    _scopeId: "data-v-184ba508",
    name: "VueVirtualTable",
    components: ((_components = {
      VirtualScroller: VirtualScroller,
      ResizeObserver: vueResize.ResizeObserver
    }),
    _defineProperty(_components, _Select.name, _Select),
    _defineProperty(_components, _Option.name, _Option),
    _defineProperty(_components, _Popover.name, _Popover),
    _defineProperty(_components, _Input.name, _Input),
    _defineProperty(_components, _Checkbox.name, _Checkbox),
    _defineProperty(_components, _CheckboxGroup.name, _CheckboxGroup),
    _defineProperty(_components, _Button.name, _Button),
    _components),
    props: {
      config: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      height: {
        type: Number,
        default: function _default() {
          return 300;
        }
      },
      selectable: {
        type: Boolean,
        default: function _default() {
          return false;
        }
      },
      defaultSelect: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      itemHeight: {
        type: Number,
        default: function _default() {
          return 42;
        }
      },
      refreshConfig: {
        type: Boolean,
        default: function _default() {
          return false;
        }
      },
      minWidth: {
        type: Number,
        default: function _default() {
          return 1200;
        }
      },
      bordered: {
        type: Boolean,
        default: function _default() {
          return false;
        }
      },
      enableExport: {
        type: Boolean,
        default: function _default() {
          return false;
        }
      },
      enableMultiHeader: {
        type: Boolean,
        default: function _default() {
          return false;
        }
      },
      multiHeader: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      mainColor: {
        type: String,
        default: function _default() {
          return "#3caed2";
        }
      },
      hoverHighlight: {
        type: Boolean,
        default: function _default() {
          return true;
        }
      },
      language: {
        type: String,
        default: function _default() {
          return "cn";
        }
      }
    },
    computed: {},
    data: function data() {
      return {
        mainWidth: 600,
        colWidth: [],
        sortParam: { col: "", direction: "asc" },
        dataInitTemp: [],
        dataTemp: [],
        configTemp: [],
        summaryData: [],
        showSummary: false,
        lastConfigTemp: [],
        allOperatorType: [
          {
            value: "eq",
            label: "＝"
          },
          {
            value: "neq",
            label: "≠"
          },
          {
            value: "lt",
            label: "＜"
          },
          {
            value: "le",
            label: "≤"
          },
          {
            value: "gt",
            label: "＞"
          },
          {
            value: "ge",
            label: "≥"
          },
          {
            value: "bt",
            label: "between"
          }
        ],
        allPhraseOperator: [
          {
            value: "in",
            label: "Include"
          },
          {
            value: "out",
            label: "Exclude"
          }
        ],
        multiConfigTemp: [],
        minWidthTemp: 0,
        phraseLimit: 6,
        languageOptions: {
          en: {
            phraseFilter: {
              in: "Include",
              out: "Exclude",
              ph: 'Press "Enter" to Confirm',
              and_btn: "And",
              clear_btn: "Clear"
            },
            selectFilter: {
              confirm_btn: "Confirm",
              reverse_btn: "Reverse"
            },
            numberFilter: {
              eq: "=",
              neq: "≠",
              lt: "＜",
              le: "≤",
              gt: "＞",
              ge: "≥",
              bt: "between",
              clear_btn: "Clear"
            }
          },
          cn: {
            phraseFilter: {
              in: "包含",
              out: "不包含",
              ph: "按“回车”确定",
              and_btn: "并且",
              clear_btn: "清除"
            },
            selectFilter: {
              confirm_btn: "确定",
              reverse_btn: "反转"
            },
            numberFilter: {
              eq: "=",
              neq: "≠",
              lt: "＜",
              le: "≤",
              gt: "＞",
              ge: "≥",
              bt: "之间",
              clear_btn: "清除"
            }
          }
        }
      };
    },
    mounted: function mounted() {
      this.updateBase();
      this.refreshSummary();
      this.setSize();
    },

    watch: {
      data: function data() {
        this.update();
      },
      config: function config() {
        this.update();
      },
      multiHeader: function multiHeader() {
        this.update();
      },
      defaultSelect: function defaultSelect() {
        this.update();
      },
      height: function height() {
        this.setSize();
      }
    }
  }),
  _defineProperty(_render$staticRenderF, "computed", {}),
  _defineProperty(_render$staticRenderF, "methods", {
    updateBase: function updateBase() {
      var self = this;
      self.configTemp = self.deepCopy(self.config);
      self.dataInitTemp = self.deepCopy(self.data);
      this.minWidthTemp = this.minWidth;
      if (this.enableMultiHeader) {
        var _countLevel = this.countLevel(this.multiHeader),
          config = _countLevel.config,
          width = _countLevel.width,
          multiConfig = _countLevel.multiConfig;

        this.configTemp = self.deepCopy(config);
        this.minWidthTemp = width;
        this.multiConfigTemp = self.deepCopy(multiConfig);
      }
      self.parseConfig();
      self.updateInitData();
      self.dataTemp = self.deepCopy(self.dataInitTemp);
    },
    update: function update() {
      console.log("Data updated!");
      var self = this;
      self.lastConfigTemp = self.deepCopy(self.configTemp);
      self.updateBase();
      self.handleClickConfirmFilter();
      self.refreshSummary();
      self.setSize();
      self.$emit(
        "changeSelection",
        self.dataInitTemp.filter(function(v) {
          return v._eSelected === true;
        })
      );
    },
    countLevel: function countLevel(originConfig) {
      var separate_code = ".";
      var flattenObject = function flattenObject(obj) {
        var prefix =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : "";
        var depth =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : 10;

        depth--;
        return Object.keys(obj).reduce(function(acc, k) {
          var pre = prefix.length ? prefix + separate_code : "";
          if (
            _typeof(obj[k]) === "object" &&
            !Array.isArray(obj[k]) &&
            depth >= 1
          )
            Object.assign(acc, flattenObject(obj[k], pre + k, depth));
          else acc[pre + k] = obj[k];
          return acc;
        }, {});
      };
      var handleConfigData = function handleConfigData(config) {
        var index =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var depth = arguments[2];

        var rtn_data = [];

        var _loop = function _loop(name, data) {
          var item = {};
          if (
            (typeof data === "undefined" ? "undefined" : _typeof(data)) ==
              "object" &&
            Object.keys(data).length
          ) {
            var l = 0;
            var temp = handleConfigData(data, index + 1, depth - 1);
            temp = temp.map(function(v) {
              v.path = name + "." + v.path;
              if (v.level == index + 2) {
                l += v.colspan;
              }
              return v;
            });
            rtn_data = rtn_data.concat(temp);
            item.rowspan = 1;
            item.colspan = l;
          } else {
            item.rowspan = depth;
            item.colspan = 1;
          }
          item.path = name;
          item.name = name;
          item.level = index + 1;
          rtn_data.push(item);
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (
            var _iterator = Object.entries(config)[Symbol.iterator](), _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
          ) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var name = _ref2[0];
            var data = _ref2[1];

            _loop(name, data);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return rtn_data;
      };
      var config_pain = flattenObject(originConfig, "");
      var width = 0;
      var config = Object.keys(config_pain).map(function(v) {
        width += 100;
        return { prop: v, name: v };
      });
      var allLevels = Object.keys(config_pain).map(function(v) {
        return v.split(separate_code).length;
      });
      var maxLevel = Math.max.apply(Math, _toConsumableArray(allLevels));
      var rtn_data = handleConfigData(originConfig, 0, maxLevel);
      // rtn_data = groupby(rtn_data, ['level'])
      var multiConfig = Object.values(rtn_data);
      console.log(multiConfig);
      return { config: config, width: width, multiConfig: multiConfig };
    },
    clipboardCP: (function() {
      var _ref3 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime.mark(function _callee(text) {
          var input, result;
          return _regeneratorRuntime.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (!navigator.clipboard) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt(
                      "return",
                      navigator.clipboard.writeText(text)
                    );

                  case 4:
                    input = this.$refs.clipboardInput;

                    input.value = text;
                    input.focus();
                    input.select();
                    result = document.execCommand("copy");

                    if (!(result === "unsuccessful")) {
                      _context.next = 11;
                      break;
                    }

                    return _context.abrupt("return", false);

                  case 11:
                    return _context.abrupt("return", true);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            },
            _callee,
            this
          );
        })
      );

      function clipboardCP(_x4) {
        return _ref3.apply(this, arguments);
      }

      return clipboardCP;
    })(),
    handleClickCopy: function handleClickCopy(props, tips) {
      var _this = this;

      var text = "";
      for (var i = 0; i < tips.length; i++) {
        text += props[tips[i]];
        if (i < tips.length - 1) {
          text += "\n";
        }
      }
      this.clipboardCP(text)
        .then(function(result) {
          _this.$message.success("复制成功");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleExportTable: function handleExportTable() {
      var excelHeader = this.configTemp
        .filter(function(v) {
          return !["_index", "_action", "_expand"].includes(v.prop);
        })
        .map(function(v) {
          return v.prop;
        });
      var printData = [];
      this.dataTemp.forEach(function(v) {
        var item = {};
        excelHeader.forEach(function(val) {
          item = Object.assign(item, _defineProperty({}, val, v[val]));
        });
        printData.push(item);
      });
      var wopts = { bookType: "xlsx", bookSST: false, type: "binary" };
      var wb = { SheetNames: [], Sheets: {}, Props: {} };
      wb.SheetNames.push("sheet1");
      wb.Sheets["sheet1"] = XLSX.utils.json_to_sheet(printData);
      this.saveAs(
        new Blob([this.s2ab(XLSX.write(wb, wopts))], {
          type: "application/octet-stream"
        }),
        new Date().toLocaleDateString() +
          "." +
          (wopts.bookType == "biff2" ? "xls" : wopts.bookType)
      );
    },
    saveAs: function saveAs(obj, fileName) {
      //自定义简单的下载文件实现方式
      var tmpa = document.createElement("a");
      tmpa.download = fileName || "下载";
      tmpa.href = URL.createObjectURL(obj); //绑定a标签
      tmpa.click(); //模拟点击实现下载
      setTimeout(function() {
        //延时释放
        URL.revokeObjectURL(obj);
      }, 100);
    },
    s2ab: function s2ab(s) {
      if (typeof ArrayBuffer !== "undefined") {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) {
          view[i] = s.charCodeAt(i) & 0xff;
        }
        return buf;
      } else {
        var buf = new Array(s.length);
        for (var i = 0; i != s.length; ++i) {
          buf[i] = s.charCodeAt(i) & 0xff;
        }
        return buf;
      }
    },
    parseConfig: function parseConfig() {
      var self = this;
      self.configTemp.forEach(function(v, i) {
        var last_item =
          self.lastConfigTemp.filter(function(item) {
            return item.prop === v.prop;
          })[0] || {};
        if (self.refreshConfig) {
          last_item = {};
        }
        if (!v.width) {
          self.$set(v, "width", "auto");
        }
        if (!v.filterTag) {
          self.$set(v, "filterTag", {});
        }
        if (v.filterable) {
          var options = self.dataInitTemp.reduce(function(prev, curr) {
            if (curr) {
              prev.push(curr[v.prop]);
            }
            return prev;
          }, []);
          var filterOptions = []
            .concat(_toConsumableArray(new Set(options)))
            .sort(function(a, b) {
              return a.localeCompare(b);
            });
          self.$set(v, "filterOptions", filterOptions);
          var selecetedOptions = last_item["filterSelectedOptions"] || [];
          var l = selecetedOptions.length;
          for (var index = l - 1; index >= 0; index--) {
            if (filterOptions.indexOf(selecetedOptions[index]) === -1) {
              selecetedOptions.splice(index, 1);
            }
          }
          self.$set(v, "filterSelectedOptions", selecetedOptions);
          self.$set(v, "filterVisible", false);
        }
        if (v.searchable) {
          var searchPhrase = last_item["searchPhrase"] || [
            { operator: "in", value: "" }
          ];
          self.$set(v, "searchPhrase", searchPhrase);
          self.$set(v, "searchVisible", false);
        }
        if (v.numberFilter) {
          var filterPhrase = last_item["numberFilterPhrase"] || {
            operator: "le",
            value: ["", ""]
          };
          self.$set(v, "numberFilterPhrase", filterPhrase);
          self.$set(v, "numberFilterVisible", false);
        }
      });
    },
    updateInitData: function updateInitData() {
      var _this2 = this;

      var self = this;
      self.dataInitTemp.forEach(function(v, i) {
        v._eId = self._uuid();
        v._eSelected = false;
        if (_this2.defaultSelect && _this2.defaultSelect.indexOf(i) > -1) {
          v._eSelected = true;
        }
        v._eClass = {};
        self.configTemp.forEach(function(v1, i1) {
          if (v1.eClass) {
            v._eClass[v1.prop] = self.parseClass(v1.eClass, v);
          }
        });
      });
    },
    parseClass: function parseClass(eClass, item) {
      var _this3 = this;

      var result = {};

      var _loop2 = function _loop2(cl) {
        var text = eClass[cl];
        var props = text.match(/\${[\w-_]+}/g);
        props = props || [];
        props.forEach(function(v, i) {
          var this_prop = v.replace(/\${([\w-_]+)}/, "$1");
          text = text.replace(v, item[this_prop] || 0);
        });
        result[cl] = _this3.evalFunc(text);
      };

      for (var cl in eClass) {
        _loop2(cl);
      }
      return result;
    },
    evalFunc: function evalFunc(phrase) {
      var fun = new Function("return " + phrase);
      return fun();
    },
    refreshSummary: function refreshSummary() {
      var _this4 = this;

      var self = this;
      var l = self.dataTemp.length;
      var summary = [];
      self.configTemp.forEach(function(v, i) {
        var prop = v.prop;
        if (!v.summary) {
          return;
        }
        self.showSummary = true;
        var summary_item = {};
        summary_item.prop = prop;
        switch (v.summary) {
          case "COUNT":
            summary_item.value = l;
            summary.push(summary_item);
            break;
          case "SUM":
            summary_item.value = self.dataTemp.reduce(function(prev, curr) {
              if (!isNaN(curr[prop])) {
                var this_num = Number(curr[prop]);
                prev += this_num;
              }
              return prev;
            }, 0);
            summary_item.value = Number(summary_item.value.toFixed(2));
            summary.push(summary_item);
            break;
        }
      });
      self.configTemp.forEach(function(v, i) {
        var prop = v.prop;
        if (!v.summary) {
          return;
        }
        var summary_item = {};
        summary_item.prop = prop;
        if (/\${[\w-_]+}/.test(v.summary)) {
          var _text = v.summary;
          var props = _text.match(/\${[\w-_]+}/g);
          props.forEach(function(v1, i1) {
            var this_prop = v1.replace(/\${([\w-_]+)}/, "$1");
            _text = _text.replace(
              v1,
              summary.filter(function(val) {
                return val.prop === this_prop;
              })[0].value || 0
            );
          });
          summary_item.value = _this4.evalFunc(_text);
          summary_item.value = Number(summary_item.value.toFixed(2));
          summary.push(summary_item);
        }
      });
      self.summaryData = summary.slice();
      self.summaryData.splice(0, 0);
    },
    selectAll: function selectAll() {
      var self = this;
      var r = true;
      if (
        self.dataTemp.length ===
        self.dataTemp.filter(function(item) {
          return item._eSelected === true;
        }).length
      ) {
        r = false;
      }
      self.dataTemp.forEach(function(item) {
        item._eSelected = r;
        var eId = item._eId;
        self.dataInitTemp.filter(function(v, i) {
          return v._eId === item._eId;
        })[0]._eSelected =
          item._eSelected;
      });
      self.dataTemp.splice(0, 0);
      self.dataInitTemp.splice(0, 0);
      self.$emit(
        "changeSelection",
        self.dataInitTemp.filter(function(v) {
          return v._eSelected === true;
        })
      );
    },
    handleClickItem: function handleClickItem(item) {
      var self = this;
      item._eSelected = !item._eSelected && this.selectable;
      self.dataInitTemp.filter(function(v, i) {
        return v._eId === item._eId;
      })[0]._eSelected =
        item._eSelected;
      self.dataTemp.filter(function(v, i) {
        return v._eId === item._eId;
      })[0]._eSelected =
        item._eSelected;
      self.dataTemp.splice(0, 0);
      self.dataInitTemp.splice(0, 0);
      self.$emit(
        "changeSelection",
        self.dataInitTemp.filter(function(v) {
          return v._eSelected === true;
        })
      );
    },
    handleClickConfirmFilter: function handleClickConfirmFilter(index) {
      var self = this;
      var temp = self.deepCopy(self.dataInitTemp);
      self.configTemp.forEach(function(v, i) {
        var prop = v.prop;
        if (v.filterSelectedOptions && v.filterSelectedOptions.length) {
          temp = temp.filter(function(item) {
            return v.filterSelectedOptions.indexOf(item[prop]) > -1;
          });
        }
        if (
          v.searchPhrase &&
          v.searchPhrase.findIndex(function(v) {
            return v.value != "";
          }) > -1
        ) {
          v.searchPhrase
            .filter(function(v) {
              return v.value != "";
            })
            .forEach(function(fp) {
              if (fp.operator == "out") {
                temp = temp.filter(function(item) {
                  return (
                    (item[prop] || "")
                      .toLowerCase()
                      .indexOf(fp.value.toLowerCase()) === -1
                  );
                });
              } else {
                temp = temp.filter(function(item) {
                  return (
                    (item[prop] || "")
                      .toLowerCase()
                      .indexOf(fp.value.toLowerCase()) > -1
                  );
                });
              }
            });
        }
        if (
          v.numberFilterPhrase &&
          v.numberFilterPhrase.value[0] !== "" &&
          (v.numberFilterPhrase.operator !== "bt" ||
            (v.numberFilterPhrase.value[1] !== "" &&
              v.numberFilterPhrase.operator === "bt"))
        ) {
          switch (v.numberFilterPhrase.operator) {
            case "eq":
              temp = temp.filter(function(item) {
                return (
                  Number(item[prop]) == Number(v.numberFilterPhrase.value[0])
                );
              });
              break;
            case "neq":
              temp = temp.filter(function(item) {
                return (
                  Number(item[prop]) != Number(v.numberFilterPhrase.value[0])
                );
              });
              break;
            case "lt":
              temp = temp.filter(function(item) {
                return (
                  Number(item[prop]) < Number(v.numberFilterPhrase.value[0])
                );
              });
              break;
            case "le":
              temp = temp.filter(function(item) {
                return (
                  Number(item[prop]) <= Number(v.numberFilterPhrase.value[0])
                );
              });
              break;
            case "gt":
              temp = temp.filter(function(item) {
                return (
                  Number(item[prop]) > Number(v.numberFilterPhrase.value[0])
                );
              });
              break;
            case "ge":
              temp = temp.filter(function(item) {
                return (
                  Number(item[prop]) >= Number(v.numberFilterPhrase.value[0])
                );
              });
              break;
            case "bt":
              temp = temp.filter(function(item) {
                return (
                  Number(item[prop]) > Number(v.numberFilterPhrase.value[0]) &&
                  Number(item[prop]) <= Number(v.numberFilterPhrase.value[1])
                );
              });
              break;
          }
        }
      });
      self.dataTemp = temp;
      if (index != undefined && self.configTemp[index]) {
        self.$set(self.configTemp[index], "filterVisible", false);
      }
      // console.log(self.dataTemp)
      self.handleClickSort(self.sortParam.col, self.sortParam.direction, true);
      self.refreshSummary();
    },
    handleClickReverseFilter: function handleClickReverseFilter(index) {
      var self = this;
      var options = self.configTemp[index].filterOptions.slice();
      var selecetedOptions = self.configTemp[
        index
      ].filterSelectedOptions.slice();
      console.log(options);
      console.log(selecetedOptions);
      self.configTemp[index].filterSelectedOptions = options.reduce(function(
        prev,
        curr
      ) {
        if (selecetedOptions.indexOf(curr) === -1) {
          prev.push(curr);
        }
        return prev;
      },
      []);
      console.log(self.configTemp[index].filterSelectedOptions);
    },
    handleClickEmptyNumberFilter: function handleClickEmptyNumberFilter(index) {
      this.configTemp[index].numberFilterPhrase.value = ["", ""];
      this.handleClickConfirmFilter(index);
      this.$set(this.configTemp[index], "numberFilterVisible", false);
    },
    addFilterPhrase: function addFilterPhrase(index) {
      this.configTemp[index].searchPhrase.push({ operator: "in", value: "" });
    },
    removePhraseFilter: function removePhraseFilter(index, ph_index) {
      this.configTemp[index].searchPhrase.splice(ph_index, 1);
      this.handleClickConfirmFilter(index);
      // let sp_temp = this.configTemp[index].searchPhrase.slice()
      // sp_temp.splice(ph_index, 1)
      // this.configTemp
    },
    handleClickEmptyPhraseFilter: function handleClickEmptyPhraseFilter(index) {
      this.configTemp[index].searchPhrase = [{ operator: "in", value: "" }];
      this.handleClickConfirmFilter(index);
    },
    handleChangeFilter: function handleChangeFilter(val) {
      console.log(val);
    },
    handleClickSort: function handleClickSort(val, direction, forse) {
      var self = this;
      if (
        self.sortParam.col === val &&
        self.sortParam.direction === direction &&
        !forse
      ) {
        return;
      }
      if (!self.dataTemp[0] || !val) {
        return;
      }
      self.sortParam.col = val;
      self.sortParam.direction = direction;
      console.log(self.sortParam);
      var isNumber = false;
      self.dataTemp.some(function(v, i) {
        if (!v[val] && v[val] != 0) {
          return false;
        }
        if (isNaN(v[val]) && v[val] != "NaN") {
          isNumber = false;
          return true;
        } else {
          isNumber = true;
          return true;
        }
      });
      console.log(isNumber);
      if (direction === "asc") {
        if (!isNumber) {
          // let a_cp = a[val]||'', b_cp = b[val]||''
          self.dataTemp.sort(function(a, b) {
            return (a[val] || "").localeCompare(b[val] || "");
          });
        } else {
          self.dataTemp.sort(function(a, b) {
            if (isNaN(a[val])) {
              return -b[val] < 0 ? -1 : 1;
            }
            if (isNaN(b[val])) {
              return a[val] < 0 ? -1 : 1;
            }
            return a[val] - b[val] < 0 ? -1 : 1;
          });
        }
      } else {
        if (!isNumber) {
          // let a_cp = a[val]||'', b_cp = b[val]||''
          self.dataTemp.sort(function(a, b) {
            return -(a[val] || "").localeCompare(b[val] || "");
          });
        } else {
          self.dataTemp.sort(function(a, b) {
            if (isNaN(a[val])) {
              return -b[val] > 0 ? -1 : 1;
            }
            if (isNaN(b[val])) {
              return a[val] > 0 ? -1 : 1;
            }
            return a[val] - b[val] > 0 ? -1 : 1;
          });
        }
      }
    },
    handleClickAction: function handleClickAction(eve) {
      eve.stopPropagation();
    },
    handleClickExpand: function handleClickExpand(eve) {
      eve.stopPropagation();
    },
    setSize: function setSize() {
      console.log("resize");
      if (!this.$refs || !this.$refs.tContainer) {
        return;
      }
      var scrollBarWidth =
        this.$refs.scroller.$el.offsetWidth -
        this.$refs.scroller.$el.clientWidth;
      var mainWidth = Number(
        this.$refs.mainTable.getBoundingClientRect().width.toFixed(1)
      );
      mainWidth = Math.max(mainWidth, this.minWidth);
      this.mainWidth = this.$refs.mainScroll.getBoundingClientRect().width;
      this.$refs.tContainer.setAttribute(
        "style",
        "width:" +
          mainWidth +
          "px;height:" +
          (this.height -
            60 -
            35 * Number(this.enableExport) -
            60 * (this.showSummary ? 1 : 0)) +
          "px"
      );
      this.$refs.tHeaderTable.setAttribute(
        "style",
        "width:" + (mainWidth - scrollBarWidth) + "px"
      );
      if (this.$refs.tBottom) {
        this.$refs.tBottomTable.setAttribute(
          "style",
          "width:" + (mainWidth - scrollBarWidth) + "px"
        );
      }
      var colNumber = this.configTemp.filter(function(v) {
        return !v.isHidden;
      }).length;
      var usedWidth = 0,
        averageColNum = 0;
      this.configTemp
        .filter(function(v) {
          return !v.isHidden;
        })
        .forEach(function(v, i) {
          if (v.width === "auto") {
            averageColNum += 1;
          } else {
            usedWidth += Number(v.width);
          }
        });
      var averageWidth = Number(
        ((mainWidth - usedWidth) / averageColNum).toFixed(1)
      );
      for (var i = 0; i < colNumber; i++) {
        if (
          isNaN(
            this.configTemp.filter(function(v) {
              return !v.isHidden;
            })[i].width
          )
        ) {
          this.colWidth[i] = (averageWidth * 100 / mainWidth).toFixed(1);
        } else {
          this.colWidth[i] = (
            this.configTemp.filter(function(v) {
              return !v.isHidden;
            })[i].width *
            100 /
            mainWidth
          ).toFixed(1);
        }
      }
      this.colWidth.splice(0, 0);
      if (
        this.$refs.mainScroll.getBoundingClientRect().width < this.minWidthTemp
      ) {
        this.$refs.mainScroll.setAttribute("style", "overflow-x: scroll;");
      } else {
        this.$refs.mainScroll.setAttribute("style", "overflow-x: hidden;");
      }
    },
    _uuid: function _uuid() {
      var d = Date.now();
      if (
        typeof performance !== "undefined" &&
        typeof performance.now === "function"
      ) {
        d += performance.now(); //use high-precision timer if available
      }
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = ((d + Math.random() * 16) % 16) | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
    },
    deepCopy: function deepCopy(obj) {
      var obj_cp = JSON.parse(JSON.stringify(obj));
      return obj_cp;
    },
    clearObj: function clearObj(obj) {
      var obj_cp = JSON.parse(JSON.stringify(obj));
      delete obj_cp._eClass;
      delete obj_cp._eId;
      delete obj_cp._eSelected;
      return obj_cp;
    }
  }),
  _render$staticRenderF);

  // Import vue component
  // install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("VueVirtualTable", Component);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install

    // To auto-install when vue is found
  };
  var GlobalVue = null;
  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.install = install;
  exports.default = Component;

  Object.defineProperty(exports, "__esModule", { value: true });
});