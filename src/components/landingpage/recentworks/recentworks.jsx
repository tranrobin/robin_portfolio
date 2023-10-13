import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import "./recent.css";
import stock from "../../../assets/images/stock.jpg";
import research from "../../../assets/images/research.jpg";
import flappy from "../../../assets/images/flappy.png";
import disaster from "../../../assets/images/disaster.jpeg";

export default function RecentWorks() {
	const recentWorks = [
		{
			title: "Stock Prediction and Analysis",
			subTitile: "Python (pandas, numpy, matplotlib, scikit-learn, Keras, TensorFlow), LSTM, ARIMA, SMA",
			discription:
				"Stock prediction and analysis using various time series analysis and machine learning techniques.",
			image: stock,
			link: "https://github.com/tranrobin/stock-prediction",
			target:"",
		},
		{
			title: "AI-Powered ResearchAssisstant with Metaphor and OpenAI",
			subTitile:
				"Python, Metaphor API, OpenAI's GPT-3, requests, BeautifulSoup",
			discription:
				"The AI-Powered Research Assistant combines OpenAI's GPT-3 and Metaphor API to retrieve and offer article titles, URLs, author names, and summaries for relevant content.",
			image: research, 
			link: "https://github.com/tranrobin/ResearchAssistantwithMetaphorAI",
			target: "",
		},
		{
			title: "Angry Flappy Bird",
			subTitile:
				"Java, Scene Graph API",
			discription: "A version of Flappy Bird with many new features.",
			image: flappy,
			link: "https://github.com/tranrobin/AngryFlappyBird",
			target: "_blank",
		},
		{
			title: "AI-Powered Disaster Warning System",
			subTitile:
				"AI, Python",
			discription:
				"Collaborate on the development of an AI-powered early warning system for floods and earthquakes in vulnerable regions.",
			image: disaster,
			link: "https://omdena.com/chapter-challenges/developing-ai-driven-solutions-for-disaster-response-and-recovery-in-nigeria/",
			target: "_blank",
		},
	];

	return (
		<div id = "project-section" className="half-white-half-dark">
			<Container className="pb-5">
				<Row className="text-center text-white py-5">
					<Col>
						<h2 className="fw-bolder mb-0" style={{ color: "#000000" }}>
							Recent Works
						</h2>
					</Col>
				</Row>
				<Col md={6} xs={12} className="offset-md-3 mb-5 mb-lg-0 text-center">
					<Row xs={1} md={2} className="g-1">
						{recentWorks.map((item, index) => (
							<Col key={index}>
								<Card className="custom-card">
									<Card.Img
										className="rounded-0 border-0 card-image"
										variant="top"
										src={item.image}
										style={{ objectFit: "cover" }}
									/>
									<Card.Body className="hover-info bottom-0">
										<Card.Title className="cus-card-title">
											{item.title}
										</Card.Title>
										<Card.Text className="cus-card-subtitle">
											{item.subTitile}
										</Card.Text>
										<Card.Text className="cus-card-description">
											{item.discription}
										</Card.Text>
										<Card.Link
											href={item.link}
											className="btn btn-warning text-black"
											target={item.target}
										>
											View more
										</Card.Link>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Container>
		</div>
	);
}
