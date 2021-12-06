import useWindowSize from "../../../utils/useWindowSize";
import { Module4PC } from "./module4.pc";
import { Module4Mobile } from "./module4.mobile";

export function LandingShopAtLocal() {
  const { width } = useWindowSize();
  return (
    <div>
      {width > 430 ? <Module4PC /> : <Module4Mobile />}
    </div>
  );
}
