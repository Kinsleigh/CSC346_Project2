function check_fields() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    username_bad = username.value.trim().indexOf(' ') !== -1 || username.value.trim() === "";
    password_bad = password.value.indexOf(' ') !== -1 || password.value.trim() === "";
    var badColor = "#ff6666";
    var goodColor = "#ffffff";

    if(username_bad) {
        username.style.backgroundColor = badColor;
    } else {
        username.style.backgroundColor = goodColor;
    }
    if(password_bad) {
        password.style.backgroundColor = badColor;
    } else {
        password.style.backgroundColor = goodColor;
    }

    //.value.trim()
    if(!username_bad && !password_bad){ // we are "good", do stuff here
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", loginResponse);
        xhr.responseType = "json";
        xhr.open('POST', '/users/login');
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({username:username, password:password}));
    }
}

function loginResponse() {
    console.log(this.status);
    console.log(this.response);
    if(this.status == 200) {
        if(this.response.success) {
            console.log('successful entry');
        } else {
            console.log('no entry');
        }
    } else {
        console.log('not working');
    }
} 

if(document.readyState !== "loading") {
    document.getElementById("signup").addEventListener("click", check_fields);
} else {
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("login").addEventListener("click", check_fields);});
} 