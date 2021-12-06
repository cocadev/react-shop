import { Box } from '@material-ui/core';
import Footer from '../../components/foot.product';
import { HeaderMap } from '../../components/header.map';
import { IMAGES } from '../../configs/images';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { DialogInstructions } from './dialogs/instructions';
import { useState } from 'react';
import { DialogDeliveryTime } from './dialogs/deliveryTime';
import { DialogVerification } from './dialogs/verification';
import { DialogOops } from './dialogs/oops';
import { useHistory } from 'react-router';

export function MyCart() {

  const history = useHistory();
  const [modal, setModal] = useState(0);
  const onClose = () => {
    setModal(0)
  }

  const onContinue = () => {
    setModal(modal + 1)
  }

  return (
    <div>
      <HeaderMap background={true} />
      <div className={'cartBgImg'} />
      <div className={'cart-main'}>
        <div className={'cartView'}>

          <div className={'cart64'}>My Cart</div>
          <Box mt={3} className={'cart24'}>4 Items</Box>

          <div className='cart-row'>
            <div className='full mr20'>
              <CartBox
                title={'Wolrd Foods'}
                price={1.16}
                itemName={'Banana'}
                count={2}
                itemImg={IMAGES.ImgBananaVegetableProduct}
                storeImg={IMAGES.Img1LogoStore}
                onModal={() => setModal(1)}
                onTime={() => setModal(2)}
              />
              <CartBox
                title={'Wolrd Foods'}
                price={1.16}
                itemName={'Banana'}
                count={2}
                itemImg={IMAGES.ImgBananaVegetableProduct}
                storeImg={IMAGES.Img1LogoStore}
                onModal={() => setModal(1)}
                onTime={() => setModal(2)}
              />
            </div>
            <div className='bg-white p25' style={{ height: 120 }}>
              <div className='row align-center justify-between mt20'>
                <div className='text18'>Total</div>
                <div className='text18 green'>$ 4.72</div>
              </div>

              <div className='btn-green-big' onClick={() => setModal(3)}>
                Proceed to Checkout
              </div>
            </div>
          </div>
        </div>

        <DialogInstructions open={modal === 1} onClose={onClose} />
        <DialogDeliveryTime open={modal === 2} onClose={onClose} />
        <DialogVerification open={modal === 3} onClose={onClose} onContinue={onContinue} />
        <DialogOops
          open={modal === 4}
          onClose={onClose}
          onContinue={() => {
            setModal(modal + 1);
            history.push('/checkout')
          }} />

        <div className='full bg-white'>
          <Footer />
        </div>

      </div>
    </div>
  );
}

function CartBox(props) {

  const { title, price, itemName, count, itemImg, storeImg, onModal, onTime } = props;

  return (
    <div className='mb20 p20 bg-white'>
      <div className='row align-center justify-between '>
        <div className='row align-center'>
          <img className={'cartImg'} src={storeImg} alt={'store'} />
          <span className={'text24'}>{title}</span>
        </div>
        <div className={'text20'}>$ {price}</div>
      </div>

      <div className='divider mt20' />

      <div className={'cartItem'}>
        <div className={'cartImgBg'}>
          <img src={itemImg} alt={'item'} />
        </div>
        <div className='full'>
          <div className='row align-center justify-between'>
            <div className='font-weight-bold'>
              <div className='text18'>{itemName}</div>
              <div className='row mt3'>
                <div className="text14 mr20">Weight: <span className='grey'>&nbsp;{count}</span></div>
                <div className="text14 mr20">Price/Each: <span className='green'>&nbsp;${count}</span></div>
                <div className="text14 mr20">Qty: <span className='grey'>&nbsp;{count}</span></div>
              </div>
              <div className='mt20 cursor grey font-weight-500 row align-center bg-light-sky ph010 border-radius-base' onClick={onModal}>
                <AddCircleOutlineIcon /> &nbsp; Add instuctions if item is not found
              </div>
            </div>
            <div className='row align-center text18'>
              <div className='row align-center text18 '>
                <div className='btn-calc'>-</div>
                <div>&nbsp;2&nbsp;</div>
                <div className='btn-calc'>+</div>
              </div>
              <div className='dark-green ml30'>${price}</div>
              <img src={IMAGES.IconTrashMap} alt={'icon'} className='ml30' />
            </div>
          </div>
        </div>
      </div>

      <div className='divider mt5 mb10' />

      <div className='mobileRow align-center mt15 mb15'>
        <div className='row'>
          <div className='btn-delivery'>Delivery</div>
          <div className='btn-pickup'>Pickup</div>
        </div>
        <div className='center row ml20'>
          <img src={IMAGES.IconTimer} alt='icon' />
          <b> &nbsp;Delivery: &nbsp;</b>
          <span className='grey mr10 font-weight-500'>Today 10 AM</span>
        </div>
        <div className={'text16 green m20 cursor'} onClick={onTime}>Change</div>
      </div>

      <div className='grey text14 font-weight-500 mt10 mb20'>Processing hours: <span className='black'>1</span></div>

      <span className='cart-notify'>
        Over <b>$35.00</b> spent, delivery <b>DISCOUNT</b> applied.
      </span>

    </div>
  )
}