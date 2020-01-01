# l-miniprogram-car-keyboard
一个用于小程序开发的时候使用的车辆键盘组件
提供了
1. 独立的input输入框
2. 独立的键盘组件
3. 对其进行组合的内容

如何使用

```bash
  npm i l-miniprogram-car-keyboard
```
或者
```bash
  yarn add l-miniprogram-car-keyboard
```
注意需要在小程序开发者工具处执行npm构建

> key-input

车辆input组件
一个简单的input输入框
如果你只需要使用input组件可以使用这个

<img src="http://aboyl.org/2020-01-01-150227.png">

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| plate | 车牌号| string | — | — |
| currentIndex | 当前index| number | — | — |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| indexChange | 返回点击的方框对应的index | index |

> key-board

车辆键盘t组件
简单的键盘组件
如果你只需要使用键盘组件组件可以使用这个

<img src="http://aboyl.org/2020-01-01-151157.png">

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| provincesList | 省份键盘内容,注意暂时固定第31位为切换键,默认为 英 字 | Array | — | 参考下图 |
| letterList | 数键盘以及英文键盘,默认第31位为切换键 默认为 中 字| Array | — | 参考下图 |
| disabledNumber | 数字键盘是否可用| Boolean | false | — |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| choose | 点击字符的时候传出内容 | key |
| delete | 按下删除键时触发 | - |
| close | 按下关闭键时触发 | - |


> car-keyboard

综合两个组件的出来的新组件
1. 弹出键盘
2. 关闭键盘
3. 点击input输入框再进行输入和删除之类的操作
...
假如你只需要一些常用得操作得话,建议直接使用此组件

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 返回对应车牌号 | string |



#### 脚手架参考 七月老师出品的 [lin-ui](https://github.com/TaleLin/lin-ui)

