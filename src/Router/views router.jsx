import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const MainPageComponent = lazy(() => import("../Main Page/Main Page"));
const ProductMusic = lazy(() => import("../View Play Song/View Play Song"));
const Discover = lazy(() => import("../Discocer/View Discover"));
const Login = lazy(() => import("../Login/Login"));
const Register = lazy(() => import("../Login/Register"));


const ViewDiscoverAll = lazy(() =>
  import("../Discocer/Views Mode Render/Views All")
);
const ViewDiscoverVN = lazy(() =>
  import("../Discocer/Views Mode Render/Views VN")
);
const ViewDiscoverUSA = lazy(() =>
  import("../Discocer/Views Mode Render/Views USA")
);
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
            <Discover render={"all"} />
            <ViewDiscoverAll />
          </Suspense>
        }
      />
      <Route
        path="/discover/VN"
        element={
          <Suspense fallback={"Loading..."}>
            <Discover render={"VN"} />
            <ViewDiscoverVN />
          </Suspense>
        }
      />{" "}
      <Route
        path="/discover/USA"
        element={
          <Suspense fallback={"Loading..."}>
            <Discover render={"USa"} />
            <ViewDiscoverUSA />
          </Suspense>
        }
      />
        <Route
        path="/Login/"
        element={
          <Suspense fallback={"Loading..."}>
            <Login />
          </Suspense>
        }
      />
         <Route
        path="/register/"
        element={
          <Suspense fallback={"Loading..."}>
            <Register />
          </Suspense>
        }
      />
    </Routes>
    
  );
}

export default ViewsRouter;
