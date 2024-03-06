import Product from "./Product/View Product"
import OthersProduct from "./Others Product/View Others Product"
function ViewsPlaySong({data}) {

    return <div className="container pt-4 m-auto"> 
        <div className="w-full">
            <div className="w-full mx-auto lg:w-9/12 xl:w-4/5"><Product data={data}/></div>
            <div><OthersProduct/></div>
        </div>
    </div>
}


export default ViewsPlaySong