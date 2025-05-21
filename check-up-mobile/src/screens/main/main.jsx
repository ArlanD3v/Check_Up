import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator, TransitionSpecs } from "@react-navigation/bottom-tabs"
import icon from "../../constants/icon.js"

import AbaHome from "../abHome/abahome.jsx"
import AbaCalendar from "../abaCalendar/abacalendar.jsx"
import AbaProfile from "../abaProfile/abaprofile.jsx"
import { Image } from "react-native"
import { COLORS } from "../../constants/theme.js"

const Tab = createBottomTabNavigator()

function Main() {
	return <NavigationContainer>
		<Tab.Navigator
			screenOptions={{
				animation: "shift",

			}}
		>
			<Tab.Screen name="Inicio" component={AbaHome} options={{
				headerTitleAlign: "center",
				headerTitle: () => {
					return <Image source={icon.logoTeste}
						style={{
							width: 195,
							height: 55,
						}}
					/>
				},


				tabBarShowLabel: false,
				tabBarIcon: ({ focused }) => {
					return <Image source={icon.home} style={{
						justifyContent: "flex-end",
						width: 32,
						height: 32,
						opacity: focused ? 1 : 0.5
					}} />
				}
			}} />

			<Tab.Screen name="Agendamentos" component={AbaCalendar} options={{
				headerTitleAlign: "center",
				headerTitle: () => {
					return <Image source={icon.logoTeste}
						style={{
							width: 195,
							height: 55
						}} />
				},
				tabBarShowLabel: false,
				tabBarIcon: ({ focused }) => {
					return <Image source={icon.calendar} style={{
						justifyContent: "center",
						width: 32,
						height: 32,
						opacity: focused ? 1 : 0.5
					}} />
				}
			}} />

			<Tab.Screen name="Perfil" component={AbaProfile} options={{
				headerTitleAlign: "center",
				headerTitle: () => {
					return <Image source={icon.logoTeste}
						style={{
							width: 195,
							height: 55
						}} />
				},
				tabBarShowLabel: false,
				tabBarIcon: ({ focused }) => {
					return <Image source={icon.profile} style={{
						justifyContent: "center",
						width: 32,
						height: 32,
						opacity: focused ? 1 : 0.5
					}} />
				}
			}} />

		</Tab.Navigator>
	</NavigationContainer>

}

export default Main