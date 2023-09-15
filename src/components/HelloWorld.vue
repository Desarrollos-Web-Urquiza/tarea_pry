<script setup lang="ts">
import useTask1 from '../composables/task1.ts';
import { ref } from 'vue'

const { createGreeting } = useTask1();

defineProps<{ msg: string }>()

const greetingTask1 = createGreeting({
  presentation: "Hola, me presento.",
  name: "PEPE",
  surname: "ARGENTO",
  birthdayDate: new Date("1982-08-26"),
  Gender: "Masculino"
});
const greetingTask1Ref = ref(greetingTask1)

console.log('greetingTask1', greetingTask1);
</script>

<template>
  <h1>TAREA 1</h1>
  <p>{{ greetingTask1Ref.presentation }} {{ greetingTask1Ref.identification }} {{ greetingTask1Ref.birthday }} {{ greetingTask1Ref.gender }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
