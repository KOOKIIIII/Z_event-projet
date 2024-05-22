function displayPopup() {
    document.getElementById("validation").style.display="block"
    document.getElementById("overlay").style.display = "block";

    document.getElementById("continuebtn").addEventListener("click", function() {
        closePopup();
    });

    document.getElementById("backbtn").addEventListener("click", function() {
        window.location.href="index.html"
    });

}

function closePopup() {
    document.getElementById("validation").style.display="none";
    document.getElementById("overlay").style.display = "none";
}


displayPopup();