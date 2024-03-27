import { Routes } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function ViewDiscover({ render }) {
  
  useEffect(() =>{
    let check = true;
    
  })
    
  switch (!!render) {
    case render.toLowerCase().trim() == "all".toLowerCase().trim():
      return (
        <div className="container pt-3 m-auto">
          <div>
            <div className="bg-white overflow-hidden w-full rounded md:w-10/12 md:rounded-xl lg:w-6/12 font-bold flex  gap-2">
              <Link
                to={"/discover/"}
                className="p-1 w-1/3 text-center block bg-blue-400"
              >
                Views All
              </Link>
              <Link to={"/discover/VN/"} className="p-1 w-1/3 text-center block">
                Views VN
              </Link>
              <Link to={"/discover/USA/"} className="p-1 w-1/3 text-center block">
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
            <div className="bg-white overflow-hidden w-full rounded md:w-10/12 md:rounded-xl lg:w-6/12 font-bold flex  gap-2">
              <Link
                to={"/discover/"}
                className="p-1 w-1/3 text-center block "
              >
                Views All
              </Link>
              <Link to={"/discover/VN/"} className="p-1 w-1/3 bg-blue-400 text-center block">
                Views VN
              </Link>
              <Link to={"/discover/USA/"} className="p-1 w-1/3 text-center block">
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
              <div className="bg-white overflow-hidden w-full rounded md:w-10/12 md:rounded-xl lg:w-6/12 font-bold flex  gap-2">
                <Link
                  to={"/discover/"}
                  className="p-1 w-1/3 text-center block "
                >
                  Views All
                </Link>
                <Link to={"/discover/VN/"} className="p-1 w-1/3 text-center block">
                  Views VN
                </Link>
                <Link to={"/discover/USA/"} className="p-1 w-1/3 bg-blue-400  text-center block">
                  View USA
                </Link>
              </div>
            </div>
          </div>
        );
  }
}

export default ViewDiscover;
