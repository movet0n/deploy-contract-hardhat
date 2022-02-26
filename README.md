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
2. Current implementation is straightforward. However, to be able to support it and increase its functionality, it may be useful to utilize more viable solutions like pass .js variables to the bash script by:
 - saving it to the stdout or an external file and then reading it by the script; 
 - decompose the `main()` function into several, each with its responsibility (deploy, set value, get value, etc.).
