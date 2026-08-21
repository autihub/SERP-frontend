<script setup lang="ts">
// 销售管理（一期：收银开单、销售流水、退货）
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>销售管理</span>
        <el-button type="primary" :icon="'Plus'" disabled>新建销售单</el-button>
      </div>
    </template>
    <el-empty description="销售管理模块开发中" />
  </el-card>
</template>

<style scoped lang="scss">
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
