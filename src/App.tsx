import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // ← SINGLE IMPORT
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PilotServicePage from "./pages/PilotService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
  <TooltipProvider>
  <Toaster />
  <Sonner />
  <HashRouter>
  <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/pilot-service" element={<PilotServicePage />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
  </HashRouter>
  </TooltipProvider>
  </QueryClientProvider>
);

export default App;
