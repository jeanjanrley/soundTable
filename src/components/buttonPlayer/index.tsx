import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { Audio } from "expo-av";

interface ButtonPlayerProps {
	soundPath: string;
	imagePath: string;
	title: string;
}

export function ButtonPlayer({ imagePath, soundPath, title }: ButtonPlayerProps) {
	const [sound, setSound] = React.useState<Audio.Sound>();

	async function playSound() {
		sound?.unloadAsync();
		try {
			const { sound } = await Audio.Sound.createAsync(
				// eslint-disable-next-line @typescript-eslint/no-var-requires
				require(soundPath),
			);
			setSound(sound);
			await sound.playAsync();
		} catch (error) {
			console.log(error);
		}
	}

	React.useEffect(() => {
		return sound
			? () => {
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);

	return (
		<TouchableOpacity style={styles.container} onPress={playSound}>
			<View style={styles.button}>
				<Image source={require(imagePath)} style={styles.image} />
			</ View >
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity >
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		padding: 10,
		width: Dimensions.get("window").width / 3 - 15 - 5,
		alignItems: "center",
		justifyContent: "center",
		alignContent: "center",
		borderRadius: 5,
		backgroundColor: "#ddd",
		marginRight: 10,
		marginBottom: 10
	},
	button: {
		display: "flex",
		alignITems: "center",
		justifyContent: "center",
		flexDirection: "column",
		width: Dimensions.get("window").width / 3 - 15 - 25,
		height: Dimensions.get("window").width / 3 - 15 - 25,
		borderRadius: (Dimensions.get("window").width / 3 - 30) / 2,
		backgroundColor: "red",
		overflow: "hidden"
	},
	image: {
		width: "100%",
		height: "100%",
	},
	text: {
		color: "#777",
		width: "100%",
		textAlign: "center",
		fontSize: 14,
		marginTop: 5,
		fontWeight: "bold"
	}
});