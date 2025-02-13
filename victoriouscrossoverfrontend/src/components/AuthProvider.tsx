import ReactDOM from "react-dom/client";
import App from "../App"; // Assuming App is in the same directory or adjust the path accordingly
import { AuthProvider } from "./AppContext";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
