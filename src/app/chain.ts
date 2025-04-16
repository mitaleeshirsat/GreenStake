import { defineChain } from "thirdweb";

export const chain = defineChain({
  id: 84532,
  name: "Base Sepolia",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  // Change this line to use a different RPC endpoint
  rpc: "https://sepolia.base.org", // Base Sepolia public RPC
  blockExplorers: [
    {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
    },
  ],
  testnet: true,
});