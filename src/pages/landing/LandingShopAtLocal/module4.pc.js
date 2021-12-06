import { Grid, Box } from "@material-ui/core";
import { STORESPRODUCTS } from "../../../configs/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IMAGES } from "../../../configs/images";

export function Module4PC() {

  return (
    <div className='module4'>
      <Box mt={4} mb={4}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={3}>
            <p className={'near'}>Shop At Local Stores Near You</p>
            <p style={{ color: '#7c7b8a', fontWeight: '400', fontSize: 18, }}>SpruceBox connects local businesses with local customers, providing delivery and local pickup options at the click of a button. Start shopping in your area now!</p>
            <div className={'btn'}>
              Explore Stores
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <CarouselBox />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function CarouselBox() {

  var settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Box mt={5}>
      <Slider {...settings3} afterChange={(e) => console.log('e', e)}>
        {STORESPRODUCTS.map((item, index) =>
          <div key={index} className='relative'>
            <div style={{ backgroundImage: "url("+ item.img + ")"}} className={'shopItem'}>
              <div className='bif'>
                <div style={{ fontSize: 17, color: '#4b5563', marginTop: 10 }}>{item.title}</div>
                <div className={'row'} style={{ marginTop: 10 }}>
                  <img
                    src={item.cimg}
                    alt={'company logo'}
                    style={{ width: 30, height: 30 }}
                  />
                  <div style={{ fontWeight: '700', marginLeft: 12, fontSize: 22 }}>{item.description}</div>
                </div>
              </div>
            </div>
          </div>)}
      </Slider>
    </Box>
  )
}


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={IMAGES.IconRightGreenSlider} alt={'icon'} style={{ width: 15 }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={IMAGES.IconLeftGreenSlider} alt={'icon'} style={{ width: 15 }} />
    </div>
  );
}