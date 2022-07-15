// NAVBAR TOGGLER

const navbar = document.querySelector('.navbar')
const navbarToggler = document.querySelector('.navbar-toggler')

navbarToggler.addEventListener('click', () => {
  navbar.classList.toggle('active')
})

// SHOW PASSWORD TOGGLER

const passwordToggler = document.querySelectorAll('.password-toggler')

passwordToggler.forEach(toggler => {
  toggler.addEventListener('click', () => {
    const passwordInput = toggler.parentNode.querySelector('.form-control')
    passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password'
  })

})