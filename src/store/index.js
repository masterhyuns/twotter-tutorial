import { createStore } from "vuex";
import { UserModule } from "@/store/User";

export default createStore({
  state: {},
  // 상태 변경
  mutations: {},
  // 상태 변경 요청
  actions: {},
  modules: {
    User: UserModule
  }
});
