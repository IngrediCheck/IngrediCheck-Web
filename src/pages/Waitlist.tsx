import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import SEO from "../components/common/SEO";
import { supabase } from "../utils/supabaseClient";
import {
  Mail,
  Check,
  ArrowRight,
  Scan,
  Heart,
  Sparkles,
  Bot,
  Camera,
  BookmarkPlus,
  Users,
  MessageSquare,
  Database,
  Home,
  FileText,
  Clock,
  Zap,
} from "lucide-react";

import heroPhoneImg from "../assets/hero-phone.png";
import familyProfileImg from "../assets/family-profile.png";
import allergenSelectionImg from "../assets/allergen-selection.png";
import ingredibotImg from "../assets/ingredibot.png";
import logoImg from "../assets/logo.png";

const EMAIL_MAX_LEN = 255;

const FEATURE_CARDS = [
  {
    icon: Scan,
    title: "Barcode Scanning",
    description: "Instantly scan product barcodes to get personalized dietary recommendations for you and your family.",
  },
  {
    icon: Camera,
    title: "Ingredient Analysis",
    description: "Take a photo of ingredient lists and get instant compatibility checks with your dietary restrictions.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Input",
    description: "Simply describe your dietary restrictions and preferences in your own words—no complex forms.",
  },
  {
    icon: Users,
    title: "Family Profiles",
    description: "Create custom profiles with unique avatars for each family member and track everyone's dietary needs.",
  },
  {
    icon: BookmarkPlus,
    title: "Favorites & Inventory",
    description: "Save your safe products to favorites and build your personal inventory by taking pictures.",
  },
  {
    icon: Clock,
    title: "Scan History",
    description: "Never forget what you've scanned. Access your complete scanning history anytime.",
  },
  {
    icon: Sparkles,
    title: "Improved AI Accuracy",
    description: "V2 brings faster, more accurate AI-powered recommendations with reduced latency.",
  },
  {
    icon: Database,
    title: "Enhanced Product Database",
    description: "Access a vastly improved product database with more accurate ingredient information.",
  },
] as const;

const WHATS_NEW_CARDS = [
  {
    icon: Users,
    title: "Guided Onboarding",
    description: "New step-by-step setup makes getting started easier than ever.",
  },
  {
    icon: Home,
    title: "Redesigned Home Screen",
    description: "Beautiful new interface with no empty states—always something useful to see.",
  },
  {
    icon: FileText,
    title: "Enhanced Product Details",
    description: "Redesigned product pages with clearer information and better navigation.",
  },
  {
    icon: Database,
    title: "Improved Product Database",
    description: "Vastly expanded database with more accurate ingredient information.",
  },
  {
    icon: Zap,
    title: "Faster AI Performance",
    description: "Improved accuracy and reduced latency for lightning-fast recommendations.",
  },
  {
    icon: Users,
    title: "Custom Family Avatars",
    description: "Personalize each family member's profile with custom avatars and unique restrictions.",
  },
] as const;

function isValidEmail(email: string): boolean {
  if (!email || email.length > EMAIL_MAX_LEN) return false;
  const pattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  return pattern.test(email);
}

type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

const ActionButton = ({ variant = "primary", className = "", ...props }: ActionButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const variantClasses =
    variant === "primary"
      ? "btn-premium text-white"
      : "border border-foreground bg-transparent text-foreground font-semibold hover:bg-foreground/5";
  return <button className={`${baseClasses} ${variantClasses} ${className}`} {...props} />;
};

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const target = document.getElementById("waitlist");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="IngrediCheck Logo" className="w-10 h-10 rounded-lg" />
            <span className="font-semibold text-lg">IngrediCheck</span>
          </div>
          <ActionButton variant="primary" className="h-12 px-6 text-sm sm:text-base" onClick={scrollToWaitlist}>
            Join Waitlist
          </ActionButton>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const scrollToWaitlist = () => {
    const target = document.getElementById("waitlist");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="absolute top-20 left-[10%] w-3 h-3 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-40 right-[15%] w-4 h-4 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-60 left-[20%] w-2 h-2 bg-primary/25 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 right-[10%] w-3 h-3 bg-primary/35 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-60 left-[15%] w-4 h-4 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-32 right-[8%] w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-32 left-[12%] w-16 h-16 border-2 border-primary/15 rounded-full animate-spin-slow" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium">Beta goes live soon</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Shop smarter.
            <br />
            Eat <span className="bg-clip-text text-transparent [background-image:var(--gradient-apple)]">better.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Scan barcodes, analyze ingredients, and shop confidently with personalized recommendations for your whole family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ActionButton variant="primary" className="h-[52px] px-8 text-base" onClick={scrollToWaitlist}>
              Join the Waitlist
            </ActionButton>
            <ActionButton variant="outline" className="h-[52px] px-8 text-base">
              Learn More
              <ArrowRight className="h-5 w-5" />
            </ActionButton>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in">
          <div className="col-span-2 row-span-2 rounded-lg border border-border/50 bg-gradient-to-br from-card to-primary/5 text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col">
            <div className="space-y-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit text-xs font-medium">
                <Scan className="h-3 w-3 text-primary" />
                <span>Scanning</span>
              </div>
              <h3 className="text-lg font-bold">Instant results</h3>
              <p className="text-muted-foreground text-sm">Point and scan any label</p>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/20 transition-all">
              <img
                src={heroPhoneImg}
                alt="Scanning interface showing barcode scan feature"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="rounded-lg border border-border/50 bg-card text-card-foreground shadow-sm col-span-1 p-2 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
            <div className="space-y-1 mb-2">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="h-3 w-3 text-primary" />
              </div>
              <h3 className="text-xs font-semibold">Family profiles</h3>
              <p className="text-muted-foreground text-[10px]">Track everyone's needs</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-border/50 aspect-[4/3]">
              <img src={familyProfileImg} alt="Family profile showing allergen preferences" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="rounded-lg border border-border/50 bg-card text-card-foreground shadow-sm col-span-1 p-2 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
            <div className="space-y-1 mb-2">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-primary" />
              </div>
              <h3 className="text-xs font-semibold">Select allergens</h3>
              <p className="text-muted-foreground text-[10px]">Customize your alerts</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-border/50 aspect-[4/3]">
              <img src={allergenSelectionImg} alt="Allergen selection interface" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-card text-card-foreground shadow-sm col-span-2 p-2 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
            <div className="space-y-1 mb-2">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="h-3 w-3 text-primary" />
              </div>
              <h3 className="text-xs font-semibold">Ask IngrediBot</h3>
              <p className="text-muted-foreground text-[10px]">Get instant ingredient answers</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-border/50 aspect-video">
              <img src={ingredibotImg} alt="IngrediBot AI assistant interface" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto relative z-10 max-w-5xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Everything you need to shop safely</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From guided onboarding to family profiles—IngrediCheck V2 makes managing dietary restrictions effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_CARDS.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="rounded-lg border border-border/50 bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsNewSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">What's New in V2</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Better in every way</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've rebuilt IngrediCheck from the ground up with powerful new features and improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHATS_NEW_CARDS.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="rounded-lg border border-border/50 bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistSignupSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isEmailValid = useMemo(() => isValidEmail(email), [email]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!isEmailValid) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.from("waitlist").insert({ email: email.trim() });
      if (error) {
        if ((error as any).code === "23505") {
          setErrorMsg("This email is already on the waitlist.");
        } else {
          setErrorMsg("Something went wrong. Please try again.");
        }
        return;
      }
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Be first to experience V2</h2>
            <p className="text-xl text-muted-foreground">
              Join the waitlist for early access to guided onboarding, family profiles, improved AI accuracy, and more.
              </p>
            </div>

          {!isSubmitted ? (
            <form onSubmit={onSubmit} className="max-w-xl mx-auto animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:relative w-full">
                <div className="relative w-full">
                  <Mail className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground z-10" />
                <input
                  type="email"
                  inputMode="email"
                  placeholder="Enter your email"
                  value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  maxLength={EMAIL_MAX_LEN}
                  aria-invalid={!isEmailValid && email.length > 0}
                    className="pl-12 sm:pl-14 pr-4 sm:pr-44 h-14 sm:h-16 text-base sm:text-lg rounded-full border-2 border-input bg-background w-full placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                    required
                />
                </div>
                <ActionButton
                  type="submit"
                  disabled={!isEmailValid || isLoading}
                  className="sm:absolute sm:right-1.5 sm:top-1/2 sm:-translate-y-1/2 h-14 sm:h-[56px] px-6 text-base w-full sm:w-auto disabled:pointer-events-none"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </ActionButton>
              </div>
              {errorMsg && (
                <p className="mt-3 text-sm text-red-600" role="alert">
                  {errorMsg}
                </p>
              )}
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">You're all set!</h3>
                <p className="text-muted-foreground">Check your inbox for a confirmation email.</p>
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground animate-fade-in">
            By joining, you agree to receive updates about IngrediCheck V2. Unsubscribe anytime.
          </p>
        </div>
        </div>
      </section>
  );
}

function FooterSection() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="IngrediCheck Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold">IngrediCheck</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2025 IngrediCheck. Making grocery shopping safer for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Waitlist() {
  useEffect(() => {
    document.body.classList.add("waitlist-page");
    document.documentElement.classList.add("waitlist-root");
    return () => {
      document.body.classList.remove("waitlist-page");
      document.documentElement.classList.remove("waitlist-root");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Join the IngrediCheck Waitlist"
        description="Get early access to upcoming features. Join the IngrediCheck waitlist to be notified first."
        url="https://ingredicheck.app/waitlist"
      />
      <NavigationBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhatsNewSection />
        <WaitlistSignupSection />
      </main>
      <FooterSection />
    </div>
  );
}



