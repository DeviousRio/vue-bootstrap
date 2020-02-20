<template>
  <div class="m-5">
    <h1 class="text-center m-3">{{ species.charAt(0).toUpperCase() + species.slice(1) }} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
};
</script>