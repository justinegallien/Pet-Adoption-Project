New React Project Setup: Create a new React project

npm create vite@latest Select React.

Select JavaScript.

Install dependencies

cd your-project-name npm install Verify your project works

npm run dev Ensure your React app loads successfully in the browser.

Install Testing Dpendencies:

npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom Configure Vitest

Update your existing vite.config.js:

import { defineConfig } from 'vite'; import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()], test: { environment: 'jsdom', globals: true } }); Update your scripts

In package.json add a test script:

"scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview", "test": "vitest" }

Write a Simple Test: Create a test file.

Place it beside your component in src (e.g., src/App.test.jsx).

Write The App Test:

import { render, screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import App from './App';

test('renders hello message', () => { render(); expect(screen.getByText(/Add Animal/i)).toBeInTheDocument(); });

NPM Run Test – Run Your Tests npm test Confirm that Vitest successfully runs your test.

Passing tests display clearly in the terminal.

Live Site URL: jgallienpetadoption.netlify.app
