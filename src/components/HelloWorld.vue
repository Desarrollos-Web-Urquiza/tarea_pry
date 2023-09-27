<script setup lang="ts">
import useTask1 from '../composables/task1.ts';
import useTask2 from '../composables/task2.ts';
import useTask3 from '../composables/task3.ts'; // Asegúrate de importar el hook useTask3

import { ref } from 'vue'

const { createGreeting } = useTask1();
const { createList } = useTask2();
const { createGreeting2 } = useTask3();

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
  lastAccess: new Date("2023-08-09T12:15:56Z"),
  userData: "Mis datos de Usuario son:"
});

const listTask2Ref = ref(listTask2)

const greetingTask3 = createGreeting2({
  name: "Pepe",
  birthdayDate: new Date("1986-08-26"),
  role: "Administrador del sistema",
  workAreas: ["/usr/home", "/home"]
});

const greetingTask3Ref = ref(greetingTask3)

console.log('listTask2Ref', listTask2Ref);
console.log('greetingTask1', greetingTask1);
</script>

<template>
  <h1>TAREA 1</h1>
  <p>{{ greetingTask1Ref.presentation }} {{ greetingTask1Ref.identification }} {{ greetingTask1Ref.birthday }} {{ greetingTask1Ref.gender }}</p>
  <h1>TAREA 2</h1>
  <div>
    <p>{{ listTask2.userData }}</p>
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
  <p>{{ greetingTask3Ref.greeting }}</p>
  <ul>
    <li v-for="(value, key) in greetingTask3Ref.workAreas" :key="key">
      {{ value }}
    </li>
  </ul>
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
p {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
