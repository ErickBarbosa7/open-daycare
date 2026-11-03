"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/dashboard", "dynamic_feed", "Inicio"],
  ["/feed", "family_restroom", "Feed familiar"],
  ["/announcements", "campaign", "Avisos"],
  ["/account", "account_circle", "Mi cuenta"],
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div className="app-shell"><aside className="sidebar"><Link className="brand" href="/dashboard"><span className="brand-mark"><span className="material-symbols-outlined">child_care</span></span><span>OpenDaycare</span></Link><nav className="main-nav" aria-label="Navegación principal">{links.map(([href, icon, label]) => <Link className={`nav-link ${pathname === href ? "nav-link-active" : ""}`} href={href} key={href}><span className="material-symbols-outlined">{icon}</span><span>{label}</span></Link>)}</nav><div className="sidebar-footer"><div className="profile-avatar">L</div><div><strong>Lucía Fernández</strong><span>Madre</span></div><button className="icon-button" aria-label="Más opciones" type="button"><span className="material-symbols-outlined">more_horiz</span></button></div></aside><main className="page-content">{children}</main></div>;
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: React.ReactNode }) {
  return <header className="page-header"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h1>{title}</h1>{description && <p>{description}</p>}</div>{action}</header>;
}

export function Avatar({ initial, color, size = "normal" }: { initial: string; color: string; size?: "small" | "normal" | "large" }) {
  return <span className={`avatar avatar-${size}`} style={{ backgroundColor: color }}>{initial}</span>;
}

export function Toast({ children }: { children: React.ReactNode }) { return <div className="toast" role="status"><span className="material-symbols-outlined">check_circle</span>{children}</div>; }
