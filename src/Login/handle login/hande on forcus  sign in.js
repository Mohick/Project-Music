
class SignInOnFocus {
  async OnFocusInPutSignIn () {

    const alert = document.querySelector("#login__alert--email");

         alert.innerHTML = `<div>Your email or password is wrong !</div>`
         alert.classList.add('text-white')
         alert.classList.remove('text-red-400')

      }
}


export default new SignInOnFocus
