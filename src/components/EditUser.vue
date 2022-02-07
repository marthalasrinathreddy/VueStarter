<template>
  <div class='edit-card'>
    <form>
      <h4>Change Role for {{this.userEmail}}</h4>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          value="Admin"
          id="exampleRadios1"
          v-model="role"
        />
        <label class="form-check-label" for="exampleRadios1">
          Admin
          <p>Access everything in Chargebee</p>
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          value="Tech Support"
          id="exampleRadios2"
          v-model="role"
        />
        <label class="form-check-label" for="exampleRadios2">
          Tech Support
          <p>User can view "Subscriptions" and "Product Catalog" tabs.
            Can also view, add comments to, send, download individual
            Invoices/Credit Notes.</p>
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          value="Analyst"
          id="exampleRadios3"
          v-model="role"
        />
        <label class="form-check-label" for="exampleRadios3">
          Analyst
          <p>In addition to Tech Support level access, user will have
            access to the SaaS metrics report.</p>
        </label>
      </div>
      <div>
        <button @click.prevent="toggleEdit" class="btn btn-warning">
            Cancel
        </button>
        <button @click.prevent="EditUserFun" class="btn btn-primary" style="margin-left:80%">
            Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditUser',
  data() {
    return {
      userEmail: '',
      role: 'Admin',
    };
  },
  props: {
    userId: Number,
    toggleEditUser: Function,
  },
  methods: {
    EditUserFun() {
      console.log('function add userfun');
      this.$store.commit('editUserRole', {
        id: this.userId,
        name: this.userEmail,
        email: this.userEmail,
        role: this.role,
      });
      this.toggleEditUser(this.userId);
      // this.data.userEmail= '',
      // this.data.role= ''
    },
    toggleEdit() {
      this.toggleEditUser(this.userId);
    },
  },
  mounted() {
    console.log('srinath', this.userId);
    this.userEmail = this.$store.getters.getUser(this.userId).email;
    this.role = this.$store.getters.getUser(this.userId).role;
    console.log(this.userEmail, this.role);
  },
};
</script>

<style>
.edit-card{
    border: 2px solid gray;
    border-radius: 25px;
    padding: 1%;
}
</style>
