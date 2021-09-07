import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssPrefixer from 'postcss-prefixer';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];

// babel-preset-react-app를 사용한다면 BABEL_ENV를 필수로 설정해야함.
process.env.BABEL_ENV = 'production';

function setUpRollup({ input, output }) {
    return {
      input,
      // exports: 'named',
      output,
      watch: {
        include: '*',
        exclude: '.yarn/**'
      },
      plugins: [
        peerDepsExternal(), // peerDependency를 번들링 결과물에서 제외
        json(),
        resolve({ extensions }), // node_modules에서 모듈 불러올 수 있게 해줌, ts/tsx 불러올 수  있게 해줌.
        commonjs(),
        babel({ extensions, runtimeHelpers: true }), // Babel을 사용 할 수 있게 해줌
        url(),
        svgr(),
        typescript({
          exclude: [ '**/stories', '**/*.stories'],
          useTsconfigDeclarationDir: true
        }), // 만든 타입을 자동으로 build된 결과물에 넣어줌.
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
      input: 'src/index.ts',
      output: {
        file: pkg.cjs,
        sourcemap: true,
        format: 'cjs',
      },
    }),
    setUpRollup({
      input: 'src/index.ts',
      output: {
        file: pkg.esm,
        sourcemap: true,
        format: 'esm',
      },
    }),
  ];