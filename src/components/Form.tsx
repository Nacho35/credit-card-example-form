import {
	Button,
	ButtonContainer,
	Container,
	Input,
	InputContainer,
	InputGroup,
	InputGroup2,
	InputGroupRow,
	InputOthers,
	Label,
	LabelContainer,
	RendersContainer,
	SecondInputContainer,
	SecondInputContainerRow,
} from "../styles/form";
import Creditcard from "./Creditcard";
import Creditcardback from "./Creditcardback";

const Form = () => {
	return (
		<Container>
			<RendersContainer>
				<Creditcardback />
				<Creditcard />
			</RendersContainer>
			<form action="#" method="post">
				<InputContainer>
					<LabelContainer>
						<Label htmlFor="cardname">cardholder name</Label>
					</LabelContainer>
					<Input
						type="text"
						name="cardname"
						id="cardname"
						placeholder="e.g. Jane Appleseed"
					/>
					<LabelContainer>
						<Label htmlFor="cardnumber">card number</Label>
					</LabelContainer>
					<Input
						type="text"
						name="cardnumber"
						id="cardnumber"
						placeholder="e.g. 1234 5678 9123 0000"
						maxLength={19}
					/>
				</InputContainer>
				<SecondInputContainer>
					<SecondInputContainerRow>
						<InputGroup>
							<LabelContainer>
								<Label htmlFor="carddate">exp. date (mm/yy)</Label>
							</LabelContainer>
							<InputGroupRow>
								<InputOthers
									type="text"
									name="carddate"
									id="carddate"
									placeholder="M"
									maxLength={2}
								/>
								<InputOthers
									type="text"
									name="cardyear"
									id="cardyear"
									placeholder="Y"
									maxLength={2}
								/>
							</InputGroupRow>
						</InputGroup>
						<InputGroup2>
							<LabelContainer>
								<Label htmlFor="code">cvc</Label>
							</LabelContainer>
							<Input
								type="number"
								name="code"
								id="code"
								placeholder="e.g. 123"
								maxLength={3}
							/>
						</InputGroup2>
					</SecondInputContainerRow>
				</SecondInputContainer>
				<ButtonContainer>
					<Button type="submit">Confirm</Button>
				</ButtonContainer>
			</form>
		</Container>
	);
};

export default Form;
