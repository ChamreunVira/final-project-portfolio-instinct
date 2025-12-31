const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#1a1a20] py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 font-medium font-secondary">
          &copy; {new Date().getFullYear()} <span className="text-accent">Chamreun Vira</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
