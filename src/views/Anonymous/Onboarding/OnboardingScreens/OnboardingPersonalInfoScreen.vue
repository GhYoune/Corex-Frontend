<template>
 <div class="wrapper_inputs">
  <h1 class="mt-3">{{ $t("onboarding.userInfo.headline") }}</h1>

  <div class="mt-6 d-flex flex-column inputs">
   <v-text-field
    :label="$t('_firstName')"
    v-model="firstName"
    @input="fullNameAssemble"
    clearable
    variant="outlined"
    :error="!!errors.firstName"
    :error-messages="errors.firstName ? [errors.firstName] : []"
    class="form-field"></v-text-field>
   <v-text-field
    :label="$t('_lastName')"
    v-model="lastName"
    @input="fullNameAssemble"
    clearable
    variant="outlined"
    :error="!!errors.lastName"
    :error-messages="errors.lastName ? [errors.lastName] : []"
    class="form-field"></v-text-field>

   <DateInput v-model="age" />

   <ChipForm />

   <div class="d-flex justify-space-evenly w-100 py-4">
    <v-text-field
     type="number"
     :label="$t('_height')"
     variant="outlined"
     v-model="height"
     clearable
     class="ma-2 flex-grow-1 text-center"
     :style="{
      height: '50px',
     }"
     :error="!!errors.height_cm"
     :error-messages="errors.height_cm ? [errors.height_cm] : []" />

    <v-text-field
     type="number"
     :label="$t('_weight')"
     v-model="weight"
     variant="outlined"
     clearable
     class="ma-2 flex-grow-1 text-center"
     :style="{
      height: '50px',
     }"
     :error="!!errors.weight_kg"
     :error-messages="errors.weight_kg ? [errors.weight_kg] : []" />
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
 import type z from "zod";

 const modelValue = defineModel<User>();
 const firstName = ref<string>("");
 const lastName = ref<string>("");
 const age = ref<Date>();
 const height = ref<number>(0);
 const weight = ref<number>(0);

 const onboarding = inject("onboarding") as any;

 const validate = formValidationSchema();
 const errors = ref<
  Partial<
   Record<keyof z.infer<ReturnType<typeof formValidationSchema>>, string>
  >
 >({});
 const validation = () => {
  const result = validate.safeParse({
   firstName: firstName.value,
   lastName: lastName.value,
   age: age.value,
   height_cm: height.value,
   weight_kg: weight.value,
   // email: email.value,
   // password: password.value,
   // activity_level: activityLevel.value,
   // goal_type: goalType.value,
   // is_premium: isPremium.value,
   // first_timer: firstTimer.value,
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

   .form-field {
    margin-bottom: 20px;
    transition: all 0.3s ease;

    .v-input--has-state.v-input--error {
     border-radius: 8px;
     box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.3);
    }

    .v-messages__message {
     font-size: 0.9rem;
     color: #ff5252;
     font-weight: 500;
     margin-top: 4px;
    }
   }
  }

  .nested_btns {
   position: absolute;
   width: 100%;
   bottom: 50px;
  }
  .v-messages__message {
   animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
   0% {
    opacity: 0;
    transform: translateY(-4px);
   }
   100% {
    opacity: 1;
    transform: translateY(0);
   }
  }
 }
</style>
