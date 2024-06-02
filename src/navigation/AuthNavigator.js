import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Register from "../screens/auth/Register";

// CONSTANTS
import { COLORS, ROUTES } from "../constants";

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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={({ route }) => ({
                    title: route.params.userId,
                })}
            />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
