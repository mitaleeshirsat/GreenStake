import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      maxWidth: "800px"
    }}> 
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>GreenStake</h1>
      <h2 style={{ 
        fontSize: "1.2rem", 
        color: "#aaa", 
        fontWeight: "normal",
        textAlign: "center", 
        marginBottom: "30px" 
      }}>
        Empowering eco-conscious individuals using decentralized fintech
      </h2>
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#151515",
        borderRadius: "10px",
        padding: "30px",
        marginBottom: "30px",
        width: "100%"
      }}>
        <p style={{ 
          textAlign: "center", 
          marginBottom: "20px", 
          lineHeight: "1.6",
          maxWidth: "600px" 
        }}>
          GreenStake enables you to directly contribute to renewable energy projects 
          through blockchain technology. Your donations are converted into NFTs that 
          can be staked to earn rewards, creating a sustainable investment in our planet's future.
        </p>
        
        <ConnectEmbed
          client={client}
          chain={chain}
        />
        
        <div style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px"
        }}>
          <Link 
            href="/donate"
            style={{
              padding: "12px 24px",
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Donate Now
          </Link>
          
          <Link 
            href="/staking"
            style={{
              padding: "12px 24px",
              backgroundColor: "#333",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Stake NFTs
          </Link>
        </div>
      </div>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        width: "100%"
      }}>
        <div style={{
          backgroundColor: "#151515",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center"
        }}>
          <h3 style={{ marginBottom: "10px" }}>Donate</h3>
          <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
            Contribute to solar panels, wind turbines, or tree planting initiatives.
          </p>
        </div>
        
        <div style={{
          backgroundColor: "#151515",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center"
        }}>
          <h3 style={{ marginBottom: "10px" }}>Receive NFTs</h3>
          <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
            Get unique NFTs as proof of your contribution to renewable energy.
          </p>
        </div>
        
        <div style={{
          backgroundColor: "#151515",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center"
        }}>
          <h3 style={{ marginBottom: "10px" }}>Stake & Earn</h3>
          <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
            Stake your NFTs to earn tokens, creating a sustainable rewards system.
          </p>
        </div>
      </div>
    </div>
  );
}