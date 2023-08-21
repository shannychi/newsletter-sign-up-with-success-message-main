function email() {
    var mail = document.getElementById("text").value;

    var regx = /^([a-zA-z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z])?$/
        
    if(regx.text(mail)) {
return true;
    } else {
        alert("vaild email required");
        return false;
    }
}