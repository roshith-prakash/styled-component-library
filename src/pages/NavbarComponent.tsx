import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const NavbarCode = `import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode() as ContextValue;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (link: string) => {
    navigate(link);
    setOpen(false);
  };

  return (
    <>
      <nav
        className={\`dark:bg-darkbg relative z-2 flex items-center justify-between bg-white px-10 py-3 font-sans shadow-xl dark:text-white dark:shadow-md dark:shadow-white/30\`}
      >
        <Link to="/" aria-label="Home">
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logodark_gs3pnp.png"
              }
              alt="Logo"
              className="h-12 cursor-pointer"
            />        
        </Link>

        <div className="hidden items-center gap-x-8 font-medium lg:flex">

        // Add your links here
          <Link
            to="/"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            Home
          </Link>
        </div>

        <button
          aria-label="Change Theme"
          className="hidden cursor-pointer lg:flex"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <IoSunnySharp className="hover:text-darkmodeCTA text-2xl transition-all" />
          ) : (
            <IoMoon className="hover:text-cta text-2xl transition-all" />
          )}
        </button>

        {/* Hamburger Button to open the drawer */}
        <div className="flex items-center gap-x-10 font-medium lg:hidden">
          
        // Toggle Light & Dark Mode
          <button
            className="cursor-pointer"
            aria-label="Change Theme"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <IoSunnySharp className="hover:text-cta text-xl transition-all" />
            ) : (
              <IoMoon className="hover:text-cta text-xl transition-all" />
            )}
          </button>

          <button onClick={() => setOpen(true)} className="cursor-pointer">
            <RxHamburgerMenu className="text-xl" aria-label="Open menu" />
          </button>
        </div>

        {/* Drawer Menu */}
        <div
          className={\`dark:bg-darkbg fixed top-0 right-0 z-50 h-screen w-full bg-white pb-6 text-center text-xl shadow-md md:text-lg \${
            open ? "translate-x-0" : "translate-x-[100%]"
          } transition-all duration-500\`}
          role="dialog"
          aria-modal="true"
          aria-label="Drawer Menu"
        >
          <div className="mb-14 flex items-center justify-between px-10 pt-3.5 lg:px-10">
            <button onClick={() => handleSearch("/")} aria-label="Home">
                <img
                  src=Your Logo"
                  alt="Logo"
                  className="h-12 cursor-pointer"
                />  
            </button>
            <RxCross2
              onClick={() => setOpen(false)}
              className="hover:text-cta cursor-pointer text-2xl transition-all"
              aria-label="Close menu"
            />
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-y-12 px-8 text-xl font-medium">
            
            // Add your links here
            <button
              onClick={() => handleSearch("/")}
              className="hover:text-cta w-fit cursor-pointer transition-all"
              tabIndex={0}
              aria-label="Go to Home"
            >
              Home
            </button>

          </div>

        // Footer Text  
          <div className="absolute bottom-24 left-1/2 w-full -translate-x-1/2 pl-1 text-sm lg:bottom-10">
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

`;

const usingCode = `import Navbar from './Navbar';

const App = () => {
  return (
      <Navbar />
  )
}
`;

const NavbarCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Navbar | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Navbar</h1>
      <h2 className="mt-8 py-5 text-center">
        A Navigation Bar with a Drawer Menu.
      </h2>

      <h3 className="py-2 pl-1 italic">Navbar.tsx</h3>
      <CopyBlock
        text={NavbarCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CopyBlock
        text={usingCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default NavbarCodeComponent;
