/* eslint-disable no-undef, @typescript-eslint/no-unused-vars-experimental, @typescript-eslint/no-unused-vars */

module.exports = {
  client: "mysql",
  connection: {
    database: process.env.CONF_DB_DATABASE || "ff14_party_helper",
    host: process.env.CONF_DB_HOST,
    port: process.env.CONF_DB_PORT || 3306,
    charset: "utf8",
    user: process.env.CONF_DB_USERNAME || "root",
    password: process.env.CONF_DB_PASSWORD || "",
  },
};
