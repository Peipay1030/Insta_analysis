import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <main>
  <h1 className={`${lusitana.className} mb-4 text-xl md:text-3xl`}>
    Dashboard
  </h1>
    <div>
    <div>
    <Link href="/dashboard/imp_analysis">GO imp</Link>
    </div>
    <div>
    <Link href="/dashboard/tag_analysis">GO tag</Link>
    </div>
    </div>
    </main>
  )}