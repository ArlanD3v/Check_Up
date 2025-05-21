import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.BGAmarelo,
		paddingTop: 50,

	},

	item: {
		borderWidth: 1,
		width: "90%",
		backgroundColor: COLORS.branco,
		borderColor: COLORS.gray1,
		borderRadius: 5,
		paddingLeft: 8,
		paddingTop: 15,
		paddingBottom: 15,
		marginBottom: 15
	},
	title: {
		fontSize: FONT_SIZE.md,
		color: COLORS.gray1,
		marginBottom: 5,

	},

	text: {
		fontSize: FONT_SIZE.lg,
		color: COLORS.gray2,
		marginLeft: 8,
	},
	senha: {
		fontSize: FONT_SIZE.lg,
		color: COLORS.gray2,
		marginLeft: 8,
	}

}