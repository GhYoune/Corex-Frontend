<template>
 <div>
  <h1 class="mt-3">{{ $t("onboarding.userObjective.headline") }}</h1>
  <div>
   <div class="content_wrapper p-4 my-2">
    <div class="icon">🔥</div>
    <div>
     <h3>{{ $t("onboarding.userObjective.objectiveHeadline1") }}</h3>
     <p>{{ $t("onboarding.userObjective.objectivesub1") }}</p>
    </div>
   </div>
  </div>
  <div>
   <div class="content_wrapper p-4 my-2">
    <div class="icon">🔥</div>
    <div>
     <h3>{{ $t("onboarding.userObjective.objectiveHeadline1") }}</h3>
     <p>{{ $t("onboarding.userObjective.objectivesub1") }}</p>
    </div>
   </div>
  </div>
  <div>
   <div class="content_wrapper p-4 my-2">
    <div class="icon">🔥</div>
    <div>
     <h3>{{ $t("onboarding.userObjective.objectiveHeadline1") }}</h3>
     <p>{{ $t("onboarding.userObjective.objectivesub1") }}</p>
    </div>
   </div>
  </div>
  <div>
   <div class="content_wrapper p-4 my-2">
    <div class="icon">🔥</div>
    <div>
     <h3>{{ $t("onboarding.userObjective.objectiveHeadline1") }}</h3>
     <p>{{ $t("onboarding.userObjective.objectivesub1") }}</p>
    </div>
   </div>
  </div>
  <div class="nested_btns">
   <VBtn
    color="primary"
    class="rounded-lg next-btn"
    block
    @click=""
    >{{ $t("_next") }}</VBtn
   >
  </div>
 </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
 .content_wrapper {
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: var(--color-surface);
  border-radius: 12px;
  padding: 12px;
  border: 2px solid var(--color-subtitle);

  h2 {
   color: var(--color-subtitle);
   font-weight: 500;
   font-size: 1.25rem;
  }

  .icon {
   padding: 20px;
   background-color: lightcoral; // optional
   font-size: 26px;
   border-radius: 12px;
  }
 }
</style>
