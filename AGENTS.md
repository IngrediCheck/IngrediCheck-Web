# Repository Guidelines

This guide keeps IngrediCheck-Web contributions consistent and production-ready.

## Project Structure & Module Organization
- `src/` hosts TypeScript source; use `components/` for shared UI, `pages/` for screens, `routes/` for router config, and `utils/` for helpers.
- Reference data belongs in `src/data/`; media lives in `src/assets/` or `public/` when it must ship unprocessed.
- Layout shells sit in `src/Layouts/`, while `index.css` plus Tailwind directives define global styling.
- Build artifacts land in `dist/`; adjust source files instead of editing generated output.

## Build, Test, and Development Commands
- `npm run dev` launches the Vite dev server with hot reload on `http://localhost:5173`.
- `npm run build` runs `tsc` type checks and produces the optimized bundle with Vite.
- `npm run preview` serves the production build locally for smoke tests.
- `npm run lint` enforces ESLint rules and must pass before pushing.

## Coding Style & Naming Conventions
- Use TypeScript, 2-space indentation, and double quotes for strings to match the current codebase.
- Export React components in PascalCase; hooks, utilities, and files use camelCase (`useIngredientFilters`).
- Prefer functional components with explicit prop types; keep async work inside services or hooks.
- Tailwind classes live in JSX; fallback styles go in `index.css`. Run `npm run lint` after formatting.

## Testing Guidelines
- End-to-end coverage uses Playwright; add specs under `tests/e2e/` as `feature-name.spec.ts`.
- Focus each spec on a single customer flow such as landing page load or account support navigation.
- Execute `npx playwright test` before submitting. Failing tests block merges.
- Collocate unit tests next to components as `ComponentName.test.tsx` when adding them.

## Commit & Pull Request Guidelines
- Write imperative, descriptive commit subjects (~50 chars), following the existing history (“Add delete account support page…”).
- Rebase onto main before opening a PR, and confirm `npm run lint` and `npm run build` succeed.
- PR descriptions should summarize intent, list key changes, link issues, and include UI screenshots when visuals change.
- Document required environment variables and manual verification steps in the PR body.

## Configuration & Deployment Notes
- Environment variables use the Vite `VITE_` prefix and load from `.env.local`; never commit secrets.
- Update both `tailwind.config.js` and `postcss.config.js` when adding design tokens or new CSS tooling.
- Vercel deployment reads `vercel.json`; coordinate before altering routing or analytics (`@vercel/analytics`).
