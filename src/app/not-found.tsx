import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.12em] text-blue-600 uppercase">
            <span className="h-px w-8 bg-blue-600" />
            Error 404
            <span className="h-px w-8 bg-blue-600" />
          </p>

          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-[#17191C] sm:text-5xl lg:text-6xl">
            Looks like this page took a wrong turn.
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Let&apos;s get you back on track.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to homepage
            </Link>

            <Link
              href="/#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-5 text-sm font-medium text-[#17191C] transition-colors hover:border-[#D1D5DB] hover:bg-[#F8F9FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Explore projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
