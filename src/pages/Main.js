import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
	const [currentRegion, setCurrentRegion] = useState(null);

	useEffect(() => {
		async function loadInitialPosition() {
			const { granted } = await requestPermissionsAsync();

			if (granted) {
				const { coords } = await getCurrentPositionAsync({
					enableHighAccuracy: true,
				});
				const { latitude, longitude } = coords;

				setCurrentRegion({
					latitude,
					longitude,
					latitudeDelta: 0.04,
					longitudeDelta: 0.04
				});
			}
		}

		loadInitialPosition();
	}, []);

	if (!currentRegion) {
		return null;
	}

	return (
		// Componente do react-native que mostrar mapas
		<MapView
			initialRegion={currentRegion}
			style={style.map}
		>
			<Marker
				coordinate={{ latitude: -26.9133482, longitude: -49.0869217 }}
			>
				<Image
					source={{ uri: 'https://avatars2.githubusercontent.com/u/15818676?s=460&v=4' }}
					style={style.avatar}
				/>
				<Callout>
					<View style={style.callout}>
						<Text style={style.devName}> Rômulo Fernando </Text>
						<Text  style={style.devBio} > Teste de descricao </Text>
						<Text  style={style.devTech}> PHP, Node, Vue, CSS, HTML, Javascript, PWA </Text>
					</View>
				</Callout>
			</Marker>

		</MapView>



	);
}

const style = StyleSheet.create({
	map: {
		flex: 1
	},

	avatar: {
		width: 34,
		height: 34,
		borderRadius: 15,
		borderWidth: 3,
		borderColor: '#fa0000',
	},

	callout: {
		width: 260
	},

	devName: {
		fontWeight: 'bold',
		fontSize: 16
	},
	devBio: {
		color: '#666666',
		marginTop: 6
	},
	devTech: {
		marginTop: 6
	},
})

export default Main;