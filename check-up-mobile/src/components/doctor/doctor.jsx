import { Image, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { styles } from "./doctor.style.js";
import { BlurView } from "expo-blur";

function Doctor(props) {
	return <TouchableOpacity style={styles.doctor}>
		<Image source={props.icon} style={styles.icon} />

		<BlurView intensity={10} tint="light" style={StyleSheet.absoluteFill} />
		<View>
			<Text style={styles.name} >{props.name}</Text>
			<Text style={styles.specialty}>{props.specialty}</Text>
		</View>
	</TouchableOpacity>
}

export default Doctor
