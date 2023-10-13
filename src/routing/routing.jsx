import {Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "../screen/landing_screen/LandingPage";
function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
