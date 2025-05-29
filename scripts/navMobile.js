document.getElementById("navHamburger").addEventListener("click", navMobileUpdate);

// Only set this up once
const subButton = document.getElementById("subDropDownButton");
const subMenu = document.querySelector(".mobileDropDownMenu");

if (subButton && subMenu) {
    subButton.addEventListener("click", () => {
        const expanded = subButton.getAttribute("aria-expanded") === "true";
        subButton.setAttribute("aria-expanded", !expanded);
        subMenu.style.display = !expanded ? "flex" : "none";
    });
}

function navMobileUpdate() {
    const button1 = document.getElementById("navHamburger");
    const navExpand = document.getElementById("navMobileExpandContainer");
    const headerContainer = document.getElementById("headerContainer");

    if (button1.className === "menuClosed") {
        button1.className = "menuOpened";
        navExpand.style.display = "block";
        headerContainer.style.borderBottom = "2px solid #2fd4d0";
        setTimeout(() => {
            navExpand.style.opacity = "1";
        }, 1);
    } else {
        button1.className = "menuClosed";
        navExpand.style.opacity = "0";
        headerContainer.style.borderBottom = "2px solid #2fd4d0";

        setTimeout(() => {
            navExpand.style.display = "none";
            // Reset dropdown state
            if (subMenu && subButton) {
                subMenu.style.display = "none";
                subButton.setAttribute("aria-expanded", "false");
            }
        }, 500);
    }
}