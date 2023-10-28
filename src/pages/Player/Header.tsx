import { MessageCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useAppSelector } from "@store/index";

export function Header() {
  const { currentModule, currentLesson } = useAppSelector((store) => {
    const { currentModuleIndex, currentLessonIndex, modules } =
      store.player.course;

    const currentModule = modules[currentModuleIndex];
    const currentLesson = currentModule.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });

  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentModule.title}</h1>
        <span className="text-md text-zinc-400">{currentLesson.title}</span>
      </div>

      <button
        className={twMerge(
          "flex items-center gap-2 rounded",
          "text-md bg-violet-700 px-3 py-2 font-medium text-white",
          "ease duration-700 hover:bg-violet-800",
        )}
      >
        <MessageCircle className="h-5 w-5" />
        Deixar feedback
      </button>
    </header>
  );
}
