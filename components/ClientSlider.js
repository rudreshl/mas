import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSliders = ({ clients }) => {
  const settingsTop = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false, // Normal direction
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsBottom = {
    ...settingsTop,
    rtl: true, // Reversed direction
  };

  return (
    <div className="my-12 px-4 space-y-6">
      {/* Top Slider */}
      <Slider {...settingsTop}>
        {clients.map((client, index) => (
          <div
            key={`top-${index}`}
            className="w-full flex items-center justify-center px-4 py-4"
          >
            <img
              src={client}
              alt={`Client ${index}`}
              className="h-16 w-auto object-contain hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Slider>

      {/* Bottom Reversed Slider */}
      {/* <Slider {...settingsBottom}>
        {clients.map((client, index) => (
          <div
            key={`bottom-${index}`}
            className="flex items-center justify-center px-4 py-4"
          >
            <img
              src={client}
              alt={`Client ${index}`}
              className="h-16 w-auto object-contain hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default ClientSliders;
