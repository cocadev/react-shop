import { Dialog } from '@material-ui/core';
import { IMAGES } from '../../../configs/images';

export function DialogVerification(props) {

  const { open, onClose, onContinue } = props;

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className='dialog'
    >
      <div style={{ width: 380 }}
        className='dialog-box-small'>

        <div className='row align-center mt10'>
          <img src={IMAGES.IconAlcohol} alt={'icon'} />
          <div className='text25 black ml10'>Alcohol - Age verification</div>
        </div>

        <div className='text16 mt20 font-weight-500'>
          A family-owned specialty store with a unique selection of products from near and far. Our chef- run deli, curated beer and wine selection, and incredible bounty of local and imported goods is here to bring delight to your neighborhood. Stop in and share our passion for great food.
        </div>

        <div className='text18 mt20 '>Your data of birth:</div>
        <input
          className='grey-input'
          placeholder="MM / DD / YYYY"
        />
        <br />

        <div className='row align-center mt20'>
          <img src={IMAGES.IconUnCheckProduct} alt='icon'/>
          <div className='green text16 ml10'>I agree to conditions</div>
        </div>

        <div className='text16 mt20 font-weight-500'>
          A family-owned specialty store with a unique selection of products from near and far. Our chef- run deli, curated beer and wine selection, and incredible bounty of local and imported goods is here to bring delight to your neighborhood. Stop in and share our passion for great food.
        </div>

        <div className='text16 mt20 font-weight-500'>
          A family-owned specialty store with a unique selection of products from near and far. Our chef- run deli, curated beer and wine selection, and incredible bounty of local and imported goods is here to bring delight to your neighborhood. Stop in and share our passion for great food.
        </div>

        <div className='full mt30'>
          <div className="text16 bg-green white border-radius-base center ph15 cursor" onClick={onContinue}>Continue</div>
        </div>

      </div>
    </Dialog>
  );
}

