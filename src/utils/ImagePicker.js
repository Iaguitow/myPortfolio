import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

class Image{
    imagePermission(){
        return new Promise((resolve, reject) => {
            try {
                if (Platform.OS !== 'web') {
                    ImagePicker.requestMediaLibraryPermissionsAsync().then(permission =>{
                        if (permission.status !== 'granted') {
                            alert('Sorry, we need camera roll permissions to make this work!');
                            return;
                        }
                        resolve(permission);
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    }
    
    resizeImage(image) {
        return new Promise((resolve, reject) =>{
            try {
                const manipResult = ImageManipulator.manipulateAsync(
                    image.localUri || image.uri,
                    [{ resize: {height:160} }],
                    { compress: 1, base64:false, format: ImageManipulator.SaveFormat.PNG }
                  );
                  resolve(manipResult);
            } catch (error) {
                reject(error);
            }
        });
      }

    imagePicker() {
        return new Promise((resolve, reject) =>{
            try {
                this.imagePermission().then(permission =>{
                    ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                      }).then(imgPicked =>{
                        if (!imgPicked.cancelled) {
                            resolve(imgPicked.uri);
                        }
                      });
                })
            } catch (error) {
                reject(error);
            }
        })
    }
}

const ImagePickup = new Image()
export default ImagePickup;

