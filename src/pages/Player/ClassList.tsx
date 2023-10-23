import { ClassItem } from "@components/Accordion/ClassItem";
import { ModuleTrigger } from "@components/Accordion/ModuleTrigger";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as Accordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

export function ClassList() {
  const [parent] = useAutoAnimate();

  return (
    <aside
      className={twMerge(
        "h-[550px] border-l border-l-zinc-800 bg-zinc-900 2xl:h-[663px]",
        "w-80 overflow-y-auto 2xl:w-96",
      )}
    >
      <Accordion.Root type="multiple" className="divide-y-2 divide-zinc-900">
        {classItems.map((item) => {
          return (
            <Accordion.Item key={item.id} value={item.id}>
              <ModuleTrigger
                title={item.title}
                module={item.module}
                numberClass={item.numberClass}
              />

              <Accordion.Content ref={parent}>
                <nav className="relative flex flex-col gap-4 p-6">
                  {item.classes.map((item) => {
                    return (
                      <ClassItem
                        key={item.id}
                        title={item.title}
                        duration={item.duration}
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

const classItems = [
  {
    id: "1",
    title: "Desvendando o Redux",
    module: 1,
    numberClass: 12,
    classes: [
      { id: "1", title: "Fundamentos do Redux", duration: "09:13" },
      { id: "2", title: "Fundamentos do Redux", duration: "09:13" },
      { id: "3", title: "Fundamentos do Redux", duration: "09:13" },
    ],
  },
  {
    id: "2",
    title: "React Avançado",
    module: 2,
    numberClass: 10,
    classes: [
      { id: "1", title: "Hooks em React", duration: "12:45" },
      { id: "2", title: "Context API", duration: "10:22" },
      { id: "3", title: "Roteamento com React Router", duration: "15:30" },
    ],
  },
  {
    id: "3",
    title: "Node.js Fundamentals",
    module: 3,
    numberClass: 8,
    classes: [
      { id: "1", title: "Introdução ao Node.js", duration: "11:20" },
      { id: "2", title: "Manipulação de Arquivos", duration: "08:57" },
      { id: "3", title: "Express.js", duration: "14:10" },
    ],
  },
  {
    id: "4",
    title: "Web Design Basics",
    module: 4,
    numberClass: 6,
    classes: [
      { id: "1", title: "HTML5 e CSS3", duration: "13:05" },
      { id: "2", title: "Layout Responsivo", duration: "09:48" },
      { id: "3", title: "Princípios de Design", duration: "11:36" },
    ],
  },
];
