import { STORESPRODUCTS } from "../../../configs/data";

export function Module4Mobile() {

  return (
    <div className='module4'>
      <p className={'near'}>Shop At Local Stores Near You</p>
      <p className='near-desc'>SpruceBox connects local businesses with local customers, providing delivery and local pickup options at the click of a button. Start shopping in your area now!</p>
      <div className='row overflowX'>
        {STORESPRODUCTS.map((item, index) =>
          <div key={index} className='relative'>
            <div style={{ backgroundImage: "url(" + item.img + ")" }} className={'shopItem'}>
              <div className='bif'>
                <div style={{ fontSize: 17, color: '#4b5563', marginTop: 10 }}>{item.title}</div>
                <div className={'row'} style={{ marginTop: 10 }}>
                  <img
                    src={item.cimg}
                    alt={'company logo'}
                    style={{ width: 30, height: 30 }}
                  />
                  <div style={{ fontWeight: '700', marginLeft: 12, fontSize: 22 }}>{item.description}</div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <div className={'btn'}>
        Explore Stores
      </div>
    </div>
  );
}