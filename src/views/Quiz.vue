<template>
  <div>
    <b-nav class="mt-2">
      <b-nav-item disabled><b>Fancy Quiz</b></b-nav-item>
      <b-nav-item disabled><b>Counter: 4/10</b></b-nav-item>
    </b-nav>

    <b-container class="bv-example-row mt-5">
      <b-row>
        <b-col sm="6" offset="3">
          <!-- QuestionBox is rendering only if the questions array is not empty -->
          <QuestionBox v-if="questions.length" :currentQuestion="questions[index]" :next="next" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuestionBox from "../components/QuestionBox";

export default {
  name: "Quiz",
  components: {
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0
    }
  },
  methods: {
    next() {
      this.index++;
      if (this.index == 10) {
        this.index = 0;
      }
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