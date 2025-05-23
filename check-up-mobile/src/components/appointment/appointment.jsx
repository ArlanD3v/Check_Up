import { Image, StyleSheet, Text, View } from "react-native"
import { styles } from "./appointment.style.js"
import icon from "../../constants/icon.js"
import Button from "../button/button.jsx"
import { BlurView } from "expo-blur"

function Appointment(props) {
	return <View style={styles.appointment}>
		<Text style={styles.name}> {props.service} - {props.doctor}
		</Text>
		<Text style={styles.specialty}> {props.specialty}</Text>
		<BlurView intensity={10} tint="light" style={StyleSheet.absoluteFill} />

		<View style={styles.container}>
			<View style={styles.containerBooking}>

				<View style={styles.booking}>
					<Image style={styles.icon}
						source={icon.calendar} />
					<Text style={styles.bookingDate}>
						07/06/1999
					</Text>
				</View>

				<View style={styles.booking}>
					<Image style={styles.icon}
						source={icon.clock} />
					<Text style={styles.bookingHour}>
						18:00
					</Text>
				</View>

			</View>

			<View style={styles.containerButton}>
				<Button text="Cancelar Reserva" theme="danger" />
			</View>
		</View>
	</View >
}

export default Appointment