import { Alert, Text, TouchableOpacity } from "react-native";

function Button(props) {

	function TesteClick() {
		Alert.alert("Clicou no botão");
	}

	return <>
		<TouchableOpacity onPress={TesteClick}>
			<Text >{props.text}</Text>
		</TouchableOpacity>

	</>
}

export default Button;

//1:15