import { lastUpdate } from "../data/profile";

function Footer() {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="flex z-50 justify-between items-center  text-sm max-w-3xl w-full mx-auto 
      py-10 flex-wrap px-2 sm:px-4 gap-2 opacity-50"
    >
      <p>© {new Date().getFullYear()} DhirajArya.</p>
      <p>💡Last updated on {lastUpdate}</p>
    </footer>
  );
}

export default Footer;
