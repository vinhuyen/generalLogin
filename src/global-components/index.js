import "zoom-vanilla.js/dist/zoom-vanilla.min.js";
import Litepicker from "./litepicker/Main.vue";
import Tippy from "./tippy/Main.vue";
import TippyContent from "./tippy-content/Main.vue";
import TomSelect from "./tom-select/Main.vue";
import LoadingIcon from "./loading-icon/Main.vue";
import Dropzone from "./dropzone/Main.vue";
import Notification from "./notification/Main.vue";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownHeader,
  DropdownFooter,
  DropdownDivider,
} from "./dropdown";
import { Alert } from "./alert";

export default (app) => {
  app.component("Litepicker", Litepicker);
  app.component("Tippy", Tippy);
  app.component("TippyContent", TippyContent);
  app.component("TomSelect", TomSelect);
  app.component("LoadingIcon", LoadingIcon);
  app.component("Dropzone", Dropzone);
  app.component("Notification", Notification);
  app.component("Dropdown", Dropdown);
  app.component("DropdownToggle", DropdownToggle);
  app.component("DropdownMenu", DropdownMenu);
  app.component("DropdownContent", DropdownContent);
  app.component("DropdownItem", DropdownItem);
  app.component("DropdownHeader", DropdownHeader);
  app.component("DropdownFooter", DropdownFooter);
  app.component("DropdownDivider", DropdownDivider);
  app.component("Alert", Alert);
};
