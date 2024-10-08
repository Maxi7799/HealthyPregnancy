import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import { store } from "./store/index";
import { Provider } from "react-redux";
import global_en from "./translation/en/global.json";
import global_zh from "./translation/zh/global.json";
import global_id from "./translation/id/global.json";
import global_fil from "./translation/fil/global.json";
import global_ms from "./translation/ms/global.json";
import global_vi from "./translation/vi/global.json";
import i18next from "i18next";
import "./index.css";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    zh: {
      global: global_zh,
    },
    id: {
      global: global_id,
    },
    fil: {
      global: global_fil,
    },
    ms: {
      global: global_ms,
    },
    vi: {
      global: global_vi,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
