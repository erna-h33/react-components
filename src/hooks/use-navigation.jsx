import { useContext } from "react";
import NavigationContext from "../context/navigation.jsx";

function UseNavigation() {
  return useContext(NavigationContext);
}

export default UseNavigation;
