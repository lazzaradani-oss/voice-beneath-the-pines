import type { CSSProperties } from "react";

export default function Fire() {
  return (
    <div className="fire" aria-hidden="true">
      <div className="fire-orbit fire-orbit-a" />
      <div className="fire-orbit fire-orbit-b" />

      <div className="fire-glow" />
      <div className="fire-glow-inner" />

      <div className="flame-field">
        <span className="flame-tongue flame-tongue-back" />
        <span className="flame-tongue flame-tongue-left" />
        <span className="flame-tongue flame-tongue-center" />
        <span className="flame-tongue flame-tongue-right" />
        <span className="flame-tongue flame-tongue-front" />

        <span className="flame-inner" />
        <span className="flame-core" />
      </div>

      <div className="embers">
        <span className="ember ember-01" />
        <span className="ember ember-02" />
        <span className="ember ember-03" />
        <span className="ember ember-04" />
        <span className="ember ember-05" />
        <span className="ember ember-06" />
        <span className="ember ember-07" />
        <span className="ember ember-08" />
        <span className="ember ember-09" />
        <span className="ember ember-10" />
        <span className="ember ember-11" />
        <span className="ember ember-12" />
      </div>
    </div>
  );
}