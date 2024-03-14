import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ navigation }) {
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("SignUp");
				}}
			>
				<LinearGradient
					colors={["#333", "#000"]}
					style={styles.buttonContainers}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
				>
					<Text style={styles.buttonText}>Get Started</Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainers: {
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 0.5,
		borderColor: "#fff",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 5,
		height: 55,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});
