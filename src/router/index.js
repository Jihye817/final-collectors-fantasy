import { createRouter, createWebHistory } from 'vue-router';
import MountList from '../views/mounts/Index.vue';
import MountDetail from '../views/mounts/Detail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'MountList',
      component: MountList,
    },
    {
      path: '/detail',
      name: 'MountDetail',
      component: MountDetail,
    }
  ]
});
export default router;