import { lastUpdate } from "../data/profile";

function Footer() {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="flex z-50 justify-between items-center text-sm max-w-3xl w-full mx-auto my-10 text-gray-700"
    >
      <p>© {new Date().getFullYear()} DhirajArya.</p>
      <p>💡Last updated on {lastUpdate}</p>
    </footer>
  );
}

export default Footer;
