<template>
  <b-container class="bv-example-row mt-5">
    <b-row>
      <b-col sm="6" offset="3">
        <QuizCmp />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import QuizCmp from "../components/QuizCmp";

export default {
  name: "Quiz",
  components: {
    QuizCmp
  }
};
</script>

<style scoped>
</style>