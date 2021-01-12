const body = document.querySelector("body");

const IMG_NUMBER = 3;
// IMG_NUMBER = real image file number you have
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}
//숫자 0부터 시작하니까 +1
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
/* Math.random() = 무작위 난수 생성
   Math.random() * n = n 미만의 무작위 난수 생성 (0부터)
   Math.floor() = floor 바닥, 바닥으로 끌고간다 =내림
   Math.ceil()) = celi 천장 = 올림
   */
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();