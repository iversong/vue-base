<template>
  <div class="page-container">
    <h1>Shoot!</h1>
    <h2>Well, this is unexpected…</h2>
    <h5>Error code: 500</h5>
    <p>An error has occurred and we're working to fix the problem! We’ll be up and running
          shortly.</p>
  </div>
</template>

<script>
export default {
  name: 'Error500',
  data () {
    return {
      msg: 'Well, this is unexpected…'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
