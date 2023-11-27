import { RiRadioButtonFill } from 'react-icons/ri';
import { technologyList } from '../../constants';

export const TechnologyList = () => {
  return (
    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
      <div className='p-2'>
        <p className='text-center font-bold pb-2'>tecnologias</p>
        <div className='grid grid-cols-3 md:grid-cols-1'>
          {technologyList.map((tech, index) => (
            <p className='text-gray-600 py-2 flex items-center' key={index}>
              <RiRadioButtonFill className='pr-1' /> {tech.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
