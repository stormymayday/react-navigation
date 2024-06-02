import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/home/Home";
import Wallet from "../screens/home/Wallet";
import Notifications from "../screens/home/Notifications";
import Settings from "../screens/home/Settings";

import { Ionicons } from "@expo/vector-icons";

// CONSTANTS
import { COLORS, ROUTES } from "../constants";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home-sharp" : "home-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "settings" : "settings-outline";
                    } else if (route.name === "Wallet") {
                        iconName = focused ? "wallet" : "wallet-outline";
                    } else if (route.name === "Notifications") {
                        iconName = focused
                            ? "notifications-sharp"
                            : "notifications-outline";
                    }

                    return <Ionicons name={iconName} size={22} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Wallet" component={Wallet} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
};

export default HomeNavigator;
