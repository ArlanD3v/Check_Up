import { COLORS, FAMILY } from "../../constants/theme.js"

export const styles = {

	container: {
		backgroundColor: COLORS.green1,
		flex: 1,
		justifyContent: "space-around",
		padding: 40,
	},
	containerLogo: {
		alignItems: "center"
	},

	logo: {
		width: 340,
		height: 120,
	},

	containerInput: {
		marginBottom: 15,
	},

	input: {
		backgroundColor: COLORS.gray3,
		padding: 10,
		borderRadius: 6,

	},


	footer: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",

	},


	footerLink: {
		color: COLORS.blue,
	},

	devCreator: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",

	},
	devCreatorColor: {
		color: COLORS.colorDev,
		borderRadius: 3,
		backgroundColor: COLORS.green2
	}

}