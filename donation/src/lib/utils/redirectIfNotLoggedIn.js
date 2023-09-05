export function redirectIfNotLoggedIn() {
    // Get authentication cookie
    const tokenValue = window.localStorage.getItem('tokenValue');
    const tokenExpiration = window.localStorage.getItem('tokenExpiration');

    // Redirect to login page if token does not exist
    if (!tokenValue) {
        return window.location = '/login';
    }
    
    // Redirect to login page if token has expired
    const tokenExpired = Date.now() > tokenExpiration;
    if (tokenExpired) {
        return window.location = '/login'
    }
}