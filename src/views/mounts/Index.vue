<template>
  <v-container fluid>
    <v-col>
      <v-list>
        <v-row v-for="(item, index) in mountList" :key="index">
          {{item.name}}
        </v-row>
      </v-list>
    </v-col>
  </v-container>
</template>

<script>
import {ref} from 'vue';
export default {
  setup() {
    const mountList = ref([
      {
        id: 1,
        image : '../../assets/images/mounts/000001.png',
        name: "test",
      }
    ]);

    return {
      mountList,
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