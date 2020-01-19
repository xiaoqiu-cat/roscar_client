const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    publicPath: './',    // 公共路径
    outputDir: 'dist',
}