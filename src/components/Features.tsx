import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  RefreshCcw, 
  Cloud, 
  Users, 
  TrendingUp, 
  Lock 
} from 'lucide-react';

const features = [
  {
    title: "AI Spectrum Analysis",
    desc: "Real-time scanning and auto-selection of the cleanest channels, even in high-interference cities.",
    icon: Cpu,
    color: "bg-blue-500"
  },
  {
    title: "Zero-Touch Provisioning",
    desc: "Deploy 100 devices in 10 minutes. Just scan QR codes and let the cloud handle the rest.",
    icon: RefreshCcw,
    color: "bg-accent"
  },
  {
    title: "Self-Healing Dashboard",
    desc: "Manage your entire network from a single pane of glass with 99.99% Guaranteed SLA.",
    icon: Cloud,
    color: "bg-indigo-500"
  },
  {
    title: "Social Guest Portal",
    desc: "Turn your WiFi into a marketing engine. Capture leads via Facebook, Google, or SMS.",
    icon: Users,
    color: "bg-purple-500"
  },
  {
    title: "Band Steering + QoS",
    desc: "Prioritize Critical POS and VoIP traffic. High-bandwidth users never lag your operations.",
    icon: TrendingUp,
    color: "bg-cyan-500"
  },
  {
    title: "Threat Intelligence",
    desc: "Advanced Firewall with real-time blacklists updated every 15 minutes by our security labs.",
    icon: Lock,
    color: "bg-red-500"
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="inline-block px-4 py-1 bg-primary text-accent text-xs font-bold tracking-widest uppercase mb-4 border-2 border-primary">
            Technical Specs
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary max-w-3xl leading-[0.9]">
            Invisible Power. <br />
            <span className="text-slate-400">Visible Results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-primary">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-10 border-primary md:[&:not(:nth-child(2n))]:border-r-2 lg:[&:not(:nth-child(3n))]:border-r-2 [&:not(:last-child)]:border-b-2 hover:bg-primary transition-colors duration-500"
            >
              <div className={`w-12 h-12 ${feature.color} flex items-center justify-center text-white mb-8 border-2 border-primary shadow-[4px_4px_0px_#0A192F] group-hover:shadow-[4px_4px_0px_#00D2FF] group-hover:bg-white group-hover:text-primary transition-all`}>
                <feature.icon size={24} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-white transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                {feature.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-primary group-hover:text-accent font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
