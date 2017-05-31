'use strict';

import path from 'path';
import chalk from 'chalk';
import Sequelize from 'sequelize';

const memeDB = 'meme-magic';

console.log(chalk.yellow('Hey Rick!'));

const _db = new Sequelize(memeDB, 'postgres', null, {host: 'localhost', port: 5433, logging: false, dialect: 'postgres', native: true});

export default _db;
