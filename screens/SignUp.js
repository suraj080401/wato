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
import { CheckBox } from "react-native-elements";
import { useState } from "react";
import InputBox from "../components/InputBox";
import { LinearGradient } from "expo-linear-gradient";
import ActionButtons from "../components/ActionButtons";
import GoogleButtons from "../components/GoogleButton";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function SignUp({ navigation }) {
	const screenHeight = Dimensions.get("window").height;
	const [checked, setChecked] = useState(false);
	const toggleChecked = () => {
		setChecked(!checked);
	};

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
					Please sign-up to your account
				</Text>
				<LinearGradient
					colors={["#555", "#222"]}
					style={styles.gradient}
					start={{ x: 1, y: 0 }}
					end={{ x: 0.5, y: 1 }}
				>
					<View style={{ display: "flex", flexDirection: "column" }}>
						<InputBox condition={"name"} />
						<InputBox condition={"email"} />
						<InputBox condition={"password"} />
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<TouchableOpacity
								style={styles.checkboxContainer}
								onPress={toggleChecked}
							>
								{checked ? (
									<AntDesign name="checksquare" size={20} color="#D4FB54" />
								) : (
									<Feather name="square" size={20} color="white" />
								)}
							</TouchableOpacity>
							<Text style={{ color: "#888", marginLeft: 5 }}>
								I agree
								<Text style={{ color: "#D4FB54" }}>
									{" "}
									to privacy policy & terms
								</Text>
							</Text>
						</View>
						<ActionButtons title={"Sign Up"} />
						<View style={{ marginVertical: 20 }}>
							<Text style={{ textAlign: "center", color: "#888" }}>
								Already have and account?
								<Text
									style={{ color: "#D4FB54" }}
									onPress={() => {
										navigation.navigate("SignIn");
									}}
								>
									{" "}
									Sign in instead
								</Text>
							</Text>
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
	checkboxContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
});
