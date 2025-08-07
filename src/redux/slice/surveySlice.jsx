import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  lastId: 0,
  formInput: {
    nama: "",
    status: "",
    merkRokok: [],
  },
};

const surveySlice = createSlice({
  initialState,
  name: "survey",
  reducers: {
    setFormInput: (state, action) => {
      const { name, value } = action.payload;

      if (name === "merkRokok") {
        const index = state.formInput.merkRokok.indexOf(value);
        if (index === -1) {
          state.formInput.merkRokok.push(value);
        } else {
          state.formInput.merkRokok.splice(index, 1);
        }
      } else {
        state.formInput[name] = value;
      }
    },

    addData: (state) => {
      const newId = state.lastId + 1;

      state.data.push({
        id: newId,
        ...state.formInput,
      });

      state.lastId = newId;
      state.formInput = {
        nama: "",
        status: "",
        merkRokok: [],
      };
    },

    removeData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setFormInput, addData, removeData } = surveySlice.actions;

export default surveySlice.reducer;
