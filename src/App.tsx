import CardsStack from "./components/CardsStack";
import Form from "./components/Form";
import {
	CardsBackground,
	CardsContainer,
	ZoomContainer,
} from "./styles/CardsContainer";

const App = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				gap: "4rem",
				width: "100%",
				minHeight: "100vh",
				flexWrap: "wrap",
				background: "#fff",
			}}>
			<div
				style={{
					flex: "1 1 400px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
				}}>
				<CardsBackground>
					<CardsContainer>
						<ZoomContainer>
							<CardsStack />
						</ZoomContainer>
					</CardsContainer>
				</CardsBackground>
			</div>
			<div
				style={{
					flex: "1 1 400px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
					background: "#fff",
				}}>
				<Form />
			</div>
		</div>
	);
};

export default App;
