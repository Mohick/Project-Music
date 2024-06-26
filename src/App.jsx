import "./App.css";
import ViewsRouter from "./Router/views router";
import HeaderView from "./Header/Header Page";
import Footer from "./Footer/View Footer";
import { useEffect } from "react";

function App() {

  return (
    <>
      <HeaderView />
      <div id="container__routes--content" className="container__routes--content pt-4 p-1 sm:p-0 bg-black">
        <ViewsRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
