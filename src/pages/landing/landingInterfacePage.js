import SearchIcon from '@material-ui/icons/Search';
import { IMAGES } from '../../configs/images';
import useWindowSize from "../../utils/useWindowSize";

export function LandingInterfacePage() {

  const { width } = useWindowSize();

  return (
    <div className='center mt150 module1'>
      <img className='img1' src={IMAGES.Img2SliderProduct} alt={'check'}/>
      <img className='img2' src={IMAGES.ImgSliderProduct} alt={'check'}/>
      <img className='img3' src={IMAGES.Img20SliderProduct} alt={'check'}/>
      <img className='img4' src={IMAGES.Img21SliderProduct} alt={'check'}/>

      <div className='row font-weight-500 align-center mb20'><img src={IMAGES.IconVerified} alt={'check'}/> &nbsp;No 1 customer shopping resource</div>
      <div className='text70'>Shop Local, <br /> All the time.</div>
      <div className='landing-zipBox mt30 mb20 center row'>
        <div className='zip'>ZIP, City</div>
        <div className='relative full'>
          <input
            variant='standard'
            placeholder={width > 430 ? 'Search over 400 000 products...' : 'Search'}
            className='textfield'
          />
          <SearchIcon className="green absolute right-24 top13" />
        </div>
      </div>
      <div className="text24 mt50">Get Lowkel.</div>
      <br />
      <div className="grey text-center p10" style={{maxWidth: 430}}>Most convenient local shopping service and same-day delivery app to get you the products you need, when you need them.</div>
      <div className='row mt30 buttons'>
        <img src={IMAGES.BtnAppStore} alt={'button'} className='buttonsImg'/> &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={IMAGES.BtnPlayStore} alt={'button'} className='buttonsImg'/>
      </div>
      {width > 430 && <div className='mt100 center' >
        Scroll down for more<br />
        <img src={IMAGES.IconMouseScroll} alt={'mouse'} className='mt12 cursor'/>
      </div>}
    </div>
  );
}