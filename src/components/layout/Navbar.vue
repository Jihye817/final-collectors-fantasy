<template>
  <v-app-bar :elevation="0" >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    navbar test
    <v-row align="center" justify="end">
      <v-spacer></v-spacer>
      <v-col class="mr-3" cols="auto">
        <v-btn @click="toggleTheme" variant="tonal"
          :icon="theme.global.name.value === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'">
        </v-btn>
      </v-col>
    </v-row>
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
import {useTheme} from 'vuetify';

export default {
  setup() {
    const drawer = ref(true);
    const theme = useTheme();

    return {
      drawer,
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
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