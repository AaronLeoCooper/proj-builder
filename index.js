#!/usr/bin/env node

var co = require('co');
var prompt = require('co-prompt');
var chalk = require('chalk');
var program = require('commander');

program
  .version('0.0.1')
  .arguments('<options>')
  .option('-s, --style', 'Specify a CSS preprocessor (stylus, sass)')
  .action(function (arg) {
    // co(function * () {
    //   var style = yield prompt('Choose a preprocessor');
    // });
    chalk.red('Which CSS preprocessor will you be using?');
    program.choose(['stylus', 'sass'], function (i) {
      console.log('you chose %d "%s"', i, list[i]);
    });
  })
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
