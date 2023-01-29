export default function FormField({
  labelName,
  type,
  title,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={title}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
      </div>
      <input
        type={type}
        id={title}
        name={title}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-3"
      />
    </div>
  );
}
