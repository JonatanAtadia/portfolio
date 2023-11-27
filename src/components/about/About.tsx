export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='menuSections'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            minima maxime dolorum natus qui molestias quidem veniam? Amet, quis?
            Inventore commodi dolores accusantium sint facilis. Et nesciunt
            dolor mollitia consequuntur?
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            minima maxime dolorum natus qui molestias quidem veniam? Amet, quis?
            Inventore commodi dolores accusantium sint facilis. Et nesciunt
            dolor mollitia consequuntur?
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            minima maxime dolorum natus qui molestias quidem veniam? Amet, quis?
            Inventore commodi dolores accusantium sint facilis. Et nesciunt
            dolor mollitia consequuntur?
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            asdasdasdas adsasdas asd asd asd asd as dasdas dasd
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
