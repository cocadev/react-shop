import { makeStyles, Box, TextField } from '@material-ui/core';
import clsx from 'clsx';
import Footer from '../components/foot.product';
import { HeaderMap } from '../components/header.map';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
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
  container: {
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 80
  },
  main: {
    width: 700,
    '@media (max-width: 700px)': {
      width: '100%',
    },
  },
  bgImg: {
    zIndex: -1,
    top: 0,
    position: 'absolute',
    width: '100%',
    height: 326,
    backgroundRepeat: 'no-repeat',
    background: '#f7f8fc'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    background: '#11c856',
    padding: '14px 12px',
    borderRadius: 4,
    cursor: 'pointer',
    color: '#fff',
    textAlign: 'center',
    marginTop: 30
  },
  box: {
    borderLeft: '3px solid #e8543f',
    padding: 21,
    marginTop: 0,
    borderRadius: 2,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)'
  },
  boxImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f7f8fc',
    width: 40,
    height: 40,
    borderRadius: 20
  },
  rBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e8543f',
    width: 30,
    height: 30,
    borderRadius: 15
  },
  text64: {
    fontWeight: '700',
    fontSize: 64,
    textAlign: 'center',
    marginTop: -60
  },
  text24: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    '@media (max-width: 700px)': {
      fontSize: 18,
    },
  },
  text16: {
    fontSize: 16,
    fontWeight: '600',
    '@media (max-width: 700px)': {
      fontSize: 14,
    },
  },
  yBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ecb94f',
    color: '#fff',
    width: 105,
    height: 26,
    fontWeight: '400'
  },
  gBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #eaeff5',
    width: 105,
    height: 26,
    fontWeight: '400',
    marginLeft: 20
  },
  mapInput: {
    border: '1px solid #e5eff5',
    width: 'calc(100% - 30px)',
    padding: '12px 15px',
    marginBottom: 30,
  }
}))

export function Orders() {

  const classes = useStyles();
  const inputClasses = inputStyles();

  return (
    <div className={classes.root}>
      <HeaderMap background={true} isListMapDisable={true}/>
      <div className={classes.bgImg} />
      <div className={classes.container}>
        <div className={classes.main}>

          <div className={classes.text64}>Orders</div>
          <Box mt={3} className={classes.text24}>1 Active</Box>

          <div style={{ marginTop: 110 }}>

            <Box mb={3} className={classes.row} style={{ justifyContent: 'center' }}>
              <span className={classes.text24}>Active Orders</span>
              <div style={{ width: 30 }} />
              <span className={classes.text24} style={{ color: '#ddd' }}>Past Orders</span>
            </Box>

            <TextField
              variant='standard'
              className={classes.mapInput}
              InputProps={{ classes: inputClasses }}
              placeholder="Search for an Order"
            />

            <div className={classes.box}>

              <Box className={clsx(classes.row, classes.text16)} style={{ justifyContent: 'space-between' }}>
                <span className={classes.text24}>Order #5020</span>
                <span className={classes.text24} style={{ color: '#21a453' }}>$ 13.02</span>
              </Box>

              <Box mt={2} className={classes.row} style={{ background: '#f7f8fc', borderRadius: 4, padding: '15px 18px' }}>
                <div className={classes.rBox}>
                  <ErrorOutlineIcon style={{ color: '#fff', fontSize: 16 }} />
                </div>
                <span className={classes.text16} style={{ marginLeft: 12 }}>Your shopper has suggested changes. Please review.</span>
              </Box>

              <Box mt={2} className={classes.row}>
                <div className={classes.boxImg}>
                  <img src={IMAGES.IconHome1Map} alt={'visa'} />
                </div>
                <span className={classes.text16} style={{ marginLeft: 12 }}>2861 Fairview St, Portland ...</span>
              </Box>

              <Box mt={2} className={clsx(classes.row, classes.text16)} style={{ justifyContent: 'space-between' }}>
                <div className={classes.row}>
                  <span className={classes.yBox}>In Progress</span>
                  <span className={classes.gBox}>~ 20 Min</span>
                </div>
                <span className={classes.text16}>20: 39</span>
              </Box>
            </div>
          </div>
        </div>

        <div className='full'>
          <Footer />
        </div>

      </div>
    </div>
  );
}