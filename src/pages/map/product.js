import { Box } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CATEGORIES, FOODSPRODUCTS, WORLDFODDS, } from '../../configs/data';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import { HeaderMap } from '../../components/header.map';
import Footer from '../../components/foot.product';
import { LandingCategoryList } from '../landing/landingCategoryList';
import { LandingExploreCategory } from '../landing/landingExploreCategory';
import { AtomStore } from '../../components/atom.store';
import { IMAGES } from '../../configs/images';
import useWindowSize from '../../utils/useWindowSize';
import { AtomProduct } from '../../components/atom.product';

export function Product() {

  const { width } = useWindowSize();

  return (
    <div className='center'>
      <HeaderMap />
      <div className='product-root'>
        <div className='row overflowX'>
          {[{
            title: 'All',
            image: IMAGES.IconAllCategory
          }, ...CATEGORIES].map((item, index) =>
            <Link to={'products/' + item.cId} key={index} className='center justify-start black min114' style={{ textDecoration: 'none' }}>
              <div className="circle60">
                <img src={item.image} alt={'icon'} style={{ width: 50 }} />
              </div>
              <div className='text-center mt10 mb10 text14'>{item.title}</div>
            </Link>)}
        </div>
        <div className='border-bottom' />

        <div className='row mt30 overflowX'>
          <div className='row p30 pr0 bg-light-blue border-radius-large justify-between min-width-450 mr20'>
            <div>
              <div className='bold-blue text12 font-weight-bold letter-Spacing-4 mt20'>BEST OFFER</div>
              <div className='text36 mt10'>Buy 4 <span className='bold-blue'>Get 10% off</span> <br /> on Any Wine</div><br />
              <span className='product-show-now'>SHOP NOW</span>
            </div>
            <img src={IMAGES.IconCanSliderProduct} alt={'vegetable'} />
          </div>
          <div className='row p30 pr0 bg-light-red border-radius-large mr20 min-width-450'>
            <div>
              <div className='bold-red text12 font-weight-bold letter-Spacing-4 mt20'>BEST OFFER</div>
              <div className='text36 mt10'>3 for $13</div>
              <div className='text18 font-weight-normal grey'>12-pk soda <span className='bold-red'>+ extra 25% off</span></div><br />
              <span className='product-show-now'>SHOP NOW</span>
            </div>
            <img src={IMAGES.IconWineSliderProduct} alt={'vegetable'} />
          </div>
          <div className='row p30 pr0 bg-light-orange-color border-radius-large min-width-450 mr20'>
            <div>
              <div className='ronchi text12 font-weight-bold letter-Spacing-4 mt20'>BEST OFFER</div>
              <div className='text36 mt10'>3 for $13</div>
              <div className='text18 font-weight-normal grey'>12-pk soda <span className='bold-red'>+ extra 25% off</span></div><br />
              <span className='product-show-now'>SHOP NOW</span>
            </div>
            <img src={IMAGES.IconWineSliderProduct} alt={'vegetable'} />
          </div>

        </div>

        <div className='row align-center mt20 full'>
          <span className='text36'>Featured stores</span>
        </div>

      </div>

      <div className='product-root'>
        <br />
        <LongBox img={IMAGES.Img1Store} title='Metro' />
        <LongBox img={IMAGES.Img2Store} title='Costco' />
        <LongBox img={IMAGES.Img3Store} title='Orange Garge' />

        <div className='mobileRow bg-light-green border-radius-large p20 pb0 mt20 justify-between'>
          <div className='ml20'>
            <div className='green text12 font-weight-bold letter-Spacing-4 mt20'>MOST POPULAR</div>
            <div className='text36 mt10'> Order Your Favorite Products</div>
            <div className='text18 grey font-weight-normal mt10'>Reserve your favorite delivery times. Get $5 off Tuesday-Friday orders.</div><br /><br /><br />
            <span className='btn-green-normal'>Shop Now</span>
          </div>
          <img src={IMAGES.IconVegetableSliderProduct} alt={'vegetable'} />
        </div>

        <LongBox img={IMAGES.Img4Store} title='Rexall' />
        <LongBox img={IMAGES.Img5Store} title='Walmart' />
        <LongBox img={IMAGES.Img6Store} title='Metro' />
        <LongBox img={IMAGES.Img7Store} title='Target' />
        <LongBox img={IMAGES.Img8Store} title='Longos' />

        <div className='center mt30'>
          <span className='btn-green-normal'>Show more stores</span>
        </div>

      </div>

      <div className='product-root mt30'>
        <div className='row align-center justify-between mt30'>
          <div className='text36'>Stores near you</div>
          <div className='text18 eucaluptus cursor row algin-center'> See All &nbsp; <ChevronRightIcon /></div>
        </div>
        <div className={'row ' + (width > 450 ? 'flex-wrap align-center justify-around' : 'overflowX')}>
          {WORLDFODDS.map((item, index) =>
            <AtomStore
              key={index}
              item={item}
            />
          )}
        </div>
      </div>

      <div className='full product-height'>
        <LandingCategoryList />
      </div>

      <div className='product-root mt30'>
        <div className='row align-center justify-between mt30'>
          <div className='text36'>Deals and discounts</div>
          <div className='text18 eucaluptus cursor row algin-center'> See All &nbsp; <ChevronRightIcon /></div>
        </div>
        <div className={'row ' + (width > 450 ? 'flex-wrap align-center justify-around' : 'overflowX')}>
          {WORLDFODDS.map((item, index) =>
            <AtomStore
              key={index}
              item={item}
            />
          )}
        </div>
      </div>

      <div className='product-root mt30'>
        <div className='row align-center justify-between mt30'>
          <div className='text36'>Try something new</div>
          <div className='text18 eucaluptus cursor row algin-center'> See All &nbsp; <ChevronRightIcon /></div>
        </div>
        <div className={'row ' + (width > 450 ? 'flex-wrap align-center justify-around' : 'overflowX')}>
          {WORLDFODDS.map((item, index) =>
            <AtomStore
              key={index}
              item={item}
            />
          )}
        </div>
      </div>
      <div className='product-root mt30'>
        <div className='mobileRow bg-light-green border-radius-large p20 pb0 mt20 justify-between'>
          <div className='ml20'>
            <div className='green text12 font-weight-bold letter-Spacing-4 mt20'>LOWKEL OFFER</div>
            <div className='text36 mt10'>60 Days Free Delivery</div>
            <div className='text18 grey font-weight-normal mt10'>Reserve your favorite delivery times. Get $5 off Tuesday-Friday orders.</div><br /><br /><br />
            <span className='btn-green-normal'>Sign Up Now</span>
          </div>
          <img src={IMAGES.IconCarSliderProduct} alt={'vegetable'} />
        </div>
      </div>

      <div className='full' style={{ marginTop: width > 450 ? -60 : 0 }}>
        <LandingExploreCategory left={true} />
      </div>

      <div className='product-root mt30'>
        <div className='row align-center justify-between mt30'>
          <div className='text36'>All Stores</div>
          <div className='text18 eucaluptus cursor row algin-center'> See All &nbsp; <ChevronRightIcon /></div>
        </div>
        <div className={'row ' + (width > 450 ? 'flex-wrap align-center justify-around' : 'overflowX')}>
          {WORLDFODDS.map((item, index) =>
            <AtomStore
              key={index}
              item={item}
            />
          )}
        </div>

        {width > 450 && <>
          <div className='center mt30 '>
            <span className='btn-green-normal bg-light-gray grey'>See more</span>
          </div>

          <br /><br />

          <div className='border-bottom mt30' />
        </>}
      </div>

      <div className='full'>
        <Footer />
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

        <Link to='/aislesearch' className='green text-decoration-none cursor row align-center'>Store &nbsp; <ChevronRightIcon /></Link>

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