<template>
  <b-container>
    <b-table striped hover :items="dogs" />
  </b-container>
</template>

<script>
import Dogs from "../data/dogs";

export default {
  data() {
    return {
      dogs: Dogs
    };
  }
};
</script>