<template>
  <div>
    <QuestionBoxHeader :numCorrect="numCorrect" :numTotal="numTotal" />

    <b-container class="bv-example-row mt-5">
      <b-row>
        <b-col sm="6" offset="3">
          <!-- QuestionBox is rendering only if the questions array is not empty -->
          <QuestionBox v-if="questions.length" :currentQuestion="questions[index]" :next="next" :increment="increment" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuestionBox from "../components/QuestionBox";
import QuestionBoxHeader from '../components/QuestionBoxHeader';

export default {
  name: "Quiz",
  components: {
    QuestionBox,
    QuestionBoxHeader
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  methods: {
    next() {
      this.index++;
      if (this.index == 10) {
        this.index = 0;
      }
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    }
  },
  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=10&category=27', {
      method: 'get'
    }).then((res) => {
      return res.json();
    }).then((jsonData) => {
        this.questions = jsonData.results;
        // console.log(this.questions);
    }).catch((err) => {
      console.log(err);
    });
  }
};
</script>

<style scoped>

</style>