# Copilot Instructions for fitcenter-front

## Project Overview
- This is a React single-page application bootstrapped with Vite.
- The main entry point is `src/main.jsx`, which renders the root `App` component from `src/App.jsx`.
- The project uses functional components and React hooks for state management.
- UI components are organized under `src/components/`, with further subfolders for feature grouping (e.g., `Landing/`, `Layaut/`).
- Routing is handled in `src/routing/rutas.jsx`.
- Mock data and utility functions are in `src/utils/`.

## Key Patterns & Conventions
- **Component Structure:** Each feature or page has its own folder under `src/components/` or `src/pages/`.
- **Styling:** Uses CSS files (e.g., `App.css`, `index.css`).
- **State:** Local state is managed with React's `useState` and related hooks. No global state management library is present.
- **UI Libraries:** Some components (e.g., `AppointmentSelector.jsx`) use Chakra UI primitives (`Box`, `Heading`, `VStack`, `SimpleGrid`, `Select`, `Button`). Ensure Chakra UI is imported where used.
- **Date Handling:** Uses `react-datepicker` for date selection in some components.
- **Mock Data:** Utilities and mock data are in `src/utils/mocks.js` and `src/utils/system.js`.

## Developer Workflows
- **Install dependencies:**
  ```sh
  npm install
  ```
- **Start development server:**
  ```sh
  npm run dev
  ```
- **Build for production:**
  ```sh
  npm run build
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```
- **Linting:**
  ```sh
  npm run lint
  ```

## Integration Points
- **Vite:** Configuration in `vite.config.js`.
- **ESLint:** Rules in `eslint.config.js`.
- **Static assets:** Place in `public/` or `src/assets/`.

## Examples
- To add a new page, create a component in `src/pages/` and add a route in `src/routing/rutas.jsx`.
- To add a new UI section, create a folder in `src/components/` and group related components.

## Special Notes
- Follow the folder structure for scalability and maintainability.
- Use Chakra UI components for UI consistency where possible.
- Use mock data utilities for development/testing before backend integration.

---
_If you are unsure about a pattern, check similar files in the relevant folder for examples._
