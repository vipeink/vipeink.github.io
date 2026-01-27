import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/pages/LandingPage";
import ResearchPage from "./components/pages/ResearchPage";
import DocumentationPage from "./components/pages/DocumentationPage";
import SystemsPage from "./components/pages/SystemsPage";
import FAQPage from "./components/pages/FAQPage";
import { ModalProvider } from "./context/ModalContextProvider";
import ExportProofModal from "./components/modals/ExportProofModal";
import VerifyReservesModal from "./components/modals/VerifyReservesModal";
import CommunityPage from "./components/pages/CommunityPage";
import { useModal } from './context/ModalContext';

import "./styles/globals.css";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("landing");
  const { modalOpen } = useModal();

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage />;
      case "architecture":
        return <ResearchPage />;
      case "documentation":
        return <DocumentationPage />;
      case "systems":
        return <SystemsPage />;
      case "faq":
        return <FAQPage />;
      case "community":
        return <CommunityPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-vipeink-bg">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>{renderPage()}</main>

      {modalOpen === "export" && <ExportProofModal />}
      {modalOpen === "configure" && <VerifyReservesModal />}
    </div>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}
