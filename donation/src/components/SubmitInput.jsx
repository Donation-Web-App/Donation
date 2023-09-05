export function SubmitInput ({ label }) {
    return (
        <input className="w-full bg-primary border-none text-white outline-none py-2.5 rounded-md cursor-pointer" type="submit" value={label} />
    )
}