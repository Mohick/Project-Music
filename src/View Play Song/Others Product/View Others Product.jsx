import './Other Product.css'

function OthersProduct() {
  return (
    <div className="mt-3">
      <div className="mb-3 text-white text-xl font-bold">
        Others Product <span className="text-red-500">&#35;</span>
      </div>
      <div className="grid othersProduct__box--content xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
        <a
        //   key={index}
          href="{data.titleMusical}"
          className=" othersProduct__box--content--items block rounded-lg p-1 bg-white"
        >
          <div className="w-full">
            <img
              className="w-full topTrending__box--items--img   h-40 rounded-lg"
              src="{data.imageMusical}"
              alt=""
            />
          </div>
          <div className="flex gap-1 grid-cols-2 ">
            <div className="font-bold">Title Music : </div>
            <div className="truncate capitalize flex-1">
              
              {/* "{data.titleMusical}" */}
            </div>
          </div>
          <div className="flex gap-1 grid-cols-2 ">
            <div className="font-bold">Name Singer : </div>
            <div className="truncate capitalize flex-1">
              
              {/* "{data.nameSinger}" */}
            </div>
          </div>
        </a>
        <a
        //   key={index}
          href="{data.titleMusical}"
          className=" othersProduct__box--content--items block rounded-lg p-1 bg-white"
        >
          <div className="w-full">
            <img
              className="w-full topTrending__box--items--img   h-40 rounded-lg"
              src="{data.imageMusical}"
              alt=""
            />
          </div>
          <div className="flex gap-1 grid-cols-2 ">
            <div className="font-bold">Title Music : </div>
            <div className="truncate capitalize flex-1">
              
              {/* "{data.titleMusical}" */}
            </div>
          </div>
          <div className="flex gap-1 grid-cols-2 ">
            <div className="font-bold">Name Singer : </div>
            <div className="truncate capitalize flex-1">
              
              {/* "{data.nameSinger}" */}
            </div>
          </div>
        </a>
        <a
        //   key={index}
          href="{data.titleMusical}"
          className=" othersProduct__box--content--items block rounded-lg p-1 bg-white"
        >
          <div className="w-full">
            <img
              className="w-full topTrending__box--items--img   h-40 rounded-lg"
              src="{data.imageMusical}"
              alt=""
            />
          </div>
          <div className="flex gap-1 grid-cols-2 ">
            <div className="font-bold">Title Music : </div>
            <div className="truncate capitalize flex-1">
              
              {/* "{data.titleMusical}" */}
            </div>
          </div>
          <div className="flex gap-1 grid-cols-2 ">
            <div className="font-bold">Name Singer : </div>
            <div className="truncate capitalize flex-1">
              
              {/* "{data.nameSinger}" */}
            </div>
          </div>
        </a>
        <a
        //   key={index}
          href="{data.titleMusical}"
          className=" othersProduct__box--content--items block rounded-lg p-1 bg-white"
        >
          <div className="w-full">
            <img
              className="w-full topTrending__box--items--img   h-40 rounded-lg"
              src="{data.imageMusical}"
              alt=""
            />
          </div>
          <div className="flex gap-1 grid-cols-2 ">
            <div className="font-bold">Title Music : </div>
            <div className="truncate capitalize flex-1">
              
              {/* "{data.titleMusical}" */}
            </div>
          </div>
          <div className="flex gap-1 grid-cols-2 ">
            <div className="font-bold">Name Singer : </div>
            <div className="truncate capitalize flex-1">
              
              {/* "{data.nameSinger}" */}
            </div>
          </div>
        </a>
      
      </div>
    </div>
  );
}
// max-w-80 min-w-56
export default OthersProduct;
