import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { toast } from "sonner";
import { useState } from "react";
import SprintBanner from "@/components/SprintBanner";

export default function Home() {
  const WHOP_LINK = "https://whop.com/sam-architect-identity-architecture/identity-sprint/";

  const handleStartSprint = () => {
    window.open(WHOP_LINK, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* LinkedIn-Style Sprint Banner */}
      <SprintBanner onStartSprint={handleStartSprint} />

      {/* HERO IMAGE SECTION */}
      <section className="w-full">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663589334830/hGsffcAHSKfLVKJHHzx4mT/sam-architect-hero-mockup-KWL9EUynpYUXMDmHmuKkCg.webp"
          alt="SAM ARCHITECT Brand Identity Studio Mockup"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-6xl md:text-7xl lg:text-8xl leading-tight">
                  Your Brand is Costing You Revenue.
                </h1>
                <p style={{fontFamily: '"Inter", sans-serif'}} className="text-xl md:text-2xl text-muted-foreground font-light">
                  In 3 seconds, premium buyers judge your credibility. A weak identity loses the deal before it starts.
                </p>
              </div>
              <div className="space-y-6 pt-4">
                <p className="text-lg leading-relaxed text-foreground/80">
                  The <span className="font-semibold">7-Day Identity Engineering Sprint</span> is a precision intervention designed to architect the visual system that commands premium market perception.
                </p>
                <Button
                  size="lg"
                  className="bg-accent text-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  onClick={handleStartSprint}
                >
                  Start Your Sprint
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right: Visual Accent */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full aspect-square bg-secondary rounded-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div style={{fontFamily: '"Playfair Display", serif'}} className="text-7xl font-bold text-accent">SA</div>
                  <p style={{fontFamily: '"Inter", sans-serif'}} className="text-sm uppercase tracking-widest text-muted-foreground">Identity Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & POSITIONING STRIP */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-2">
              <p style={{fontFamily: '"Inter", sans-serif'}} className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Intake</p>
              <p style={{fontFamily: '"Playfair Display", serif'}} className="text-2xl md:text-3xl font-bold">2 Slots / Month</p>
              <p className="text-sm text-muted-foreground">Precision over volume.</p>
            </div>
            <div className="space-y-2">
              <p style={{fontFamily: '"Inter", sans-serif'}} className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Process</p>
              <p style={{fontFamily: '"Playfair Display", serif'}} className="text-2xl md:text-3xl font-bold">Selective</p>
              <p className="text-sm text-muted-foreground">Only serious inquiries accepted.</p>
            </div>
            <div className="space-y-2">
              <p style={{fontFamily: '"Inter", sans-serif'}} className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Standard</p>
              <p style={{fontFamily: '"Playfair Display", serif'}} className="text-2xl md:text-3xl font-bold">Premium</p>
              <p className="text-sm text-muted-foreground">High-ticket consulting only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM FRAME SECTION */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-3xl space-y-12">
            <h2 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-5xl md:text-6xl">The Problem</h2>

            <div className="space-y-8">
              <div className="space-y-3">
                <h3 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-2xl">Price Resistance</h3>
                <p className="text-lg text-foreground/80">
                  Clients negotiate your fees because your brand signals low value before you speak. A weak identity forces you to compete on price, not positioning.
                </p>
              </div>

              <div className="space-y-3">
                <h3 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-2xl">The Trust Gap</h3>
                <p className="text-lg text-foreground/80">
                  Premium buyers make credibility decisions in under 3 seconds. A misaligned or outdated identity loses the deal before you enter the room.
                </p>
              </div>

              <div className="space-y-3">
                <h3 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-2xl">Market Invisibility</h3>
                <p className="text-lg text-foreground/80">
                  You are operationally superior to competitors, but visually inferior. The market rewards perception, not reality. Your identity must match your capability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION SECTION */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <h2 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-5xl md:text-6xl mb-16">The Transformation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Before */}
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Before</p>
              <div className="space-y-4">
                <div className="h-40 bg-secondary rounded-sm flex items-center justify-center">
                  <p className="text-muted-foreground">Weak, Inconsistent Identity</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Low perceived value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Price negotiation pressure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Lost premium clients</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest text-accent font-semibold">After</p>
              <div className="space-y-4">
                <div className="h-40 bg-foreground rounded-sm flex items-center justify-center">
                  <p className="text-background font-semibold">Strategic Authority</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Dominant market perception</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Premium pricing power</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Attracts ideal clients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <h2 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-5xl md:text-6xl mb-16">What You Get</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Logo Architecture System", desc: "Strategic mark design with technical specifications" },
              { title: "Visual Identity Kit", desc: "Complete color, texture, and material system" },
              { title: "Typography + Color System", desc: "Precision typographic hierarchy and palette" },
              { title: "Brand Guidelines", desc: "Authority documentation for consistent application" },
              { title: "Social Media Framework", desc: "Platform-specific identity deployment" },
              { title: "Deployment-Ready Assets", desc: "Production files ready for immediate use" },
            ].map((item, i) => (
              <div key={i} className="space-y-3 p-6 bg-secondary rounded-sm">
                <h3 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <h2 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-5xl md:text-6xl mb-16">Strategic Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663589334830/hGsffcAHSKfLVKJHHzx4mT/sam-architect-flat-lay-mockup-SgSAWCHd2T2atkSDmyq3x4.webp"
                alt="Flat lay studio mockup - overhead view"
                className="w-full h-auto rounded-sm object-cover"
              />
              <div className="space-y-2">
                <p style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-xl">Brand Identity System</p>
                <p className="text-sm text-foreground/80">Complete visual system from logo to guidelines, perfectly arranged and photographed.</p>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663589334830/hGsffcAHSKfLVKJHHzx4mT/sam-architect-close-up-mockup-C9sj822h9bZ5uJvftfoxbZ.webp"
                alt="Close-up studio mockup - business cards and brand sheet"
                className="w-full h-auto rounded-sm object-cover"
              />
              <div className="space-y-2">
                <p style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-xl">Premium Collateral Detail</p>
                <p className="text-sm text-foreground/80">Business cards, letterhead, and guidelines sheet showcase strategic brand architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="py-20 md:py-32 border-t border-border bg-secondary">
        <div className="container">
          <div className="max-w-2xl space-y-8">
            <h2 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-5xl md:text-6xl">The Investment</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <p style={{fontFamily: '"Inter", sans-serif'}} className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Price</p>
                <p style={{fontFamily: '"Playfair Display", serif'}} className="text-6xl md:text-7xl font-bold">$1,250</p>
                <p className="text-sm text-foreground/80">Fixed price. No hourly rates. No negotiation.</p>
              </div>

              <div className="space-y-2">
                <p style={{fontFamily: '"Inter", sans-serif'}} className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Delivery</p>
                <p style={{fontFamily: '"Playfair Display", serif'}} className="text-2xl font-bold">7 Days</p>
                <p className="text-sm text-foreground/80">Intensive sprint with daily deliverables.</p>
              </div>

              <div className="space-y-2">
                <p style={{fontFamily: '"Inter", sans-serif'}} className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Availability</p>
                <p style={{fontFamily: '"Playfair Display", serif'}} className="text-2xl font-bold">2 Slots / Month</p>
                <p className="text-sm text-foreground/80">Limited intake for precision execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-3xl space-y-8">
            <h2 style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-5xl md:text-6xl">Authority is Engineered.</h2>

            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              If your brand is ready to transcend the noise of the mass market and occupy the position of undisputed leader, the architecture begins here.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-accent text-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={handleStartSprint}
              >
                Secure Your Slot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Direct inquiries only. <br />
                WhatsApp: <span className="font-semibold text-foreground">+63 985 318 0830</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 md:py-16 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <p style={{fontFamily: '"Playfair Display", serif'}} className="font-bold text-2xl">SAM ARCHITECT</p>
              <p className="text-sm text-muted-foreground">Identity Engineering</p>
            </div>
            <p className="text-sm text-muted-foreground">© 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
