import { GlobeAltIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { DiAndroid } from 'react-icons/di';

export default function InstaLogo() {
  return (
    <div className={clsx(
      `flex items-center`, 
      `text-lg font-bold text-white`)}>
      <DiAndroid className={clsx(
      `mr-2 size-8`
      )} />
      <p>Instagram Analysis</p>
    </div>
  );
}
