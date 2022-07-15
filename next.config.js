import withLess from 'next-with-less';
import { resolve } from 'path';

const pathToLessFileWithVariables = resolve('styles/variables.less');

export default withLess({
  lessLoaderOptions: {
    additionalData: (content) =>
      `${content}\n\n@import '${pathToLessFileWithVariables}';`,
  },
  reactStrictMode: true,
  swcMinify: true,
});
