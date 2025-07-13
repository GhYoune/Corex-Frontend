<template>
 <v-window v-model="currentStepIndex" :touch="false">
  <v-window-item v-for="(screen, i) in screens" :key="i">
   <OnboardingScreens
    :icon="screen.icon"
    :title="screen.mainHeadLine"
    :secondary-title="screen.secondaryHeadLine"
    :description="screen.description" />
  </v-window-item>
 </v-window>
</template>

<script setup lang="ts">
 import { provide } from "vue";
 import { useOnboarding } from "../../../composables/onboarding/useOnboarding";
 import OnboardingScreens from "./OnboardingScreens/OnboardingScreens.vue";

 const { screens, currentStepIndex, nextScreen, previousScreen } =
  useOnboarding();
 provide("onboarding", {
  screens,
  currentStepIndex,
  nextScreen,
  previousScreen,
 });
</script>

<style lang="scss"></style>
