interface inputFieldInfo {
  label: string;
  type: string;
  rows?: number;
}

export const InputField: React.FC<inputFieldInfo> = ({ label, type, rows }) => (
  <div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2' htmlFor={label}>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        className='border-2 rounded-lg p-3 border-gray-300'
        rows={rows}
        id={label}
      />
    ) : (
      <input
        className='border-2 rounded-lg p-3 flex border-gray-300'
        type={type}
        id={label}
      />
    )}
  </div>
);
