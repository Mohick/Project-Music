import{u as d,d as n,r as t,b as m,e as x,j as e,R as h}from"./index-BW0mEvSb.js";function g(){d();const{title:r}=n(),[l,c]=t.useState([]);return t.useEffect(()=>{m.get(`${x}/discover/format-json/`).then(s=>{const i=s.data.filter(o=>o.titleMusical.trim().toLocaleLowerCase().includes(r.trim().toLocaleLowerCase()));c(i)})},[]),e.jsxs("div",{className:"container mt-4 py-3 m-auto",children:[e.jsxs("div",{className:"search__title  text-white   text-2xl  mb-2 font-bold",children:["Result Search ",e.jsx("span",{className:"text-red-600",children:"#"})]}),l.length>0?e.jsx("div",{className:"search__box--items",children:e.jsx("div",{className:"grid  gap-4    p-1 grid-cols-1  sm:grid-cols-2  lg:grid-cols-3    xl:grid-cols-4 2xl:grid-cols-6     search__sort--items pb-3  overflow-y-auto overflow-x-hidden",children:l.map((s,a)=>e.jsx(h.Fragment,{children:e.jsxs("a",{href:"/song/"+s.titleMusical+"/"+s._id,className:"max-w-80  search__item min-w-36 m-auto w-full block rounded-lg p-1 bg-white",children:[e.jsx("div",{className:"w-full",children:e.jsx("img",{className:"w-full h-40 rounded-lg",src:s.imageMusical,alt:"",loading:"eager"})}),e.jsxs("div",{className:"flex gap-1 uppercase grid-cols-2 ",children:[e.jsx("div",{className:"font-bold",children:"Name Song : "}),e.jsxs("div",{className:"truncate capitalize font-bold flex-1",children:[" ",s.titleMusical," "]})]}),e.jsxs("div",{className:"flex gap-1 opacity-65 grid-cols-2 ",children:[e.jsx("div",{className:"font-bold",children:"Name Singer : "}),e.jsxs("div",{className:"truncate capitalize  flex-1",children:[" ",s.nameSinger," "]})]})]},a)},a))})}):e.jsx("div",{className:"",children:e.jsx("div",{className:"block border search__box--items rounded w-full border-white p-1  xl:grid-cols-5  search__sort--items pb-3 h-96  overflow-y-auto overflow-x-hidden",children:e.jsx("h3",{className:"search__not--found mt-10 font-bold text-2xl uppercase text-center block",children:"The song you want was not found !"})})})]})}export{g as default};