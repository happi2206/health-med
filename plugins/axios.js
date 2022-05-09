
export default function ({ store, $axios, redirect }) {

    $axios.onRequest(config => {
        // set token
        $axios.setToken(localStorage.getItem('HEALTH-TOKEN'), 'Bearer')
    })


    // catch error
    $axios.onError(error => {
        if (error.response.status === 401) {
            store.commit('SIGN_OUT');
            redirect('/login')
        }
        return Promise.reject(error.response);
    })
}