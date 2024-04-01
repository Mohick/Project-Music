import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import './New Song.css'

function ViewsContentNewSong() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    axios.get(`https://api-best-music.onrender.com/discover/format-json/`).then((items) => {
      const data = items.data;

      setApi(data.slice(-6).reverse());
    });
  }, []);

  return (
    <div className="container mt-7 m-auto">
      <div className="flex gap-2  new__song__box--content py-3  overflow-x-auto">
        {api.length > 0 ? (
          api.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Link
                  key={index}
                  to={"/song/" + data.titleMusical + "/" + data._id}
                  className="max-w-80 w-full min-w-56 new__song__box--content--items block rounded-lg p-1 bg-white"
                >
                  <div className="w-full">
                    <img
                      className="w-full new__song__box--items--img   h-40 rounded-lg"
                      src={data.imageMusical}
                      alt=""
                    />
                  </div>
                  <div className="flex gap-1 grid-cols-2 pt-3 uppercase font-bold">
                    <div className="font-bold">nam song : </div>
                    <div className="truncate uppercase flex-1">
                      {" "}
                      {data.titleMusical}{" "}
                    </div>
                  </div>
                  <div className="flex gap-1 grid-cols-2 pb-3">
                    <div className="font-bold">Name Singer : </div>
                    <div className="truncate capitalize flex-1 opacity-60">
                      {" "}
                      {data.nameSinger}{" "}
                    </div>
                  </div>
                </Link>
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
