const linemenu = document.getElementsByClassName('linemenu')[0]
const menu = document.getElementsByClassName('menu')[0]
const menuelements = document.getElementsByClassName('menu_elements')[0]

linemenu.addEventListener('click', () => {
    menu.classList.toggle('active')
    linemenu.classList.toggle('active')
    menuelements.classList.toggle('active')
})