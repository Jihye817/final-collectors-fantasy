<template>
  <v-container fluid class="ma-0 pa-0">
    <v-col>
      <v-row class="pl-3" style="height: 3rem; align-items:center; border-bottom:1px solid blue">
        <v-icon @click="routeBack">
          mdi-chevron-left
        </v-icon>
        detail page test
      </v-row>

    </v-col>
  </v-container>
</template>

<script>
import {useRouter} from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const routeBack = () => {
      router.replace({
        name: 'MountList'
      })
    }
    return {
      routeBack,
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