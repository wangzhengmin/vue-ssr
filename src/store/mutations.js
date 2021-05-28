import { SET_NEWS, SET_DETAIL } from "./mutations_type";

let mumtations = {
  [SET_NEWS](state, payload) {
    state.news = [...payload];
    // console.log(state.news);
  },
  [SET_DETAIL](state, payload) {
    state.detail = `这是新闻 ${payload} 的详情`;
  },
};

export default mumtations;
