import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState(true);

  useEffect(() => {
    const dav = document.getElementById("nav");
    const run = window.addEventListener("scroll", () => {
      if (scrollY > 10) {
        dav.style.backgroundColor = "rgba(245, 245, 245, 0.467)1";
      } else {
        dav.style.backgroundColor = "transparent";
      }
    });
  });

  return (
    <nav id="nav">
      <ul className={menu ? "hide" : "links"} onClick={() => setmenu(true)}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Skills">Skills</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="icon" onClick={() => setmenu(!menu)}>
        {menu ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-solid fa-x"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
