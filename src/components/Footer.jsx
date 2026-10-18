
import {
  Gamepad2,
  Languages,
  Share2,
  Globe2,
} from "lucide-react";

import "./Footer.scss";

const footerLinks = [
  {
    title: "EXPLORE",
    links: [
      { label: "Top Rated", href: "/top-rated" },
      { label: "New Releases", href: "/new-releases" },
      { label: "Indie Gems", href: "/indie-gems" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Safety Center", href: "/safety" },
      { label: "Community Guidelines", href: "/community" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  const handleShare = async () => {
    const shareData = {
      title: "GameVault",
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Sharing failed:", error);
        }
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert("Website link copied!");
      } catch {
        console.error("Could not copy link.");
      }
    }
  };

  return (
    <footer className="game-footer">
      <div className="game-footer__main">
        <div className="game-footer__brand">
          <a className="game-footer__logo" href="/">
            <span className="game-footer__logo-icon">
              <Gamepad2 size={17} />
            </span>
            <span>GameVault</span>
          </a>

          <p>
            The ultimate destination for game
            discovery and library management.
            Built for gamers, by gamers.
          </p>
        </div>

        {footerLinks.map((group) => (
          <nav
            className="game-footer__column"
            key={group.title}
            aria-label={group.title}
          >
            <h3>{group.title}</h3>

            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="game-footer__bottom">
        <p className="game-footer__copyright">
          © {new Date().getFullYear()} GameVault Inc.
          All rights reserved.
        </p>

        <div className="game-footer__actions">
          <button
            type="button"
            aria-label="Language settings"
            title="Language settings"
            onClick={() => console.info("Add language selector here")}
          >
            <Languages size={16} />
          </button>

          <button
            type="button"
            aria-label="Share website"
            title="Share website"
            onClick={handleShare}
          >
            <Share2 size={16} />
          </button>

          <a
            href="https://vercel.com/rhlydv216581"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Vercel profile"
            title="Vercel profile"
          >
            <Globe2 size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
