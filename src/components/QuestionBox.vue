<template>
  <div class="question-box-container">
    <b-jumbotron class="text-center">
      <template slot="lead">
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item 
        v-for="(answer, index) in answers" 
        :key="index" 
        @click="selectAnswer(index)" 
        :class="answerClass(index)">{{ answer }}</b-list-group-item>
      </b-list-group>
      <!-- <p v-for="(answer, index) in answers" :key="index">{{ answer }}</p> -->

      <div class="mt-5">
        <b-button @click="previous" variant="success">Previous</b-button>
        <b-button @click="submitAnswer" :disabled="selectedIndex === null || answered" variant="primary">Submit</b-button>
        <b-button @click="next" variant="success">Next</b-button>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "QuestionBox",
  props: {
    // Accepting props from the parent -> <QuestionBox :currentQuestion="questions[index]...." />
    currentQuestion: Object,
    previous: Function,
    next: Function,
    increment: Function
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
      // console.log(index);
    },
    shuffleAnswers() {
      // shuffle the all the answers with lodash library
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
      this.shuffledAnswers = _.shuffle(answers);
      // finding the correct index
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      this.answered = true;
      this.increment(isCorrect);
    },
    answerClass(index) {
      let answerClass = '';

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected';
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct';
      } else if ((this.answered && this.selectedIndex === index) && this.correctIndex !== index) {
        answerClass = 'incorrect';
      }

      return answerClass;
    }
  }
};
</script>

<style scoped>
  button {
    margin: 0 0.5em;
  }

  button:nth-child(3) {
    padding: 0.35em 1.2em;
  }

  .list-group {
    cursor: pointer;
  }

  .list-group-item:hover {
    background-color: #EEE;
  }

  .selected {
    background-color: lightblue;
  }

  .correct {
    background-color: lightgreen;
  }

  .incorrect {
    background-color: red;
  }
</style>