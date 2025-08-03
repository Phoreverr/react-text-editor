// filepath: rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';


export default {
  input: 'src/index.tsx', // Entry point of your application
  output: [
    {
      file: 'dist/index.js', // Output file for CommonJS format
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js', // Output file for ES Module format
      format: 'es',
    },
  ],
  plugins: [
    typescript(), // Use the typescript plugin
    postcss({
      modules: true, // Enable CSS modules
    }),
  ],
  external: ['react', 'react-dom'], // List of dependencies that shouldn't be included in the bundle
};