import { CHANGE_LANG } from "../actionTypes";

export const changeLang = (locale, isLTR) => {
    return {
        type: CHANGE_LANG,
        payload: {
            locale,
            isLTR
        }
    }
}