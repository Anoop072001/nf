import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/KWo03EtX54m_F8Hfarz6xYA3Jv-G9UGi",
      chainId: 80001,
      accounts: ["999b52c67291e1dece82f1c4b51a7f2b9f4c678d52497f318edd9ef5c2513326"]
    }
  },
  etherscan: {
    apiKey: "JFZ3TQ9TASVPJX47ZBN2DM4T7DQZF7DQ6G"
  }
};

export default config;
