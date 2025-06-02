// src/Translation/translations.js
import es from "../../assets/es.svg";
import Ar from "../../assets/sy.svg";
import tr from "../../assets/tr.svg";
import En from "../../assets/us.svg";
/* the language */
import Arabic from "./language/Arabic";
import English from "./language/English";
import Spanish from "./language/Spanish ";
import Turkish from "./language/Turkish";
import kurdî from "./language/kurdî";

export const languages = [
  { code: "en", name: "English", flag: En },
  { code: "ar", name: "العربية", flag: Ar },
  { code: "es", name: "Español", flag: es },
  { code: "tr", name: "Türkçe", flag: tr },
  { code: "ku", name: "Kurdî", flag: Ar },
];
export const translations = {
  en: English,
  ar: Arabic,
  es: Spanish,
  tr: Turkish,
  ku: kurdî,
};
