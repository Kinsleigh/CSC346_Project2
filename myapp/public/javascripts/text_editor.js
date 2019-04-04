function change_fontstyle(){
    var style = document.getElementById("style").value.toLowerCase();
    if(style === "plain") {
        document.getElementById("textblock").style.fontStyle = "normal";
        document.getElementById("textblock").style.fontWeight = "normal";
    } else if (style === "bold italic") {
        document.getElementById("textblock").style.fontStyle = "italic";
        document.getElementById("textblock").style.fontWeight = "bold";
    } else if (style === "bold") {
        document.getElementById("textblock").style.fontStyle = "normal";
        document.getElementById("textblock").style.fontWeight = "bold";
    } else {
        document.getElementById("textblock").style.fontStyle = style;
        document.getElementById("textblock").style.fontWeight = "normal";
    }
}

function change_font(){
    var type = document.getElementById("type").value.toLowerCase();
    document.getElementById("textblock").style.fontFamily = type;
}

function change_color(){
    var col = document.getElementById("color").value.toLowerCase();
    document.getElementById("textblock").style.color = col;

}

function change_size(){
    var size =  document.getElementById("size").value;
    document.getElementById("textblock").style.fontSize = size + "pt";
}

function upload_file(){
    console.log("Jokes");
}

if(document.readyState !== "loading") {
    document.getElementById("style").addEventListener("change", change_fontstyle);
    document.getElementById("font").addEventListener("change", change_font);
    document.getElementById("color").addEventListener("change", change_color);
    document.getElementById("size").addEventListener("change", change_size);
    document.getElementById("up_file").addEventListener("click", upload_file);
} else {
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("style").addEventListener("change", change_fontstyle);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("font").addEventListener("change", change_font);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("color").addEventListener("change", change_color);});   
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("size").addEventListener("change", change_size);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("up_file").addEventListener("click", upload_file);});
} 

