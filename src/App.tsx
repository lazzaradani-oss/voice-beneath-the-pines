import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Ambience from "./components/Ambience";
import Campfire from "./components/Campfire";
import RearviewScene from "./components/RearviewScene";
import StoryCard from "./components/StoryCard";
import { storyChapters, titleImage, type Atmosphere } from "./data/story";

type Mode = "title" | "story" | "road" | "ending";
type Pointer = { x: number; y: number; intensity: number };

const atmosphereByMode: Record<Mode, Atmosphere> = {
  title: "warm",
  story: "moon",
  road: "danger",
  ending: "warm",
};

function App() {
  const [mode, setMode] = useState<Mode>("title");
  const [chapterIndex, setChapterIndex] = useState(0);
  const [ambience, setAmbience] = useState(true);
  const [whisper, setWhisper] = useState(false);
  const [pointer, setPointer] = useState<Pointer>({ x: 0, y: 0, intensity: 0 });

  const chapter = storyChapters[chapterIndex];
  const atmosphere = mode === "story" ? chapter.atmosphere : atmosphereByMode[mode];
  const progress = useMemo(
    () => ((chapterIndex + 1) / storyChapters.length) * 100,
    [chapterIndex],
  );

  const rootStyle = {
    "--pointer-x": `${pointer.x * 34}px`,
    "--pointer-y": `${pointer.y * 34}px`,
    "--pointer-x-unit": pointer.x,
    "--pointer-y-unit": pointer.y,
    "--pointer-intensity": pointer.intensity,
  } as CSSProperties;

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setPointer({ x, y, intensity: Math.min(1, Math.hypot(x, y) / 1.414) });
    };
    const onPointerLeave = () => setPointer({ x: 0, y: 0, intensity: 0 });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [mode, chapterIndex]);

  const advance = () => {
    if (chapterIndex >= storyChapters.length - 1) {
      setMode("ending");
      return;
    }
    const nextIndex = chapterIndex + 1;
    setChapterIndex(nextIndex);
    setWhisper(false);
    setMode(storyChapters[nextIndex].id === "road" ? "road" : "story");
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mode !== "title") {
        setMode("title");
        setWhisper(false);
      }
      if ((event.key === "ArrowRight" || event.key === "Enter") && mode === "story") advance();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mode, chapterIndex]);

  const begin = () => {
    setMode("story");
    setChapterIndex(0);
    setWhisper(false);
  };

  const triggerStoryAction = () => {
    if (chapter.id === "warning") {
      setWhisper(true);
      window.setTimeout(() => setWhisper(false), 2100);
    }
    if (chapter.id === "road") {
      setMode("road");
      return;
    }
    if (chapter.id === "taken") {
      setMode("ending");
      return;
    }
    advance();
  };

  const reset = () => {
    setMode("title");
    setChapterIndex(0);
    setWhisper(false);
  };

  return (
    <main
      className={`voice-app mode-${mode} atmosphere-${atmosphere} ${whisper ? "is-whispering" : ""}`}
      style={rootStyle}
    >
      <Ambience enabled={ambience} atmosphere={atmosphere} intensity={mode === "road" || whisper ? 1 : mode === "title" ? 0.72 : 0.88} />

      <div className="pointer-glow" aria-hidden="true" />
      <div className="screen-grain" aria-hidden="true" />
      <div className="screen-vignette" aria-hidden="true" />

      <header className="interface-bar">
        <span>LOGIC &amp; LUSTER</span>
        <span className="interface-center">THE VOICE BENEATH THE PINES</span>
        <button
          className="sound-toggle"
          type="button"
          onClick={() => setAmbience((value) => !value)}
          aria-label={ambience ? "Turn ambience off" : "Turn ambience on"}
        >
          {ambience ? "AMBIENCE ON" : "AMBIENCE OFF"}
        </button>
      </header>

      {mode === "title" && (
        <div className="title-stage">
          <div className="title-art" aria-hidden="true">
            <img src={titleImage} alt="" />
            <div className="title-art-luster" />
          </div>
          <Campfire onBegin={begin} active={false} />
        </div>
      )}

      {mode === "story" && (
        <div className="story-stage">
          <div className="story-progress">
            <span>THE MOUNTAIN REMEMBERS</span>
            <span>{String(chapterIndex + 1).padStart(2, "0")} / {String(storyChapters.length).padStart(2, "0")}</span>
            <div className="progress-line"><span style={{ width: `${progress}%` }} /></div>
          </div>
          <StoryCard chapter={chapter} onAction={triggerStoryAction} />
          <div className="story-hint">
            <span>CLICK TO CONTINUE</span>
            <span>ESC TO RETURN TO FIRE</span>
          </div>
        </div>
      )}

      {mode === "road" && <RearviewScene onReturn={() => setMode("ending")} />}

      {mode === "ending" && (
        <section className="ending-stage">
          <div className="ending-fire-core" aria-hidden="true">
            <span className="ending-ring ending-ring-one" />
            <span className="ending-ring ending-ring-two" />
            <span className="ending-flame" />
          </div>
          <span className="eyebrow">THE MOUNTAIN REMEMBERS</span>
          <h2>The fire is still burning.</h2>
          <p>Some stories are warnings. Some are invitations. Some are waiting for someone to hear them.</p>
          <button type="button" className="story-action" onClick={reset}>RETURN TO THE BEGINNING</button>
        </section>
      )}

      {whisper && (
        <div className="whisper" role="status" aria-live="polite">
          <span>someone called your name</span>
        </div>
      )}

      <footer className="interface-footer">
        <span>AN INTERACTIVE FOLKLORE EXPERIMENT</span>
        <span>2026</span>
      </footer>
    </main>
  );
}

export default App;
