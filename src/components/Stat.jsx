import CountUp from "react-countup";

const stats = [
  { num: 1, text: "Years of Experience" },
  { num: 5, text: "Happy Clients" },
  { num: 12, text: "Projects Completed" },
  { num: 850, text: "Code Commits" },
];

function Stat() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
      {stats.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-primary text-primary dark:text-white">
            <CountUp
              end={item.num}
              duration={5}
              delay={0.5}
            />
            <span className="text-accent">+</span>
          </div>
          <p className="text-center xl:text-left text-gray-600 dark:text-gray-400 leading-snug max-w-[100px]">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stat;
