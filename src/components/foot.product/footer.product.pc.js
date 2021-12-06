import { Grid, makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import { IMAGES } from "../../configs/images";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 80,
    width: 1600,
    marginBottom: 40,
    '@media (max-width: 1600px)': {
      width: 1200,
    },
    '@media (max-width: 1200px)': {
      width: 800,
    },
    '@media (max-width: 870px)': {
      width: '100%',
    },
    '@media (max-width: 670px)': {
      width: 'calc(100% - 40px)',
      paddingLeft: 40
    },
  },
  bottom: {
    fontSize: 18,
    lineHeight: 1
  },
  logo: {
    width: 220,
    '@media (max-width: 960px)': {
      width: 160
    },
  },
  bottomIng: {
    '& div:nth-child(1)': {
      fontSize: 24,
      fontWeight: 'bold',
      '@media (max-width: 960px)': {
        fontSize: 17,
      },
    },
    '& div:nth-child(2)': {
      fontSize: 18,
      lineHeight: 3,
      marginTop: 20,
      cursor: 'pointer',
      '&:hover': {
        color: '#21A453',
        textDecoration: 'underline'
      },
      '@media (max-width: 960px)': {
        fontSize: 13,
      },
    },
    '& div:nth-child(3)': {
      fontSize: 18,
      lineHeight: 3,
      cursor: 'pointer',
      '&:hover': {
        color: '#21A453',
        textDecoration: 'underline'
      },
      '@media (max-width: 960px)': {
        fontSize: 13,
      },
    },
    '& div:nth-child(4)': {
      fontSize: 18,
      lineHeight: 3,
      cursor: 'pointer',
      '&:hover': {
        color: '#21A453',
        textDecoration: 'underline'
      },
      '@media (max-width: 960px)': {
        fontSize: 13,
      },
    },
    '& div:nth-child(5)': {
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 3,
      '&:hover': {
        color: '#21A453',
        textDecoration: 'underline'
      },
      '@media (max-width: 960px)': {
        fontSize: 13,
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
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 2,
    marginTop: 12,
    '@media (max-width: 960px)': {
      fontSize: 26,
    },
  },
  p2: {
    fontSize: 18,
    fontWeight: 'normal',
    '@media (max-width: 960px)': {
      fontSize: 15,
    },
  },
  p3: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 2,
    marginTop: 20,
    '@media (max-width: 960px)': {
      fontSize: 15,
    },
  },
  p4: {
    marginTop: 100,
    fontWeight: '600'
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& div': {
      marginLeft: 12,
      marginRight: 12
    },
    '@media (max-width: 560px)': {
      flexDirection: 'column',
      lineHeight: 2,
      textAlign: 'center',
     
    },
  },
  btn: {
    marginLeft: 30,
    padding: '8px 20px',
    color: '#fff',
    borderRadius: 16,
    background: '#11c856',
    fontSize: 14,
  },
  row3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center', 
    marginTop: -20,
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
}));

export function FooterProduct(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item sm={12} md={5}>
          <img src={IMAGES.logo} className={classes.logo} alt={'logo'} />
          <div className={classes.p1}>+1 (503) 530 8205</div>
          <div className={classes.p2}>hello@lowkel.com</div>
          <div className={classes.p3}>12530 SW Hall Blvd Portland, OR 97223</div>
        </Grid>
        <Grid item sm={12} md={7}>
          <div container className={classes.row}>
            <div className={classes.bottomIng}>
              <div>Discover</div>
              <div>Home</div>
              <div>How Marketplace Works</div>
              <div>Marketplace FAQ</div>
              <div>Blog</div>
            </div>
            <div className={classes.bottomIng}>
              <div>Business</div>
              <div>Drivers & Shoppers</div>
              <div>Merchants</div>
              <div>Careers</div>
            </div>
            <div className={classes.bottomIng}>
              <div>Details</div>
              <div>About Lowkel</div>
              <div>About Marketplace</div>
              <div>Contact Us</div>
            </div>
            <div className={classes.bottomIng}>
              <div>Legal</div>
              <div>COVID-19</div>
              <div>Terms of Service</div>
              <div>Privacy & Cookies</div>
              <div>Consumer Privacy Act</div>
            </div> 
             
          </div>
        </Grid>
      </Grid>

      <div className={classes.row3}>
          <div className={classes.p4}>Copyright © 2020 Lowkel Marketplace, Inc. All rights reserved.</div>
          <div className={clsx(classes.p4, classes.bottomRow)}>
            <div >Facebook</div>
            <div >Linkedin</div>
            <div >Twitter</div>
            <div >Instagram</div>
            <div className={classes.btn}><span>To the top</span></div>
          </div>
      </div>
    </div>
  );
}
