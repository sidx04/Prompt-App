"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signOut, signIn, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const isLoggedIn = true;

  const [providers, setproviders] = useState(null);
  const [toggleDropDown, settoggleDropDown] = useState(false);

  useEffect(() => {
    const setproviders = async () => {
      const response = await getProviders();

      setproviders(response);
    };

    setproviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptshare.ai</p>
      </Link>

      {/* desktop nav */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  SignIn
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile nav */}
      <div className="sm:hidden flex relative ">
        {isLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => settoggleDropDown((prev) => !prev)}
            />

            {toggleDropDown && (
              <div className="dropdown rounded-xl">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => settoggleDropDown(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => settoggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    settoggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  SignIn
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
