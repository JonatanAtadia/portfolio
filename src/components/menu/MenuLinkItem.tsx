import { useTranslation } from 'react-i18next';
interface MenuLinkItemInfo {
  name: string;
  href: string;
  onClick?: () => void;
}

export const MenuLinkItem: React.FC<MenuLinkItemInfo> = ({
  name,
  href,
  onClick,
}) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li
      className='ml-10 text-sm uppercase hover:border-b py-4'
      onClick={handleClick}
    >
      <a href={href}>{t(`menuLink.${name.toLowerCase()}`)}</a>
    </li>
  );
};
