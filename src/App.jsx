import "./App.css";
import ViewsRouter from "./Router/views router";
import HeaderView from "./Header/Header Page";
import Footer from "./Footer/View Footer";
function App() {
  const data = {
    user: false,
  };
  return (
    <>
      <HeaderView data={data} />
      <div className="container__routes--content pt-4 p-1 sm:p-0 bg-black">
        <ViewsRouter data={data} />
      </div>
      <Footer/>
    </>
  );
}

export default App;
