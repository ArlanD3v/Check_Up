import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	doctor: {
		flex: 1,
		backgroundColor: COLORS.AzulAction,
		padding: 8,
		flexDirection: "row",
		borderWidth: 0.6,
		borderColor: COLORS.Borda,
		marginTop: 3,
		marginBottom: 3,
		borderRadius: 10,
	},
	name: {
		fontSize: FONT_SIZE.lg,
		color: COLORS.branco,
		marginTop: 5,
	},

	specialty: {
		fontSize: FONT_SIZE.sm,
		color: COLORS.gray5,
	},
	icon: {
		width: 50,
		height: 50,
		marginRight: 10,
	}

}