import { actionsTypes } from "./ConstActions";
import ImagePicker from "../utils/ImagePicker"
import GoogleDrive from "../classes/ClassGDrive";

const gdriveActions = {
    updateFile: (img, { setIsMounted }) => dispatch => {
        setIsMounted(false);
        ImagePicker.imagePicker().then(imgCaptured =>{
            if(imgCaptured.cancelled){
                dispatch({
                    type: actionsTypes.UPDATE_FILES,
                    payload: {img: null, FileTypeName: null, cancelled: true}
                });
            }
            GoogleDrive.sendFile(imgCaptured.base64,img.folderId,img.fileTypeName,img.tokenApi).then(result => {
                dispatch({
                    type: actionsTypes.UPDATE_FILES,
                    payload: {img: imgCaptured.base64, FileTypeName: img.fileTypeName.replace(/[0-9]/g, ''), cancelled: false} 
                });

            }).catch(error=>{
                dispatch({
                    type: actionsTypes.UPDATE_FILES_ERROR,
                    payload: error
                });
            }).finally(endPoint =>{
                setIsMounted(true);
            });

        }).catch(error=>{
            dispatch({
                type: actionsTypes.UPDATE_FILES_ERROR,
                payload: error
            });
        }).finally(endPoint =>{
            setIsMounted(true);
        });

    },
    getFile: (allFilesID) =>{

    }
}

export { gdriveActions }