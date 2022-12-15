import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function AppRouter() {
	const [t, i18n] = useTranslation();
  const [colorMode, setColorMode] = useState("dark")

	const handleClick = (lang) => {
		i18n.changeLanguage(lang);
	};

  const darkLightMode = () => {
    colorMode=="dark"?setColorMode("light"):setColorMode("dark")
  }

	return (
		<BrowserRouter>
			<div className={`bg-${colorMode=="dark"?"secondary":"body"}`}>
      <Nav
				azLang={() => {
					handleClick("az");
				}}
				itLang={() => {
					handleClick("it");
				}}
				engLang={() => {
					handleClick("eng");
				}}
				darkLightMode={() => {
					darkLightMode();
				}}
				t={t}
        colorMode={colorMode}
			/>
			<Routes>
				<Route path="/" element={<Home t={t} colorMode={colorMode} />}></Route>
			</Routes>
      </div>
		</BrowserRouter>
	);
}

export default AppRouter;
