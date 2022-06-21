import { merge } from 'webpack-merge';
import common from './webpack.common';
import { Configuration, Compiler } from 'webpack';

const config: Configuration = merge(common, {
  mode: 'production',
  plugins: [
    {
      apply: (compiler: Compiler) => {
        compiler.hooks.done.tap('done', () => {
          console.log('Compile is done');
          setTimeout(() => {
            process.exit(0);
          });
        });
      },
    },
  ],
});

export default config;
