const glob = require('glob');

// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const html = glob.sync('./res/****/ok.json').map(function (item) {
  console.log(item);
});
