import { motion } from "framer-motion";

const SkillBar = ({ skill, percentage, color, logo }) => {
  return (
    <div className="flex items-center space-x-4 bg-white dark:bg-[#1c1c22] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-accent/40 transition-colors duration-300">
      <div className="p-2 bg-gray-50 dark:bg-black/20 rounded-lg">
        {logo}
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            {skill}
          </span>
          <span className="font-mono text-sm text-gray-500 dark:text-gray-400">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-black/30 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
export default SkillBar;
