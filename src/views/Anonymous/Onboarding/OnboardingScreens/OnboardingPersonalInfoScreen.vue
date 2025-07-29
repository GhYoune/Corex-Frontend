<template>
 <div class="wrapper_inputs">
  <h1 class="mt-3">{{ $t("onboarding.userInfo.headline") }}</h1>

  <div class="mt-6 d-flex flex-column inputs">
   <v-text-field
    :label="$t('_firstName')"
    v-model="firstName"
    @input="fullNameAssemble"
    clearable
    variant="outlined"></v-text-field>

   <v-text-field
    :label="$t('_lastName')"
    v-model="lastName"
    @input="fullNameAssemble"
    clearable
    variant="outlined"></v-text-field>

   <DateInput />

   <ChipForm />

   <div class="d-flex justify-space-evenly w-100 py-4">
    <v-text-field
     type="number"
     :label="$t('_height')"
     variant="outlined"
     clearable
     class="ma-2 flex-grow-1 text-center"
     :style="{
      height: '50px',
     }" />

    <v-text-field
     type="number"
     :label="$t('_weight')"
     variant="outlined"
     clearable
     class="ma-2 flex-grow-1 text-center"
     :style="{
      height: '50px',
     }" />
   </div>
  </div>
  <div class="nested_btns">
   <VBtn
    color="primary"
    class="rounded-lg next-btn"
    block
    @click="validation"
    >{{ $t("_next") }}</VBtn
   >
  </div>
 </div>
</template>

<script setup lang="ts">
 import { inject, ref } from "vue";
 import type { User } from "../../../../model/User";
 import ChipForm from "@/components/FormComponents/common/ChipForm.vue";
 import DateInput from "@/components/FormComponents/common/DateInput.vue";
 import { formValidationSchema } from "@/composables/app/formValidationSchema";

 const modelValue = defineModel<User>();
 const firstName = ref<string>("");
 const lastName = ref<string>("");
 const onboarding = inject("onboarding") as any;
 const errors = ref<{ firstName?: string; lastName?: string }>({});

 const validate = formValidationSchema();
 const validation = () => {
  const result = validate.safeParse({
   firstName: firstName.value,
   lastName: lastName.value,
  });
  if (!result.success) {
   errors.value = {};
   for (const issue of result.error.issues) {
    errors.value[issue.path[0] as keyof typeof errors.value] = issue.message;
   }
   return false;
  } else {
   errors.value = {};
   return true;
  }
 };
 const fullNameAssemble = () => {
  if (modelValue.value) {
   modelValue.value.name = `${firstName.value} ${lastName.value}`.trim();
  }
 };
</script>

<style lang="scss">
 .wrapper_inputs {
  display: flex;
  flex-direction: column;
  height: 100vh;
  h1 {
   font-size: 26px;
   margin-top: 10px;
   flex-shrink: 1;
  }
  .inputs {
   flex-shrink: 1;
  }
  .nested_btns {
   position: absolute;
   width: 100%;
   bottom: 50px;
  }
 }
</style>
