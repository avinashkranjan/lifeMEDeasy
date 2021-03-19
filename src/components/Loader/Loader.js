import { BoxesLoader } from "react-awesome-loaders";
import localclasses from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={localclasses.load}>
      <BoxesLoader
        boxColor={"#350066"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </div>
  );
};
export default Loader;