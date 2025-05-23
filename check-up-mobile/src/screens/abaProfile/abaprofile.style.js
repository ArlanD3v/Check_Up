import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	cxPai: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		backgroundColor: COLORS.blueCeu,
		paddingTop: 20
	},

	container: {
		flex: 1,
		width: "90%",
		alignItems: "center",
		backgroundColor: COLORS.BGCaixa,
		paddingTop: 50,
		borderTopEndRadius: 8,
		borderTopLeftRadius: 8,

	},

	item: {
		borderWidth: 1,
		width: "90%",
		backgroundColor: COLORS.branco,
		borderColor: COLORS.gray1,
		borderRadius: 3,
		paddingLeft: 8,
		paddingTop: 10,
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