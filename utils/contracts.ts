import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingContractABI } from "./stakingContractABI";

const nftContractAddress = "0x885d7B9F63b0B7eb080275297dabbB7CD838b498";
const rewardTokenContractAddress = "0xeA23df7E5C8b870C978f9b203005eBC5Ab04738E";
const stakingContractAddress = "0x939e95356e2D241995B31282b954A3B882805e17";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress,

});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingContractABI,

});