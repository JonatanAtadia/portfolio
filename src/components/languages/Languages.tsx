import { languages } from '../../constants';
import { useTranslation } from 'react-i18next';

export const Languages = () => {
  const { i18n } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <div className='ml-10 text-sm uppercase hover:border-b py-4'>
      <select defaultValue={i18n.language} onChange={onChangeLang}>
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
