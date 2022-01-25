---
category: Components
type: 录入
order: 2
title: Checkbox
subtitle: 多选
---

多选是在一组备选项中进行选择的组件。

## 何时使用

在一组备选项中进行多项选择时。

## API

### Checkbox

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checkboxType | 复选类型 | `default` \| `square` | `default` | 1.0.0 |
| checked | 指定当前是否选中 | boolean | false | 1.0.0 |
| defaultChecked | 初始是否选中 | boolean | false | 1.0.0 |
| disabled | 禁用 Checkbox | boolean | false | 1.0.0 |
| indeterminate | 半选状态 | boolean | false | 1.0.0 |
| value | 在 CheckboxGroup 组内是唯一，根据 value 进行比较，判断是否选中 | any | - | 1.0.0 |
| onChange | 变化时回调 | function(e:Event) | - | 1.0.0 |

### Checkbox.Group

复选框组合，用于包裹一组 `Checkbox`。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checkboxType | 用于设置 Checkbox 的类型 | `default` \| `square` \| `button` | `default` | 1.0.0 |
| defaultValue | 默认选中的值 | string[] \| string | - | 1.0.0 |
| disabled | 禁选所有子选项 | boolean | false | 1.0.0 |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - | 1.0.0 |
| options | 以配置形式设置子元素 | string\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | - | 1.0.0 |
| size | 大小，只对按钮样式生效 | `large` \| `middle` \| `small` | - | 1.0.0 |
| value | 用于设置当前选中的值 | string[] | - | 1.0.0 |
| onChange | 选项变化时的回调函数 | function(e:Event) | - | 1.0.0 |

## 方法
