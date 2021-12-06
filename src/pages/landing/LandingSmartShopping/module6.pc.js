import { Grid, makeStyles, Typography } from "@material-ui/core";
import { IMAGES } from "../../../configs/images";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 70,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 110px',
    '@media (max-width: 1650px)': {
      padding: '0 50px',
    },
  },
  rounded: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0faf3',
    '@media (max-width: 1100px)': {
      width: 70,
      height: 70,
      borderRadius: 35,    
    },
  },
  rounded2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0faf3',
    '@media (max-width: 1100px)': {
      width: 70,
      height: 70,
      borderRadius: 35,        
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  img: {
    width: 400,
    '@media (max-width: 1650px)': {
      width: 300,
    },
    '@media (max-width: 1100px)': {
      width: 250,
    },
  },
  leftPane: {
    display: 'flex', 
    flexDirection:'column', 
    alignItems: 'flex-end', 
    textAlign: 'right', 
    marginTop: -50,
    '@media (max-width: 960px)': {
      alignItems: 'center', 
      marginBottom: 30,
      textAlign: 'center', 
    },
  },
  rightPane: {
    marginTop: -50,
    '@media (max-width: 960px)': {
      display: 'flex', 
      flexDirection:'column', 
      justifyContent: 'center',
      alignItems: 'center', 
      marginTop: 30,
      marginBottom: 30,
      textAlign: 'center', 
    },
  }
}));

export function Module6Pc() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h1' style={{ textAlign: 'center',  }}>Smart Shopping, Made Easy. <br />Shop with Us.</Typography>
      <Typography variant='h4' style={{ marginTop: 20, marginBottom: 50, color: '#7c7b8a' }}>You click, we shop! We love making your life easy.</Typography>

      <Grid container display='flex' alignItems='center'>
        <Grid item md={4} xs={12} className={classes.leftPane}>
          <div className={classes.row} style={{marginRight: -40}}>
            <div>
              <Typography variant='h3' style={{ fontWeight: '600' }}>Support Local Businesses</Typography>
              <Typography variant='h5' style={{ color: '#7c7b8a', marginTop: 12 }}>A Commitment to Sustainable, diverse, <br />and Local Businesses.</Typography>
            </div>

            <div className={classes.rounded}>
              <img src={IMAGES.Img14SliderProduct} alt={'phone x'} />
            </div>
          </div>

          <div className={classes.row}>
            <div>
              <Typography variant='h3' style={{ fontWeight: '600' }}>Shop Local From Home</Typography>
              <Typography variant='h5' style={{ color: '#7c7b8a', marginTop: 12 }}>Hometown products and international <br />specialties without leaving home.</Typography>
            </div>

            <div className={classes.rounded}>
              <img src={IMAGES.Img19SliderProduct} alt={'phone x'} />
            </div>
          </div>

          <div className={classes.row} style={{marginRight: -40}}>
            <div>
              <Typography variant='h3' style={{ fontWeight: '600' }}>In-App Billing & Payment Features</Typography>
              <Typography variant='h5' style={{ color: '#7c7b8a', marginTop: 12 }}>Hassle free - No marked up pricing, <br />all prices are in-store prices.</Typography>
            </div>

            <div className={classes.rounded}>
              <img src={IMAGES.Img15SliderProduct} alt={'phone x'} />
            </div>
          </div>
        </Grid>

        <Grid item md={4} xs={12}>
          <center>
            <img src={IMAGES.Img13SliderProduct} alt={'phone x'} className={classes.img}/>
          </center>
        </Grid>

        <Grid item md={4} xs={12} className={classes.rightPane}>
          <div className={classes.row} style={{marginLeft: -40}}>
            <div className={classes.rounded2}>
              <img src={IMAGES.Img17SliderProduct} alt={'phone x'} />
            </div>
            <div>
              <Typography variant='h3' style={{ fontWeight: '600' }}>Everything You Need</Typography>
              <Typography variant='h5' style={{ color: '#7c7b8a', marginTop: 12 }}>Order tracking, order adjustments, <br />and item replacements.</Typography>
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.rounded2}>
              <img src={IMAGES.Img18SliderProduct} alt={'phone x'} />
            </div>
            <div>
              <Typography variant='h3' style={{ fontWeight: '600' }}>24/7 Live Chatting Support</Typography>
              <Typography variant='h5' style={{ color: '#7c7b8a', marginTop: 12 }}>Live chatting with our specialized team, <br />anytime you need help.</Typography>
            </div>
          </div>

          <div className={classes.row} style={{marginLeft: -40}}>
            <div className={classes.rounded2}>
              <img src={IMAGES.Img16SliderProduct} alt={'phone x'} />
            </div>
            <div>
              <Typography variant='h3' style={{ fontWeight: '600' }}>Personal Shopping Program</Typography>
              <Typography variant='h5' style={{ color: '#7c7b8a', marginTop: 12 }}>From store to your doorway in an instant, <br />and all you have to do is say it.</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
