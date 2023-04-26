<template>
  <div class="container">
    <Button :class="Background" :id="Text"
      >{{ Text }} auf {{ Background }}</Button
    >

    <h1>Hintergrund</h1>
    <p @click="Background = 'c1'">Grün</p>
    <p @click="Background = 'c2'">Gelb</p>
    <p @click="Background = 'c3'">Blau</p>
    <p @click="Background = 'c4'">Rot</p>
    <p @click="Background = 'c5'">Schwarz</p>
    <p @click="Background = 'c6'">Weiss</p>

    <h1>Text</h1>
    <p @click="Text = 'c1'">Grün</p>
    <p @click="Text = 'c2'">Gelb</p>
    <p @click="Text = 'c3'">Blau</p>
    <p @click="Text = 'c4'">Rot</p>
    <p @click="Text = 'c5'">Schwarz</p>
    <p @click="Text = 'c6'">Weiss</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const Background = ref("");
const Text = ref("");
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.c1 {
  background-color: green;
}
.c2 {
  background-color: red;
}
.c3 {
  background-color: yellow;
}
.c4 {
  background-color: blue;
}
.c5 {
  background-color: black;
}
.c6 {
  background-color: white;
}

#c1 {
  color: green;
}
#c2 {
  color: red;
}
#c3 {
  color: yellow;
}
#c4 {
  color: blue;
}
#c5 {
  color: black;
}
#c6 {
  color: white;
}
</style>
