<template>
  <b-container>
    <h1 class="text-center m-3">{{ species }} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </b-container>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
};
</script>