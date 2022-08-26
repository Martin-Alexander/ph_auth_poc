import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PhotonClient, PhotonProvider } from "@photonhealth/react";

const client = new PhotonClient({
  domain: "auth.neutron.health",
  clientId: "********************************",
  redirectURI: "http://localhost:3000",
  organization: "org_cOC5eDUznHNkGkB3",
}).setDevelopment();

window.client = client

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PhotonProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PhotonProvider>
);
