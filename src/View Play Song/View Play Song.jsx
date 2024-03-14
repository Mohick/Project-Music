import Product from "./Product/View Product"
import OthersProduct from "./Others Product/View Others Product"
function ViewsPlaySong() {

    return <div className="container pt-4 m-auto"> 
        <div className="w-full">
            <div className="w-full mx-auto lg:w-9/12 xl:w-4/5"><Product/></div>
            <div><OthersProduct/></div>
        </div>
    </div>
}


export default ViewsPlaySong