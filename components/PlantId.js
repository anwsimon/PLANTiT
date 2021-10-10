import React from 'react';
import 'react-native-get-random-values';
import { Buffer } from 'buffer';
// import  FileReader from 'filereader'
import {
	ActivityIndicator,
	Button,
	Clipboard,
	FlatList,
	Image,
	Share,
	StyleSheet,
	Text,
	ScrollView,
	View
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Environment from '../config/environment';
import firebase from '../config/firebase';
import {v4 as uuidv4} from 'uuid'
import * as MediaLibrary from 'expo-media-library';
import * as Camera from 'expo-camera';
import data from './Data'
export default class PlantId extends React.Component {
	state = {
		image: null,
		uploading: false,
		plantIdResponse: null,
		base64Image: '',
		imageBlob: null
	};

	async componentDidMount() {
		await MediaLibrary.requestPermissionsAsync()
		await Camera.requestPermissionsAsync()
	}

	render() {
		let { image } = this.state;

		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}
				>
					<View style={styles.getStartedContainer}>
						{image ? null : (
							<Text style={styles.smallHeader}>Upload An Image of Your Plant</Text>
						)}
					</View>

					<View style={styles.helpContainer}>
						<Button
							onPress={this._pickImage}
							title="Pick an image from camera roll"
						/>

						<Button onPress={this._takePhoto} title="Take a photo" />
						{this.state.plantIdResponse && (
							<FlatList
								data={this.state.plantIdResponse.responses[0].labelAnnotations}
								extraData={this.state}
								keyExtractor={this._keyExtractor}
								renderItem={({ item }) => <Text>Item: {item.description}</Text>}
							/>
						)}
						{this._maybeRenderImage()}
						{this._maybeRenderUploadingOverlay()}
					</View>
				</ScrollView>
			</View>
		);
	}

	organize = array => {
		return array.map(function(item, i) {
			return (
				<View key={i}>
					<Text>{item}</Text>
				</View>
			);
		});
	};

	_maybeRenderUploadingOverlay = () => {
		if (this.state.uploading) {
			return (
				<View
					style={[
						StyleSheet.absoluteFill,
						{
							backgroundColor: 'rgba(0,0,0,0.4)',
							alignItems: 'center',
							justifyContent: 'center'
						}
					]}
				>
					<ActivityIndicator color="#fff" animating size="large" />
				</View>
			);
		}
	};

	_maybeRenderImage = () => {
		let { image, plantIdResponse } = this.state;
		if (!image) {
			return;
		}

		return (
			<View
				style={{
					marginTop: 20,
					width: 250,
					borderRadius: 3,
					elevation: 2
				}}
			>
				<Button
					style={{ marginBottom: 10 }}
					onPress={() => this.submitToPlantId()}
					title="Analyze!"
				/>

				<View
					style={{
						borderTopRightRadius: 3,
						borderTopLeftRadius: 3,
						shadowColor: 'rgba(0,0,0,1)',
						shadowOpacity: 0.2,
						shadowOffset: { width: 4, height: 4 },
						shadowRadius: 5,
						overflow: 'hidden'
					}}
				>
					<Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
				</View>
				<Text
					onPress={this._copyToClipboard}
					onLongPress={this._share}
					style={{ paddingVertical: 10, paddingHorizontal: 10 }}
				/>

				<Text>Raw JSON:</Text>

				{plantIdResponse && (
					<Text
						onPress={this._copyToClipboard}
						onLongPress={this._share}
						style={{ paddingVertical: 10, paddingHorizontal: 10 }}
					>
						JSON.stringify(plantIdResponse.responses)
					</Text>
				)}
			</View>
		);
	};

	_keyExtractor = (item, index) => item.id;

	_renderItem = item => {
		<Text>response: {JSON.stringify(item)}</Text>;
	};

	_share = () => {
		Share.share({
			message: JSON.stringify(this.state.plantIdResponse.responses),
			title: 'Check it out',
			url: this.state.image
		});
	};

	_copyToClipboard = () => {
		Clipboard.setString(this.state.image);
		alert('Copied to clipboard');
	};

	_takePhoto = async () => {
		let pickerResult = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [4, 3]
		});
		this._handleImagePicked(pickerResult);
	};

	_pickImage = async () => {
		let pickerResult = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3]
		});

		this._handleImagePicked(pickerResult);
	};

	_handleImagePicked = async pickerResult => {
		try {
			this.setState({ uploading: true });
			console.log("PICKER RESULT", pickerResult.uri)


			if (!pickerResult.cancelled) {
				let uploadURL = await uploadImageAsync(pickerResult.uri);
				let returnedImage = await fetch(
					`${uploadURL}`
				)
				let fetchedImage = await returnedImage.blob()

				console.log('fetchedImage ', fetchedImage)
				let reader = new FileReader();
				reader.readAsDataURL(fetchedImage);
				//make this into a promise, resolve with base64data
				let base64data = await new Promise(resolve => {
					reader.onloadend = () => {
						resolve(reader.result);
					};
				})
				this.setState({image: pickerResult.uri, base64Image: base64data})
				;
			}
		} catch (e) {
			console.log(e);
			alert('Upload failed, sorry :(');
		} finally {
			this.setState({ uploading: false });
		}
	};

	submitToPlantId = async () => {
		try {
			this.setState({ uploading: true });
			let { image } = this.state;
      const data = {
        api_key: Environment['PLANT_ID_API_KEY'],
        image: this.state.base64Image
        // modifiers: ["crops_fast", "similar_images"],
        // plant_language: "en",
        // plant_details: ["common_names",
        //                   "url",
        //                   "name_authority",
        //                   "wiki_description",
        //                   "taxonomy",
        //                   "synonyms"]
      };
      console.log("DATA", data)
			let idResponse = await fetch(
				'https://api.plant.id/v2/enqueue_identification',
				{
          method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				}
			);
      console.log("DATA AFTER FETCH", data)

			let responseJson = await idResponse.json().then(data => {
        console.log('Success', data)
      }).catch((error) => {
        console.error('Error', error)
      })
			this.setState({
				plantIdResponse: responseJson,
				uploading: false
			});
		} catch (error) {
			console.log(error);
		}
	};
}
async function uploadImageAsync(uri) {
	const blob = await new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onload = function() {
			resolve(xhr.response);
		};
		xhr.onerror = function(e) {
			console.log(e);
			reject(new TypeError('Network request failed'));
		};
		xhr.responseType = 'blob';
		xhr.open('GET', uri, true);
		xhr.send(null);

	});

	const ref = firebase
	.storage()
	.ref()
	.child(uuidv4());
const snapshot = await ref.put(blob);

blob.close();

return await snapshot.ref.getDownloadURL();
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingBottom: 10
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center'
	},
	contentContainer: {
		paddingTop: 30
	},

	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50
	},

	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center'
	},
	smallHeader: {
		fontSize: 30,
    fontFamily: 'Cochin',
    paddingTop: 20,
    paddingBottom: 20
	},

	helpContainer: {
		marginTop: 15,
		alignItems: 'center'
	}
});
