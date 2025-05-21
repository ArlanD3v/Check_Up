import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	appointment: {
		flex: 1,
		marginTop: 1,
		backgroundColor: COLORS.AmareloBack,
		padding: 8,
		marginTop: 9,
		borderWidth: 1,
		borderColor: COLORS.gray,
		borderRadius: 6,

	},

	name: {
		fontSize: FONT_SIZE.md,
		color: COLORS.gray2,
		marginBottom: 2,

	},
	specialty: {
		fontSize: FONT_SIZE.sm,
		color: COLORS.gray1,
		marginBottom: 4,

	},
	icon: {
		width: 25,
		height: 25,
		margin: 2
	},
	bookingDate: {
		fontSize: FONT_SIZE.sm,
		color: COLORS.gray1,
		marginTop: 5,
		marginLeft: 5,
	},
	bookingHour: {
		fontSize: FONT_SIZE.sm,
		color: COLORS.azul1,
		marginTop: 5,
		marginLeft: 5,
	},

	booking: {
		flexDirection: "row",

	},

	container: {
		flexDirection: "row"
	},

	containerBooking: {
		flex: 1,

	},
	containerButton: {
		marginTop: 6
	}


}