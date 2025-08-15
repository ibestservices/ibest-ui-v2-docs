# 全局配置

## 介绍

组件库提供全局配置方法，供开发者根据自己项目实际情况选择合适的尺寸单位。

## 使用方法
:::tip
请在初始化组件库之后调用!!!
:::

```ts
import { IBestSetGlobalConfig } from "@ibestservices/ibest-ui-v2"

onWindowStageCreate(windowStage: window.WindowStage): void {
	windowStage.loadContent('pages/Index', (err, data) => {
		// 在此处初始化组件库!!!
		IBestInit(windowStage, this.context)
		// 请在初始化组件库之后调用!!!
		IBestSetGlobalConfig({
			unit: "lpx",
			fontUnit: "lpx"
		})
	})
}
```

## IBestGlobalConfigType 数据类型
:::tip
该类型为 IBestSetGlobalConfig 方法的参数类型, 后续还会加入更多属性配置.
:::

| 参数             | 说明                                    | 类型   | 默认值        |
| ----------------| --------------------------------------- | ----- | ------------ |
| designWidth     | 标识页面设计基准宽度					   | _number_ | `720`		  |
| unit            | 全局尺寸单位, 可选值 `vp`、`px`、`lpx`	   | _string_ | `vp`        |
| fontUnit        | 全局字体单位, 可选值 `vp`、`px`、`lpx`、`fp`| _string_ | `fp`        |
| avatar <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.0.0</span>| 头像组件配置					 | _IBestAvatarConfig_ | `-` |

#### IBestAvatarConfig 数据类型
| 参数             | 说明                          | 类型          | 默认值        |
| ----------------| ------------------------------| ------------- | ------------ |
| defaultAvatar   | 默认头像地址				   | _ResourceStr_ | `''`		  |

## 具体表现

:::tip
• 文档中未注明单位的尺寸都默认为 IBestSetGlobalConfig 方法设置的单位;   
• 全局单位仅会影响组件库中传递的 `number` 类型的尺寸数值;   
• 以下事例中, `btnWidth` 会自动拼接全局单位转化为 `20vp`, `btnHeight` 为字符串保持不变, `btnFontSize` 会自动拼接全局单位转化为 `14fp`;
:::

```ts
import { IBestButton } from "@ibestservices/ibest-ui-v2";

@ComponentV2
struct ButtonPage {
	build(){
		IBestButton({
			btnWidth: 20,
			btnHeight: "30vp",
			btnFontSize: 14
		})
	}
}
```