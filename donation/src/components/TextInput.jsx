export function TextInput({ type, name, placeholder, onChange, value, label }) {
  return (
    <div className="my-2">
      {label && <label className="text-sm">{label}</label>}
      <br />
      <input
        className="w-full border border-gray-300 rounded-md w-96 h-10 p-4 outline-none"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
