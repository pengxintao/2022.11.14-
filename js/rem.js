
// var flg = true;
// function setRem() {
//     if (flg) {
//         flg = false;
//         // 设计稿宽度和设备宽度
//         var uiW = 640,
//             winW = document.documentElement.clientWidth,
//             // 定义比例
//             rate = winW / uiW;
//         // 获得最外层盒子
//         var oW = document.getElementsByTagName('body')[0];
//         var img_1 = document.getElementsByTagName('img')[0];
//         // console.log(img_1);
//         img_1.style.width = winW + "px";
//         // console.log(winW);
//         return;
//         if (winW > uiW) {
//             oW.style.width = uiW + "px";
//             oW.style.margin = "0 auto";
//         }
//         document.documentElement.style.fontSize = rate * 100 + "px"
//     }
//     setTimeout(() => {
//         flg = true;
//     }, 300)

// }
// // 调用函数
// setRem();

// window.onresize = setRem;
// window.onload = setRem;




(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 320 * 10;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            setRem();
        }, 300);
    }, false);
})();
