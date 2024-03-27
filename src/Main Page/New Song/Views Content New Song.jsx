import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
function ViewsContentNewSong() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    axios.get("/discover/format-json/").then((items) => {
      const data = items.data;
      
      setApi(data.slice(-6).reverse() );
    });

  }, []);

  return (
    <div className="container mt-4 m-auto">
      <div className="flex gap-2  rencentLike__box--content  overflow-x-auto">
        {api.length > 0 ? (
          api.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <a
                  href={"/song/" + data.titleMusical + "/" + data._id}
                  className="max-w-80 min-w-56 w-full rencentLike__box--content--items block rounded-lg p-1 bg-white"
                >
                  <div className="w-full">
                    <img
                      className="w-full  rencentLike__box--items--img   h-40 rounded-lg"
                      src={data.imageMusical}
                      alt=""
                    />
                  </div>
                  <div className="flex gap-1 grid-cols-2 ">
                    <div className="font-bold">Title Music : </div>
                    <div className="truncate capitalize flex-1">
                      {" "}
                      {data.titleMusical}{" "}
                    </div>
                  </div>
                  <div className="flex gap-1 grid-cols-2 ">
                    <div className="font-bold">Name Singer : </div>
                    <div className="truncate capitalize flex-1">
                      {" "}
                      {data.nameSinger}{" "}
                    </div>
                  </div>
                </a>
              </React.Fragment>
            );
          })
        ) : (
          <div className="flex-1">
            <h3 className="text-center text-white text-2xl p-6 w-full">
              You haven't liked any songs yet!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewsContentNewSong;
