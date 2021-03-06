/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import { getPrimaryColor } from "../../../utilities/utilFunction";
import clsx from "clsx";
import {
  navbarDataJSX,
  navbarDataHTML,
  navLayerData,
} from "./../../../utilities/codeSnippetData";
import Link from "next/link";
import CodeSnippet from "./../../../components/global/CodeSnippet";
import { prefix } from "../../../utilities/prefix";

const DashboardIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className={`${className}`}
      viewBox="0 0 16 16"
    >
      <g transform="translate(-0.004 0)">
        <path
          fill="currentColor"
          d="M10.039,16a1.1,1.1,0,0,1-1.1-1.1V10.039a1.1,1.1,0,0,1,1.1-1.1H14.9a1.1,1.1,0,0,1,1.1,1.1V14.9A1.1,1.1,0,0,1,14.9,16Zm.157-1.255h4.549V10.2H10.2ZM1.1,16A1.1,1.1,0,0,1,0,14.9V10.039a1.1,1.1,0,0,1,1.1-1.1H5.961a1.1,1.1,0,0,1,1.1,1.1V14.9a1.1,1.1,0,0,1-1.1,1.1Zm.157-1.255H5.8V10.2H1.255Zm8.785-7.686a1.1,1.1,0,0,1-1.1-1.1V1.1a1.1,1.1,0,0,1,1.1-1.1H14.9A1.1,1.1,0,0,1,16,1.1V5.961a1.1,1.1,0,0,1-1.1,1.1ZM10.2,5.8h4.549V1.255H10.2ZM1.1,7.059A1.1,1.1,0,0,1,0,5.961V1.1A1.1,1.1,0,0,1,1.1,0H5.961a1.1,1.1,0,0,1,1.1,1.1V5.961a1.1,1.1,0,0,1-1.1,1.1ZM1.255,5.8H5.8V1.255H1.255Z"
          transform="translate(0.004 0)"
        />
      </g>
    </svg>
  );
};

const AddMoney: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
};

const NotificationIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );
};
const MenuIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

const Navbar: React.FC<{}> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  const hideMenu = () => setShowMenu(false);
  const toggle = () => setShowMenu((open) => !open);

  return (
    <DocumentationLayout parentSlug="layout" childSlug="navbar">
      <div>
        <CustomHead title="Navbar" description={"Navbar Guideline for bKash"} />
        <h3 className="mb-2 text-primary">Navbar Layout</h3>
        <p>Here is a preview of all possible Navbar sample</p>
        <h6 className="mt-10 mb-4">
          {getPrimaryColor("`Navbar`")} &nbsp; example
        </h6>
        <div className="relative p-4 mt-2 rounded-md bg-primary-100">
          <header className="nav-container">
            <div className="nav-container-layout">
              <Link href="/" passHref>
                <img
                  src={`${prefix}/bkash.svg`}
                  alt="bKash Logo"
                  width={98}
                  height={45}
                />
              </Link>
              <div className="relative flex">
                <button
                  className="nav-menu-icon"
                  onClick={toggle}
                >
                  <MenuIcon />
                </button>
                <ul
                  className={clsx(
                    "fixed right-0 flex flex-col divide-y bg-white shadow-md top-[71px] w-screen",
                    "lg:static lg:flex lg:flex-row lg:items-center lg:space-x-6 lg:divide-y-0 lg:bg-transparent lg:shadow-none lg:top-0 lg:w-auto",
                    {
                      hidden: !showMenu,
                    }
                  )}
                >
                  <li>
                    <Link href="/dashboard" passHref>
                      <span className="font-medium nav-link text-primary">
                        <DashboardIcon className="mr-2 text-primary" />
                        <span>Dashboard</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/send-money" passHref>
                      <span className="nav-link">
                        <AddMoney className="mr-2" />
                        <span>Send Money</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/notification" passHref>
                      <span className="nav-link">
                        <span className="relative mr-2">
                          <span className="absolute block w-2 h-2 rounded bg-primary -right-0 -top-1" />
                          <NotificationIcon />
                        </span>
                        <span>Notification</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <button
                      className="flex items-center px-4 py-3 focus:outline-none lg:px-0 lg:py-0"
                      onClick={() => setProfileShow(!profileShow)}
                    >
                      <span>Alam Haq</span>
                      <span className="flex items-center justify-center ml-2 text-lg text-white bg-pink-500 rounded-full w-9 h-9">
                        AH
                      </span>
                    </button>
                  </li>
                </ul>
                {profileShow && (
                  <ul className="mt-10 dropdown-list dropdown-right" role="menu">
                    <li role="none">
                      <a
                        className="dropdown-item__link"
                        role="menuitem"
                        href="/?path=/story/dropdown--default"
                      >
                        Anchor as an item
                      </a>
                    </li>
                    <li role="none">
                      <button className="dropdown-item__button" role="menuitem">
                        Button as an item
                      </button>
                    </li>
                    <li role="none">
                      <button
                        className="justify-between dropdown-item__button"
                        role="menuitem"
                      >
                        <span>Custom design</span>
                        <span className="badge badge-primary">13</span>
                      </button>
                    </li>
                    <li role="none">
                      <button
                        aria-disabled="true"
                        className="dropdown-item__disabled"
                        disabled
                        role="menuitem"
                      >
                        Disabled item
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </header>
        </div>
        <h6 className="mt-10 mb-4">
          Example of &nbsp; {getPrimaryColor("`Navbar JSX`")}
        </h6>
        <CodeSnippet language={"jsx"}>{navbarDataJSX}</CodeSnippet>
        <h6 className="mt-10 mb-4">
          Example of &nbsp; {getPrimaryColor("`Navbar HTML`")}
        </h6>
        <CodeSnippet language={"jsx"}>{navbarDataHTML}</CodeSnippet>
        <p className="my-6">
          To apply that style please add the snippet below to{" "}
          {getPrimaryColor("`global.css`")}
        </p>
        <CodeSnippet language={"scss"}>{navLayerData}</CodeSnippet>
      </div>
    </DocumentationLayout>
  );
};

export default Navbar;
