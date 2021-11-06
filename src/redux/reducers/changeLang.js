import { CHANGE_LANG } from "../actionTypes";

const initialState = {
    locale: "en",
    isLTR: true
}

export const changeLangReducer = (prevstate = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case CHANGE_LANG:
            return {
                ...prevstate,
                locale: payload.locale,
                isLTR:  payload.isLTR 
            }
    
        default:
            return prevstate;
    }

}