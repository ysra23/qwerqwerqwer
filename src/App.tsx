/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wifi, 
  ShieldCheck, 
  Zap, 
  Cloud, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Globe, 
  Lock, 
  Cpu, 
  RefreshCcw, 
  ChevronRight,
  MonitorCheck,
  Building2,
  TrendingUp,
  MessageSquare,
  Award
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// --- Validation Schemas ---
const trialSchema = z.object({
  email: z.string().email({ message: "Please enter a valid business email." }),
});

type TrialFormValues = z.infer<typeof trialSchema>;

import { Features } from './components/Features';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b-2 border-primary py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center group-hover:rotate-6 transition-transform border-2 border-accent">
            <Wifi className="text-accent w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-primary">OMADA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="brutalist-button bg-accent hover:bg-cyan-400 text-primary rounded-none px-8"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Omada
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu ... */}
    </header>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Abstract AI network pulses */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] animate-pulse delay-700" />
    </div>
  );
};

const Hero = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TrialFormValues>({
    resolver: zodResolver(trialSchema)
  });

  const onSubmit = (data: TrialFormValues) => {
    console.log("Lead captured:", data);
    toast.success("Welcome aboard! Redirecting to preview...");
    confetti();
    setTimeout(() => {
      window.location.hash = "#dashboard-preview";
    }, 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#F1F5F9]">
      <ParticleBackground />
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 border-2 border-primary bg-white text-primary text-xs font-bold uppercase mb-8 shadow-[4px_4px_0px_#0A192F]">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            AI Core v4.2 Deployment Active
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-primary mb-8 tracking-tighter leading-[0.85]">
            ENTERPRISE WIFI <br />
            <span className="gradient-text italic">THAT JUST WORKS.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium">
            Self-healing mesh WiFi. No controller hardware. <span className="text-primary font-bold">99.99% Uptime SLA</span> as standard.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col md:flex-row gap-0">
            <div className="flex-1 relative">
              <Input 
                {...register('email')}
                placeholder="Enter business email" 
                className="brutalist-input border-r-0"
              />
              {errors.email && (
                <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-bold uppercase">
                  {errors.email.message}
                </span>
              )}
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="submit" className="h-14 rounded-none px-10 bg-primary hover:bg-slate-800 text-white text-base font-bold flex gap-2 border-2 border-primary transition-all shadow-[4px_4px_0px_#00D2FF]">
                    START TRIAL <ArrowRight size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-primary text-white border-2 border-accent rounded-none">
                  <p className="font-bold uppercase text-[10px] tracking-widest">No Card. Instant Setup.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const PASSection = () => {
  return (
    <section id="solutions" className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-accent font-bold uppercase tracking-widest text-sm">The Problem</h3>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Dropped signals, hidden fees, and complex dashboards <span className="text-slate-400">kill your productivity.</span>
              </h2>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="text-xl font-bold text-red-400">The Agitation</h4>
              <p className="text-slate-300 text-lg">
                Every <span className="text-white font-bold underline decoration-accent underline-offset-4">dead zone costs you $237/day</span> in lost revenue. Every support ticket burns 47 minutes of your IT team's life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
            <div className="relative glass-card rounded-3xl p-8 border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent rounded-xl text-primary">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">The Omada Solution</h4>
                  <p className="text-slate-400 text-sm italic">AI Powered Optimization</p>
                </div>
              </div>
              
              <ul className="space-y-6">
                {[
                  "Self-healing mesh avoids 100% of physical dead zones",
                  "AI continuously optimizes channels and power delivery",
                  "Zero complex hardware – set up in under 5 minutes",
                  "Real-time threat intelligence blocks 99% of malware"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full mt-10 bg-accent hover:bg-cyan-400 text-primary font-bold h-14 rounded-xl">
                See the difference in real-time
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [sqft, setSqft] = useState([5000]);
  const [users, setUsers] = useState([500]);
  const [apps, setApps] = useState([2]); // 1: POS, 2: POS+VoIP, 3: All

  const savings = useMemo(() => {
    const baseSavings = (sqft[0] * 0.15) + (users[0] * 5.5);
    const multiplier = apps[0] === 1 ? 1 : apps[0] === 2 ? 1.4 : 2;
    return Math.floor(baseSavings * multiplier);
  }, [sqft, users, apps]);

  const recommendedPlan = useMemo(() => {
    if (sqft[0] > 20000 || users[0] > 1000) return "Omada Enterprise";
    if (sqft[0] > 2000 || users[0] > 100) return "Omada Pro";
    return "Omada Starter";
  }, [sqft, users]);

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Calculate Your WiFi ROI</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">See how much time and money you save with Omada's cloud-native infrastructure.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-12 bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-inner">
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <Label className="text-lg font-bold text-primary">Square Footage</Label>
                <span className="text-accent font-display font-bold text-2xl">{sqft[0].toLocaleString()} sq ft</span>
              </div>
              <Slider 
                min={500} 
                max={50000} 
                step={500} 
                value={sqft} 
                onValueChange={setSqft}
                className="[&_.relative_div]:bg-accent"
              />
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <Label className="text-lg font-bold text-primary">Daily Users</Label>
                <span className="text-accent font-display font-bold text-2xl">{users[0].toLocaleString()} people</span>
              </div>
              <Slider 
                min={10} 
                max={5000} 
                step={10} 
                value={users} 
                onValueChange={setUsers}
                className="[&_.relative_div]:bg-accent"
              />
            </div>

            <div className="space-y-6">
              <Label className="text-lg font-bold text-primary">Critical Business Apps</Label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: 1, name: 'POS Only', icon: Building2 },
                  { id: 2, name: 'POS + VoIP', icon: MonitorCheck },
                  { id: 3, name: 'All + CCTV', icon: ShieldCheck },
                ].map((option) => (
                  <button 
                    key={option.id}
                    onClick={() => setApps([option.id])}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${
                      apps[0] === option.id 
                        ? 'border-accent bg-accent/5 text-primary' 
                        : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <option.icon size={28} />
                    <span className="text-xs font-bold uppercase tracking-tighter">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-full">
            <motion.div 
              key={savings}
              initial={{ scale: 0.98, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-primary text-white rounded-3xl p-10 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BarChart3 size={120} />
              </div>

              <div>
                <span className="text-accent font-bold uppercase tracking-widest text-xs">Projected Monthly Value</span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-6xl font-display font-bold">${savings.toLocaleString()}</span>
                  <span className="text-slate-400 font-medium">/ month</span>
                </div>
                <p className="mt-6 text-slate-300 leading-relaxed">
                  Based on your capacity, Omada reduces hardware lifecycle costs and eliminates 99% of on-site maintenance calls.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-400">Recommended Plan</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold tracking-wider">{recommendedPlan}</span>
                </div>
                <Button className="w-full h-14 rounded-2xl bg-accent hover:bg-cyan-400 text-primary font-bold text-lg">
                  Get Custom Price
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const cases = [
    {
      name: "The Roast Club",
      industry: "Hospitality / Cafe",
      quote: "Omada turned our cafe into a nomad productivity hub. Table turnover increased 300% via time-limited captive portal vouchers.",
      stat: "300% ROI",
      logo: "☕",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      name: "Harbor Hotel",
      industry: "Real Estate / Hotel",
      quote: "We saved $12,000/year on 3rd party IT support. Omada self-heals before guests even notice a signal drop.",
      stat: "$12k Saved/yr",
      logo: "🏨",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=300&h=200"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 italic">Powering Industry Leaders</h2>
            <p className="text-slate-500 text-lg">Verified results from businesses that switched to cloud-managed AI WiFi.</p>
          </div>
          <Button variant="outline" className="rounded-full border-2 border-primary text-primary font-bold px-8 h-12">
            Read All Success Stories
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {cases.map((cs, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-2xl relative">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 relative h-48 lg:h-auto">
                  <img src={cs.image} alt={cs.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-2xl shadow-lg">{cs.logo}</div>
                </div>
                <div className="lg:w-3/5 p-8 flex flex-col justify-between bg-primary text-white">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg">{cs.name}</h4>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">{cs.industry}</p>
                      </div>
                      <div className="text-accent font-display font-bold text-xl">{cs.stat}</div>
                    </div>
                    <p className="text-slate-300 italic text-sm leading-relaxed">"{cs.quote}"</p>
                  </div>
                  <button className="mt-8 text-accent font-bold text-sm flex items-center gap-2 hover:underline">
                    Read case study <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      desc: "Perfect for single-location small businesses.",
      features: [
        "1,000 sq ft Coverage",
        "Up to 50 Concurrent Clients",
        "Standard Firewall",
        "Email Support (24h)",
        "Captive Guest Portal"
      ],
      cta: "Start 14-day trial",
      popular: false
    },
    {
      name: "Pro",
      price: "$149",
      desc: "Advanced features for fast-growing venues.",
      features: [
        "10,000 sq ft Coverage",
        "Up to 500 Concurrent Clients",
        "AI Spectrum Analysis",
        "24/7 Priority Phone Support",
        "Full API Access",
        "Band Steering + QoS"
      ],
      cta: "Start 14-day trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For hotels, stadiums and multisite retail.",
      features: [
        "Unlimited Coverage Area",
        "Unlimited Clients",
        "Dedicated Customer Success",
        "On-prem Management Option",
        "Custom Compliance Exports",
        "Advanced Asset Tracking"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Scale Transparently</h2>
          <p className="text-slate-500 text-lg leading-relaxed">No hidden controller fees. No complex licensing. Just simple per-node pricing.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <Card key={i} className={`relative flex flex-col justify-between overflow-hidden border-2 transition-transform hover:-translate-y-2 duration-300 ${tier.popular ? 'border-accent shadow-2xl scale-105 z-10' : 'border-white shadow-xl'}`}>
              {tier.popular && (
                <div className="absolute top-0 right-0 py-2 px-8 bg-accent text-primary font-bold text-[10px] uppercase tracking-widest translate-x-10 translate-y-3 rotate-45">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold mb-2">{tier.name}</CardTitle>
                <CardDescription className="text-slate-500 text-sm mb-6">{tier.desc}</CardDescription>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold text-primary">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-slate-400 font-medium tracking-tight">/ month</span>}
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-1">
                <ul className="space-y-4">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-sm text-slate-600">
                      <CheckCircle2 className="text-primary shrink-0" size={18} />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className={`w-full h-14 rounded-xl font-bold text-lg ${tier.popular ? 'bg-accent hover:bg-cyan-400 text-primary' : 'bg-primary hover:bg-slate-800 text-white'}`}>
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <p className="text-center mt-12 text-slate-400 text-sm">
          All trials are free for 14 days. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Wifi className="text-primary w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">OMADA</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Omada provides cloud-native, AI-managed WiFi infrastructure that powers the world's most productive businesses.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <MonitorCheck size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <ShieldCheck size={18} />
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-slate-200">Product</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Coverage Map</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cloud Dashboard</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hardware Docs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-slate-200">Company</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Status Page</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Expert</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs tracking-wide">
            © OMADA Networks 2025. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-500">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LiveChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button className="w-14 h-14 rounded-none bg-accent hover:bg-cyan-400 text-primary shadow-[4px_4px_0_#0A192F] p-0 flex items-center justify-center border-2 border-primary">
        <MessageSquare size={24} />
      </Button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PASSection />
        <ROICalculator />
        <Features />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
      <LiveChat />
      <Toaster position="top-center" theme="light" />
    </div>
  );
}
