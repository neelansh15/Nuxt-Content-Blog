
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      activePage: "All Posts"
    }),
    mutations: {
        setActivePage(state, payload){
            state.activePage = payload
        }
    }
  })
}

export default createStore
