import types from './user.types'

const initial_state = {
    users: [],
    loading: false,
    error: null
}


const userReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case types.FETCH_USER_REQUEST:
            return { ...state, loading: true }

        case types.FETCH_USER_SUCCESS:
            return { ...state, loading: false, users: payload }

        case types.FETCH_USER_FAILED:
            return { ...state, loading: false, error: payload }
        default:
            return state;
    }
};



export default userReducer