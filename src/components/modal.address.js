import { makeStyles, Box, Dialog, Grid, Typography, TextField } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from '../configs/data';
import Slider from '@material-ui/core/Slider';
// import Autocomplete from "react-google-autocomplete";
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IMAGES } from '../configs/images';

const inputStyles = makeStyles(() => ({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  input: {
    fontSize: 16,
    '@media (max-width: 630px)': {
      fontSize: 12,
    },
  }
}))

const useStyles = makeStyles(() => ({
  marker: {
    '& img': {
      width: 40,
      height: 40,
      borderRadius: 8,
    }
  },
  map: {
    height: 650,
    width: 900,
    marginTop: -12,
    position: 'relative',
    '@media (max-width: 960px)': {
      height: 400,
      width: '100%',
      marginTop: 0,
    },
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
    height: 660,
  },
  text24: {
    fontSize: 24,
  },
  text17: {
    marginTop: 18,
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
    flexDirection: 'row',
  },
  row2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  row3: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 640px)': {
      flexDirection: 'column',
    },
  },
  pickBtn: {
    padding: '17px 30px',
    border: '1px solid #ddd',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  pickBtn2: {
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 30px',
    width: '100%',
    fontWeight: '400',
    '@media (max-width: 640px)': {
      width: 'calc(100% - 64px)',
    },
  },
  pin: {
    position: 'absolute',
    bottom: 50,
    right: 80,
    background: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: 12,
    opacity: 0.8,
  },
  circle: {
    width: 50,
    height: 36,
    borderRadius: 20,
    background: '#f7f8fc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#11c856',
    color: '#fff',
    height: 48,
    marginTop: 30,
    borderRadius: 4,
    cursor: 'pointer',
    textAlign: 'center'
  },
  circle2: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 3px 6px -1px rgba(0,0,0,0.25)',
  },
  textField: {
    width: '100%'
  },
  areaField: {
    padding: 12,
    background: '#f7f8fc',
    width: 'calc(100% - 30px)',
    marginTop: 10
  },
  label: {
    fontSize: 14,
    marginTop: 22,
    fontWeight: '600',
    color: '#7c7b8a',
    borderRadius: 4
  }
}));

export function ModalAddress(props) {

  const classes = useStyles();
  const { open, onClose } = props;
  const inputClasses = inputStyles();
  const [isEdit, setIsEdit] = useState(false);

  // const handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => {
  //       // props.onPosition(latLng)
  //     }
  //     )
  //     .catch(error => console.error('Error', error));
  // };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className={classes.dialog}
      maxWidth='md'
    >
      <div className={classes.dialogBox}>
        <img
          style={{ cursor: 'pointer', position: 'absolute', left: 10, top: 10 }}
          src={IMAGES.IconCloseMap}
          alt={'icon'}
          onClick={onClose}
        />
        <br />

        <Grid container className={classes.row}>

          {!isEdit && <Grid item md={6} xs={12} style={{ padding: '20px 30px' }}>
            <Box mb={3} mt={0} className={classes.text24} style={{ fontWeight: '600', }}>Address details</Box>
            <div className={classes.row}>
              <div className={classes.pickBtn} style={{ background: '#f0faf3', color: '#11c856' }}>Delivery</div>
              <div className={classes.pickBtn}>Pickup</div>
            </div>
            <Box mb={3} mt={-1} className={classes.text17} style={{ fontWeight: '600', }}>Search radius (miles)</Box>

            <Slider
              defaultValue={15}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={5}
              marks
              min={10}
              max={30}
            />

            <Box mt={3} className={classes.row} style={{ background: '#f7f8fc', height: 50, alignItems: 'center' }}>
              <div className={classes.circle2}>
                <div style={{ width: 10, height: 10, borderRadius: 5, background: '#000' }} />
              </div>
              <TextField
                placeholder={'Enter delivery address'}
                variant='standard'
                className={classes.textField}
                InputProps={{ classes: inputClasses }}
              />
              <img src={IMAGES.IconNavMap} alt='bx-nav' style={{ marginRight: 20 }} />
            </Box>

            {/* <Autocomplete
              apiKey={GOOGLE_API_KEY}
              onPlaceSelected={(place) => {
                handleSelect(place.formatted_address);
              }}
            /> */}

            <div className={classes.row2}>
              <CheckCircleIcon style={{ color: '#11c856' }} />
              <div className={classes.circle}>
                <HomeIcon style={{ color: '#11c856' }} />
              </div>
              <div style={{ marginLeft: 12, width: '100%' }}>
                <Typography variant='h4' style={{ fontWeight: '600' }}>Home</Typography>
                <Typography variant='h5'>8584 W Sherman Dr Portland, OR 97086...</Typography>
              </div>
              <div style={{ color: '#11c856', fontWeight: '600', cursor: 'pointer' }} onClick={() => setIsEdit(true)}>Edit</div>
            </div>

            <div className={classes.row2}>
              <RadioButtonUncheckedIcon style={{ color: '#11c856' }} />
              <div className={classes.circle}>
                <BusinessCenterIcon style={{ color: '#11c856' }} />
              </div>
              <div style={{ marginLeft: 12, width: '100%' }}>
                <Typography variant='h4' style={{ fontWeight: '600' }}>Home</Typography>
                <Typography variant='h5'>8584 W Sherman Dr Portland, OR 97086...</Typography>
              </div>
              <div style={{ color: '#11c856', fontWeight: '600', cursor: 'pointer' }} onClick={() => setIsEdit(true)}>Edit</div>
            </div>

            <div className={classes.row2}>
              <RadioButtonUncheckedIcon style={{ color: '#11c856' }} />
              <div className={classes.circle}>
                <LocationOnIcon style={{ color: '#11c856' }} />
              </div>
              <div style={{ marginLeft: 12, width: '100%' }}>
                <Typography variant='h4' style={{ fontWeight: '600' }}>Home</Typography>
                <Typography variant='h5'>8584 W Sherman Dr Portland, OR 97086...</Typography>
              </div>
              <div style={{ color: '#11c856', fontWeight: '600', cursor: 'pointer' }} onClick={() => setIsEdit(true)}>Edit</div>
            </div>

            <Box mt={3} style={{ color: '#11c856', alignItems: 'center' }} className={classes.row}>     
              <AddCircleOutlineIcon />
              <Typography variant='h5' style={{ marginLeft: 16, fontWeight: '600' }}>Add New Address</Typography>
            </Box>

            <div className={classes.btn}>
              Done
            </div>
            <br />

          </Grid>}

          {isEdit &&
            <Grid item md={6} xs={12} style={{ padding: '20px 30px' }}>
              <Box mb={3} mt={0} className={classes.text24} style={{ fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                <ArrowBackIcon style={{ marginRight: 12, cursor: 'pointer' }} onClick={() => setIsEdit(false)} /> Edit address details
              </Box>
              <TextField
                placeholder={'Address'}
                variant='standard'
                className={classes.areaField}
                InputProps={{ classes: inputClasses }}
              />
              <div className={classes.label}>Details (doors, apartment number)</div>
              <TextField
                placeholder={'B 23'}
                variant='standard'
                className={classes.areaField}
                InputProps={{ classes: inputClasses }}
              />
              <div className={classes.label}>Additional instructions for the courier</div>
              <TextField
                placeholder={'For example: "Door code 1234, 2nd floor"'}
                variant='standard'
                className={classes.areaField}
                InputProps={{ classes: inputClasses }}
              />
              <div className={classes.label}>Location name (only you see this)</div>
              <TextField
                placeholder={'Other'}
                variant='standard'
                className={classes.areaField}
                InputProps={{ classes: inputClasses }}
              />
              <div className={classes.label}>Location type</div>
              <Box mt={1} className={classes.row3}>
                <div className={classes.pickBtn2} style={{ background: '#f0faf3', color: '#11c856', border: '1px solid #11c856' }}><HomeIcon /><div>Home</div></div>
                <div className={classes.pickBtn2}><BusinessCenterIcon /><div>Work</div></div>
                <div className={classes.pickBtn2}><LocationOnIcon /><div>Other</div></div>
              </Box>

              <Box mt={-1} className={classes.row}>
                <div className={classes.btn} style={{ background: '#eaeff5', color: '#7c7b8a', width: 'calc(100% - 20px)', fontWeight: '600' }}>Cancel</div>
                <div className={classes.btn} style={{ width: 'calc(100% - 20px)', marginLeft: 20, fontWeight: '600' }}>Save address</div>
              </Box>
            </Grid>}

          <Grid item md={6} xs={12} className={classes.map}>
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
                  image={IMAGES.Img2Store}
                />
              }

            </GoogleMapReact>
            <div className={classes.pin}>
              <img src={IMAGES.IconNavigationhMap} alt="navigation" />
              <div style={{ marginLeft: 8 }}>You can correct location by dragging <br />the pin on the map.</div>
            </div>
          </Grid>

        </Grid>

      </div>
    </Dialog>

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

function valuetext(value) {
  return `${value}°C`;
}
