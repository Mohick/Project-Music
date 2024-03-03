import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from "../../../public/Image Silider/image slider.jpg";
import img1 from "../../../public/Image Silider/image slider 1.jpg";
import img2 from "../../../public/Image Silider/image slider 2.jpg";
import img3 from "../../../public/Image Silider/image slider 3.png";
import "./main page slider.css";
function SliderMainPage() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: " h-4",
    autoplay: true,
    autoplaySpeed: 3000,
    hoverlazyLoad: true,
    pauseOnHover: true,
  };
  let arrySlite = [img, img1, img2, img3];

  return (
    <>
      <div className="flex sm:mt-4 sm:order-2 sm:justify-end  justify-center">
        <div id="mainPage__slider" className=" order-2 ">
          <Slider className="flex-1 " {...settings}>
            {arrySlite.map((img,index) => {
              return (
                <div key={index} className="w-full cursor-grab	 active:cursor-grabbing h-full">
                  <img className="w-full  h-96" src={img} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

    </>
  );
}

export default SliderMainPage;
