import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Transpila archivos JavaScript usando Buble sin transformar los módulos
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'buble-loader',
        options: {
          objectAssign: 'Object.assign',
          transforms: {
            modules: false // Deshabilita la transformación de módulos
          }
        },
      },
    ],
  },
  mode: 'development',
};