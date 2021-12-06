import { Grid, Box } from "@material-ui/core";
import { IMAGES } from "../../../configs/images";

export function Module9PC() {

  return (
    <div className='module9'>
      <div className={'title'} style={{ color: '#11c856' }}>THE NOW</div>
      <div className={'description'}>Stories, Trends and Happenings</div>

      <div className={'row1'}>
        {MyItems.map((item, index) =>
          <span key={index} style={{ color: '#bebdc5', cursor: 'pointer' }}>{item}</span>)}
      </div>

      <Grid container spacing={8} className={'row2'}>

        <Grid item md={6} sm={12} className={'rowing'}>
          <div style={{ width: '100%' }}>
            <div className={'newsText'}>News</div>
            <div className={'newsTitle'}>
              Spruce Box<br />
              Coronavirus (COVID-19)<br />
              Response
            </div>
          </div>
          <img src={IMAGES.ImgLandingBg1} alt='food' />
        </Grid>

        <Grid item md={6} sm={12} className={'rowing'}>
          <div style={{ width: '100%' }}>
            <div className={'newsText'}>Insight</div>
            <div className={'newsTitle'}>
              Delivering Support to<br />
              Those Most In Need
            </div>
          </div>
          <img src={IMAGES.ImgLandingBg2} alt='food' />

        </Grid>

      </Grid>
      <Box className={'btn'}>Read Stories</Box>
    </div>
  );
}

const MyItems = ['All', 'Local Trends', 'Local Fashionists', 'Local Materials', 'Local Delivery']