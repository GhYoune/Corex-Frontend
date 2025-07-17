<template>
 <div class="onboarding_wrapper d-flex flex-column align-center">
  <v-icon size="128" color="primary" :icon="icon" class="nested_icon" />
  <div class="d-flex justify-center align-center flex-column card_wrapper">
   <h1 class="text-lg-h1">
    {{ title }}
   </h1>
   <h2 class="text-primary text-center py-1">
    {{ secondaryTitle }}
   </h2>
   <p class="text-center py-1">
    {{ description }}
   </p>
  </div>
  <div class="nested_btns">
   <VBtn color="primary" block @click="onboarding.nextScreen()">{{
    $t("_next")
   }}</VBtn>
  </div>
 </div>
</template>

<script setup lang="ts">
 import { inject } from "vue";

 defineProps<{
  title?: string;
  secondaryTitle?: string;
  icon?: string;
  description?: string;
 }>();

 const onboarding = inject("onboarding") as any;
</script>

<style lang="scss">
 .onboarding_wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: calc(100vh - 30px);
  .nested_icon {
   flex: 1 0 auto;
  }
  .card_wrapper {
   flex: 1 0 auto; // Takes remaining space but won’t force scroll
   overflow: hidden;
  }
  .nested_btns {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   padding: 10px;
  }
 }
</style>
