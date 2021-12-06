import { Dialog } from '@material-ui/core';
import { IMAGES } from '../../../configs/images';

export function DialogOneSecond(props) {

  const { open, onClose, onContinue } = props;



  return (
    <Dialog
      onClose={onClose}
      open={open}
      className='dialog'
    >
      <div style={{ width: 400 }}
        className='dialog-box-small'>
        <div className='row align-center justify-end'>
          <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
        </div>
        <div className='mt-10 full center'>
          <div className='text20 '>One Second...</div>
        </div>

        <div className='mt30 text-center text36 lineH14'>Finding You an Available Shopper</div>

        <div className='center mt20'>
          <img src={IMAGES.ImgWorkerLogin} alt='img' />
          <div className='mt30'>Searching...</div>
          <div className='mt10'>Thanks for Your Patience.</div>
        </div>

        <div className='row align-center mt20 bg-ligh-green ph12 border-radius-large'>
          <img src={IMAGES.IconInfoCircle} alt='icon' />
          <div className='ml20'>Please give Shoppers several moments to review and accept your order.</div>
        </div>

        <div className='full mt20 mb10' onClick={onContinue}>
          <div className="text16 bg-green white border-radius-base center ph15 cursor">Cancel Order</div>
        </div>

      </div>
    </Dialog>
  );
}

