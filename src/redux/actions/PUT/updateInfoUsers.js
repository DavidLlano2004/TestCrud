import { updateUserSlice } from "../../slices/appSlice/AppSlice";

export const updateUserAction = (phone, updatedData) => {
    return (dispatch) => {
        dispatch(updateUserSlice({ phone, updatedData }));
    };
};
