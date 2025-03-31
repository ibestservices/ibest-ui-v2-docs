# Icon 图标

## 介绍

基于字体的图标集，可以通过 IBestIcon 组件使用。
 
## 引入

```ts
import { IBestIcon } from "@ibestservices/ibest-ui-v2";
```

## 代码演示

### 基础用法

![基础用法](./images/base.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  build() {
    Column(){
      IBestIcon({ name: 'like' })
    }
  }
}
```
:::

### 自定义颜色

![自定义颜色](./images/color.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  build() {
    Row({space: 20}){
      IBestIcon({ name: 'cart-o', color: '#1989fa' })
      IBestIcon({ name: 'fire-o', color: '#ee0a24' })
    }
  }
}
```
:::

### 自定义大小

![自定义大小](./images/size.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  build() {
    Row({space: 20}){
      IBestIcon({ name: 'chat-o', iconSize: 20 })
      IBestIcon({ name: 'chat-o', iconSize: 40 })
    }
  }
}
```
:::


## API

### @Props

| 参数         | 说明                                 | 类型      | 默认值     |
| ------------| -------------------------------------| ---------| ---------- |
| name        | 图标名称或图标地址, 具体名称可参考<a href="https://vant-ui.github.io/vant/#/zh-CN/icon#jie-shao" target="__blank">这里</a>   | _ResourceStr_  | `arrow` |
| color       | 图标颜色                              | _ResourceColor_ |  `''`  |
| iconSize    | 图标大小                              | _number_ \| _string_ | `16` |
| iconRadius | 图标圆角                              | _number_ \| _string_ | `0` |

### Events

| 事件名       | 说明                     | 回调参数                         |
| ----------  | ------------------------ | -------------------------------- |
| onIconClick | 点击图标时的回调函数        | - |