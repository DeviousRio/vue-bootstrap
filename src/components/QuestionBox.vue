<template>
  <div class="question-box-container">
    <b-jumbotron class="text-center">
      <template slot="lead">
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item v-for="(answer, index) in answers" :key="index" @click="selectAnswer(index)">{{ answer }}</b-list-group-item>
      </b-list-group>
      <!-- <p v-for="(answer, index) in answers" :key="index">{{ answer }}</p> -->

      <div class="mt-5">
        <b-button variant="primary" class="mr-1">Submit</b-button>
        <b-button @click="next" variant="success" class="ml-1">Next</b-button>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "QuestionBox",
  props: {
    // Accepting props from the parent -> <QuestionBox :currentQuestion="questions[index]...." />
    currentQuestion: Object,
    next: Function
  },
  data() {
    return {
      selectedIndex: null
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
      // console.log(index);
    }
  }
};
</script>

<style scoped>
  .list-group {
    cursor: pointer;
  }

  .list-group-item:hover {
    background-color: #EEE;
  }
</style>