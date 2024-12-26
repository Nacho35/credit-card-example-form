import {
	Button,
	ButtonContainer,
	Container,
	FormContainer,
	Input,
	InputContainer,
	InputGroup,
	InputGroupRow,
	InputOthers,
	Label,
	LabelContainer,
	SecondInputContainer,
	SecondInputContainerRow,
} from "../styles/form";

const Form = () => {
	return (
		<FormContainer>
			<Container>
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
					</InputContainer>
					<InputContainer>
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
										placeholder="MM"
										maxLength={2}
									/>
									<InputOthers
										type="text"
										name="cardyear"
										id="cardyear"
										placeholder="YY"
										maxLength={2}
									/>
								</InputGroupRow>
							</InputGroup>
							<InputGroup>
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
							</InputGroup>
						</SecondInputContainerRow>
					</SecondInputContainer>
					<ButtonContainer>
						<Button type="submit">Confirm</Button>
					</ButtonContainer>
				</form>
			</Container>
		</FormContainer>
	);
};

export default Form;
