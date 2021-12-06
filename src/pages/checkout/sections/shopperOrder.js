import { useState } from "react";
import { IMAGES } from "../../../configs/images";
import { DialogMissingItem } from "../dialogs/missingItem";

export function SectionShopperOrder(props) {

  const [modal, setModal] = useState();

  const onClose = () => {
    setModal(0);
  }

  return (
    <div className='bg-white p25' style={{ width: 500 }}>
      <div className='text18 m10'>Shopper</div>
      <div className='row mt10 '>
        <div>
          <img src={IMAGES.IconMan} alt='icon' />
        </div>
        <div className='ml20'>
          <div className='text22'>Jacob Henry</div>
          <div className='grey mt10'>2020 Ford F-150</div>
          <div className='mt10 text16 ph10 bg-light-sky'>OR 005 UTR</div>
        </div>
      </div>

      <div className='text18 mt20'>Stores</div>
      <div className='row mt10'>
        <img className='border-radius-large' src={IMAGES.Img2Store} alt='icon'/>
        <img className='border-radius-large ml10' src={IMAGES.Img3Store} alt='icon'/>
      </div>

      <div className='text16 font-weight-500 row align-center center ph12 mt20 border-grey border-radius-large'>
        <img src={IMAGES.IconMessage} className='mr5' alt='icon'/>
        Message to Shopper/Store
      </div>

      <div className='row align-center justify-between mt30'>
        <div className='text18 mt30'>Total</div>
        <div className='text18 mt30 green'>$ 83.72</div>
      </div>

      <div className='btn-green-big mt30 full' onClick={()=>setModal(1)}>
        Confirm Order Received
      </div>
      <div className='red font-weight-bold text-center mt30 cursor'>Cancel Order</div>

      <DialogMissingItem open={modal === 1} onClose={onClose}/>
    </div>
  );
}

