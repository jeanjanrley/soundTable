import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { ButtonPlayer } from "../../components/buttonPlayer";

export function Home() {
	return (
		<SafeAreaView style={styles.page}>
			<ButtonPlayer
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	page: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		padding: 10,
		justifyContent: "space-between"
	}
});