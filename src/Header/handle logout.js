import axios from "axios";

function logout() {
    axios.get('http://localhost:3000/logout/user',{withCredentials:true})
    window.location.href = "/";
}

export { logout};