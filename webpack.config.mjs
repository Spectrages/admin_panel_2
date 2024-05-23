// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import nodeExternals from 'webpack-node-externals';

// export default {
//   mode: 'development',
//   target: 'node',
//   externals: [nodeExternals()],
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.bundle.js',
//     library: {
//       type: 'module'
//     },
//     chunkFormat: 'module',
//     environment: {
//       module: true
//     }
//   },
//   experiments: {
//     outputModule: true
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js']
//   }
// };

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
};