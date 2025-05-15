import Link from "next/link";

const FooterNav = () => {
  return (
    <nav className="flex justify-between">
      <div>@2025 BuitenBijOns</div>
      <div>
        <ul>
          <li>
            <Link className="hover:text-blue-600" href="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-600" href="/privacy">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default FooterNav;
