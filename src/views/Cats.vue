<template>
  <div>
    <h1 class="text-center m-4">Cats for Adoption</h1>
    <b-container>
      <b-table striped hover :items="cats">
        <template slot="name" slot-scope="data">
          <router-link :to="`/pets/${data.index}`">{{ data.value }}</router-link>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
// importing Cats data from data folder and showing it in the table
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
      ...mapState([
          'cats'
      ])
  }
};
</script>