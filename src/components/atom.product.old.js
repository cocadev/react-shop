import { Dialog, Box } from "@material-ui/core";
import { useState } from "react";
import StarIcon from '@material-ui/icons/Star';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { IMAGES } from "../configs/images";
import useWindowSize from "../utils/useWindowSize";

export function AtomProduct(props) {

  const { item } = props;
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0); // 0 - product, 1 - nutrition, 2- reviews
  const {width} = useWindowSize();

  return (
    <div className='cursor'>
      <div className='product-item' onClick={() => setOpen(true)}>
        <img src={item.img} alt={'img'} />
        <div className='green text20 mt20 relative'>${item.new_price}&nbsp;</div>
        <div className='text18 mt10'>{item.title}</div>
        <div className={width > 450 ? 'text12 mt5 grey' : 'product-texts'}>{item.description}</div>
        <div className={width > 450 ? 'product-tag mt5' : 'product-tag mt5'}>Today, 2:00-9:00 PM</div>
      </div>

      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        className='pdialog'
      >
        {tab === 0 && <div className='pdialogBox'>
          <div className='row justify-end'>
            <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={() => setOpen(false)} /><br />
          </div>

          <div className='center'>
            <img src={item.img} alt={'icon'} style={{ height: 130 }} />
          </div>

          <div className='text28 mt12'>{item.title}</div>

          <div className='row justify-between mt10'>
            <span className='text27 dark-green'>${item.new_price}</span>
            <div className='row black align-center'>
              <div className={'calc'} style={{ marginRight: 12 }}>-</div> {2} <div className={'calc'} style={{ marginLeft: 12 }}>+</div>
            </div>
          </div>

          <div className='row mt10'>
            <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
            <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
            <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
            <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />&nbsp;
            <img src={IMAGES.IconFullStarProduct} alt={'star icon'} />
          </div>

          <div className='mt3'>(6 ratings)</div>

          <div className='calc mt12' style={{ padding: '2px 14px' }}>
            Rate
          </div>

          <div className='text15 mt12 mb18'>Price/LB, 1Piece (~4 OZ)</div>

          <div className='row align-center'>
            <img src={IMAGES.IconSettingsCart} alt={'icon'} style={{ height: 20 }} /> &nbsp;&nbsp;
            <span className='text15 dark-green font-weight-bold'>Product Available</span>
          </div>

          <div className='row text20 mt10 cursor'>
            <span onClick={() => setTab(0)}>Product</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#ccc' }}>Nutrition</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#ccc' }} onClick={() => setTab(2)}>Reviews</span>
          </div>

          <div className='row justify-between mt10'>
            <div className='text15' style={{ color: '#31333B' }}>Price / Piece:</div>
            <div className='text15' style={{ color: '#21A453' }}>$ 0.15 / pc</div>
          </div>

          <div className='row justify-between mt10'>
            <div className='text15' style={{ color: '#31333B' }}>Price / Lb:</div>
            <div className='text15' style={{ color: '#21A453' }}>$ 0.15 / lb</div>
          </div>

          <div className='row justify-between mt10'>
            <div className='text15' style={{ color: '#31333B' }}>Package:</div>
            <div className='text15' style={{ color: '#31333B' }}>5 Unit Approx</div>
          </div>

          <div className='row justify-between mt10'>
            <div className='text15' style={{ color: '#31333B' }}>Origin:</div>
            <div className='text15' style={{ color: '#31333B' }}>Costa Rica, Ecuador</div>
          </div>

          <div className='text15' style={{ color: '#7c7b8a', marginTop: 22 }}>
            Soft, sweet and delicious, the banana is a popular choice for breakfast, snacks, or any time of the day.
            The vibrant yellow peel provides natural protection, and is a great indicator of when the fruit is ready to eat.
          </div>

          <div className='cartBtn'>
            Add to Cart
          </div>
        </div>}

        {tab === 2 &&
          <div className='pdialogBox'>
            <div className='row justify-end'>
              <img className='cursor' src={IMAGES.IconCloseMap} alt={'icon'} onClick={() => setOpen(false)} /><br />
            </div>

            <Box mt={-3}>
              <span className='text24'>{item.title}</span>
              <span className='text24'>${item.new_price}</span>
            </Box>

            <div className='row text20 mt10 cursor'>
              <span style={{ color: '#ccc', paddingBottom: 7 }} onClick={() => setTab(0)}>Product</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: '#ccc', paddingBottom: 7 }}>Nutrition</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ borderBottom: '3px solid #333', paddingBottom: 7 }} onClick={() => setTab(2)}>Reviews</span>
            </div>

            <ProgressBar star={1} score={3} count={12} color={'#21a453'} bgColor={'#F0FAF3'} />
            <ProgressBar star={2} score={6} count={23} color={'#ecb94f'} bgColor={'#FDF8EC'} />
            <ProgressBar star={3} score={0} count={0} color={'#e8543f'} bgColor={'#FBEFEE'} />
            <ProgressBar star={4} score={1} count={5} color={'#7c7b8a'} bgColor={'#EAEFF5'} />
            <ProgressBar star={5} score={0.6} count={2} color={'#31333b'} bgColor={'#F7F8FC'} />

            <div className='text18 mt10'>Have you bought this product?</div>

            <Box mt={4}>
              <span className='wBtn'>Write a Review</span>
            </Box>

            <Box mt={5} className='row justify-between' >
              <div className='row'>
                <img className='avatar' src="https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png" alt="avatar" />
                <div>
                  <div className='text20'>Stella Jones</div>
                  <Box mt={1} className='text14 grey'>12th August, 2020</Box>
                </div>
              </div>
              <div className='row align-center cursor' style={{ border: '1px solid #e5e5e5', borderRadius: 7, padding: '3px 16px' }}>
                <ThumbUpAltIcon />
                <span className='text14 dark-green font-weight-bold'>&nbsp;&nbsp;&nbsp;45</span>
              </div>
            </Box>

            <Box mt={3} className='text18'>Excellent quality, nice size and colour!</Box>
            <Box mt={1} className='text14 grey'>Really good! Would order again.</Box>

            <div className='text18 mt10'>Pros</div>
            <div className='text14 grey mt3'>
              · There's a mix between perfect yellow and slight green banans, meaning you can choose choose which one you want.
            </div>
            <div className='text14 grey'>
              · Arrives without any bruising and firm.
            </div>

            <div className='text18 mt10'>Cons</div>
            <div className='text14 grey mt3'>
              · The packaging could be a bit better, but otherwise it’s alright.
            </div>

          </div>}
      </Dialog>
    </div>
  );
}

function ProgressBar(props) {

  const { star, score, count, color, bgColor } = props;

  return (
    <div className='row align-center'>
      <div className='row align-center' style={{ padding: '3px 12px', borderRadius: 4, marginRight: 12, background: bgColor, marginTop: 8 }}>
        <StarIcon style={{ color: color, fontSize: 16 }} />
        <span style={{ color: color, fontSize: 12, marginLeft: 4 }}>{star}</span>
      </div>
      <div style={{ width: '100%', height: 3, background: '#EAEFF5', marginTop: 6 }}>
        <div style={{ width: `${score}0%`, height: 3, background: '#21A453' }}></div>
      </div>
      <div className={'reviews'}>
        {count} reviews
      </div>
    </div>
  )
}