function chsize(item, size) {
    item.style.scale = size;
}

var lowerNavbarMenu = document.querySelectorAll(".lower-navbar-menu")

lowerNavbarMenu.forEach((listItem) => {

    var underLine = document.createElement("div")
    underLine.classList.add("lower-navbar-menu-underline")
    listItem.appendChild(underLine)

    const numberOfChildren = listItem.children.length;

    listItem.addEventListener("mouseover", function () {
        chsize(listItem.children[numberOfChildren-1], 1)
    })
    
    listItem.addEventListener("mouseout", function () {
        chsize(listItem.children[numberOfChildren-1], 0)
    })
})

var lowerNavbarMenuOptions = document.querySelectorAll(".lower-navbar-menu-options")

lowerNavbarMenuOptions.forEach((item) => {
    var diamond = document.createElement("div")
    diamond.classList.add("diamondIcon")
    item.prepend(diamond)
})

var lowerNavbarMenuOptionsList = document.querySelectorAll(".lower-navbar-menu-options li")

lowerNavbarMenuOptionsList.forEach((listItem) => {
    var underLine = document.createElement("div")
    underLine.classList.add("lower-navbar-menu-option-underline")
    listItem.appendChild(underLine)

    const numberOfChildren = listItem.children.length;

    listItem.addEventListener("mouseover", function () {
        chsize(listItem.children[numberOfChildren-1], 1)
    })

    listItem.addEventListener("mouseout", function () {
        chsize(listItem.children[numberOfChildren-1], 0)
    })
})