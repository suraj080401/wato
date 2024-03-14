import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function GoogleButtons({ navigation }) {
	return (
		<View>
			<TouchableOpacity style={styles.buttonContainers}>
				<Image source={require("../assets/google.png")} style={styles.image} />
				<Text style={styles.buttonText}>Continue With Google</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainers: {
		display: "flex",
		flexDirection: "row",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 2,
		height: 50,
		marginTop: 10,
		borderWidth: 0.5,
		borderColor: "#fff",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		marginLeft: 10,
	},
	image: {
		width: 20,
		height: 20,
		resizeMode: "contain",
	},
});
