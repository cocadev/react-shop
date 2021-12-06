import { makeStyles } from "@material-ui/core";
import { IMAGES } from "../../../configs/images";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 70,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    marginBottom: 40
  },
  rounded: {
    width: 70,
    height: 70,
    borderRadius: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0faf3',
  },
  rounded2: {
    width: 70,
    height: 70,
    borderRadius: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0faf3',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  img: {
    width: 250,
    marginTop: 30
  },
  leftPane: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: -50,
    alignItems: 'center',
    marginBottom: 30,
    textAlign: 'center',
  },
  rightPane: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  p1: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12
  },
  p2: {
    marginTop: 16,
    textAlign: 'center',
    color: '#7C7B8A',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.2
  }
}));

export function Module6Mobile() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className='text28 text-center'>Smart Shopping, Made Easy. Shop with Us.</div>
      <div className='text16 text-center mt20 grey font-weight-500'>You click, we shop! We love making your life easy.</div>
     
      <center>
        <img src={IMAGES.Img13SliderProduct} alt={'phone x'} className={classes.img} />
      </center>

      <div className='center mt30'>
        <div className={classes.rounded}>
          <img src={IMAGES.Img14SliderProduct} alt={'phone x'} />
        </div>
        <div className={classes.p1}>Support Local Businesses</div>
        <div className={classes.p2}>A Commitment to Sustainable, diverse, <br />and Local Businesses.</div>
      </div>


      <div className='center mt30'>
        <div className={classes.rounded}>
          <img src={IMAGES.Img19SliderProduct} alt={'phone x'} />
        </div>
        <div className={classes.p1}>Shop Local From Home</div>
        <div className={classes.p2}>Hometown products and international <br />specialties without leaving home.</div>
      </div>



      <div className='center mt30'>
        <div className={classes.rounded}>
          <img src={IMAGES.Img15SliderProduct} alt={'phone x'} />
        </div>
        <div className={classes.p1}>In-App Billing & Payment Features</div>
        <div className={classes.p2}>Hassle free - No marked up pricing, <br />all prices are in-store prices.</div>
      </div>


      <div className='center mt30'>
        <div className={classes.rounded2}>
          <img src={IMAGES.Img17SliderProduct} alt={'phone x'} />
        </div>
        <div className={classes.p1}>Everything You Need</div>
        <div className={classes.p2}>Order tracking, order adjustments, <br />and item replacements.</div>
      </div>

      <div className='center mt30'>
        <div className={classes.rounded2}>
          <img src={IMAGES.Img18SliderProduct} alt={'phone x'} />
        </div>
        <div className={classes.p1}>24/7 Live Chatting Support</div>
        <div className={classes.p2}>Live chatting with our specialized team, <br />anytime you need help.</div>
      </div>

      <div className='center mt30'>
        <div className={classes.rounded2}>
          <img src={IMAGES.Img16SliderProduct} alt={'phone x'} />
        </div>
        <div className={classes.p1}>Personal Shopping Program</div>
        <div className={classes.p2}>From store to your doorway in an instant, <br />and all you have to do is say it.</div>
      </div>
    </div>
  );
}
