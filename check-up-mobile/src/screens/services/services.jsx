import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style.js";
import { doctors_services } from "../../constants/data.js";
import icon from "../../constants/icon.js"


function Services() {

	return <View style={styles.container}>

		<View style={styles.banner}>
			<Image source={icon.female} style={styles.icon} />
			<Text style={styles.text}>Arlan</Text>
		</View>


		<FlatList data={doctors_services}
			keyExtractor={(service) => service.id_service}
			showsVerticalScrollIndicator={false}

			renderItem={({ item }) => {
				return <Text>{item.description}</Text>
			}} />

	</View>
}

export default Services;