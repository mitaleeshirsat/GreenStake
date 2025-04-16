// src/app/donate/page.tsx
import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "../client";
import { chain } from "../chain";
import { DonationPlatform } from "../../../components/DonationPlatform";

export default function DonatePage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      width: "100%",
      maxWidth: "800px"
    }}>
      <h1>Donate to Renewable Energy</h1>
      <p style={{ marginBottom: "20px", textAlign: "center" }}>
        Your donation helps fund renewable energy projects that combat climate change.
        Each donation mints an NFT that you can stake to earn rewards!
      </p>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <DonationPlatform />
    </div>
  );
}