import {Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "../screen/landing_screen/LandingPage";
import AboutMe from "/Users/robintran/Documents/qu…/react-port/src/components/landingpage/aboutme/AboutMe.jsx";

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route aboutme = "aboutme" element={<AboutMe />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
