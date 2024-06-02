import "react-native-gesture-handler";

import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./src/navigation/AuthNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
