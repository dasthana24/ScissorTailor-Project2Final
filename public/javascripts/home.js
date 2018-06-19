// try using jquery or ... correcrt vanilla js dom scripting 

document.getElementById("myBtn").click();
function myFunction(id) {
    var btn= document.getElementById(id);
    if (btn.className.indexOf("w3-show") == -1) {
        btn.className += " w3-show";
    } else { 
        btn.className = btn.className.replace(" w3-show", "");
    }
}

function likeFunction(btn) {
    btn.style.fontWeight = "bold";
    btn.style.color = "red";
    btn.innerHTML = "&#10003; Liked";
}

