#!/usr/bin/env node

var program = require('commander');
var glob = require('glob');
var pkginfo = require('pkginfo');

pkginfo(module, 'version', 'description');

program.version(module.exports.version)
  .description(module.exports.description)
  .usage('"<pattern>"')
  .option('-r, --root [directory]', 'The directory to consider the root (/).\n    If flag is included, but no directory provided,\n    it will default to current working directory.')
  .parse(process.argv);

var pattern = program.args[0];
var options = {};

if (program.root === true) {
  options.root = process.cwd();
} else if (program.root) {
  options.root = program.root;
}


if (!pattern) {
  console.log('Looks like you forgot to add a glob pattern to test.');
  process.exit(1);
}

var opt = Object.assign({}, options);

glob(pattern, opt, function (er, files) {
  console.log('Pattern: ', pattern);
  console.log('Options: ', options);
  if (er) {
    console.error(er);
    process.exit(1);
  }
  if (files.length === 0) {
    console.log("No files match '" + pattern + "'");
    process.exit(1);
  }
  files.forEach(function (filepath) {
    console.log(filepath);
  });
});
