import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import CreateTrip from "./create-trip";
import Header from "./components/custom/Header";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Viewtrip from "./view-trip/[tripId]";
import Footer from "./components/custom/Footer";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster
        position="bottom-left" // Position of the toaster
        theme="dark" // Use a dark theme (can also be 'light' or 'system')
        toastOptions={{
          classNames: {
            error: "bg-red-600 text-white shadow-lg",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/view-trip/:tripId" element={<Viewtrip />} />
      </Routes>
      <Footer />
    </GoogleOAuthProvider>
  </BrowserRouter>
);
