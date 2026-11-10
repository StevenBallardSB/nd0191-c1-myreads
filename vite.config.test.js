import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

const srcJs = /\/src\/.*\.jsx?$/
const parserOpts = { plugins: ['jsx'] }

// Vite's built-in transform rejects JSX in .js files, so Babel compiles it first
const compiler = reactCompilerPreset()
compiler.rolldown.filter.id = srcJs

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { ...babel({ presets: [compiler], parserOpts }), name: 'react-compiler-js' },
    {
      ...babel({
        include: srcJs,
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
        parserOpts,
      }),
      name: 'jsx-in-js',
    },
    react(),
  ],
  optimizeDeps: {
    rolldownOptions: { moduleTypes: { '.js': 'jsx' } },
  },
})

