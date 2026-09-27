import type { StoryChapter } from "../data/story";

type Props = { chapter: StoryChapter; onAction: () => void };

export default function StoryCard({ chapter, onAction }: Props) {
  return (
    <section className={`story-card atmosphere-${chapter.atmosphere}`}>
      <div className="story-image-wrap">
        <div className="story-image-parallax">
          <img src={chapter.image} alt={chapter.alt} />
        </div>
        <div className="story-image-vignette" />
        <div className="story-image-luster" />
        <div className="story-image-ring" aria-hidden="true" />
      </div>

      <div className="story-copy">
        <span className="eyebrow">{chapter.eyebrow}</span>
        <h2>{chapter.title}</h2>
        <p>{chapter.text}</p>
        <div className="story-copy-rule" aria-hidden="true" />
        <button className="story-action" type="button" onClick={onAction}>
          <span className="story-action-dot" />
          {chapter.action}
        </button>
      </div>
    </section>
  );
}
