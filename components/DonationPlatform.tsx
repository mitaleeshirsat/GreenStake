'use client';

import { useActiveAccount } from "thirdweb/react";
import { useState } from "react";
import { EnergyOptionCard } from "./EnergyOptionCard";
import { DonationForm } from "./DonationForm";

// Energy project types
const energyProjects = [
  {
    id: "solar",
    title: "Solar Panels",
    description: "Fund solar panel installations for clean electricity generation.",
    minDonation: 0.01,
    image: "/images/solar-panel.jpg"
  },
  {
    id: "wind",
    title: "Wind Turbines",
    description: "Support wind turbine projects for renewable power production.",
    minDonation: 0.015,
    image: "/images/wind-turbine.jpg"
  },
  {
    id: "trees",
    title: "Tree Planting",
    description: "Plant trees to absorb carbon dioxide and restore ecosystems.",
    minDonation: 0.005,
    image: "/images/tree-planting.jpg"
  }
];

export const DonationPlatform = () => {
  const account = useActiveAccount();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  // If no wallet is connected, prompt user to connect
  if (!account) {
    return (
      <div style={{
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#151515",
        borderRadius: "8px",
        width: "100%",
        textAlign: "center"
      }}>
        <p>Please connect your wallet to make a donation.</p>
      </div>
    );
  }

  // If project is selected, show donation form
  if (selectedProject) {
    const project = energyProjects.find(p => p.id === selectedProject);
    
    return (
      <DonationForm 
        project={project!} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  // Otherwise show project selection
  return (
    <div style={{
      marginTop: "20px",
      padding: "20px",
      backgroundColor: "#151515",
      borderRadius: "8px",
      width: "100%"
    }}>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Select a Renewable Energy Project</h2>
      
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      }}>
        {energyProjects.map(project => (
          <EnergyOptionCard 
            key={project.id}
            project={project}
            onSelect={() => setSelectedProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
};