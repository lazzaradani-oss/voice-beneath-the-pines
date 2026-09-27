import { useEffect, useState } from "react";

type Props = { onReturn: () => void };

export default function RearviewScene({ onReturn }: Props) {
  const [lookCount, setLookCount] = useState(0);

  useEffect(() => {
    if (lookCount === 0) return;
    document.documentElement.classList.add("mirror-has-looked");
    return () => document.documentElement.classList.remove("mirror-has-looked");
  }, [lookCount]);

  const reveal = () => setLookCount((count) => Math.min(count + 1, 3));

  return (
    <section className={`rearview-scene reveal-${lookCount}`}>
      <div className="road-image">
        <img src="/story/voice-10-rearview.webp" alt="Mountain road at night with a ghostly figure in a rearview mirror" />
      </div>
      <div className="road-image-ghost" aria-hidden="true" />
      <div className="road-vignette" />
      <div className="road-scanlines" />
      <div className="road-distortion" />
      <div className="road-presence" aria-hidden="true" />

      <div className="rearview-mirror-shell">
        <div className="rearview-mirror">
          <div className="mirror-reflection" />
          <div className="mirror-ghost" />
          {lookCount > 0 && <span className="mirror-eyes" />}
          {lookCount > 1 && <span className="mirror-ripple ripple-one" />}
          {lookCount > 2 && <span className="mirror-ripple ripple-two" />}
          {lookCount > 2 && <span className="mirror-face" />}
        </div>
      </div>

      <div className="rearview-copy">
        <span className="eyebrow">THE ROAD</span>
        <h2>{lookCount === 0 ? "Something is behind you." : lookCount === 1 ? "You looked." : lookCount === 2 ? "She looked back too." : "Don't look back."}</h2>
        <p>{lookCount === 0 ? "The mountain road is quiet. The mirror is not." : lookCount === 1 ? "For one second, the road behind you doesn't look the same." : lookCount === 2 ? "The distance between the living and the remembered is getting smaller." : "Some stories end when you turn around. Others begin."}</p>

        {lookCount < 3 ? (
          <button type="button" className="story-action" onClick={reveal}>
            CHECK THE MIRROR
          </button>
        ) : (
          <button type="button" className="story-action" onClick={onReturn}>
            RETURN TO THE FIRE
          </button>
        )}
      </div>
    </section>
  );
}
