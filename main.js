// NAVBAR TOGGLER

const navbar = document.querySelector('.navbar')
const navbarToggler = document.querySelector('.navbar-toggler')

navbarToggler.onclick = () => {
  navbar.classList.toggle('active')
}

// SHOW PASSWORD TOGGLER

const passwordInput = document.querySelector('#password')
const passwordToggler = document.querySelector('#password-toggler')

passwordToggler.onclick = () => {
  passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password'
}