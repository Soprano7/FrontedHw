type InputPropsType = {
	currentText: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	setCurrentText: (text: string) => void; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler =  (event: React.ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.target.value);
		// НУЖНО ДОПИСАТЬ
	};

	 return (
	   <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	 );
};
