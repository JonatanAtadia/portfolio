import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Social } from '../social/Social';
import { MenuLinkItem } from './MenuLinkItem';
import { menuLinkList } from '../../constants.tsx';
import { Languages } from '../languages/Languages.tsx';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const { t } = useTranslation();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    const handleRouteChange = () => {
      if (window.location.pathname === '/property') {
        setNavBg('transparent');
        setLinkColor('#ecf0f3');
      } else {
        setNavBg('#ecf0f3');
        setLinkColor('#1f2937');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleRouteChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Logo />

        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            {menuLinkList.map((menuLink, index) => (
              <MenuLinkItem key={index} {...menuLink} />
            ))}
            <Languages />
          </ul>

          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Logo />
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>{t(`navBar.title1`)}</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {menuLinkList.map((menuLink, index) => (
                <MenuLinkItem
                  key={index}
                  {...menuLink}
                  onClick={() => setNav(false)}
                />
              ))}
              <Languages />
            </ul>

            <div className='pt-40 '>
              <p className='menuSections text-sm'>{t(`navBar.title2`)}</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
