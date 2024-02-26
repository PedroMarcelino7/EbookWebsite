function userScoll() {
    const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark')
            navbar.classList.add('navbar-shadow')
        } else {
            navbar.classList.remove('bg-dark')
            navbar.classList.remove('navbar-shadow')
        }
    })
}

document.addEventListener('DOMContentLoaded', userScoll)
