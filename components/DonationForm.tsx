'use client';

import { useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import { EnergyType, generateNFTMetadata } from "../utils/donationUtils";

interface Project {
  id: string;
  title: string;
  description: string;
  minDonation: number;
  image: string;
}

interface DonationFormProps {
  project: Project;
  onBack: () => void;
}

export const DonationForm = ({ project, onBack }: DonationFormProps) => {
  const account = useActiveAccount();
  const [amount, setAmount] = useState<string>(project.minDonation.toString());
  const [donationComplete, setDonationComplete] = useState(false);
  const [donationStep, setDonationStep] = useState<'initial' | 'donating' | 'minting' | 'complete'>('initial');
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  
  // Convert project.id to EnergyType
  const energyType = project.id as EnergyType;
  
  // Image URLs for placeholders
  const getImageURL = (id: string) => {
    switch (id) {
      case "solar":
        return "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2187&auto=format&fit=crop";
      case "wind":
        return "https://images.unsplash.com/photo-1497637362234-7bbf4dcc82c4?q=80&w=2080&auto=format&fit=crop";
      case "trees":
        return "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop";
      default:
        return "https://via.placeholder.com/150x150";
    }
  };
  
  // Donation steps UI
  const renderDonationSteps = () => {
    return (
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "300px",
        margin: "0 auto 20px auto"
      }}>
        <div style={{
          textAlign: "center",
          opacity: donationStep === 'initial' ? 0.5 : 1
        }}>
          <div style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: donationStep !== 'initial' ? "#4CAF50" : "#555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 5px auto",
            color: "white"
          }}>
            1
          </div>
          <span style={{ fontSize: "12px" }}>Donate</span>
        </div>
        
        <div style={{
          textAlign: "center",
          opacity: donationStep === 'initial' || donationStep === 'donating' ? 0.5 : 1
        }}>
          <div style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: donationStep === 'minting' || donationStep === 'complete' ? "#4CAF50" : "#555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 5px auto",
            color: "white"
          }}>
            2
          </div>
          <span style={{ fontSize: "12px" }}>Mint NFT</span>
        </div>
        
        <div style={{
          textAlign: "center",
          opacity: donationStep !== 'complete' ? 0.5 : 1
        }}>
          <div style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: donationStep === 'complete' ? "#4CAF50" : "#555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 5px auto",
            color: "white"
          }}>
            3
          </div>
          <span style={{ fontSize: "12px" }}>Complete</span>
        </div>
      </div>
    );
  };
  
  if (donationComplete) {
    return (
      <div style={{
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#151515",
        borderRadius: "8px",
        width: "100%",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#4CAF50", marginBottom: "15px" }}>Thank You For Your Donation!</h2>
        <p>Your {project.title} NFT has been minted and added to your collection.</p>
        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={onBack}
            style={{
              backgroundColor: "#333",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              marginRight: "10px",
              cursor: "pointer"
            }}
          >
            Donate to Another Project
          </button>
          <a 
            href="/staking"
            style={{
              backgroundColor: "#444",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              display: "inline-block",
              marginTop: "10px"
            }}
          >
            Go to Staking
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div style={{
      marginTop: "20px",
      padding: "20px",
      backgroundColor: "#151515",
      borderRadius: "8px",
      width: "100%"
    }}>
      <button 
        onClick={onBack}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#aaa",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        ← Back to Projects
      </button>
      
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Donate to {project.title}</h2>
      
      {renderDonationSteps()}
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{ 
          width: "150px",
          height: "150px",
          backgroundImage: `url(${getImageURL(project.id)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          marginBottom: "20px"
        }}>
        </div>
        
        <p style={{ 
          textAlign: "center", 
          marginBottom: "20px",
          maxWidth: "400px" 
        }}>
          {project.description}
        </p>
        
        <div style={{ width: "100%", maxWidth: "300px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Donation Amount (ETH)
          </label>
          <input 
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min={project.minDonation}
            step="0.001"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#333",
              border: "1px solid #444",
              borderRadius: "5px",
              color: "white",
              marginBottom: "20px"
            }}
          />
          
          {donationStep === 'initial' ? (
            // Step 1: Make donation
            <button
              onClick={() => {
                // Instead of using claimTo, just simulate a successful donation
                setDonationStep('minting');
              }}
              style={{
                width: "100%",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "12px 0",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Donate {amount} ETH
            </button>
          ) : donationStep === 'minting' ? (
            // Step 2: Mint NFT
            <button
              onClick={() => {
                // Simulate a successful NFT mint
                setDonationStep('complete');
                setDonationComplete(true);
                console.log(`Donation of ${amount} ETH for ${project.title}`);
                console.log(generateNFTMetadata(energyType, parseFloat(amount)));
              }}
              style={{
                width: "100%",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "12px 0",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Mint {project.title} NFT
            </button>
          ) : (
            <div style={{ textAlign: "center", color: "#4CAF50" }}>
              Processing...
            </div>
          )}
          
          <p style={{ 
            fontSize: "12px", 
            color: "#aaa", 
            marginTop: "10px",
            textAlign: "center" 
          }}>
            You will receive a {project.title} NFT as proof of your donation that can be staked for rewards.
          </p>
        </div>
      </div>
    </div>
  );
};