import "./Other Product.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
function OthersProduct() {
  const navigate = useNavigate();
  const { id, slug, title } = useParams();
  const [item, setitem] = useState([]);

  useEffect(() => {
    let check = true;
    if (check) {
      axios
        .get(`https://api-best-music.onrender.com/discover/format-json/`)
        .then((response) => {
          const data = response.data;
          const items = data.filter((data) => data._id !== id);
          const random = Math.floor(Math.random() * (items.length - 6));
          setitem(items.slice(random, random + 6));
        });
    }
    return () => (check = false);
  }, []);

  return (
    <div className="mt-3 lg:mt-0">
      <div className="mb-3 text-white text-xl font-bold">
        Others Product <span className="text-red-500">&#35;</span>
      </div>
      <div className="grid othersProduct__box--content lg:flex lg:flex-col xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-4	 grid-cols-3 gap-4">
        {item.map((item, index) => {
          return (
            <Link
              hrefLang=""
              key={index}
              to={"/song/" + item.titleMusical + "/" + item._id}
              className={`otherProduct__items--${index} othersProduct__box--content--items block rounded-lg p-1 bg-white`}
            >
              <div className="w-full">
                <img
                  className="w-full other__product--items--img p-1 overflow-hidden   h-40 rounded-lg"
                  src={item.imageMusical}
                  alt=""
                />
              </div>
              <div className="flex gap-1 grid-cols-2 uppercase ">
                <div className="font-bold">Name Song : </div>
                <div className="truncate font-bold capitalize flex-1">
                  {item.titleMusical}
                </div>
              </div>
              <div className="flex gap-1 grid-cols-2 ">
                <div className="font-bold">Name Singer : </div>
                <div className="truncate capitalize flex-1">
                  {item.nameSinger}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
// max-w-80 min-w-56
export default OthersProduct;
