<template>
  <div class="user-card">
    <div class="flex-container">
      <div class="flex-item-1" style="text-align:center">{{ user.id }}</div>
      <div class="flex-item-2">
        <div>{{ user.name }} ({{ user.role }})</div>
        <div>{{ user.email }}</div>
      </div>
      <div class="flex-item-3">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
            id="dropdownMenuReference"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
            <li @click="showEdit"><a class="dropdown-item" href="#">Edit</a></li>
            <li @click="removeMember"><a class="dropdown-item" href="#">Remove</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: Object,
    toggleEditUser: Function,
  },
  methods: {
    removeMember() {
      this.$store.commit('deleteUser', this.user.id);
    },
    showEdit() {
      // if (this.$store.getters.getDisplayEditId === this.user.id) {
      this.toggleEditUser(this.user.id);
      // } else {
      //  this.toggleEditUser(this.$store.getters.DisplayEditId);
      //  this.toggleEditUser(this.user.id);
      // }
      // console.log(this.$store.getters.getDisplayEditUser);
      // this.$store.commit('toggleEditUser');
      // console.log(this.$store.getters.getDisplayEditUser);
    },
  },
};
</script>

<style scoped>
.user-card{
  padding-top: 2%;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-1 {
  flex: 15%;
}

.flex-item-2 {
  flex: 65%;
  /* flex-direction: column; */
}

.flex-item-3 {
  flex: 20%;
}
</style>
