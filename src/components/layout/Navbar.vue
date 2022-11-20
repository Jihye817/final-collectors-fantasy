<template>
  <v-app-bar elevation="0" color="grey-lighten-3">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>navbar test</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-switch hide-details label="theme"></v-switch>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">

  </v-navigation-drawer>
</template>

<script>
import {ref} from 'vue';

export default {
  setup() {
    const drawer = ref(true);

    return {
      drawer,
    }
  }
}
</script>

<style scoped>
.v-col {
  padding: 0px;
}
.v-row {
  margin: 0px;
}
</style>