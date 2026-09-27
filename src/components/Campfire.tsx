import Fire from "./Fire";

type Props = { onBegin: () => void; active: boolean };

export default function Campfire({ onBegin, active }: Props) {
  return (
    <section className={`campfire-scene ${active ? "is-active" : ""}`}>
      <div className="campfire-sky" />
      <div className="campfire-moon-aura" />
      <div className="campfire-moon" />
      <div className="campfire-mountains" />
      <div className="campfire-trees campfire-trees-back" />
      <div className="campfire-trees campfire-trees-front" />
      <div className="campfire-luster" />

      <div className="campfire-title">
        <span className="eyebrow">LOGIC &amp; LUSTER PRESENTS</span>
        <h1>THE VOICE<br /><em>BENEATH THE PINES</em></h1>
        <p>An old mountain story</p>
      </div>

      <div className="campfire-figure campfire-figure-left" />
      <div className="campfire-figure campfire-figure-right" />

      <div className="campfire-ring" aria-hidden="true">
        <span className="campfire-orbit campfire-orbit-one" />
        <span className="campfire-orbit campfire-orbit-two" />
        <Fire />
      </div>

      <div className="campfire-instruction">
        <span>THE MOUNTAIN IS LISTENING</span>
        <button type="button" onClick={onBegin}>{active ? "LISTENING…" : "BEGIN THE STORY"}</button>
      </div>
    </section>
  );
}
