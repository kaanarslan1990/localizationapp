import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState, useEffect } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Kaan",
    description: "3 yeni mesajnız var!",
  },
  "en-US": {
    title:"Hello Kaan",
    description:"You have 3 messages!"


  }
};
function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale)

  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        
        <FormattedMessage
          id="title"  />
        <p>
        <FormattedMessage
          id="description"  />
        </p>
          <br />
          <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
