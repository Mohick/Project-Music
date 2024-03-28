import axios from "axios";

class HandleSignUp {
  async handleAlertUsernameWhenOnblur() {
    const username = document.querySelector('input[name="username"]');
    const alert = document.querySelector("#register__alert--username");
    if (username.value.trim().length < 6) {
      alert.classList.remove("text-white");
      alert.classList.add("text-red-400");
      alert.classList.remove("text-green-400");
    } else {
      alert.classList.remove("text-white");
      alert.classList.remove("text-red-400");
      alert.classList.add("text-green-400");
    }
  }
  async handleAlertEmailWhenOnblur() {
    const email = document.querySelector('input[name="email"]');
    const alert = document.querySelector("#register__alert--email");
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      axios
        .get(
          `http://localhost:3000/account/client/${email.value.trim()}` 
        )
        .then((response) => {
          if (!!response.data.result) {
            alert.classList.remove("text-white");
            alert.classList.add("text-red-400");
            alert.classList.remove("text-green-400");
            alert.innerHTML = "<div>Your Email had Use ! </div>";
          } else {
            alert.classList.remove("text-white");
            alert.classList.remove("text-red-400");
            alert.classList.add("text-green-400");
            alert.innerHTML = "<div> Your Email Could Use ! </div>";
          }
        });
    } else {
      alert.innerHTML = "<div>please try again Your  Email !</div>";
      alert.classList.remove("text-white");
      alert.classList.remove("text-green-400");
      alert.classList.add("text-red-400");
    }
  }
  async handleAlertPasswordWhenOnblur() {
    const password = document.querySelector('input[name="password"]');
    const email = document.querySelector('input[name="email"]');
    const alert = document.querySelector("#register__alert--password");
    if (password.value.trim().length > 8) {
      if (email.value.trim() !== password.value.trim()) {
        alert.classList.remove("text-white");
        alert.classList.remove("text-red-400");
        alert.classList.add("text-green-400");
        alert.innerHTML = `<div>Your Password great than 8 charater !</div>`;
      } else {
        alert.classList.remove("text-white");
        alert.classList.add("text-red-400");
        alert.classList.remove("text-green-400");
        alert.innerHTML = `<div>Password Must other your Email!</div>`;
      }
    } else {
      alert.classList.remove("text-white");
      alert.classList.add("text-red-400");
      alert.classList.remove("text-green-400");
      alert.innerHTML = `<div>Your Password great than 8 charater !</div>`;
    }
  }
  async handleAlertReEnterPasswordWhenOnblur() {
    const password = document.querySelector('input[name="password"]');
    const reEnterPassword = document.querySelector(
      'input[name="reEnterPassword"]'
    );
    const reEnterPasswordAlert = document.querySelector(
      "#register__alert--reEnterPassword"
    );

    if (reEnterPassword.value.trim().length >= 8) {
      if (reEnterPassword.value == password.value) {
        reEnterPasswordAlert.classList.remove("text-white");
        reEnterPasswordAlert.classList.remove("text-red-400");
        reEnterPasswordAlert.classList.add("text-green-400");
        reEnterPasswordAlert.innerHTML = "<div>confirm !</div>";
      } else {
        reEnterPasswordAlert.classList.remove("text-white");
        reEnterPasswordAlert.classList.add("text-red-400");
        reEnterPasswordAlert.classList.remove("text-green-400");
        reEnterPasswordAlert.innerHTML =
          "<div>Please try again password!</div>";
      }
    } else {
      reEnterPasswordAlert.classList.remove("text-white");
      reEnterPasswordAlert.classList.remove("text-green-400");
      reEnterPasswordAlert.classList.add("text-red-400");
      reEnterPasswordAlert.innerHTML =
        "<div>Please try again re-enter password!</div>";
    }
  }
  async handleSignUp() {
    new Promise((resolve, reject) => {
      resolve({});
    })
      .then((check) => {
        const username = document.querySelector('input[name="username"]');
        const alert = document.querySelector("#register__alert--username");
        if (username.value.length < 6) {
          alert.classList.remove("text-white");
          alert.classList.add("text-red-400");
          alert.classList.remove("text-green-400");
          check.username = false;
          return check;
        } else {
          alert.classList.remove("text-white");
          alert.classList.remove("text-red-400");
          alert.classList.add("text-green-400");
          check.username = username.value.trim();
          return check;
        }
      })
      .then((check) => {
        const password = document.querySelector('input[name="password"]');
        const alert = document.querySelector("#register__alert--password");
        if (password.value.trim().length < 8) {
          alert.classList.remove("text-white");
          alert.classList.add("text-red-400");
          alert.classList.remove("text-green-400");
          check.password = false;
          return check;
        } else {
          alert.classList.remove("text-white");
          alert.classList.remove("text-red-400");
          alert.classList.add("text-green-400");
          check.password = password.value.trim();
          return check;
        }
      })
      .then((check) => {
        const password = document.querySelector('input[name="password"]');
        const reEnterPassword = document.querySelector(
          'input[name="reEnterPassword"]'
        );
        const reEnterPasswordAlert = document.querySelector(
          "#register__alert--reEnterPassword"
        );

        if (reEnterPassword.value.trim().length >= 8) {
          if (reEnterPassword.value.trim() == password.value.trim()) {
            reEnterPasswordAlert.classList.remove("text-white");
            reEnterPasswordAlert.classList.remove("text-red-400");
            reEnterPasswordAlert.classList.add("text-green-400");
            reEnterPasswordAlert.innerHTML = "<div>confirm !</div>";
            check.reEnterPassword = true;
            return check;
          } else {
            reEnterPasswordAlert.classList.remove("text-white");
            reEnterPasswordAlert.classList.add("text-red-400");
            reEnterPasswordAlert.classList.remove("text-green-400");
            reEnterPasswordAlert.innerHTML =
              "<div>Please try again password!</div>";
            check.reEnterPassword = false;
            return check;
          }
        } else {
          reEnterPasswordAlert.classList.remove("text-white");
          reEnterPasswordAlert.classList.remove("text-green-400");
          reEnterPasswordAlert.classList.add("text-red-400");
          reEnterPasswordAlert.innerHTML =
            "<div>Please try again re-enter password!</div>";
          check.reEnterPassword = false;
          return check;
        }
      })
      .then((check) => {
        if (check.reEnterPassword && !!check.password && !!check.username) {
          checkEmail(check);
        }
      });
    function checkEmail(check) {
      delete check.reEnterPassword;
      const email = document.querySelector('input[name="email"]');
      const alert = document.querySelector("#register__alert--email");
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        axios
          .get(
            `http://localhost:3000/account/client/${email.value.trim()}`
          )
          .then((response) => {
            if (!!response.data.result) {
              alert.classList.remove("text-white");
              alert.classList.add("text-red-400");
              alert.classList.remove("text-green-400");
              alert.innerHTML = "<div>Your Email had Use ! </div>";
              check.email = false;
              return check;
            } else {
              alert.classList.remove("text-white");
              alert.classList.remove("text-red-400");
              alert.classList.add("text-green-400");
              alert.innerHTML = "<div> Your Email Could Use ! </div>";
              check.email = email.value.trim();
              createAccount(check);
              return check;
            }
          });
      } else {
        alert.innerHTML = "<div>please try again Your  Email !</div>";
        alert.classList.remove("text-white");
        alert.classList.remove("text-green-400");
        alert.classList.add("text-red-400");
        check.email = false;
        return check;
      }
    }
    function createAccount(items) {
      axios.post("http://localhost:3000/account/client/crud/create/",items,{
          withCredentials: true,
          credentials: 'include',
        }).then((response) => {
          window.location.href = "/";
        })
        
    }
  }
}

export default new HandleSignUp();
