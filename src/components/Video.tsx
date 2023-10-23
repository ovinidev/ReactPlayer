import ReactPlayer from "react-player";

interface Video {
  url: string;
}

export function Video({ url }: Video) {
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
