<template>
  <v-app :theme="theme">
    <Navbar @toggle-theme="toggleTheme"/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import {ref} from 'vue';

export default {
  name: 'App',

  components: {
    Navbar,
  },
  setup() {
    const theme = ref('light');

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
    }

    return {
      theme,
      toggleTheme
    }
  },
}
</script>
