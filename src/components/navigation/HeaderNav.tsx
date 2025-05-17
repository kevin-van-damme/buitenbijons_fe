import Link from "next/link";

const HeaderNav = () => {
  return (
    <div id="header">
      <div>
        <Link href="/">BuitenBijOns</Link>
        <nav>
          <ul>
            <li>
              <Link className="text-gray-600 hover:text-blue-600" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-blue-600" href="/about">
                About us
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
            <li>
              <Link className="text-gray-600 hover:text-blue-600" href="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-blue-600" href="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
