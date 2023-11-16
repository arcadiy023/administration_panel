import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { Dashboard } from "./dashboard";

import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
     <CssBaseline />
      
    <Dashboard />
  </StrictMode>
);
