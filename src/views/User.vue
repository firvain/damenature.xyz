<template>
  <div class="user">
    <sidebar :user-info="userInfo" />
    <Map />
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import Map from '../components/Map.vue';

export default {
  name: 'User',
  data() {
    return {
      userInfo: null,
      test: {
        a: 1,
        b: 2,
      },
    };
  },
  props: ['authenticated', 'auth'],
  components: {
    Sidebar,
    Map,
  },
  methods: {
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.authenticated) {
        // const a = vm.auth.getUserInfo();
        vm.auth.auth0.client.userInfo(localStorage.getItem('access_token'), (err, user) => {
          if (err) {
            console.log(err);
          } else {
            vm.userInfo = user;
          }
        });
        next();
      } else {
        next('/');
      }
    });
  },
  mounted() {
    // const a = this.auth.getUserInfo();
    // console.log(`a${a}`);
  },
};
</script>
<style lang="scss" scoped>

</style>
