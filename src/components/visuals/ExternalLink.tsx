import { ExternalLink as LinkIcon } from 'lucide-react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <LinkIcon size={14} className="opacity-50" />
    </a>
  );
}
