import { useAppSelector } from "@store/index";
import { handleSelectLesson } from "@store/slices/player";
import { Video } from "lucide-react";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";

interface LessonItemItemProps {
  title: string;
  url: string;
  duration: string;
}

export const LessonItem = ({ title, url, duration }: LessonItemItemProps) => {
  const dispatch = useDispatch();

  const currentLesson = useAppSelector(
    (store) => store.player.course.currentLesson,
  );

  const isCurrentLesson = currentLesson === url;

  return (
    <button
      onClick={() => dispatch(handleSelectLesson(url))}
      className="text-md group flex items-center gap-3 text-zinc-400"
    >
      <Video
        className={twMerge(
          "ease h-5 w-5 duration-200 group-hover:brightness-90",
          `${isCurrentLesson ? "text-zinc-100" : "text-zinc-500"} `,
        )}
      />
      <span
        className={twMerge(
          "ease text-left duration-200 group-hover:brightness-90",
          `${isCurrentLesson ? "text-zinc-100" : "text-zinc-500"} `,
        )}
      >
        {title}
      </span>

      <span
        className={twMerge(
          "ease ml-auto font-mono text-sm duration-200 group-hover:brightness-90",
          `${isCurrentLesson ? "text-zinc-100" : "text-zinc-500"} `,
        )}
      >
        {duration}
      </span>
    </button>
  );
};
