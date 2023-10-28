import ReactPlayer from "react-player";
import { useAppSelector } from "@store/index";

export function Video() {
  const url = useAppSelector((store) => {
    const { currentLessonIndex, currentModuleIndex } = store.player.course;

    return store.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
    ].url;
  });

  return (
    <section className="aspect-video w-full flex-1 bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        alt="Youtube vídeo"
        controls
        url={url}
      />
    </section>
  );
}
