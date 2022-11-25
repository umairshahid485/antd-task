import { CREATE_NEW_ACCOUNT } from "./actionType";

export const createAccount = (payload) => {
    return {
        type: CREATE_NEW_ACCOUNT,
        payload
    }
};