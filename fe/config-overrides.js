const { configPaths } = require("react-app-rewire-alias");
const { aliasDangerous } = require("react-app-rewire-alias/lib/aliasDangerous");

module.exports = function override(config, env) {
  return aliasDangerous(configPaths("./tsconfig.paths.json"))(config);
};
