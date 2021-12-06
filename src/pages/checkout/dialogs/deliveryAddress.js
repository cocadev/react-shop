import { Dialog } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { IMAGES } from '../../../configs/images';

export function DialogDeliveryAddress(props) {

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
          <div className='text22 '>Delivery address.</div>
        </div>

        <div className={'row align-center mt10'}>
          <CheckCircleIcon style={{ color: '#11c856' }} />
          <div className={'circle50 ml10'}>
            <HomeIcon className='green' />
          </div>
          <div className='ml10 full'>
            <div className='font-weight-bold'>Home</div>
            <div>8584 W Sherman Dr Portland, OR 97086...</div>
          </div>
          <div style={{ color: '#11c856', fontWeight: '600', cursor: 'pointer' }}>Edit</div>
        </div>

        <div className={'row align-center mt10'}>
          <RadioButtonUncheckedIcon style={{ color: '#11c856' }} />
          <div className={'circle50 ml10'}>
            <BusinessCenterIcon style={{ color: '#11c856' }} />
          </div>
          <div style={{ marginLeft: 12, width: '100%' }}>
            <div style={{ fontWeight: '600' }}>Home</div>
            <div>8584 W Sherman Dr Portland, OR 97086...</div>
          </div>
          <div style={{ color: '#11c856', fontWeight: '600', cursor: 'pointer' }}>Edit</div>
        </div>

        <div className={'row align-center mt10'}>
          <RadioButtonUncheckedIcon style={{ color: '#11c856' }} />
          <div className={'circle50 ml10'}>
            <LocationOnIcon style={{ color: '#11c856' }} />
          </div>
          <div style={{ marginLeft: 12, width: '100%' }}>
            <div style={{ fontWeight: '600' }}>Home</div>
            <div>8584 W Sherman Dr Portland, OR 97086...</div>
          </div>
          <div style={{ color: '#11c856', fontWeight: '600', cursor: 'pointer' }}>Edit</div>
        </div>

        <div style={{ color: '#11c856', alignItems: 'center' }} className='row mt20'>
          <AddCircleOutlineIcon />
          <div style={{ marginLeft: 16, fontWeight: '600' }}>Add New Address</div>
        </div>

        <div className='full mt30'>
          <div className="text16 bg-green white border-radius-base center ph15 cursor">Continue</div>
        </div>

      </div>
    </Dialog>
  );
}

