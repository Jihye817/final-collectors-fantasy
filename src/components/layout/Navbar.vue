<template>
  <v-app-bar :elevation="0" :color="theme == 'light' ? 'grey-lighten-3' : 'black'" >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    navbar test
    <v-spacer></v-spacer>
    <v-btn variant="tonal" :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    @click="onClick"></v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-image</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          mounts
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-image</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          tests
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {ref} from 'vue';

export default {
  emits: ["toggle-theme"],
  setup(props, { emit }) {
    const drawer = ref(true);
    const theme = ref('light');

    const onClick = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      emit('toggle-theme');
    }

    return {
      drawer,
      theme,
      onClick,
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