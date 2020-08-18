export const state = () => ({
  activePage: "Home"
});

export const mutations = {
  setActivePage(state, payload) {
    state.activePage = payload;
  }
};
