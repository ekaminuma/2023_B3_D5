// パスワードを生成する
function generatePassword() {
  const length = getRandomNumber(8, 20);
  const numbers = '0123456789';
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const symbols = ',._';
  let password = '';

  // 必ず1つの数字、1つのアルファベット、1つの記号を含むようにする
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(alphabets);
  password += getRandomCharacter(symbols);

  for (let i = 3; i < length; i++) {
    const randomGroup = getRandomNumber(1, 3);
    if (randomGroup === 1) {
      password += getRandomCharacter(numbers);
    } else if (randomGroup === 2) {
      password += getRandomCharacter(alphabets);
    } else {
      password += getRandomCharacter(symbols);
    }
  }

  return password;
}

// 指定した範囲のランダムな整数を生成する
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 文字列からランダムな文字を選択する
function getRandomCharacter(characters) {
  const randomIndex = getRandomNumber(0, characters.length - 1);
  return characters.charAt(randomIndex);
}

// パスワードを表示する
function displayPassword() {
  const passwordElement = document.getElementById('password-display');
  passwordElement.textContent = generatePassword();
}

// パスワードを生成するボタンの要素を取得し、クリックイベントのリスナーを割り当てる
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', displayPassword);
