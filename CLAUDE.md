# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

**Technology Stack:**
- **Framework:** Lit Elements (Web Components) with TypeScript
- **Build Tool:** Vite
- **Styling:** CSS-in-JS with Lit's css tagged template literals

**Primary development workflow:**
- `npm run dev` - Start development server with Vite
- `npm run build` - TypeScript compilation followed by Vite production build
- `npm run preview` - Preview production build

**Component Architecture:**
- Single `MyElement` web component using Lit's decorators (`@customElement`, `@property`)
- Component styles defined using Lit's `css` tagged template literal with `:host` selector
- TypeScript interface declarations in global scope for custom element registration
- Reactive properties with automatic re-rendering on state changes

**Project Structure:**
- Entry point: `index.html` loads `src/my-element.ts` as ES module
- Single component architecture with potential for expansion
- Static assets in `src/assets/` and `public/` directories

IMPORTANT Dont test implentation by running dev server