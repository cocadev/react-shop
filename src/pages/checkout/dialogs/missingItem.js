import { Dialog } from '@material-ui/core';
import { IMAGES } from '../../../configs/images';

export function DialogMissingItem(props) {

  const { open, onClose } = props;

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className='dialog'
    >
      <div style={{ width: 550 }}
        className='dialog-box-small'>
        <div className='row align-center justify-end'>
          <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={onClose} /><br />
        </div>
        <div className='mt-10 full center'>
          <div className='text22 '>Missing Item</div>
          <div className='grey'>1 item is unavailable</div>
        </div>

        <div className='row align-center mt10'>
          <img src={IMAGES.Img2Store} className='border-radius-large' alt='icon' />
          <div className='ml10 text16'>World Foods</div>
        </div>

        <div className='border-grey mt10 p10 border-radius-large'>
          <div className='row align-center red-2 p10'>
            <div className='bg-white pv6 border-radius-large'>
              <img src={IMAGES.ImgBananaVegetableProduct} style={{ width: 50 }} className='border-radius-large' alt='icon' />
            </div>
            <div className='full'>
              <div>
                <div className='ml10 text16'>Bananas</div>
                <div className='ml10 mt3'>Weight: 2lb&nbsp;&nbsp;&nbsp; Price/Each: &nbsp;<span className='green font-weight-bold'>$0.58</span>&nbsp;&nbsp;&nbsp; Qty:&nbsp; 2</div>
              </div>
            </div>
            <div>
              <div className='green font-weight-700 one-line mr10'>$ 1.16 </div>
            </div>
          </div>

          <div className='mt10 center row cursor'>
            <img src={IMAGES.IconRefresh} alt='icon'/> &nbsp;Swap With
          </div>

          <div className='row align-center bg-light-sky mt10 p10'>
            <div className='bg-white pv6 border-radius-large'>
              <img src={IMAGES.ImgTomatoVegetableProduct} style={{ width: 50 }} className='border-radius-large' alt='icon' />
            </div>
            <div className='full'>
              <div>
                <div className='ml10 text16'>Tomato</div>
                <div className='ml10 mt3'>Weight: 2lb&nbsp;&nbsp;&nbsp; Price/Each: &nbsp;<span className='green font-weight-bold'>$0.58</span>&nbsp;&nbsp;&nbsp; Qty:&nbsp; 2</div>
              </div>
            </div>
            <div>
              <div className='green font-weight-700 one-line mr10'>$ 3.26 </div>
            </div>
          </div>

          <div className='row full mt30'>
            <div className="text16 bg-green full white border-radius-base center ph15 cursor">Approve</div>
            <div className="text16 bg-light-sky full ml20 red border-radius-base center ph15 cursor">Reject</div>
          </div>
        </div>

        <div className='row align-center justify-between mt20'>
          <div className='font-weight-500'>Time remaining</div>
          <div className='font-weight-700'>2:49</div>
        </div>

        <div className='divider mt20'></div>
        <div className="text16 bg-light-sky full grey font-weight-500 mt10 border-radius-base center ph15 cursor">Refund missing item</div>
        <div className="text16 bg-light-sky full grey font-weight-500 mt10 border-radius-base center ph15 cursor">Select alternative substitute</div>
        <div className="text16 bg-light-sky full grey font-weight-500 mt10 border-radius-base center ph15 cursor">Chat with Shopper</div>

      </div>
    </Dialog>
  );
}

