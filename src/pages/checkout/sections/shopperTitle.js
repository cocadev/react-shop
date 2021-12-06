import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IMAGES } from '../../../configs/images';

export function SectionShopperTitle(props) {

  return (
    <div className='mb20'>
      <div className='bg-light-gray mb20 row justify-between align-center p25'>
        <div className='row align-center'>
          <img src={IMAGES.ImgErrorIcon} className='mr10' alt='icon'/>
          <div className='text16'>Your shopper has suggested changes to your order. &nbsp;Please review.</div>
        </div>

        <div className='white bg-black ph9 border-radius-base cursor'>View Changes</div>
      </div>
      <div className='row bg-white p25'>
        <div className='row justify-between mt10 mb10 full'>
          <div className='row align-center'>
            <ArrowBackIcon className='cursor'/>
            <div className='ml20 text22'>Order #5020</div>
          </div>
          <div className='ml20 row'>
            <div className='text14 bg-orange white ph9 border-radius-base'>In Progress</div>
            <div className='border-grey text-center ph9 ml10'>-20 Min</div>
          </div>
        </div>
      </div>

    </div>
  );
}

