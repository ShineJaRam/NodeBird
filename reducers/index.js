import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

//action creator
const changeNickname = (data) => {
    return {
        type: "CHANGE_NICKNAME",
        data,
    }
}

// const changeNickname = {
//     type: "CHANGE_NICKNAME",
//     data: "boogieSuhyun"
// }

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE >>>', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;