<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Beschreibung</th>
          <th>Eingang</th>
          <th>Ausgang</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in log" :key="item.id">
          <td>{{ item.text }}</td>
          <td v-if="item.value > 0" class="income">{{ roundValue(item.value) }}</td>
          <td v-else></td>
          <td v-if="item.value < 0" class="expense">{{ roundValue(-item.value) }}</td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const log = ref([
  {
    id: 1,
    text: 'Startsaldo',
    value: 1500
  },
  {
    id: 2,
    text: 'Bus-Abo',
    value: -79
  },
  {
    id: 3,
    text: 'PC',
    value: -799
  },
  {
    id: 4,
    text: 'Nebenjob',
    value: 500
  },
  {
    id: 5,
    text: 'Essen-Ausgaben',
    value: -400
  },
  {
    id: 6,
    text: 'Lohn',
    value: 2500
  }
]);

const currentId = ref(6);

function roundValue(value) {
  return (Math.round(value * 20) / 20).toFixed(2) + ' CHF';
}
</script>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.income {
  color: green;
}

.expense {
  color: red;
}
</style>
