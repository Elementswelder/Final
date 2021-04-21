<template>
<div class="ticket">
  <div class="problem">
    <h3>Problem reported {{time(quiz.created)}}</h3>
    <p>{{quiz.need}}</p>
    <p v-if="quiz.response"><i>{{quiz.response}}</i></p>
    <p v-else>
    </p>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: "Ticket",
  props: {
    ticket: Object,
  },
  data() {
    return {
      response: '',
      error: ''
    }
  },
  methods: {
    time(d) {
      return moment(d).format('D MMMM YYYY, h:mm:ss a');
    },
    async respond() {
      try {
        let response = await axios.put('/api/quiz/' + this.quiz._id, {
          response: this.response,
        });
        this.quiz = response.data.quiz;
      } catch (error) {
        this.error = error.response.message;
      }
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 12px;
  font-weight: normal;
  background-color: #ccc;
  padding: 10px 20px;
}

label {
  background-color: #000;
  color: white;
  padding: 5px;
  border-radius: 30px;
  font-size: 12px;
  margin-right: 10px;
}

input {
  margin-right: 10px;
}
</style>
