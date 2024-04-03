import { createSlice } from '@reduxjs/toolkit';
const choiceSlice = createSlice({
    name : 'choice', 
    initialState: {
        quantity: 1,
        format: '',
        index: null,
        image: ''
    },
    reducers: {
        setQuantity(state, action){
            state.quantity = action.payload
        },
        setFormat(state, action){
            state.format = action.payload
        },
        setIndex(state, action){
            state.index = action.payload
        },
        setImage(state, action){
            state.image = action.payload
        }
    }
});

export const { setQuantity, setFormat, setIndex, setImage } = choiceSlice.actions;
export default choiceSlice.reducer;