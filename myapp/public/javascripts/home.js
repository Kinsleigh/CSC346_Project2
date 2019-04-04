//this needs to take the file the user entered and upload it somehow. 
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function upload_file() {

    //trigger route that performs 
    console.log('idk how to upload file');
}

//this takes the textarea content, and some send it to be transformed to a file to be uploaded. 
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function upload_created_file() {
    //I have to take the input, create a file based on that, and then upload it. 
    console.log("Hello");
}

//this is for login capability, ignore for now
function sign_out() {
    console.log("Get me out");
}

//This function just hides and shows a text box, ignore
function expand() {
    var curr =this.value;
    console.log(curr);
    if(curr === 'Show') {
        this.value = "Hide";
        document.getElementById("create_file").textContent = "Hide";
        document.getElementById("user_entry").style.display = "block";
    } else if (curr === "Hide") {
        this.value = "Show";
        document.getElementById("create_file").textContent = "Show";
        document.getElementById("user_entry").style.display = "none";
    } else {
        this.value = "Show";
        document.getElementById("create_file").textContent = "Show";
    }
}

//This grabs the file that the user entered. 
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
    document.getElementById("upload_created_file").addEventListener("click", upload_created_file);
} else {
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("up_file").addEventListener("click", upload_file);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById(
        "sign_out").addEventListener("click", sign_out);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("create_file").addEventListener("click", expand);});   
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("upload_created_file").addEventListener("click", upload_created_file);});
} 