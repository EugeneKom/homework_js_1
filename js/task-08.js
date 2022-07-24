const form = document.querySelector('.login-form')
const formButton = document.querySelector('.login-form > button')





function onButtonFormSubmit (event) {
    event.preventDefault()
    const { email, password } = event.currentTarget

    const userInfo = {
        email: email.value,
        password: password.value
    }

    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены.')
        return
    }

    event.currentTarget.reset()
    return console.log(userInfo)
}


form.addEventListener('submit', onButtonFormSubmit)
