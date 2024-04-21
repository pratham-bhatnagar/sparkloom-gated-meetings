import React from "react";
import { useAccount } from "wagmi";

function Nav({ connect }) {
  const { isConnected } = useAccount();
  return (
    <header className="header  border-b-[1px]  border-slate-700" data-header>
      <div className="container max-h-[25px] ">
        <a href="/#">
          {" "}
          <img
            src="/GG.png"
            alt="Geeks Gather"
            height={25}
            className="mr-[10px] h-[30px] sm:visible"
          />{" "}
        </a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            {isConnected && (
              <li>
                <a
                  href="/dashboard"
                  className="navbar-link label-lg link:hover cursor-pointer"
                >
                  Dashboard
                </a>
              </li>
            )}

            <li>
              <a
                href="/host"
                className="navbar-link label-lg link:hover cursor-pointer"
              >
                Host
              </a>
            </li>
          </ul>
        </nav>

        <div className="">
          <button className="btn-icon primary" aria-label="wallet">
            {connect}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
