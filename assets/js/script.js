// MENU BURGER
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.getElementById('deroulant')

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})