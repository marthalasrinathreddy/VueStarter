<template>
  <div class="home">
    <div class="flex-contain" style="margin-top:4%;margin-bottom:4%">
      <div class="flex-1">
        <h3 style="text-align: center">Team Members</h3>
      </div>
      <div class="flex-2" style="text-align: center">
        <button class="btn btn-primary" @click="toggleAddUser">
          +Invite Member
        </button>
      </div>
    </div>
    <add-user v-if="ifAddUser" :toggleAddUser='toggleAddUser'/>
    <edit-user v-if="ifEditUser" v-bind:userId="editUserId" :toggleEditUser='toggleEditUser'>
    </edit-user>
    <users :toggleEditUser='toggleEditUser'/>
  </div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Users from '../components/Users.vue';
import AddUser from '../components/AddUser.vue';
import EditUser from '../components/EditUser.vue';

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'getDisplayAddUser',
      'getDisplayEditUser',
    ]),
  },
  data() {
    return {
      ifAddUser: false,
      ifEditUser: false,
      editUserId: 0,
    };
  },
  methods: {
    toggleAddUser() {
      // this.$store.commit('toggleAddUser');
      this.ifAddUser = !this.ifAddUser;
      if (this.ifEditUser === true) {
        this.ifEditUser = !this.ifEditUser;
      }
    },
    toggleEdit() {
      this.ifEditUser = !this.ifEditUser;
    },
    toggleEditUser(id) {
      console.log('toggling ', id, this.editUserId, this.ifEditUser);
      if (this.ifAddUser === true) {
        this.toggleAddUser();
      }
      if (this.ifEditUser && this.editUserId === id) {
        this.ifEditUser = !this.ifEditUser;
      } else if (this.ifEditUser) {
        // this.toggleEdit();
        this.editUserId = id;
        // this.toggleEdit();
      } else {
        this.editUserId = id;
        this.ifEditUser = !this.ifEditUser;
      }
    },
  },
  components: {
    Users,
    AddUser,
    EditUser,
  },
  // mounted() {
  //   this.ifAddUser = this.$store.getters.getDisplayAddUser;
  //   this.ifEditUser = this.$store.getters.getDisplayEditUser;
  // },
};
</script>

<style scoped>
.flex-contain {
  display: flex;
  flex-wrap: wrap;
}

.flex-1 {
  flex: 50%;
}

.flex-2 {
  flex: 50%;
  /* flex-direction: column; */
}
.home{
  margin-right: 20%;
  margin-left: 20%;
  position: center;
  background-color: darkgray;
  padding: 2%;
}
</style>
