import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { IMAGES } from "../configs/images";
import useWindowSize from "../utils/useWindowSize";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { HeaderMap } from "./header.map";
import Footer from "./foot.product";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export function AtomProduct(props) {

  const { item } = props;
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <div className='cursor'>
      <div className='product-item' onClick={() => setOpen(true)}>
        <img src={item.img} alt={'img'} style={{ height: 70 }} />
        <div className='green text20 mt20 relative'>${item.new_price}&nbsp;</div>
        <div className='text18 mt10'>{item.title}</div>
        <div className={width > 450 ? 'text12 mt5 grey' : 'product-texts'}>{item.description}</div>
        <div className={width > 450 ? 'product-tag mt5' : 'product-tag mt5'}>Today, 2:00-9:00 PM</div>
      </div>

      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        className='pdialog'
        fullScreen={true}
      >
        <div className='center'>
          <HeaderMap isListMapDisable={true}/>

          <div className='pdialogBox mobileRow font-weight-500'>
            <div className='full'>
              <div className='row align-center cursor' onClick={() => setOpen(false)}>
                <ArrowBackIcon /> &nbsp; Back to store
              </div>

              <div className='center mt30'>
                <img src={item.img} alt={'icon'} style={{ height: 150 }} />
              </div>

              <div className='row justify-between mt30'>
                <div className={`${width > 450 ? 'text28' : 'text20'} mt12`} style={{ whiteSpace: 'nowrap' }}>{item.title}</div>

                <div className='row justify-between mt10 align-center justify-between' style={{ minWidth: 230 }}>
                  {width > 450 && <div className='text27 dark-green font-weight-bold'>${item.new_price}</div>}
                  {width > 450 && <div className='row black align-center'>
                    <div className='calc' style={{ marginRight: 12 }}>-</div>
                    {2}
                    <div className='calc' style={{ marginLeft: 12 }}>+</div>
                  </div>}
                </div>

              </div>

              <div className='row justify-between'>
                <div>
                  <div className='row align-center mt10'>
                    <div className='row'>
                      <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                      <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                      <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                      <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
                      <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />
                    </div>

                    <div className='green ml10'>(6 ratings)</div>

                    <div className='calc ml10 grey' style={{ padding: '0 18px' }}>
                      Rate
                    </div>
                  </div>
                  <div className='text15 mt10 mb18 grey font-weight-400'>Price/LB, 1Piece (~4 OZ)</div>
                </div>
                {width > 450 && <div className='cartBtn' style={{position: 'fixed', bottom: 20, left: 20}}>
                  Add to Cart
                </div>}
              </div>

              {width <= 450 && <div className='text27 dark-green font-weight-bold'>${item.new_price}</div>}

              {width <= 450 && <div className='row justify-between align-center justify-between mb10'>
                <div className='row black align-center'>
                  <div className='calc' style={{ marginRight: 12 }}>-</div>
                  {2}
                  <div className='calc' style={{ marginLeft: 12 }}>+</div>
                </div>
                <div className='cartBtn' style={{ marginTop: 5 }}>
                  Add to Cart
                </div>
              </div>}

              <div className='row align-center'>
                <img src={IMAGES.IconSettingsCart} alt={'icon'} style={{ height: 20 }} /> &nbsp;&nbsp;
                <span className='text15 green font-weight-bold'>Product Available</span>
              </div>

              <div className='mt20 grey'>
                Soft, sweet and delicious, the banana is a popular choice for breakfast, snacks, or any time of the day. Soft, sweet and delicious, the banana is a popular choice for breakfast, snacks, or any time
              </div>

            </div>

            <div className='full'>
              <div className='bg-light-sky ph9 mt10'>
                <div className='row justify-between mt3'>
                  <div className='text20'>Product</div>
                  <div className='cursor'><ExpandLessIcon /></div>
                </div>
                <div className='row justify-between mt10'>
                  <div className='text15'>Price / Piece:</div>
                  <div className='text15 dark-green font-weight-bold'>$ 0.15 / pc</div>
                </div>

                <div className='row justify-between mt10'>
                  <div className='text15'>Price / Lb:</div>
                  <div className='text15 dark-green font-weight-bold'>$ 0.15 / lb</div>
                </div>

                <div className='row justify-between mt10'>
                  <div className='text15' >Package:</div>
                  <div className='text15' >5 Unit Approx</div>
                </div>

                <div className='row justify-between mt10'>
                  <div className='text15'>Origin:</div>
                  <div className='text15'>Costa Rica, Ecuador</div>
                </div>
              </div>

              <div className='bg-light-sky ph9 mt10'>
                <div className='row justify-between mt3'>
                  <div className='text20'>Nutrition</div>
                  <div className='cursor'><ExpandLessIcon /></div>
                </div>

                <MiniBox title={'Serving Size · 1 Medium Banana'} />
                <MiniBox title={'Serving Per Container · Varies'} />
                <MiniBox title={'Amount Per Serving'} sum={true} topBold={true} />
                <MiniBox title={'% Daily Value*'} small={true} />

                <MiniBox title={'Total Fat · 0.4g'} description={'1 %'} sum={true} topLight={true} />
                <MiniBox title={'Saturated Fat · 0.1g'} description={'1 %'} />
                <MiniBox title={'Trans Fat · 0 g'} />
                <MiniBox title={'Polyunsaturated Fat · 0.1 g'} />
                <MiniBox title={'Monounsaturated Fat · 0.1 g'} />

                <MiniBox title={'Cholesterol · 0 mg'} description={'0 %'} sum={true} topLight={true} />
                <MiniBox title={'Sodium · 1 mg'} description={'0 %'} sum={true} topLight={true} />
                <MiniBox title={'Potassium · 422 mg'} description={'9 %'} sum={true} topLight={true} />
                <MiniBox title={'Total Carbohydrate · 27 mg'} description={'9 %'} sum={true} topLight={true} />
                <MiniBox title={'Dietary Fiber · 3.1 g'} description={'12 %'} />
                <MiniBox title={'Sugars · 14.4 g'} />
                <MiniBox title={'Other Carbohydrates · 9 g'} />
                <MiniBox title={'Protein · 1.3 g'} sum={true} topLight={true} />
                <div className='top-bold-border mt10' style={{ marginBottom: -10 }} />
                <MiniBox title={'Vitamin A · 2 %    Vitamin C · 14 %'} topLight={true} />
                <MiniBox title={'Calcium · 1 %    Iron · 2 %'} />
                <MiniBox title={'*Percent Daily Values are based on a 2,000 calorie diet.'} small={true} />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Choose a drink
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>

                <MiniCheckBox title={'Coca-Cola Classic'} description img={IMAGES.ImgCan0Product} bottomLight />
                <MiniCheckBox title={'Coca-Cola Classic'} description img={IMAGES.ImgCan1Product} checked bottomLight />
                <MiniCheckBox title={'Coca-Cola Classic'} description img={IMAGES.ImgCan2Product} bottomLight />
                <MiniCheckBox title={'Coca-Cola Classic'} description img={IMAGES.ImgCan3Product} bottomLight />
                <MiniCheckBox title={'Coca-Cola Classic'} description img={IMAGES.ImgCan4Product} bottomLight />
                <MiniCheckBox title={'Coca-Cola Classic'} description img={IMAGES.ImgCan5Product} bottomLight />
                <MiniCheckBox title={'Coca-Cola Classic'} description img={IMAGES.ImgCan6Product} checked bottomLight />
                <MiniCheckBox title={'Coca-Cola Classic'} description img={IMAGES.ImgCan7Product} />

              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Add extras
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>
                <MiniCheckBox title={'Egg'} bottomLight />
                <MiniCheckBox title={'Cheese'} checked bottomLight />
                <MiniCheckBox title={'Tomato'} bottomLight />
                <MiniCheckBox title={'Soy Souce'} bottomLight />
                <MiniCheckBox title={'Bacon'} bottomLight />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Size
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>
                <MiniCheckBox title={'6’’ (12 Servings)'} option bottomLight />
                <MiniCheckBox title={'8’’ (12 Servings)'} option checked bottomLight />
                <MiniCheckBox title={'10’’ (12 Servings)'} option bottomLight />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Fillings
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>
                <MiniCheckBox title={'Lemon Curd'} description={'Top Slide'} bottomLight />
                <MiniCheckBox title={'Coca-Cola'} description={'Top Slide'} checked bottomLight />
                <MiniCheckBox title={'Nutella'} description={'Second Layer'} bottomLight />
                <MiniCheckBox title={'Banana'} description={'First Layer'} />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Top Border
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>
                <MiniCheckBox title={'No Selection'} nonPrice option bottomLight />
                <MiniCheckBox title={'Include Top Border'} nonPrice checked option bottomLight />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Bottom Border
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>
                <MiniCheckBox title={'No Selection'} nonPrice option bottomLight />
                <MiniCheckBox title={'Include Bottom Border'} nonPrice checked option bottomLight />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Icing Color
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>
                <MiniCheckBox img={IMAGES.IconColorWhiteProduct} title={'White'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconColorPinkProduct} title={'Pink'} nonPrice option checked bottomLight />
                <MiniCheckBox img={IMAGES.IconColorRedProduct} title={'Red'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconColorOrangeProduct} title={'Orange'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconColorYellowProduct} title={'Yellow'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconColorBlueProduct} title={'Blue'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconColorGrayProduct} title={'Gray'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconColorGreenProduct} title={'Green'} nonPrice option bottomLight />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Flowers Type
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>
                <MiniCheckBox img={IMAGES.IconFlower0Product} title={'Open Mums'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconFlower1Product} title={'Closed Mums'} nonPrice option checked bottomLight />
                <MiniCheckBox img={IMAGES.IconFlower2Product} title={'Tropical Flowers'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconFlower3Product} title={'Daises'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconFlower4Product} title={'Rosettes'} nonPrice option bottomLight />
                <MiniCheckBox img={IMAGES.IconFlower5Product} title={'Roses'} nonPrice option bottomLight />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml10`}>
                    Message On A Cake
                  </div>
                  <ExpandLessIcon className='mt10 cursor' />
                </div>
                <textarea
                  className='textarea-msg'
                  placeholder='For example: "Happy Birthday!"'
                />
              </div>

              <div className='mt30'>
                <div className='row align-center justify-between'>
                  <div className={`${width > 450 ? 'text20' : 'text16'} ml20`}>
                    Substitutions & Instructions
                  </div>
                  <ChevronRightIcon className='mt10 cursor' />
                </div>
                <div className='calc grey m20 mt10' style={{ width: 130 }}>
                  None selected
                </div>
              </div>

            </div>
          </div>

          <Footer />
        </div>
      </Dialog>
    </div>
  );
}

function MiniBox(props) {
  const { title, description, sum, topBold, small, topLight } = props;
  return (
    <div className={`row justify-between mt10 ${topBold && 'top-bold-border'} ${topLight && 'top-light-border'}`}>
      <div className={`text15 ${sum && 'font-weight-bold'} ${small && 'text12'}`}>{title}</div>
      <div className={`text15 ${sum && 'font-weight-bold'}`}>{description}</div>
    </div>
  )
}

function MiniCheckBox(props) {
  const { bottomLight, img, checked, title, description, option, nonPrice } = props;
  return (
    <div className={`row align-center justify-between mt10 ${bottomLight && 'bottom-light-border'}`}>
      <div className='row align-center'>
        <img src={checked ? option ? IMAGES.IconSelectedProduct : IMAGES.IconCheckedProduct : option ? IMAGES.IconUnSelectedProduct : IMAGES.IconUnCheckProduct} alt='check' className='cursor ml10' />
        {img && <img src={img} alt='check' className='ml10' />}
        <div className='ml10'>
          <div className='font-weight-bold'>{title}</div>
          {description && <div className='grey text12'>12 fl oz</div>}
        </div>
      </div>
      {!nonPrice && <div className={`text15 green`}> + $ 4.00</div>}
    </div>
  )
}