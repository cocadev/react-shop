import { makeStyles, Box, Dialog, TextField } from '@material-ui/core';
import clsx from 'clsx';
import Footer from '../components/foot.product';
import { HeaderMap } from '../components/header.map';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
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
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    border: '1px solid #eaeff5',
    padding: 20,
    marginTop: 20,
    borderRadius: 8
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
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 60
  },
  text16: {
    fontSize: 16,
    fontWeight: '600',
  },
  boxImg: {
    border: '1px solid #e7e8ec',
    padding: 11,
    borderRadius: 8,
    width: 54,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusBox: {
    border: '1px dashed #e7e8ec',
    borderRadius: 4,
    height: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  dialog: {
    padding: 12,
    height: 'calc(100% - 100px)',
    marginTop: '3%',
    '@media (max-width: 830px)': {
      height: 'calc(100% - 80px)',
      marginTop: '7%',
    },
  },
  dialogBox: {
    padding: '16px',
    width: 520,
    '@media (max-width: 640px)': {
      width: 'calc(100% - 36px)',
    },
  },
  TextField: {
    marginTop: 10,
    width: 'calc(100% - 36px)',
    border: '2px solid #eaeff5',
    padding: '8px 16px',
    borderRadius: 3,
    '@media (max-width: 630px)': {
      padding: '11px 22px',
    },
  },
  removeBtn: {
    padding: '14px 12px',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: 30,
    background: "#f7f8fc",
    color: '#e8543f',
  },
  square: {
    width: 45,
    height: 45,
    borderRadius: 2,
    border: '1px solid #e5e5e5'
  },
  cardIcon: {
    borderRadius: 5,
    width: 64,
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f7f8fc'
  }
}))

export function Billing() {

  const classes = useStyles();
  const inputClasses = inputStyles();

  const [open, setOpen] = useState();

  return (
    <div className={classes.root}>
      <HeaderMap background={true} />
      <div className={classes.bgImg} />
      <div className={classes.container}>
        <div className={classes.main}>

          <div className={classes.text64}>Billing</div>
          <div className={classes.text24}>2 addresses</div>

          <div style={{ marginTop: 120 }}>
            <div className={classes.box}>
              <div className={classes.boxImg}>
                <img src={IMAGES.IconVisa} alt={'visa'} />
              </div>
              <Box mt={5} className={classes.text16}>•••• 6103</Box>
              <Box mt={2} className={clsx(classes.row, classes.text16)} style={{ justifyContent: 'space-between' }}>
                <span>Saannah Jones</span>
                <span>07/21</span>
              </Box>
            </div>

            <div className={classes.box}>
              <div className={classes.boxImg}>
                <img src={IMAGES.IconPaypal} alt={'visa'} />
              </div>
              <Box mt={5} className={classes.text16}>•••• 6103</Box>
              <Box mt={2} className={clsx(classes.row, classes.text16)} style={{ justifyContent: 'space-between' }}>
                <span>Saannah Jones</span>
                <span>07/21</span>
              </Box>
            </div>

            <Box className={classes.row} mt={3}>
              <div className={classes.plusBox} style={{ marginRight: 9 }}>
                <AddIcon />
                <div>Add a New</div>
                <div>Credit / Debit</div>
                <div>Card</div>
              </div>
              <div className={classes.plusBox} style={{ marginLeft: 9 }}>
                <AddIcon />
                <div>Add a New</div>
                <div>Paypal Account</div>
              </div>
            </Box>

            <div className={classes.btn} onClick={() => setOpen(true)}>
              Add New Card
            </div>

          </div>

        </div>

        <div className='full'>
          <Footer />
        </div>

        <Dialog
          onClose={() => setOpen(false)}
          open={open}
          className={classes.dialog}
        >
          <div className={classes.dialogBox}>
            <div className={classes.row} style={{ justifyContent: 'flex-end' }}>
              <img style={{ cursor: 'pointer' }} src={IMAGES.IconCloseMap} alt={'icon'} onClick={() => setOpen(false)} /><br />
            </div>

            <Box className={classes.center} mt={-2}>
              <Box className={classes.cardIcon}>
                <img src={IMAGES.IconCardBoxBill} alt={'img-card'} />
              </Box>
            </Box>

            <div className={classes.text24} style={{ marginBottom: 10, marginTop: 18 }}>New Card</div>
            <TextField
              className={classes.TextField}
              placeholder={'Name'}
              defaultValue={'Savannah Jones'}
              variant='standard'
              InputProps={{ classes: inputClasses }}
            />
            <TextField
              className={classes.TextField}
              placeholder={'Phone Number'}
              defaultValue={'4030 5939 1929 6103'}
              InputProps={{ classes: inputClasses }}
            />
            <TextField
              className={classes.TextField}
              placeholder={'CVC'}
              defaultValue={'07 / 21'}
              InputProps={{ classes: inputClasses }}
            />

            <Box mt={1} style={{ color: '#7c7b8a', fontSize: 12 }}>e.g. 11/2020</Box>

            <TextField
              type="password"
              className={classes.TextField}
              placeholder={'Password'}
              defaultValue={'324'}
              InputProps={{ classes: inputClasses }}
            />
            <TextField
              className={classes.TextField}
              placeholder={'Name'}
              defaultValue={'4517 Washington Ave. Manchester, Ken...'}
              InputProps={{ classes: inputClasses }}
            />

            <Box className={classes.row} mt={2}>
              <div className={classes.square}></div>
              <div className={classes.text16} style={{ marginLeft: 18 }}> Use Same Address as for Deliveries</div>
            </Box>

            <div className={classes.removeBtn}>
              Remove Method
            </div>
          </div>



        </Dialog>

      </div>
    </div>
  );
}

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