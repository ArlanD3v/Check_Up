import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	doctor: {
		flex: 1,
		backgroundColor: COLORS.blueCeu,
		padding: 8,

		flexDirection: "row",
		borderWidth: 0.3,
		borderColor: COLORS.Borda,
		marginTop: 5,
		marginBottom: 3,
		borderRadius: 10,
	},
	name: {
		fontSize: FONT_SIZE.lg,
		color: COLORS.black1,
		marginTop: 5,
	},

	specialty: {
		fontSize: FONT_SIZE.sm,
		color: COLORS.gray2,
	},
	icon: {
		width: 50,
		height: 50,
		marginRight: 10,
	}

}