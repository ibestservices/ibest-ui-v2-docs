# Uploader 文件上传

## 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传状态。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。
 
## 引入

```ts
import { IBestUploader, IBestUploaderFile } from "@ibestservices/ibest-ui-v2";
```

## 代码演示

### 基础用法

![基础用法](./images/base.png)
:::tip
可通过 `selectType` 属性设置要选的文件类型。
:::

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local imgList: IBestUploaderFile[] = []
  build() {
    Column(){
      IBestUploader({
        fileList: this.imgList!!
      })
    }
  }
}
```
:::

### 上传状态

![上传状态](./images/status.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local imgList: IBestUploaderFile[] = [
    new IBestUploaderFile({
      url: "https://img0.baidu.com/it/u=2229144304,3578627907&fm=253&fmt=auto&app=138&f=JPEG?w=467&h=300",
      isImage: true,
      status: "uploading"
    }),
    new IBestUploaderFile({
      url: "https://pic1.zhimg.com/80/v2-03cdb3bff2090e98885fe4951799a1f4_1440w.webp",
      status: "failed"
    })
  ]
  build() {
    Column(){
      IBestUploader({
        fileList: this.imgList!!
      })
    }
  }
}
```
:::

### 限制上传数量

![限制上传数量](./images/max-num.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local imgList: IBestUploaderFile[] = [
    new IBestUploaderFile({
      url: "https://pic1.zhimg.com/80/v2-03cdb3bff2090e98885fe4951799a1f4_1440w.webp"
    })
  ]
  build() {
    Column(){
      IBestUploader({
        fileList: this.imgList!!,
        max: 1
      })
    }
  }
}
```
:::

### 自定义上传触发器

![自定义上传触发器](./images/custom-uploader.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local imgList: IBestUploaderFile[] = []
  @Builder customUploader(){
		Text("选择图片")
			.width(100)
			.height(50)
			.textAlign(TextAlign.Center)
			.backgroundColor("#3D8AF2")
			.fontColor(Color.White)
			.fontSize(14)
	}
  build() {
    Column({space: 20}){
      IBestUploader({
        fileList: this.imgList!!,
        uploaderIcon: $r("app.media.icon_plus")
      })
      IBestUploader({
        fileList: this.imgList!!,
        customUploader: (): void => this.customUploader()
      })
    }
  }
}
```
:::

### 自定义预览样式

![自定义预览样式](./images/preview-style.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local imgList: IBestUploaderFile[] = [
		new IBestUploaderFile({
			url: "https://pic1.zhimg.com/80/v2-03cdb3bff2090e98885fe4951799a1f4_1440w.webp"
		})
	]
  build() {
    Column(){
      IBestUploader({
        fileList: this.imgList!!,
        previewSize: 120,
				cornerRadius: 8
      })
    }
  }
}
```
:::

### 自定义预览内容

![自定义预览内容](./images/preview-content.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local imgList: IBestUploaderFile[] = [
		new IBestUploaderFile({
			url: "https://pic1.zhimg.com/80/v2-03cdb3bff2090e98885fe4951799a1f4_1440w.webp"
		})
	]
  @Builder previewItem(file: IBestUploaderFile){
		Column() {
			Image(file.url || file.previewUri)
				.width("100%")
			Text(file.name)
				.width("100%")
				.fontColor("#fff")
				.fontSize(14)
				.textAlign(TextAlign.Center)
				.maxLines(1)
				.textOverflow({ overflow: TextOverflow.Ellipsis })
				.position({ left: 0, bottom: 0 })
		}
		.width("100%")
		.height("100%")
		.justifyContent(FlexAlign.Center)
	}
  build() {
    Column(){
      IBestUploader({
        fileList: this.imgList!!,
        customPreview: (file: IBestUploaderFile): void => this.previewItem(file)
      })
    }
  }
}
```
:::

### 禁用

![禁用](./images/disabled.png)

::: details 点我查看代码
```ts
@Entry
@ComponentV2
struct DemoPage {
  @Local imgList: IBestUploaderFile[] = [
		new IBestUploaderFile({
			url: "https://pic1.zhimg.com/80/v2-03cdb3bff2090e98885fe4951799a1f4_1440w.webp"
		})
	]
  build() {
    Column(){
      IBestUploader({
        fileList: this.imgList!!,
        disabled: true
      })
    }
  }
}
```
:::

## API

### @Props

| 参数         | 说明                                          | 类型      | 默认值     |
| ------------ | ---------------------------------------------| --------- | ---------- |
| fileList     | 文件列表，支持双向绑定                           | _IBestUploaderFile[]_ |`[]`|
| selectType   | 选择文件类型，默认为图片                         | _image \| file_ | `image` |
| max          | 最大上传数量                                   | _number_  | `-1` |
| maxSize      | 单个文件大小最大限制                             | _number_ |  `-1`  |
| imageFit     | 预览图片裁剪方式                                | _<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-appendix-enums-V5#imagefit" target="__blank">ImageFit</a>_ |  `Cover` |
| previewSize  | 预览大小                                       | _number_ \| _string_ | `80` |
| isPreviewFullImage| 是否在点击预览图后展示全屏图片预览             | _boolean_ | `true` |
| cornerRadius | 圆角大小                                        | _number_ \| _string_ | `0` |
| uploaderIcon | 自定义触发器图标                                 | _ResourceStr_ | `photograph` |
| uploaderIconSize| 触发器图标大小                                | _number_ \| _string_ | `24` |
| uploaderIconColor| 触发器图标颜色                               | _ResourceColor_ | `#dcdee0` |
| showDelete| 是否显示删除按钮                                    | _boolean_ | `true` |
| fileSelectOptions| 文件选择配置项, 仅在`selectType`为`file`时有效 | _FileSelectOptions_ | `-` |
| disabled     | 是否禁用                                        | _boolean_ | `false` |
| customUploader | 自定义上传触发器                               | _CustomBuilder_ | `-`|
| customPreview  | 自定义预览内容                                 | _(file: IBestUploaderFile) => void_ |  `-`|
| uploaderBgColor| 触发器背景色                                   | _ResourceColor_ |  `#f7f8fa`|
| showPreviewList| 是否显示预览列表 | _boolean_ | `true` |

### FileSelectOptions  数据结构

| 参数 | 说明 | 类型 | 默认值 |
| ------------ | ------------------| --------- | ---------- |
| defaultFilePathUri   | 指定选择的文件或者目录路径 | _string_ | `''` |
| fileSuffixFilters    | 选择文件的后缀类型, 详情参考<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-file-picker-V5#documentselectoptions" target="__blank">这里</a> | _string[]_ | `[]` |

### IBestUploaderFile 数据结构
| 参数 | 说明 | 类型 | 默认值 |
| ------------ | ------------------| --------- | ---------- |
| url       | 文件在线地址 | _string_ | `''` |
| internalUri| internal协议地址, 格式为 `internal://cache/` 加文件名 | _string_ | `[]` |
| previewUri| 选择文件后可预览地址(仅图片) | _string_ | `''` |
| cacheUri  | 选择文件后在缓存目录中的地址  | _string_ | `''` |
| name      | 文件名                    | _string_ | `''` |
| size      | 文件大小, 单位Byte         | _number_ | `0` |
| isImage   | 是否是图片, 当在线图片地址不包含类型信息时, 可以添加 `isImage` 标记来声明 | _string_ | `''` |
| status    | 文件上传状态               | _'uploading' \| 'failed' \| 'done'_ | `''` |

### Events

| 事件名    | 说明                      | 参数类型                |
| --------- | -------------------------| ---------------------- |
| onBeforeInsert | 文件插入前回调, 返回true插入, 返回false则跳过      | `(file: IBestUploaderFile) => boolean` |
| onChange | 文件全部插入后回调      | `insertFile: IBestUploaderFile[], allFile: IBestUploaderFile[]` |
| onExceed | 超出限制后回调      | `-` |