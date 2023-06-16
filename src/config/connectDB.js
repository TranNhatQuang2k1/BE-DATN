const { Sequelize } = require('sequelize');
// "development": {
//   "username": "93jolmshvxvkzc8yqctw",
//   "password": "pscale_pw_8eQ8m6AhUZSnCofcxGQH3RJsgrQmr8Y2ZrKEqjyG96M",
//   "database": "doantotnghiep",
//   "host": "aws.connect.psdb.cloud",
//   "dialect": "mysql",
//   "timezone": "+07:00",
//   "dialectOptions":{
//     "ssl":{
//       "require":true,
//       "rejectUnauthorized": false
//     }
//   }
// },

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('doantotnghiep', '93jolmshvxvkzc8yqctw', 'pscale_pw_8eQ8m6AhUZSnCofcxGQH3RJsgrQmr8Y2ZrKEqjyG96M', {
  host: 'http://localhost:8087',
  dialect: 'mysql',
  logging: false,
  timezone: "+07:00",
  dialectOptions:{
    "ssl":{
      "require":true,
      "rejectUnauthorized": true
    }
  },
  dialectModule: require('mysql2'),
  sync: { force: false },
  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

let connectDB =async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = connectDB