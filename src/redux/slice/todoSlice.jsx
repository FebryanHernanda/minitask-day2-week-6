import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  lastId: 0,
  formInput: {
    nama: "",
    status: false,
  },
  editId: null,
};

const todoSlice = createSlice({
  initialState,
  name: "todoForm",
  reducers: {
    setTodo: (state, action) => {
      const { name, value } = action.payload;
      state.formInput[name] = value;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    addTask: (state) => {
      const newId = state.lastId + 1;

      state.data.push({ id: newId, ...state.formInput });

      state.lastId = newId;

      state.formInput = {
        nama: "",
        status: false,
      };
    },
    editTask: (state) => {
      const task = state.data.find((item) => item.id === state.editId);
      if (task) {
        task.nama = state.formInput.nama;
      }

      state.formInput = { nama: "", status: false };
      state.editId = null;
    },

    toggleTask: (state, action) => {
      const task = state.data.find((item) => item.id === action.payload);

      if (task) {
        task.status = !task.status;
      }
    },

    removeTask: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setTodo, setEditId, addTask, toggleTask, editTask, removeTask } =
  todoSlice.actions;
export default todoSlice.reducer;
