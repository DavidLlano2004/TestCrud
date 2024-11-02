import { apiDataRandom } from "../../../config/AxiosClient";
import { getUsersSlice } from "../../slices/appSlice/AppSlice";

export const getUsersAction = () => {
    return async (dispatch , getState) => {
        try {
            const { data: { results } } = await apiDataRandom.get("", {
                params: {
                    results: 15,
                },
            });
            const state = getState();
            const currentUsers = (state.persistedData.app && state.persistedData.app.users) || [];
            dispatch(getUsersSlice([...currentUsers, ...results]));
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    };
};
