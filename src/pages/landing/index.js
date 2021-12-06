import Footer from "../../components/foot.product";
import { HeaderAuth } from "../../components/header.auth";
import { LandingInterfacePage } from "./landingInterfacePage";
import { LandingCategoryList } from "./landingCategoryList";
import { LandingCarProfile } from "./landingCarProfile";
import { LandingShopAtLocal } from "./LandingShopAtLocal/index.js";
import { LandingExploreCategory } from "./landingExploreCategory";
import { LandingSmartShopping } from "./LandingSmartShopping";
import { LandingOurFreelance } from "./landingOurFreelance";
import { LandingLiterally } from "./landingLiterally";
import { LandingTheNow } from "./LandingTheNow/index.js";
import { LandingJoin } from "./landingJoin";

export function Landing() {
  return (
    <div>
      <HeaderAuth />  
      <LandingInterfacePage />  
      <LandingCategoryList />  
      <LandingCarProfile />  
      <LandingShopAtLocal />  
      <LandingExploreCategory />  
      <LandingSmartShopping /> 
      <LandingOurFreelance />
      <LandingLiterally />  
      <LandingTheNow /> 
      <LandingJoin /> 
      <Footer />
      <br/>
    </div>
  );
}