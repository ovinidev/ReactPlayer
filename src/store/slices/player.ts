import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setLessonToStorage } from "@utils/setLessonToStorage";

interface PayloadPlayProps {
  moduleIndex: number;
  lessonIndex: number;
}

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
    play: (state, action: PayloadAction<PayloadPlayProps>) => {
      state.course.currentModuleIndex = action.payload.moduleIndex;
      state.course.currentLessonIndex = action.payload.lessonIndex;

      setLessonToStorage({
        moduleIndex: action.payload.moduleIndex,
        lessonIndex: action.payload.lessonIndex,
      });
    },
    next: (state) => {
      const module = state.course.modules;
      const currentLessonIndex = state.course.currentLessonIndex;
      const currentModuleIndex = state.course.currentModuleIndex;
      const hasNextModule = module[currentModuleIndex + 1];
      const hasNextLesson =
        module[currentModuleIndex].lessons[currentLessonIndex + 1];

      if (hasNextModule) {
        state.course.currentModuleIndex = currentModuleIndex + 1;
        state.course.currentLessonIndex = 0;

        setLessonToStorage({
          moduleIndex: currentModuleIndex + 1,
          lessonIndex: 0,
        });

        return;
      }

      if (hasNextLesson) {
        state.course.currentLessonIndex = currentLessonIndex + 1;

        setLessonToStorage({
          moduleIndex: currentModuleIndex,
          lessonIndex: currentLessonIndex + 1,
        });

        return;
      }

      return;
    },
  },
});

export const playerReducer = playerSlice.reducer;
export const { play, next } = playerSlice.actions;
