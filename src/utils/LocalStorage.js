import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
    async storeUserSession(idpeople,email,name,token){
        try {
            await AsyncStorage.setItem(
                "jwt_token", JSON.stringify({
                    idpeople: idpeople,
                    email: email,
                    name: name,
                    token: token
                })
            ).then(result =>{
                return result;
            });
        } catch (error) {
            alert(error);
        }
    }
    async retrieveUserSession(userSession = "jwt_token"){
        try {
            const session = await AsyncStorage.getItem(userSession);
            if(session !== undefined){
                return session;
            }
            return false;
        } catch (error) {
            alert(error);
        }
    }
}

var localStorage = new LocalStorage();
export default localStorage;