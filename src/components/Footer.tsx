import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold">
              <span className="text-primary">H</span>
              <span className="text-foreground">G</span>
              <span className="text-accent">.</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-accent" /> by Hemant Gavali
          </p>

          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
