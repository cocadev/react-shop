import { Grid } from "@material-ui/core";
import { IMAGES } from "../../configs/images";

export function LandingJoin() {

  return (
    <div className='module10'>
      <Grid container>

        <Grid item xs={12} md={4}>
          <div className='box'>
            <div className='carBox'>
              <img src={IMAGES.Img9SliderProduct} alt={'opcar'} />
            </div>
            <div className='bottomBox'>
              <div className='title'>Join Lowkel as a Driver</div>
              <div className='description'>Be your own boss! enjoy flexibility, freedom and make reliable money working anytime, anywhere</div>
              <span className='btn'>Start earning</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className='box'>
            <div className='carBox' style={{ background: '#e4f9ff' }}>

            </div>
            <div className='bottomBox'>
              <div className='title'>Join Lowkel as a Partner</div>
              <div className='description'>Grow your business and reach new customers by partnering with us</div>
              <span className='btn'>Sign up your store</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className='box'>
            <div className='carBox' style={{ background: '#fffaf0' }}>
            </div>
            <div className='bottomBox'>
              <div className='title'>Join Lowkel Team</div>
              <div className='description'>Be your own boss! enjoy flexibility, freedom and make reliable money working anytime, anywhere</div>
              <span className='btn'>Join us</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}