import { RiRadioButtonFill } from 'react-icons/ri';
export const Property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
        <img
          className='absolute z-1 w-full h-full object-cover'
          src='./src/assets/FondoSmartFinance.jpg'
          alt=''
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[%50] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>titulo proyecto</h2>
          <h3>tecnologias proyecto</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>project</p>
          <h2>overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vel
            debitis, esse reprehenderit suscipit sequi possimus. Voluptas magnam
            recusandae fuga totam reiciendis amet ipsa provident rem unde,
            delectus at doloremque?
          </p>

          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4 '>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
            </div>
          </div>
        </div>
        <a href='/#home'>
          <p className='underline cursor-pointer'>Back</p>
        </a>
      </div>
    </div>
  );
};
