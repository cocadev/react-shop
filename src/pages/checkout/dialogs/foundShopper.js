import { Dialog } from '@material-ui/core';
import { IMAGES } from '../../../configs/images';

export function DialogFoundShopper(props) {

  const { open, onClose, onContinue } = props;

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className='dialog'
    >
      <div style={{ width: 420 }}
        className='dialog-box-small'>
        <div className='row align-center justify-end'>
          <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
        </div>
        <div className='mt-10 full center'>
          <div className='text20 '>Awesome!</div>
        </div>

        <div className='mt30 text-center text36 lineH14'>We found a Shopper for your order.</div>

        <div className='row mt20 center'>
          <div>
            <img src={IMAGES.IconMan} alt='icon'/>
          </div>
          <div className='ml20'>
            <div className='text22'>Jacob Henry</div>
            <div className='grey mt10'>2020 Ford F-150</div>
            <div className='mt10 text16 ph10 bg-light-sky'>OR 005 UTR</div>
          </div>
        </div>

        <div className='center mt30 mb20 cursor' onClick={onContinue}>
          <div className='mt30'>Procesing...</div>
        </div>




      </div>
    </Dialog>
  );
}

