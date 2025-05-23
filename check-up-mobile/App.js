import Account from "./src/screens/account/account.jsx";
import Login from "./src/screens/login/login.jsx";
import AbaHome from "./src/screens/abHome/abahome.jsx";
import AbaCalendar from "./src/screens/abaCalendar/abacalendar.jsx";
import AbaProfile from "./src/screens/abaProfile/abaprofile.jsx";
import Main from "./src/screens/main/main.jsx";
import Services from "./src/screens/services/services.jsx";
import Schedule from "./src/screens/schedule/schedule.jsx";

import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { COLORS } from "./src/constants/theme.js";

function App() {
	return (
		<NavigationContainer>
			<View style={{ flex: 1, backgroundColor: COLORS.blueCeu }}>
				<Main />
			</View>
		</NavigationContainer>
	);
}
export default App