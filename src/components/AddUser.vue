<template>
  <div class='add-card'>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="userEmail"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
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
        <button @click.prevent="toggleAdd()" class="btn btn-warning">
            Cancel
        </button>
        <button @click.prevent="AddUserFun" class="btn btn-primary" style="margin-left:80%">
            Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  data() {
    return {
      userEmail: '',
      role: 'Admin',
    };
  },
  props: {
    toggleAddUser: Function,
  },
  methods: {
    AddUserFun() {
      console.log('function add userfun');
      this.$store.commit('addUser', {
        id: this.$store.state.users.length + 1,
        name: this.userEmail,
        email: this.userEmail,
        role: this.role,
      });
      this.toggleAdd();
      // this.data.userEmail= '',
      // this.data.role= ''
    },
    toggleAdd() {
      this.toggleAddUser();
    },
  },
};
</script>

<style>
.add-card{
  border: 2px solid gray;
  border-radius: 25px;
  padding: 1%;
}
</style>
