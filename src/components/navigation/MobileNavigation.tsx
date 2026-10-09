"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/site";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen((open) => !open);
        }}
        className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background shadow-sm">
          <nav aria-label="Mobile navigation">
            <ul className="mx-auto flex max-w-300 flex-col px-5 py-4 sm:px-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
