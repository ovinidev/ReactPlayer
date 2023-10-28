import { Video } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface LessonItemItemProps extends ComponentProps<"button"> {
  lesson: {
    title: string;
    url: string;
    duration: string;
  };
  isCurrentLesson: boolean;
}

export const LessonItem = ({
  lesson,
  isCurrentLesson,
  ...rest
}: LessonItemItemProps) => {
  return (
    <button
      disabled={isCurrentLesson}
      data-active={isCurrentLesson}
      className="text-md group group flex items-center gap-3 text-zinc-400"
      {...rest}
    >
      <Video
        className={twMerge(
          "ease h-5 w-5 duration-200 group-data-[active=false]:hover:brightness-90",
          "text-zinc-500 group-data-[active=true]:text-emerald-400",
        )}
      />
      <span
        className={twMerge(
          "ease text-left duration-200 group-data-[active=false]:hover:brightness-90",
          "text-zinc-500 group-data-[active=true]:text-emerald-400",
        )}
      >
        {lesson.title}
      </span>

      <span
        className={twMerge(
          "ease ml-auto font-mono text-sm duration-200 group-data-[active=false]:hover:brightness-90",
          "text-zinc-500 group-data-[active=true]:text-emerald-400",
        )}
      >
        {lesson.duration}
      </span>
    </button>
  );
};
