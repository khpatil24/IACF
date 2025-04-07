import { Link } from 'react-router-dom';


export default function Navbar() {

return (

<nav className={`
      fixed top-0 left-0 right-0 z-50 
      bg-black text-white shadow-lg h-20
      `}>

<nav className=" bg-emerald-800 text-white shadow-lg h-20"> {/* Fixed navbar height */}
  <div className="max-w-full mx-auto h-full"> {/* Full height container */}
    <div className="flex items-center h-full"> {/* Full height flex container */}
      {/* Logo - full height with constrained aspect ratio */}
      <Link 
        to="/" 
        className="flex items-center h-full group" /* Full height with vertical padding */
      >
        <img 
          src="/logo.jpg" 
          alt="Logo" 
          className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-105" /* Full height, auto width */
        />
        <span className="text-[#fff] text-[32px] leading-[1.6]  px-6 font-mono transition-all duration-300 group-hover:text-secondar group-hover:tracking-wider">
          IACF
        </span>
      </Link>

      {/* Navigation items - aligned to right */}
      <div className="flex-1 flex justify-end mr-8">
        <div className="flex items-center space-x-8 h-full">
          <Link 
            to="/species" 
            className="px-3 py-2 hover:scale-105 transition-colors text-[20px] "
          >
            Species
          </Link>
          <Link 
            to="/articles" 
            className="px-3 py-2 hover:scale-105 transition-colors text-[20px]"
          >
            Articles
          </Link>
          <Link 
            to="/about" 
            className="px-3 py-2 hover:scale-105 transition-colors text-[20px]"
          >
            About Us
          </Link>
        </div>
      </div>

      {/*Donate Button*/}
      <Link
        to="/donate"
        className="text-[20px] mx-6 bg-green-500 text-green-900 font-bold py-2 px-3 rounded-none border-4 border-green-900 hover:border-white transition-all duration-300 shadow-md hover:scale-105 "
      >
        Donate
      </Link>

    </div>
  </div>
</nav>
</nav>
  );
}