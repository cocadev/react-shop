import { makeStyles, Popover, Dialog, Box } from "@material-ui/core";
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useState } from "react";
import { GOOGLE_API_KEY } from "../configs/data";
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import GoogleMapReact from "google-map-react";
import { ModalAddress } from "./modal.address";
import { IMAGES } from "../configs/images";

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  relative: {
    position: 'relative'
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
    '@media (max-width: 830px)': {
      display: 'none'
    }
  },
  hiddenText: {
    display: 'block',
    '@media (max-width: 600px)': {
      display: 'none'
    },
  },
  mapDropdownMobile: {
    display: 'none',
    '@media (max-width: 830px)': {
      fontSize: 12,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  logoHeader: {
    width: 180,
    '@media (max-width: 920px)': {
      width: 160
    },
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: '0 20px',
    marginLeft: 40
  },
  popover: {
    borderRadius: 6,
    padding: '16px 16px',
    width: 320,
    fontWeight: 'bold'
  },
  text30: {
    fontSize: 30,
  },
  text16: {
    fontSize: 16,
    color: '#21A453',
  },
  text17: {
    fontSize: 15,
    fontWeight: '600'
  },
  text24: {
    fontSize: 24,
  },
  text20: {
    fontSize: 20,
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
    width: 85,
    height: 64,
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
    '@media (max-width: 830px)': {
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
  }
}));

export function HeaderMap(props) {

  const classes = useStyles();
  const [anchorElCart, setAnchorElCart] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [open, setOpen] = useState(false);
  const [isAddressModal, setIsAddressModal] = useState(false);

  const { transparent, background } = props;

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

  // const handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => {
  //       props.onPosition(latLng)
  //     }
  //     )
  //     .catch(error => console.error('Error', error));
  // };

  const onOpenCheckout = () => {
    setAnchorElCart(null);
    setOpen(true);
  }

  return (
    <div className={classes.root}>
      <div className={classes.mapHeader} style={{ background: (transparent || background) ? 'transparent' : '#fff' }}>
        <Link to='/'>
          <img className={classes.logoHeader} src="assets/lowkel-logo.svg" alt="header logo" />
        </Link>
        <div className={clsx(classes.row, classes.mapDropdown)} >
          <div className={classes.iconHome} style={transparent && { background: 'rgba(109, 109, 109, 0.7)' }}>
            <HomeIcon style={transparent && { color: '#eee' }} />
          </div>
          <b style={transparent && { color: '#fff' }}>Delivery</b>
          <span style={transparent && { color: '#888' }}>&nbsp; for&nbsp;&nbsp;</span>

          <div className={classes.autocomplete} onClick={() => setIsAddressModal(true)} />
        {/* <Autocomplete
          apiKey={GOOGLE_API_KEY}
          onPlaceSelected={(place) => {
            handleSelect(place.formatted_address);
          }}
        /> */}
        </div>

        <div className={classes.row}>
          <div className={classes.relative} onClick={handleCartClick} style={{ cursor: 'pointer' }}>
            <ShoppingCartIcon style={transparent && { color: '#eee' }} />
            <div className={classes.cartText}>
              0
            </div>
          </div>
          <div className={classes.row} onClick={handleMenuClick}>
            <img className={classes.avatar} src="https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png" alt="avatar" />
            <span className={classes.hiddenText} style={transparent && { color: '#eee' }}>Savannah</span>
          </div>
        </div>
      </div>

      <div className={clsx(classes.row, classes.mapDropdownMobile)}>
        <div className={classes.iconHome} style={transparent && { background: 'rgba(109, 109, 109, 0.7)' }}>
          <HomeIcon style={transparent && { color: '#eee' }} />
        </div>
        <b style={transparent && { color: '#fff' }}>Delivery</b>
        <span style={transparent && { color: '#888' }}>&nbsp; for&nbsp;&nbsp;</span>

        <div onClick={() => setIsAddressModal(true)} />

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

          <div className={classes.row} style={{ justifyContent: 'space-between' }}>
            <div className={classes.text30}>My Cart</div>
            <div className={classes.text16}>View All</div>
          </div>

          <CartBox
            title={'Wolrd Foods'}
            price={1.16}
            itemName={'Banana'}
            count={2}
            itemImg={'assets/products/bananas.png'}
            storeImg={IMAGES.Img1Store}
          />
          <CartBox
            title={'Metro'}
            price={3.56}
            itemName={'Tomato'}
            count={1}
            itemImg={'assets/products/tomato.png'}
            storeImg={IMAGES.Img3Store}
          />

          <div className={classes.row} style={{ justifyContent: 'space-between', marginTop: 20 }}>
            <div className={classes.text24}>Total</div>
            <div className={classes.text24} style={{ color: '#21a453' }}>$ 4.72</div>
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
          <div className={classes.row} style={{ justifyContent: 'space-between', background: '#f7f8fc', padding: '18px 20px' }}>
            <div className={classes.row}><img src={'assets/icons/bx-cart-alty.svg'} alt={'icon'} /> <span className={classes.text20}>&nbsp; 2 Items</span></div>
            <div className={classes.text16} style={{ color: '#21A453' }}>$ 20.49</div>
          </div>

          <Link to={'/orders'} style={{ textDecoration: 'none' }}><MenuItem title={'My Orders'} img={'assets/icons/bx-shopping-bag.svg'} /></Link>
          <MenuItem title={'Wishlist'} img={'assets/icons/bx-heart.svg'} />
          <MenuItem title={'My Account'} img={'assets/icons/bx-user-circle.svg'} upgrade={true} />
          <MenuItem title={'Billing information'} img={'assets/icons/bx-wallet.svg'} />
          <MenuItem title={'My Addresses'} img={'assets/icons/bx-compass.svg'} />
          <MenuItem title={'Share Marketplace'} img={'assets/icons/bx-share.svg'} />
          <MenuItem title={'Support'} img={'assets/icons/bx-help-circle.svg'} />
          <MenuItem title={'Privacy Policy'} img={'assets/icons/bx-block.svg'} />
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
          <div className={classes.row} style={{ justifyContent: 'flex-end' }}>
            <img style={{ cursor: 'pointer' }} src={IMAGES.IconCloseMap} alt={'icon'} onClick={() => setOpen(false)} /><br />
          </div>

          <Box mb={3} mt={-1} className={classes.text24} style={{ fontWeight: '600', textAlign: 'center' }}>Checkout</Box>

          <div className={classes.text17}>Delivery or Pickup?</div>

          <div className={classes.row} style={{ marginTop: 12, marginBottom: 12 }}>
            <div className={classes.greenBtn} style={{ marginRight: 8 }}>
              <span>Delivery</span>
              <CheckIcon />
            </div>
            <div className={classes.borderBtn} style={{ marginLeft: 8 }}>
              <span>Pick Up</span>
            </div>
          </div>

          <Box mb={1} mt={2} className={classes.text17}>Delivery Details</Box>

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
                  image={'assets/stores/2.png'}
                />
              }

            </GoogleMapReact>
          </div>

          <Box className={classes.row} mt={2}>
            <div className={classes.box}>
              <img src={'/assets/icons/bx-home1.svg'} alt={'icon'} />
            </div>
            <span className={classes.text17}> &nbsp;&nbsp;&nbsp;2861 Fairview St, Portland, OR</span>
          </Box>

          <Box className={classes.row} mt={2}>
            <div className={classes.box}>
              <img src={'/assets/icons/bx-note.svg'} alt={'icon'} />
            </div>
            <span className={classes.text17}> &nbsp;&nbsp;&nbsp;Add Delivery Instructions</span>
          </Box>

          <Box className={classes.row} mt={2}>
            <div className={classes.box}>
              <img src={'/assets/icons/bx-phone-call.svg'} alt={'icon'} />
            </div>
            <span className={classes.text17}> &nbsp;&nbsp;&nbsp;Add Phone Number</span>
          </Box>

          <Box className={classes.row} mt={2}>
            <div className={classes.boxRound}>
              <img src={'/assets/icons/bx-check.svg'} alt={'icon'} />
            </div>
            <span className={classes.text17}> &nbsp;&nbsp;&nbsp;Leave on My Doorstep If I’m Not Around</span>
          </Box>

          <Box mt={3} className={classes.text17}>Delivery Details</Box>

          <Box className={classes.cartBox}>
            <div className={classes.row}>
              <img src={'assets/stores/1.jpg'} alt={'icon'} />
              Delivery for World Foods
            </div>
            <span>Set</span>
          </Box>

          <Box mt={3} className={classes.text17}>Promo</Box>


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
      <div className={classes.row} style={{ justifyContent: 'space-between', marginTop: 20 }}>
        <div className={classes.row}>
          <img className={classes.cartImg} src={storeImg} alt={'store'} />
          <span className={classes.text24}>{title}</span>
        </div>

        <div className={classes.text20}>$ {price}</div>
      </div>

      <div className={classes.cartItem}>
        <div className={classes.cartImgBg}>
          <img src={itemImg} alt={'item'} />
        </div>
        <div style={{ width: '100%' }}>
          <div className={classes.row} style={{ justifyContent: 'space-between' }}><div>{itemName}</div> <img src={'assets/icons/bx-trash.svg'} alt={'icon'} /></div>
          <div style={{ fontSize: 14 }}>{count}LB</div>
          <div className={classes.row} style={{ color: '#21A453', justifyContent: 'space-between' }}>
            ${price}
            <div className={classes.row} style={{ color: '#313131' }}>
              <div className={classes.calc} style={{ marginRight: 12 }}>-</div> {count} <div className={classes.calc} style={{ marginLeft: 12 }}>+</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.cartItem} style={{ height: 40 }}>
        <div className={classes.cartImgBg} style={{ width: 50, height: 40 }}>
          <AddIcon />
        </div>
        <div style={{ width: '100%' }}>
          <div className={classes.row} style={{ justifyContent: 'space-between' }}><div>Custom Request</div> <img src={'assets/icons/bx-trash.svg'} alt={'icon'} /></div>
          <div style={{ fontSize: 14 }}>Item</div>
        </div>
      </div>

      <div className={classes.row} style={{ justifyContent: 'space-between', marginTop: 18, marginBottom: 15 }}>
        <div><b>Delivery:</b> <span style={{ color: '#7c7b8a', fontWeight: '400' }}>Today 10 AM</span></div>
        <div className={classes.text16}>Change</div>
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
      <div className={classes.row}>
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