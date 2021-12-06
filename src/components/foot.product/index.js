import useWindowSize from "../../utils/useWindowSize";
import { FooterProductMobile } from "./footer.product.mobile";
import { FooterProduct } from "./footer.product.pc";

function Footer() {
  
  const { width } = useWindowSize();
  const isMobile = width < 450 ? true: false;

  return (
    <div>
      {isMobile ? <FooterProductMobile /> : <div className='center'><FooterProduct /></div>}
    </div>
  );
}

export default Footer