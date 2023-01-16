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
import firebaseApp from './plugins/firebase';

export default {
  name: 'App',

  components: {
    Navbar,
  },
  setup() {
    onMounted(() => console.log(firebaseApp));
    return {
    }
  },
}
</script>
