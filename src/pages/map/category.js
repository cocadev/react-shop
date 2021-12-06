import { Box } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CATEGORIES, ELECTRONICPRODUCTS } from '../../configs/data';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link, useLocation } from 'react-router-dom';
import { HeaderMap } from '../../components/header.map';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IMAGES } from '../../configs/images';
import { useState, useRef } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import Footer from '../../components/foot.product';
import { AtomProduct } from '../../components/atom.product';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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

export function Category() {

  const location = useLocation();
  const categoryId = location.pathname.substring(10);
  const selectedCategories = CATEGORIES.find(item => item.cId === categoryId);
  const subCategories = selectedCategories ? selectedCategories.sub : [];
  const categoryTitle = selectedCategories ? selectedCategories.title : `Search result for "${categoryId}"`;
  const [select, setSelect] = useState(0);
  const scrollRef = useRef();

  const onSelectCategory = (e) => {
    setSelect(select === e ? 0 : e);
  }

  const onArrowScroll = (e) => {
    if (!scrollRef.current) return false;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + e
  }

  return (
    <div className='center'>
      <HeaderMap isDisableDelivery={true}/>
      <div className='product-root'>

        <div className='row align-center mt20 full'>
          <Link to='/products'>
            <ArrowBackIcon className='center cursor mr20 black' />
          </Link>
          <span className='text36'>{categoryTitle}</span>
        </div>
        {(subCategories.length > 0 ) && <div className='relative'>
        <div className='absolute top30 right-33'>
          <div className='bg-white circle32'>
            <ChevronRightIcon className='green' onClick={() => onArrowScroll(200)} />
          </div>
        </div>
        <div className='absolute top30 left-33'>
          <div className='bg-white circle32'>
            <ChevronLeftIcon className='green' onClick={() => onArrowScroll(-200)} />
          </div>
        </div>
      </div>}
        {subCategories.length > 0 && <div ref={scrollRef} className='mt20 row overflowX hidden'>
          {[{ title: 'All', }, ...subCategories].map((item, index) =>
            <div
              className={`text24 ${select === index ? 'opacity1' : 'opacity25'} mr20 cursor pb10 ml10`}
              key={index}
              style={{ whiteSpace: 'nowrap' }}
              onClick={() => onSelectCategory(index)}
            >
              {item.title}
            </div>)}
        </div>}

      </div>

      <div className='product-root'>
        <br />
        <LongBox img={IMAGES.Img1LogoStore} title='Metro' />
        <LongBox img={IMAGES.Img2LogoStore} title='Costco' />
        <LongBox img={IMAGES.Img3LogoStore} title='Orange Garge' />

        <div className='mobileRow bg-light-green border-radius-large p20 pb0 mt20 justify-between'>
          <div className='ml20'>
            <div className='green text12 font-weight-bold letter-Spacing-4 mt20'>MOST POPULAR</div>
            <div className='text36 mt10'> Order Your Favorite Products</div>
            <div className='text18 grey font-weight-normal mt10'>Reserve your favorite delivery times. Get $5 off Tuesday-Friday orders.</div><br /><br /><br />
            <span className='btn-green-normal'>Shop Now</span>
          </div>
          <img src={IMAGES.IconVegetableSliderProduct} alt={'vegetable'} />
        </div>

        <LongBox img={IMAGES.Img4LogoStore} title='Metro' />
        <LongBox img={IMAGES.Img5LogoStore} title='Metro' />
        <LongBox img={IMAGES.Img6LogoStore} title='Metro' />
        <LongBox img={IMAGES.Img7LogoStore} title='Metro' />
        <LongBox img={IMAGES.Img8LogoStore} title='Metro' />
      </div>

      <div className='product-root'>
        <br />
        <LongBox img={IMAGES.Img1LogoStore} title='Metro' />
        <LongBox img={IMAGES.Img2LogoStore} title='Metro' />
        <LongBox img={IMAGES.Img3LogoStore} title='Metro' />
      </div>

      <div className='full'>
        <Footer />
      </div>

    </div>
  );
}

function LongBox(props) {

  const { img, title } = props;
  const { width } = useWindowSize();

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

        <Link to='/aislesearch' className='green text-decoration-none cursor row align-center'>Store &nbsp; <ChevronRightIcon /></Link>

      </div>
      {width > 450
        ? <Slider {...settings2}>
          {ELECTRONICPRODUCTS.map((item, index) =>
            <AtomProduct key={index} item={item} />
          )}
        </Slider>
        : <div className='row overflowX'>
          {ELECTRONICPRODUCTS.map((item, index) =>
            <AtomProduct key={index} item={item} />
          )}
        </div>}
    </Box>
  )
}