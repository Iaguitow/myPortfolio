import axios from "axios";
import LocalStorage from "../utils/LocalStorage";

class Login {
    postLogin(email, password){
        return new Promise((resolve, reject) =>{
            try {
                return axios({
                    method: "post",
                    url: "http://192.168.1.144:3000/routes/login",
                    withCredentials: true,
                    params: {email, password},
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(function (response){
                    if(typeof response.data !== "object"){
                        alert(response.data);
                        return;
                    }
                    const user = response.data[0];
                    LocalStorage.storeUserSession(user.idpeople,user.email,user.name,user.tokenapi).then(() =>{
                        resolve(user);
                    });
                    
                }).catch(function (error){
                    resolve(error);
                }).finally(function (){

                });
            }      
            catch (error) {
                reject(error);
            }
        });
    }
}

var login = new Login();
export default login;