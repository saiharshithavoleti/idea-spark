import { ReactNode } from "react";

interface OutputSectionProps {
  icon: ReactNode;
  title: string;
  content: string;
  delay?: number;
}

export function OutputSection({ icon, title, content, delay = 0 }: OutputSectionProps) {
  if (!content) return null;
  
  return (
    <div 
      className="glass-card p-6 mb-5 animate-slide-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <h2 className="section-heading flex items-center gap-2 mb-4">
        {icon}
        {title}
      </h2>
      <pre className="code-block">{content}</pre>
    </div>
  );
}
