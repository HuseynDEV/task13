import Vuex from "vuex";
import Vue from "vue";
import { router } from "@/router";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todo: [],
    checkedTodo: [],
  },

  getters: {
    getData(state) {
      // return state.todo
   return  state.todo=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]
    },
    getCheckedData(state) {
      return state.checkedTodo;
    },
  },

  mutations: {
    addTodo(state, payload) {

        state.todo.push(payload)
        localStorage.setItem('todos',JSON.stringify(state.todo))
        router.replace('/')

    },

    addCheckedTodo(state, payload) {
      state.todo.filter((item) => {
        if (item.title == payload.toLowerCase()) {
          item.active = true;
          state.checkedTodo.push(item);
        }
      });
    },

    deleteCheckedTodo(state, payload) {
      state.checkedTodo = state.checkedTodo.filter((item) => {
        item.active = false;
        item.title.toLowerCase() != payload.toLowerCase();
      });
    },


  },

  actions: {},
});
