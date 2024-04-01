import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ViewContentTopTrending() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api-best-music.onrender.com/discover/format-json/`)
      .then((response) => {
        const array = response.data
          .sort((a, b) => {
            return b.like - a.like;
          })
          .slice(0, 6);

        setApi(array);
      });
  }, []);
  return (
    <div className="container mt-7 m-auto">
      <div className="flex gap-2 topTrending__box--content py-3   overflow-x-auto">
        {api.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <Link
                key={index}
                to={"/song/" + data.titleMusical + "/" + data._id}
                className="max-w-80 w-full min-w-56 topTrending__box--content--items block rounded-lg p-1 bg-white"
              >
                <div className="w-full">
                  <img
                    className="w-full topTrending__box--items--img   h-40 rounded-lg"
                    src={data.imageMusical}
                    alt=""
                  />
                </div>
                <div className="flex gap-1 grid-cols-2 pt-3 uppercase  font-bold">
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
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ViewContentTopTrending;
