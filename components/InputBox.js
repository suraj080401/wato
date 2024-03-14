import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"; // Make sure to install expo vector icons library

const InputBox = ({ condition }) => {
	const [secureTextEntry, setSecureTextEntry] = useState(
		condition === "password",
	);

	const toggleSecureEntry = () => {
		setSecureTextEntry((prevState) => !prevState);
	};

	return (
		<View
			style={[
				styles.inputContainer,
				condition === "password" && styles.passwordContainer,
			]}
		>
			<TextInput
				style={styles.input}
				placeholderTextColor={"#888"}
				placeholder={
					condition === "name"
						? "Name"
						: condition === "email"
						? "Email"
						: "Password"
				}
				secureTextEntry={secureTextEntry}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			{condition === "password" && (
				<Feather
					name={secureTextEntry ? "eye-off" : "eye"}
					size={24}
					color="#fff"
					style={styles.eyeIcon}
					onPress={toggleSecureEntry}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: "#fff",
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 20,
		height: 60,
	},
	passwordContainer: {
		paddingRight: 15,
	},
	input: {
		flex: 1,
		color: "#fff",
		fontSize: 18,
	},
	eyeIcon: {
		fontSize: 20,
	},
});

export default InputBox;
