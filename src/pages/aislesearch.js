import { makeStyles } from '@material-ui/core';
import Footer from '../components/foot.product';
import { HeaderMap } from '../components/header.map';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import { DEMANDPRODUCTS, FOODSPRODUCTS2 } from '../configs/data';
import { Link } from 'react-router-dom';
import { InputTag } from '../components/input.tag';
import { AtomProduct } from '../components/atom.product';
import { useState } from "react";
import { ModalStoreInfo } from '../components/modal.storeInfo';
import { IMAGES } from '../configs/images';

const useStyles = makeStyles(() => ({
  container: {
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 80
  },
  main: {
    width: 1200,
    '@media (max-width: 1200px)': {
      width: 800,
    },
    '@media (max-width: 870px)': {
      width: '100%',
    },
  },
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    width: 1200,
    '@media (max-width: 1276px)': {
      width: '100%',
      flexWrap: 'wrap'
    },
    '@media (max-width: 870px)': {
      width: '100%',
    },
  },
  box: {
    padding: 20,
    background: '#FFFFFF',
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.08)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  bgImg: {
    zIndex: -1,
    top: 0,
    position: 'absolute',
    width: '100%',
    backgroundImage: "url(" + IMAGES.BgHeader + ")",
    height: 480,
    backgroundRepeat: 'no-repeat',
  },
  titleLogo: {
    width: 158,
    height: 158,
    borderRadius: 20,
    '@media (max-width: 630px)': {
      width: 100,
      height: 100,
      marginRight: -20
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '@media (max-width: 860px)': {
      flexDirection: 'column',
    },
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 2,
    '@media (max-width: 870px)': {
      fontSize: 25,
      lineHeight: 1
    },
  },
  title2: {
    fontSize: 18,
    fontWeight: '500',
    color: '#7c7b8a',
    marginBottom: 10
  },
  breadcrumb: {
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18
  },
  mapFilterBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    width: 50,
    height: 48,
    borderRadius: 24,
    boxShadow: '0px 5px 9px -1px rgba(0,0,0,0.25)',
    cursor: 'pointer',
  },
  search: {
    color: '#11c856',
    position: 'absolute',
    right: 40,
    top: 13,
    cursor: 'pointer'
  },

  relative: {
    position: 'relative',
    width: '100%',
  },
  mapRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  },
  product: {
    position: 'relative',
    width: 200,
  },
  productItem: {
    display: 'flex!important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 12,
    margin: 12,
    padding: '0 18px',
  },
  hidden: {
    display: 'block',
    '@media (max-width: 850px)': {
      display: 'none',
    },
  },
  shidden: {
    display: 'block',
    '@media (max-width: 510px)': {
      display: 'none',
    },
  },
  btn: {
    background: '#11c856',
    padding: '4px 12px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    borderRadius: 4,
    cursor: 'pointer',
    color: '#fff'
  },
  dBtn: {
    padding: '4px 12px',
    background: '#FFFFFF',
    border: '2px solid #EAEFF5',
    boxSizing: 'border-box',
    borderRadius: 4,
    cursor: 'not-allowed',
    color: '#313131'
  },
  fruitText: {
    fontSize: 24,
    fontWeight: '700',
    '@media (max-width: 850px)': {
      fontSize: 17,
    },
  },
  percent: {
    width: 70,
    height: 30,
    background: '#11c856',
    position: 'absolute',
    top: 24,
    left: 12,
    color: "#fff",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    fontSize: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 34,
    color: '#ccc',
    fontWeight: 'bold',
    '@media (max-width: 1276px)': {
      fontSize: 17,
    },
    '@media (max-width: 650px)': {
      fontSize: 14,
      flexWrap: 'wrap',
      lineHeight: 2
    },
  },
  cart: {
    width: 427,
    height: 158,
    background: '#EAEFF5',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 40,
    '@media (max-width: 500px)': {
      width: 280,
      height: 100,
    },
    '& p': {
      margin: 0,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      '@media (max-width: 500px)': {
        fontSize: 15,
      },
    },
    '& span': {
      fontSize: 18,
      '@media (max-width: 500px)': {
        fontSize: 12,
      },
    },
    '& img': {
      marginRight: -30,
      '@media (max-width: 500px)': {
        width: 80,
        marginRight: -10,
      },
    },
  },
}))

export function Aislesearch() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <HeaderMap transparent={true} isListMapDisable={true}/>
      <div className={classes.bgImg} />
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.box}>
            <img src={IMAGES.Img1LogoStore} alt={'logo'} className={classes.titleLogo} />
            <div style={{ marginLeft: 40 }}>
              <div className={classes.title}>Whole Foods</div>
              <div className={classes.title2}>We're here for you, Portland</div>
              <div className={classes.row}>
                <span>4.6</span> &nbsp;&nbsp;&nbsp;
                <div className={classes.row}>
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                  <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.breadcrumb}>
            <div className={classes.row}>
              <div className={classes.row}>
                <img src={IMAGES.IconDeliveryProduct} alt={'delivery'} />&nbsp;&nbsp;
                <span style={{ color: '#313131', fontSize: 17, fontWeight: '600' }} className={classes.shidden}>Next Delivery: </span> &nbsp;
                <span style={{ color: '#7c7b8a' }} className={classes.hidden}>Today 11 AM</span>&nbsp;&nbsp;
                <KeyboardArrowRightIcon style={{ color: '#7c7b8a', fontSize: 18 }} />
              </div>
              <div className={classes.row} style={{ marginLeft: 20 }}>
                <img src={IMAGES.IconTimeFiveProduct} alt={'delivery'} />&nbsp;&nbsp;
                <span style={{ color: '#313131', fontSize: 17, fontWeight: '600' }} className={classes.shidden}>Open: </span> &nbsp;
                <span style={{ color: '#7c7b8a' }} className={classes.hidden}>Until 5:30 PM</span>&nbsp;&nbsp;
                <KeyboardArrowRightIcon style={{ color: '#7c7b8a', fontSize: 18 }} />
              </div>
            </div>
            <div className={classes.row} style={{ color: '#0AB074', cursor: 'pointer', textDecoration: 'none' }} onClick={() => setOpen(true)}>Store Info &nbsp; <ChevronRightIcon /></div>
          </div>

          <div className={classes.mapRow}>
            <div className={classes.relative}>
              <InputTag onTags={() => { }} />
              <SearchIcon className={classes.search} />
            </div>
            <div className={classes.mapFilterBtn}>
              <FilterListIcon />
            </div>
          </div>

          <div style={{ width: '100%', marginTop: 40 }}>

            <div className={classes.cartRow}>
              <div className={classes.cart}>
                <div>
                  <p>Store Pro</p>
                  <span>Access exclusive promotions<br /> and save on delivery fees</span>
                </div>
                <img src={IMAGES.ImgCartProduct} alt={'cart'} />
              </div>

              <div className={classes.cart} style={{ background: '#11c856', color: '#fff' }}>
                <div>
                  <p>Flat 10% OFF</p>
                  <span>Get additional 10% discount<br /> for your first purchase</span>
                </div>
                <img src={IMAGES.ImgBagProduct} alt={'cart'} />
              </div>
            </div>

            <div className={classes.bigTitle}>
              {bookItems.map((item, index) => <div>{item} &nbsp;</div>)}
            </div>

            <ItemTitle title={'Weekly Promo'} image={null} />
            <div className={classes.products}>
              {DEMANDPRODUCTS
                .filter((item, index) => index < 6)
                .map((item, index) =>
                  <AtomProduct item={item} key={index} promo={true} />
                )}
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <ItemTitle title={'Fruits & Vegetables'} image={IMAGES.ImgFruitsCategory} />
            <div className={classes.products}>
              {FOODSPRODUCTS2
                .filter((item, index) => index < 6)
                .map((item, index) =>
                  <AtomProduct item={item} key={index} />
                )}
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <ItemTitle title={'Panty & Groiceries'} image={IMAGES.ImgPantyCategory} />
            <div className={classes.products}>
              {FOODSPRODUCTS2
                .filter((item, index) => index < 6)
                .map((item, index) =>
                  <AtomProduct item={item} key={index} />
                )}
            </div>
          </div>
        </div>

        <div className='full'>
          <Footer />
        </div>

        <ModalStoreInfo
          onClose={() => setOpen(false)}
          open={open}
        />

      </div>
    </div>
  );
}

function ItemTitle(props) {
  const classes = useStyles();
  const { title, image } = props;
  return (
    <div className={classes.breadcrumb} style={{ marginTop: 50 }}>
      <div className={classes.row}>
        {image && <img src={image} alt={'delivery'} />}&nbsp;&nbsp;
        <div className={classes.fruitText}>{title}</div>
      </div>
      <Link
        to={'storeInfo'}
        className={classes.row}
        style={{ color: '#0AB074', cursor: 'pointer', textDecoration: 'none' }}
      >
        View All &nbsp; <ChevronRightIcon />
      </Link>
    </div>
  )
}

const bookItems = [
  'Fruits & Vegetables', 'Panty & Groceries', 'Dairy & Eggs', 'Snacks & Cookies'
]
