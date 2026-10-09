import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-foreground transition-opacity duration-200 hover:opacity-80"
          >
            Michael Fares
          </Link>

          <div className="flex items-center">
            <DesktopNavigation />
            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
