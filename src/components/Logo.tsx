const asd = {
  src: './src/assets/Logo.png',
  alt: 'logo',
};

export const Logo = () => {
  return <img src={asd.src} alt={asd.alt} width='50px' height='25px'></img>;
};