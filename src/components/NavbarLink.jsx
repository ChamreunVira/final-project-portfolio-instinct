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

function NavbarLink({ onNavigate, className = "" }) {
  const { pathname } = useLocation();

  return (
    <>
      {navigationItems.map((item) => (
        <li key={item.id} className={className}>
          {pathname === "/" ? (
            <a onClick={onNavigate} href={`#${item.id}`} className="text-sm font-medium text-gray-600 transition hover:text-accent dark:text-gray-300">{item.name}</a>
          ) : (
            <Link onClick={onNavigate} to={`/#${item.id}`} className="text-sm font-medium text-gray-600 transition hover:text-accent dark:text-gray-300">{item.name}</Link>
          )}
        </li>
      ))}
    </>
  );
}

export default NavbarLink;
