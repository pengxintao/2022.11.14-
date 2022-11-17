// 登录js

// 登陆方式
let login=document.querySelectorAll('.method>div');
// console.log(login);
// 登陆方式主题内容
let content=document.querySelectorAll('form');
// console.log(content);

// 排他法切换内容
for(let i=0;i<login.length;i++){
    login[i].setAttribute('index',i);
    touch.on(login[i],"tap",function(){
        let index=this.getAttribute('index');
        // console.log(this);
        for (let j = 0; j < login.length; j++) {
            login[j].className = "";
            content[j].style.display = "none";
            content[index].style.display = "block";
          }
          login[index].className="active";
    })
}
// 普通登录功能
// 获取手机号码
var tel = document.getElementsByClassName("tel")[0];
// 获取设置密码
var password = document.getElementsByClassName("password")[0];
// 获取登录按钮
var loginBtn = document.getElementsByClassName("login-btn")[0];
// 获取span提示信息
var mima = document
  .getElementsByClassName("mima")[0]
  .getElementsByTagName("span");
  console.log(mima);



