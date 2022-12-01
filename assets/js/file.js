console.log('welcome to the js')
let toggle = document.getElementById('nav-toggle');
toggle.addEventListener('click', function () {
    let navItems = document.getElementById('nav-items');
    if (navItems.style.display = 'none') {
        navItems.style.display = 'block'
    } else {
        navItems.style.display = 'none'
    }
    console.log('you clicked the btn')
})