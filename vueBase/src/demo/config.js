/**
 * @author        YJF
 * @since         2017/3/12
 * @copyright     Copyright(c) 2016, YZKJ
 * version        1.0
 * description    配置路由文件，每个模块的路由配置
 */
define(function(require, exports, module) {
    // 新建Router实例
    var router = new VueRouter();
    // 根组件
    var App = {};
    // 定义路由的规则
    router.map({
        '/': {
            component: require('./js/my-card')
        },
        '/my-photo': {
            component: require('./js/my-photo')
        },
        '/my-collection': {
            component: require('./js/my-collection')
        }
    });
    router.beforeEach(function () {
        window.scrollTo(0, 0);
    });
    // 无法匹配的路由重定向到首页
    router.redirect({
        '*': '/'
    });
    // 创建一个 App 实例，并且挂载到选择符 #page 匹配的元素上。
    router.start(App, '#page');
});