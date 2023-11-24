const asd = {
  src: './src/assets/Logo.png',
  alt: 'logo',
};

export const Logo = () => {
  return (
    <a href='/#home'>
      <img src={asd.src} alt={asd.alt} width='50px' height='25px'></img>
    </a>
  );
};
