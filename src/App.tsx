import { Fragment } from "react";
import Creditcard from "./components/Creditcard";
import Creditcardback from "./components/Creditcardback";
import Form from "./components/Form";
import { CardsContainer, ZoomContainer } from "./styles/CardsContainer";

const App = () => {
	return (
		<Fragment>
			<CardsContainer>
				<ZoomContainer>
					<Creditcard />
					<Creditcardback />
				</ZoomContainer>
			</CardsContainer>
			<Form />
		</Fragment>
	);
};

export default App;
