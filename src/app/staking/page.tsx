import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "../client";
import { chain } from "../chain";
import { Staking } from "../../../components/Staking";

export default function StakingPage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      width: "500px"
    }}> 
      <h1>GreenStake - Staking</h1>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking />
    </div>
  );
}