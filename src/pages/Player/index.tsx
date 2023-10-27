import { twMerge } from "tailwind-merge";
import { Header } from "./Header";
import { Video } from "@components/Video";
import { LessonList } from "./LessonList";
import { useAppSelector } from "@store/index";

export function Player() {
  const url = useAppSelector((store) => store.player.course.currentLesson);

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1300px] flex-col gap-6 2xl:w-[1500px]">
        <Header
          title="Fundamentos Redux"
          description="Iniciando no mundo no Redux"
        />

        <main
          className={twMerge(
            "flex overflow-hidden rounded-lg",
            "border border-zinc-800 bg-zinc-900 shadow",
          )}
        >
          <Video url={url} />

          <LessonList />
        </main>
      </div>
    </div>
  );
}
