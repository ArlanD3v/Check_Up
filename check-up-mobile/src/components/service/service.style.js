import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
	service: {
		flex: 1,
		backgroundColor: COLORS.blueCeu,
		flexDirection: "row",
		marginTop: 7,
		marginLeft: 5,
		marginRight: 10,
		padding: 12,
		borderWidth: 4,
		borderColor: COLORS.confirmAgendamento,

		borderTopLeftRadius: 1,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 25,


	},
	containerText: {
		flex: 1
	},
	containerButton: {
		marginTop: 5
	},
	description: {
		fontSize: FONT_SIZE.md,
		color: COLORS.gray2,
		marginTop: 3

	},

	price: {
		fontSize: FONT_SIZE.md,
		color: COLORS.azul1,
		marginTop: 3
	}

}