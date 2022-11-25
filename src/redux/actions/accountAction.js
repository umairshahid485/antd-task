import { CREATE_NEW_ACCOUNT } from "./actionType";

export const createAccount = (account) => {
    return {
        type: CREATE_NEW_ACCOUNT,
        account: account
    }
};