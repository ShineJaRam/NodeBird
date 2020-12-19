import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux'
import reducer from "../reducers"

const configureStore = () => {
    const store = createStore(reudcer)
    store.dispatch({
        type: "CHANGE_NICKNAME",
        data: "boogieSuhuyn",
    })
    return store;
};

const wrapper = createWrapper(configureStore, {debug: process.env.Node_ENV === 'development',});

export default wrapper;