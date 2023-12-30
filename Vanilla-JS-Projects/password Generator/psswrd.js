const iconCopy = document.querySelector(".icon-copy");
const alertCopy = document.querySelector(".alertCopy");
const btn = document.getElementById("generateBtn");
const passwordInput = document.getElementById("password");

btn.addEventListener("click", () => {
  createPassword();
});

iconCopy.addEventListener("click", () => {
  console.log("clicked");
  copyPassword();
  if (passwordInput.value) {
    alertCopy.classList.add("active");
    setTimeout(() => {
      alertCopy.classList.remove("active");
    }, 3000);
  }
});

const createPassword = () => {
  const chars =
    "0123456789abcdefghijklmnpqrstuvwxyz!@#$%^&*(){}[]?*_-=+-/ABCDEFGHIJKLMNOPQRFSTGUVWXYZ";
  const paswordLength = 15;
  let password = "";
  for (let index = 0; index < paswordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    // console.log(randomNum);
    password += chars.substring(randomNum, randomNum + 1);
    passwordInput.value = password;
  }
};

const copyPassword = () => {
  passwordInput.select();
  navigator.clipboard.writeText(passwordInput.value);
};
