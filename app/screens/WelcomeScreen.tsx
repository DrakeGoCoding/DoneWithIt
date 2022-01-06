import { Image, ImageBackground, Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function WelcomeScreen() {
	return (
		<ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Text>Sell What You Don't Need</Text>
			</View>
			<View style={styles.loginBtn}></View>
			<View style={styles.registerBtn}></View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	logoContainer: {
		width: "100%",
		position: "absolute",
		top: 80,
		alignItems: "center"
	},
	logo: {
		width: 100,
		height: 100
	},
	loginBtn: {
		width: "100%",
		height: 70,
		backgroundColor: colors.primary
	},
	registerBtn: {
		width: "100%",
		height: 70,
		backgroundColor: colors.secondary
	}
});

export default WelcomeScreen;
