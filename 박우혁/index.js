/* 구현할것 
1. 버튼 클릭시 유효성검사(값이 없거나 @ 안들어감) 틀리면 인풋 테두리색, 글자색, 배경색 var(--Tomato)로변경

2. 인풋에focus시 다시 되돌리기

3. 유효성 검사를 통과한다면 버튼 클릭시 기존 페이지 none되고 success페이지 flex되게

3. input에 입력한값 success페이지의 span값에 할당

4.dismiss버튼 클릭시 다시 기존 페이지 보이게 

아 머리아퍼*/



  const emailInput = document.querySelector(".email");
  const subscribeButton = document.querySelector(".subscription");
  const errorMessage = document.querySelector(".email_error");
  const successPage = document.querySelector(".success_message");
  const confirmEmailSpan = document.querySelector(".confirm_email");
  const dismissButton = document.querySelector(".dismiss");
  const emailEx = document.querySelector(".email_ex");

  // 버튼 클릭 시 유효성 검사 및 입력한값 success페이지의 span값에 할당
  subscribeButton.addEventListener("click", function () {
    if (!validateEmail(emailInput.value)) {
      showError();
    } else {
      showSuccessPage();
      confirmEmailSpan.textContent = emailInput.value;
    }
  });

  // input에 focus 이벤트를 추가
  emailInput.addEventListener("focus", function () {
    clearError();
  });

  // dismiss 버튼 클릭 시 success_message표시
  dismissButton.addEventListener("click", function () {
    hideSuccessPage();
  });

  // 이메일 유효성 검사 함수
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // 에러 메시지 표시 함수
  function showError() {
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "var(--Tomato)";
    emailInput.style.color = "#FF6155";
    emailInput.style.backgroundColor = "rgba(255, 97, 85, 0.15)";
  }

  // 에러 메시지 초기화하는 함수
  function clearError() {
    emailEx.style.display= "none";
    errorMessage.style.display = "none";
    emailInput.style.borderColor = "var(--grey0)";
    emailInput.style.color = "var(--grey0)";
    emailInput.style.backgroundColor = "var(--white)";
  }

  // success_message 표시 함수
  function showSuccessPage() {
    successPage.style.display = "flex";
    document.querySelector(".subscribe_page").style.display = "none";
  }

  // 다시 원래 페이지로 돌아오는 함수
  function hideSuccessPage() {
    successPage.style.display = "none";
    document.querySelector(".subscribe_page").style.display = "flex";
  };