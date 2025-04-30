import './index.css';
import React from "react";
import { createRoot } from "react-dom/client"; // <-- මෙයයි වෙනස
import { App } from "./App";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container); // createRoot() react 18 way
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

