


function DropDownHeader(options) {

    return <div className="bg-white rounded"> 
        <div>
            <ul className="p-2 w-52 text-center ">
                <li><a className="block hover:bg-slate-400" href="/setting">Setting</a></li>
                <li><a className="block hover:bg-slate-400" href="/log out">log out</a></li>
            </ul>
        </div>
    </div>
}

export default DropDownHeader;