import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	container: {
		backgroundColor: COLORS.BGAmarelo,
		flex: 1,
		justifyContent: "space-around",
		padding: 40,
	},
	containerLogo: {
		alignItems: "center"
	},

	logo: {

		width: 300,
		height: 208,

	},

	containerInput: {
		marginBottom: 15,

	},

	input: {
		backgroundColor: COLORS.gray5,
		padding: 10,
		borderRadius: 6,
		borderWidth: 0.5,
		borderColor: COLORS.cinza1,
	},

	btCenter: {
		alignItems: "center",
		justifyContent: "center"
	},

	footer: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		fontSize: FONT_SIZE.md,

	},

	footerLink: {
		color: COLORS.azul1,
		fontSize: FONT_SIZE.lg,
	},

	devCreator: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",

	},
	devCreatorColor: {
		color: COLORS.colorDev,
		borderRadius: 3,
	}

}