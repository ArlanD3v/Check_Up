import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	appointment: {
		flex: 1,
		marginTop: 1,
		backgroundColor: COLORS.blueCeu,
		padding: 8,
		marginTop: 15,
		borderWidth: 1,
		borderColor: COLORS.gray,
		borderRadius: 10,
		overflow: "hidden",
		position: "relative",
		elevation: 3

	},

	name: {
		fontSize: FONT_SIZE.md,
		color: COLORS.gray2,
		marginBottom: 2,

	},
	specialty: {
		fontSize: FONT_SIZE.sm,
		color: COLORS.gray2,
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