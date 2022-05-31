import { actionsTypes } from "./ConstActions";
import dbCities from "../classes/ClassDBCities";

const cityActions = {
    getCities: (token_api) => dispatch => {
        dbCities.getCities(token_api).then(response =>{
            dispatch({
                type: actionsTypes.GET_CITIES ,
                payload: {cities:response.data, error_message: null},
            });
        }).catch(error => {
            dispatch({
                type: actionsTypes.GET_CITIES_ERROR,
                payload: {cities:null, error_message: error.message},
            });
        }).finally(endpoint =>{

        });
    },
    updateCity: (token_api) => dispatch => {

    }
}

export { cityActions }