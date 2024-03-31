import axios from "axios";
import { addressIpApi } from "../URL__CONNECT__API";
function logout() {
    axios.get(`https://api-best-music.onrender.com/logout/user`,{withCredentials:true})
   
}

export { logout};