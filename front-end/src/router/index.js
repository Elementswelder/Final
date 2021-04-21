import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Register from '../views/Register.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/',
  name: "Quiz",
  component: Quiz
},
{
  path: '/',
  name: "Register",
  component: Register
},
{
  path: '/',
  name: "Results",
  component: Results
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
