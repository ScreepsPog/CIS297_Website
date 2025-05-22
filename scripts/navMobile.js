document.getElementById("navHamburger").addEventListener("click", navMobileUpdate);

function navMobileUpdate() {
    const button1 = document.getElementById("navHamburger");
    const navExpand = document.getElementById("navMobileExpandContainer");
    const headerContainer = document.getElementById("headerContainer");
    if(button1.getAttribute("class") == "menuClosed") {
        button1.setAttribute("class", "menuOpened");
        navExpand.style.display = "block";
        headerContainer.style.borderBottom = "2px solid #2fd4d0";
        setTimeout(function() {
            document.getElementById("navMobileExpandContainer").style.opacity = "1";
        }, 1);
    } else {
        button1.setAttribute("class", "menuClosed");
        navExpand.style.opacity = "0"
        headerContainer.style.borderBottom = "2px solid #2fd4d0"
        setTimeout(function() {
            document.getElementById("navMobileExpandContainer").style.display = "none";
        }, 500);
    }
}