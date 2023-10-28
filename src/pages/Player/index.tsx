import { twMerge } from "tailwind-merge";
import { Header } from "./Header";
import { Video } from "@components/Video";
import { LessonList } from "./LessonList";

export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1300px] flex-col gap-6 2xl:w-[1500px]">
        <Header />

        <main
          className={twMerge(
            "flex overflow-hidden rounded-lg",
            "border border-zinc-800 bg-zinc-900 shadow",
          )}
        >
          <Video />

          <LessonList />
        </main>
      </div>
    </div>
  );
}
