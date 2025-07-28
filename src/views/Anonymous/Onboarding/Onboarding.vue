<template>
 <ProgressLinear :progress="progress" />
 <v-window v-model="currentStepIndex" :touch="false" >
  <v-window-item v-for="(screen, i) in screens" :key="i">
   <OnboardingScreens
    :icon="screen.icon"
    :title="screen.mainHeadLine"
    :secondary-title="screen.secondaryHeadLine"
    :description="screen.description" />
  </v-window-item>
  <v-window-item
   v-for="(screenInput, i) in formInputScreens"
   :key="'form-' + i">
   <component :is="screenInput.component" v-model="formInputs" />
  </v-window-item>
 </v-window>
</template>

<script setup lang="ts">
 import { onMounted, provide } from "vue";
 import { useOnboarding } from "../../../composables/onboarding/useOnboarding";
 import OnboardingScreens from "./OnboardingScreens/OnboardingScreens.vue";
 import ProgressLinear from "../../../components/ProgressLinear.vue";

 const {
  screens,
  currentStepIndex,
  nextScreen,
  previousScreen,
  progress,
  formInputScreens,
  formInputs,
 } = useOnboarding();
 provide("onboarding", {
  screens,
  currentStepIndex,
  nextScreen,
  previousScreen,
 });
 onMounted(() => {
  console.log(screens.length);
 });
</script>

<style lang="scss"></style>
