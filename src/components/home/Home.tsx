import { Social } from '../social/Social';

export const Home = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-w flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'>Jonatan</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut unde
            corporis quae accusamus, consectetur quidem recusandae, odio
            voluptates voluptate dignissimos quos assumenda repellendus impedit
            ratione nisi atque nulla aliquid explicabo!
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};
