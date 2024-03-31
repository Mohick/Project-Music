import Product from "./Product/View Product"
import OthersProduct from "./Others Product/View Others Product"
function ViewsPlaySong() {

    return <div className="container pt-4 m-auto"> 
        <div className="w-full gap-2 lg:flex">
            <div className="w-full lg:flex-16  mx-auto lg:w-9/12 xl:w-4/5"><Product/></div>
            <div className=" lg:flex-1 lg:w-1/5"><OthersProduct/></div>
        </div>
    </div>
}


export default ViewsPlaySong