export default {
    state: () => ({
        login_state: false,
        user: null,
        token: null
    }),

    getters: {
        authenticated(state) {
            return state.login_state
        },
        // user(state) {
        //     return state.user
        // },
        token(state) {
            return state.token
        }
    },

    mutations: {
        initialiseStore(state) {
            let get_token = localStorage.getItem('HEALTH-TOKEN')
            let get_state = localStorage.getItem('HEALTH-LOGIN-STATE')
            let get_user = localStorage.getItem('HEALTH-USER-DATA')
            if (get_token && get_user && get_state) {
                state.token = get_token
                state.login_state = get_state
                state.user = JSON.parse(get_user)
            }
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
        // SET_USER(state, details) {
        //     state.user = details
        // },
        SET_STATE(state, status) {
            state.login_state = status
        },
        SIGN_OUT(state) {
            state.login_state = false
            state.user = null
            state.token = null
            localStorage.clear()
        }
    },

    actions: {
        // register user
        async registerUser({ commit }, newBieDetails) {
            try {
                let response = await this.$axios.$post(
                    `user/register-user`,
                    newBieDetails
                )
                // successful response
                if (response) {
                    this.$toast.success(response.message)
                }
                return Promise.resolve({
                    message: response.message
                })

            } catch (error) {
                return Promise.reject(error.data.message)
            }
        },

        async loginUser({ commit }, loginDetails) {
            try {
                // making axios request
                const response = await this.$axios.$post(
                    `users/api-token-auth/`,
                    loginDetails
                )
                // successful response
                if (response) {
                    localStorage.setItem(
                        'HEALTH-TOKEN',
                        response.token
                    )
                    // localStorage.setItem(
                    //     'HEALTH-USER-DATA',
                    //     JSON.stringify(response.user)
                    // )
                    localStorage.setItem('HEALTH-LOGIN-STATE', true)

                    commit('SET_TOKEN', response)
                    // commit('SET_USER', response.user)
                    commit('SET_STATE', true)
                    return Promise.resolve({
                        success: true,
                        message: 'Logged in successfully'
                    })

                }
            } catch (error) {
                return Promise.reject({
                    success: false,
                    message: error
                })
            }
        },
        signOutAction({ commit }) {
            try {
                commit('SIGN_OUT')
                return Promise.resolve({
                    success: true,
                    message: 'Successfully logged out'
                })
            } catch (error) {
                return Promise.reject({
                    success: false,
                    message: 'Unable to logout'
                })
            }
        }
    }
}