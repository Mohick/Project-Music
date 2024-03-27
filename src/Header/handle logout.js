import axios from "axios";

function logout() {
    axios.get('/logout/user',{withCredentials:true})
    window.location.href = "/";
}

export { logout};