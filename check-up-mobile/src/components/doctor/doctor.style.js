import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	doctor: {
		flex: 1,
		backgroundColor: COLORS.bgApp,
		padding: 8,
		flexDirection: "row",
		borderWidth: 1,
		borderColor: COLORS.gray3,
		marginTop: 3,
		marginBottom: 3,
		borderRadius: 10,
	},
	name: {
		fontSize: FONT_SIZE.lg,
		color: COLORS.black2,
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