import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

export default function CustomNavBar() {
	const menuStyle = {
		color: "#ffffff",
		margin: "0 10px",
		fontSize: "16px", // Set the desired font size here
	};

	return (
		<Navbar
			style={{ backgroundColor: "#839788", opacity: 0.98 }}
			expand="lg"
			variant="dark"
			fixed="top"
		>
			<div className="container">
				<Navbar.Brand style={{ color: "#ffffff" }}>
					<strong>Robin Tran</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto" style={{ alignItems: "center" }}>
						<Nav.Link href="/" style={{ ...menuStyle, marginRight: "10px" }}>
							Home
						</Nav.Link>
						<ScrollLink
							to="about-me-section"
							smooth={true}
							duration={100}
							style={{ ...menuStyle, marginRight: "10px" }}
						>
							About
						</ScrollLink>
						<ScrollLink
							to="experience-section"
							smooth={true}
							duration={100}
							style={{ ...menuStyle, marginRight: "10px" }}
						>
							My Experiences
						</ScrollLink>
						<ScrollLink
							to="project-section"
							smooth={true}
							duration={100}
							style={{ ...menuStyle, marginRight: "10px" }}
						>
							My Projects
						</ScrollLink>
						<ScrollLink
							to="skill-section"
							smooth={true}
							duration={100}
							style={{ ...menuStyle, marginRight: "10px" }}
						>
							My Skills
						</ScrollLink>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}
