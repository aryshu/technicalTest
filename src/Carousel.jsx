
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'; 

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0.1px',
  };

  // Replace the image URLs with your own photo URLs
  const photos = [
    'https://images2.alphacoders.com/474/474206.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/064/935/993/large/suke-x.jpg?1689107764',
    'https://steamuserimages-a.akamaihd.net/ugc/2032855620554194083/2C55DCAF486F6BAD4FB2FC24425FE7C1EE1396F9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    'https://i0.wp.com/www.downtimebros.com/wp-content/uploads/2023/02/wz2-season2.jpg?resize=768%2C432&ssl=1',
    'https://r4.wallpaperflare.com/wallpaper/760/963/684/redhead-women-pirates-sailing-ship-wallpaper-d74580570c480b11f94b8036e2ea28e4.jpg',
   
  ];

  return (
     <div>
    
      <Slider {...settings}>
        {photos.map((photoUrl, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={photoUrl}
              alt={`Photo ${index + 1}`}
              className={index === settings.slidesToShow ? "carousel-image centered" : "carousel-image"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
