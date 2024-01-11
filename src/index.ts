import { registerTranslateConfig, use } from "lit-translate";
import en from "./i18n/en.json";
import nl from "./i18n/nl.json";

registerTranslateConfig({

  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    switch (lang) {

      // English strings
      case "en":
        return en;

      // Danish strings
      case "nl":
        return nl;
        
      default:
        throw new Error(`The language ${lang} is not supported..`);
    }
  }
});

use("en");