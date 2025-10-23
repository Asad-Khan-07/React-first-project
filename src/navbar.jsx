import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { themeContext } from "./mode";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Support", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { mode, setMode } = useContext(themeContext);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-20 shadow-md ${
        mode ? "bg-[#040724]/90" : "bg-white/90"
      } backdrop-blur-sm transition duration-500 ease-in-out`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 🔹 Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Bars3Icon className="block h-6 w-6 data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* 🔹 Logo */}
          <div className="flex items-center gap-3">
            <img
              alt="Logo"
              src="https://themewagon.github.io/startup-nextjs/images/logo/logo-2.svg"
              className={`h-8 mb:h-6 w-auto rounded-md p-1 ${
                mode ? "bg-amber-100" : "bg-white"
              } transition duration-500`}
            />
            <span
              className={`font-semibold mb:text-sm sm:text-base ${
                mode ? "text-amber-100" : "text-gray-900"
              }`}
            >
              Startup
            </span>
          </div>

          {/* 🔹 Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-6 md:space-x-8 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-blue-500 font-semibold"
                    : mode
                    ? "text-amber-100"
                    : "text-gray-800",
                  "px-3 py-2 text-sm hover:text-blue-500 transition"
                )}
              >
                {item.name}
              </a>
            ))}

            {/* 🔹 Dropdown Menu */}
            <Menu as="div" className="relative">
              <MenuButton
                className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium ${
                  mode ? "text-amber-100" : "text-gray-800"
                } hover:text-blue-500 transition`}
              >
                Pages
                <ChevronDownIcon className="h-4 w-4 text-gray-400" />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-amber-100 shadow-lg ring-1 ring-black/10 focus:outline-none">
                {[
                  "About Page",
                  "Blog Page",
                  "Blog Grid Page",
                  "Blog Sidebar Page",
                  "Blog Details Page",
                  "Sign In Page",
                  "Sign Up Page",
                  "Error Page",
                ].map((page) => (
                  <MenuItem key={page}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md"
                    >
                      {page}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>

          {/* 🔹 Right Side Buttons */}
          <div className="flex items-center gap-3">
            <button
              className={`hidden sm:block rounded-md px-4 py-2 text-sm font-medium ${
                mode
                  ? "bg-amber-100 text-gray-700"
                  : "bg-gray-800 text-amber-100"
              } hover:-translate-y-1 transform transition duration-300`}
            >
              Sign In
            </button>
            <button className="hidden sm:block bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium shadow-md hover:bg-blue-700 transition">
              Sign Up
            </button>

            {/* 🔹 Theme Toggle */}
            <button
              onClick={() => setMode(!mode)}
              className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            >
              {mode ? (
                // Light Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                // Dark Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0118 15.75C12.615 15.75 8.25 11.385 8.25 6 8.25 4.67 8.516 3.403 8.998 2.248A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-3 pb-4 pt-2 bg-white/10 backdrop-blur-md">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "text-blue-500 font-semibold"
                  : mode
                  ? "text-amber-100"
                  : "text-gray-900",
                "block rounded-md px-3 py-2 text-sm hover:bg-white/10 hover:text-blue-500 transition"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton
            as="a"
            href="#"
            className={`block rounded-md px-3 py-2 text-sm ${
              mode ? "text-amber-100" : "text-gray-900"
            } hover:text-blue-500`}
          >
            Pages
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
