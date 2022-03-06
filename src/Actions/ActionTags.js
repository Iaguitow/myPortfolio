import { actionsTypes } from "./ConstActions";
import dbTags from "../classes/ClassDBTags";

const tagActions = {
    getTags: (idpeople, token_api, { setIsMounted }) => dispatch => {
        dbTags.getTags(idpeople,token_api).then(response =>{
            dispatch({
                type: actionsTypes.GET_TAGS,
                payload: {tags:response.data, error_message: null},
            });
        }).catch(error => {
            dispatch({
                type: actionsTypes.GET_TAGS_ERROR,
                payload: {tags:null, error_message: error.message},
            });
        }).finally(endpoint =>{
            setIsMounted(true);
        });
    },
    updateTag: (idtag,idpeople) => dispatch => {

    }
}

export { tagActions }