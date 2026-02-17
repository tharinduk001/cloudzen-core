import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import { SearchModal } from "./SearchModal";
import { Breadcrumbs } from "./Breadcrumbs";
import { CloudCursor } from "../CloudCursor";

export function Layout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-dot-grid">
      <CloudCursor />
      <Header onSearchOpen={() => setSearchOpen(true)} />
      {!isHome && <Breadcrumbs />}
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatBot />
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
