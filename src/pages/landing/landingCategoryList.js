import { Grid } from "@material-ui/core";
import { IMAGES } from "../../configs/images";
import useWindowSize from "../../utils/useWindowSize";

export function LandingCategoryList() {

  const { width } = useWindowSize();

  return (
    <div className='module2'>
      {width > 450 ? <Grid container>
        <Grid item md={9} xs={12}>
          <Grid container>
            <Grid item md={8} xs={12}>
              <div className='box mr30'>
                <div className='title1'>most  popular</div>
                <div className='title2'> Order Your Favorite <br /> Products</div>
                <span className='title3'>Shop now</span>
                <img className='vegetableImg' src={IMAGES.IconVegetableSliderProduct} alt={'vegetable'} />
              </div>
            </Grid>
            <Grid item md={4} xs={12} className='box' style={{ background: '#e4f9ff' }}>
              <div className='title1'>new products</div>
              <div className='title2'> New on Market</div>
              <span className='title3'>Shop now</span>
              <img className='vegetableImg right0' src={IMAGES.Icon3PhonesSliderProduct} alt={'vegetable'} />
            </Grid>
          </Grid>

          <Grid container >
            <Grid item md={4} xs={12}>
              <div className='box mr30' style={{ background: '#fdeff4', }}>
                <div className='title1'>featured</div>
                <div className='title2'> We recommend</div>
                <span className='title3'>Shop now</span>
                <img className='vegetableImg right0' src={IMAGES.ImgAppleSliderProduct} alt={'vegetable'} />
              </div>
            </Grid>
            <Grid item md={8} xs={12} className='box' style={{ background: '#fffaf0', }}>
              <div className='title1'>seasonal</div>
              <div className='title2'> 13 best seasonal <br /> products</div>
              <span className='title3'>Shop now</span>
              <img className='vegetableImg right0' src={IMAGES.ImgClothSliderProduct} alt={'vegetable'} />

            </Grid>
          </Grid>

        </Grid>
        <Grid item md={3} xs={12}>
          <div className='box ml30'>
            <div className='title1'>trendin now</div>
            <div className='title2'> 25 Trending Products <br /> to Buy in 2022</div>
            <span className='title3'>Shop now</span>
            <img className='vegetableImg right0' src={IMAGES.ImgMaskSliderProduct} alt={'vegetable'} />
          </div>
        </Grid>
      </Grid>
        :
        <div className='row overflowX'>
          <div className='box'>
            <div className='title1'>most  popular</div>
            <div className='title2'> Order Your Favorite Products</div>
            <span className='title3'>Shop now</span>
            <img className='vegetableImg' src={IMAGES.IconVegetableSliderProduct} alt={'vegetable'} />
          </div>

          <div className='box' style={{ background: '#e4f9ff' }}>
            <div className='title1'>new products</div>
            <div className='title2'> New on Market</div>
            <span className='title3'>Shop now</span>
            <img className='vegetableImg right0' src={IMAGES.Icon3PhonesSliderProduct} alt={'vegetable'} />
          </div>

          <div className='box mr30' style={{ background: '#fdeff4' }}>
            <div className='title1'>featured</div>
            <div className='title2'> We recommend</div>
            <span className='title3'>Shop now</span>
            <img className='vegetableImg right0' src={IMAGES.ImgAppleSliderProduct} alt={'vegetable'} />
          </div>

          <div className='box' style={{ background: '#fffaf0' }}>
            <div className='title1'>seasonal</div>
            <div className='title2'> 13 best seasonal <br /> products</div>
            <span className='title3'>Shop now</span>
            <img className='vegetableImg right0' src={IMAGES.ImgClothSliderProduct} alt={'vegetable'} />
          </div>

          <div className='box'>
            <div className='title1'>trendin now</div>
            <div className='title2'> 25 Trending Products <br /> to Buy in 2022</div>
            <span className='title3'>Shop now</span>
            <img className='vegetableImg right0' src={IMAGES.ImgMaskSliderProduct} alt={'vegetable'} />
          </div>
        </div>
      }
    </div>
  );
}