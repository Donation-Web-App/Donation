import CurrencyFormat from "react-currency-format";

export function CurrencyInput({ value, onValueChange, label }) {
  return (
    <div>
      {label && <label className="text-sm">{label}</label>}
      <CurrencyFormat
        className="w-full border border-gray-300 rounded-md w-96 h-10 p-4 outline-none"
        value={value}
        onValueChange={onValueChange}
        prefix="NGN "
        thousandSeparator={true}
      />
    </div>
  );
}
