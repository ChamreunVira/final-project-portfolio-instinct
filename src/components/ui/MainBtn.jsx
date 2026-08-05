
function HireBtn({ name }) {
  return (
    <div className="flex justify-center items-center">
      <button className="relative z-10 overflow-hidden border-2 border-accent border-solid font-semibold text-sm md:text-xl w-[130px] md:w-[150px] h-[40px] rounded-lg text-accent hover:text-white md:mt-8 mt-4  after:content-[''] after:bg-accent after:-z-10 after:absolute after:w-0 after:h-full after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all hover:after:duration-500">
        {name}
      </button>
    </div>
  );
}

export default HireBtn;
