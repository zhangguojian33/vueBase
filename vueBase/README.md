### 说明文档

#### 基本结构
* public 引入各类公共包
* 其中以sea开头的包为使用sea.js来构建模块加载，可以分为定义模块与导入模块
* 功能模块化开发利于业务解耦，各独立功能按需加载，更方便了模块的开发
```
// 此处为定义模块
define(function(require, exports, module) {
    // 定义组件
    return {
        template: require('../tpl/my-card.tpl'),
        data: function () {
            return {
                name: 'my-card'
            }
        },
        ready: function () {
        }
    }
    // 此处可导入其他模块
    var a = require('others');
});
* 每个模块需要有基本入口，分别是index.html(入口)，config.js(定义路由规则)，xx.js(功能模块下各个页面)
```

