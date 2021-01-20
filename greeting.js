const form = document.querySelector(".js-form"),
  input = form.querySelector("input")
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); //자체적으로 탑재되어있는 기본동작을 막아줌
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
  //무언가를 form에 submit하면 handlesubmit 작동
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //입력칸은 감추기
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`; //글씨 출력
}


function loadName() { //localStorage에서 값 가져오는 기능
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) { 
    askForName(); //currentUser 값이 없으면 = localStorage에 값이 없으면
  } else {
    //he or she is 값이 있을때 작동
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();