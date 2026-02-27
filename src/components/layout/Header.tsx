import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { TgsPlayer } from "@/components/TgsPlayer";

const primaryNav: { label: string; path: string; comingSoon?: boolean }[] = [
  { label: "About", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Instructors", path: "/instructors" },
  { label: "Projects", path: "/projects" },
  { label: "Events", path: "/events" },
  { label: "Blog", path: "/blog" },
];

const moreNav = [
  { label: "Contact Us", path: "/consultations" },
  { label: "Interview Prep", path: "/interview-prep", comingSoon: true },
  { label: "Challenges", path: "/challenges", comingSoon: true },
  { label: "Roadmaps", path: "/roadmaps", comingSoon: true },
];

const allNavItems = [...primaryNav, ...moreNav];

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <div className="h-9 w-9 flex-shrink-0">
            <TgsPlayer src="/animations/orbit-sticker.tgs" className="w-full h-full" />
          </div>
          <span>Cloud<span className="gradient-text">Zen</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted",
                location.pathname === item.path
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={cn(
                "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted text-muted-foreground",
                moreNav.some((item) => location.pathname === item.path) && "text-primary bg-primary/5"
              )}
            >
              More
              <ChevronDown className={cn("h-4 w-4 transition-transform", moreOpen && "rotate-180")} />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-1 w-56 rounded-lg border border-border bg-popover p-1 shadow-lg animate-in fade-in-0 zoom-in-95">
                {moreNav.map((item) =>
                  item.comingSoon ? (
                    <span
                      key={item.path}
                      className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-muted-foreground/50 cursor-not-allowed"
                    >
                      {item.label}
                      <span className="text-[10px] uppercase tracking-wider bg-muted px-1.5 py-0.5 rounded">Soon</span>
                    </span>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMoreOpen(false)}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted",
                        location.pathname === item.path
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="hidden sm:flex gradient-bg text-white border-0" asChild>
            <Link to="/courses">Get Started</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <div className="flex flex-col gap-2 pt-8">
                {allNavItems.map((item) =>
                  item.comingSoon ? (
                    <span
                      key={item.path}
                      className="flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg text-muted-foreground/50 cursor-not-allowed"
                    >
                      {item.label}
                      <span className="text-[10px] uppercase tracking-wider bg-muted px-1.5 py-0.5 rounded">Soon</span>
                    </span>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                        location.pathname === item.path
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <div className="border-t border-border mt-4 pt-4 flex flex-col gap-2">
                  <Button className="gradient-bg text-white border-0" asChild>
                    <Link to="/courses" onClick={() => setMobileOpen(false)}>Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
