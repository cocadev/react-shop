import Footer from '../components/foot.product';
import { HeaderMap } from '../components/header.map';
import { IMAGES } from '../configs/images';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';

export function OrderDetail() {

  const history = useHistory();

  return (
    <div>
      <HeaderMap background={true} />
      <div className='checkout'>
        <div className='checkout-view'>
          <div className='checkout-row full'>
            <div className='full mr20'>

              <div className=' bg-white p25'>
                <div className='row justify-between mt20 mb10 full'>
                  <div className='row align-center'>
                    <ArrowBackIcon className='cursor' onClick={() => history.push('/orders')} />
                    <div className='ml20 text25'>Order #111005020</div>
                  </div>
                  <div className='ml20 row'>
                    <div className='text14 bg-green white ph9 font-weight-700 border-radius-base'>Completed</div>
                  </div>
                </div>

                <div className='row justify-between mt30'>
                  <div className='row align-center'>
                    <div className='grey-box border-radius-25'>
                      <img src={IMAGES.IconLocationPlusMap} alt='icon' />
                    </div>
                    <div className='text16 ml20'>
                      <div>Delivery address</div>
                      <div className='grey font-weight-500 mt5'>2861 Fairview St, Portland, OR</div>
                    </div>
                  </div>
                  <div className='row align-center'>
                    <div className='grey-box border-radius-25'>
                      <img src={IMAGES.IconTimer} alt='icon' />
                    </div>
                    <div className='text16 ml20'>
                      <div>Delivery date and time</div>
                      <div className='grey font-weight-500 mt5'>Aug 25, 5:00 pm - 7:00 pm</div>
                    </div>
                  </div>
                  <div className='row align-center grey cursor bg-light-sky p25'>
                    Leave a feedback
                  </div>
                </div>

                <div className='divider mt30'/>

                <OrderBox title={'Multigrain Bagel With Regular Cream Cheese Product'} img={IMAGES.IconProduct20} />
                <OrderBox title={'Multigrain Bagel With Regular Cream Cheese Product'} img={IMAGES.IconProduct24} />
                <OrderBox title={'Double Quarter Pounder with Cheese and Pickles'} img={IMAGES.IconProduct28} />
                <OrderBox title={'Chicken & Bacon McWrap with Crispy Chicken'} img={IMAGES.IconProduct29} />
                <OrderBox title={'Mango Pineapple Real Fruit Smoothie without yogurt'} img={IMAGES.IconProduct30} />

              </div>
            </div>

            <div className='bg-white p25' style={{ height: 270, width: 380 }}>
              <div className='row align-center justify-between mt20'>
                <div className='text18 grey font-weight-500'>Items <span className='text14'>(9 items, 3.98 lb)</span></div>
                <div className='text18 font-weight-500'>$ 87.56</div>
              </div>
              <div className='row align-center justify-between mt5'>
                <div className='text18 grey font-weight-400'>Delivery</div>
                <div className='text18 font-weight-500'>Free</div>
              </div>
              <div className='row align-center justify-between mt5'>
                <div className='text18 grey font-weight-400'>Discount</div>
                <div className='text18 green font-weight-500'>- $ 5.02</div>
              </div>

              <div className='divider mt10' />

              <div className='row align-center justify-between mt10'>
                <div className='text18'>Total</div>
                <div className='text18'>$ 83.72</div>
              </div>

              <div className='btn-green-big mt30 full' >
                Reorder
              </div>
              <div className='row center grey font-weight-bold text-center mt20 cursor'>
                <HelpOutlineIcon />&nbsp;&nbsp;
                <div>Help</div></div>

            </div>
          </div>
        </div>

        <div className='full bg-white'>
          <Footer />
        </div>

      </div>
    </div>
  );
}

function OrderBox(props) {
  const { title, img } = props;
  return (
    <div>
      <div className='row align-center justify-between mt20'>
        <div className='row align-center'>
          <div className='grey-box border-radius-25'>
            <img src={img} alt='icon' />
          </div>
          <div className='text18 ml20'>{title}</div>
        </div>
        <div className='row align-center justify-between' style={{width: 200}}>
          <div className='font-weight-700'>$ 1.16</div>
          <div className='row align-center grey bg-light-sky ph010 cursor' style={{ height: 25 }}>
            1x
          </div>
        </div>
      </div>
      <div className='divider mt20'></div>
    </div>
  )
}