// import { defineChain } from "thirdweb";
// import { baseSepolia } from "thirdweb/chains";
// export const chain = defineChain( baseSepolia );

import { defineChain } from "thirdweb";

export const chain = defineChain({
  id: 84532,
  name: "Base Sepolia",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpc: "https://rpc.ankr.com/base_sepolia", // Make sure this is a valid RPC
  blockExplorers: [
    {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
    },
  ], // ✅ Now it's an array
  testnet: true,
});

