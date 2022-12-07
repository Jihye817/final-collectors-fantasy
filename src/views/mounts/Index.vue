<template>
  <v-container fluid>
    <v-col>
      <v-row>
        <v-col>
          data table from list
        </v-col>
      </v-row>
      <!-- <v-list>
        <v-row v-for="(item, index) in mountList" :key="index">
          {{item.name}}
        </v-row>
      </v-list> -->
      <v-row>
        <v-col>

          <v-table fixed-header id="mount_table" class="mount_table_class">
            <thead>
              <tr>
                <th>
                  icons
                </th>
                <th @click="sortTable(1)">
                  Name
                </th>
                <th @click="sortTable(2)">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in mountList" :key="item.id" @click="toDetail(item.id)" v-ripple>
                <td><img class="icon_image" :src="item.image" /></td>
                <td>{{item.name}}</td>
                <td>{{item.details}}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import {useRouter} from "vue-router";
import {ref} from 'vue';
export default {
  setup() {
    const router = useRouter();
    const mountList = ref([
      {
        id: 1,
        image : require('../../assets/images/mounts/logo.png'),
        name: 'test1',
        details: 'detail text1',
      },
      {
        id: 2,
        image : require('../../assets/images/mounts/logo.png'),
        name: 'test2',
        details: 'detail text2',
      },
      {
        id: 3,
        image : require('../../assets/images/mounts/logo.png'),
        name: 'test3',
        details: 'detail text3',
      }
    ]);

    const sortTable = (n) => {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
      table = document.getElementById("mount_table");
      switching = true;
      dir = "asc";

      while(switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for(i=1; i<(rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i+1].getElementsByTagName("TD")[n];

          if(dir == "asc"){
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if(dir == "desc") {
            if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }

        if(shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
          switching = true;
          switchCount++;
        } else {
          if(switchCount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }

    const toDetail = (id) => {
      console.log(id)
      router.push({
        name: 'MountDetail'
      })
    }
    return {
      mountList,
      sortTable,
      toDetail
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
.icon_image {
  width: 2rem;
  height: 2rem;
}
.mount_table_class tr:hover{
  cursor: pointer;
  background: #ededed;
}
</style>