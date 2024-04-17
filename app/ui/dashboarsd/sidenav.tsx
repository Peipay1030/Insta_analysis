'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import InstaLogo from '../instalogo';
import clsx from 'clsx';

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className={clsx(
      'flex h-full w-64 flex-col',
      'bg-gray-900',
      'text-white'
    )}>
      <div className={clsx(
      `flex items-center` ,
      `h-16 justify-center`)}>
        <InstaLogo />
      </div>
      <nav className="flex-1">
        <Link href="/dashboard/imp_analysis">
          <div className={clsx(
          `block px-4 py-2`,
          `${pathname === '/dashboard/imp_analysis' ? 'bg-gray-800' : 'hover:bg-gray-800'}`)}>IMPRESSION</div>
        </Link>
        <Link href="/dashboard/tag_analysis">
          <div className={clsx(
          `block px-4 py-2`,
          `${pathname === '/dashboard/tag_analysis' ? 'bg-gray-800' : 'hover:bg-gray-800'}`)}>TAG</div>
        </Link>
      </nav>
    </div>
  );
}
