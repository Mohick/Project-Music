import "./App.css";
import ViewsRouter from "./Router/views router";
import HeaderView from "./Header/Header Page";
import Footer from "./Footer/View Footer";
import axios from "axios";

function App() {
 axios.defaults.url = 'http://localhost:3000'

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
