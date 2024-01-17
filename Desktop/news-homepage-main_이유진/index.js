const toggleBtn = document.querySelector('button')
// const el = document.querySelector(".navbar-toggler")
const toggler = document.querySelector(".navbar-toggler-icon")
const x_toggle = document.querySelector(".x-icon")


toggleBtn.addEventListener('click', () => {
  toggler.classList.toggle('active')
  x_toggle.classList.toggle('active')
})

x_toggle.addEventListener('click', () => {

})

//으아악 ㅠ