import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const [, setLocation] = useLocation();
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Extract session ID from URL params
    const params = new URLSearchParams(window.location.search);
    const id = params.get("session_id");
    setSessionId(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO CONFIRMATION SECTION */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
                <CheckCircle2 className="relative h-24 w-24 text-accent" />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1
                style={{ fontFamily: '"Playfair Display", serif' }}
                className="font-bold text-6xl md:text-7xl lg:text-8xl leading-tight"
              >
                Your Sprint Begins.
              </h1>
              <p
                style={{ fontFamily: '"Inter", sans-serif' }}
                className="text-xl md:text-2xl text-muted-foreground font-light"
              >
                Welcome to the 7-Day Identity Engineering Sprint. Your transformation starts now.
              </p>
            </div>

            {/* Confirmation Details */}
            <div className="bg-secondary rounded-sm p-8 md:p-12 space-y-6">
              <div className="space-y-2">
                <p
                  style={{ fontFamily: '"Inter", sans-serif' }}
                  className="text-sm uppercase tracking-widest text-muted-foreground font-semibold"
                >
                  Order Confirmed
                </p>
                <p
                  style={{ fontFamily: '"Playfair Display", serif' }}
                  className="text-4xl md:text-5xl font-bold"
                >
                  $1,250
                </p>
                <p className="text-sm text-muted-foreground">7-Day Identity Engineering Sprint</p>
              </div>

              {sessionId && (
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Session ID: <span className="font-mono text-foreground/60">{sessionId.slice(0, 20)}...</span>
                  </p>
                </div>
              )}
            </div>

            {/* What Happens Next */}
            <div className="space-y-8 pt-8">
              <h2
                style={{ fontFamily: '"Playfair Display", serif' }}
                className="font-bold text-3xl md:text-4xl"
              >
                What Happens Next
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Intake Call",
                    desc: "We schedule a 30-minute strategy session to understand your brand vision and market position.",
                  },
                  {
                    step: "2",
                    title: "Architecture Phase",
                    desc: "Days 1-5: Intensive design sprint. Daily deliverables including logo system, color palette, and guidelines.",
                  },
                  {
                    step: "3",
                    title: "Deployment Ready",
                    desc: "Day 7: Final assets, brand guidelines, and social media framework delivered in production-ready formats.",
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        style={{ fontFamily: '"Playfair Display", serif' }}
                        className="text-5xl font-bold text-accent/40"
                      >
                        {item.step}
                      </div>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="space-y-2">
                      <h3
                        style={{ fontFamily: '"Playfair Display", serif' }}
                        className="font-bold text-lg"
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6 pt-12 border-t border-border">
              <div className="space-y-3">
                <h3
                  style={{ fontFamily: '"Playfair Display", serif' }}
                  className="font-bold text-2xl"
                >
                  Next Step: Schedule Your Intake Call
                </h3>
                <p className="text-lg text-foreground/80">
                  Our team will reach out within 24 hours to confirm your sprint timeline and schedule the strategy session.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Have questions? Contact us directly:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">
                    WhatsApp: <span className="text-accent">+63 985 318 0830</span>
                  </p>
                  <p className="font-semibold">
                    Email: <span className="text-accent">hello@samarchitect.com</span>
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 rounded-sm mt-8"
                onClick={() => setLocation("/")}
              >
                Back to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 md:py-16 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <p style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-2xl">
                SAM ARCHITECT
              </p>
              <p className="text-sm text-muted-foreground">Identity Engineering</p>
            </div>
            <p className="text-sm text-muted-foreground">© 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
