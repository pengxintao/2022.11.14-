function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    client_w = client_w > 700 ? 800 : client_w;
    client_w = client_w < 350 ? 350 : client_w;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}
// window.onload = setRem;
setRem();
// 节流
// var flg = true;
// window.onresize = function () {
//     if (flg) {
//         setRem();
//         flg = false;
//     }
//     setTimeout(function () {
//         flg = true;
//     }, 200)

// }
var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 200);
}
// 头部我的去向
//   <a href="./my.html"></a>
/* <a href="./mylogin.html"></a> */

// var my = document.getElementsByClassName('my')[0];
// my.onclick = function () {

//     if (localStorage.getItem('true')) {
//         location.href = './my.html'
//     } else {
//         location.href = './mylogin.html'
//     }
// }


// (function () {
//     var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
//     var timeoutId;
//     function setRem() {
//         var clientWidth = document.documentElement.clientWidth;
//         var nowPX = clientWidth / 320 * 10;
//         document.documentElement.style.fontSize = nowPX + 'px';
//     }
//     setRem();
//     window.addEventListener(supportsOrientationChange, function () {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(function () {
//             setRem();
//         }, 300);
//     }, false);
// })();
