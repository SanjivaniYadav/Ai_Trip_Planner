import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import CreateTrip from "./create-trip";
import Header from "./components/custom/Header";
import { Toaster } from "sonner";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
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
    </Routes>
  </BrowserRouter>
);
