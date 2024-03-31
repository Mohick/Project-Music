import './Views Modal.css'

import { logout } from "../handle logout";
function DropDownHeader(options) {

    return <div className="bg-white  drop-shadow-lg lg:block hidden rounded"> 
        <div>
            <ul className="p-2 w-52 text-center ">
                <li><a className="block p-1 rounded-md hover:bg-slate-400" href="/setting">Setting</a></li>
                <li><a className="block p-1 rounded-md hover:bg-slate-400" onClick={logout}>logout</a></li>
            </ul>
        </div>
    </div>
}

export default DropDownHeader;