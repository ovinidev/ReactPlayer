import * as Accordion from "@radix-ui/react-accordion";
import { ChevronUp } from "lucide-react";

interface ModuleTriggerProps {
  title: string;
  module: number;
  numberClass: number;
}

export const ModuleTrigger = ({
  title,
  module,
  numberClass,
}: ModuleTriggerProps) => {
  return (
    <Accordion.Trigger className="group flex w-full items-center gap-3 bg-zinc-800 p-4">
      <div className="text-md flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950">
        {module}
      </div>

      <div className="flex flex-col gap-1 text-left">
        <strong className="text-md">{title}</strong>
        <span className="text-sm text-zinc-400">{numberClass} aulas</span>
      </div>

      <ChevronUp className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
    </Accordion.Trigger>
  );
};
