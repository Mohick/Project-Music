import axios from "axios";
import { addressIpApi } from "../../URL__CONNECT__API";

class SignIn {
  async btnSubmit() {
    const btnSubmit = document.querySelector("#login__btn--submit");
    const email = document.querySelector('input[name="email"]');
    const alert = document.querySelector("#login__alert--email");
    const password = document.querySelector('input[name="password"]');
    const  items = {
      email: email.value.trim(),
      password: password.value.trim()
    } ;
   if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) && password.value.trim().length >= 8) {
     axios.post(`/account/client/login`,items,{
      withCredentials: true,
      credentials: 'include',
    })
     .then((response) => {
       if((response.data.message+'').toLowerCase() == "error") {
         alert.innerHTML = `<div>Your email or password is wrong !</div>`
         alert.classList.add('text-red-400')
         alert.classList.remove('text-white')
         console.log(response.data);

        }else {
          console.log(response.data);
          window.location= '/'
        }
      })
    }else {
      alert.innerHTML = `<div>Your email or password is wrong !</div>`
      alert.classList.add('text-red-400')
      alert.classList.remove('text-white')

    }
  }
}

export default new SignIn
