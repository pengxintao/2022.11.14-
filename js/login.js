




// 登录页js

let login = document.querySelectorAll('.method>div');
let content = document.querySelectorAll('form');

// 排他法
for (let i = 0; i < login.length; i++) {
  login[i].setAttribute('index', i);
  login[i].onclick = function () {
    let index = this.getAttribute('index');
    // console.log(this);
    for (let j = 0; j < login.length; j++) {
      login[j].className = "";
      content[j].style.display = "none";
      content[index].style.display = "block";
    }
    login[index].className = "active";
  }
}

// 验证手机号

var tel = document.getElementsByClassName('tel')[0];
var tel_s = document.getElementsByClassName('tel_s')[0];
tel.onfocus = function () {
  psw.value = '';
}
var reg_tel;
function telReg() {
  reg_tel = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
  tel.onblur = function () {
    tel_s.innerHTML = '';
    if (reg_tel.test(tel.value)) {
      tel_s.innerHTML = '手机号格式正确';
    } else if (tel.value == '') {
      tel_s.innerHTML = '';
    } else {
      tel_s.innerHTML = '手机号格式不正确';
    }
  }
}
telReg();

// 点击登录
var content1_login = document.getElementsByClassName('content1_login')[0];
var psw = document.getElementsByClassName('psw')[0];
var psw_1 = document.getElementsByClassName('psw_1')[0];
function pswReg() {
  if (localStorage.getItem('password') == psw.value) {
    psw_1.innerHTML = '账号或者密码正确';
    console.log('123456');
  } else {
    alert('账号或者密码不正确')
  }
}
psw.onblur = function () {

  telReg();
  if (tel.value != '' && psw.value != '') {
    if (localStorage.getItem('user') == tel.value && localStorage.getItem('password') == psw.value) {
      //  不生效
      //  window.location.href = './index.html';

      var target = document.getElementById('target');
      target.style.display = 'block';
      content1_login.style.display = 'none';
      localStorage.setItem('true', tel.value)
    }
    else if (Boolean(tel_s.innerHTML != '')) {
      alert('手机号格式不正确')
    }
    else if (localStorage.getItem('user') == null) {
      alert('请先注册');
    } else {
      alert('账号或者密码不正确')
    }
  } else {
    alert('请将信息填写完整！')
  }
}



