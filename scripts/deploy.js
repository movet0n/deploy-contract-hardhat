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
  const setValue = 12345;
  // await contract.setUint256(setValue, { gasLimit: 75000, gasPrice: 5 });
  await contract.setUint256(setValue);

  // Get an uint256 value and print it out
  const getValue = await contract.getUint256();
  console.log(`${getValue}`);

  // const waitUntil = (condition) => {
  //   return new Promise((resolve) => {
  //     let interval = setInterval(() => {
  //       if (!condition()) {
  //         return
  //       }

  //       clearInterval(interval)
  //       resolve()
  //     }, 100)
  //   })
  // }

  // await waitUntil(() => getValue == setValue);
  // console.log(`${getValue}`);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
