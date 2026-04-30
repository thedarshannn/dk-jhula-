import { Truck, Globe, Ribbon, Shield, Palette, Droplets } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";

const items = [
  { icon: Truck,    label: "Pan-India Delivery" },
  { icon: Globe,    label: "5+ Countries Served" },
  { icon: Ribbon,   label: "Premium Resham Doori" },
  { icon: Shield,   label: "100-150 kg Capacity" },
  { icon: Palette,  label: "Full Customization" },
  { icon: Droplets, label: "Fully Washable" },
  { icon: Shield,   label: "Rope Warranty" },
];

export default function TrustBar() {
  return (
    <div className="bg-warm-white border-y border-beige overflow-hidden">
      <Marquee
        pauseOnHover
        repeat={3}
        className="py-2 [--duration:25s] [--gap:0.5rem]"
      >
        {items.map((item) => (
          <Badge
            key={item.label}
            variant="outline"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 border-beige bg-transparent text-brand-brown hover:bg-beige-light/50 rounded-none cursor-default transition-colors duration-200"
          >
            <item.icon className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={1.75} />
            <span className="font-display text-[10px] tracking-[2.5px] uppercase font-semibold whitespace-nowrap">
              {item.label}
            </span>
          </Badge>
        ))}
      </Marquee>
    </div>
  );
}
