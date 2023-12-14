export const api = "https://lostfoundapi.pythonanywhere.com/";

// Authorization config
export const config = {
    headers: {Authorization: sessionStorage.getItem('jwtToken')}
};

// byid
export const byId = (id) => document.getElementById(id)