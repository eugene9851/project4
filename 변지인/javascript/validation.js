const emailInput = document.getElementById('email');
const emailTitle= document.getElementById('emailInfo');
const emailButton = document.getElementById('emailBtn');

//email 유효성검사
function isValidEmail(event) {
  event.preventDefault();
  const emailRegex =new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (emailRegex.test(emailInput.value) === true){
    // [성공]
    window.location.href = "/변지인/success.html"; // success페이지로 이동
  }else{
  // [실패]
  // input박스 스타일
  emailInput.style.border = '1px solid #FF6155';
  emailInput.style.color = '#FF6155';
  emailInput.style.backgroundColor = 'rgba(255, 97, 85, 0.15)';
  // 메세지표출
  const errormessage = document.createElement("p");
  errormessage.textContent = 'Valid email required';
  errormessage.style.color = '#FF6155';
  emailTitle.appendChild(errormessage);
  }
}

// 실행
// 버튼을 클릭하거나 input 엔터 시
emailButton.addEventListener('click', isValidEmail, {once:true});