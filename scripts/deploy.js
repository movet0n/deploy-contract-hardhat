const { ethers } = require('hardhat');


async function main() {

  const GetterSetter = await ethers.getContractFactory("GetterSetter");
  const contract = await GetterSetter.deploy();
  await contract.deployed();
  console.log(`Contract address: ${contract.address}`);

  const deployer = await ethers.getSigner();
  console.log(`Deployer address: ${deployer.address}`);

  const bytes32Val = "0x0000000000000000000000000000000000000000000000000000000000013579";
  const setBytes32Tx = await contract.setBytes32(bytes32Val);
  console.log("GetterSetter setBytes32 set to:", bytes32Val);
  console.log("GetterSetter setBytes32 transaction hash is:", await setBytes32Tx.hash);
  await setBytes32Tx.wait();

  const getBytes32Tx = await contract.getBytes32();
  console.log(`GetterSetter setBytes32 get value: ${getBytes32Tx}`);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
