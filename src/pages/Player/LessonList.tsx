import { ModuleTrigger } from "@components/Accordion/ModuleTrigger";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as Accordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";
import { LessonItem } from "./LessonItem";
import { useDispatch } from "react-redux";
import { play } from "@store/slices/player";
import { useAppSelector } from "@store/index";

export function LessonList() {
  const [parent] = useAutoAnimate();
  const dispatch = useDispatch();

  // Trazer somente as informações que realmente serão utilizadas
  const modules = useAppSelector((store) => store.player.course.modules);

  const currentLessonUrl = useAppSelector((store) => {
    const currentModuleIndex = store.player.course.currentModuleIndex;
    const currentLessonIndex = store.player.course.currentLessonIndex;

    return store.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
    ].url;
  });

  const storage = localStorage.getItem("currentLesson");
  const { currentModuleIndex } = storage
    ? JSON.parse(storage)
    : { currentModuleIndex: 0 };

  return (
    <aside
      className={twMerge(
        "h-[550px] border-l border-l-zinc-800 bg-zinc-900 2xl:h-[663px]",
        "w-80 overflow-y-auto 2xl:w-96",
      )}
    >
      <Accordion.Root
        defaultValue={[String(currentModuleIndex + 1)]}
        type="multiple"
        className="divide-y-2 divide-zinc-900"
      >
        {modules.map((module, moduleIndex) => {
          return (
            <Accordion.Item key={module.id} value={module.id}>
              <ModuleTrigger
                title={module.title}
                moduleNumber={moduleIndex + 1}
                lessonQuantity={module.lessons.length}
              />

              <Accordion.Content ref={parent}>
                <nav className="relative flex flex-col gap-4 p-6">
                  {module.lessons.map((lesson, lessonIndex) => {
                    return (
                      <LessonItem
                        key={lesson.id}
                        lesson={lesson}
                        isCurrentLesson={currentLessonUrl === lesson.url}
                        onClick={() =>
                          dispatch(
                            play({
                              moduleIndex,
                              lessonIndex,
                            }),
                          )
                        }
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
