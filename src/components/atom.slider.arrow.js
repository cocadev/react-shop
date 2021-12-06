import { IMAGES } from "../configs/images";

export function AtomStore(props) {

  const { item } = props;

  return (
    <div style={{margin: '25px 10px 20px'}}>
      <img src={item.image} alt="product img" className='map-img-width' />
      <div className='mt-10'>
        <div className="text24">{item.title}</div>
        <div className="text16 grey font-weight-normal mt5">Grocery</div>
        <div className='row mt10 map-img-line'>
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
