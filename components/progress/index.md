---
category: Components
type: 反馈
order: 5
title: Progress
subtitle: 进度条
---

进度条是一种展示进度和状态的组件。

## 使用场景
- 需要展示一个操作完成的百分比时。
- 需要展示耗时任务进度时。

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | Switch 器类名 | string | - |  |
| failureIcon | 失败时的图标 | React.ReactNode |  |  |
| infoPosition | 进度条信息位置 | string | right |  |
| percent | 当前进度数值 | number | 0 |  |
| strokeWidth | 进度条的线条粗细 | number | 8/4(type=circle) |  |
| strokeColor | 进度条的颜色（支持渐变） | string \| ProgressGradient | - |  |
| showInfo | 是否显示进度条信息，可选值：`right` `bottom` | boolean | true |  |
| status | 指定当前进度条状态，可选值：`cycle` `loading` `failure` `success` | string |  |  |
| successIcon | 成功时的图标 | React.ReactNode |  |  |
| type | 指定当前进度条类型，可选值：`line` `circle` | string | line |  |
| trailColor | 进度条未完成部分的颜色 | string | - |  |
| textMap | 进度条信息配置,值为一个数组，总共三项，依次代表加载中文字、失败文字、成功文字 | React.ReactNode[] | \['正在加载中...', '加载失败', '加载成功'\] |  |
| width | type=circle 时生效，指定当前圆形进度条的宽度 | number | 88 |  |
| format | 格式化进度条信息的方法 | Function(percent: number): React.ReactNode |  |  |
| onProcess | 进度条变化中的回调 | Function(percent: number): void |  |  |
