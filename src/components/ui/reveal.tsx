import SlideEffect from "@/components/effects/slide-effect";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <SlideEffect delay={delay} className={className}>
      {children}
    </SlideEffect>
  );
}