import axios from "axios";
import LocalStorage from "../utils/LocalStorage";
import Toast from "../components/CompoToast"

class Login {
    postLogin(email, password, googleAcessToken = ""){
        return new Promise((resolve, reject) =>{
            try {
                return axios({
                    method: "post",
                    //HOUSE IP
                    //url: "http://192.168.1.144:3000/routes/login",
                    //SCHOOL IP
                    url: "http://172.26.192.140:3000/routes/login",
                    withCredentials: true,
                    params: {email, password},
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(function (response){
                    if(typeof response.data !== "object"){
                        resolve(response.data);
                    }
                    const user = response.data[0];
                    LocalStorage.storeUserSession(user.idpeople,user.email,user.name,user.tokenapi, googleAcessToken).then(() =>{
                        resolve(user);
                    }).catch((error) => {reject(error)});
                }).catch(function (error){
                    Toast.showToast("Error","Connection Error",error.message+", If this error continue happening, please verify your connectionn or try again later. ");
                    reject(false);
                }).finally(function (){

                });
            }      
            catch (error) {
                Toast.showToast("Error","Connection Error",error.message+", If this error continue happening, please verify your connectionn or try again later. ");
                reject(false);
            }
        });
    }

    getLoginRecovery(to, subject, text) {
        return new Promise((resolve, reject) => {
          try {
            return axios({
              method: 'get',
              //HOUSE IP
              url: "http://192.168.1.144:3000/routes/login/recovery",
              //SCHOOL IP
              //url: "http://172.26.192.140:3000/routes/login/recovery",
              withCredentials: true,
              params: { to, subject, text },
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            }).then(function (response) {
              resolve(response.data);
            }).catch(function (error) {
              Toast.showToast("Error","Connection Error",error.message+", If this error continue happening, please verify your connectionn or try again later. ");
              reject(false);
            }).finally(function () {
              
            });
          } catch (error) {
            Toast.showToast("Error","Connection Error",error.message+", If this error continue happening, please verify your connectionn or try again later. ");
            reject(false);
          }
        })
      }
}

var login = new Login();
export default login;