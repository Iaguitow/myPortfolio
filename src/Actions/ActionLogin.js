import { actionsTypes } from "./ConstActions"

const actions = {
    login: () => ({
        type: actionsTypes.LOGIN
    }),
    logout: ()=>({
        type: actionsTypes.LOGOUT
    })
}

export { actions }