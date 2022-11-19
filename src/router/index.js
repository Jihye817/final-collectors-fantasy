import { createRouter, createWebHistory } from 'vue-router';
import MountList from '../views/mounts/Index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'MountList',
      component: MountList,
    }
  ]
});
export default router;