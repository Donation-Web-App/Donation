export function SubmitInput({ label, active }) {
  return (
    <input
      className={
        "w-full border-none text-white outline-none py-2.5 rounded-md cursor-pointer " +
        (active ? "bg-primary" : "bg-zinc-500")
      }
      type="submit"
      value={label}
    />
  );
}
