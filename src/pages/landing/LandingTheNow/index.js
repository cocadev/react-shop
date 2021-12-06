import useWindowSize from "../../../utils/useWindowSize";
import { Module9Mobile } from "./module9.mobile";
import { Module9PC } from "./module9.pc";

export function LandingTheNow() {

  const { width } = useWindowSize();

  return (
    <div>
      {width > 430 ? <Module9PC /> : <Module9Mobile />}
    </div>
  );
}