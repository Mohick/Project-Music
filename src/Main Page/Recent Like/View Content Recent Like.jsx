import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./Recent like.css";
import { Link } from "react-router-dom";

function ViewContentRecentLike() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get(`https://api-best-music.onrender.com/discover/format-json/`),
      axios.get(`https://api-best-music.onrender.com/account/client/automatic/login/`, {
        withCredentials: true,
      }),
    ]).then(([items, user]) => {
      const data = items.data;
      const owner = user.data;
      let idMuicHaveBeenLike = new Map();
      owner.liked?.forEach((idItems) => {
        idMuicHaveBeenLike.set(idItems, idItems);
      });
      const obKeyItems = Object.fromEntries(idMuicHaveBeenLike);
      const array = data
        .filter((item) => {
          return item._id == obKeyItems[item._id];
        })
        .slice(-6);
      setApi(array);
    });
  }, []);
  return (
    <div className="container mt-7 m-auto">
      <div className="flex gap-2 py-3 rencent__Like__box--content  overflow-x-auto">
        {api.length > 0 ? (
          api.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Link
                  key={index}
                  to={"/song/" + data.titleMusical + "/" + data._id}
                  className="max-w-80 w-full min-w-56 rencent__Like__box--content--items block rounded-lg p-1 bg-white"
                >
                  <div className="w-full">
                    <img
                      className="w-full rencent__Like__box--items--img   h-40 rounded-lg"
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
              You haven't liked any songs yet !
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewContentRecentLike;
