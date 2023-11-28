import { Social } from '../social/Social';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
      <div className='lg:p-4 h-full'>
        <div>
          <Image src='./src/assets/FondoSmartFinance.jpg' alt='' />
        </div>
        <div>
          <h2 className='py-2'>{t(`contact.card.name`)}</h2>
          <p>{t(`contact.card.subtitle`)}</p>
          <p className='py-4'>{t(`contact.card.description`)}</p>
        </div>
        <div>
          <p className='uppercase pt-8'>{t(`contact.card.title`)}</p>
          <div className='flex items-center justify-between py-4'>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};
