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
    var type = document.getElementById("font").value;
    console.log(type);
    document.getElementById("textblock").style.fontFamily = type;
}

function change_size(){
    var size =  document.getElementById("size").value;
    document.getElementById("textblock").style.fontSize = size + "pt";
}

function change_tab(){
    var tab_size =  document.getElementById("tab").value;
    document.getElementById("textblock").style.tabSize = tab_size;
}

function upload_file(){
    console.log("Jokes");
}

//I borrowed this code from StackOverflow so I could use tabs for writing programs
function replace_tab() {
    var textareas = document.getElementsByTagName('textarea');
    var count = textareas.length;
    for(var i=0;i<count;i++){
        textareas[i].onkeydown = function(e){
            if(e.keyCode==9 || e.which==9){
                e.preventDefault();
                var s = this.selectionStart;
                this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
                this.selectionEnd = s+1; 
            }
        }
    }
}

if(document.readyState !== "loading") {
    document.getElementById("style").addEventListener("change", change_fontstyle);
    document.getElementById("font").addEventListener("change", change_font);
    document.getElementById("size").addEventListener("change", change_size);
    document.getElementById("tab").addEventListener("change", change_tab);
    document.getElementById("up_file").addEventListener("click", upload_file);
    document.getElementById("textblock").addEventListener("keydown", replace_tab);
} else {
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("style").addEventListener("change", change_fontstyle);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("font").addEventListener("change", change_font);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("size").addEventListener("change", change_size);});
        document.addEventListener("DOMContentLoaded", function() {document.getElementById("tab").addEventListener("change", change_tab);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("up_file").addEventListener("click", upload_file);});
    document.addEventListener("DOMContentLoaded", function() {document.getElementById("textblock").addEventListener("keydown", replace_tab);});

} 

