// En tu archivo de acciones
import { deleteUserSlice } from "../../slices/appSlice/AppSlice";

export const deleteUserAction = (phone) => {
    return (dispatch) => {
        dispatch(deleteUserSlice(phone));
    };
};
