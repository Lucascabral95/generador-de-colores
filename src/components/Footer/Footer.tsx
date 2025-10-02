import { memo } from "react";

interface FooterProps {
  accentColor: string;
}

export const Footer = memo<FooterProps>(({ accentColor }) => (
  <footer>
    <p className="texto-footer">
      Designed and handcrafted by{" "}
      <a
        className="link-redes"
        style={{ color: accentColor }}
        href="https://github.com/Lucascabral95"
        target="_blank"
        rel="noreferrer noopener"
      >
        Lucas Cabral
      </a>{" "}
      🚀🚀🚀👩‍💻
    </p>
  </footer>
));

Footer.displayName = "Footer";
