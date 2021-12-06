import Footer from '../../components/foot.product';
import { HeaderMap } from '../../components/header.map';
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from '../../configs/data';
import { IMAGES } from '../../configs/images';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { DialogDeliveryAddress } from './dialogs/deliveryAddress';
import { useState } from 'react';
import { DialogDeliveryInstructions } from './dialogs/deliveryInstructions';
import { DialogPaymentMethod } from './dialogs/PaymentMethod';
import { DialogAddTip } from './dialogs/addtip';
import { DialogOneSecond } from './dialogs/oneSecond';
import { DialogFoundShopper } from './dialogs/foundShopper';
import { SectionPlaceOrder } from './sections/placeOrder';
import { SectionShopperOrder } from './sections/shopperOrder';
import { SectionShopperTitle } from './sections/shopperTitle';

export function CheckOut() {

  const [modal, setmodal] = useState(0);
  const [isShopper, setIsShopper] = useState(false);

  const onClose = () => {
    setmodal(0);
  }

  return (
    <div>
      <HeaderMap background={true} />
      <div className='checkout'>
        <div className='checkout-view'>
          {!isShopper && <div className={'text40 left'}>Checkout</div>}


          <div className='checkout-row full'>
            
            <div className='full mr20'>
            {isShopper && <SectionShopperTitle />}

              <div className='bg-white p20 text20'>
                Delivery Details

                <div className='row mt20'>
                  <div className='btn-delivery'>Delivery</div>
                  <div className='btn-pickup'>Pickup</div>
                </div>

                <div className='full mt20' style={{ height: 250 }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
                    defaultCenter={{
                      lat: -33.941,
                      lng: 151.196
                    }}
                    center={{
                      lat: -33.941,
                      lng: 151.196
                    }}
                    defaultZoom={18}
                  >
                    {
                      <CustomMarker
                        lat={-33.941}
                        lng={151.196}
                        image={IMAGES.Img2LogoStore}
                      />
                    }

                  </GoogleMapReact>
                </div>

                <div className='row justify-between'>
                  <div className='row mt20'>
                    <div className='grey-box border-radius-25'>
                      <img src={IMAGES.IconHome1Map} alt='icon' />
                    </div>
                    <div className='ml20'>
                      <div className='text18'>Home</div>
                      <div className='text16 grey font-weight-400'>8584 W Sherman Dr Portland, OR 97086</div>
                    </div>
                  </div>
                  <div className='row align-center green text16 cursor'>
                    <img src={IMAGES.IconEdit} alt='icon' onClick={() => setmodal(1)} /> &nbsp;Edit
                  </div>
                </div>

                <div className='row mt20 align-center'>
                  <div className='grey-box border-radius-25'>
                    <img src={IMAGES.IconNoteMap} alt='icon' />
                  </div>
                  <div className='text16 grey font-weight-500 ml20 cursor' onClick={() => setmodal(2)}>Add Delivery Instructions</div>
                </div>

                <div className='row mt20 align-center'>
                  <div className='grey-box border-radius-25'>
                    <img src={IMAGES.IconPhoneCallMap} alt='icon' />
                  </div>
                  <div className='text16 grey font-weight-400 ml20'>+ 1 682-710-1234</div>
                </div>

                <div className='row mt20 align-center'>
                  <div className='grey-box border-radius-25'>
                    <img src={IMAGES.IconSquare} alt='icon' />
                  </div>
                  <div className='text16 grey font-weight-400 ml20'>Leave on My Doorstep if I'm Not Around</div>
                </div>

                <div className='row mt20 align-center'>
                  <div className='grey-box border-radius-25'>
                    <img src={IMAGES.IconSquareCheck} alt='icon' />
                  </div>
                  <div className='text16 grey font-weight-400 ml20'>Request orderreceipt when purchased</div>
                </div>

                <div className='row mt20 align-center'>
                  <div className='grey-box border-radius-25'>
                    <img src={IMAGES.IconSquareCheck} alt='icon' />
                  </div>
                  <div className='text16 grey font-weight-400 ml20'>Age Verification</div>
                </div>
              </div>

              <div className='bg-white mt20 p20 text16'>
                <div className='row justify-between'>
                  <div className='row align-center'>
                    <div className='grey-box border-radius-25'>
                      <img src={IMAGES.IconPhoneCallMap} alt='icon' />
                    </div>
                    <div className='text20 ml20'>Order Details</div>
                  </div>
                  <div className='row align-center green cursor'>
                    View Order Details <ChevronRightIcon />
                  </div>
                </div>
              </div>

              <div className='bg-white mt20 p20 text16'>
                <div className='text20 ml10 mt20'>Delivery Times</div>
                <div className='row align-center ml10 mt20 bg-light-sky p10'>
                  <img src={IMAGES.Img1Store} alt='store' />
                  <div className='ml20'>
                    <div>Delivery for World Fodds</div>
                    <div className='mt5'><span className='green'>Fri, 17 Sep 2021, 03:00 PM</span> <span className='grey'>- Fri, 17 Sep 2021, 05:00 PM</span></div>
                  </div>
                </div>
                <div className='row align-center ml10 mt10 bg-light-sky p10'>
                  <img src={IMAGES.Img4Store} alt='store' />
                  <div className='ml20'>
                    <div>Delivery for World Fodds</div>
                    <div className='mt5'><span className='green'>Fri, 17 Sep 2021, 03:00 PM</span> <span className='grey'>- Fri, 17 Sep 2021, 05:00 PM</span></div>
                  </div>
                </div>
              </div>

              <div className='bg-white mt20 p20 text16'>
                <div className='text24'>Payment</div>
                <div className='row justify-between mt20'>
                  <div className='row align-center'>
                    <img src={IMAGES.IconVisa} alt='icon' />
                    <div>
                      <div className='text18 ml20'>Credit Card</div>
                      <div className='text16 mediumn-grey font-weight-400 ml20'>Visa - 6103</div>
                    </div>
                  </div>
                  <div className='row align-center green cursor' onClick={() => setmodal(3)}>
                    Change
                  </div>
                </div>
              </div>

              <div className='bg-white mt20 p20 text16'>
                <div className='text24'>Checkout Details</div>
                <div className='border-grey p20 mt20 border-radius-large'>
                  <div className='row justify-between '>
                    <div className='row align-center'>
                      <img src={IMAGES.Img1Store} alt='icon' />
                      <div className='text16 ml20'>World Foods</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor text20'>
                      $ 42.69
                    </div>
                  </div>

                  <div className='row justify-between mt10'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-400 grey'>World Foods Total:</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor'>
                      $ 35.70
                    </div>
                  </div>

                  <div className='row justify-between mt10'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-400 grey'>Delivery Total:</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor'>
                      $ 10.00
                    </div>
                  </div>

                  <div className='row justify-between mt10'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-400 grey'>Delivery discount applied:</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor ronchi'>
                      - $ 3.01
                    </div>
                  </div>

                  <div className='row justify-between mt20 bg-ligh-green p20 border-radius-large'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-600'>
                        Collection Tip:
                        <span className='green'>&nbsp;&nbsp; $10</span>
                      </div>
                    </div>
                    <div className='row align-center font-weight-600 cursor green' onClick={() => setmodal(4)}>
                      Change
                    </div>
                  </div>

                  <div className='row justify-between mt10'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-400 '>Return policy</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor'>
                      <ChevronRightIcon />
                    </div>
                  </div>

                </div>
                <div className='border-grey p20 mt20 border-radius-large'>
                  <div className='row justify-between '>
                    <div className='row align-center'>
                      <img src={IMAGES.Img1Store} alt='icon' />
                      <div className='text16 ml20'>World Foods</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor text20'>
                      $ 42.69
                    </div>
                  </div>

                  <div className='row justify-between mt10'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-400 grey'>World Foods Total:</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor'>
                      $ 35.70
                    </div>
                  </div>

                  <div className='row justify-between mt10'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-400 grey'>Delivery Total:</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor'>
                      $ 10.00
                    </div>
                  </div>

                  <div className='row justify-between mt10'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-400 grey'>Delivery discount applied:</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor ronchi'>
                      - $ 3.01
                    </div>
                  </div>

                  <div className='row justify-between mt20 bg-ligh-green p20 border-radius-large'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-600'>
                        Collection Tip:
                        <span className='green'>&nbsp;&nbsp; $10</span>
                      </div>
                    </div>
                    <div className='row align-center font-weight-600 cursor green' onClick={() => setmodal(4)}>
                      Change
                    </div>
                  </div>

                  <div className='row justify-between mt10'>
                    <div className='row align-center '>
                      <div className='text16 font-weight-400 '>Return policy</div>
                    </div>
                    <div className='row align-center font-weight-600 cursor'>
                      <ChevronRightIcon />
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {!isShopper && <SectionPlaceOrder onClickBtn={() => setmodal(5)} />}
            {isShopper && <SectionShopperOrder />}

          </div>
        </div>
        <div className='full bg-white'>
          <Footer />
        </div>

        <DialogDeliveryAddress open={modal === 1} onClose={onClose} />
        <DialogDeliveryInstructions open={modal === 2} onClose={onClose} />
        <DialogPaymentMethod open={modal === 3} onClose={onClose} />
        <DialogAddTip open={modal === 4} onClose={onClose} />
        <DialogOneSecond open={modal === 5} onClose={onClose} onContinue={() => setmodal(6)} />
        <DialogFoundShopper open={modal === 6} onClose={onClose} onContinue={() => setIsShopper(true)} />

      </div>
    </div>
  );
}


function CustomMarker(props) {

  const { image } = props;

  return (
    <img src={image} alt={'img'} style={{ width: 40 }} />
  )
}