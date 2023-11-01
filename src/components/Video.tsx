import ReactPlayer from "react-player";
import { useAppSelector } from "@store/index";
import { useDispatch } from "react-redux";
import { next } from "@store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const url = useAppSelector((store) => {
    const { currentLessonIndex, currentModuleIndex } = store.player.course;

    return store.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
    ].url;
  });

  const autoPlay = () => {
    dispatch(next());
  };

  return (
    <section className="aspect-video w-full flex-1 bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        alt="Youtube vídeo"
        controls
        url={url}
        onEnded={autoPlay}
        playing
      />
    </section>
  );
}
