import {CREATE_NEW_ACCOUNT} from "../actions/actionType";
const data = [
    {
        key : 1, name: "Resource", type: "debit", code : 100, children :[
            {
                key : 2, name: "Resource1", type: "debit", code : 101, parent_code: 100,children: [
                    {
                        key : 4, name: "Resource3", type: "debit", code : 103, parent_code: 101}
                ]
            },
            {
                key : 3, name: "Resource2", type: "debit", code : 102, parent_code: 100
            }
        ]
    },
    {
        key : 5, name: "Resource4", type: "debit", code : 200, children: [
            {
                key : 6, name: "Resource5", type: "debit", code : 201, parent_code: 200
            }
        ]
    },
];

export default (state = data, action) => {
    switch (action.type){

        case CREATE_NEW_ACCOUNT:
            return [
                ...state,
                Object.assign({}, action.account)
            ];
        default:
            return state;
    }
};