import Link from "next/link";
import { navigation } from "@/data/site";

export function DesktopNavigation() {
  return (
    <nav aria-label="Main navigation" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
