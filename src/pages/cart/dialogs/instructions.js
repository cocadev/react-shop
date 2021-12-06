import { Dialog } from '@material-ui/core';
import { IMAGES } from '../../../configs/images';

export function DialogInstructions(props) {

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
        <p className='text24 text-center mt-10'>Instructions if item is not found</p>

        <div className='row align-center bg-light-red'>

          <div className={'bg-white m10 mr20 border-radius-large'}>
            <img className='p10' src={IMAGES.ImgBananaVegetableProduct} alt={'item'} style={{ width: 60}}/>
          </div>

          <div className='font-weight-bold full'>
            <div className='text18'>Bananas</div>
            <div className='row mt3'>
              <div className="text14 mr20">Weight: <span className='grey'>&nbsp;2lb</span></div>
              <div className="text14 mr20">Price/Each: <span className='green'>&nbsp;$0.58</span></div>
              <div className="text14 mr20">Qty: <span className='grey'>&nbsp;2</span></div>
            </div>
          </div>

          <div className='text18 green one-line mr20'>$ 1.16</div>

        </div>

        <div className='text18 mt20 black'>If item is out of stock</div>

        <div className='row align-center mt15'>
          <img src={IMAGES.IconUnCheckProduct} alt='check'/>
          <div className='text18 ml10 font-weight-500'>Please select the best alternative</div>
        </div>

        <div className='row align-center mt15'>
          <img src={IMAGES.IconUnCheckProduct} alt='check'/>
          <div className='text18 ml10 font-weight-500'>Contact with replacement</div>
        </div>

        <div className='row align-center mt15'>
          <img src={IMAGES.IconUnCheckProduct} alt='check'/>
          <div className='text18 ml10 font-weight-500'>No replacement (refund item)</div>
        </div>
        <div className='row align-center mt15'>
          <img src={IMAGES.IconCheckedProduct} alt='check'/>
          <div className='text18 ml10 font-weight-500'>Select replacement item</div>
        </div>

        <div className='text18 mt20 black'>Special instructions</div>
        <textarea 
          className='textarea-msg mt10'
          placeholder="I'd like my shopper to..."  
        />
        <br />

        <div className='full mt30'>
          <div className="text16 bg-green white border-radius-base center ph15 cursor">Add Instructions</div>
        </div>

      </div>
    </Dialog>
  );
}

