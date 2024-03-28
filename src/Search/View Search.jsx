import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router";
import React from "react";
import './View Search.css';

function  SearchResult() {
    const navigate = useNavigate();
    const { title } = useParams();

    const [item, setitem] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/discover/format-json/').then((response)=>{
           const data = response.data
           const items = data.filter((data) => data.titleMusical.trim().toLocaleLowerCase().includes(title.trim().toLocaleLowerCase()))
           setitem(items)
        })
    },[])
   return <div className="container mt-4 py-3 m-auto">
      <div className='text-white  text-2xl relative  mb-2 font-bold'>Result Search <span className='text-red-600'>&#35;</span></div>
            <div className="grid  gap-2 border rounded border-white p-1  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  search__sort--items pb-3 h-96  overflow-y-auto overflow-x-hidden">
                {item.length > 0 ? item.map((item,index) =>{
             return  <React.Fragment key={index}>
             <a key={index} href={"/song/"+item.titleMusical+"/"+item._id} className="max-w-80 search__item min-w-36 w-full block rounded-lg p-1 bg-white">
                    <div className="w-full">
                        <img className="w-full h-40 rounded-lg" src={item.imageMusical} alt="" />
                    </div>
                    <div className="flex gap-1 grid-cols-2 ">
                       <div className="font-bold">Title Music : </div> 
                       <div className="truncate capitalize flex-1"> {item.titleMusical} </div>
                    </div>
                    <div className="flex gap-1 grid-cols-2 ">
                       <div className="font-bold">Name Singer : </div> 
                       <div className="truncate capitalize flex-1"> {item.nameSinger} </div>
                    </div>
                </a>
                
             </React.Fragment>
                }): <div className="absolute top-1/4 left-2/4 -translate-x-2/4">
                     <h3 className="text-center text-lg capitalize text-white"> The song you want was not found !</h3>
                  </div>}
            </div>
        </div>
}

export default SearchResult