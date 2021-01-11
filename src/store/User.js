export const UserModule = {
  namespaced: true,
  state: {
    user: null
  },
  // 상태 변경
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  // 상태 변경 요청
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    }
  }
};
