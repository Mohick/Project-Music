import axios from "axios";

class HandleUpdateAccount {
    handlecollapsibleUpdate() {
        const btnEditAccount = document.getElementById('setting__btn--edit--account');
        const boxUserName = document.querySelector('.setting__box__title--username')
        const boxEditUserName = document.querySelector('.setting__box__edit--username')
        const boxEmail = document.querySelector('.setting__box__title--email')
        const boxEditEmail = document.querySelector('.setting__box__edit--email')
        const boxPassword = document.querySelector('.setting__box__title--password')
        const boxEditPassword = document.querySelector('.setting__box__edit--password')
        const btnSubmitEdit = document.getElementById('setting__show__btn--submit--edit')
      if(!btnEditAccount.getAttribute('edit')) {
            btnEditAccount.setAttribute('edit',true)
            boxUserName.classList.remove("block")
            boxUserName.classList.add("hidden")
            boxEditUserName.classList.remove("hidden")
            boxEditUserName.classList.add("block")
            boxEmail.classList.remove("block")
            boxEmail.classList.add("hidden")
            boxEditEmail.classList.remove("hidden")
            boxEditEmail.classList.add("block")
            boxPassword.classList.add("hidden")
            boxPassword.classList.remove("block")
            boxEditPassword.classList.remove("hidden")
            boxEditPassword.classList.add("block")
            btnSubmitEdit.classList.remove("hidden")
            btnSubmitEdit.classList.add("block")
        }else {
            btnEditAccount.removeAttribute('edit')
            boxUserName.classList.remove("hidden")
            boxUserName.classList.add("block")
            boxEditUserName.classList.remove("block")
            boxEditUserName.classList.add("hidden")
            boxEmail.classList.remove("hidden")
            boxEmail.classList.add("block")
            boxEditEmail.classList.remove("block")
            boxEditEmail.classList.add("hidden")
            boxPassword.classList.remove("hidden")
            boxPassword.classList.add("block")
            boxEditPassword.classList.add("hidden")
            boxEditPassword.classList.remove("block")
            btnSubmitEdit.classList.remove("block")
            btnSubmitEdit.classList.add("hidden")
        }
    }
    handleSubmit(account) {
       Promise.resolve({}).then((ob)=>{
        const alertUsername=document.querySelector(".setting__box__edit--alert--username ")
        const inputUsername = document.querySelector(".setting__box__edit--input--username").querySelector("input")
        
        if((""+inputUsername.value).trim().length >= 6 ) {
                    alertUsername.innerHTML= "New username !"
                    alertUsername.classList.add("text-green-400")
                    alertUsername.classList.remove("text-red-400")
                    alertUsername.classList.remove("text-white")
                    ob.username = true
                    return ob
        }else {
            alertUsername.innerHTML= "Your username great than 6  charater !"
            alertUsername.classList.add("text-red-400")
            alertUsername.classList.remove("text-green-400")
            alertUsername.classList.remove("text-white")
            ob.username = false
            return ob
        }
       }).then((ob) => {
        const inputEmail = document.querySelector(".setting__box__edit--input--email").querySelector("input")
        const alertPassword=document.querySelector(".setting__box__edit--alert--password ")
        const inputPassword = document.querySelector(".setting__box__edit--input--password").querySelector("input")
        
        if((""+inputPassword.value).trim().length >= 8 ) {
            if((""+inputPassword.value).trim() == (""+inputEmail.value).trim() ) {
                alertPassword.classList.add("text-red-400")
                alertPassword.classList.remove("text-green-400")
                alertPassword.classList.remove("text-white")
                alertPassword.innerHTML= "Your password must be different from your email ! "
                ob.password= false
                return ob
                }else {
                    alertPassword.innerHTML= "New Password Or Current Password!"
                    alertPassword.classList.add("text-green-400")
                    alertPassword.classList.remove("text-red-400")
                    alertPassword.classList.remove("text-white")
                    ob.password= true
                    return ob
                }
                

        }else {
            alertPassword.innerHTML= "Your Password great than 8 charater!"
            alertPassword.classList.add("text-red-400")
            alertPassword.classList.remove("text-green-400")
            alertPassword.classList.remove("text-white")
            ob.password= false
            return ob
        }
       }).then(ob =>{
        const currentPassword = document.querySelector('.setting__edit--current--password').value.trim();
        const titleCurrrentPassword = document.querySelector('.setting__edit__title--current--password')
        if(currentPassword !== account.password) {
            titleCurrrentPassword.classList.add("text-red-400")
            titleCurrrentPassword.classList.remove("text-green-400")
            titleCurrrentPassword.classList.remove("text-white")
            ob.currentPassword= false
            return ob
        }else {
            titleCurrrentPassword.classList.remove("text-red-400")
            titleCurrrentPassword.classList.add("text-green-400")
            titleCurrrentPassword.classList.remove("text-white")
            ob.currentPassword= true
            return ob
        }
       }).then ((ob=>{
        const inputEmail = document.querySelector(".setting__box__edit--input--email").querySelector("input").value.trim()
        
        const alertEmail=document.querySelector(".setting__box__edit--alert--email ")
       if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)){
       axios.get(`http://localhost:3000/account/client/checkbeforeupdate?id=${account._id}&email=${inputEmail}`)
       .then (res =>{
           if(JSON.parse(res.data.email)) {
            alertEmail.classList.remove("text-red-400")
            alertEmail.classList.add("text-green-400")  
            alertEmail.innerHTML= "Use Your Email ! "
            console.log(ob.username , ob.password , ob.currentPassword);
            if(ob.username && ob.password && ob.currentPassword) {
            const inputUsername = document.querySelector(".setting__box__edit--input--username").querySelector("input").value.trim()
            const inputPassword = document.querySelector(".setting__box__edit--input--password").querySelector("input").value.trim()
                const obAccount = {
                    currentAccount:account,
                    newAccount : {
                        _id:account._id,
                        username:inputUsername,
                        email:inputEmail,
                        password:inputPassword
                    }
                }
                axios.patch(`http://localhost:3000/account/client/crud/update`,obAccount,{
                    withCredentials: true,
                    credentials: 'include',
                  })
             .then (res =>{
                console.log(res);
             });
            }
           }else{
            alertEmail.innerHTML= "your email has been use"
            alertEmail.classList.remove("text-green-400")
            alertEmail.classList.add("text-red-400")
           }
       })}
       }))
    }
    handleBlurEmail(e,account) {
        const inputEmail = e.target.value.trim()
        const alertEmail=document.querySelector(".setting__box__edit--alert--email ")
       if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)){
       axios.get(`http://localhost:3000/account/client/checkbeforeupdate?id=${account._id}&email=${inputEmail}`)
       .then (res =>{
           if(JSON.parse(res.data.email)) {
            alertEmail.classList.remove("text-red-400")
            alertEmail.classList.add("text-green-400")  
            alertEmail.innerHTML= "Use Your Email ! "

           }else{
            alertEmail.innerHTML= "your email has been use"
            alertEmail.classList.remove("text-green-400")
            alertEmail.classList.add("text-red-400")
           }
       })}
    }
    handleBlurPassword(e) {
        const inputEmail = document.querySelector(".setting__box__edit--input--email").querySelector("input")
        const alertPassword=document.querySelector(".setting__box__edit--alert--password ")
        const inputPassword = document.querySelector(".setting__box__edit--input--password").querySelector("input")
        
        if((""+inputPassword.value).trim().length >= 8 ) {
            if((""+inputPassword.value).trim() == (""+inputEmail.value).trim() ) {
                alertPassword.classList.add("text-red-400")
                alertPassword.classList.remove("text-green-400")
                alertPassword.classList.remove("text-white")
                alertPassword.innerHTML= "Your password must be different from your email ! "
                }else {
                    alertPassword.innerHTML= "New Password !"
                    alertPassword.classList.add("text-green-400")
                    alertPassword.classList.remove("text-red-400")
                    alertPassword.classList.remove("text-white")
                }
                

        }else {
            alertPassword.innerHTML= "Your Password great than 8 charater!"
            alertPassword.classList.add("text-red-400")
            alertPassword.classList.remove("text-green-400")
            alertPassword.classList.remove("text-white")
        }
        
    }
    handleBlurUsername(e) {
        const alertUsername=document.querySelector(".setting__box__edit--alert--username ")
        const inputUsername = document.querySelector(".setting__box__edit--input--username").querySelector("input")
        if((""+inputUsername.value).trim().length >= 6 ) {
                    alertUsername.innerHTML= "New username !"
                    alertUsername.classList.add("text-green-400")
                    alertUsername.classList.remove("text-red-400")
                    alertUsername.classList.remove("text-white")
        }else {
            alertUsername.innerHTML= "Your username great than 6  charater !"
            alertUsername.classList.add("text-red-400")
            alertUsername.classList.remove("text-green-400")
            alertUsername.classList.remove("text-white")
        }
    }
    currentPassword (account) {
        const currentPassword = document.querySelector('.setting__edit--current--password').value.trim();
        const titleCurrrentPassword = document.querySelector('.setting__edit__title--current--password')
        if(currentPassword !== account.password) {
            titleCurrrentPassword.classList.add("text-red-400")
            titleCurrrentPassword.classList.remove("text-green-400")
            titleCurrrentPassword.classList.remove("text-white")
        }else {
            titleCurrrentPassword.classList.remove("text-red-400")
            titleCurrrentPassword.classList.add("text-green-400")
            titleCurrrentPassword.classList.remove("text-white")
        }

    } 
}

export default new HandleUpdateAccount