import { handleModalMenu } from "./Modal/Handle ModalMenu";
import ViewModalMenu from "./Modal/View modal";
import DropDownHeader from "./Modal/DropDown";
import "./Header Page.css";
import {
  handleSearch,
  offDropDownSearch,
  btnSearch,
  btnSearchMobi,
} from "./handle search";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function HeaderView() {
  const [user, setUser] = useState({});
  useEffect(() => {
    let checked = true;
    if (checked) {
      Promise.all([
        axios.get("/account/client/automatic/login/", {
          withCredentials: true,
        }),
        axios.get("/discover/format-json/"),
      ]).then(([account, discover]) => {
        account = account.data
        discover = discover.data
        console.log(account);
        setUser({
          checkUSer:!!account.message,
          discover: discover,
          _id:account._id,
          username: account.username,
          email: account.email,
          password: account.password,
          liked: account.liked,
          playList : account.playList
        });
      });
    }
    return () => (checked = false);
  }, []);
  console.log(user);
  return (
    <header
      id="header"
      className=" z-50 top-0  py-1 sm:p-0 fixed bg-blue-300 left-0  right-0 "
    >
      <div className="container gap-8 p-1 sm:p-0 m-auto flex ">
        {/* logo */}
        <div className="flex order-1  items-center">
          <Link className="block  font-bold text-3xl" to="/">
            <i>Best Music</i>
          </Link>
        </div>
        <div className="lg:flex hidden order-1 flex-col justify-end items-center hover:drop-shadow-md font-bold  ">
          <Link to="/discover" className="block capitalize">
            Discover
          </Link>
        </div>
        <div className=" flex flex-1 order-2 justify-center">
          <div className="w-full sm:flex relative hidden items-center md:flex">
            <input
              id="header__search--item"
              className="w-full   rounded-s-md outline-none bg-white px-2"
              type="search"
              onChange={(e) => handleSearch(user.discover, e.target)}
              onBlur={(e) => offDropDownSearch(e)}
            />
            <input
              type="submit"
              onClick={btnSearch}
              value={"Search"}
              className="rounded-e-md  hover:bg-slate-100 cursor-pointer bg-slate-200  px-2"
            />

            <div
              id="header__dropdown__search--item"
              className=" absolute hidden rounded overflow-hidden  w-full left-0 top-full p-1 bg-white"
            ></div>
          </div>
        </div>
        {/* check user on  <=	1024px */}
        <div className="header__box--login  relative justify-end order-3 flex  gap-2 items-center">
          {!user.checkUSer ? (
            <>
              <div className="hidden  lg:block truncate max-w-24">
                {user.username}
              </div>
              <div className="  lg:block hidden">
                <svg
                  className="h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
                </svg>
              </div>
              <div className="absolute  hidden header__box--login--dropdown top-full">
                <DropDownHeader />
              </div>
            </>
          ) : (
            <>
              <div className="hidden capitalize lg:block">
                <Link to="/login">Login</Link>
              </div>
              <div className="hidden capitalize lg:block">
                <Link to="/register/">register</Link>
              </div>
            </>
          )}
          <div className="flex items-center lg:hidden justify-end">
            <svg
              onClick={handleModalMenu}
              className="fill-white cursor-pointer   h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 
            32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32
             32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 
            32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="block z-10 lg:hidden">
        <ViewModalMenu data={
          {username:user.username,
            email:user.email,
            password:user.password,
            liekd:user.liekd,
            playList:user.playList,
          }
          } />
      </div>
      <div className="w-full relative sm:hidden p-1 flex justify-end">
        <input
          id="header__search--item--mobi"
          className="w-full focus:fixed rounded-s-sm top-0  left-0 right-0 outline-none bg-white px-2"
          type="search"
        />
        <input
          type="submit"
          value={"Search"}
          onClick={btnSearchMobi}
          className="  cursor-pointer rounded-e-sm bg-slate-200  px-2"
        />
      </div>
    </header>
   
  );
}

export default HeaderView;
