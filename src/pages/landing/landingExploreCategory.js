import { CATEGORIES } from "../../configs/data";
import { Link } from "react-router-dom";

export function LandingExploreCategory(props) {

  const {left} = props;

  return (
    <div className='module5'>
      <div className={`${left ? 'text36 ml30' : 'text36 text-center'}`}>Explore by Category</div>
      <div className='row center flex-wrap mt10'>
        {CATEGORIES.map((item, index) =>
          <Link to={'products/' + item.cId} key={index} className='goods'>
            <div className='rounded'>
              <img src={item.image} alt={'icon'} />
            </div>
            <div className='mt20 font-weight-700 text16 black'>{item.title}</div>
            <div className='grey text14 mt5'>{item.products} products</div>
          </Link>)}
      </div>
    </div>
  );
}
