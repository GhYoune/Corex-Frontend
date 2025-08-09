<template>
 <div>
  <h1 class="mt-3">{{ $t("onboarding.userObjective.headline") }}</h1>
 </div>
 <div
  v-for="(item, index) in objectives"
  :key="index"
  @click="selectedObjective = index"
  :class="[
   'content_wrapper p-4 my-2 transition-all duration-300',
   {
    'selected-card': selectedObjective === index,
   },
   item.class,
  ]">
  <div class="icon">{{ item.emoji }}</div>
  <div>
   <h3>{{ $t(item.headline) }}</h3>
   <p>{{ $t(item.sub) }}</p>
  </div>
 </div>
 <div class="nested_btns">
  <VBtn color="primary" class="rounded-lg next-btn" block @click="">{{
   $t("_next")
  }}</VBtn>
 </div>
</template>

<script setup lang="ts">
 import { ref } from "vue";
 import { useI18n } from "vue-i18n";

 const selectedObjective = ref<number | null>(null);
 const { t } = useI18n();
 const objectives = [
  {
   emoji: "🔥",
   headline: t("onboarding.userObjective.objectiveHeadline1"),
   sub: t("onboarding.userObjective.objectivesub1"),
   class: "fire",
  },
  {
   emoji: "💪",
   headline: t("onboarding.userObjective.objectiveHeadline2"),
   sub: t("onboarding.userObjective.objectivesub2"),
   class: "strength",
  },
  {
   emoji: "⚡",
   headline: t("onboarding.userObjective.objectiveHeadline3"),
   sub: t("onboarding.userObjective.objectivesub3"),
   class: "energy",
  },
  {
   emoji: "🎯",
   headline: t("onboarding.userObjective.objectiveHeadline4"),
   sub: t("onboarding.userObjective.objectivesub4"),
   class: "focus",
  },
 ];
</script>

<style lang="scss">
 .content_wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-surface);
  border-radius: 12px;
  padding: 12px;
  border: 2px solid var(--color-subtitle);
  transition: transform 0.3s ease, background-color 0.3s;

  .icon {
   padding: 20px;
   font-size: 26px;
   border-radius: 12px;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
  }

  &:hover {
   transform: scale(1.01);
   cursor: pointer;
  }
 }

 // Per-icon gradients
 .fire .icon {
  background: linear-gradient(135deg, #ff6a00, #ff3c00);
 }
 .strength .icon {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
 }
 .energy .icon {
  background: linear-gradient(135deg, #fceabb, #f8b500);
 }
 .focus .icon {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
 }

 // Dark mode override
 body.dark {
  .fire .icon {
   background: linear-gradient(135deg, #ff4e00, #ec008c);
  }
  .strength .icon {
   background: linear-gradient(135deg, #3a0ca3, #4361ee);
  }
  .energy .icon {
   background: linear-gradient(135deg, #ffe259, #ffa751);
  }
  .focus .icon {
   background: linear-gradient(135deg, #11998e, #38ef7d);
  }
 }

 // Selected style (on top of emoji gradient)
 .selected-card {
  transform: scale(1.03);
  background-color: rgba(162, 255, 3, 0.08); // subtle primary highlight
  border-color: var(--color-primary);
 }
</style>
