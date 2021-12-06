import { Dialog } from '@material-ui/core';
import { IMAGES } from '../../../configs/images';

export function DialogDeliveryInstructions(props) {

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
          <div className='text22 '>Delivery instructions</div>
        </div>

        <div className='grey mt20'>Notes for World Foods courier</div>
        <textarea 
          className='textarea-msg mt10' 
          placeholder={'For example: "Door code 1234, 2nd floor"'}
        />

        <div className='grey mt20'>Notes for Target courier</div>
        <textarea 
          className='textarea-msg mt10' 
          placeholder={'For example: "Door code 1234, 2nd floor"'}
        />

        <div className='full mt20'>
          <div className="text16 bg-green white border-radius-base center ph15 cursor">Add Notes</div>
        </div>

      </div>
    </Dialog>
  );
}

