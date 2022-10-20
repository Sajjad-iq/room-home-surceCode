import { createSlice } from "@reduxjs/toolkit";

type initialState = {
    value: number,
    isMobil_Nav_Active: boolean
}

const initialState: initialState = {
    value: 0,
    isMobil_Nav_Active: false
}

export const ImgIndex = createSlice({
    name: "IMgIndex",
    initialState,
    reducers: {
        add: (state) => {
            state.value === 2 ? state.value = 0 : state.value++
        },
        remove: (state) => {
            state.value === 0 ? state.value = 2 : state.value--
        },
        toggle: (state) => {
            switch (state.isMobil_Nav_Active) {
                case true:
                    state.isMobil_Nav_Active = false;
                    break;
                case false:
                    state.isMobil_Nav_Active = true;
                    break;
                default:
            }
        }
    },
})

export const { add, remove, toggle } = ImgIndex.actions;
export default ImgIndex.reducer;