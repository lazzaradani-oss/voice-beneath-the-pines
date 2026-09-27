# The Voice Beneath the Pines

An interactive mountain folklore experiment by Logic & Luster.

> Nocturne is a machine that responds to you.
>
> The Voice Beneath the Pines is a story that notices you.

## Stack

React · TypeScript · Vite · CSS

## Creative system

The experience translates the visual systems established in **The Nocturne Machine** into a narrative environment:

- deterministic particle field
- cursor-responsive atmosphere
- breathing light and layered aura
- parallax image luster
- state-driven environmental intensity
- rotating orbital geometry translated into moon/fire/ghost rings
- reduced-motion support
- no runtime dependencies beyond React and Vite

The behavior is intentionally translated rather than copied literally. Nocturne remains a machine; this project is a story that becomes aware of the viewer.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Netlify runs `npm run build` and publishes `dist/`.

## Assets

The twelve supplied story images live in `public/story/` and are referenced by exact filename from `src/data/story.ts`.
