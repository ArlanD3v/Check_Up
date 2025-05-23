import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	cxPai: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		backgroundColor: COLORS.blueCeu,
		paddingTop: 20,

	},

	container: {
		flex: 1,
		width: "92%",
		padding: 25,
		backgroundColor: COLORS.BGCaixa,
		borderTopEndRadius: 8,
		borderTopLeftRadius: 8,


	},
	text: {
		textAlign: "center",
		fontSize: FONT_SIZE.lg,
		color: COLORS.gray2,
		marginBottom: 15,
		marginLeft: 10,
	}

}