<script setup lang="ts">
import useTask1 from '../composables/task1.ts';
import useTask2 from '../composables/task2.ts';
import { ref } from 'vue'

const { createGreeting } = useTask1();
const { createList } = useTask2();

defineProps<{ msg: string }>()

const greetingTask1 = createGreeting({
  presentation: "Hola, me presento.",
  name: "PEPE",
  surname: "ARGENTO",
  birthdayDate: new Date("1982-08-26"),
  Gender: "Masculino"
});
const greetingTask1Ref = ref(greetingTask1)

const listTask2 = createList({
  name: "Pepe",
  surname: "Argento",
  birthdayDate: new Date("1982-08-26"),
  Gender: "Masculino",
  email: "email@email.com",
  role: "Admin",
  lastAccess: new Date("2023-08-09T12:15:56Z")
});

const listTask2Ref = ref(listTask2)

console.log('listTask2', listTask2);
console.log('greetingTask1', greetingTask1);
</script>

<template>
  <h1>TAREA 1</h1>
  <p>{{ greetingTask1Ref.presentation }} {{ greetingTask1Ref.identification }} {{ greetingTask1Ref.birthday }} {{ greetingTask1Ref.gender }}</p>
  <h1>TAREA 2</h1>
  <div>
    <ul>
      <li v-for="(value, key) in listTask2" :key="key">
        <!-- Si la clave es 'email', separa "Mi Email:" del valor y renderiza el email como un enlace -->
        <template v-if="key === 'email'">
          Mi Email: <a :href="'mailto:' + value.split(': ')[1]" style="color: #0969e1">{{ value.split(': ')[1] }}</a>
        </template>
        <template v-else>
          {{ value }}
        </template>
      </li>
    </ul>
  </div>
  <h1>TAREA 3</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
