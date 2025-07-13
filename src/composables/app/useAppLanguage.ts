import { useLocalStorage } from "@vueuse/core";

const useAppLanguage = () => {
 const deviceLanguage = navigator.language ?? "en";
 const lang = useLocalStorage("app-lang", deviceLanguage.split("-")[0]);
 const setLang = (newLang: string) => {
  lang.value = newLang;
 };
 return {
  lang,
  setLang,
 };
};

export default useAppLanguage;
