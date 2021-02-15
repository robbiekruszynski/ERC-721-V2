// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "DevRel token","DEVREL", "https://my-json-server.typicode.com/abcoathup/samplenft/tokens/");
};