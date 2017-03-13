/**
 * @author        YJF
 * @since         2017/3/12
 * @copyright     Copyright(c) 2016, YZKJ
 * version        1.0
 * description   我的卡片
 */
define(function(require, exports, module) {
    // 定义组件
    return {
        template: require('../pages/my-card.html'),
        data: function () {
            return {
                name: 'my-card'
            }
        },
        ready: function () {
        }
    }
});