const email = document.querySelector('#email')
const errorMessage = document.querySelector('.error')
const form = document.querySelector('form')

function emailCheck(e) {
  e.preventDefault()
  const EMAIL_REGEX = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if(!EMAIL_REGEX.test(email.value)) {
    errorMessage.textContent='Valid email required'
    email.classList.add('errorEmail')
    return;
  } else{
    errorMessage.textContent=''
    email.classList.remove('errorEmail')
    location.href="./subscribe/subscribe.html"
  }
}


form.addEventListener('submit', emailCheck)