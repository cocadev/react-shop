import { Dialog } from '@material-ui/core';
import { IMAGES } from '../../../configs/images';

export function DialogAddTip(props) {

  const { open, onClose } = props;

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className='dialog'
    >
      <div style={{ width: 450 }}
        className='dialog-box-small'>
        <div className='row align-center justify-end'>
          <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
        </div>
        <div className='mt-10 full center'>
          <div className='text22 '>Add a Tip</div>
        </div>

        <div className='grey mt5 center'>World Foods</div>
        <div className='grey mt20 text-center'>100% of your tips go to your delivery person, and tips are always optional.</div>

        <div className='center row mt20'>
          <div className='font-weight-600 text20 circle60 ml10'>$0</div>
          <div className='font-weight-600 text20 circle60 ml10'>$1</div>
          <div className='font-weight-600 text20 circle60 ml10'>$3</div>
          <div className='font-weight-600 text20 circle60 ml10'>$5</div>

        </div>

        <input 
          className='textarea-msg mt20' 
          style={{height: 20}}
          placeholder={'Enter amount'}
        />

        <div className='full mt20 mb10'>
          <div className="text16 bg-green white border-radius-base center ph15 cursor">Add a Tip</div>
        </div>

      </div>
    </Dialog>
  );
}

