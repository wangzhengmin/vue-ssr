import { SET_NEWS, SET_DETAIL } from "./mutations_type";

let actions = {
  getNews({ commit }) {
    console.log("getNews");
    return new Promise((resolve) => {
      setTimeout(() => {
        let news = [
          { id: 1, title: "这是新闻1" },
          { id: 2, title: "这是新闻2" },
          { id: 3, title: "这是新闻3" },
        ];
        commit(SET_NEWS, news);
        resolve();
      }, 100);
    });
  },
  getDetail({ commit }, payload) {
    let { id } = payload;
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(SET_DETAIL, id);
        resolve();
      }, 100);
    });
  },
};

export default actions;
