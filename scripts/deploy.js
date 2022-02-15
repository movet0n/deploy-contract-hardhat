const { ethers } = require('hardhat');


async function main() {

  // Deploy contract and print out its address
  const GetterSetter = await ethers.getContractFactory("GetterSetter");
  const contract = await GetterSetter.deploy();
  await contract.deployed();
  console.log(`${contract.address}`);


  // Print out the deployer address
  const deployer = await ethers.getSigner();
  console.log(`${deployer.address}`);


  // Set an uint256 value
  await contract.setUint256(12345, { gasLimit: 75000, gasPrice: 5 });


  // Get an uint256 value and print it out
  const uint256 = await contract.getUint256();
  console.log(`${uint256}`);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

