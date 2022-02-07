<template>
  <div id='list'>
    <p :key="user.id" v-for="user in getAllUsers">
      <user v-bind:user="user" :toggleEditUser='toggleEditUser'></user>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import User from './User.vue';

export default {
  name: 'Users',
  data() {
    return {
      list: [
        {
          name: 'srinath',
        },
        {
          name: 'raviteja',
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'getAllUsers',
    ]),
  },

  components: {
    User,
  },
  props: {
    toggleEditUser: Function,
  },
};
</script>

<style>
#list{
  background-color: aliceblue;
  /* margin-left: 20%;
  margin-right: 20%; */
}
</style>
