# 常见问题

## 1. 为什么安装后会编译失败?   
• 为什么文档的代码复制到项目里运行报错?   
• 为什么有些组件的的图标不展示?   
• 为什么有些组件的样式与文档不一致?   
• 为什么组件的有些属性会不生效?

`IBest-UI-V2` 始终以`最新api的Release`版本进行迭代维护, 会用到新api支持的属性或方法, 且文档中的代码始终是UI库的最新版本代码演示, 当编辑器使用的api版本过低时,或者安转的版本过低时, 部分属性或方法可能不生效, 遇到上述问题是请按以下步骤检查:   
1. 先更新编辑器和sdk到最新Release版本;  
2. 检查IBest-UI-V2的版本是否为最新版本(最新版本可查看`文档右上角`或点击<a href="https://ohpm.openharmony.cn/#/cn/detail/@ibestservices%2Fibest-ui-v2" target="_blank">此处</a>查看), 如果不是, 请更新为最新版本; 
2. 按照[快速上手](../quickstart/#初始化)步骤说明, 检查是否进行初始化, 以及初始化位置是否正确后重新运行;   
3. 清理项目缓存后重新运行;   
4. 上述操作都无果, 下载源码构建运行, 对比自己项目代码和源码差异。

## 2. 为什么不使用 `size` 作为 UI 库的尺寸控制属性？

`size` 是保留字。

## 3. 为什么在预览器上预览报错?

由于部分API在预览器上不支持使用, 请使用模拟器或真机进行调试预览。

## 4. 为什么一些组件在传入自定义插槽后内容不展示或者内容错位或多显示一块内容?

语法问题, 请换成箭头函数传递自定义插槽。