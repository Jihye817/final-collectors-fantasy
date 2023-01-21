<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import {onMounted} from 'vue';

export default {
  name: 'App',

  components: {
    Navbar,
  },
  setup() {
    return {
    }
  },
}
</script>
