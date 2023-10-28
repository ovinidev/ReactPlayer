import { createSlice } from "@reduxjs/toolkit";

const storage = localStorage.getItem("currentLesson");
const { currentModuleIndex, currentLessonIndex } = storage
  ? JSON.parse(storage)
  : { currentModuleIndex: 0, currentLessonIndex: 0 };

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [
        {
          id: "1",
          title: "Iniciando com React",
          lessons: [
            {
              id: "1",
              title: "Fundamentos Redux",
              duration: "11:20",
              url: "https://www.youtube.com/watch?v=izv6XqFojHY",
            },
            {
              id: "2",
              title: "Redux na prática",
              duration: "10:20",
              url: "https://www.youtube.com/watch?v=fuN7IV4Mh08",
            },
          ],
        },
        {
          id: "2",
          title: "Avançando no Frontend",
          lessons: [
            {
              id: "1",
              title: "Fundamentos Context Api",
              duration: "11:20",
              url: "https://www.youtube.com/watch?v=EsH30VRyfXY",
            },
          ],
        },
        {
          id: "3",
          title: "Finalizando o React",
          lessons: [
            {
              id: "1",
              title: "Fundamentos Zustand",
              duration: "11:20",
              url: "https://www.youtube.com/watch?v=bXwJHdpwtvs",
            },
          ],
        },
      ],
      currentModuleIndex,
      currentLessonIndex,
    },
  },
  reducers: {
    handleSelectLesson: (state, action) => {
      state.course.currentModuleIndex = action.payload.moduleIndex;
      state.course.currentLessonIndex = action.payload.lessonIndex;

      localStorage.setItem(
        "currentLesson",
        JSON.stringify({
          currentModuleIndex: action.payload.moduleIndex,
          currentLessonIndex: action.payload.lessonIndex,
        }),
      );
    },
  },
});

export const playerReducer = playerSlice.reducer;
export const { handleSelectLesson } = playerSlice.actions;
