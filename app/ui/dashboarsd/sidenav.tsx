import Link from 'next/link';
import InstaLogo from '../instalogo';

export default function SideNav() {
  return (
    <div className="bg-gray-900 text-white h-full w-64 flex flex-col">
      <div className="flex items-center justify-center h-16">
        <InstaLogo />
      </div>
      <nav className="flex-1">
        <Link href="/dashboard/imp_analysis">
          <div className="px-4 py-2 block hover:bg-gray-800">IMPRESSION</div>
        </Link>
        <Link href="/dashboard/tag_analysis">
          <div className="px-4 py-2 block hover:bg-gray-800">TAG</div>
        </Link>
      </nav>
    </div>
  );
}
