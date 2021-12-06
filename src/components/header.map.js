import { makeStyles, Popover, Dialog, Box, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import { GOOGLE_API_KEY } from "../configs/data";
import CheckIcon from '@material-ui/icons/Check';
import GoogleMapReact from "google-map-react";
import { ModalAddress } from "./modal.address";
import { inputStyles } from '../configs/functions'
import ListIcon from '@material-ui/icons/List';
import { useLocation } from 'react-router-dom';
import clsx from "clsx";
import { IMAGES } from "../configs/images";

const useStyles = makeStyles(() => ({
  mapHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 101,
    width: 'calc(100% - 60px)',
    height: 50,
    background: '#fff',
    padding: '20px 30px',
    fontWeight: 700,
    marginRight: 20
  },
  cartText: {
    position: 'absolute',
    right: -8,
    top: -5,
    backgroundColor: '#11c856',
    width: 16,
    height: 16,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 11
  },
  iconHome: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
  },
  mapDropdown: {
    '& span': {
      color: '#ccc',
      cursor: 'pointer'
    },
    '@media (max-width: 850px)': {
      display: 'none'
    }
  },
  hiddenText: {
    display: 'block',
    '@media (max-width: 1250px)': {
      display: 'none'
    },
  },
  mapDropdownMobile: {
    display: 'none',
    '@media (max-width: 850px)': {
      fontSize: 12,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: '0 20px',
    marginLeft: 40,
    '@media (max-width: 850px)': {
      marginLeft: 10,
      marginRight: -25
    },
  },
  popover: {
    borderRadius: 6,
    padding: '16px 16px',
    width: 320,
    fontWeight: 'bold'
  },
  divider: {
    width: '100%',
    height: 1,
    background: '#EAEFF5',
    marginBottom: 12
  },
  cartImg: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginRight: 12
  },
  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#f7f8fc',
    borderRadius: 5,
    padding: 8,
    marginTop: 12
  },
  cartImgBg: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    borderRadius: 6,
    width: 70,
    height: 54,
    marginRight: 18,
    '& img': {
      width: 50,
    }
  },
  calc: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 3,
    border: '1px solid #e5e5e5',
    cursor: 'pointer'
  },
  cartBtn: {
    background: '#11c856',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    padding: '18px 0',
    marginTop: 24,
    cursor: 'pointer'
  },
  menu: {
    borderRadius: 6,
    width: 300,
    fontWeight: 'bold',
    margin: 0,
    padding: 0
  },
  greenRound: {
    border: '2px solid #21A453',
    borderRadius: 18,
    fontSize: 12,
    padding: '3px 20px',
    marginLeft: 30,
    color: '#21A453',
    cursor: 'pointer'
  },
  dialog: {
    height: 'calc(100% - 100px)',
    marginTop: '3%',
    '@media (max-width: 850px)': {
      height: 'calc(100% - 80px)',
      marginTop: '7%',
    },
  },
  dialogBox: {
    padding: '16px',
    width: 360,
    '@media (max-width: 420px)': {
      width: 260,
    },
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f7f8fc'
  },
  boxRound: {
    width: 40,
    height: 40,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #e5e5e5'
  },
  cartBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f7f8fc',
    padding: 8,
    marginTop: 12,
    fontWeight: '600',
    '& img': {
      width: 40,
      height: 40,
      borderRadius: 4,
      marginRight: 8
    },
    '& span': {
      color: '#21A453',
      cursor: 'pointer'
    }
  },
  greenBtn: {
    background: '#11c856',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '14px 15px',
    borderRadius: 4,
    justifyContent: 'space-between'
  },
  borderBtn: {
    border: '2px solid #e5e5e5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '14px 15px',
    borderRadius: 4
  },
  marker: {
    '& img': {
      width: 50,
      height: 50,
      borderRadius: 8,
    }
  },
  map: {
    height: 200,
    width: '100%',
  },
  autocomplete: {
    width: 160,
    border: '1px solid grey',
    height: 26,
    marginLeft: 6
  },
  search: {
    color: '#11C856',
    position: 'absolute',
    right: -24,
    top: 13,
    cursor: 'pointer'
  },

}));

export function HeaderMap(props) {

  const classes = useStyles();
  const [anchorElCart, setAnchorElCart] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [open, setOpen] = useState(false);
  const [isAddressModal, setIsAddressModal] = useState(false);
  const history = useHistory();
  const { transparent, background, isDisableDelivery, isListMapDisable } = props;

  const handleCartClick = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorElCart(null);
  };

  const handleMenuClick = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElMenu(null);
  };

  const openCart = Boolean(anchorElCart);
  const openMenu = Boolean(anchorElMenu);

  const idCart = openCart ? 'simple-popover' : undefined;
  const idMenu = openMenu ? 'simple-popover' : undefined;

  const onOpenCheckout = () => {
    setAnchorElCart(null);
    setOpen(true);
  }

  const onGoSearch = (e) => {
    history.push('/products/' + e)
  }

  return (
    <div className='full'>
      <div className={classes.mapHeader} style={{ background: (transparent || background) ? 'transparent' : '#fff' }}>
        <Link to='/'>
          <img className='header-logo header-hidden-1200' src={IMAGES.logo} alt="header logo" />
          <img className='header-display-1200' src={IMAGES.logoShort} alt="short logo" />
        </Link>

        {!isDisableDelivery && <div
          className='bg-light-sky mh20 border-radius-40 p15 map-text-input header-display-1650 cursor'
          style={{ overflowX: 'hidden' }}
          onClick={() => setIsAddressModal(true)}
        >
          <img src={IMAGES.IconLocationPlusMap} alt={'to'} style={{ position: 'absolute', top: 36 }} />
          <span style={{ marginLeft: 30, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Delivery <span className='font-weight-400 grey'>to</span> Toronto, ON M4N 1K1, Canada</span>
        </div>}

        <div className='header-hidden-1650 full'>
          <ListInputView onClick={() => setIsAddressModal(true)} onGoSearch={onGoSearch} isListMapDisable={isListMapDisable}/>
        </div>

        <div className='row align-center'>
          <div className='relative cursor' onClick={handleCartClick}>
            <ShoppingCartIcon style={transparent && { color: '#eee' }} />
            <div className={classes.cartText}>
              0
            </div>
          </div>
          <div className='row align-center cursor' onClick={handleMenuClick}>
            <img className={classes.avatar} src="https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png" alt="avatar" />
            <span className={classes.hiddenText} style={transparent && { color: '#eee' }}>Savannah</span>
          </div>
        </div>
      </div>
      <div className='header-display-1650 mb20'>
        <ListInputView onClick={() => setIsAddressModal(true)} onGoSearch={onGoSearch} isListMapDisable={isListMapDisable}/>
      </div>

      <Popover
        id={idCart}
        open={openCart}
        anchorEl={anchorElCart}
        onClose={handleCartClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={classes.popover}>

          <div className='row align-center' style={{ justifyContent: 'space-between' }}>
            <div className='text30'>My Cart</div>
            <Link to={'/cart'} className='text16 green cursor text-decoration-none'>View All</Link>
          </div>

          <CartBox
            title={'Wolrd Foods'}
            price={1.16}
            itemName={'Banana'}
            count={2}
            itemImg={IMAGES.ImgBananaVegetableProduct}
            storeImg={IMAGES.Img1LogoStore}
          />
          <CartBox
            title={'Metro'}
            price={3.56}
            itemName={'Tomato'}
            count={1}
            itemImg={IMAGES.ImgTomatoVegetableProduct}
            storeImg={IMAGES.Img3LogoStore}
          />

          <div className='row align-center justify-between mt20'>
            <div className='text24'>Total</div>
            <div className='text24 green'>$ 4.72</div>
          </div>

          <div className={classes.cartBtn} onClick={onOpenCheckout}>
            Proceed to Checkout
          </div>

        </div>
      </Popover>

      <Popover
        id={idMenu}
        open={openMenu}
        anchorEl={anchorElMenu}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.menu}>
          <div className='row align-center' style={{ justifyContent: 'space-between', background: '#f7f8fc', padding: '18px 20px' }}>
            <div className='row align-center'><img src={IMAGES.IconAltyCart} alt={'icon'} /> <span className='text20'>&nbsp; 2 Items</span></div>
            <div className='text16 green'>$ 20.49</div>
          </div>

          <Link to={'/orders'} className='text-decoration-none'><MenuItem title={'My Orders'} img={IMAGES.IconShoppingBagCart} /></Link>
          <Link to={'/wishlist'} className='text-decoration-none'> <MenuItem title={'Wishlist'} img={IMAGES.IconHeartCart} /></Link>
          <MenuItem title={'My Account'} img={IMAGES.IconUserCircleCart} upgrade={true} />
          <MenuItem title={'Billing information'} img={IMAGES.IconWalletCart} />
          <MenuItem title={'My Addresses'} img={IMAGES.IconCompassCart} />
          <MenuItem title={'Share Marketplace'} img={IMAGES.IconShareCart} />
          <MenuItem title={'Support'} img={IMAGES.IconHelpCircleCart} />
          <MenuItem title={'Privacy Policy'} img={IMAGES.IconBlockCart} />
          <div className={classes.cartBtn} style={{ margin: 20 }}>
            Log Out
          </div>
        </div>
      </Popover>

      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        className={classes.dialog}
      >
        <div className={classes.dialogBox}>
          <div className='row align-center justify-end'>
            <img style={{ cursor: 'pointer' }} src={IMAGES.IconCloseMap} alt={'icon'} onClick={() => setOpen(false)} /><br />
          </div>

          <Box mb={3} mt={-1} className={classes.text24} style={{ fontWeight: '600', textAlign: 'center' }}>Checkout</Box>

          <div className='text16'>Delivery or Pickup?</div>

          <div className='row align-center' style={{ marginTop: 12, marginBottom: 12 }}>
            <div className={classes.greenBtn} style={{ marginRight: 8 }}>
              <span>Delivery</span>
              <CheckIcon />
            </div>
            <div className={classes.borderBtn} style={{ marginLeft: 8 }}>
              <span>Pick Up</span>
            </div>
          </div>

          <Box mb={1} mt={2} className='text16'>Delivery Details</Box>

          <div className={classes.map}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
              defaultCenter={{
                lat: -33.941,
                lng: 151.196
              }}
              center={{
                lat: -33.941,
                lng: 151.196
              }}
              defaultZoom={18}
            >
              {
                <CustomMarker
                  lat={-33.941}
                  lng={151.196}
                  image={IMAGES.Img2LogoStore}
                />
              }

            </GoogleMapReact>
          </div>

          <Box className='row align-center' mt={2}>
            <div className={classes.box}>
              <img src={IMAGES.IconHome1Map} alt={'icon'} />
            </div>
            <span className='text16'> &nbsp;&nbsp;&nbsp;2861 Fairview St, Portland, OR</span>
          </Box>

          <Box className='row align-center' mt={2}>
            <div className={classes.box}>
              <img src={IMAGES.IconNoteMap} alt={'icon'} />
            </div>
            <span className='text16'> &nbsp;&nbsp;&nbsp;Add Delivery Instructions</span>
          </Box>

          <Box className='row align-center' mt={2}>
            <div className={classes.box}>
              <img src={IMAGES.IconPhoneCallMap} alt={'icon'} />
            </div>
            <span className='text16'> &nbsp;&nbsp;&nbsp;Add Phone Number</span>
          </Box>

          <Box className='row align-center mt20'>
            <div className={classes.boxRound}>
              <img src={IMAGES.IconCheckMap} alt={'icon'} />
            </div>
            <span className='text16'> &nbsp;&nbsp;&nbsp;Leave on My Doorstep If I’m Not Around</span>
          </Box>

          <Box className='text16 mt20'>Delivery Details</Box>

          <Box className={classes.cartBox}>
            <div className='row align-center'>
              <img src={IMAGES.Img1Store} alt={'icon'} />
              Delivery for World Foods
            </div>
            <span>Set</span>
          </Box>

          <Box className='text16 mt20'>Promo</Box>


          <Link to={'/billing'} className={classes.cartBtn} style={{ textDecoration: 'none' }}>
            Proceed to Billing
          </Link>
        </div>
      </Dialog>
      <ModalAddress
        onClose={() => setIsAddressModal(false)}
        open={isAddressModal}
      />
    </div>
  );
}

function CartBox(props) {
  const { title, price, itemName, count, itemImg, storeImg } = props;
  const classes = useStyles();

  return (
    <div>
      <div className='row align-center justify-between mt20'>
        <div className='row align-center'>
          <img className={classes.cartImg} src={storeImg} alt={'store'} />
          <span className={classes.text24}>{title}</span>
        </div>
        <div className={classes.text20}>$ {price}</div>
      </div>

      <div className={classes.cartItem}>
        <div className={classes.cartImgBg}>
          <img src={itemImg} alt={'item'} />
        </div>
        <div className='full'>
          <div className='row align-center' style={{ justifyContent: 'space-between' }}>
            <div>
              <div>{itemName}</div>
              <div className="text14 mt3">Qty: <span className='grey'>{count}</span></div>
            </div>
            <div className='row align-center dark-green'>
              ${price}
            </div>
            <img src={IMAGES.IconTrashMap} alt={'icon'} />
          </div>
        </div>
      </div>

      <div className='row align-center' style={{ justifyContent: 'space-between', marginTop: 18, marginBottom: 15 }}>
        <div className='center row'><img src={IMAGES.IconTimer} alt='icon' /><b> &nbsp;Delivery: &nbsp;</b> <span style={{ color: '#7c7b8a', fontWeight: '400' }}>Today 10 AM</span></div>
        <div className={'text16 green'}>Change</div>
      </div>

      <div className='grey text14 font-weight-500'>Processing hours: <span className='black'>1</span></div>

      <div className='cart-notify'>
        Over <b>$35.00</b> spent, delivery <b>DISCOUNT</b> applied.
      </div>

      <div className={classes.divider} />

    </div>
  )
}


function MenuItem(props) {

  const { title, img, upgrade } = props;
  const classes = useStyles();

  return (
    <div style={{ padding: '18px 20px', cursor: 'pointer' }}>
      <div className='row align-center'>
        <img src={img} alt={'icon'} />
        <span className={classes.text16} style={{ color: '#333' }}>&nbsp;&nbsp;&nbsp;{title}</span>
        {upgrade && <div className={classes.greenRound}>
          Upgrade
        </div>}
      </div>
    </div>
  )
}

function CustomMarker(props) {

  const { image } = props;
  const classes = useStyles();

  return (
    <div className={classes.marker}>
      <img src={image} alt={'img'} />
    </div>
  )
}

function ListInputView(props) {

  const classes = useStyles();
  const location = useLocation();
  const isProducts = location.pathname.includes('/products') || location.pathname.includes('/storeInfo') || location.pathname.includes('/aislesearch');
  const isStore = location.pathname.includes('/storeInfo') || location.pathname.includes('/aislesearch');
  const inputClasses = inputStyles();
  const [searchText, setSearchText] = useState();
  const { onClick, onGoSearch, isListMapDisable } = props;
  const isDisableDelivery = location.pathname.includes('/products/')

  return (
    <div className='row align-center mh20 justify-between'>
      {!isListMapDisable && <div className='row'>
        <Link to='/products' className={isProducts ? 'header-allow-btn ph9' : 'header-disable-btn'}>
          <ListIcon />
          <span className='ml10 header-hidden-1200'>List</span>
        </Link>
        <Link to='/map' className={!isProducts ? 'header-allow-btn ml30' : 'header-disable-btn ml30'}>
          <img src={(!isProducts || isStore) ? IMAGES.IconMapWhiteMap : IMAGES.IconMapBlackMap} alt='map' />
          <span className={clsx('ml10', isStore && 'white', 'header-hidden-1200')}>Map</span>
        </Link>
      </div>}

      {!isDisableDelivery && <div
        className='bg-light-sky mh20 border-radius-40 p15 map-text-input header-hidden-1650 cursor'
        onClick={onClick}
      >
        <img src={IMAGES.IconLocationPlusMap} alt={'to'} style={{ position: 'absolute', top: 36 }} />
        <span style={{ marginLeft: 30, whiteSpace: 'nowrap' }}>Delivery <span className='font-weight-400 grey'>to</span> Toronto, ON M4N 1K1, Canada</span>
      </div>}

      <div className='row header-map-width'>
        <div className='header-hidden-1200 header-zip'>All products</div>
        <div className='relative full '>
          <TextField
            variant='standard'
            className='header-input'
            placeholder={'Search over 400 000 products...'}
            InputProps={{ classes: inputClasses }}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <SearchIcon
            className={classes.search}
            onClick={() => searchText && onGoSearch(searchText)}
          />
        </div>
      </div>
    </div>
  )
}