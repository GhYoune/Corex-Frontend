<template>
 <v-chip-group
  v-model="gender"
  column
  class="w-100 d-flex justify-space-evenly">
  <v-chip
   value="male"
   class="ma-2 flex-grow-1 d-flex justify-center align-center"
   :style="{
    backgroundColor: gender === 'male' ? '#2196f3' : '#e3f2fd',
    color: gender === 'male' ? 'white' : '#0d47a1',
    height: '50px',
    fontWeight: 'bold',
   }">
   {{ $t("_male") }}
  </v-chip>

  <v-chip
   value="female"
   class="ma-2 flex-grow-1 d-flex justify-center align-center"
   :style="{
    backgroundColor: gender === 'female' ? '#e91e63' : '#fce4ec',
    color: gender === 'female' ? 'white' : '#880e4f',
    height: '50px',
    fontWeight: 'bold',
   }">
   {{ $t("_female") }}
  </v-chip>
 </v-chip-group>
</template>

<script setup>
 import { ref } from "vue";

 const gender = ref("");
</script>
