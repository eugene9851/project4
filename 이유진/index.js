const email = document.querySelector('#email')
const errorMessage = document.querySelector('.error')

function emailCheck(e) {
  let email_regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  if(e.target.value!=="" && !email_regex.test(e.target.value)) {
    errorMessage.textContent='Valid email required'
    email.classList.add('errorEmail')
  } else{
    errorMessage.textContent=''
    email.classList.remove('errorEmail')
  }
}


email.addEventListener('change', emailCheck)
