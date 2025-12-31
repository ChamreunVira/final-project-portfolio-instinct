import { BsArrowRight } from "react-icons/bs";

function ServicesCard({ icon, name, title }) {
  return (
    <div className="group relative bg-white dark:bg-[#232329] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-2xl">
      {/* Hover Background */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col items-start gap-4">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-primary flex items-center justify-center text-4xl text-accent group-hover:text-white group-hover:bg-accent transition-all duration-300">
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {title}
          </p>
        </div>

        {/* Arrow / Read More */}
        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent group-hover:text-primary dark:group-hover:text-white transition-colors">
          Read More <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default ServicesCard;
