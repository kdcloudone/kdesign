---
category: Components
subtitle: 图片
order: 6
type: 数据展示
title: Image
---

图片是一种展示图像信息的组件。

## 何时使用

- 需要展示图像信息时。
- 加载大图时显示 loading 或加载失败时容错处理。

## API

### Image

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - | 1.0.0 |
| fallback | 加载失败容错地址 | string | - | 1.0.0 |
| height | 图像高度 | string \| number | - | 1.0.0 |
| name | 图像名称 | string | - | 1.0.0 |
| operations | 操作栏配置 | React.ReactElement[] | - | 1.0.0 |
| placeholder | 加载占位图片地址 | string | - | 1.0.0 |
| preview | 预览参数，为 `false` 时禁用 | boolean  | true | 1.0.0 |
| previewClassName | 预览框的className | string  | - | 1.0.0 |
| previewOperations | 预览框的操作栏配置 | React.ReactElement[]  | - | 1.0.0 |
| previewStyle | 预览框的样式 | CSSProperties  | - | 1.0.0 |
| previewType | 预览框类型 | `default` \| `upload` | `default` | 1.0.0 |
| size | 图像大小 | string | - | 1.0.0 |
| src | 图片地址 | string | - | 1.0.0 |
| width | 图像宽度 | string \| number | - | 1.0.0 |

### Image.Preview

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - | 1.0.0 |
| name | 图像名称 | string | - | 1.0.0 |
| operations | 操作栏配置 | React.ReactElement[] | - | 1.0.0 |
| size | 图像大小 | string | - | 1.0.0 |
| src | 图片地址 | string | - | 1.0.0 |
| type | 预览框类型 | `default` \| `upload` | `default` | 1.0.0 |
| visible | 预览框是否显示 | boolean | false | 1.0.0 |
| onClose | 关闭预览框的回调 | (e) => void | - | 1.0.0 |
| onNext | 点击下一页回调 | (e) => void | - | 1.0.0 |
| onPrevious | 点击下一页回调 | (e) => void | - | 1.0.0 |

### Image.PreviewGroup

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| operations | 图像描述 | string | - | 1.0.0 |
| previewType | 预览框类型 | `default` \| `upload` | `default` | 1.0.0 |
