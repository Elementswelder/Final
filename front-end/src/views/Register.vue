<template>
<div>
  <Admin v-if="user && user.role === 'admin'" />
  <MyQuiz v-else-if="user" />
  <Register v-else />
</div>
</template>

<script>
import Admin from '@/components/Admin.vue';
import axios from 'axios';
import Register from '@/components/Register.vue'
import MyQuiz from '@/components/MyQuiz.vue'
export default {
  name: 'home',
  components: {
    Register,
    MyQuiz,
    Admin
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
  }
}
</script>
