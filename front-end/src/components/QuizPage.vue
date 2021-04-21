<template>
    <div>
        <vue-poll v-bind="options" @click="addVote"/>
        <vue-poll v-bind="optionsTwo" @click="addVote"/>
        <vue-poll v-bind="optionsThree" @click="addVote"/>
        <vue-poll v-bind="optionsFour" @click="addVote"/>
        <vue-poll v-bind="optionsFive" @click="addVote"/>

    <div>
      <router-link :to="{ name: 'Results'}"><center><button class="button" @click="button">Submit</button></center></router-link>
    </div>
        <div class="whitespace">
        </div>
    </div>
</template>

<script>

    import VuePoll from 'vue-poll'

    export default {
        data() {
            return {
                options: {
                  chosen: false,
                    question: 'How often do you eat out?',
                    answers: [
                        { value: 1, text: 'Once a day', votes: 0, showResults: false },
                        { value: 2, text: 'Couple times a week', votes: 0 },
                        { value: 3, text: 'Once a week', votes: 0 },
                        { value: 4, text: 'Once a month', votes: 0 },
                        { value: 5, text: 'Never', votes: 0},
                    ],
                },
                optionsTwo: {
                  chosen: false,
                    question: 'Are you taking any supplements currently?',
                    answers: [
                        { value: 1, text: 'Yes', votes: 0 },
                        { value: 2, text: 'No', votes: 0 },
                    ],
                },
                optionsThree: {
                  chosen: false,
                    question: "What's your favorite fruit(out of these choices)?",
                    answers: [
                        { value: 1, text: 'Apples', votes: 0, showResults: false },
                        { value: 2, text: 'Oranges', votes: 0 },
                        { value: 3, text: 'Bananas', votes: 0 },
                        { value: 4, text: 'Pinapples', votes: 0 },
                        { value: 5, text: 'Grapes', votes: 0},
                    ],
                },
                optionsFour: {
                  chosen: false,
                    question: 'Who is your favorite superhero? (Yes this is relevent)',
                    answers: [
                        { value: 1, text: 'IronMan', votes: 0, showResults: false },
                        { value: 2, text: 'Superman', votes: 0 },
                        { value: 3, text: 'Batman', votes: 0 },
                        { value: 4, text: 'Captain America', votes: 0 },
                        { value: 5, text: "I don't like any of them", votes: 0},
                    ],
                },
                optionsFive: {
                  chosen: false,
                    question: 'Do you want to be healthier?',
                    answers: [
                        { value: 1, text: 'No', votes: 0, showResults: false },
                        { value: 2, text: 'Yes', votes: 0 },
                    ],
                },
            }
        },
        components: {
            VuePoll
        },
        methods: {
            addVote(obj){
                console.log('You voted ' + obj.value + '!');
            },
            button () {
              console.log("clicked");
            }
        }
    }
</script>

<style scoped>

.whitespace {
  margin: 100px;
}

.button {
  font-weight: bold;
  justify-content: center;
  width: 50%;
  height: 50px;
}

</style>
