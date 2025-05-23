import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	doctor: {
		flex: 1,
		backgroundColor: COLORS.blueCeu,
		padding: 8,
		flexDirection: "row",
		borderWidth: 0.5,
		borderColor: COLORS.Borda,
		marginTop: 10,
		marginBottom: 3,
		borderRadius: 10,
		overflow: "hidden",
		position: "relative",
		elevation: 5
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