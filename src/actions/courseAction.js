import { ADD_COURSE } from "./types";

export const addCourse = data => dispatch => {
    dispatch({
        type: ADD_COURSE,
        payload: data
    });
}