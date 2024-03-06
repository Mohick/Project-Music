import { useState, useLayoutEffect } from "react";
import Controlls from "../Controll Audio/Controlls";
import "./Product.css";
import ViewLike from "./View Like product";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function Product({ data }) {
  const navigate = useNavigate();
  const { id, slug, title } = useParams();
  const [item, setitem] = useState({});
 ;
  useEffect(() => {
    let check = true;
    if (check) {
        Controlls.valueSong();
      window.scrollTo(0, { behavior: "smooth" });
      axios
        .get("http://localhost:3000/discover/format-json/")
        .then((response) => {
          const data = response.data;
          const items = data.filter((data) => data._id === id);
          setitem(items[0]);
        });
    }

    return () => (check = false);
  }, []);

  return (
    <div>
      <div className="border text-white  p-2  capitalize border-white">
        <div className="font-bold text-center">{item.titleMusical}</div>
        <div className="text-center opacity-65 ">{item.nameSinger}</div>
        <div className="mt-2  flex justify-center">
          <div className="product__container--image md:w-80 w-64">
            <img
              src={item.imageMusical}
              className="product__container--image w-full"
              alt=" Image Disk"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="product__current--time--audio">00:00</div>
            <div className="product__duration--audio">00:00</div>
          </div>
          <input
            step={0.01}
            defaultValue={0}
            min={0}
            max={1}
            onChange={() => {
              Controlls.valueSong();
              Controlls.fastforward();
            }}
            id="product__value--song"
            className="w-full cursor-grab active:cursor-grabbing accent-white"
            type="range"
            name=""
          />
        </div>
        <hr className="my-3" />
        <div className="flex justify-around">
          <div>
            <svg
              onClick={Controlls.loop}
              id="product__button--loop--musical"
              className="fill-white  cursor-pointer h-5 w-5"
              xmlns="http://www.w3.org/200000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 
                228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 
                0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5
                 14.8-22.2 14.8H48.5z"
              />
            </svg>
          </div>
          <div>
            <div>
              <svg
                className="fill-white cursor-pointer  block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                onClick={Controlls.volume}
                id="product__button--volume--max"
              >
                <path
                  d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5
                 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 
                 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 
                 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9
                  56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1
                   34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 
                   64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
                />
              </svg>
            </div>
            <div>
              <svg
                onClick={Controlls.volume}
                id="product__button--volume--medium"
                className="fill-white h-5 w-5 cursor-pointer  hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 
                40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 
                400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"
                />
              </svg>
            </div>
            <div>
              <svg
                onClick={Controlls.volume}
                id="product__button--volume--off"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white cursor-pointer  h-5 w-5 hidden"
                viewBox="0 0 576 512"
              >
                <path
                  d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7
                 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 
                 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            {document.referrer == "" || performance.navigation.type ? (
              <>
                <div>
                  <svg
                    onClick={() => {
                      Controlls.play();
                      Controlls.fastforward();
                      Controlls.valueSong();
                    }}
                    id="product__button--play"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white cursor-pointer  h-5 block w-5"
                    viewBox="0 0 384 512"
                  >
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 
                  23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                    />
                  </svg>
                </div>
                <div className="">
                  <svg
                    onClick={Controlls.pause}
                    id="product__button--pause"
                    className="fill-white cursor-pointer  h-5 hidden w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192
                  0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <div>
                  <svg
                    onClick={() => {
                      Controlls.play();
                      Controlls.fastforward();
                      Controlls.valueSong();
                    }}
                    id="product__button--play"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white h-5 hidden w-5"
                    viewBox="0 0 384 512"
                  >
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 
                  23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                    />
                  </svg>
                </div>
                <div className="">
                  <svg
                    onClick={Controlls.pause}
                    id="product__button--pause"
                    className="fill-white cursor-pointer  h-5 block w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192
                  0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
          <a
            className="block"
            onClick={Controlls.nextStep}
            id="product__button--nextStep"
          >
            <svg
              className="fill-white cursor-pointer h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 
                241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"
              />
            </svg>
          </a>

          <ViewLike id={item._id} item={item} data={data} />
        </div>
      </div>
        <audio
          id="myAudio"
          src={item.audioMusical}
          className="hidden"
          autoPlay={true}
          controls
        ></audio>
      <div className="hidden" id="automaticRunFunc">
      </div>
    </div>
  );
}

export default Product;
