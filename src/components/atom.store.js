import { IMAGES } from "../configs/images";
import useWindowSize from "../utils/useWindowSize";

export function AtomStore(props) {

  const { item } = props;
  const { width } = useWindowSize();
  return (
    <div className='atomstore'>
      <img src={item.image} alt="product img" className='map-img-width' />
      <div className='mt-10'>
        <div className={width > 430 ? "text24" : 'text20 mt20'}>{item.title}</div>
        <div className={"text16 grey font-weight-normal " + width > 430 ? "mt5" : ""}>Grocery</div>
        <div className={'row map-img-line ' + width > 430 ? 'mt10' : 'mt5 row'}>
          <div className='row align-center font-weight-bold'>
            {item.rating}&nbsp;
            <img src={IMAGES.IconFullStarProduct} alt='bx' />
          </div>
          <div className='row align-center '>&nbsp;
            <img src={IMAGES.IconLocationPlusProduct} alt='bx' />&nbsp;
            {item.location}
          </div>
          <div className='row align-center grey '>&nbsp;&nbsp;
            <img src={IMAGES.IconTimeProduct} alt='bx' />&nbsp;
            {item.time}
          </div>
        </div>
      </div>
    </div>
  );
}
