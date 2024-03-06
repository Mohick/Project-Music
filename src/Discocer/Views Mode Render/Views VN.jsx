import axios from "axios";
import { useEffect, useState } from "react";
import ControllAudio from "./Controll Audio/Controll";
function ViewVN() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/discover/format-json/").then((data) => {
      setApi(data.data);
    });
  }, []);

  return (
    <div className="container pb-3 mt-3 m-auto">
      <div className="bg-white max-h-96 overflow-y-auto p-1">
        {api.map((item, index) => {
          return (
            <div key={index} className="flex border p-1 mb-2 justify-between">
              <div>
                <div className="font-bold capitalize truncate">
                  Name Song :
                  <span className="ml-2  font-normal">{item.titleMusical}</span>
                </div>
                <div className="font-bold capitalize opacity-55 text-xs truncate">
                  name singer :
                  <span className="ml-2  font-normal ">{item.nameSinger}</span>
                </div>
              </div>
              <div className="grid  grid-cols-2 gap-5 items-center">
                <div className="p-1">
                  <svg
                    id={`discover__btn--loop--${index}`}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 block fill-gray-400"
                    viewBox="0 0 512 512"
                    onClick={()=>{
                      ControllAudio.loop(index);
                    }}
                  >
                    <path
                      d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 
                       5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8
                        0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185
                         183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className="p-1 flex items-center"
                    onClick={() => {
                      ControllAudio.play(index);
                    }}
                    id={`discover__btn--play--${index}`}
                  >
                    <svg
                      id={`discover__btn--play--${index}`}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 block fill-back"
                      viewBox="0 0 384 512"
                    >
                      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                    </svg>
                  </div>
                  <div
                    id={`discover__btn--pause--${index}`}
                    className="p-1 hidden items-center"
                    onClick={() => {
                      ControllAudio.pause(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 block fill-back"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 
               48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
                      />
                    </svg>
                  </div>
                </div>
                <audio
                  src={item.audioMusical}
                  id={`discover__audio--${index}`}
                  controls
                  className="hidden"
                ></audio>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewVN;
