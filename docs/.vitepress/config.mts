import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IBest-UI-V2",
  description: "IBest-UI-V2是一个轻量、简单易用、可定制主题、支持深色模式和浅色模式的鸿蒙开源UI组件库。",
  srcDir: "./src",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      process.env.NODE_ENV === "development" ? "" : `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c4e91fc52653a1baa04e20de1c288145";
        hm.async = true;
        document.head.appendChild(hm);
      })()`,
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "ibest,IBest,Ibest,IBest-UI,IBest-UI-V2,ui,UI,鸿蒙,鸿蒙UI,鸿蒙UI库,鸿蒙UI框架,鸿蒙UI框架,鸿蒙UI组件,鸿蒙UI组件库,鸿蒙UI组件框架,百得思维,安徽百得思维,合肥百德思维,Harmony,OpenHarmony,HarmonyOS,HarmonyOS UI,HarmonyOS Ui,HarmonyOS Ui库,HarmonyOS Ui框架,HarmonyOS Ui组件,HarmonyOS Ui组件库,HarmonyOS Ui组件框架",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/home/", activeMatch: "/guide/" },
      { text: "组件", link: "/components/button/", activeMatch: "/components/" },
      { text: "v1.0.3", link: "" },
    ],
    sidebar: [
      {
        text: "开发指南",
        items: [
          { text: "介绍", link: "/guide/home/" },
          { text: "快速上手", link: "/guide/quickstart/" },
          { text: "全局配置", link: "/guide/global-config/" },
          { text: "自定义主题样式", link: "/guide/custom-theme/" },
          { text: "颜色模式", link: "/guide/color-mode/" },
          { text: "常见问题", link: "/guide/faq/" },
          { text: "设计资源", link: "/guide/design/" },
        ],
      },
      {
        text: "基础组件",
        items: [
          { text: "Button 按钮", link: "/components/button/" },
          { text: "Cell 单元格", link: "/components/cell/" },
          { text: "Icon 图标", link: "/components/icon/" },
          { text: "Popup 弹出层", link: "/components/popup/" },
          { text: "Toast 轻提示", link: "/components/toast/" },
        ],
      },
      {
        text: "表单组件",
        items: [
          { text: "Calendar 日历", link: "/components/calendar/" },
          { text: "CarInput 车牌输入框", link: "/components/carInput/" },
          { text: "CarKeyboard", link: "/components/carkeyboard/" },
          { text: "Cascader 级联选择器", link: "/components/cascader/" },
          { text: "Checkbox 复选框", link: "/components/checkbox/" },
          { text: "DatePicker 日期选择", link: "/components/datepicker/" },
          { text: "DateTimePicker 日期时间选择", link: "/components/datetimepicker/" },
          { text: "Field 输入框", link: "/components/field/" },
          { text: "Form 表单", link: "/components/form/" },
          { text: "NumberKeyboard 数字键盘", link: "/components/numberkeyboard/" },
          { text: "PasswordInput 密码输入框", link: "/components/passwordInput/" },
          { text: "Picker 选择器", link: "/components/picker/" },
          { text: "PickerGroup 选择器组", link: "/components/pickergroup/" },
          { text: "Radio 单选框", link: "/components/radio/" },
          { text: "Rate 评分", link: "/components/rate/" },
          { text: "Search 搜索", link: "/components/search/" },
          { text: "Slider 滑块", link: "/components/slider/" },
          { text: "Signature 签名", link: "/components/signature/" },
          { text: "Stepper 步进器", link: "/components/stepper/" },
          { text: "Switch 开关", link: "/components/switch/" },
          { text: "TimePicker 时间选择", link: "/components/timepicker/" },
          { text: "Uploader 文件上传", link: "/components/uploader/" },
        ],
      },
      {
        text: "反馈组件",
        items: [
          { text: "ActionSheet 动作面板", link: "/components/actionsheet/" },
          { text: "Dialog 弹出框", link: "/components/dialog/" },
          { text: "DropdownMenu 下拉菜单", link: "/components/dropdownMenu/" },
          { text: "FloatBubble 浮动气泡", link: "/components/floatbubble/" },
          { text: "Guide 引导", link: "/components/guide/" },
          { text: "Loading 加载", link: "/components/loading/" },
          { text: "Notify 消息通知", link: "/components/notify/" },
          { text: "PullRefresh 下拉刷新", link: "/components/pullrefresh/" },
          { text: "SwipeCell 滑动单元格", link: "/components/swipecell/" },
        ],
      },
      {
        text: "展示组件",
        items: [
          { text: "Avatar 头像", link: "/components/avatar/" },
          { text: "Badge 徽标", link: "/components/badge/" },
          { text: "CircleProgress 环形进度条", link: "/components/circleProgress/" },
          { text: "Collapse 折叠面板", link: "/components/collapse/" },
          { text: "CountDown 倒计时", link: "/components/countDown/" },
          { text: "CountTo 数字滚动", link: "/components/countTo/" },
          { text: "Divider 分割线", link: "/components/divider/" },
          { text: "Empty 空状态", link: "/components/empty/" },
          { text: "Highlight 高亮文本", link: "/components/highlight/" },
          { text: "ImagePreview 图片预览", link: "/components/imagepreview/" },
          { text: "NoticeBar 通知栏", link: "/components/noticeBar/" },
          { text: "Popover 气泡弹出框", link: "/components/popover/" },
          { text: "Progress 进度条", link: "/components/progress/" },
          { text: "SectorProgress 扇形进度条", link: "/components/sectorProgress/" },
          { text: "Skeleton 骨架屏", link: "/components/skeleton/" },
          { text: "Steps 步骤条", link: "/components/steps/" },
          { text: "TextEllipsis 文本省略", link: "/components/textEllipsis/" },
          { text: "Table 表格", link: "/components/table/" },
          { text: "Tag 标签", link: "/components/tag/" },
          { text: "Watermark 水印", link: "/components/watermark/" },
        ],
      },
      {
        text: "导航组件",
        items: [
          { text: "NavBar 导航栏", link: "/components/navBar/" },
          { text: "Pagination 分页", link: "/components/pagination/" },
          { text: "SideBar 侧边导航", link: "/components/sideBar/" },
          { text: "Tab 标签页", link: "/components/tab/" },
        ],
      },
      {
        text: "业务组件",
        items: [
          { text: "CanvasDrawer 画布绘制", link: "/components/canvasDrawer/" },
          { text: "ColorPicker 颜色选择", link: "/components/colorPicker/" },
          { text: "ContactAddress 联系人地址", link: "/components/contactAddress/" },
          { text: "ImageCropper 图片裁剪", link: "/components/imageCropper/" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/ibestservices/ibest-ui-v2" },
      { icon: "gitcode", link: "https://gitcode.com/ibestservices/ibest-ui-v2" },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
      level: [2, 4],
    },
    search: {
      provider: "local",
    },
  },
  vite: {
    plugins: [llmstxt()],
  },
});
