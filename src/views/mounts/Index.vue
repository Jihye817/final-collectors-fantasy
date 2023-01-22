<template>
  <v-container fluid>
    <v-col>
      <v-row>
        <v-col> data table from list </v-col>
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
                <th @click="refreshList()">아이콘</th>
                <th @click="sortTable(1)">이름</th>
                <th @click="sortTable(2)">스킬여부</th>
                <th>획득방법</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in mountList"
                :key="item.id"
                @click="toDetail(item.id)"
                v-ripple
              >
                <td>
                  <img
                    class="icon_image"
                    :src="item.image"
                  />
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.skill }}</td>
                <td></td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { db, storage } from "@/plugins/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref as ref_storage } from "firebase/storage";

export default {
  setup() {
    const router = useRouter();
    // const mountList = ref([
    //   {
    //     id: 1,
    //     image: require("../../assets/images/mounts/logo.png"),
    //     name: "test1",
    //     details: "detail text1",
    //   },
    //   {
    //     id: 2,
    //     image: require("../../assets/images/mounts/logo.png"),
    //     name: "test2",
    //     details: "detail text2",
    //   },
    //   {
    //     id: 3,
    //     image: require("../../assets/images/mounts/logo.png"),
    //     name: "test3",
    //     details: "detail text3",
    //   },
    // ]);

    const sortTable = (n) => {
      var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchCount = 0;
      table = document.getElementById("mount_table");
      switching = true;
      dir = "asc";

      while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];

          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }

        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchCount++;
        } else {
          if (switchCount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    };

    const toDetail = (id) => {
      console.log(id);
      router.push({
        name: "MountDetail",
      });
    };

    let mountList = ref([]);

    //탈것 리스트 가져오기
    const getMounts = async () => {
      const mounts = await getDocs(collection(db, "mounts"));

      const list = [];
      mounts.forEach((doc) => {
        let data = doc.data();
        // let imageUrl = ref("");
        // const imagesRef = ref_storage(
        //   storage,
        //   "images/mounts/icons_small/" + doc.id + ".png"
        // );
        // getDownloadURL(imagesRef).then((url) =>
        //   imageUrl.value = url
        // );
        let mountData = {
          id: doc.id,
          name: data.name,
          skill: data.skill,
          image: require("../../assets/images/mounts/icons_small/"+ doc.id +".png"),
        };
        list.push(mountData);
      });
      mountList.value = list;
    };

    const refreshList = () => {
      mountList.value = [];
      getMounts();
    }
    onMounted(() => {
      getMounts();
    });

    return {
      sortTable,
      toDetail,
      refreshList,
      mountList,
    };
  },
};
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
.mount_table_class tr:hover {
  cursor: pointer;
  background: #ededed;
}
</style>