# Basic Sample Hardhat Project

### Prerequisites: 
 - nvm alias default 16.14.0 should be utilized

### Implementation and output:
Run the project by navigating to the root folder and running the `./deploy_and_print` bash file by simply writing into the terminal.

This project demonstrates a basic Hardhat use case. It comes with:
 - a sample contract;
 - the main function that compiles and deploys that contract.

By running that bash file, the script prints out the:
 - contract address;
 - deployer address;
 - value that has been set via the contract function.

Additionally, that scrip creates a .json file that is titled `contract_address_[timestamp]`, which contains the mentioned outputs.

### To be improved:

1. Security issues related to the private key being set up publicly in configs. In the real-world project all the sensitive data should be substituted by the environment variables, while real private data must be stored outside of the public access (locally for local development or using such tools as Vault, etc.).
2. Few clauses here:
 - Current implementation works as expected in the Hardhat network, however, in the Kovan Network, the `set value` may be returned as a 0. Periodically I managed to receive the set value in the output. 
 - In most cases, it returns 0 though, even considering that the corresponding function is present in the Kovan etherscan, e.g. https://kovan.etherscan.io/tx/0x19892f522a5b846f68def46a35e93675597cb44707d566062b00cfc63222de15. 
 - Also, I tried to fix it with the `waitUntil` implementation (commented in the `deploy.js`), which waits until the `getValue` equals the `setValue`. Again, it works well with the HardHat network, still not with the Kovan network. 
3. Current implementation is straightforward. However, to be able to support it and increase its functionality, it may be useful to utilize more viable solutions like pass .js variables to the bash script by:
 - saving it to the stdout or an external file and then reading it by the script; 
 - decompose the `main()` function into several, each with its responsibility (deploy, set value, get value, etc.).
