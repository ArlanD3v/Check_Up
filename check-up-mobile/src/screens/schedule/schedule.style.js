import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
	container: {
		flex: 1,
		backgroundColor: COLORS.rosa,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 55,


	},
	calendar: {
		borderRadius: 10,
		overflow: 'hidden', // para garantir que o radius funcione
		elevation: 4, // sombra Android
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		marginBottom: 16,

	},
	themeCalendar: {
		height: 380,
		backgroundColor: COLORS.azulFort,
		arrowColor: COLORS.black2,
		calendarBackground: COLORS.branco,
		textSectionTitleColor: COLORS.AzulAction,
		selectedDayBackgroundColor: COLORS.verde2,
		selectedDayTextColor: COLORS.azul1,
		todayTextColor: COLORS.azul1,
		dayTextColor: COLORS.black2,
		textDisabledColor: COLORS.gray1,
	},
	cxPaiSchedule: {
		alignItems: "center",
	},

	containerHour: {
		width: "95%",
		backgroundColor: COLORS.verde1,
		marginTop: 15,
		alignItems: "center",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderWidth: 4,
		borderColor: COLORS.verde3
	},

	textHour: {
		fontSize: FONT_SIZE.lg,
		fontWeight: "bold",
		color: COLORS.gray2,
		padding: 10,

	},

	containerPicker: {
		backgroundColor: COLORS.gray5,
		width: "95%",
		elevation: 4, // sombra Android
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,

	},

	containerButton: {
		width: "95%",
		paddingTop: 10,

	}
}