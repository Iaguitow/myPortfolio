import axios from "axios";
import Toast from "../components/CompoToast"

class GDrive{
    sendFile(img,folderid,filetypename){
        return new Promise((resolve, reject) =>{
            try {
                return axios({
                    method: "post",
                    //HOUSE IP
                    url:"http://192.168.1.144:3000/routes/gdrive",
                    //SCHOOL IP
                    //url: "http://192.168.1.144:3000/routes/gdrive",
                    withCredentials: true,
                    data: {img,folderid,filetypename},
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(function (response) {
                    resolve(response);
                }).catch(function (error){
                    if(error.response.status.toString() === "413"){
                        Toast.showToast("toobigimg");
                        reject(false);
                        return;
                    }
                    Toast.showToast("Error","Connection Error",error.message+", If this error continue happening, please verify your connectionn or try again later. ");
                    reject(false);
                });
            } catch (error) {
                Toast.showToast("Error","Connection Error",error.message+", If this error continue happening, please verify your connectionn or try again later. ");
                reject(false);
            }
        });
    }

    getFile(fileid,token_api){
        
        return new Promise((resolve, reject) =>{
            try {
                return axios({
                    method: "get",
                    //HOUSE IP
                    url:"http://192.168.1.144:3000/routes/gdrive",
                    //SCHOOL IP
                    //url: "http://192.168.1.144:3000/routes/gdrive",
                    withCredentials: true,
                    params: {fileid},
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':"Bearer "+ token_api 
                    }
                }).then(function (response) {
                    resolve(response);
                }).catch(function (error){
                    Toast.showToast("Error","Connection Error",error.message+", If this error continue happening, please verify your connectionn or try again later. ");
                    reject(error);
                });
            } catch (error) {
                Toast.showToast("Error","Connection Error",error.message+", If this error continue happening, please verify your connectionn or try again later. ");
                reject(false);
            }
        });
    }
}

var GoogleDrive = new GDrive();
export default GoogleDrive;