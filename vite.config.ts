import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// REF: https://vitejs.dev/config/server-options.html#server-proxy
export default defineConfig(() => {
  return {
    server: {
      proxy: {
        "/mock/foo": {
          target: "https://jsonplaceholder.typicode.com/todos/3",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/mock\/foo/, ""),
        },
        "/mock/bar": {
          target: "https://jsonplaceholder.typicode.com/todos/2",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/mock\/bar/, ""),
        },
        "/mock": {
          target: "https://jsonplaceholder.typicode.com/todos/1",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/mock/, ""),
        },
      },
    },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
