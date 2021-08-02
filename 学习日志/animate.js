/*
 * @Author: your name
 * @Date: 2021-07-28 16:34:32
 * @LastEditTime: 2021-07-30 22:27:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学习日志\animate.js
 */
function animate(obj, target, fnc) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        //distance时是每次行走的距离
        var distance = (target - obj.offsetLeft) / 10;
        //当distance大于0时往上取整数
        distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            //执行结束后，如果有函数，就执行函数，如果没有函数，就不执行
            // if(fnc){
            //     fnc();
            // }
            //高级写法
            fnc && fnc();
        };
        // console.log(obj.offsetLeft);

        obj.style.left = obj.offsetLeft + distance + 'px';
    }, 15)
};