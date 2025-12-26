// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../client/App";
// import "./global.css";
// src/main.tsx
import "../client/global.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
