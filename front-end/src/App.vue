<template>
<div id="app">
  <div class="header">
    <div class="brand">
        <router-link :to="{ name: 'Home'}"><h1>Wellness Crusaders</h1></router-link>
        <router-link :to="{ name: 'Quiz'}"><h2>Quiz</h2></router-link>
        <router-link v-if="user" :to="{ name: 'Register'}"><h2>My Account</h2></router-link>
        <router-link v-else :to="{ name: 'Register'}"><h2>Register/Log-In</h2></router-link>

    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
  <p><a href="https://github.com/Elementswelder/Final.git">Github (10.5 hours)</a></p>
</div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script:wght@600&display=swap');
body {
  margin: 0px;
  background: white;
}

#app {
  font-family: 'Abel', sans-serif;
}

.brand {
  color: white;
  display: flex;
  background: black;
  padding: 10px 50px;
}

.brand h1 {
  display: inline-block;
  background: black;
  padding: 10px;
  border-radius: 20px;
  font-size: 24px;
}

.brand h2 {
  font-size: 20px;
  padding: 10px;
  margin-top: 18px;
}

.main {
  padding: 20px 100px;
}

.pure-button {
  font-size: 10px;
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 20px;
}

.space-right {
  margin-right: 10px;
}

a {
  color: #33ccff;
}

.pure-button-primary {
  background-color: #33ccff;
  color: #333;
  border-radius: 30px;
}

.footer {
  position: fixed;
  margin: auto;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: black;
  text-align: center;
  border-radius: 1px solid black;
}
</style>
