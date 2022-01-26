import types from './user.types';


export const getUserRequest = () => {
    return {
        type: types.FETCH_USER_REQUEST,
    }
};


export const getUserSuccess = (data) => {
    return {
        type: types.FETCH_USER_SUCCESS,
        payload: data
    }
};

export const getUserFailed = (err) => {
    return {
        type: types.FETCH_USER_FAILED,
        payload: err
    }
};