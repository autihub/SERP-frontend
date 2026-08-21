<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import * as Icons from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

// 从路由表读取菜单项
const menuItems = computed(() =>
  router.options.routes
    .flatMap((r) => r.children ?? [])
    .filter((r) => r.meta?.title)
    .map((r) => ({
      path: r.path,
      title: r.meta!.title as string,
      icon: r.meta!.icon as string,
    })),
)

const activeMenu = computed(() => '/' + (route.path.split('/')[1] || 'dashboard'))

function handleSelect(index: string) {
  router.push(index)
}
</script>

<template>
  <el-container class="layout">
    <!-- 侧边栏 -->
    <el-aside :width="appStore.sidebarCollapsed ? 'var(--app-sidebar-collapsed-width)' : 'var(--app-sidebar-width)'">
      <div class="logo">
        <span v-if="!appStore.sidebarCollapsed">🏔️ 山海雪冰</span>
        <span v-else>🏔️</span>
      </div>
      <el-menu
        :default-active="activeMenu"
        :collapse="appStore.sidebarCollapsed"
        :collapse-transition="false"
        background-color="#001529"
        text-color="#cfd8e3"
        active-text-color="#ffffff"
        @select="handleSelect"
      >
        <el-menu-item v-for="item in menuItems" :key="item.path" :index="'/' + item.path">
          <el-icon><component :is="(Icons as Record<string, unknown>)[item.icon]" /></el-icon>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 顶部 -->
      <el-header class="header">
        <el-icon class="collapse-btn" @click="appStore.toggleSidebar()">
          <component :is="appStore.sidebarCollapsed ? 'Expand' : 'Fold'" />
        </el-icon>
        <span class="header-title">{{ appStore.appName }}</span>
      </el-header>

      <!-- 内容区 -->
      <el-main class="main">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
}

.el-aside {
  background: #001529;
  transition: width 0.25s;
  overflow: hidden;

  .logo {
    height: var(--app-header-height);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  :deep(.el-menu) {
    border-right: none;
  }
}

.header {
  height: var(--app-header-height);
  background: var(--app-content-bg);
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #ebeef5;
  padding: 0 16px;

  .collapse-btn {
    font-size: 20px;
    cursor: pointer;
    color: #606266;

    &:hover {
      color: #409eff;
    }
  }

  .header-title {
    font-size: 15px;
    color: #303133;
    font-weight: 500;
  }
}

.main {
  background: var(--app-bg);
  padding: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
