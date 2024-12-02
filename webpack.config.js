const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 输出路径
  },
  optimization: {
    minimize: true, // 启用压缩
    minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 删除console语句
          },
          output: {
            comments: false, // 删除注释
          },
        },
      })],
  },
  mode: 'production', // 生产模式
};
