<template>
  <div class="login-page">
    <div class="form">
      <form class="login-form" @submit.prevent="login">
        <h2 style="color: #1f263e; font-family:Helvetica; font-size: 25px; font-weight: 400; font-weight:bold">¡Bienvenidos a Culqi!</h2>
        <input type="text" placeholder="Usuario" id="user" v-model="username" required />
        <input type="password" placeholder="Contraseña" id="password" v-model="password" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #0B0B0B;
}

.login-page {
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}

.form {
  position: relative;
  filter: drop-shadow(0 0 2px #000000);
  border-radius: 5px;
  width: 360px;
  height: 420px;
  background-color: #ffffff;
  padding: 40px;
}

.form img {
  position: absolute;
  height: 20px;
  top: 230px;
  right: 60px;
  cursor: pointer;
}

.form input {
  outline: 0;
  background: #f2f2f2;
  border-radius: 4px;
  width: 100%;
  border: 0;
  margin: 15px 0;
  padding: 15px;
  font-size: 14px;
}

.form input:focus {
  box-shadow: 0 0 5px 0 rgba(106, 98, 210);
}

span {
  color: red;
  margin: 10px 0;
  font-size: 14px;
}

.form button {
  outline: 0;
  background: #763383;
  width: 100%;
  border: 0;
  margin-top: 10px;
  border-radius: 3px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 15px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

.form button:hover,
.form button:active,
.form button:focus {
  background: black;
  color: #fff;
}

.message {
  margin: 15px 0;
  text-align: center;
}

.form .message a {
  font-size: 14px;
  color: #763383;
  text-decoration: none;
}
</style>

<script>
import Login from './Login.js';

export default {
  setup() {
    return Login.setup();
  },
};
</script>