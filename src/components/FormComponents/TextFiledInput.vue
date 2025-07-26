<template>
 <div class="mt-6 d-flex flex-column">
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
 </div>
</template>

<script setup lang="ts">
 import { ref } from "vue";
 import type { User } from "../../model/User";
 import DateInput from "./DateInput.vue";
 const modelValue = defineModel<User>();
 const firstName = ref<string>("");
 const lastName = ref<string>("");

 const fullNameAssemble = () => {
  if (modelValue.value) {
   modelValue.value.name = `${firstName.value} ${lastName.value}`.trim();
  }
 };
</script>

<style lang="scss"></style>
