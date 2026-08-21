<script setup lang="ts">
// 库存管理（一期：商品/原料库存查询、库存预警、库存盘点）
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>库存管理</span>
        <el-button type="primary" :icon="'Plus'" disabled>新增商品</el-button>
      </div>
    </template>
    <el-empty description="库存管理模块开发中" />
  </el-card>
</template>

<style scoped lang="scss">
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
