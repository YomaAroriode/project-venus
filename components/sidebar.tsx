"use client";

// font
import { KumbhSan } from "@/styles/fonts";

import React, { useState, useEffect, ComponentType } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// icons
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";

interface NavLinkProps {
  href: string;
  icon?: ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
  isDropdownOpen?: boolean;
}

const NavLink = (props: NavLinkProps) => {
  const { href, icon: Icon, label, isActive, isDropdownOpen } = props;

  return (
    <Link
      href={href}
      className={`inline-flex w-full items-center gap-3 rounded px-3 py-2 text-default
      hover:bg-primary hover:text-white ${KumbhSan.className} ${isActive ? "bg-primary text-white" : ""} ${
        isDropdownOpen ? "mt-40" : "mt-0"
      }`}
    >
      {Icon && <Icon className="inline-block" />}
      <p>{label}</p>
    </Link>
  );
};

interface DropdownLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

const DropdownLink = (props: DropdownLinkProps) => {
  const { href, label, isActive } = props;

  return (
    <Link
      href={href}
      className={`${KumbhSan.className} text-default hover:text-default-foreground ${isActive ? "text-default-foreground" : ""}`}
    >
      <p>{label}</p>
    </Link>
  );
};

type IsActiveFn = (pathname: string, path: string) => boolean;
type IsDropdownActiveFn = (pathname: string, path: string) => boolean;
type IsInstitutionSectionActiveFn = (pathname: string) => boolean;

const isActive: IsActiveFn = (pathname, path) => {
  return pathname === path;
};

const isDropdownActive: IsDropdownActiveFn = (pathname, path) => {
  return pathname === path;
};

const isInstitutionSectionActive: IsInstitutionSectionActiveFn = (pathname) => {
  return pathname.startsWith("/admin/institution/");
};

interface SidebarProps {}

const Sidebar = (props: SidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDropdownOpen(isInstitutionSectionActive(pathname));
  }, [pathname]);

  const handleSidebarToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleDropdownToggle = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <HiMenuAlt2
        className="menu fixed left-3 top-7 z-40 text-2xl"
        onClick={handleSidebarToggle}
      />

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-60 flex-col gap-5 overflow-x-hidden overflow-y-scroll
        bg-white pb-5 pt-10 shadow-lg transition-transform md:translate-x-0 md:shadow-none ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <section className={`${KumbhSan.className} flex flex-col items-center`}>
          <img
            src="/logo.svg"
            className="h-16 w-16 rounded-full"
            alt="Company Logo"
          />
          <p className="mt-5 font-semibold text-default-foreground">
            Udemy Inter.school
          </p>
        </section>

        <hr className="mt-3 h-0.5 w-full border-t-0 bg-neutral-200" />

        {/* links */}
        <section className="mx-5 flex flex-col gap-2 text-sm font-semibold md:text-base">
          <NavLink
            href="/admin"
            icon={HiOutlineHome}
            label="Home"
            isActive={isActive(pathname, "/admin")}
          />
          <div
            className={`inline-flex w-full items-center gap-3 rounded px-3 py-3 text-default hover:bg-primary hover:text-white ${isInstitutionSectionActive(pathname) ? "navlink-active" : ""} ${isDropdownOpen ? "bg-primary text-white" : ""}`}
          >
            <div
              className="flex cursor-pointer flex-row items-center gap-3"
              onClick={handleDropdownToggle}
            >
              <HiOutlineBuildingLibrary />
              <p className={`${KumbhSan.className} z-40`}>Institution</p>
              <IoIosArrowForward className="ml-4" />
            </div>
            <div
              className={`fixed left-5 top-[18.2rem] flex h-40 w-[200px] flex-col gap-3 rounded-md p-2 pt-4 shadow-xl md:top-[18.6rem] ${isDropdownOpen ? "block" : "hidden"}`}
              style={{ background: "#E8EDF1" }}
            >
              <DropdownLink
                href="/admin/institution/staffing"
                label="Staffing"
                isActive={isDropdownActive(
                  pathname,
                  "/admin/institution/staffing",
                )}
              />
              <DropdownLink
                href="/admin/institution/subject"
                label="Subjects"
                isActive={isDropdownActive(
                  pathname,
                  "/admin/institution/subject",
                )}
              />
              <DropdownLink
                href="/admin/institution/teacher"
                label="Teachers"
                isActive={isDropdownActive(
                  pathname,
                  "/admin/institution/teacher",
                )}
              />
              <DropdownLink
                href="/admin/institution/student"
                label="Students"
                isActive={isDropdownActive(
                  pathname,
                  "/admin/institution/student",
                )}
              />
            </div>
          </div>
          <NavLink
            href="/admin/elearn-lab"
            label="Elearn - lab"
            isActive={isActive(pathname, "/admin/elearn-lab")}
            isDropdownOpen={isDropdownOpen}
          />
          <NavLink
            href="/admin/admin-task"
            icon={GrUserAdmin}
            label="Admin Task"
            isActive={isActive(pathname, "/admin/admin-task")}
          />
          <NavLink
            href="/admin/class-result"
            icon={HiOutlineChartBarSquare}
            label="Class Result"
            isActive={isActive(pathname, "/admin/class-result")}
          />
          <NavLink
            href="/admin/it-support"
            icon={MdOutlineSupportAgent}
            label="IT Support"
            isActive={isActive(pathname, "/admin/it-support")}
          />
        </section>
      </aside>

      {/* backdrop */}
      <div
        className={`fixed left-0 top-0 z-30 h-full w-full bg-slate-900/30 transition-colors md:hidden ${isOpen ? "block backdrop-blur-sm" : "hidden"}`}
        onClick={handleSidebarToggle}
      />
    </>
  );
};

export default Sidebar;
