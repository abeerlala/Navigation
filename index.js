const menu = document.querySelector("input");
const navList = document.querySelector(".navList");
const menuIcon = document.querySelector(".fa-solid");
const closenav = document.querySelector(".closenav");

menu.addEventListener("click", () => {
    if (menu.checked) {
        navList.style.display = "flex";
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                navList.classList.add("activeNavList");
            });
        });
    } else {
        navList.classList.remove("activeNavList");
        setTimeout(() => {
            navList.style.display = "none";
        }, 500);
    }
});

closenav.addEventListener("click", () => {
    navList.classList.remove("activeNavList");
    menu.checked = false;
});