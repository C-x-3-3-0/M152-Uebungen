<template>
  <div>
    <button @click="openDialog">Formular öffnen</button>
    <dialog ref="myDialog" :style="{ backgroundColor: theme }">
      <form>
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>

        <label for="vorname">Vorname:</label><br>
        <input type="text" id="vorname" name="vorname"><br>

        <label for="nachname">Nachname:</label><br>
        <input type="text" id="nachname" name="nachname"><br>

        <label for="email">E-Mail:</label><br>
        <input type="email" id="email" name="email"><br>

        <label for="strasse">Strasse:</label><br>
        <input type="text" id="strasse" name="strasse"><br>

        <label for="plz">PLZ:</label><br>
        <input type="text" id="plz" name="plz"><br>

        <label for="ort">Ort:</label><br>
        <input type="text" id="ort" name="ort"><br>

        <label for="password">Passwort:</label><br>
        <input type="password" id="password" name="password"><br>

        <label for="lehrjahr">Lehrjahr (1-3):</label><br>
        <input type="number" id="lehrjahr" name="lehrjahr" min="1" max="3"><br><br>

        <button type="submit">Senden</button>
      </form>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "#add8e6"
    };
  },
  methods: {
    openDialog() {
      this.$refs.myDialog.showModal();
    }
  }
};
</script>

<style scoped>
  dialog {
    border: none;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    font-family: sans-serif;
    font-size: 16px;
    text-align: center;
  }

  input {
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  button[type="submit"] {
    background-color: teal;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>
