import { CREATE_NEW_ACCOUNT } from "../actions/actionType";

export default (state = [], action) => {
    switch (action.type){

        case CREATE_NEW_ACCOUNT:
            return [
                ...state,
                Object.assign({}, action.accounts)
            ];
        default:
            return state;
    }
};