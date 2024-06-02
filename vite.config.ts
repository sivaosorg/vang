/**
 * Configuration file for Vite
 *
 * This file defines various configuration options for Vite, a build tool for modern web development.
 * It utilizes plugins such as '@nitedani/vite-plugin-angular/plugin' for Angular support and 'vite-tsconfig-paths'
 * for resolving TypeScript paths. Additionally, it sets up build and server options including output directory,
 * sourcemap generation, and server port. Rollup options are configured to handle vendor chunking for better
 * optimization. File watching is enabled with polling for Angular files. Path aliases are defined for convenience.
 *
 * @see https://vitejs.dev/config/
 */
import { defineConfig } from 'vite';
import { angular } from '@nitedani/vite-plugin-angular/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const production_mode = 'production';

  return {
    plugins: [angular(), tsconfigPaths()],
    define: {
      'process.env': {}, // Environment variables can be defined here if needed
    },
    build: {
      outDir: 'dist', // Output directory for built files
      sourcemap: mode === production_mode ? true : false, // Generate sourcemaps based on build mode
      rollupOptions: {
        // Ensure Rollup handles any Angular specifics correctly
        output: {
          manualChunks: (id) => {
            // Group vendor dependencies into separate chunk
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
      // If 0 disables the asset inlining, adjust as needed
      // Limit for inlining assets (4096 ~ 4kb by default)
      assetsInlineLimit: 0,
      cssCodeSplit: true, // Split CSS into separate files
      chunkSizeWarningLimit: 500, // Warn if chunk size exceeds 500kb
    },
    server: {
      open: true, // Automatically open the browser on server start
      watch: {
        // Watch for changes in Angular files using polling
        usePolling: true,
      },
    },
    resolve: {
      alias: {
        '@': '/src', // Define path alias for project structure
      },
    },
  };
});
