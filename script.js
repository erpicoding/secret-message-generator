const seedInput = document.getElementById("seed").value;
const seed = parseInt(seedInput) % 26;

function encryptText() {
  const inputText = document.getElementById("normalText").value;
  let result = "";

  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];

    result += String.fromCharCode(char.charCodeAt(0) + seed);
  }

  document.getElementById("encryptedText").value = result;
  document.getElementById("normalText").value = "";
}
function normalizeText() {
  const inputText = document.getElementById("encryptedText").value;
  let result = "";

  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    result += String.fromCharCode(char.charCodeAt(0) - seed);
  }

  document.getElementById("normalText").value = result;
  document.getElementById("encryptedText").value = "";
}
