import { COLORS, FONT_SIZE } from '../../constants/theme.js';

export const styles = {
	btn: {
		borderRadius: 6,
		padding: 12,

	},
	primary: {
		width: "50%",
		backgroundColor: COLORS.rosa,
	},
	text: {
		color: "#FFF",
		fontSize: FONT_SIZE.md,
		textAlign: "center",
	},
	agendamento: {
		width: "100%",
		backgroundColor: COLORS.confirmAgendamento,
		borderRadius: 10,
		borderColor: COLORS.bgApp,
		borderWidth: 2,
	},

	danger: {
		width: "100%",
		backgroundColor: COLORS.cancel,
		padding: 5,
		borderRadius: 3,

	},
	textDanger: {
		color: "#FFF",
		fontSize: FONT_SIZE.sm,
		textAlign: "center",
	},



}