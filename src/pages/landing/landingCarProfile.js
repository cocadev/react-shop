import { Grid, Typography, Box } from "@material-ui/core";
import { IMAGES } from "../../configs/images";
import useWindowSize from "../../utils/useWindowSize";

export function LandingCarProfile() {
  const {width} = useWindowSize();
  return (
    <div className='module3'>
      <img className='logoHeader' src={IMAGES.logo} alt="header logo" />

      <Grid container className='mt60' spacing={12}>
        <Grid item md={7} sm={12} className='center mt20'>
          <div className='text64'>A new type of buy local.</div>
          <img src={IMAGES.IconCarSliderProduct} alt="header logo" className="carImg" />
        </Grid>
        <Grid item md={5} sm={12}>
          <div className='carTitle'>
            <b style={{ color: '#31333b' }}>Lowkel features all sorts of items</b> from a diverse variety of community retailers so that you can shop easily from your mobile device.
            We're proud to offer you the best of your area and its various neighborhoods, all at your fingertips.
          </div>

          {width > 430 && <Typography variant="h5" style={{ marginTop: 40, color: '#7c7b8a' }}>
            We're your <b style={{ color: '#31333b' }}>Local Online Marketplace</b> to make ordering from small, local, and regional business owners simpler than ever.
            <b style={{ color: '#31333b' }}> We connect you to local shops</b>, so you can shop in and support your community from the comfort of your home. <br /><br />
            <b style={{ color: '#11c856' }}>Shopping, buying, and supporting has never been more fun</b>, and buying local has never been easier.
          </Typography>}
        </Grid>

        <Box mt={6} className={'module3-row'}>
          <div className={'center'}>
            <div className={'roundBox'}>1</div>
            <div className='circleTitle'>Download the App</div>
            <div className='circleDesc'>Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do.</div>
          </div>

          {width < 430 && <img src={IMAGES.IconLineLineLanding} className='mt10' alt='line'/>}

          <div className={'center'}>
            <div className={'roundBox'}>2</div>
            <div className='circleTitle'>Click & Check Out</div>
            <div className='circleDesc'>Velit officia consequat duis enim <br />velit mollit execitation veniam.</div>
          </div>

          {width < 430 && <img src={IMAGES.IconLineLineLanding} className='mt10' alt='line'/>}

          <div className={'center'}>
            <div className={'roundBox2'}>3</div>
            <div className='circleTitle'>Await Your Delivery</div>
            <div className='circleDesc'>Vestibulum eu quam nec neque <br />pellentesque efficitur id eget nisl.</div>
          </div>

          {width < 430 && <img src={IMAGES.IconLineLineLanding} className='mt10' alt='line'/>}

          <div className={'center'}>
            <div className={'roundBox2'}>4</div>
            <div className='circleTitle'>Be Delighted</div>
            <div className='circleDesc'>Laborum magna nulla duis <br />ullamco cillum dolor vestibulum.</div>
          </div>
        </Box>
      </Grid>
    </div>
  );
}
