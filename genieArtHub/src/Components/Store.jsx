import { configureStore } from "@reduxjs/toolkit";
import choiceReducer from "../Datas/UserChoice.jsx"; // Assurez-vous que le chemin est correct

const store = configureStore({
    reducer: {
        choice: choiceReducer
    }
});

export default store;
