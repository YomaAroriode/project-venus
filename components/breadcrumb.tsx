"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.reduce<BreadcrumbItem[]>((acc, segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      if (segment === "admin") {
        return acc; // Skip adding the "staff" route to the breadcrumb
      }
      if (segment === "institution" && index !== segments.length - 1) {
        acc.push({ label: segment, href: "" });
      } else {
        acc.push({ label: segment, href });
      }
      return acc;
    }, []);
  }, [pathname]);

  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex flex-wrap items-center">
        {breadcrumbItems.map(({ label, href }, index) => (
          <li key={index}>
            <div className="flex items-center">
              {index > 0 && (
                <span className="sublink mx-1 text-default/60">/</span>
              )}
              {index === breadcrumbItems.length - 1 || href === "" ? (
                <span className="text-default/60">{label}</span>
              ) : (
                <Link href={href} className="sublink">
                  {label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
