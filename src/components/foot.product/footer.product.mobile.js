import { makeStyles } from "@material-ui/core";
import { IMAGES } from "../../configs/images";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 80,
    marginBottom: 40,
    padding: 16,
  },
  bottom: {
    fontSize: 18,
    lineHeight: 1
  },
  logo: {
    width: 120,
  },
  bottomIng: {
    '& div:nth-child(1)': {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,

    },
    '& div:nth-child(2)': {
      fontSize: 16,
      lineHeight: 2,
      marginTop: 10,
      cursor: 'pointer',
      fontWeight: '500',
      '&:hover': {
        color: '#21A453',
        textDecoration: 'underline'
      },
    },
    '& div:nth-child(3)': {
      fontSize: 16,
      lineHeight: 2,
      cursor: 'pointer',
      fontWeight: '500',
      '&:hover': {
        color: '#21A453',
        textDecoration: 'underline'
      },
    },
    '& div:nth-child(4)': {
      fontSize: 16,
      lineHeight: 2,
      cursor: 'pointer',
      fontWeight: '500',
      '&:hover': {
        color: '#21A453',
        textDecoration: 'underline'
      },
    },
    '& div:nth-child(5)': {
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 2,
      '&:hover': {
        color: '#21A453',
        textDecoration: 'underline'
      },
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%'
  },
  bottomTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 80
  },
  p1: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 2,
    marginTop: 12,
    textAlign: 'center'
  },
  p2: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center'
  },
  p3: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 2,
    marginTop: 10,
    textAlign: 'center'
  },
  p4: {
    marginTop: 26,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& div': {
      marginLeft: 12,
      marginRight: 12
    },
  },
  btn: {
    padding: '6px 20px',
    color: '#fff',
    borderRadius: 26,
    marginTop: -10,
    background: '#11c856',
    fontSize: 12,
    width: 50
  },
  row3: {
    marginTop: -20,
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    fontSize: 13,
    fontWeight: '500',
  },
  greyBottom: {
    marginTop: 10,
    height: 1,
    backgroundColor: '#E2E4E8'
  }


}));

export function FooterProductMobile() {

  const classes = useStyles();
  const [clickNumber, setClickNumber] = useState(-1);

  return (
    <div className={classes.root}>
      <div className={classes.greyBottom} />
      <div className='center mt30'>
        <img src={IMAGES.logo} className={classes.logo} alt={'logo'} />
      </div>
      <div className={classes.p1}>+1 (503) 530 8205</div>
      <div className={classes.p2}>hello@lowkel.com</div>
      <div className={classes.p3}>12530 SW Hall Blvd Portland, OR 97223</div>

      <div>
        <div className={classes.bottomIng}>
          <div className='row align-center justify-between'>
            Discover
            {clickNumber === 0 ? <ExpandLessIcon
              className={'green'}
              onClick={() => setClickNumber(clickNumber === 0 ? -1 : 0)}
            />
              : <ExpandMoreIcon
                className={'black'}
                onClick={() => setClickNumber(clickNumber === 0 ? -1 : 0)}
              />}
          </div>
          {clickNumber === 0 && <div>Home</div>}
          {clickNumber === 0 && <div>How Marketplace Works</div>}
          {clickNumber === 0 && <div>Marketplace FAQ</div>}
          {clickNumber === 0 && <div>Blog</div>}
        </div>
        <div className={classes.greyBottom} />

        <div className={classes.bottomIng}>
          <div className='row align-center justify-between'>
            Business
            {clickNumber === 1 ? <ExpandLessIcon
              className={'green'}
              onClick={() => setClickNumber(clickNumber === 1 ? -1 : 1)}
            />
              : <ExpandMoreIcon
                className={'black'}
                onClick={() => setClickNumber(clickNumber === 1 ? -1 : 1)}
              />}
          </div>
          {clickNumber === 1 && <div>Drivers & Shoppers</div>}
          {clickNumber === 1 && <div>Merchants</div>}
          {clickNumber === 1 && <div>Careers</div>}
        </div>
        <div className={classes.greyBottom} />

        <div className={classes.bottomIng}>
          <div className='row align-center justify-between'>
            Details
            {clickNumber === 2 ? <ExpandLessIcon
              className={'green'}
              onClick={() => setClickNumber(clickNumber === 2 ? -1 : 2)}
            />
              : <ExpandMoreIcon
                className={'black'}
                onClick={() => setClickNumber(clickNumber === 2 ? -1 : 2)}
              />}
          </div>
          {clickNumber === 2 && <div>About Lowkel</div>}
          {clickNumber === 2 && <div>About Marketplace</div>}
          {clickNumber === 2 && <div>Contact Us</div>}
        </div>
        <div className={classes.greyBottom} />

        <div className={classes.bottomIng}>
          <div className='row align-center justify-between'>
            Legal
            {clickNumber === 3 ? <ExpandLessIcon
              className={'green'}
              onClick={() => setClickNumber(clickNumber === 3 ? -1 : 3)}
            />
              : <ExpandMoreIcon
                className={'black'}
                onClick={() => setClickNumber(clickNumber === 3 ? -1 : 3)}
              />}
          </div>
          {clickNumber === 3 && <div>COVID-19</div>}
          {clickNumber === 3 && <div>Terms of Service</div>}
          {clickNumber === 3 && <div>Privacy & Cookies</div>}
          {clickNumber === 3 && <div>Consumer Privacy Act</div>}
        </div>

      </div>

      <div >
        <div className={classes.social}>
          <div >Facebook</div>
          <div >Linkedin</div>
          <div >Twitter</div>
          <div >Instagram</div>
        </div>
        <div className={classes.p4}>Copyright © 2020 Lowkel Marketplace, Inc.<br /> All rights reserved.</div>

        <br />
        <div className='center'>
          <div className={classes.btn}>To the top</div>

        </div>
      </div>
    </div>
  );
}
