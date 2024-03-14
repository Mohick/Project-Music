class HandleFocusSignUp {
  async handleAlertUsernameWhenOnFocus() {
    const alert = document.querySelector("#register__alert--username");
    alert.classList.add("text-white");
    alert.classList.remove("text-red-400");
    alert.classList.remove("text-green-400");
    alert.innerHTML = `<div>Your Username great than 6 charater !</div>`;
  }
  async handleAlertEmailWhenOnFocus() {
    const alert = document.querySelector("#register__alert--email");
    alert.classList.add("text-white");
    alert.classList.remove("text-red-400");
    alert.classList.remove("text-green-400");
    alert.innerHTML = `<div>Use Your Email !</div>`;
  }
  async handleAlertPasswordWhenOnFocus() {
    const alert = document.querySelector("#register__alert--password");
    alert.classList.add("text-white");
    alert.classList.remove("text-red-400");
    alert.classList.remove("text-green-400");
    alert.innerHTML = `<div>Your Password great than 8 charater !</div>`;
  }
  async handleAlertReEnterPasswordWhenOnFocus() {
    const alert = document.querySelector("#register__alert--reEnterPassword");
    alert.classList.add("text-white");
    alert.classList.remove("text-red-400");
    alert.classList.remove("text-green-400");
    alert.innerHTML = "<div>Please Re-enter Password!</div>";
  }
}


export default new HandleFocusSignUp