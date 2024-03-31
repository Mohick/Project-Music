import axios from "axios";
import { addressIpApi } from "../URL__CONNECT__API";
function logout() {
    axios.get(`${addressIpApi}/logout/user`,{withCredentials:true})
   
}

export { logout};