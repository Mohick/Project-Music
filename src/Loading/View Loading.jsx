import "./Loading.css";
function Loading() {
  return (
    <div className="fixed top-0 z-50 left-0 bg-white right-0 bottom-0">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex gap-2">
          <div className="loading__column--item--1"></div>
          <div className="loading__column--item--2"></div>
          <div className="loading__column--item--3"></div>
          <div className="loading__column--item--4"></div>
          <div className="loading__column--item--5"></div>
          <div className="loading__column--item--6"></div>
        </div>
        <div className="font-bold flex gap-2">Loading  <div className="loading__dot--1"> . </div> <div className="loading__dot--2"> . </div> <div className="loading__dot--3"> . </div></div>
      </div>
    </div>
  );
}

export default Loading;
