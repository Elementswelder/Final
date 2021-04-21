<template>
<div class="main">
  <center><h1>The results are in!</h1></center>
  <center><p v-if="this.options[number].food">According to your quiz results you need more....</p>
  <p v-else>According to your quiz results you need....</p></center>
  <div>
    <div class='results'>
  <center>  <p> {{ this.options[number].text }} </p></center>
  <center><span> {{ this.options[this.number].quote }} </span></center>

  <center><button @click.once="setCreating(); created()">Save Your Results</button></center>
      <center><img :src="createdNew()"/></center>
    </div>
</div>
<center><h2>Not {{user.firstName}} {{user.lastName}}? <button @click="logout" class="pure-button pure-button-primary">Logout</button></h2></center>
<div class='whitespace'>
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
      number: 0,
      creating: false,
      need: '',
      photo: '',
      quiz: [],
      options: [
        {
          value: 0,
          text: "Zero",
          food: false,
        },
        {
          value: 1,
          text: "Apples",
          food: true,
          quote: "An Apple a day keeps the doctor away!",
          pic: "/images/1.jpg"
        },
        {
          value: 2,
          text: "Oranges",
          food: true,
          quote: "Orange you glad you did this test!!",
          pic: "/images/2.jpg"
        },
        {
          value: 3,
          text: "Push-Ups",
          food: false,
          quote: "Exercise is the best medicine...it goes something like that...We think...",
          pic: "/images/3.jpg"
        },
        {
          value: 4,
          text: "Vitamin D",
          food: true,
          quote: "The sun gives you happiness, unless you live in the desert, then it just brings misery :(",
          pic: "/images/4.jpg"
        },
        {
          value: 5,
          text: "Pie",
          food: true,
          quote: "An apple pie counts as keeping the doctor away, right?",
          pic: "/images/5.jpg"
        },

        {
          value: 6,
          text: "Chia Seeds",
          food: true,
          quote: "They sorta taste like watermelons and are really good for you!",
          pic: "/images/6.jpg"
        },
        {
          value: 7,
          text: "Swag",
          food: false,
          quote: "Sometimes to really get in shape you just need a good dose of SWAG!",
          pic: "/images/7.jpg",
        },
        {
          value: 8,
          text: "Marvel Movies",
          food: false,
          quote: "Studies have shown, that by watching Captain America's biceps in action, your brain will actually prompt you to feel bad that you don't have some as big",
          pic: "/images/8.jpg",
        },
        {
          value: 9,
          text: "Meditation",
          food: false,
          quote: "Focus on the breath and nothing else matters!",
          pic: "/images/9.jpg",
        },
        {
          value: 10,
          text: "Fast Food",
          food: true,
          quote: "Sometimes in order to get healthy you need to become unhealthy first. If you're at this level, we praise you then encourage you to eat out so we can get you back to where you were.",
          pic: "/images/10.jpg",
        },
      ]
    }
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
      time(d) {
        return moment(d).format('D MMMM YYYY, h:mm:ss a');
      },
      createdNew() {
        let random = Math.ceil(Math.random()*10);
        this.number = random;
        return "/images/" + random + ".jpg";
      },
      setCreating() {
    this.creating = true;
  },
  cancelCreating() {
    this.creating = false;
  },
  async created() {
      try {
        console.log("ADDING QUIZ");
        await axios.post("/api/quiz", {
          need: this.options[this.number].text,
          photo: this.options[this.number].pic
        });
        console.log("Posted");
        this.need = "";
        this.photo = "";
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

.main {
  margin: 0 auto;
  justify-content: center !important;
}

.main h1 {
  font-size: 36px;
}
.results {
  margin: 10px;
}

.results p {
  font-weight: bold;
  font-size: 30px;
}

.results span {
  font-size: 20px;
}

.results img {
  padding-top: 50px;
  height: 500px;
  width: 500px;
}

.whitespace {
  padding: 10px;
}

</style>
