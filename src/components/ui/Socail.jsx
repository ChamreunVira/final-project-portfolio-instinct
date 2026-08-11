import {
  FaFacebookF,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Socail() {
  return (
    <div className="max-w-fit md:mx-auto flex justify-between items-center gap-6 md:mt-5 mt-4 *:cursor-pointer">
      <div className="relative group">
        <a href="https://web.facebook.com/vira.chorouen">
          <FaFacebookF className="text-accent text-4xl border-2 py-2 px-2 border-accent border-solid rounded-[50%] hover:text-accent-hover hover:scale-[1.1] transition-transform" />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Facebook
          </span>
        </a>
      </div>
      <div className="relative group">
        <a href="https://www.telegram.com">
          <FaTelegramPlane className="text-accent text-4xl border-2 py-2 px-2 border-accent border-solid rounded-[50%] hover:text-accent-hover hover:scale-[1.1] transition-transform" />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Telegram
          </span>
        </a>
      </div>
      <div className="relative group">
        <a href="https://www.tiktok.com/@rafallinginluv">
          <FaTiktok className="text-accent text-4xl border-2 py-2 px-2 border-accent border-solid rounded-[50%] hover:text-accent-hover hover:scale-[1.1] transition-transform" />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            TikTok
          </span>
        </a>
      </div>
      <div className="relative group">
        <a href="https://commingsoon.com">
          <FaYoutube className="text-accent text-4xl border-2 py-2 px-2 border-accent border-solid rounded-[50%] hover:text-accent-hover hover:scale-[1.1] transition-transform" />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            YouTube
          </span>
        </a>
      </div>
    </div>
  );
}

export default Socail;
