<template>
  <v-navigation-drawer
      app
      fixed
      clipped
      permanent
      light
  >
    <v-card>
      <v-avatar>
      <img
          :src="userInfo.picture"
        >
      </v-avatar>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    userInfo: Object,
  },
};
</script>

