import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [
        {
          id: "1",
          number: "1",
          title: "Iniciando com React",
          lessons: [
            { id: "1", title: "Fundamentos Redux", duration: "11:20" },
            { id: "2", title: "Redux na prática", duration: "10:20" },
          ],
        },
        {
          id: "2",
          number: "2",
          title: "Iniciando com React",
          lessons: [
            { id: "1", title: "Fundamentos Context Api", duration: "11:20" },
          ],
        },
        {
          id: "3",
          number: "3",
          title: "Iniciando com React",
          lessons: [
            { id: "1", title: "Fundamentos Zustand", duration: "11:20" },
          ],
        },
      ],
      currentLesson: "",
    },
  },
  reducers: {
    handleSelectLesson: (state, action) => {
      state.course.currentLesson = action.payload;
    },
  },
});

export const playerReducer = playerSlice.reducer;
export const { handleSelectLesson } = playerSlice.actions;
