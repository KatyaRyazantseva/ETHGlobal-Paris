import React, { ReactNode } from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="sandbox">
      <Navbar />
      <Box sx={{ position: "relative", overflow: "hidden", m: "auto" }}>
        {children}
      </Box>
      <Footer />
    </main>
  );
};

export default Layout;
