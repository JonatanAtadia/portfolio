import { Social } from '../social/Social';
import { userData } from '../../constants.tsx';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img
    className='rounded-xl hover:scale-105 ease-in duration-300'
    src={src}
    alt={alt}
  />
);

export const Card = () => {
  return (
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
      <div className='lg:p-4 h-full'>
        <div>
          <Image src={userData.imageSrc} alt='' />
        </div>
        <div>
          <h2 className='py-2'>{userData.name}</h2>
          <p>{userData.title}</p>
          <p className='py-4'>{userData.description}</p>
        </div>
        <div>
          <p className='uppercase pt-8'>Connect with me</p>
          <div className='flex items-center justify-between py-4'>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};
