// Types of renewable energy projects
export enum EnergyType {
    SOLAR = "solar",
    WIND = "wind",
    TREES = "trees"
  }
  
  // Function to generate metadata for an NFT based on the type of energy
  export const generateNFTMetadata = (energyType: EnergyType, donationAmount: number) => {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    const baseMetadata = {
      name: "",
      description: "",
      image: "",
      attributes: [
        {
          trait_type: "Donation Date",
          value: dateStr
        },
        {
          trait_type: "Donation Amount",
          value: donationAmount.toString() + " ETH"
        }
      ]
    };
    
    switch (energyType) {
      case EnergyType.SOLAR:
        return {
          ...baseMetadata,
          name: "Solar Panel Supporter",
          description: "This NFT represents a donation to solar panel projects, contributing to clean electricity generation.",
          image: "ipfs://QmSolarPanelImageCID", // Replace with actual IPFS CID
          attributes: [
            ...baseMetadata.attributes,
            {
              trait_type: "Energy Type",
              value: "Solar"
            }
          ]
        };
        
      case EnergyType.WIND:
        return {
          ...baseMetadata,
          name: "Wind Turbine Supporter",
          description: "This NFT represents a donation to wind turbine projects, contributing to renewable power production.",
          image: "ipfs://QmWindTurbineImageCID", // Replace with actual IPFS CID
          attributes: [
            ...baseMetadata.attributes,
            {
              trait_type: "Energy Type",
              value: "Wind"
            }
          ]
        };
        
      case EnergyType.TREES:
        return {
          ...baseMetadata,
          name: "Tree Planting Supporter",
          description: "This NFT represents a donation to tree planting initiatives, helping to absorb carbon dioxide and restore ecosystems.",
          image: "ipfs://QmTreePlantingImageCID", // Replace with actual IPFS CID
          attributes: [
            ...baseMetadata.attributes,
            {
              trait_type: "Energy Type",
              value: "Trees"
            }
          ]
        };
        
      default:
        return baseMetadata;
    }
  };