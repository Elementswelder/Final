<template>
  <div>
    <QuizPage v-if="user" />
    <RegisterQuiz v-else />
  </div>
</template>

<script>
import RegisterQuiz from "@/components/RegisterQuiz.vue";
import QuizPage from "@/components/QuizPage.vue";
import axios from 'axios';
export default {
  name: 'Quiz',
  components: {
    RegisterQuiz,
    QuizPage,
  },
  async created() {
  try {
    let response = await axios.get('/api/users');
    this.$root.$data.user = response.data.user;
  } catch (error) {
    this.$root.$data.user = null;
  }
},
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
}
</script>
