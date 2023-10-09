import AuthApi from '@/api/AuthApi'
import {AuthUtils} from "@/utils/localStorageUtils";
const state = {
    token: AuthUtils.getToken(),
    tokenFormCookies: AuthUtils.getTokenFromCookies(),
    user: null
}
const mutations = {
    SET_TOKEN: (state, token) => {
        if (AuthUtils.getTokenFromCookies()) {
            state.token = AuthUtils.getTokenFromCookies()
        } else {
            state.token = token
        }
    },
    SET_TOKEN_COOKIE: (state, tokenCookie) => {
        state.tokenFormCookies = tokenCookie
    },
    SET_USERINFO: (state, user) => {
        state.user = user
    },
    CLEAR_USERINFO: (state) => {
        state.token = null
        state.tokenFormCookies = null
        state.user = {}
    },
    SET_USER_ROLE: (status, role) => {
        state.userRole = role
    }
}

const actions = {
    login: async ({ commit }, data) => {
        try {
            const res  = await AuthApi.login(data)
            commit("SET_TOKEN", res.data.token)
            commit("SET_TOKEN_COOKIE", res.data.token)

            AuthUtils.setToken(res.data.token)
            AuthUtils.setTokenInCookies(res.data.token)
            return true
        }
        catch (e) {
            return false
        }
    },
    setTokenInCookies: ({commit}, token) => {
        commit('SET_TOKEN_COOKIE', token)
    },
    logout: async ({ commit, dispatch }, data) => {
        try {
            const res = await AuthApi.logout()
            dispatch("clearUser")
            AuthUtils.removeToken()
            AuthUtils.removeTokenFromCookie()
        } catch (e) {
            return false
        }
    },
    clearUser: ({ commit }) => {
        commit('CLEAR_USERINFO')
        AuthUtils.removeToken()
        AuthUtils.removeTokenFromCookie()
    },
    async getAuthInfo({commit, dispatch}) {
        try {
            const data = await AuthApi.getAuthUser({})
            commit('SET_USERINFO', data.data)

        } catch (e) {
            dispatch("clearUser")
        }
    }
}

const getters = {
    getUserInfo: (state) => state.user
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

