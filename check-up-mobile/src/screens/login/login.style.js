import { COLORS, FONT_SIZE } from "../../constants/theme.js"

export const styles = {

	container: {
		backgroundColor: COLORS.bgApp,
		flex: 1,
		justifyContent: "space-between",
		padding: 40,
	},
	containerLogo: {

		alignItems: "center"
	},


	logo: {
		width: 200,
		height: 208,
	},

	containerInput: {
		marginBottom: 15,
	},

	input: {
		backgroundColor: COLORS.gray3,
		padding: 10,
		borderRadius: 6,

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
		color: COLORS.blue,
		fontSize: FONT_SIZE.md,
	},

	devCreator: {

		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",

	},
	devCreatorColor: {
		color: COLORS.colorDev,
		borderRadius: 3,
		backgroundColor: COLORS.verde1
	}

}