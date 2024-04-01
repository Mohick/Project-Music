import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import React from "react";
import "./View Search.css";

function SearchResult() {
  const navigate = useNavigate();
  const { title } = useParams();

  const [item, setitem] = useState([]);
  useEffect(() => {
    axios
      .get(`${addressIpApi}/discover/format-json/`)
      .then((response) => {
        const data = response.data;
        const items = data.filter((data) =>
          data.titleMusical
            .trim()
            .toLocaleLowerCase()
            .includes(title.trim().toLocaleLowerCase())
        );
        setitem(items);
      });
  }, []);
  return (
    <div className="container mt-4 py-3 m-auto">
      <div className="search__title  text-white   text-2xl  mb-2 font-bold">
        Result Search <span className="text-red-600">&#35;</span>
      </div>
      {item.length > 0 ? (
        <div className="search__box--items">
          <div className="grid  gap-4    p-1 grid-cols-1  sm:grid-cols-2  lg:grid-cols-3    xl:grid-cols-4 2xl:grid-cols-6     search__sort--items pb-3  overflow-y-auto overflow-x-hidden">
            {item.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Link
                    key={index}
                    href={"/song/" + item.titleMusical + "/" + item._id}
                    className="max-w-80  search__item min-w-36 m-auto w-full block rounded-lg p-1 bg-white"
                  >
                    <div className="w-full">
                      <img
                        className="w-full h-40 rounded-lg"
                        src={item.imageMusical}
                        alt=""
                        loading="eager"
                      />
                    </div>
                    <div className="flex gap-1 uppercase grid-cols-2 ">
                      <div className="font-bold">Name Song : </div>
                      <div className="truncate capitalize font-bold flex-1">
                        {" "}
                        {item.titleMusical}{" "}
                      </div>
                    </div>
                    <div className="flex gap-1 opacity-65 grid-cols-2 ">
                      <div className="font-bold">Name Singer : </div>
                      <div className="truncate capitalize  flex-1">
                        {" "}
                        {item.nameSinger}{" "}
                      </div>
                    </div>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="">
          <div className="block border search__box--items rounded w-full border-white p-1  xl:grid-cols-5  search__sort--items pb-3 h-96  overflow-y-auto overflow-x-hidden">
            <h3 className="search__not--found mt-10 font-bold text-2xl uppercase text-center block">
              The song you want was not found !
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
