import Link from "next/link";

const HeaderNav = () => {
  return (
    <nav className="container flex items-center justify-between py-6 mx-auto ">
      <Link href="/" className="flex items-center text-3xl font-semibold no-underline">
        BuitenBijOns
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link className="text-gray-600 hover:text-blue-600" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-blue-600" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-blue-600" href="/campings">
            Campings
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-blue-600" href="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
