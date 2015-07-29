var postcss = require('postcss');
var fs = require('fs');

module.exports = postcss.plugin('postcss-critical', function (opts) {
  opts = opts || {};
  var dest = opts.dest || 'dest/critical.css';

  return function(css) {
    var fd = fs.openSync(dest, 'w+');
    css.eachRule(function(rule){
      var hasCritical = false;
      var out = rule.selector + ' {\n';
      rule.eachDecl(function(decl){
        if (decl.prop.match(/.*\*$/)) {
          out += '  ' + decl.prop.slice(0, -1) + ': ' + decl.value + ';\n';
          decl.removeSelf();
          hasCritical = true;
        }
      });
      out += '}\n\n';
      if (hasCritical)
        fs.writeSync(fd, out);
    });

    fs.closeSync(fd);
  };
});
