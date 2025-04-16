'use client';

interface Project {
  id: string;
  title: string;
  description: string;
  minDonation: number;
  image: string;
}

interface EnergyOptionCardProps {
  project: Project;
  onSelect: () => void;
}

export const EnergyOptionCard = ({ project, onSelect }: EnergyOptionCardProps) => {
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
        return "https://via.placeholder.com/220x150";
    }
  };

  return (
    <div style={{
      width: "220px",
      backgroundColor: "#222",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "transform 0.2s",
      cursor: "pointer"
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
    }}
    onClick={onSelect}
    >
      <div style={{
        height: "150px",
        backgroundImage: `url(${getImageURL(project.id)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      </div>
      
      <div style={{ padding: "15px" }}>
        <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
        <p style={{ 
          fontSize: "14px", 
          color: "#ccc",
          height: "60px", 
          overflow: "hidden" 
        }}>
          {project.description}
        </p>
        <p style={{ 
          marginTop: "10px",
          fontSize: "12px",
          color: "#aaa" 
        }}>
          Min. Donation: {project.minDonation} ETH
        </p>
        <button style={{
          width: "100%",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          padding: "8px 0",
          borderRadius: "5px",
          marginTop: "10px",
          cursor: "pointer"
        }}>
          Select Project
        </button>
      </div>
    </div>
  );
};