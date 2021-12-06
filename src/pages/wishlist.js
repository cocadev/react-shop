import { Box } from '@material-ui/core';
import Footer from '../components/foot.product';
import { HeaderMap } from '../components/header.map';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FOODSPRODUCTS } from '../configs/data';
import { IMAGES } from '../configs/images';
import useWindowSize from '../utils/useWindowSize';
import { AtomProduct } from '../components/atom.product';

export function WishList() {

  return (
    <div>
      <HeaderMap background={true} />
      <div className={'cartBgImg'} />
      <div className={'cart-main'}>
        <div className={'cart64'}>Wishlist</div>
        <Box mt={3} className={'cart24'}>25 items in 3 stores</Box>
        <div className={'wishlist center bg-white mt50'}>

          <div className='product-root'>
            <br />
            <LongBox img={IMAGES.Img1Store} title='Metro' />
            <LongBox img={IMAGES.Img2Store} title='Costco' />
            <LongBox img={IMAGES.Img3Store} title='Orange Garge' />
          </div>
        </div>

        <div className='full bg-white'>
          <Footer />
        </div>

      </div>
    </div>
  );
}

function LongBox(props) {

  const { img, title } = props;

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 1424,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const { width } = useWindowSize();

  return (
    <Box mt={3}>
      <div className='row justify-between'>
        <div className='row'>
          <img src={img} className='border-radius-base' alt='img' style={{ width: 50, height: 50 }} />
          <div className='ml20'>
            <div className='medium-grey'>Grocery</div>
            <div className='row mt5'>
              <div className='medium-grey-text'>{title}</div>
              <div className='hidden-630 product-tag ml10'>Today, 11 AM</div>
            </div>
          </div>
        </div>

        <div className='green text-decoration-none cursor row align-center'>Clear All</div>

      </div>

      {width > 450 ? <Slider {...settings2}>
        {FOODSPRODUCTS.map((item, index) =>
          <AtomProduct key={index} item={item} />
        )}
      </Slider> :
        <div className='row overflowX'>
          {FOODSPRODUCTS.map((item, index) =>
            <AtomProduct key={index} item={item} />
          )}
        </div>}
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