# Badge 徽标

## 介绍

在右上角展示徽标数字或小红点。
 
## 引入

```ts
import { IBestBadge } from "@ibestservices/ibest-ui-v2";
```

## 代码演示

### 基础用法

![基础用法](./images/base.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Builder badgeContent() {
    Row()
      .width(40)
      .height(40)
      .borderRadius(5)
      .backgroundColor("#f2f3f5")
  }
  build() {
    Row({space: 20}) {
      IBestBadge({
        content: 0
      }){
        this.badgeContent()
      }
      IBestBadge({
        content: 10
      }){
        this.badgeContent()
      }
      IBestBadge({
        content: "Hot"
      }){
        this.badgeContent()
      }
      IBestBadge({
        content: 66
      }){
        Text("查看信息")
      }
      IBestBadge({
        dot: true
      }){
        Text("查看信息")
      }
    }
  }
}
```
:::

### 最大值

![最大值](./images/max.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Builder badgeContent() {
    Row()
      .width(40)
      .height(40)
      .borderRadius(5)
      .backgroundColor("#f2f3f5")
  }
  build() {
    Row({space: 20}) {
      IBestBadge({
        content: 20,
        max: 9
      }){
        this.badgeContent()
      }
      IBestBadge({
        content: 50,
        max: 20
      }){
        this.badgeContent()
      }
      IBestBadge({
        content: 200,
        max: 99
      }){
        this.badgeContent()
      }
    }
  }
}
```
:::

### 自定义颜色

![自定义颜色](./images/custom-color.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Builder badgeContent() {
    Row()
      .width(40)
      .height(40)
      .borderRadius(5)
      .backgroundColor("#f2f3f5")
  }
  build() {
    Row({space: 20}) {
      IBestBadge({
        content: 5,
        color: '#1989fa'
      }){
        this.badgeContent()
      }
      IBestBadge({
        content: 10,
        color: '#1989fa'
      }){
        this.badgeContent()
      }
      IBestBadge({
        dot: true,
        color: '#1989fa'
      }){
        this.badgeContent()
      }
    }
  }
}
```
:::

### 自定义徽标位置

![自定义徽标位置](./images/custom-position.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Builder badgeContent() {
    Row()
      .width(40)
      .height(40)
      .borderRadius(5)
      .backgroundColor("#f2f3f5")
  }
  build() {
    Row({space: 20}) {
      IBestBadge({
        content: 10,
        badgePosition: "top-left"
      }){
        this.badgeContent()
      }
      IBestBadge({
        content: 10,
        badgePosition: "bottom-left"
      }){
        this.badgeContent()
      }
      IBestBadge({
        content: 10,
        badgePosition: "bottom-right"
      }){
        this.badgeContent()
      }
    }
  }
}
```
:::


## API

### @Props

| 参数         | 说明                                 | 类型      | 默认值     |
| ------------ | ----------------------------------- | --------- | ---------- |
| content      | 徽标内容                              | _string_ \| _number_  | `''` |
| color        | 徽标背景色                            | _ResourceColor_ | `#DB3131` |
| dot          | 是否展示为小红点                       | _boolean_ | `false` |
| max          | 最大值,超过最大值会显示 {max}+,仅当 content 为数字时有效| _number_ |  `-1`  |
| showZero     | 值为0时是否显示徽标                     | _boolean_ |  `true`  |
| badgePosition| 徽标位置, 可选值 `top-left` `top-right` `bottom-left` `bottom-right`| _string_ |  `top-right`  |

### 插槽

| 插槽名             | 说明               | 类型             |
| ------------------| ------------------| ----------------|
| defaultBuilder    | 默认内容的插槽      | _CustomBuilder_ |