import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	container: {
		backgroundColor: COLORS.blueCeu,
		flex: 1,
		justifyContent: "space-around",
		padding: 40,
	},
	containerLogo: {
		alignItems: "center"
	},


	logo: {
		width: 350,
		height: 100,
	},

	containerInput: {
		marginBottom: 15,
	},

	input: {
		backgroundColor: COLORS.gray4,
		padding: 15,
		borderRadius: 6,
		borderWidth: 0.3,
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


		alignItems: "flex-end",
		justifyContent: "center",
		flexDirection: "row",

	},
	devCreatorColor: {
		color: COLORS.colorDev,
		borderRadius: 3,

	}

}