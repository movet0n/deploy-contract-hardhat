require("@nomiclabs/hardhat-waffle");


const ALCHEMY_API_KEY = "jXnOHc-nJdp-WopcniWVeJSqid7HlkvP";
const PRIVATE_KEY = "415cff225ca272ab4b4cc9050f41ddacbfe7860eaa92c9254714e0d3d00535b4"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.6",
  networks: {
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
