import axios from "axios";

function logout() {
    axios.get(`https://api-best-music.onrender.com/logout/user`,{withCredentials:true})
   
}

export { logout};