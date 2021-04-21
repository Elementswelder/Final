<template>
<div class="main">
  <h2>Logged in as: {{user.firstName}} {{user.lastName}} <button @click="logout" class="pure-button pure-button-primary">Logout</button></h2>
  <h1>Administration</h1>
  <div v-for="quiz in quiz" v-bind:key="quiz.id">
    <AllQuiz :quiz="quiz" />
  </div>
</div>
</template>


<script>
import axios from 'axios';
import AllQuiz from '@/components/AllQuiz.vue';
export default {
  name: 'Admin',
  components: {
    AllQuiz,
  },
  data() {
    return {
      quiz: [],
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  created() {
    this.getQuiz();
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getQuiz() {
      try {
        let response = await axios.get("/api/quiz");
        this.quiz = response.data.quiz;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
