import { memo } from "react";
import { handleModalMenu } from "./Handle ModalMenu";
import { Link } from "react-router-dom";
import { logout } from "../handle logout";
import "./Views Modal.css";

function ViewModalMenu({ data }) {
  return (
    <div
      id="modal__menu"
      onClick={handleModalMenu}
      className="fixed hidden font-bold bg-black/50 left-0 top-0 z-10 right-0 bottom-0 cursor-pointer"
    >
      <div
        className="modal__menu--box--content rounded-md open--slider cursor-default h-full max-w-96  p-2 bg-black modal__menu-form"
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" h-full">
          <div className="w-full flex justify-end">
            <svg
              onClick={handleModalMenu}
              xmlns="http://www.w3.org/2000/svg"
              className="block fill-white h-5 cursor-pointer"
              viewBox="0 0 384 512"
            >
              <path
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5
                     39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 
                     327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              />
            </svg>
          </div>
          <div className="mt-5 text-white overflow-y-auto h-full">
            {!!data.email ? (
              <>
                <div className="text-center mb-3">
                  <div>Username: {data.username}</div>
                </div>
                <div></div>
                <div>
                  <ul className="flex flex-col gap-2">
                    <li className="text-center">
                      <Link
                        onClick={handleModalMenu}
                        className=" p-1  hover:bg-slate-200 block"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="text-center">
                      <Link
                        onClick={handleModalMenu}
                        className=" p-1  hover:bg-slate-200 block"
                        to="/Setting"
                      >
                        Setting
                      </Link>
                    </li>
                    <li className="text-center">
                      <Link
                        onClick={handleModalMenu}
                        to="/discover"
                        className=" p-1 mb-3  hover:bg-slate-200 block"
                      >
                        Discover
                      </Link>
                    </li>
                    <li className="text-center">
                      <Link
                        onClick={logout}
                        className=" p-1 mt-7 bg-blue-400 rounded-md hover:bg-slate-200 block"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="flex flex-col h-4/5 justify-around gap-2">
                <div className="flex-1 ">
                  <Link
                    onClick={handleModalMenu}
                    to={"/Discover"}
                    className="capitalize border-b   text-center block "
                  >
                    Discover
                  </Link>
                </div>
                <div className="grid gap-2">
                  <Link
                    onClick={handleModalMenu}
                    to={"/login"}
                    className="text-center p-1 rounded-md hover:bg-green-200 bg-green-300 block"
                  >
                    Login
                  </Link>
                  <Link
                    onClick={handleModalMenu}
                    to={"/register"}
                    className="text-center p-1 rounded-md hover:bg-blue-200 bg-blue-300 block"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ViewModalMenu);
