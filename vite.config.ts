import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load .env files (e.g., .env, .env.production)
  const env = loadEnv(mode, process.cwd(), '');

  // Use DEPLOY_ENV=GH_PAGES for GitHub Pages builds (set in GitHub Actions)
  // Otherwise, default to root for Vercel and local dev.
  const isGhPages = process.env.DEPLOY_ENV === 'GH_PAGES';
  const base = isGhPages ? '/tarun_d/' : '/';

  return {
    base,

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    // Do not expose secrets here. Use import.meta.env.VITE_* for client vars.
    define: {
      // left empty intentionally to avoid accidentally exposing secrets
      // If you need a build-time constant, add it here explicitly.
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    build: {
      // Optional: add build options if needed
    },
  };
});
