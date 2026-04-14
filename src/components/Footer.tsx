import { Link } from "react-router-dom";
import { Code2, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-zinc-900 text-white p-1.5 rounded-lg">
                <Code2 className="h-6 w-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">CCS</span>
            </Link>
            <p className="text-zinc-500 max-w-sm mb-8">
              Creative Coding Solutions is a full-service digital agency specializing in high-end web development, AI integration, and user-centric design.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="bg-white border border-zinc-200 p-2 rounded-lg hover:bg-zinc-900 hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-zinc-500 hover:text-zinc-900 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-zinc-500 hover:text-zinc-900 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-zinc-900 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Creative Coding Solutions. All rights reserved.
          </p>
          <p className="text-zinc-400 text-sm flex items-center gap-1">
            Built with <span className="text-red-500">♥</span> in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
