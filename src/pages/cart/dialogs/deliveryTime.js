import { Dialog } from '@material-ui/core';
import { IMAGES } from '../../../configs/images';

export function DialogDeliveryTime(props) {

  const { open, onClose } = props;

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className='dialog'
    >
      <div className='dialog-box'>
        <div className='row align-center justify-end'>
          <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
        </div>
        <div className='text24 text-center mt-10'>Delivery time</div>
        <div className='tex18 text-center mt3 grey'>World Foods</div>

        <div className='row overflowX mt20 custom_scroll'>
          <div className='center mr10'>
            <div className='text18 green'>Wed</div>
            <div className='cart-calendar-circle green'>15</div>
          </div>
          <div className='center mr10'>
            <div className='text18'>Thu</div>
            <div className='cart-calendar-circle'>16</div>
          </div>
          <div className='center mr10'>
            <div className='text18'>Fri</div>
            <div className='cart-calendar-circle'>17</div>
          </div>
          <div className='center mr10'>
            <div className='text18'>Sat</div>
            <div className='cart-calendar-circle'>18</div>
          </div>
          <div className='center mr10'>
            <div className='text18'>Sun</div>
            <div className='cart-calendar-circle'>19</div>
          </div>
          <div className='center mr10'>
            <div className='text18'>Mon</div>
            <div className='cart-calendar-circle'>20</div>
          </div>
          <div className='center mr10'>
            <div className='text18'>Tue</div>
            <div className='cart-calendar-circle'>21</div>
          </div>
          <div className='center mr10'>
            <div className='text18'>Wed</div>
            <div className='cart-calendar-circle'>22</div>
          </div>
        </div>

        <div className='text22 mt20 black'>Wednesday 15.09</div>

        <div className='row flex-wrap'>
          <Box title='8 am - 11 pm' time/>
          <Box title='8 am - 10 am' sun/>
          <Box title='10 am - 12 pm' sun/>
          <Box title='12 pm - 2 pm' sun flame/>
          <Box title='2 pm - 4 pm' sun/>
          <Box title='4 pm - 6 pm' moon/>
          <Box title='8 am - 11 pm' moon/>
        </div>

        <br />

        <div className='center mt30'>
          <div className="text16 bg-green white border-radius-base center ph15 cursor" style={{ width: 200 }}>Continue</div>
        </div>

      </div>
    </Dialog>
  );
}

function Box(props) {
  const {title, time, sun, moon, flame} = props;
  return (
    <div className='cart-calendar-box'>
      <div className='row justify-between align-center'>
        <div className='text16'>{title}</div>
        {time && <img src={IMAGES.IconTimer} alt='icon' />}
        {sun && <img src={IMAGES.IconSunCart} alt='icon' />}
        {moon && <img src={IMAGES.IconMoonCart} alt='icon' />}
      </div>
      <div className='text16 grey font-weight-500 mt10 row'>
        {flame && <img src={IMAGES.IconFlameCart} className='mr5' alt='icon'/>}
        <div className={flame && 'pink'}>Free</div> 
      </div>
    </div>
  )
}