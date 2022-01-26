import { getUserRequest, getUserSuccess, getUserFailed } from "./user.action"

const url = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(getUserRequest())
        fetch(url, { method: "GET" })
            .then(res => res.json())
            .then(data => {
                dispatch(getUserSuccess(data))
            }).catch(err => {
                dispatch(getUserFailed(err.message))
            })
    }
}
