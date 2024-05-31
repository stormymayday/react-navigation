// Importing React Native Gesture Handler
import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Navigation from "./src/navigation/Navigation";

// Importing Navigation container

export default function App() {
    return (
        <SafeAreaView>
            {/* <View style={styles.container}> */}
            <Navigation />
            {/* </View> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
