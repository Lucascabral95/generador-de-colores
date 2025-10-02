import { memo } from "react";

interface FooterProps {
  accentColor: string;
}

const URL_GITHUB = "https://github.com/Lucascabral95";

export const Footer = memo<FooterProps>(({ accentColor }) => (
  <footer>
    <p className="texto-footer">
      Designed and handcrafted by
      <a
        className="link-redes"
        style={{ color: accentColor }}
        href={URL_GITHUB}
        target="_blank"
        rel="noreferrer noopener"
      >
        Lucas Cabral
      </a>
      🚀🚀🚀👩‍💻
    </p>
  </footer>
));

Footer.displayName = "Footer";
