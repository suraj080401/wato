import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
} from "react-native";

export default function ActionButtons({ navigation, title }) {
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("SignUp");
				}}
				style={styles.buttonContainers}
			>
				<Text style={styles.buttonText}>{title}</Text>
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
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 2,
		height: 50,
		marginTop: 50,
		backgroundColor: "#D4FB54",
	},
	buttonText: {
		color: "#000",
		fontSize: 16,
		fontWeight: "bold",
	},
});
