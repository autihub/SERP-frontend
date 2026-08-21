<script setup lang="ts">
import { ref } from 'vue'

// 占位指标（后续接 /analytics/overview）
const stats = ref([
  { label: '今日销售额', value: '¥ 0.00', icon: 'Money', color: '#409eff' },
  { label: '今日订单', value: '0', icon: 'Document', color: '#67c23a' },
  { label: '库存预警', value: '0', icon: 'Warning', color: '#e6a23c' },
  { label: '在售商品', value: '0', icon: 'Goods', color: '#f56c6c' },
])
</script>

<template>
  <div class="dashboard">
    <el-row :gutter="16">
      <el-col v-for="s in stats" :key="s.label" :xs="12" :sm="12" :md="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat">
            <el-icon class="stat-icon" :style="{ background: s.color }">
              <component :is="s.icon" />
            </el-icon>
            <div class="stat-info">
              <div class="stat-value">{{ s.value }}</div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card shadow="never" class="welcome">
      <template #header>
        <span>工作台</span>
      </template>
      <el-empty description="欢迎使用山海雪冰进销存系统，功能开发中" />
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stat-card {
  .stat {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    color: #fff;
    font-size: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .stat-value {
    font-size: 22px;
    font-weight: 600;
    color: #303133;
  }

  .stat-label {
    font-size: 13px;
    color: #909399;
    margin-top: 2px;
  }
}
</style>
