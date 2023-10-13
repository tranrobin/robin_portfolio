import React from "react";
import "./index.css";

const aboutMeStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "70vh",
  textAlign: "center", 
};

const containerStyle = {
  maxWidth: "800px", 
  margin: "0 auto", 
};

const paragraphStyle = {
	fontSize: "18px", 
	textAlign: "justify", 
  };

export default function AboutMe() {
  return (
    <div id="about-me-section" style={aboutMeStyle}>
      <div style={containerStyle}>
        <h2> <strong> About Me</strong></h2>
        <p style={paragraphStyle}>
          Hello there, thank you for stopping by! My name is Robin Tran, a junior at Mount Holyoke
		  College with a strong focus on software engineering and data science. My passion 
		  lies in utilizing data to create impactful software solutions, and I have gained valuable 
		  experience through my summer internships, where I had the opportunity to work on real-world 
		  projects. Recently, I am interested in and am working on a mobile app that sends encouraging
		  reminders to users randomly. 
        </p>
        <p style={paragraphStyle}>
			I am also an self-taught amateur ice-skater and pianist. Fun fact: I have a cat and 
			he doesn't have a name!
		  
        </p>
        <p style={paragraphStyle}>
			<strong> Main skills:</strong> Data Science, Data Analysis, Machine Learning, NLP, Front-end Development
        </p>
		<p style={paragraphStyle}>
        </p>
      </div>
    </div>
  );
}
