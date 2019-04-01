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

    if(!username_bad && !password_bad){ // we are "good", do stuff here
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", loginResponse);
        xhr.responseType = "json";
        xhr.open("POST", '/users/login');
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({username:username.value.trim(), password:password}));
    }
}

function loginResponse() {
    console.log(this.status);
    if(this.status == 200) {
        if(this.response.success) {
            console.log('YEET');
        } else {
            console.log('YIKES');
        }
    } else {
        console.log('Wat');
    }
}  