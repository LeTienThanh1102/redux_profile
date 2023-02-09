import { updateStart, updateError, updateSuccess } from "./userSlice";
import { publicRequest } from "./configAxios";
// import axios from "axios";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await publicRequest.post("/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};
