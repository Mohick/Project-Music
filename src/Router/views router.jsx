import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const MainPageComponent = lazy(() => import("../Main Page/Main Page"));
const ProductMusic = lazy(() => import("../View Play Song/View Play Song"));
const Discover = lazy(() => import("../Discocer/View Discover"));

function ViewsRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={"Loading..."}>
            <MainPageComponent />
          </Suspense>
        }
      />
       <Route
        path="/productmusic"
        element={
          <Suspense fallback={"Loading..."}>
            <ProductMusic />
          </Suspense>
        }
      />
         <Route
        path="/discover"
        element={
          <Suspense fallback={"Loading..."}>
            <Discover />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default ViewsRouter;
