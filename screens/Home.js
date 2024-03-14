import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Dimensions,
	Platform,
	TouchableOpacity,
} from "react-native";
import Button from "../components/Button";

export default function Home({ navigation }) {
	const screenHeight = Dimensions.get("window").height;

	return (
		<ImageBackground
			source={require("../assets/Background.png")}
			style={styles.background}
		>
			<View style={{ ...styles.mainContainer, marginTop: screenHeight * 0.2 }}>
				<View>
					<Text
						style={{
							fontSize: 50,
							color: "#fff",
							fontFamily: `${
								Platform.OS === "ios" ? "Menlo-Bold" : "monospace"
							}`,
							marginVertical: 10,
							fontWeight: "bold",
						}}
					>
						Wato
					</Text>
					<Text
						style={{
							fontSize: 28,
							color: "#fff",
							fontFamily: `${Platform.OS === "ios" ? "Menlo" : "monospace"}`,
							marginVertical: 10,
							lineHeight: 40,
						}}
					>
						Zero Cost{"\n"}
						WhatsApp Messaging{"\n"}platform
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<Button navigation={navigation} />
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						<Text
							style={{
								fontSize: 12,
								color: "#fff",
								textAlign: "center",
								marginVertical: 15,
							}}
						>
							Already have an account?
						</Text>
						<TouchableOpacity
							style={{
								display: "flex",
								justifyContent: "center",

								height: 40,
							}}
							onPress={() => {
								navigation.navigate("SignIn");
							}}
						>
							<Text
								style={{
									fontSize: 12,
									color: "#D4FB54",
									marginTop: 5,
								}}
							>
								{" "}
								Sign in instead
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: "contain",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 15,
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "column",
		marginTop: 60,
	},
});
