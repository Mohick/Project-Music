import{u as o,d as n,r as l,b as m,j as e,R as x}from"./index-BQz3LOrc.js";function u(){o();const{title:i}=n(),[t,r]=l.useState([]);return l.useEffect(()=>{m.get("/discover/format-json/").then(s=>{const c=s.data.filter(d=>d.titleMusical.trim().toLocaleLowerCase().includes(i.trim().toLocaleLowerCase()));r(c)})},[]),e.jsxs("div",{className:"container mt-4 py-3 m-auto",children:[e.jsxs("div",{className:"text-white  text-2xl relative  mb-2 font-bold",children:["Result Search ",e.jsx("span",{className:"text-red-600",children:"#"})]}),e.jsx("div",{className:"grid  gap-2 border rounded border-white p-1  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  search__sort--items pb-3 h-96  overflow-y-auto overflow-x-hidden",children:t.length>0?t.map((s,a)=>e.jsx(x.Fragment,{children:e.jsxs("a",{href:"/song/"+s.titleMusical+"/"+s._id,className:"max-w-80 search__item min-w-36 w-full block rounded-lg p-1 bg-white",children:[e.jsx("div",{className:"w-full",children:e.jsx("img",{className:"w-full h-40 rounded-lg",src:s.imageMusical,alt:""})}),e.jsxs("div",{className:"flex gap-1 grid-cols-2 ",children:[e.jsx("div",{className:"font-bold",children:"Title Music : "}),e.jsxs("div",{className:"truncate capitalize flex-1",children:[" ",s.titleMusical," "]})]}),e.jsxs("div",{className:"flex gap-1 grid-cols-2 ",children:[e.jsx("div",{className:"font-bold",children:"Name Singer : "}),e.jsxs("div",{className:"truncate capitalize flex-1",children:[" ",s.nameSinger," "]})]})]},a)},a)):e.jsx("div",{className:"absolute top-1/4 left-2/4 -translate-x-2/4",children:e.jsx("h3",{className:"text-center text-lg capitalize text-white",children:" The song you want was not found !"})})})]})}export{u as default};
