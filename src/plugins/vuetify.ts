import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
 icons: {
  defaultSet: "mdi",
  aliases,
  sets: { mdi },
 },
 theme: {
  defaultTheme: "light",
  themes: {
   light: {
    dark: false,
    colors: {
     primary: "#A2FF03", // energetic lime green
     secondary: "#556B2F", // dark olive green, natural accent
     background: "#FFFFFF", // clean white background
     surface: "#F8F8F8", // very light grey card surfaces
     success: "#4CAF50", // healthy green
     warning: "#FFC107", // energetic amber
     error: "#E53935", // attention red
     info: "#2196F3", // fresh blue for informational accents
    },
   },
   dark: {
    dark: true,
    colors: {
     primary: "#A2FF03", // keep brand lime in dark mode
     secondary: "#9ACD32", // yellow-green softer accent
     background: "#121212", // deep dark background
     surface: "#1E1E1E", // slightly lighter cards/panels
     success: "#66BB6A", // softer green
     warning: "#FFB74D", // soft amber
     error: "#EF5350", // warm red
     info: "#64B5F6", // soft blue
    },
   },
  },
 },
});
