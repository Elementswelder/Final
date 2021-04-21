<template>
<div class="main">
  <h2>Logged in as: {{user.firstName}} {{user.lastName}}</h2>
  <button @click="logout" class="pure-button pure-button-primary">Logout</button>
  <h1>My Quiz</h1>
  <div>
</div>
<div v-for="quiz in quiz" v-bind:key="quiz.id">
  <div class="ticket">
    <div class="results">
      <h3><label><button @click="selectQuiz(quiz); eraseQuiz(findQuiz)">Delete</button></label> Quiz Completed at {{time(quiz.created)}}</h3>
      <p>{{quiz.need}}</p>
      <img :src="quiz.photo"/>
    </div>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: 'MyQuiz',
  data() {
    return {
      creating: false,
      need: '',
      quiz: [],
      findQuiz: null,
    }
  },
  created() {
    this.getQuiz();
  },
  methods: {
    selectQuiz(quiz) {
      this.findQuiz = quiz;
    },
    async eraseQuiz(findQuiz) {
      try {
        await axios.delete("/api/quiz/" + findQuiz._id);
        this.findQuiz = null;
        this.getQuiz();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
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
      time(d) {
        return moment(d).format('D MMMM YYYY, h:mm:ss a');
      },
      setCreating() {
    this.creating = true;
  },
  cancelCreating() {
    this.creating = false;
  },
  async addQuiz() {
      try {
        await axios.post("/api/quiz", {
          problem: this.problem
        });
        this.problem = "";
        this.creating = false;
        this.getQuiz();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
}
</script>


<style scoped>
textarea {
  width: 100%;
  max-width: 500px;
}

.results img {
  width: 500px;
  height: 500px;
}

h3 {
  font-size: 12px;
  font-weight: normal;
  background-color: #ccc;
  padding: 10px 20px;
}

label {
  color: black;
  padding: 5px;
  border-radius: 30px;
  font-size: 12px;
  margin-right: 10px;
}

.ticket {}
</style>
