document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});


function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("nav-menu");

    if (nav) {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("open");
    } else {
        console.error("nav-menu が見つかりません！");
    }
}

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);

    // すべての開いているサブメニューを閉じる
    document.querySelectorAll(".submenu.active").forEach(menu => {
        if (menu.id !== id) { // 今開けようとしているものは閉じない
            menu.classList.remove("active");
        }
    });

    // クリックしたメニューを開閉
    if (submenu) {
        submenu.classList.toggle("active");
    } else {
        console.error(id + " が見つかりません！");
    }
}
