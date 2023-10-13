import React from "react";
import { Route, Routes, useHistory } from "react-router-dom";
import LandingPage from "./screen/landing_screen/LandingPage";
import ProjectPage from "./screen/blogs_screen/middlepage/ProjectPage";
import RetentionPage from "./screen/blogs_screen/sql/retention/RetentionPage";
import MarketCampPage from "./screen/blogs_screen/sql/marketcamp/MarketCampPage";
import UserStreakPage from "./screen/blogs_screen/sql/userstreak/UserStreakPage";
import TimeBetweenPage from "./screen/blogs_screen/sql/timebetween/TimeBetweenPage";

export default function App() {
	return (
		<div>
			<LandingPage />
			
		</div>
	);
}
