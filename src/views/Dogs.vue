<template>
  <div>
    <h1 class="text-center m-4">Dogs for Adoption</h1>
    <b-container>
      <b-table striped hover :items="dogs" />
    </b-container>
  </div>
</template>

<script>
// importing Cats data from data folder and showing it in the table
import Dogs from "../data/dogs";

export default {
  data() {
    return {
      dogs: Dogs
    };
  }
};
</script>