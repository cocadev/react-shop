import { Dialog } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { IMAGES } from '../../../configs/images';
import { useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export function DialogPaymentMethod(props) {

  const { open, onClose } = props;
  const [type, setType] = useState(0);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className='dialog'
    >
      {type === 0 && <div style={{ width: 450 }}
        className='dialog-box-small'>
        <div className='row align-center justify-end'>
          <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
        </div>
        <div className='mt-10 full center'>
          <div className='text22 '>Payment Method</div>
        </div>

        <div className={'row align-center mt10'}>
          <CheckCircleIcon style={{ color: '#11c856' }} />
          <div className='ml10 full row align-center'>
            <img src={IMAGES.IconMasterCard} alt='icon' />
            <div className='font-weight-bold text14 ml10 black'>Mastercard  &nbsp;&nbsp; •••• &nbsp;&nbsp;  8967</div>
          </div>
          <div className='grey font-weight-500'>07/24</div>
        </div>

        <div className={'row align-center mt20'}>
          <RadioButtonUncheckedIcon style={{ color: '#11c856' }} />
          <div className='ml10 full row align-center'>
            <img src={IMAGES.IconPaypal2} alt='icon' />
            <div className='font-weight-bold text14 ml10 black'>Mastercard  &nbsp;&nbsp; •••• &nbsp;&nbsp;  8967</div>
          </div>
          <div className='grey font-weight-500'>07/24</div>
        </div>

        <div className={'row align-center mt20'}>
          <RadioButtonUncheckedIcon style={{ color: '#11c856' }} />
          <div className='ml10 full row align-center'>
            <img src={IMAGES.IconVisa2} alt='icon' />
            <div className='font-weight-bold text14 ml10 black'>Mastercard  &nbsp;&nbsp; •••• &nbsp;&nbsp;  8967</div>
          </div>
          <div className='grey font-weight-500'>07/24</div>
        </div>

        <div className={'row align-center mt20'}>
          <RadioButtonUncheckedIcon style={{ color: '#11c856' }} />
          <div className='ml10 full row align-center'>
            <img src={IMAGES.IconWalletCart} alt='icon' />
            <div className='font-weight-bold text14 ml10 black'>Mastercard  &nbsp;&nbsp; •••• &nbsp;&nbsp;  8967</div>
          </div>
          <div className='grey font-weight-500'>07/24</div>
        </div>

        <div className='row mt20 green align-center cursor' onClick={() => setType(1)}>
          <AddCircleOutlineIcon />
          <div className='ml10 font-weight-bold'>Add New Payment method</div>
        </div>

        <div className='full mt30'>
          <div className="text16 bg-green white border-radius-base center ph15 cursor">Continue</div>
        </div>

      </div>}

      {
        type === 1 &&
        <div style={{ width: 450 }} className='dialog-box-small'>
          <div className='row mt3'>
            <KeyboardBackspaceIcon className='cursor' onClick={() => setType(0)} />
            <div className='text22 full center'>New Payment Method</div>
            <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
          </div>

          <div className='row justify-between align-center mt30 cursor' onClick={() => setType('Credit card')}>
            <div className='row align-center'>
              <img src={IMAGES.IconWalletCart} alt='icon' />
              <div className='ml10'>Credit Card</div>
            </div>
            <ChevronRightIcon />
          </div>

          <div className='divider mt20' />

          <div className='row justify-between align-center mt20 mb20 cursor' onClick={() => setType('Paypal')}>
            <div className='row align-center'>
              <img src={IMAGES.IconWalletCart} alt='icon' />
              <div className='ml10'>Paypal</div>
            </div>
            <ChevronRightIcon />
          </div>
        </div>
      }

      {
        (type === 'Credit card' || type === 'Paypal') &&
        <div style={{ width: 450 }} className='dialog-box-small'>
          <div className='row mt3'>
            <KeyboardBackspaceIcon className='cursor' onClick={() => setType(1)} />
            <div className='text22 full center'>Add {type}</div>
            <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
          </div>

          <div className='row bg-light-sky ph12 grey font-weight-400 align-center justify-between mt20'>
            <img src={IMAGES.IconWalletCart} alt='icon' className='opacity5'/>
            <div> 4242</div>
            <div> MM/YY</div>
            <div> CVC</div>
            <div> Postal code</div>
          </div>

          <div className='full mt20'>
            <div className="text16 bg-green white border-radius-base center ph15 cursor">Continue</div>
          </div>

        </div>
      }
    </Dialog>
  );
}

