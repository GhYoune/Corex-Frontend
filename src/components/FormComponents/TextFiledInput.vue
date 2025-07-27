<template>
 <h1 class="text-primary mt-3">Let's start with your Personal info</h1>

 <div class="mt-6 d-flex flex-column wrapper_inputs">
  <v-text-field
   :label="$t('_firstName')"
   v-model="firstName"
   @input="fullNameAssemble"
   variant="outlined"></v-text-field>
  <v-text-field
   :label="$t('_lastName')"
   v-model="lastName"
   @input="fullNameAssemble"
   variant="outlined"></v-text-field>
  <DateInput />
  <ChipForm />
  <
  <div class="d-flex justify-space-evenly w-100">
   <v-text-field
    type="number"
    label="Height (cm)"
    variant="outlined"
    class="ma-2 flex-grow-1 text-center"
    :style="{
     height: '50px',
    }"
    density="compact"
    hide-details
    single-line />

   <v-text-field
    type="number"
    label="Weight (kg)"
    variant="outlined"
    class="ma-2 flex-grow-1 text-center"
    :style="{
     height: '50px',
    }"
    density="compact"
    hide-details
    single-line />
  </div>
  <div class="nested_btns">
   <VBtn color="primary" block @click="onboarding.nextScreen()">{{
    $t("_next")
   }}</VBtn>
  </div>
 </div>
</template>

<script setup lang="ts">
 import { inject, ref } from "vue";
 import type { User } from "../../model/User";
 import DateInput from "./common/DateInput.vue";
 import ChipForm from "./common/ChipForm.vue";
 const modelValue = defineModel<User>();
 const firstName = ref<string>("");
 const lastName = ref<string>("");
 const onboarding = inject("onboarding") as any;

 const fullNameAssemble = () => {
  if (modelValue.value) {
   modelValue.value.name = `${firstName.value} ${lastName.value}`.trim();
  }
 };
</script>

<style lang="scss">
 .wrapper_inputs {
  display: block;
  overflow: hidden;

  .nested_btns {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   padding: 10px;
  }
 }
</style>
