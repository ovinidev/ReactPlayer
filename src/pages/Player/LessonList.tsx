import { ModuleTrigger } from "@components/Accordion/ModuleTrigger";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as Accordion from "@radix-ui/react-accordion";
import { useAppSelector } from "@store/index";
import { twMerge } from "tailwind-merge";
import { LessonItem } from "./LessonItem";

export function LessonList() {
  const [parent] = useAutoAnimate();
  // Trazer somente as informações que realmente serão utilizadas
  const modules = useAppSelector((store) => store.player.course.modules);

  return (
    <aside
      className={twMerge(
        "h-[550px] border-l border-l-zinc-800 bg-zinc-900 2xl:h-[663px]",
        "w-80 overflow-y-auto 2xl:w-96",
      )}
    >
      <Accordion.Root type="multiple" className="divide-y-2 divide-zinc-900">
        {modules.map((module) => {
          return (
            <Accordion.Item key={module.id} value={module.id}>
              <ModuleTrigger
                title={module.title}
                moduleNumber={module.number}
                lessonQuantity={module.lessons.length}
              />

              <Accordion.Content ref={parent}>
                <nav className="relative flex flex-col gap-4 p-6">
                  {module.lessons.map((lesson) => {
                    return (
                      <LessonItem
                        key={lesson.id}
                        title={lesson.title}
                        duration={lesson.duration}
                      />
                    );
                  })}
                </nav>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </aside>
  );
}
