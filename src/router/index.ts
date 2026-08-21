import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/stores/app'

// 路由表：一期模块 = 工作台 / 采购 / 库存 / 销售 / 经营分析
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        meta: { title: '工作台', icon: 'Odometer' },
      },
      {
        path: 'purchase',
        name: 'Purchase',
        component: () => import('@/views/purchase/Index.vue'),
        meta: { title: '采购管理', icon: 'ShoppingCart' },
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: () => import('@/views/inventory/Index.vue'),
        meta: { title: '库存管理', icon: 'Box' },
      },
      {
        path: 'sales',
        name: 'Sales',
        component: () => import('@/views/sales/Index.vue'),
        meta: { title: '销售管理', icon: 'Money' },
      },
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('@/views/analytics/Index.vue'),
        meta: { title: '经营分析', icon: 'TrendCharts' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/NotFound.vue'),
    meta: { title: '页面不存在' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _from, next) => {
  const appStore = useAppStore()
  const title = (to.meta.title as string) || ''
  document.title = title
    ? `${title} · ${appStore.appName}`
    : appStore.appName
  next()
})

export default router
