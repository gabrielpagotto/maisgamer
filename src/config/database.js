const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  define: {
    timestamps: false,
    underscored: true,
  },
  dialectOptions: {
    ssl: {
      required: true,
      rejectUnauthorized: false,
    },
  },
}
