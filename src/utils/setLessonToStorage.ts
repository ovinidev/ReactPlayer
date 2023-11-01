interface SetLessonToStorageProps {
  moduleIndex: number;
  lessonIndex: number;
}

export function setLessonToStorage({
  moduleIndex,
  lessonIndex,
}: SetLessonToStorageProps) {
  localStorage.setItem(
    "currentLesson",
    JSON.stringify({
      currentModuleIndex: moduleIndex,
      currentLessonIndex: lessonIndex,
    }),
  );
}
