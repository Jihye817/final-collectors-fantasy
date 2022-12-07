<template>
  <v-container fluid>
    <v-col>
      <v-row>
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