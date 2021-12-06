import { IMAGES } from "../../../configs/images";

export function Module9Mobile() {

  return (
    <div className='module9'>
      <div className={'title'} style={{ color: '#11c856' }}>THE NOW</div>
      <div className={'description'}>Stories, Trends and Happenings</div>

      <div className='row overflowX full mt20'>
        {MyItems.map((item, index) =>
          <div key={index} style={{ color: '#bebdc5', cursor: 'pointer', whiteSpace: 'nowrap', padding: '10px' }}>{item}</div>)}
      </div>

      <div className='row overflowX full mt10'>
        <div className={'mobileBox'}>
          <img src={IMAGES.ImgLandingBg1} alt='food' />
          <div>
            <div className={'newsTitle'}>
              Spruce Box Coronavirus <br />
              (COVID-19) Response
            </div>
            <div className={'newsText'}>News</div>
          </div>
        </div>

        <div className={'mobileBox'}>
          <img src={IMAGES.ImgLandingBg2} alt='food' />
          <div>
            <div className={'newsTitle'}>
              Delivering Support to<br />
              Those Most In Need
            </div>
            <div className={'newsText'}>Insight</div>
          </div>
        </div>
      </div>

      <div className={'btn'}>Read Stories</div>
    </div>
  );
}

const MyItems = ['All', 'Local Trends', 'Local Fashionists', 'Local Materials', 'Local Delivery']