import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./View Discover.css";
function ViewDiscover({ render }) {
  useEffect(() => {
    let check = true;
  });

  switch (!!render) {
    case render.toLowerCase().trim() == "all".toLowerCase().trim():
      return (
        <div className="container pt-3 m-auto">
          <div>
            <div className="  w-full rounded md:w-10/12 md:rounded-xl lg:w-6/12 font-bold flex  gap-2">
              <Link
                to={"/discover/"}
                className="p-3 discover__btn--view text-white  text-center rounded-full block bg-blue-400"
              >
                Views All
              </Link>
              <Link
                to={"/discover/VN/"}
                className="discover__btn--not--view p-3 text-black rounded-full  bg-white  text-center block"
              >
                Views VN
              </Link>
              <Link
                to={"/discover/USA/"}
                className="discover__btn--not--view p-3 text-black rounded-full  bg-white  text-center block"
              >
                View USA
              </Link>
            </div>
          </div>
        </div>
      );
    case render.toLowerCase().trim() == "vn".toLowerCase().trim():
      return (
        <div className="container pt-3 m-auto">
          <div>
            <div className="  w-full rounded md:w-10/12 md:rounded-xl lg:w-6/12 font-bold flex  gap-2">
              <Link
                to={"/discover/"}
                className="p-3 discover__btn--not--view text-black  text-center rounded-full block bg-white"
              >
                Views All
              </Link>
              <Link
                to={"/discover/VN/"}
                className="p-3 discover__btn--view text-white rounded-full  bg-blue-400  text-center block"
              >
                Views VN
              </Link>
              <Link
                to={"/discover/USA/"}
                className="p-3 discover__btn--not--view text-black rounded-full  bg-white  text-center block"
              >
                View USA
              </Link>
            </div>
          </div>
        </div>
      );
    case render.toLowerCase().trim() == "usa".toLowerCase().trim():
      return (
        <div className="container pt-3 m-auto">
          <div>
            <div className="  w-full rounded md:w-10/12 md:rounded-xl lg:w-6/12 font-bold flex  gap-2">
              <Link
                to={"/discover/"}
                className="p-3 discover__btn--not--view text-black  text-center rounded-full block bg-white"
              >
                Views All
              </Link>
              <Link
                to={"/discover/VN/"}
                className="p-3 discover__btn--not--view text-black  text-center rounded-full block bg-white"
              >
                Views VN
              </Link>
              <Link
                to={"/discover/USA/"}
                className="p-3 discover__btn--view  text-white rounded-full  bg-blue-400  text-center block"
              >
                View USA
              </Link>
            </div>
          </div>
        </div>
      );
  }
}

export default ViewDiscover;
