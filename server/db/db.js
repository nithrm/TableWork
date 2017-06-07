'use strict';

import path from 'path';
import chalk from 'chalk';
import Sequelize from 'sequelize';

const memeDB = process.env.MAIN_DB_URL;

console.log(chalk.red('Hey Rick!'));

const _db = new Sequelize(memeDB);

export default _db;
