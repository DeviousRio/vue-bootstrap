<template>
  <b-container>
    <b-table striped hover :items="cats" />
  </b-container>
</template>

<script>
import Cats from "../data/cats";

export default {
  data() {
    return {
      cats: Cats
    };
  }
};
</script>