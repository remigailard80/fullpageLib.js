import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssPrefixer from 'postcss-prefixer';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];

process.env.BABEL_ENV = 'production';

function setUpRollup({ input, output }) {
    return {
      input,
      output,
      watch: {
        include: '*',
        exclude: '.yarn/**',
      },
      plugins: [
        peerDepsExternal(), // peerDEpendency를 번들링 결과물에서 제외
        json(),
        resolve({ extensions }), // node_modules에서 모듈 불러올 수 있게 해줌, ts/tsx 불러올 수  있게 해줌.
        commonjs({
          include: /.yarn/,
        }),
        typescript({ useTsconfigDeclarationDir: true }), // 만든 타입을 자동으로 build된 결과물에 넣어줌.
        postcss({
          extract: true,
          modules: true,
          sourceMap: true,
          use: ['sass'],
          plugins: [
            postcssPrefixer({
              prefix: `${pkg.name}__`,
            }),
          ],
        }),
      ],
      external: ['react', 'react-dom'],
    };
  };

  export default [
    setUpRollup({
      input: 'index.ts',
      output: {
        file: 'dist/cjs.js',
        sourcemap: true,
        format: 'cjs',
      },
    }),
    setUpRollup({
      input: 'index.ts',
      output: {
        file: 'dist/esm.js',
        sourcemap: true,
        format: 'esm',
      },
    }),
  ];