<template>
    <b-nav class="mt-2">
      <b-nav-item disabled><b>Fancy Quiz</b></b-nav-item>
      <b-nav-item disabled><b>Counter: {{ numCorrect }}/{{ numTotal }}</b></b-nav-item>
    </b-nav>
</template>

<script>
export default {
    name: 'QuestionBoxHeader',
    props: [
        'numCorrect',
        'numTotal'
    ]
}
</script>