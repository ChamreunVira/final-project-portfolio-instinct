import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const navigationItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

function useActiveSection(items, isHome) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!isHome) return;

    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items, isHome]);

  return activeId;
}

function NavbarLink({ onNavigate, className = "" }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const activeId = useActiveSection(navigationItems, isHome);

  return (
    <>
      {navigationItems.map((item) => {
        const isActive = isHome && activeId === item.id;

        const linkClasses = `relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "text-accent"
            : "text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-white"
        }`;

        return (
          <li key={item.id} className={className}>
            {isHome ? (
              <a
                onClick={onNavigate}
                href={`#${item.id}`}
                className={linkClasses}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-accent/10 dark:bg-accent/15" />
                )}
                {item.name}
              </a>
            ) : (
              <Link
                onClick={onNavigate}
                to={`/#${item.id}`}
                className={linkClasses}
              >
                {item.name}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
}

export default NavbarLink;
