<template>
  <div class="question-box-container">
    <b-jumbotron class="text-center">
      <template slot="lead">
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <b-button variant="primary" class="mr-1">Submit</b-button>
      <b-button variant="success" class="ml-1">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "QuestionBox",
  props: {
    // Accepting props from the parent -> <QuestionBox :currentQuestion="questions[index]" />
    currentQuestion: Object
  }
};
</script>

<style scoped>

</style>