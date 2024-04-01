import './Views Modal.css'
import { Link } from 'react-router-dom';
import { logout } from "../handle logout";
function DropDownHeader(options) {

    return <div className="bg-white  drop-shadow-lg lg:block hidden rounded"> 
        <div>
            <ul className="p-2 w-52 text-center ">
                <li><Link className="block p-1 rounded-md hover:bg-slate-400" to="/setting">Setting</Link></li>
                <li><Link className="block p-1 rounded-md cursor-pointer hover:bg-slate-400" onClick={logout}>logout</Link></li>
            </ul>
        </div>
    </div>
}

export default DropDownHeader;