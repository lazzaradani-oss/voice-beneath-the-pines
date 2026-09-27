import { useEffect, useMemo, useState, type CSSProperties } from "react";
import type { Atmosphere } from "../data/story";

type Props = { enabled: boolean; intensity: number; atmosphere: Atmosphere };
type Particle = { id: number; x: number; y: number; size: number; duration: number; delay: number; drift: number; opacity: number };

const particles: Particle[] = Array.from({ length: 84 }, (_, index) => ({
  id: index,
  x: (index * 47.37) % 100,
  y: (index * 73.19) % 100,
  size: 0.8 + ((index * 17) % 18) / 10,
  duration: 8 + ((index * 13) % 90) / 10,
  delay: -((index * 29) % 80) / 10,
  drift: -55 + ((index * 31) % 110),
  opacity: 0.12 + ((index * 11) % 48) / 100,
}));

export default function Ambience({ enabled, intensity, atmosphere }: Props) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const started = performance.now();
    const tick = (now: number) => {
      setTime((now - started) / 1000);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled]);

  const pulse = useMemo(() => 0.5 + Math.sin(time * 0.72) * 0.5, [time]);

  return (
    <div
      className={`ambience atmosphere-field atmosphere-field-${atmosphere} ${enabled ? "is-on" : "is-off"}`}
      style={{ "--ambient-intensity": intensity, "--ambient-pulse": pulse } as CSSProperties}
      aria-hidden="true"
    >
      <div className="ambient-vignette" />
      <div className="ambient-bloom ambient-bloom-a" />
      <div className="ambient-bloom ambient-bloom-b" />
      <div className="ambient-bloom ambient-bloom-c" />
      <div className="mist mist-a" />
      <div className="mist mist-b" />
      <div className="mist mist-c" />
      <div className="forest-noise" />
      <div className="particle-field">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              "--particle-x": `${particle.x}%`,
              "--particle-y": `${particle.y}%`,
              "--particle-size": `${particle.size}px`,
              "--particle-duration": `${particle.duration}s`,
              "--particle-delay": `${particle.delay}s`,
              "--particle-drift": `${particle.drift}px`,
              "--particle-opacity": particle.opacity,
            } as CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
