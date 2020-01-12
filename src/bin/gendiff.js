#!/usr/bin/env node

import commander from 'commander';
import genDiff from '..';

const program = new commander.Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    if (firstConfig === 'undefined' || secondConfig === 'undefined') {
      console.error('no given arguments');
      process.exit(1);
    }
    console.log(genDiff(firstConfig, secondConfig));
  })
  .parse(process.argv);
