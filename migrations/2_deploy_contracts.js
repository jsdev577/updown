var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var UpDown = artifacts.require("./UpDown.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(UpDown);
};
