import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./i18n/LocaleSwitcher";
import "./App.css"

function App() {

  const { t } = useTranslation();

  return (
    <div className="app-center-all">
      {/* We pass the key we provided under
          `resources.translation` in 
          src/i18n/config.ts */}
      <LocaleSwitcher />
      <h2>{t("hello_world")}</h2>
    </div>
  );
}

export default App