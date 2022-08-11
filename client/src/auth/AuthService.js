class AuthService {

    getCurrUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        localStorage.clear();
    }
}

export default new AuthService();