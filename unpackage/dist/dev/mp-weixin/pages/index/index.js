"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_my_component = common_vendor.resolveComponent("my-component");
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  (_component_my_component + _easycom_navbar2)();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("Hello");
    const list = common_vendor.reactive([
      { name: "apple", num: 1 },
      { name: "arange", num: 2 },
      { name: "banana", num: 3 }
    ]);
    const totalNum = common_vendor.computed(() => {
      return list.reduce((total, cur) => {
        return total + cur.num;
      }, 0);
    });
    const handleClick = () => {
      list.forEach((item) => {
        item.num++;
      });
    };
    common_vendor.onLoad(() => {
      console.log("onLoad~~~生命周期");
    });
    common_vendor.onReady(() => {
      console.log("onReady~~~生命周期");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(handleClick),
        c: common_vendor.t(totalNum.value),
        d: common_vendor.f(list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.num),
            c: item.name
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/练习/uniapp/project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
