import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../configs/images";
import { useHistory } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    padding: '0 48px',
    top: 0,
    left: 0,
    right: 0,
    marginTop: 20,
    '@media (max-width: 1300px)': {
      padding: '0 16px',
      marginTop: 12
    },
    '@media (max-width: 920px)': {
      padding: '0 22px',
      marginTop: 12
    },
  },
  underLine: {
    textDecoration: 'none'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowMobile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '@media (max-width: 920px)': {
      display: 'none'
    },
  },
  button: {
    background: '#11C856',
    borderRadius: 28,
    color: '#fff',
    fontSize: 18,
    padding: '12px 34px',
    textAlign: 'center',
    cursor: 'pointer',
    '@media (max-width: 1000px)': {
      borderRadius: 18,
      fontSize: 15,
      padding: '6px 12px'
    },
  },
  headerText: {
    display: 'block',
    fontSize: 18,
    color: '#31333B',
    '@media (max-width: 920px)': {
      display: 'none',
    },
  },
  loginTitle: {
    textAlign: 'center',
    marginRight: 50,
    textDecoration: 'none',
    color: '#31333B',
    fontSize: 18,
    '@media (max-width: 1300px)': {
      marginRight: 25
    },
    '@media (max-width: 600px)': {
      marginRight: 20
    },
  },
  m32: {
    margin: '0 32px'
  },
  logoHeader: {
    width: 180,
    '@media (max-width: 920px)': {
      width: 160
    },
  },
  arrowUp: {
    position: 'absolute',
    right: 24,
    top: 7,
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid #11C856'
  },
  dropdown: {
    position: 'relative',
    display: 'none',
    background: '#11C856',
    color: '#fff',
    padding: 12,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 920px)': {
      display: 'block',
    },
  },
  dropdownContent: {
    padding: 15,
    position: 'absolute',
    minWidth: 210,
    overflow: 'auto',
    zIndex: 1,
    marginTop: 24,
    right: -15,
    background: '#fff',
  },
  dropdownContainer: {
    border: '2px solid #13BB53',
    boxShadow: '0px 5px 12px 0px rgba(0,0,0,0.2)',
    '& div': {
      color: '#000',
      padding: '12px 8px',
    },
  },
  dropbtn: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginTop: -3,
      '@media (max-width: 600px)': {
        display: 'none',
      },
    }
  }
}));

export function HeaderAuth() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  return (
    <div className={classes.header}>
      <Link to="/">
        <img className={classes.logoHeader} src={IMAGES.logo} alt="header logo" />
      </Link>
      <div className={classes.row}>
        <p className={classes.row}><span className={classes.headerText}>For Merchants</span></p>
        <p className={clsx(classes.row, classes.m32)}><span className={classes.headerText}>For Drivers & Shoppers</span></p>
        <p className={classes.headerText}>How Marketplace Works</p>
      </div>

      <div className={classes.rowMobile}>
        <Link className={classes.loginTitle} to="/login">Log In</Link>
        <Link to="/products" className={classes.underLine}><div className={classes.button}>Get Started</div></Link>
      </div>

      <div className={classes.dropdown}>

        <div onClick={handleClick} className={classes.dropbtn}>
          {!anchorEl ? <MenuIcon /> : <CloseIcon/>} &nbsp;<span> Menu </span>
        </div>

        {anchorEl && <div className={classes.dropdownContent}>
          <div className={classes.arrowUp}></div>
          <div className={classes.dropdownContainer}>
            <div onClick={handleClick}>For Merchants</div>
            <div onClick={handleClick}>For Drivers & Shoppers</div>
            <div onClick={handleClick}>How Marketplace Works</div>
            <div onClick={() => { handleClick(); history.push('/') }}>Log In</div>
            <div onClick={() => { handleClick(); history.push('/products') }}>Get Started</div>
          </div>
        </div>}

      </div>
    </div>
  );
}
