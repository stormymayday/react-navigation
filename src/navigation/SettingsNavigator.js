import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Settings from "../screens/home/Settings";
import SettingsDetail from "../screens/home/SettingsDetail";

// CONSTANTS
import { COLORS, ROUTES } from "../constants";

const Stack = createStackNavigator();
// Navigator, Screen, Group

const SettingsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Settings Detail" component={SettingsDetail} />
        </Stack.Navigator>
    );
};

export default SettingsNavigator;
