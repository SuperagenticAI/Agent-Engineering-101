# Agent Engineering 101

A presentation website for the talk **"Agent Engineering 101: How to Build Reliable AI Systems"**.

The site is built as an animated slide deck in React and Vite. It covers the shift from prompt tinkering to production-ready AI systems, including agent architecture, evaluation, memory, DSPy/GEPA, and Google's ecosystem for production agents.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - type-check and create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Presentation Structure

The presentation content is defined in [`src/data/slides.ts`](./src/data/slides.ts).

Current sections:

- `Intro`
- `Problem`
- `Current State`
- `Engineering`
- `Frameworks`
- `Action`

The deck currently contains 13 slides, including:

- hero / title screen
- speaker intro
- production failure/problem framing
- what an agent is
- current team workflows
- prompt limitations
- agent engineering disciplines
- evals and memory
- DSPy and GEPA
- Google ecosystem
- closing/action slides

## Navigation

Navigation is handled by [`src/hooks/useSlideNavigation.ts`](./src/hooks/useSlideNavigation.ts).

Supported controls:

- `ArrowRight`, `ArrowDown`, `Space`, `PageDown` for next slide
- `ArrowLeft`, `ArrowUp`, `PageUp` for previous slide
- `Home` for the first slide
- `End` for the last slide

The current slide is synced to the URL hash in the form `#slide=3`.

## Project Layout

```text
src/
  components/
    backgrounds/   animated visual layers
    slides/        per-slide React components
    visuals/       shared presentation UI primitives
  data/
    slides.ts      presentation content, links, speaker metadata
  hooks/
    useSlideNavigation.ts
  types/
    index.ts
  App.tsx          presentation shell
  index.css        theme and global styles
  main.tsx         app entry point
```

## Editing Content

If you want to update the talk content:

1. Edit metadata, links, speaker details, or slide titles in [`src/data/slides.ts`](./src/data/slides.ts).
2. Update the corresponding slide component in [`src/components/slides`](./src/components/slides).
3. Run `npm run build` to verify the deck still compiles.

## Styling and Motion

- Global theme tokens and shared visual classes live in [`src/index.css`](./src/index.css).
- Slide transitions are managed in [`src/components/Presentation.tsx`](./src/components/Presentation.tsx).
- Shared animated layout helpers live in [`src/components/visuals/SlideLayout.tsx`](./src/components/visuals/SlideLayout.tsx).

## Build Output

Production assets are generated into `dist/` by `npm run build`.
