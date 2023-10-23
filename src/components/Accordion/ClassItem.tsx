import { Video } from "lucide-react";

interface ClassItemItemProps {
  title: string;
  duration: string;
}

export const ClassItem = ({ title, duration }: ClassItemItemProps) => {
  return (
    <button className="text-md group flex items-center gap-3 text-zinc-400">
      <Video className="ease h-5 w-5 text-zinc-500 duration-200 group-hover:brightness-90" />
      <span className="ease text-left duration-200 group-hover:brightness-90">
        {title}
      </span>

      <span className="ease ml-auto font-mono text-sm text-zinc-500 duration-200 group-hover:brightness-90">
        {duration}
      </span>
    </button>
  );
};
