import {
  Wrench,
  Wind,
  ShieldCheck,
  Cpu,
  Factory,
  Droplets,
  Settings,
  ClipboardCheck,
  Boxes,
  Lock,
  Gauge,
  Server,
  Activity,
  Cog,
  Building2,
  FlaskConical,
  Microscope,
  HeartPulse,
  Sparkles,
  UtensilsCrossed,
  TestTube,
  HardHat,
  Network,
  Database,
  CalendarClock,
  FileText,
  LifeBuoy,
  Zap,
  Handshake,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  engineering: Building2,
  hvac: Wind,
  cleanroom: ShieldCheck,
  equipment: Factory,
  maintenance: Wrench,
  automation: Cpu,
  utilities: Droplets,
  mechanical: Settings,
  electrical: Zap,
  instrumentation: Gauge,
  bms: Network,
  commissioning: ClipboardCheck,
  pharma: TestTube,
  compliance: ShieldCheck,
  multidisciplinary: Boxes,
  partner: Handshake,
  problem: LifeBuoy,
  lifecycle: CalendarClock,
  cabinet: Lock,
  server: Server,
  activity: Activity,
  cog: Cog,
  lab: FlaskConical,
  microscope: Microscope,
  healthcare: HeartPulse,
  cosmetic: Sparkles,
  food: UtensilsCrossed,
  documents: FileText,
  database: Database,
  hardhat: HardHat,
};

interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export function DynamicIcon({
  name,
  className,
  strokeWidth = 1.5,
}: IconProps) {
  const Icon = iconMap[name] ?? Cog;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
