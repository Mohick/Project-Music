import { useEffect, useState } from "react";
import "./Setting.css";
import axios from "axios";
import HandleUpdateAccount from "./handle update account/handle update account";
import handleUpdateAccount from "./handle update account/handle update account";
import { addressIpApi } from "../URL__CONNECT__API";
function Setting() {
  const [account, setAccount] = useState({});
  useEffect(() => {
    let check = true;
    if (check) {

      axios
        .get(`${addressIpApi}/account/client/automatic/login/`, {
          withCredentials: true,
        })
        .then((res) => {
          if(!res.data._id) {
            window.location.pathname= 'error 404'
          }
          const boxPassword = document.querySelector(
            ".setting__box__title--password"
          );
          const boxEmail = document.querySelector(
            ".setting__box__title--email"
          );
          const dataPassword = res.data.password;
          if (dataPassword.length > 0) {
            const firstTwoChars = dataPassword.slice(0, 2);
            const lastTwoChars = dataPassword.slice(-2);
            const lengthMidle = dataPassword.slice(2, dataPassword.length - 2);
            const middleStars = "*".repeat(lengthMidle.length);
            boxPassword.innerHTML = firstTwoChars + middleStars + lastTwoChars;
            
          }
        
            setAccount(res.data);
          
        });
    }
    return () => (check = false);
  }, []);
  return (
    <div className="container py-16  mb-28 text-white   m-auto">
      <div className="border rounded-lg border-white p-4">
        <div className="w-full text-center uppercase font-bold text-4xl">Setting</div>
        <div>
          <div className="flex justify-end cursor-pointer items-center">
            <div
              id="setting__btn--edit--account"
              onClick={HandleUpdateAccount.handlecollapsibleUpdate}
              className=" rounded-md text-1xl border border-white hover:bg-slate-800 p-2"
            >
              Edit
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <div className="flex gap-2 ">
              <div className="flex items-end setting__box__title w-20">
                <div className="capitalize">Username:</div>
              </div>
              <div className="flex-1">
                <div className="truncate setting__box__title--username block">
                  {account.username}
                </div>
                <div className="hidden w-full setting__box__edit--username">
                  <div className="flex overflow-hidden w-full justify-end">
                    <div className="text-green-400 text-xs overflow-hidden text-end truncate w-full setting__box__edit--alert--username  capitalize">
                      Your username great than 6 charater !
                    </div>
                  </div>
                  <div className="setting__box__edit--input--username">
                    <input
                    onBlur={HandleUpdateAccount.handleBlurUsername}
                      type="text"
                      defaultValue={account.username}
                      className="px-1 w-full outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-end w-20">
                <div className="capitalize ">Email:</div>
              </div>
              <div className="flex-1">
                <div className="truncate setting__box__title--email">
                  {account.email}
                </div>
                <div className="hidden  setting__box__edit--email">
                  <div className="flex overflow-hidden w-full justify-end">
                    <div className="text-green-400 text-xs text-end overflow-hidden truncate w-full setting__box__edit--alert--email  capitalize">
                      Use Your Email !
                    </div>
                  </div>
                  <div className="setting__box__edit--input--email">
                    <input
                      type="text"
                      onBlur={(e) => {
                        HandleUpdateAccount.handleBlurEmail(e, account);
                      }}
                      defaultValue={account.email}
                      className=" w-full px-1 outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-end w-20">
                <div className="capitalize">password :</div>
              </div>
              <div className="flex-1">
                <div className="truncate setting__box__title--password"></div>
                <div className="hidden  setting__box__edit--password ">
                  <div className="flex  w-full justify-end">
                    <div className="text-white overflow-hidden around text-end text-xs truncate w-full setting__box__edit--alert--password capitalize">
                    New Password Or Current Password !
                    </div>
                  </div>
                  <div className="setting__box__edit--input--password">
                    <input
                      onBlur={(e)=>{
                        HandleUpdateAccount.handleBlurPassword(e)
                      }}
                      type="password"
                      autoComplete="off "
                      className=" w-full px-1 outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="setting__show__btn--submit--edit" className="hidden ">
            <hr className="my-9" />
            <div className="my-3 flex flex-col justify-start items-end">
              <div>
                <div className="block setting__edit__title--current--password ">
                  <label htmlFor="">Password Current !</label>
                </div>
                <div className="block my-2 ">
                  <input
                    className="rounded block setting__edit--current--password  border px-1 bg-transparent  outline-none"
                    type="password"
                    onBlur={(e) => {
                      handleUpdateAccount.currentPassword(account)
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end gap-2">
              <div
                onClick={handleUpdateAccount.handlecollapsibleUpdate}
                className="p-2 shadow-lg cursor-pointer rounded hover:bg-gray-800 bg-gray-400"
              >
                Cannel
              </div>
              <div
                onClick={(()=>{
                  handleUpdateAccount.handleSubmit(account)
                })}
                className="p-2 rounded cursor-pointer  hover:bg-green-800 bg-green-400"
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
