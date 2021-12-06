import { makeStyles, Box, Dialog, TextField } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from '../configs/data';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { inputStyles } from '../configs/functions';
import { IMAGES } from '../configs/images';

const useStyles = makeStyles(() => ({
  marker: {
    '& img': {
      width: 40,
      height: 40,
      borderRadius: 8,
    }
  },
  map: {
    height: 200,
    width: '100%',
  },
  text24: {
    fontSize: 24,
  },
  text17: {
    fontSize: 15,
    fontWeight: '600',
  },
  mapTitle: {
    borderRadius: 12,
    background: '#fff',
    padding: '6px 12px',
    fontSize: 13,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    fontWeight: 'bold',
    textAlign: 'center',
    '@media (max-width: 640px)': {
      fontSize: 10,
    },
    '@media (max-width: 360px)': {
      display: 'none'
    },
  },
  center: {
    marginTop: -40,
    zIndex: 2000,
    marginLeft: 100,
    position: 'absolute',
    '@media (max-width: 640px)': {
      marginLeft: 0,
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export function ModalStoreInfo(props) {

  const classes = useStyles();
  const { open, onClose } = props;
  const [modal, setModal] = useState(0); //0-store, 1-return policy, 2-disclaimer
  const inputClasses = inputStyles();

  return (
    <div>
      {modal === 0 && <Dialog
        onClose={onClose}
        open={open}
        className='dialog'
      >
        <div className='dialog-box'>
          <div className={classes.row}>
            <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
          </div>

          <Box mb={3} mt={-1} className={classes.text24} style={{ fontWeight: '600', textAlign: 'center' }}>Store Info</Box>

          <div className='center'>
            <img src={IMAGES.Img1LogoStore} alt="store" style={{ width: 100, height: 100, borderRadius: 6 }} />
            <div className="text-center text24">World Foods</div>
            <div className="text-center text16-gray">We're here for you, Portland.</div>
          </div>

          <div className='center row mt20'>
            <img src={IMAGES.IconFullStarProduct} alt='star' />
            <img src={IMAGES.IconFullStarProduct} alt='star' />
            <img src={IMAGES.IconFullStarProduct} alt='star' />
            <img src={IMAGES.IconFullStarProduct} alt='star' />
            <img src={IMAGES.IconFullStarProduct} alt='star' />
          </div>

          <div className='center mt10' onClick={() => setModal(3)}>
            <span className='btn-border-normal'>Rate Store</span>
          </div>

          <div className='center mobileRow mt30'>
            <div className='row align-center full center bg-ligh-green pv10 m10 cursor' onClick={() => setModal(2)}>
              <img src={IMAGES.IconErrorStore} alt='star' />
              <div className='text16 ml10'>Disclaimer</div>
            </div>
            <div className='row align-center full center bg-ligh-green pv10 m10 cursor' onClick={() => setModal(1)}>
              <img src={IMAGES.IconRevisionStore} alt='star' />
              <div className='text16 ml10'>Return Policy</div>
            </div>
          </div>

          <Box mb={1} className="text18 mt30">About Store:</Box>

          <Box mb={2} style={{ background: '#eaeff5', borderRadius: 5 }}>
            <Box style={{ fontSize: 16, padding: '15px 18px' }}>
              A family-owned specialty store with a unique selection of products from near and far. Our chef-run deli, curated beer and wine selection, and incredible bounty of local and imported goods is here to bring delight to your neighborhood. Stop in and share our passion for great food.
            </Box>
          </Box>


          <Box mb={1} mt={2} className="text18 mt20">Location  </Box>

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

          <div className={classes.center}>
            <span className={classes.mapTitle} >
              4517 Washington Ave. Manchester, Kentucky 39495
            </span>
          </div>

          <div className='row align-center full justify-between mt20'>
            <div className="text18">Store timing</div>
            <div className="text16 bg-green white border-radius-large center ph10 cursor">Open now</div>
          </div>

          <div className='relative'>
            <div className='absolute top70 right0'>
              <div className='bg-white circle32'>
                <ChevronRightIcon className='green' />
              </div>
            </div>
            <div className='absolute top70 left0'>
              <div className='bg-white circle32'>
                <ChevronLeftIcon className='green' />
              </div>
            </div>
          </div>

          <div className='row overflowX'>

            <StoreBox
              date='Monday'
              startTime='11:00 AM - 07:00 PM'
              endTime='11:00 AM - 07:00 PM'
            />
            <StoreBox
              date='Tuesday'
              startTime='11:00 AM - 07:00 PM'
              endTime='11:00 AM - 07:00 PM'
            />
            <StoreBox
              date='Wednesday'
              startTime='11:00 AM - 07:00 PM'
              endTime='11:00 AM - 07:00 PM'
            />
            <StoreBox
              date='Thursday'
              startTime='11:00 AM - 07:00 PM'
              endTime='11:00 AM - 07:00 PM'
            />
            <StoreBox
              date='Friday'
              startTime='11:00 AM - 07:00 PM'
              endTime='11:00 AM - 07:00 PM'
            />
          </div>

          <div className='bg-light-sky mt20'>
            <div className='text14 p15 grey'>Availability can change depending on demand in your area and the amount of items added to cart.</div>
          </div>

        </div>
      </Dialog>}

      <Dialog
        onClose={onClose}
        open={modal === 1}
        className='dialog'
      >
        <div className='dialog-box'>
          <div className='row align-center justify-between'>
            <ArrowBackIcon onClick={() => setModal(0)} className='cursor' />
            <p className='text24'>Return Policy</p>
            <img className='cursor' onClick={() => setModal(0)} src={IMAGES.IconCloseMap} alt={'icon'} />
          </div>
          <div className='text18 font-weight-normal'>
            A family-owned specialty store with a unique selection of products from near and far. Our chef-run deli, curated beer and wine selection, and incredible bounty of local and imported goods is here to bring delight to your neighborhood. Stop in and share our passion for great food. <br /><br />
            Our chef-run deli, curated beer and wine selection, and incredible bounty of local and imported goods is here to bring delight to your neighborhood. Stop in and share our passion for great food.
          </div>
          <br />

        </div>

      </Dialog>

      <Dialog
        onClose={onClose}
        open={modal === 2}
        className='dialog'
      >
        <div className='dialog-box'>

          <div className='row align-center justify-between'>
            <ArrowBackIcon onClick={() => setModal(0)} className='cursor' />
            <p className='text24'>Disclaimer</p>
            <img className='cursor' onClick={() => setModal(0)} src={IMAGES.IconCloseMap} alt={'icon'} />
          </div>

          <div className='text18 font-weight-normal'>
            A family-owned specialty store with a unique selection of products from near and far. Our chef-run deli, curated beer and wine selection, and incredible bounty of local and imported goods is here to bring delight to your neighborhood. Stop in and share our passion for great food.
          </div>
          <br />

        </div>
      </Dialog>

      <Dialog
        onClose={onClose}
        open={modal === 3}
        className='dialog'
      >
        <div className='dialog-box-small'>

          <p className='text18 text-center'>How satisfied are you with the store?</p>

          <div className='center row mt20 mb30'>
            <img src={IMAGES.IconFullStarProduct} alt='star' style={{ width: 40 }} />
            <img src={IMAGES.IconFullStarProduct} alt='star' style={{ width: 40 }} />
            <img src={IMAGES.IconFullStarProduct} alt='star' style={{ width: 40 }} />
            <img src={IMAGES.IconFullStarProduct} alt='star' style={{ width: 40 }} />
            <img src={IMAGES.IconFullStarProduct} alt='star' style={{ width: 40 }} />
          </div>

          <div className='relative'>
            <TextField
              className='textarea'
              style={{ padding: '20px 25px' }}
              placeholder='Write a quick review here'
              multiline={true}
              minRows={7}
              InputProps={{ classes: inputClasses }}
            />
            <div className='absolute grey' style={{ left: 30, bottom: 20 }}>0 /260</div>
          </div>



          <div className='full mt30' onClick={() => setModal(0)}>
            <div className="text16 bg-green white border-radius-base center ph15 cursor">Rate & Continue</div>
          </div>
          <br />

        </div>
      </Dialog>
    </div>
  );
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

function StoreBox(props) {
  const { date, startTime, endTime } = props;
  return (
    <div className='bg-light-orange-color p25 border-radius-large text-center mr10 min-width-130'>
      <div className='text18'>{date}</div>
      <div className='bg-orange white full pv4 mv10 border-radius-large'>Open hours</div>
      <div className='grey'>{startTime}</div>
      <div className='bg-orange white full pv4 mv10 border-radius-large'>Delivery hours</div>
      <div className='grey'>{endTime}</div>
    </div>
  )
}