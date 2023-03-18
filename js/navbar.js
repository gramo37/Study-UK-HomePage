function toggleHamburger(x) {
    let lowerNavbarMenuContainer = document.querySelector(".lower-navbar-menu-container");
    lowerNavbarMenuContainer.classList.toggle("slide-right")
    lowerNavbarMenuContainer.classList.toggle("slide-left")
    x.classList.toggle("toggle-hamburger");
}

function openOptions(e) {
    e.parentNode.children[1].classList.add("show-options")
}

function closeOptions(e) {
    e.parentNode.parentNode.classList.remove("show-options")
}

function expandSearchIcon(e) {
    e.parentNode.children[0].classList.toggle("expand-search-icon")
}

function toggleLanguage() {
    let languageDropdown = document.querySelector(".language-list")
    let dropdownImage = document.getElementById("language-dropdown-image")

    languageDropdown.classList.toggle("show-language-list")
    languageDropdown.classList.toggle("hide-language-list")

    if (languageDropdown.classList.contains("show-language-list")) dropdownImage.src = "assets/dropup.png"
    else dropdownImage.src = "assets/dropdown.png"
}

function chsize(item, size) {
    item.style.scale = size;
}

let lowerNavbarMenu = document.querySelectorAll(".lower-navbar-menu")

lowerNavbarMenu.forEach((listItem) => {
    let underLine = document.createElement("div")
    underLine.classList.add("lower-navbar-menu-underline")
    listItem.appendChild(underLine)

    const numberOfChildren = listItem.children.length;

    listItem.addEventListener("mouseover", function () {
        chsize(listItem.children[numberOfChildren - 1], 1)
    })

    listItem.addEventListener("mouseout", function () {
        chsize(listItem.children[numberOfChildren - 1], 0)
    })
})

let lowerNavbarMenuOptions = document.querySelectorAll(".lower-navbar-menu-options")

lowerNavbarMenuOptions.forEach((item) => {
    let diamond = document.createElement("div")
    diamond.classList.add("diamondIcon")
    item.prepend(diamond)
})

let lowerNavbarMenuOptionsList = document.querySelectorAll(".lower-navbar-menu-options-container li")

lowerNavbarMenuOptionsList.forEach((listItem) => {
    let underLine = document.createElement("div")
    underLine.classList.add("lower-navbar-menu-option-underline")
    listItem.appendChild(underLine)

    const numberOfChildren = listItem.children.length;

    listItem.addEventListener("mouseover", function () {
        chsize(listItem.children[numberOfChildren - 1], 1)
    })

    listItem.addEventListener("mouseout", function () {
        chsize(listItem.children[numberOfChildren - 1], 0)
    })
})