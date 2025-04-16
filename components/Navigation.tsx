'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      padding: "15px 0",
      borderBottom: "1px solid #333"
    }}>
      <div style={{
        display: "flex",
        gap: "30px"
      }}>
        <Link 
          href="/"
          style={{
            color: pathname === "/" ? "white" : "#aaa",
            textDecoration: "none",
            fontWeight: pathname === "/" ? "bold" : "normal"
          }}
        >
          Home
        </Link>
        <Link 
          href="/donate"
          style={{
            color: pathname === "/donate" ? "white" : "#aaa",
            textDecoration: "none",
            fontWeight: pathname === "/donate" ? "bold" : "normal"
          }}
        >
          Donate
        </Link>
        <Link 
          href="/staking"
          style={{
            color: pathname === "/staking" ? "white" : "#aaa",
            textDecoration: "none",
            fontWeight: pathname === "/staking" ? "bold" : "normal"
          }}
        >
          Staking
        </Link>
      </div>
    </nav>
  );
};