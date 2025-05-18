import { Image, View } from "react-native"
import LogoMenor from "../../assets/LNome.png"
import { styles } from "./login.style.js"


function Login() {
	return <View style={styles.container}>

		<Image source={LogoMenor}
			style={styles.logo} />
	</View>
}

export default Login