import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socialItems = [
  {
    icon: <FaLinkedinIn />,
    name: 'LinkedIn',
    url: 'URL LinkedIn',
  },
  { icon: <FaGithub />, name: 'GitHub', url: 'URL GitHub' },
  {
    icon: <AiOutlineMail />,
    name: 'Email',
    url: 'URL Email',
  },
  {
    icon: <BsFillPersonLinesFill />,
    name: 'Otra Red Social',
    url: 'URL',
  },
];

export const Social = () => {
  return (
    <>
      {socialItems.map((social, index) => (
        <div key={index} className='socialBtn' title={social.name}>
          {social.icon}
        </div>
      ))}
    </>
  );
};
