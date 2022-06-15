Asked 3 years, 1 month ago
Modified 3 years, 1 month ago
Viewed 6k times

Report this ad

3


I'm following this tutorial Using PostgreSQL and Sequelize to persist our data on medium, and right now I'm stuck at the db:migrate. it's returning this error

Sequelize CLI [Node: 12.1.0, CLI: 5.4.0, ORM: 5.8.2]

Loaded configuration file "config.json".
Using environment "development".

ERROR: Error parsing url: undefined
as you can see I'm using NodeJS version 12.1.0 and Sequelize CLI version 5.4.0 and Sequelize version 5.8.2 and all of them were the latest version.

and before running sequelize db:migrate, I'm running this command first SET DATABASE_URL=postgresql://[user[:password]@][netlocation][:port][/dbname] and it does not returns any error.

but it's returning error after I ran db:migrate

I already tried to find the problem, but I can't found the answer yet. Here is my ./Models/Index.js file.

'use strict';

require('dotenv').config();

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize from 'sequelize';
const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});