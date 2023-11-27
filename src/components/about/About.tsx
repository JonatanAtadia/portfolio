export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='menuSections'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            ¡Hola! Soy Jonatan Atadia, nacido el 31 de marzo de 1989 en Bragado,
            Buenos Aires, Argentina. Desde temprana edad, he sido un apasionado
            de la programación, pero fue en 2017, cuando me quedé sin trabajo,
            que decidí sumergirme de lleno en el mundo del desarrollo. Mis
            primeros pasos como autodidacta marcaron el comienzo de una travesía
            dedicada a la exploración y el aprendizaje constante. Devoré libros
            y tutoriales, exploré diversas tecnologías y lenguajes, y me
            convertí en un desarrollador versátil. Mi motivación principal es el
            deseo continuo de aprender. Desde entonces, no he dejado de trabajar
            y estudiar para evolucionar como desarrollador. Disfruto
            compartiendo conocimientos con mis compañeros desarrolladores y
            considero que el mejor entorno de trabajo es aquel que me desafía a
            evolucionar constantemente. ¿Listo para descubrir más sobre mi viaje
            en el desarrollo y la programación?
          </p>

          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Mira algunos de mis últimos proyectos.
          </p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl'
            src='./src/assets/FondoSmartFinance.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
