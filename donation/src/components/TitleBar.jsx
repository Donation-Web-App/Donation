export function TitleBar () {
    const firstName = window.localStorage.getItem('firstName');
    return (
        <div className="fixed w-full bg-white">
            <p className="h-16 flex items-center px-5 text-lg font-semibold">Welcome, {firstName}.</p>
            <hr/>
        </div>
    )
}