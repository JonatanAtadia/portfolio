import { languages } from '../../constants';
import { useTranslation } from 'react-i18next';

export const Languages = () => {
  const { i18n } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <div className='ml-10 text-sm uppercase hover:border-b py-4 text-black'>
      <select defaultValue={i18n.language} onChange={onChangeLang}>
        {languages.map(({ code }) => (
          <option key={code} value={code}>
            {code.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
