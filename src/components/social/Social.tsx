import { socialItems } from '../../constants.tsx';

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
