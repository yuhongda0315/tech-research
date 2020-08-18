import babel from 'rollup-plugin-babel';

export default {
  input: 'main.js',
  output: {
    file: 'test.js',
    format: 'umd',
    name: 'test'
  },
  plugins: [babel() ]
};