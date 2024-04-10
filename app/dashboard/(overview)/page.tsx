import Link from "next/link";

export default function Page() {
  return (
    <div>
    <p>Dashboard Page</p>
    <div>
    <Link href="/dashboard/imp_analysis">GO imp</Link>
    </div>
    <div>
    <Link href="/dashboard/tag_analysis">GO tag</Link>
    </div>
    </div>
  )}