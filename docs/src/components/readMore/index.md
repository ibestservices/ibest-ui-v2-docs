# Read 查看更多

## 介绍

用于内容超出指定高度时，显示"展开/收起"按钮。
 
## 引入

```ts
import { IBestReadMore } from "@ibestservices/ibest-ui-v2"
```

## 代码演示

### 基础用法

![基础用法](./images/base.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local isExpand: boolean = false
  build() {
    Column() {
      IBestReadMore({
        value: this.isExpand!!
      }){
        Text("莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。")
        .fontSize(14)
        .lineHeight(24)
      }
    }
  }
}
```
:::

### 自定义高度

![自定义高度](./images/custom-height.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local isExpand: boolean = false
  build() {
    Column() {
      IBestReadMore({
        value: this.isExpand!!,
        collapseHeight: 150
      }){
        Column({space: 12}){
          Text("莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。")
            .fontSize(14)
            .lineHeight(24)
          Image("https://pic.rmb.bdstatic.com/bjh/3f1f471fd58/240608/84792afec007f0da44ea981f73196434.jpeg")
            .height(200)
        }
      }
    }
  }
}
```
:::

### 一次性展开

![一次性展开](./images/once.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local isExpand: boolean = false
  build() {
    Column() {
      IBestReadMore({
        value: this.isExpand!!,
        once: true
      }){
        Image("https://pic.rmb.bdstatic.com/bjh/3f1f471fd58/240608/84792afec007f0da44ea981f73196434.jpeg")
          .height(200)
      }
    }
  }
}
```
:::

### 异步展开

![异步展开](./images/sync.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local isExpand: boolean = false
  @Local isVip: boolean = false
  build() {
    Column() {
      IBestReadMore({
        value: this.isExpand!!,
        inactive: !this.isVip,
        expandText: this.isVip ? "展开" : "付费解锁",
        expandIcon: this.isVip ? "arrow-down" : "lock",
        beforeExpand: () => {
          if(this.isVip){
            return true
          }
          return new Promise((resolve, reject) => {
            IBestDialogUtil.open({
              title: "提示",
              message: "需开通VIP才能解锁全部内容，是否继续？",
              showCancelButton: true,
              onConfirm: () => {
                this.isVip = true
                resolve(true)
              },
              onCancel: () => {
                reject(false)
              }
            })
          })
        }
      }){
        Text("莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。")
          .fontSize(14)
          .lineHeight(24)
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
| value        | 展开状态, 支持双向绑定                             | _boolean_  | `false` |
| expandText   | 展开文字                             | _ResourceStr_   | `展开` |
| collapseText | 收起文字                             | _ResourceStr_   | `收起` |
| expandIcon   | 展开图标                             | _ResourceStr_   | `arrow-down` |
| collapseIcon | 收起图标                             | _ResourceStr_   | `arrow-up` |
| actionColor  | 操作文字颜色                         | _ResourceColor_ | `#1989fa` |
| actionFontSize| 操作文字大小                        | _string_ \| _number_ | `14` |
| collapseHeight| 收起高度                            | _string_ \| _number_ | `50` |
| duration      | 展开动画时长, 单位ms                 | _number_ | `300` |
| inactive      | 是否置灰                            | _boolean_ | `false` |
| once          | 是否一次性展开, 即展开后不再显示收起   | _boolean_ | `false` |
| beforeExpand  | 展开前的回调                         | _() => boolean \| Promise\<boolean\>_ | `-` |

### Events

| 事件名      | 说明       | 事件类型                         |
| ---------- | -----------| -------------------------------- |
| toggle     | 切换回调    | `(value: boolean) => void` |

### 插槽

| 插槽名             | 说明            | 类型             |
| ------------------ | ---------------| ----------------|
| defaultBuilder     | 默认内容的插    | _CustomBuilder_ |