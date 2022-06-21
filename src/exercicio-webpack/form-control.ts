import isEmail from 'validator/lib/isEmail'

const SHOW_ERROR_MESSAGES = 'show-error-message'

const form = document.querySelector('#form') as HTMLFormElement
const username = document.querySelector('#username') as HTMLInputElement
const email = document.querySelector('#email') as HTMLInputElement
const password = document.querySelector('#password') as HTMLInputElement
const password2 = document.querySelector('#password2') as HTMLInputElement

form.addEventListener('submit', function(event: Event):void {
    event.preventDefault()
    clearErrorMessages(this)
    checkEmptyFields(username, email, password, password2)
    checkEmail(email)
    checkEqualPasswords(password, password2)
    if(shouldSentForm(this)) console.log('Formulário enviado!!')
})

function clearErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach(div => div.classList.remove(SHOW_ERROR_MESSAGES))
}

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach(input => {
        if(!input.value) showErrorMessages(input, 'Este campo precisa ser preenchido')
    })
}

function checkEmail(input: HTMLInputElement): void {
    if(!isEmail(input.value)) showErrorMessages(input, 'Email inválido')
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
    if(password.value !== password2.value) {
        showErrorMessages(password, 'Senhas não correspondem')
        showErrorMessages(password2, 'Senhas não correspondem')
    }
}

function showErrorMessages(input: HTMLInputElement, msg: string): void {
    const formField = input.parentElement as HTMLDivElement
    const errorMessage = formField.querySelector('.error-message') as HTMLSpanElement
    errorMessage.innerText = msg
    formField.classList.add(SHOW_ERROR_MESSAGES)
}

function shouldSentForm(form: HTMLFormElement): boolean {
    let send = true
    form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach(() => send = false)    
    return send
}