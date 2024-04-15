import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { DiAndroid } from 'react-icons/di';

export default function InstaLogo() {
  return (
    <div className="flex items-center text-white text-lg font-bold">
      <DiAndroid className="w-8 h-8 mr-2" />
      <span>Instagram Analysis</span>
    </div>
  );
}
