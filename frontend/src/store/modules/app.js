
const app = {
    state: {
        headerTitle: '',
        theme: '',
        isLoading: false
    },
    mutations: {
        setHeaderTitle (state, title) {
            state.headerTitle = title
        },
        setTheme (state, payload) {
            state.theme = payload.themeColor
        },
        updateLoadingStatus (state, payload) {
            state.isLoading = payload.isLoading
        }
    }
}

export default app
