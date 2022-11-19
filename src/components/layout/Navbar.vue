<template>
  <v-app-bar elevation="0" color="grey-lighten-3">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    navbar test
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

</style>