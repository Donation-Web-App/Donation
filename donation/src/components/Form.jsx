export function Form({ children, onSubmit }) {
  return (
    <form
      className="w-full max-w-narrowWidth flex flex-col gap-5"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
