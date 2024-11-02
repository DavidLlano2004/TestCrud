import { addUserSlice } from "../../slices/appSlice/AppSlice";

export const createUserAction = (newUser) => {
    return (dispatch) => {
        dispatch(addUserSlice(newUser));
    };
};