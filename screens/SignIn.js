import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Dimensions,
	Platform,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import InputBox from "../components/InputBox";
import { LinearGradient } from "expo-linear-gradient";
import ActionButtons from "../components/ActionButtons";
import GoogleButtons from "../components/GoogleButton";

export default function SignIn({ navigation }) {
	const screenHeight = Dimensions.get("window").height;

	return (
		<KeyboardAvoidingView
			style={{ ...styles.conatiner }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, paddingTop: screenHeight * 0.12 }}
				keyboardShouldPersistTaps="handled"
			>
				<Text style={{ color: "#fff", fontSize: 18, marginVertical: 40 }}>
					Please sign-in to your account
				</Text>
				<LinearGradient
					colors={["#555", "#222"]}
					style={styles.gradient}
					start={{ x: 1, y: 0 }}
					end={{ x: 0.5, y: 1 }}
				>
					<View style={{ display: "flex", flexDirection: "column" }}>
						<InputBox condition={"email"} />
						<InputBox condition={"password"} />
						<View>
							<Text style={{ textAlign: "right", color: "#D4FB54" }}>
								Forgot Password ?
							</Text>
						</View>
						<ActionButtons title={"Login"} />
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								marginTop: 10,
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
								New to our platform?
							</Text>
							<TouchableOpacity
								style={{
									display: "flex",
									justifyContent: "center",

									height: 40,
								}}
								onPress={() => {
									navigation.navigate("SignUp");
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
									Create an account
								</Text>
							</TouchableOpacity>
						</View>
						<View style={{ marginVertical: 10 }}>
							<Text style={{ textAlign: "center", color: "#888" }}>or</Text>
						</View>
						<GoogleButtons />
					</View>
				</LinearGradient>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		width: "100%",
		backgroundColor: "#000",
		justifyContent: "center",
		padding: 10,
	},
	inputContainer: {
		backgroundColor: "#fff",
	},
	gradient: {
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 15,
	},
});
