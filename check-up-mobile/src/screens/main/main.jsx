import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import icon from "../../constants/icon.js"
import { BlurView } from 'expo-blur';

import AbaHome from "../abHome/abahome.jsx"
import AbaCalendar from "../abaCalendar/abacalendar.jsx"
import AbaProfile from "../abaProfile/abaprofile.jsx"
import { View, Image, StyleSheet } from "react-native"
import { COLORS } from "../../constants/theme.js"



const Tab = createBottomTabNavigator()

function Main() {
	return <Tab.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: COLORS.blueCeu,
				borderBottomEndRadius: 20,
				borderBottomLeftRadius: 20,
				height: 80,
				elevation: 0

			},
			headerBackgroundContainerStyle: {
				backgroundColor: COLORS.blueCeu
			},
			tabBarStyle: {
				height: 60,
				borderWidth: 1,
				borderColor: COLORS.azul1,
				borderRadius: 22,

			},
			tabBarItemStyle: {
				justifyContent: 'center',
				alignItems: 'center',
				marginVertical: 4,

			},
			tabBarBackground: () => (
				<BlurView tint="light" intensity={60} style={{
					...StyleSheet.absoluteFillObject,

				}} />
			),
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
					width: 32,
					height: 32,
					opacity: focused ? 1 : 0.5
				}} />
			},
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


}

export default Main