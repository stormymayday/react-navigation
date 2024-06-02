import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Register from "../screens/auth/Register";

// CONSTANTS
import { COLORS, ROUTES } from "../constants";

import HomeNavigator from "./HomeNavigator";

const Stack = createStackNavigator();
// Navigator, Screen, Group

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.white,
                headerBackTitle: "Back",
                headerBackTitleVisible: false,
            }}
            initialRouteName="Login"
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={({ route }) => ({
                    title: route.params.userId,
                })}
            />
            <Stack.Screen name="Register" component={Register} />

            <Stack.Screen
                name="Home"
                component={HomeNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
