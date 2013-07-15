/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var scss = require('node-sass');

module.exports = function(content, file, conf){
  var fn = scss.renderSync({
    data: content
    [ conf ]
  });
  return fn;
};
