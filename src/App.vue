<template>
  <v-app dark>

    <v-toolbar  app absolute clipped-left>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon  to="/">
        <v-icon color="purple darken-2">home</v-icon>
      </v-btn>
      <v-btn icon v-if="!authenticated" @click="login()">
        <v-icon color="red darken-2">account_circle</v-icon>
      </v-btn>
        <v-btn icon  v-if="authenticated" @click="logout()">
        <v-icon color="green darken-2">account_circle</v-icon>
      </v-btn>
       <v-btn icon to="about">
        <v-icon   color="blue darken-2">info</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view
        :auth="auth"
        :authenticated="authenticated">
      >
      </router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; Terra Cognita 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import AuthService from './auth/AuthService';

const auth = new AuthService();
const {
  login, logout, authenticated, authNotifier,
} = auth;

export default {
  name: 'App',
  data() {
    authNotifier.on('authChange', (authState) => {
      this.authenticated = authState.authenticated;
    });
    return {
      fixed: false,
      title: 'DameNature.xyz',
      auth,
      authenticated,
    };
  },
  methods: {
    login,
    logout,
  },
};
</script>
