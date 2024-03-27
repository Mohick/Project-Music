import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./Recent like.css";
function ViewContentRecentLike() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get("/discover/format-json/"),
      axios.get("/account/client/automatic/login/", {
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
    <div className="container mt-4 m-auto">
      <div className="flex gap-2  rencentLike__box--content  overflow-x-auto">
        {api.length > 0 ? (
          api.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <a
                  href={"/song/" + data.titleMusical + "/" + data._id}
                  className="max-w-80 w-full min-w-56 rencentLike__box--content--items block rounded-lg p-1 bg-white"
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
              You haven't liked any songs yet !
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewContentRecentLike;
