# 自定义主题样式

## 介绍

在需要更改主题样式时，可通过调用 `IBestSetUIBaseStyle` 方法设置样式。

## 更改主题

• 在项目的启动页面中，通过调用 `IBestSetUIBaseStyle` 方法，设置主题。   
• 若项目使用了 `IBestSetGlobalConfig` 方法, 请确保在该方法之后调用 `IBestSetUIBaseStyle` !!!

```ts
import { IBestSetUIBaseStyle } from "@ibestservices/ibest-ui-v2";

onWindowStageCreate(windowStage: window.WindowStage): void {
	windowStage.loadContent('pages/Index', (err, data) => {
		IBestSetUIBaseStyle({
			primary: '#7232dd'
		})
	})
}
```

## IBestUIBaseStyleObjType 类型说明

::: tip
• 该类型即为`IBestSetUIBaseStyle`方法的参数类型，均为非必填类型，传入值会覆盖默认值，暂时支持这么多预设样式，随着组件丰富逐步完善！   
• 默认单位为 `vp`, 当全局单位为 `lpx` 时, 以下数值会依据 `designWidth` 和当前设备屏幕宽度自动计算转化为lpx对应的视窗尺寸。
:::

| 参数               | 说明                                 | 类型   | 默认          |
| ----------------- | -------------------------------------| ------| ------------ |
| primary           | primary 反馈色                        | _string_ | `#3D8AF2`   |
| success           | success 反馈色                        | _string_ | `#58DB6B`   |
| warning           | warning 反馈色                        | _string_ | `#F29C73`   |
| danger            | danger 反馈色                         | _string_ | `#DB3131`   |
| default           | default 默认色                        | _string_ | `#FFFFFF`   |
| spaceMini         | 间距，一般用于 `padding` 与 `margin`    | _string_ | `2`         |
| spaceBase         | 间距，一般用于 `padding` 与 `margin`    | _string_ | `4`   	   |
| spaceXs           | 间距，一般用于 `padding` 与 `margin`    | _string_ | `8`         |
| spaceSm           | 间距，一般用于 `padding` 与 `margin`    | _string_ | `12`        |
| spaceMd           | 间距，一般用于 `padding` 与 `margin`    | _string_ | `16`        |
| spaceLg           | 间距，一般用于 `padding` 与 `margin`    | _string_ | `24`        |
| spaceXl           | 间距，一般用于 `padding` 与 `margin`    | _string_ | `32`        |
| fontSizeXs        | 文字大小                               | _string_ | `10`        |
| fontSizeSm        | 文字大小                               | _string_ | `12`        |
| fontSizeMd        | 文字大小                               | _string_ | `14`        |
| fontSizeLg        | 文字大小                               | _string_ | `16`        |
| fontSizeXl        | 文字大小                               | _string_ | `20`        |
| borderRadiusSm    | 圆角大小                               | _string_ | `2`         |
| borderRadiusMd    | 圆角大小                               | _string_ | `4`         |
| borderRadiusLg    | 圆角大小                               | _string_ | `8`         |
| borderRadiusMax   | 圆角大小                               | _string_ | `9999`      |
| animationDuration | 动画时长，单位 `ms`，如`Switch`组件的切换动画时长 | _number_ | `200`   |