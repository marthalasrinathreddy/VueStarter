import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'workshop',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    DisplayEditId: 1,
    DisplayAddUser: false,
    DisplayEditUser: false,
    users: [
      {
        id: 1,
        name: 'You',
        email: 'srinath@chargebee.com',
        role: 'Admin',
      },
      {
        id: 2,
        name: 'ravi',
        email: 'ravi@chargebee.com',
        role: 'Admin',
      },
      {
        id: 3,
        name: 'teja',
        email: 'teja@chargebee.com',
        role: 'Admin',
      },
    ],
  },
  mutations: {
    addUser(state, user): void {
      state.users.push(user);
    },
    deleteUser(state, userId: number): void {
      for (let i = 0; i < state.users.length; i += 1) {
        if (state.users[i].id === userId) {
          state.users.splice(i, 1);
          break;
        }
      }
    },
    editUserRole(state, user): void {
      for (let i = 0; i < state.users.length; i += 1) {
        if (state.users[i].id === user.id) {
          state.users[i].role = user.role;
          break;
        }
      }
    },
    toggleAddUser(state): void {
      console.log('toggle Add User');
      state.DisplayAddUser = !state.DisplayAddUser;
    },
    toggleEditUser(state): void {
      console.log('toggle Edit User');
      state.DisplayEditUser = !state.DisplayEditUser;
    },
    setDisplayEditId(state, id): void {
      state.DisplayEditId = id;
    },
  },
  getters: {
    getAllUsers: (state) => (
      state.users
    ),
    getDisplayAddUser: (state) => (
      state.DisplayAddUser
    ),
    getDisplayEditUser: (state) => (
      state.DisplayEditUser
    ),
    getUser: (state) => (userId: number) => (
      state.users.find((user) => user.id === userId)
    ),
    getDisplayEditId: (state) => (
      state.DisplayEditId
    ),
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
