import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";
function Button(props) {

	return <>
		<TouchableOpacity style={[styles.btn,
		props.theme == "danger"
			? styles.danger
			: props.theme == "primary"
				? styles.primary
				: styles.agendamento]}>

			<Text style={styles.text}>

				{props.text}</Text>
		</TouchableOpacity>
	</>
}

export default Button;
