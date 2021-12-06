import { makeStyles } from '@material-ui/core';
import Footer from '../components/foot.product';
import { HeaderMap } from '../components/header.map';
import { IMAGES } from '../configs/images';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
  container: {
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 30
  },
  bgImg: {
    zIndex: -1,
    top: 0,
    position: 'absolute',
    width: '100%',
    height: 326,
    backgroundRepeat: 'no-repeat',
    background: '#f7f8fc'
  },
}))

export function Orders() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderMap background={true} isListMapDisable={true}/>
      <div className={classes.bgImg} />
      <div className={classes.container}>

          <div className={'text64 text-center'}>My Orders</div>
          <div className='text24 text-center grey '>4 Orders</div>

          <div className='mt100 row flex-wrap center'>

            <OrderItem price={4.32} title={'World Foods'} img={IMAGES.Img1Store} tag={'Completed'}/>
            <OrderItem price={84.32} title={'Target'} img={IMAGES.Img5Store} tag={'Canceled'}/>
            <OrderItem price={54.62} title={'Target'} img={IMAGES.Img5Store} tag={'Canceled'}/>
            <OrderItem price={1.38} title={'Walmart'} img={IMAGES.Img2Store} tag={'Canceled'}/>
            <OrderItem price={2.49} title={'Metro'} img={IMAGES.Img3Store} tag={'Canceled'}/>
            <OrderItem price={7.23} title={'World Foods'} img={IMAGES.Img4Store} tag={'Completed'}/>

          </div>

        <div className='full'>
          <Footer />
        </div>

      </div>
    </div>
  );
}

function OrderItem(props){
  
  const {price, title, img, tag} = props;
  const history = useHistory();

  return(
    <div className='row box-shadow m20'>
      <div className='respon-330'>
        <div className='row align-center'>
          <img className='border-radius-large' src={img} alt='store' style={{width: 60}}/>
          <div className='ml20 text22'>{title}</div>
        </div>
        <div className='grey mt20'>Aug 25, 5:00 pm -7:00 pm</div>
        <div className={`${tag === 'Completed' ? 'green' : 'red'} mt20 font-weight-500`}>{tag}</div>
        <div className='row align-center mt20'>
          <div className='text22 mr20'>$ {price}</div>
          <div className='btn-green-normal2 ml30' onClick={()=>history.push('/orders/1')}>Reorder</div>
        </div>
      </div>
      <div className='row flex-wrap' style={{maxWidth: 130}}>
        <img src={IMAGES.IconProduct20} alt='product' className=''/>
        <img src={IMAGES.IconProduct24} alt='product' className='ml20'/>
        <img src={IMAGES.IconProduct28} alt='product' className=''/>
        <img src={IMAGES.IconProduct29} alt='product' className='ml20'/>
        <img src={IMAGES.IconProduct30} alt='product' className=''/>
        <div className='bg-grey p10 green text16 ml20 mt20' style={{height: 20}}>+4</div>
      </div>
    </div>
  )
}