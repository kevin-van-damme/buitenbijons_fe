import Link from "next/link";

const FooterNav = () => {
  return (
    <div id="footer">
      <div>
        <p>@2025 BuitenBijOns</p>
        <nav>
          <ul>
            <li>
              <Link className="hover:text-blue-600" href="/contact">
                Contacteer Ons
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600" href="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default FooterNav;
