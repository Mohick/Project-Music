import { Link } from "react-router-dom";

function  Error404() {

    return <div className=" fixed left-0 top-0 right-0 bottom-0 bg-black z-50 text-white">
        <div className="container h-full m-auto">
        <div className="flex justify-center h-full flex-col items-center">
        <h1 className="text-center text-9xl">404 <span className="text-3xl block sm:inline-block">Page Not Found</span></h1>
        <h1 className="text-center">Sorry, the page you are looking for does not exist. <Link to="/" className="block   md:inline-block  text-blue-300">CliCk Me Back To Home Page !</Link></h1>
        </div>
        </div>
    </div>
}

export default Error404;