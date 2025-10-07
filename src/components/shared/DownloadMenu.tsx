import { useEffect, useId, useRef, useState } from "react";
import { STOREFRONTS } from "../../data/storefronts";

type DownloadMenuProps = {
  buttonLabel?: string;
  buttonClassName?: string;
  containerClassName?: string;
  align?: "left" | "right";
  onSelect?: () => void;
};

const DownloadMenu = ({
  buttonLabel = "Download",
  buttonClassName = "",
  containerClassName = "",
  align = "left",
  onSelect,
}: DownloadMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleSelection = () => {
    onSelect?.();
    setOpen(false);
  };

  return (
    <div ref={menuRef} className={`relative ${containerClassName}`}>
      <button
        type="button"
        className={`bg-green-light text-white text-[1.6rem] capitalize font-medium rounded-[3.2rem] h-[5.4rem] px-[2.4rem] flex items-center justify-center gap-[0.8rem] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-dark ${buttonClassName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        onClick={toggleMenu}
      >
        {buttonLabel}
        <svg
          aria-hidden
          viewBox="0 0 12 8"
          className={`h-[0.8rem] w-[1.2rem] transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        >
          <path
            d="M1 1.5 6 6.5 11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          id={`${id}-menu`}
          role="menu"
          className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-[0.8rem] z-50 min-w-[22rem] rounded-[2.4rem] border border-light-dark/20 bg-white shadow-[0px_20px_40px_rgba(52,88,15,0.15)]`}
        >
          <ul className="flex flex-col gap-[0.4rem] p-[1.2rem]">
            {STOREFRONTS.map((store) => (
              <li key={store.id} role="none">
                <a
                  role="menuitem"
                  className="flex items-center gap-[1.2rem] rounded-[1.6rem] px-[1.2rem] py-[1rem] transition-colors duration-200 hover:bg-green-light/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-light"
                  href={store.url}
                  onClick={handleSelection}
                >
                  <img
                    src={store.badgeSrc}
                    alt={store.badgeAlt}
                    className="h-[3.6rem] w-auto"
                  />
                  <span className="font-inter text-[1.4rem] text-green-dark hidden sm:inline">
                    {store.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DownloadMenu;
