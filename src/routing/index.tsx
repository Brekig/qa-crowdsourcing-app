import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import * as routes from "./routes";
import * as icons from "./icons";
import { Tabs } from "./declerations";
import * as Services from "../services";
import { useSelector } from "react-redux";
import { StoreState } from "../reducers";

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const PrizeStack = createStackNavigator();

const PrizeStackNavigator = () => {
	return (
		<PrizeStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{routes.prizeStack.map((route) => (
				<PrizeStack.Screen name={route.id} component={route.Component} />
			))}
		</PrizeStack.Navigator>
	);
};

export const TabNavigator = () => {
	const activeColor = Services.Colors.MapToDark["highlight"];
	const inActiveColor = Services.Colors.MapToDark["light-grey"];
	const auth = useSelector((state: StoreState) => state.auth);
	if (auth.type === "guest") return null;
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							size={17}
							name={icons.mapTabToIcon[route.name as Tabs]}
							onPress={() => null}
							color={focused ? activeColor : inActiveColor}
						/>
					),
				})}
				tabBarOptions={{
					activeTintColor: activeColor,
					inactiveTintColor: inActiveColor,
				}}
			>
				{routes.tab.map((route) => (
					<Tab.Screen name={route.id} component={route.Component} />
				))}
				<Tab.Screen name="prizes" component={PrizeStackNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export const AuthStackNavigator = () => {
	const auth = useSelector((state: StoreState) => state.auth);
	if (auth.type !== "guest") return null;
	return (
		<NavigationContainer>
			<AuthStack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{routes.authStack.map((route) => (
					<AuthStack.Screen name={route.id} component={route.Component} />
				))}
			</AuthStack.Navigator>
		</NavigationContainer>
	);
};
