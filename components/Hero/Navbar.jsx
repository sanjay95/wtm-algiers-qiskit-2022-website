import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Affinidilogo from "../../images/logos/affinidi-logo.svg";
import NavLinks from "./links";
import Bluebutton from "../shared/Bluebutton";
const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  return (
    <header className="pt-8 lg:pt-1 flex flex-col gap-8">
      {/* Desktop menu */}
      <div>
        <div className="flex justify-between items-center">
          <div>
            <Image src={Affinidilogo} alt="Affinidi" />
          </div>

          <ul className="hidden lg:flex items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => {
              return (
                <Link key={idx} href={navLink.redirect}>
                  <li className="cursor-pointer hover:text-qiskit-yellow transition-all duration-500 relative">
                    {navLink.content == "Home" && (
                      <div className="absolute left-0 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                    )}
                    <p>{navLink.content}</p>
                  </li>
                </Link>
              );
            })}
          </ul>

          <div className="hidden lg:flex">
            {/* <Bluebutton title={"Join us"} /> */}
            <div className="bg-[url('/hero/blue_button.svg')] bg-no-repeat bg-center bg-cover z-10">
              <div className="h-1/6 mx-[25px] pb-2 flex justify-center">
                <div className="sm:h-[100px] h-[70px] sm:text-3xl sm:font-medium text-l pt-[20px] sm:pt-[30px]">
                  <Link href="/#register" >Join us</Link>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsNavToggled(!isNavToggled)}
            className="flex flex-col cursor-pointer gap-2 lg:hidden"
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isNavToggled && (
        <div className="flex flex-col items-center lg:hidden">
          <ul className="flex flex-col items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => {
              return (
                <Link key={idx} href={navLink.redirect}>
                  <li
                    className="cursor-pointer relative transition-all duration-500 hover:text-qiskit-yellow"
                  >
                    {navLink.content == "Home" && (
                      <div className="absolute left-2 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                    )}
                    <p>{navLink.content}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
