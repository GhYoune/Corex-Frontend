<template>
 <v-menu
  v-model="menu"
  :close-on-content-click="false"
  transition="scale-transition"
  offset-y
  min-width="auto">
  <template #activator="{ props }">
   <v-text-field
    v-bind="props"
    v-model="formattedDate"
    label="Select a date"
    readonly
    variant="outlined"></v-text-field>
  </template>

  <v-date-picker
   v-model="date"
   @update:model-value="updateDate"
   color="primary"></v-date-picker>
 </v-menu>
</template>

<script setup>
 import { ref, watch } from "vue";

 const date = ref(null);
 const menu = ref(false);

 const formattedDate = ref("");

 const updateDate = (val) => {
  formattedDate.value = new Date(val).toLocaleDateString();
  menu.value = false;
 };
</script>
