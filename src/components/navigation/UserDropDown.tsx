"use client";

import { AlignJustify } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const UserDropDown = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <AlignJustify onClick={() => setShowLinks(!showLinks)} className="cursor-pointer" />
      {showLinks && (
        <div className="absolute bg-white shadow-md rounded-lg top-15 right-0">
          <ul className="flex flex-col">
            <li className="hover:text-slate-300">
              <Link href="/login">Login</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="/register">Register</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default UserDropDown;
