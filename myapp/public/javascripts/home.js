function upload_file() {

    //trigger route that performs 
    console.log('idk how to upload file');
}

function sign_out() {
    console.log("Get me out");
}

function expand() {
    var curr =this.value;
    console.log(curr);
    if(curr === 'Show') {
        this.value = "Hide";
        document.getElementById("create_file").textContent = "Hide";
        
    } else if (curr === "Hide") {
        this.value = "Show";
        document.getElementById("create_file").textContent = "Show";
    } else {
        this.value = "Show";
        document.getElementById("create_file").textContent = "Show";
    }
}

window.onload = function welcome_user() {
    //First, we welcome that specific user. 
    var curr_user = "scrub";
    document.getElementById("welcome").innerHTML = 'Welcome ' + curr_user;

    //then, we load the files available to them on the webpage. 

    //This is where we would prase the json for the files available to the user. 
    var arr = new Object();
    arr["file1"] = "path1";
    arr["file2"] = "path2";

    //This is where we make the files display on the webpage. 
    for(var key in arr) {
        var child = document.createElement("a");
        child.href = arr[key];
        child.innerHTML = key;
        document.getElementById("files").append(child);
        document.getElementById("files").append(document.createElement("br"));
    }
};


if(document.readyState !== "loading") {
    document.getElementById("up_file").addEventListener("click", upload_file);
    document.getElementById("sign_out").addEventListener("click", sign_out);
    document.getElementById("create_file").addEventListener("click", expand);

} else {
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("up_file").addEventListener("click", upload_file);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById(
        "sign_out").addEventListener("click", sign_out);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("create_file").addEventListener("click", expand);});

} 