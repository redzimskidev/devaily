import type { Config } from 'tailwindcss';
import { join } from 'path';

// Resolve paths relative to the workspace root
const workspaceRoot = join(__dirname, '../../');

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Scan app files
    join(workspaceRoot, 'libs/shared/ui/src/lib/**/*.{js,ts,jsx,tsx,mdx}'), // Scan shared UI library
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')], // Add animate plugin for Shadcn
};

export default config;
