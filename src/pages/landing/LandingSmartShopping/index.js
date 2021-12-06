import useWindowSize from "../../../utils/useWindowSize";
import { Module6Mobile } from "./module6.mobile";
import { Module6Pc } from "./module6.pc";

export function LandingSmartShopping() {

  const { width } = useWindowSize();

  return (
    <div>
      {width < 430 ? <Module6Mobile /> : <Module6Pc />}
    </div>
  );
}
