/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var scss = require('node-sass');

module.exports = function(content, file, conf){
  var css = scss.renderSync({
    file: file,
    data: content,
    success: conf.success,
    error: conf.error,
    includePaths: conf.includePaths,
    outputStyle: conf.outputStyle,
    sourceComments: conf.sourceComments
  });
  return css;
};
