"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { KumbhSan } from "@/styles/fonts";

// icons
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiSettingsLine } from "react-icons/ri";

interface HeaderProps {
  title: string;
  buttonProps?: {
    href: string;
    text: string;
  };
}

const Header = ({ title, buttonProps }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className="sticky bottom-0 left-0 right-0 top-0 z-10 overflow-hidden bg-white pl-10 pr-5 text-sm text-default md:pl-5 md:text-base">
      <div className="flex h-20 w-full flex-row items-center justify-between overflow-scroll">
        <div className="flex flex-row items-center gap-6">
          {pathname !== "/admin" && (
            <IoIosArrowBack className="ml-2 hidden text-3xl font-bold sm:block" />
          )}
          <p className="hidden text-lg font-bold sm:block">{title}</p>
          {buttonProps && (
            <Button asChild className="ml-3 text-xs sm:ml-2 sm:text-base">
              <Link
                href={buttonProps.href}
                className={`${KumbhSan.className} font-semibold`}
              >
                {buttonProps.text}
              </Link>
            </Button>
          )}
        </div>

        <div className="flex flex-row items-center gap-3">
          <p className="hidden md:block">Profile</p>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none">
              <img src="/logo.svg" className="flex-e h-10 w-10 rounded-full" />
              <IoIosArrowDown />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-4 text-default">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/" className="flex flex-row items-center">
                  <CgProfile className="mr-2 text-xl" />
                  <p>Profile</p>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href="/" className="flex flex-row items-center">
                  <RiSettingsLine className="mr-2 text-xl" />
                  <p>Settings</p>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/" className="flex flex-row items-center">
                  <IoMdLogOut className="mr-2 text-xl" />
                  <p>Logout</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
