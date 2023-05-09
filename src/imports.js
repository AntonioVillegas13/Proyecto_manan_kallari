import moderna_icon from "./assets/images/logo_main.png";
import moderna_icon_red from "./assets/images/logo_red.png";
//general
export { default as ROUTES } from "./util/routes";

//from Commons
export { default as DropButton } from "./common/dropbutton/dropbutton";
export { default as CrudButton } from "./common/buttons/crud-button/crud-button";
export { default as PathDisplay } from "./common/path-display/path-display";
export { default as Navbar } from "./common/navbar/navbar";
export { default as ComboBox } from "./common/combo/combo";
export { default as Transition } from "./common/transition/transition";
export { default as Loading } from "./common/loading/loading";
export { default as Alert } from "./common/alert/alert";
export { default as Modal } from "./common/modal/modal";
export { default as Checkbox } from "./common/checkbox/checkbox";
export { default as Carrusel } from "./common/carrusel/carrusel";
export { default as ButtonModerna } from "./common/buttons/button-moderna/moderna-button";

//pages
export { default as Login } from "./pages/sign-in/sign-in";
export { default as CreateVariable } from "./pages/variables/create/create";
export { default as Error404 } from "./pages/404/404";
export { default as CreateExhibidor } from "./pages/exhibidor/create/create-exhibidor";
export { default as RegisterExhibidor } from "./pages/exhibidor/register/register-exhibidor";
export { default as Planograma } from "./pages/exhibidor/planograma/planograma";
export { default as TestPage } from "./pages/test-page";

export const DEFAULT_USER_PICTURE =
  "https://www.tenforums.com/geek/gars/images/2/types/thumb_14331780800User.png";

export const ICON_MODERNA = moderna_icon;
export const ICON_MODERNA_RED = moderna_icon_red;
