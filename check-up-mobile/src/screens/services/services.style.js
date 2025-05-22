import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	container: {
		flex: 1,
		backgroundColor: COLORS.rosa,

	},
	banner: {
		backgroundColor: COLORS.rosa,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 30,
		paddingBottom: 20,

	},
	name: {
		fontSize: FONT_SIZE.xl,
		color: COLORS.branco,
		fontWeight: "bold",
		marginTop: 5
	},
	specialty: {
		fontSize: FONT_SIZE.md,
		color: COLORS.gray2,
		marginTop: 3

	},

	icon: {
		width: 100,
		height: 100,
	}

}