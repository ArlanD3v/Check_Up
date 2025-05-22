import { View, Text } from "react-native";
import { styles } from "./schedule.style"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ptBR } from "../../constants/calendar.js"
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

function Schedule() {

	const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))
	const [selectedHour, setSelectedHour] = useState("")

	return <View style={styles.container}>

		<View style={styles.calendar}>
			<Calendar
				theme={styles.themeCalendar}
				onDayPress={(day) => {
					setSelectedDate(day.dateString)
				}}
				markedDates={{
					[selectedDate]: { selected: true }
				}}
				minDate={new Date().toDateString()}
			/>
		</View>

		<View style={styles.cxPaiSchedule}>
			<View style={styles.containerHour}>
				<Text style={styles.textHour}>Horário</Text>
			</View>


			<View style={styles.containerPicker}>
				<Picker selectedValue={selectedHour}
					onValueChange={(itemValue, itemIndex) => {
						setSelectedHour(itemValue)
					}}>
					<Picker.Item label="09:00" value="09:00" />
					<Picker.Item label="09:30" value="09:30" />
					<Picker.Item label="10:00" value="10:00" />
				</Picker>
			</View>


			<View style={styles.containerButton}>
				<Button text="Confirmar Reserva" theme="agendamento" />
			</View>
		</View>

	</View>
}

export default Schedule