import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SprintBannerProps {
  onStartSprint?: () => void;
}

export default function SprintBanner({ onStartSprint }: SprintBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-foreground to-foreground/90 text-background border-b border-foreground/20">
      <div className="container py-3 md:py-4 flex items-center justify-between gap-4">
        {/* Left: Content */}
        <div className="flex-1 flex items-center gap-3 md:gap-4">
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-background/20">
            <span style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-sm">
              SA
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p
              style={{ fontFamily: '"Playfair Display", serif' }}
              className="font-bold text-sm md:text-base truncate"
            >
              7-Day Identity Engineering Sprint
            </p>
            <p className="text-xs md:text-sm text-background/80 truncate">
              Transform your brand into a revenue machine • Limited 2 slots/month
            </p>
          </div>
        </div>

        {/* Middle: Price */}
        <div className="hidden md:flex flex-col items-center">
          <p className="text-xs text-background/70 uppercase tracking-wider">Investment</p>
          <p
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="font-bold text-lg"
          >
            $1,250
          </p>
        </div>

        {/* Right: CTA & Close */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="bg-yellow-400 text-black hover:bg-yellow-300 text-xs md:text-sm px-4 md:px-5 py-2 rounded-sm whitespace-nowrap font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            onClick={onStartSprint}
          >
            Start Sprint
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 hover:bg-background/20 rounded transition-colors"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
