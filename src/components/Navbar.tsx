import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Code2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/80 backdrop-blur-md py-3 border-zinc-200" : "bg-transparent py-6 border-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-zinc-900 text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Code2 className="h-6 w-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter">CCS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors hover:text-zinc-500",
                location.pathname === item.path ? "text-zinc-900" : "text-zinc-400"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="h-0.5 bg-zinc-900 mt-0.5"
                />
              )}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6">
            <Link to="/contact">Hire Us</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-4 md:hidden flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-bold py-2",
                location.pathname === item.path ? "text-zinc-900" : "text-zinc-400"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="w-full rounded-xl">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Hire Us</Link>
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
