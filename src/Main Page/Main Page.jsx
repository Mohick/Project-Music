import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderMainPage from "./Slider Image/Slider main page";
import TitleTopTrending from "./Top Trending/View Title Top Trending";
import ViewContentTopTrending from "./Top Trending/View Content Top Trending";
import ViewRecentLikes from "./Recent Like/View Recent Like";
function MainPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row  container m-auto">
        <SliderMainPage />
        <TitleTopTrending />
      </div>
      <ViewContentTopTrending />
      <ViewRecentLikes/>
    </>
  );
}

export default MainPage;
