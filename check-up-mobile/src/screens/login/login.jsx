import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import icon from "../../constants/icon.js"
import { styles } from "./login.style.js"
import Button from "../../components/button/button.jsx"


function Login() {
	return <View style={styles.container}>

		<View style={styles.containerLogo}>
			<Image source={icon.nomeLogo}
				style={styles.logo} />
		</View>

		<View >
			<View style={styles.containerInput}>
				<TextInput placeholder="E-mail" style={styles.input} />
			</View>

			<View style={styles.containerInput}>
				<TextInput placeholder="Senha" style={styles.input}
					secureTextEntry={true} />
			</View>
			<View style={styles.btCenter}>
				<Button text="Acessar" />
			</View>
		</View>

		<View style={styles.footer} >

			<Text style={styles.footer}> Não tenho conta. </Text>

			<TouchableOpacity>
				<Text style={styles.footerLink} >Criar conta agora.</Text>
			</TouchableOpacity>
		</View>

		<View style={styles.devCreator}>
			<Text> Created By : </Text>
			<Text style={styles.devCreatorColor}> Arlan </Text>
		</View>

	</View>
}

export default Login