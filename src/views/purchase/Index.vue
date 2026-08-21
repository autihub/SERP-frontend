<script setup lang="ts">
// 采购管理（一期：采购单录入、采购凭证上传与 OCR 识别、采购入库）
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>采购管理</span>
        <el-button type="primary" :icon="'Plus'" disabled>新建采购单</el-button>
      </div>
    </template>
    <el-empty description="采购管理模块开发中" />
  </el-card>
</template>

<style scoped lang="scss">
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
