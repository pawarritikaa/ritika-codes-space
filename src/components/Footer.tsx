import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Ritika Pawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;