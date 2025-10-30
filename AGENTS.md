# Repository Guidelines

## Project Structure & Module Organization
Core application code resides in `src/app`, built with the Next.js App Router. `layout.tsx` defines the root shell, `page.tsx` renders the landing experience, and shared styling lives in `globals.css`. Serve static assets such as icons and images from `public`. Project-level configuration (Next, TypeScript, ESLint, Tailwind) is stored at the repository root for easy discovery.

## Build, Test, and Development Commands
`npm run dev` starts the Next.js dev server on http://localhost:3000 with fast refresh. `npm run build` compiles the production bundle into `.next`. `npm run start` runs the production server against the most recent build. `npm run lint` enforces the Next Core Web Vitals ruleset; run it before committing to catch accessibility and performance issues early.

## Coding Style & Naming Conventions
Write components in TypeScript with React function components. Keep indentation at two spaces and wrap long JSX props onto new lines as in the existing files. Name React components and exported hooks in PascalCase, utilities in camelCase, and file names in kebab-case unless required otherwise by the App Router (e.g., `layout.tsx`). Prefer Tailwind utility classes for styling; group related utilities logically (`layout`, `spacing`, `effects`) to stay readable.

## Testing Guidelines
A formal test runner is not configured yet, so treat `npm run lint` as a required gate and verify UI flows manually via `npm run dev`. When introducing automated tests, colocate component specs as `*.test.tsx` alongside the feature and use React Testing Library for DOM behavior. Document any new scripts in `package.json` and ensure they run in CI before merging. Target coverage on critical paths and regressions first.

## Commit & Pull Request Guidelines
The current history uses concise, imperative summaries (e.g., `Initial commit from Create Next App`). Follow that style: start with a lowercase verb phrase under 60 characters, optionally add context in the body. Each pull request must describe the change, list verification steps, and attach before/after screenshots for UI updates. Link related issues and call out migrations or breaking changes explicitly.

## Environment & Configuration Tips
Use `.env.local` for secrets; never commit environment variables. After dependency changes, regenerate `package-lock.json` via `npm install` and include it in the PR. Keep generated artifacts out of the repo—`.next`, `out`, and similar folders are ignored already.
