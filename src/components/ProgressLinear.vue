<template>
 <v-progress-linear
  color="primary"
  :model-value="props.progress"
  :height="8"
  rounded></v-progress-linear>
</template>

<script setup lang="ts">
 const props = defineProps<{
  progress: number;
 }>();
</script>

<style lang="scss"></style>
